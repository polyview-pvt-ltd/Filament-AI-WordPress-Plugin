# JWT Authentication and WordPress Pricing — Implementation Guide

This document explains how **JWT Authentication** and **WordPress Pricing** were implemented in the Filament AI project. It is written in simple English for beginners.

---

## Table of Contents

1. [Feature 1: JWT Authentication](#feature-1-jwt-authentication)
2. [Feature 2: WordPress Pricing](#feature-2-wordpress-pricing)
3. [Combined File Summary](#11-combined-file-summary)

---

# Feature 1: JWT Authentication

## 1. Task Overview

### Purpose of the feature

JWT (JSON Web Token) authentication protects the FastAPI backend so only authorized users can upload STL files. Instead of sending a username and password with every upload request, the frontend logs in once, receives a token, and sends that token on later requests.

### Why it was implemented

The old system used **HTTP Basic Authentication**. Every upload request sent the username and password in the request header. This caused several problems:

- Credentials were sent repeatedly on every upload.
- Local development failed due to CORS (Cross-Origin Resource Sharing) errors.
- The `.env` file was not always loaded correctly when the server started from a different folder.
- Basic auth is harder to manage when the frontend runs on a different domain (WordPress) than the backend (FastAPI).

JWT auth fixes these issues by separating **login** (one-time credential check) from **upload** (token-based access).

---

## 2. Workflow

Here is the complete flow from WordPress to the FastAPI backend and back to the frontend:

```
WordPress Admin
    │
    │  Admin saves backend URL, username, and password
    ▼
WordPress Frontend Page
    │
    │  wp_localize_script() creates window.filamentAI
    │  (backendUrl, username, password)
    ▼
Vue Dashboard (Browser)
    │
    │  User uploads an STL file
    ▼
authService.js — getValidAccessToken()
    │
    ├─ Token in sessionStorage? ──Yes──► Use existing token
    │
    └─ No valid token?
           │
           ▼
       POST /login  { username, password }
           │
           ▼
       FastAPI auth_api.py
           │
           │  Checks credentials against .env
           │  Creates JWT with username + expiry
           ▼
       Returns { access_token, token_type: "bearer" }
           │
           ▼
       Token saved in sessionStorage
           │
           ▼
uploadService.js — POST /upload-stl
    │
    │  Header: Authorization: Bearer <token>
    │  Body: STL file + form fields
    ▼
FastAPI upload_api.py
    │
    │  verify_jwt dependency checks the token
    │  If valid → runs STL/AI/slicing pipeline
    │  If invalid → returns 401 Unauthorized
    ▼
JSON response sent back to Vue dashboard
```

**On 401 error:** The frontend clears the stored token, logs in again, and retries the upload once.

---

## 3. Files Created

| File Path | Purpose | What Was Implemented |
|-----------|---------|----------------------|
| `FILAMENT-AI-SYSTEM/backend/security/config.py` | Central place to read all auth settings from `.env` | Loads `BASIC_AUTH_USERNAME`, `BASIC_AUTH_PASSWORD`, `JWT_SECRET_KEY`, `JWT_ALGORITHM`, and `JWT_EXPIRE_MINUTES`. Uses an explicit path to `backend/.env` so settings load correctly regardless of where uvicorn is started. |
| `FILAMENT-AI-SYSTEM/backend/security/jwt_handler.py` | Create and verify JWT tokens | `create_access_token(username)` builds a signed token with `sub` (username) and `exp` (expiry). `decode_access_token(token)` verifies the signature and expiry. Uses PyJWT with HS256. |
| `FILAMENT-AI-SYSTEM/backend/api/auth_api.py` | Public login endpoint | `POST /login` accepts JSON `{ username, password }`. Returns `{ access_token, token_type: "bearer" }` on success. Returns 401 on wrong credentials. |
| `FILAMENT-AI-SYSTEM/filament-dashboard/src/api/authService.js` | Frontend token management | Reads/writes token in `sessionStorage`. Checks token expiry client-side (30-second buffer). Calls `/login` when a new token is needed. Exports `getValidAccessToken()`. |
| `FILAMENT-AI-SYSTEM/backend/security/__init__.py` | Python package marker | Empty file that makes `security/` a Python package. |

---

## 4. Files Modified

| File Path | Purpose | Changes Made | Why Required |
|-----------|---------|--------------|--------------|
| `FILAMENT-AI-SYSTEM/backend/security/auth.py` | Auth guard for protected routes | Removed `HTTPBasic` and `verify_basic_auth`. Added `authenticate_user()` and `verify_jwt()` using `HTTPBearer`. | Backend must accept Bearer tokens instead of Basic auth headers. |
| `FILAMENT-AI-SYSTEM/backend/main.py` | FastAPI app entry point | Added `auth_router` for `/login`. Added CORS origins for Vite dev server (`:5173` ports). | Expose the login endpoint. Fix CORS errors during local development. |
| `FILAMENT-AI-SYSTEM/backend/api/upload_api.py` | STL upload endpoint | Changed `Depends(verify_basic_auth)` to `Depends(verify_jwt)`. | Upload route must be protected with JWT instead of Basic auth. |
| `FILAMENT-AI-SYSTEM/filament-dashboard/src/api/uploadService.js` | Frontend upload logic | Removed axios `auth: { username, password }`. Added Bearer token header via `getValidAccessToken()`. Added 401 retry logic (clear token → re-login → retry). | Frontend must match the new JWT-based backend. |
| `FILAMENT-AI-SYSTEM/filament-dashboard/vite.config.js` | Vite dev server config | Added `/login` proxy pointing to `http://127.0.0.1:8000`. | Allows same-origin login requests during local development (avoids CORS). |
| `Filament WordPress/.../plugins/filament-ai/build/assets/index.js` | Bundled Vue app in WordPress plugin | Rebuilt bundle includes JWT login and Bearer token logic. | WordPress serves the compiled frontend; source changes must be built and copied here. |

---

## 5. Backend Changes

### JWT authentication

- **Login endpoint:** `POST /login` in `auth_api.py` validates credentials using timing-safe comparison (`secrets.compare_digest`).
- **Token creation:** `jwt_handler.py` creates a token with payload `{ "sub": username, "exp": expiry_datetime }`.
- **Token verification:** `verify_jwt()` in `auth.py` reads the `Authorization: Bearer <token>` header, decodes the JWT, and returns the username.
- **Configuration:** All settings come from `backend/.env`:
  - `BASIC_AUTH_USERNAME` / `BASIC_AUTH_PASSWORD` — login credentials (same names as before for WordPress compatibility)
  - `JWT_SECRET_KEY` — secret used to sign tokens (required)
  - `JWT_ALGORITHM` — default `HS256`
  - `JWT_EXPIRE_MINUTES` — default `60` minutes

### Protected APIs

| Endpoint | Auth Required | Notes |
|----------|---------------|-------|
| `POST /login` | No (public) | Issues JWT tokens |
| `POST /upload-stl` | Yes — `Depends(verify_jwt)` | Only protected route in the codebase |

There is no global JWT middleware. Each route uses FastAPI's `Depends()` system individually.

### Pricing request parameters

Not applicable to JWT authentication.

### Cost calculation changes

Not applicable to JWT authentication.

---

## 6. WordPress Changes

JWT logic lives in the Vue app and FastAPI backend. WordPress PHP files were **not changed for JWT**, but they provide the credentials the frontend needs to log in.

### Settings page

**File:** `plugins/filament-ai/includes/class-filament-ai-settings.php`

- Menu: **Filament AI** (top-level admin menu)
- Fields saved to `wp_options`:
  - `filament_ai_backend_url` — FastAPI URL (default placeholder: `http://127.0.0.1:8000`)
  - `filament_ai_backend_username` — backend login username
  - `filament_ai_backend_password` — backend login password

### Pricing page

Not part of JWT authentication.

### Saving settings

Uses the standard WordPress Settings API. Admin fills in the form and clicks **Save Changes**. Values are stored in the WordPress database (`wp_options` table).

### Passing values to Vue using `wp_localize_script()`

**File:** `plugins/filament-ai/includes/class-filament-ai-assets.php`

```php
wp_localize_script(
    'filament-ai-script',
    'filamentAI',
    [
        'backendUrl' => get_option('filament_ai_backend_url', 'http://127.0.0.1:8000'),
        'username'   => get_option('filament_ai_backend_username', ''),
        'password'   => get_option('filament_ai_backend_password', ''),
        // ... pricing keys (see Feature 2)
    ]
);
```

This creates a global JavaScript object `window.filamentAI` that the Vue app reads at runtime.

---

## 7. Frontend Changes

### JWT login

**File:** `filament-dashboard/src/api/authService.js`

- Reads `window.filamentAI.username` and `window.filamentAI.password`.
- Sends `POST ${apiBase}/login` with JSON body.
- Stores the returned `access_token` in `sessionStorage` under key `filament_ai_access_token`.

### Token storage and refresh

- **Storage:** `sessionStorage` (cleared when the browser tab is closed).
- **Validation:** Client decodes the JWT payload and checks the `exp` (expiry) claim with a 30-second safety buffer.
- **Refresh:** There is **no refresh token endpoint**. When the token is missing or expired, the app calls `/login` again automatically.
- **401 retry:** If upload returns 401, the token is cleared, a fresh login happens, and the upload is retried once.

### Upload API

**File:** `filament-dashboard/src/api/uploadService.js`

- Before upload: calls `getValidAccessToken()`.
- Sends header: `Authorization: Bearer ${accessToken}`.
- Removed old axios `auth: { username, password }` Basic auth.

### Sending pricing values

Not part of JWT authentication (see Feature 2).

---

## 8. Testing

### JWT authentication tests

No automated unit tests exist for JWT. Testing was done manually.

### Swagger testing

1. Start the backend: `cd backend && uvicorn main:app --reload`
2. Open Swagger UI: `http://127.0.0.1:8000/docs`
3. Test `POST /login` with valid credentials — expect `{ access_token, token_type: "bearer" }`
4. Copy the token and use it in `POST /upload-stl` via the **Authorize** button or manual `Authorization: Bearer <token>` header

### Pricing page testing

Not applicable to JWT authentication.

### Upload testing

**Using curl — login:**

```bash
curl -X POST http://127.0.0.1:8000/login \
  -H "Content-Type: application/json" \
  -d '{"username":"YOUR_USER","password":"YOUR_PASS"}'
```

**Using curl — upload with token:**

```bash
curl -X POST http://127.0.0.1:8000/upload-stl \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -F "file=@test.stl" \
  -F "use_case=prototype" \
  -F "printer_type=PLA" \
  -F "printer_key=x1c" \
  -F "electricity_cost=8" \
  -F "labour_cost=50" \
  -F "profit_margin=20" \
  -F "tax=18"
```

**Upload without token:** Should return **401 Unauthorized**.

**Dashboard test:** Upload an STL from the Vite dev server or WordPress page. The app should log in automatically, then upload successfully.

### Cost calculation verification with different pricing values

Not applicable to JWT authentication.

---

## 9. Problems Faced

| Issue | Cause | Solution |
|-------|-------|----------|
| Empty credentials in local dev | `window.filamentAI` is missing when running outside WordPress | Set credentials in WordPress settings, or configure `.env` and test via curl/Swagger |
| CORS blocked requests from Vite (`localhost:5173`) | `main.py` only allowed origins without port numbers | Added `http://localhost:5173` and `http://127.0.0.1:5173` to CORS allowed origins |
| Direct backend URL bypassed Vite proxy | `apiBase` defaulted to `http://127.0.0.1:8000`, causing cross-origin requests | Changed default `apiBase` to `''` so dev requests use the Vite proxy (same origin) |
| `.env` not loading | `load_dotenv()` used the current working directory | Created `config.py` with explicit path: `load_dotenv(backend/.env)` |
| Frontend still sent Basic auth after backend JWT migration | `uploadService.js` had not been updated | Replaced Basic auth with login + Bearer token flow |
| 401 on expired token during upload | Token expired mid-session | Added automatic re-login and single retry on 401 |
| CORS on production WordPress sites | CORS only allows localhost origins | Production deployments must add the WordPress site domain to `allow_origins` in `main.py` |

---

## 10. Final Result

JWT authentication is fully working:

- Users log in once via `POST /login` and receive a short-lived access token.
- The Vue dashboard stores the token in `sessionStorage` and sends it on every upload.
- The `POST /upload-stl` endpoint is protected by `verify_jwt`.
- WordPress passes backend URL and credentials to the frontend via `wp_localize_script()`.
- Local development works through the Vite proxy without CORS errors.
- The STL/AI/slicing pipeline itself was **not changed** — only the auth layer around it.

---

# Feature 2: WordPress Pricing

## 1. Task Overview

### Purpose of the feature

Allow WordPress administrators to configure pricing values (electricity cost, labour cost, profit margin, and tax) from the WordPress admin panel. These values are sent to the FastAPI backend on every STL upload and used to calculate the final print cost.

### Why it was implemented

Previously, electricity and labour costs were hardcoded in the backend `.env` file or Python constants. Business owners could not change pricing without editing server files. Profit margin and tax were not included in the calculation at all.

Moving pricing to WordPress lets non-technical users update costs from a simple admin form, and each upload can use the latest saved values.

---

## 2. Workflow

Here is the complete pricing flow from WordPress to the backend and back to the frontend:

```
WordPress Admin
    │
    │  Admin opens Filament AI → Pricing
    │  Sets: electricity, labour, profit margin, tax
    │  Clicks Save Changes
    ▼
WordPress Database (wp_options)
    │
    │  filament_ai_electricity_cost
    │  filament_ai_labour_cost
    │  filament_ai_profit_margin
    │  filament_ai_tax
    ▼
Frontend Page Load
    │
    │  class-filament-ai-assets.php
    │  wp_localize_script() → window.filamentAI
    │  (electricityCost, labourCost, profitMargin, tax)
    ▼
Vue Dashboard — User uploads STL
    │
    │  uploadService.js appends pricing as form fields:
    │  electricity_cost, labour_cost, profit_margin, tax
    ▼
FastAPI POST /upload-stl
    │
    │  upload_api.py receives Form(...) parameters
    │  Runs STL validation → AI analysis → Bambu slicing
    │  Gets real weight_g and print_time_hours from slicer
    ▼
cost_calculator.py — calculate_print_cost()
    │
    │  material_cost + support_cost + electricity
    │  + labour + depreciation
    │  → sub_total
    │  → profit = sub_total × (profit_margin / 100)
    │  → tax = (sub_total + profit) × (tax / 100)
    │  → total_cost = sub_total + profit + tax
    ▼
API response includes cost_analysis object
    │
    ▼
mapApiResponse.js maps cost data for UI
    │
    ▼
CostAnalysisCard.vue displays Final Cost
```

---

## 3. Files Created

| File Path | Purpose | What Was Implemented |
|-----------|---------|----------------------|
| `Filament WordPress/.../plugins/filament-ai/includes/class-filament-ai-pricing.php` | WordPress admin pricing page | Submenu **Pricing** under Filament AI. Registers 4 settings in `filament_ai_pricing_group`. Renders a form with electricity, labour, profit margin, and tax fields. Saves values via WordPress Settings API. |
| `FILAMENT-AI-SYSTEM/backend/cost/cost_calculator.py` | Backend cost calculation engine | Calculates material, support, electricity, labour, and depreciation costs. Extended to accept dynamic pricing parameters and compute profit and tax. Returns detailed `cost_analysis` object. |

---

## 4. Files Modified

| File Path | Purpose | Changes Made | Why Required |
|-----------|---------|--------------|--------------|
| `Filament WordPress/.../plugins/filament-ai/filament-ai.php` | Plugin bootstrap | Added `require_once` for `class-filament-ai-pricing.php` and `new Filament_AI_Pricing()`. | Load and activate the pricing admin page. |
| `Filament WordPress/.../plugins/filament-ai/includes/class-filament-ai-assets.php` | Pass settings to Vue | Added 4 pricing keys to `wp_localize_script()`: `electricityCost`, `labourCost`, `profitMargin`, `tax`. | Frontend needs pricing values from WordPress on every page load. |
| `Filament WordPress/.../plugins/filament-ai/build/assets/index.js` | Bundled Vue app | Rebuilt bundle includes pricing `formData.append(...)` calls. | Deployed WordPress plugin must send pricing on upload. |
| `Filament WordPress/.../plugins/filament-ai/build/assets/index.css` | Bundled styles | Rebuilt as part of Vite build output. | Keeps CSS in sync with the JS build. |
| `FILAMENT-AI-SYSTEM/backend/api/upload_api.py` | Upload endpoint | Added 4 required `Form(...)` parameters: `electricity_cost`, `labour_cost`, `profit_margin`, `tax`. Passes them to `calculate_print_cost()`. | Backend must accept per-request pricing from WordPress. |
| `FILAMENT-AI-SYSTEM/backend/cost/cost_calculator.py` | Cost engine | Commented out env-based constants. Added function parameters for pricing. Added profit and tax to the formula. Returns `profit_amount` and `tax_amount`. | Dynamic pricing replaces hardcoded values. |
| `FILAMENT-AI-SYSTEM/filament-dashboard/src/api/uploadService.js` | Frontend upload | Appends 4 pricing fields from `window.filamentAI` to FormData. Uses fallback defaults if WordPress values are missing. | Send WordPress pricing settings with every upload. |
| `FILAMENT-AI-SYSTEM/filament-dashboard/src/utils/mapApiResponse.js` | API response mapper | Maps `cost_analysis` fields to UI strings. Applies `finalCostWithMarkup()` (2× multiplier) for display. | Show cost breakdown and final price in the dashboard. |
| `FILAMENT-AI-SYSTEM/filament-dashboard/src/components/results/CostAnalysisCard.vue` | Cost display card | Simplified to show only `finalCost` with label "Final Cost (+ GST)". | Clean UI showing the calculated price to the user. |

---

## 5. Backend Changes

### JWT authentication

Not applicable to pricing (JWT protects the upload endpoint but pricing is separate logic).

### Protected APIs

The upload endpoint (`POST /upload-stl`) remains JWT-protected. Pricing values are sent as additional form fields on the same protected endpoint.

### Pricing request parameters

Four new **required** form fields on `POST /upload-stl`:

| Form Field | Type | Default (frontend fallback) | Meaning |
|------------|------|----------------------------|---------|
| `electricity_cost` | float | `8` | Cost per kWh in ₹ |
| `labour_cost` | float | `50` | Labour cost per hour in ₹ |
| `profit_margin` | float | `20` | Profit percentage applied on subtotal |
| `tax` | float | `18` | Tax percentage applied on (subtotal + profit) |

Defined in `upload_api.py`:

```python
electricity_cost: float = Form(...),
labour_cost: float = Form(...),
profit_margin: float = Form(...),
tax: float = Form(...),
```

### Cost calculation changes

**Before:** Electricity and labour came from `.env` variables. Total cost was just the sum of material, support, electricity, labour, and depreciation — no profit or tax.

**After:** Pricing comes from the upload request. Formula in `cost_calculator.py`:

```
material_cost      = (weight_g / 1000) × cost_per_kg
support_cost       = material_cost × (overhang_volume_percentage / 100)
electricity_cost   = (printer.power / 1000) × print_time_hours × electricity_cost
labour_cost        = print_time_hours × labour_cost
depreciation_cost  = print_time_hours × printer.depreciation

sub_total          = material + support + electricity + labour + depreciation
profit_amount      = sub_total × (profit_margin / 100)
tax_amount         = (sub_total + profit_amount) × (tax / 100)
total_cost         = sub_total + profit_amount + tax_amount
```

**Printer configurations used:**

| Key | Name | Depreciation (₹/hr) | Power (W) |
|-----|------|---------------------|-----------|
| `x1c` | Bambulab X1C | 19.1 | 150 |
| `p1s` | Bambulab P1S | 8.7 | 150 |
| `a1` | Bambulab A1 | 6.0 | 120 |

**Response fields** (`cost_analysis` in API JSON):

- `material_cost`, `support_cost`, `electricity_cost`, `labor_cost`, `depreciation_cost`
- `profit_amount`, `tax_amount` (new)
- `total_cost`, `weight_g`, `print_time_hours`, `filament_type`

---

## 6. WordPress Changes

### Settings page

**File:** `includes/class-filament-ai-settings.php`

Handles backend connection settings only (URL, username, password). Does **not** contain pricing fields.

### Pricing page

**File:** `includes/class-filament-ai-pricing.php`

- Submenu: **Filament AI → Pricing** (slug: `filament-ai-pricing`)
- Option group: `filament_ai_pricing_group`

| WordPress Option | UI Label | Default Value |
|------------------|----------|---------------|
| `filament_ai_electricity_cost` | Electricity Cost (₹/kWh) | 8 |
| `filament_ai_labour_cost` | Labour Cost (₹/Hour) | 50 |
| `filament_ai_profit_margin` | Profit Margin (%) | 20 |
| `filament_ai_tax` | Tax (%) | 18 |

### Saving settings

Standard WordPress Settings API flow:

1. Admin fills in the pricing form.
2. Form submits to `options.php`.
3. WordPress saves values in the `wp_options` table.
4. No custom validation or sanitization callbacks are defined (any numeric value, including negatives, can be saved).

### Passing values to Vue using `wp_localize_script()`

**File:** `includes/class-filament-ai-assets.php`

```php
'electricityCost' => get_option('filament_ai_electricity_cost', 8),
'labourCost'      => get_option('filament_ai_labour_cost', 50),
'profitMargin'    => get_option('filament_ai_profit_margin', 20),
'tax'             => get_option('filament_ai_tax', 18),
```

The Vue app reads these from `window.filamentAI` at upload time.

---

## 7. Frontend Changes

### JWT login

Pricing values are sent on the same authenticated upload request. JWT login must succeed before pricing values are sent (see Feature 1).

### Token storage and refresh

Not changed for pricing.

### Upload API

**File:** `filament-dashboard/src/api/uploadService.js`

Appends pricing to FormData before upload:

```javascript
formData.append('electricity_cost', window.filamentAI?.electricityCost || '8')
formData.append('labour_cost', window.filamentAI?.labourCost || '50')
formData.append('profit_margin', window.filamentAI?.profitMargin || '20')
formData.append('tax', window.filamentAI?.tax || '18')
```

If `window.filamentAI` is missing (standalone dev mode), hardcoded defaults are used.

### Sending pricing values

**Display mapping** — `mapApiResponse.js`:

- Reads `data.cost_analysis` from the API response.
- Formats each cost line item as a ₹ string.
- `finalCost` = `total_cost × 2` via `finalCostWithMarkup()` (100% markup applied for display).

**Display component** — `CostAnalysisCard.vue`:

- Shows only the `finalCost` value.
- Label: "Final Cost (+ GST)".

**Build pipeline:**

1. Edit source in `filament-dashboard/src/`
2. Run Vite build: `npm run build`
3. Copy `build/assets/index.js` and `index.css` to the WordPress plugin `build/assets/` folder

---

## 8. Testing

### JWT authentication tests

Pricing uploads require a valid JWT token. See Feature 1 testing section.

### Swagger testing

1. Authorize with a Bearer token in Swagger UI.
2. Call `POST /upload-stl` and include all 4 pricing form fields.
3. Without pricing fields, the API returns **422 Unprocessable Entity** (fields are required).

### Pricing page testing

1. Log in to WordPress admin.
2. Go to **Filament AI → Pricing**.
3. Change values (e.g., set electricity cost to `10`, profit margin to `25`).
4. Click **Save Changes**.
5. Reload the frontend page and upload an STL.
6. Verify the backend receives the new values (check server console debug prints or API response).

### Upload testing

Upload an STL file from the WordPress page or Vite dev server. Confirm the API response includes a `cost_analysis` object with all cost fields.

### Cost calculation verification with different pricing values

Test with different WordPress pricing settings and compare results:

| Test Case | Electricity | Labour | Profit % | Tax % | What to Check |
|-----------|-------------|--------|----------|-------|---------------|
| Defaults | 8 | 50 | 20 | 18 | Baseline total_cost |
| High electricity | 16 | 50 | 20 | 18 | electricity_cost line item should roughly double |
| High profit | 8 | 50 | 40 | 18 | profit_amount should increase |
| Zero tax | 8 | 50 | 20 | 0 | tax_amount should be 0 |
| High labour | 8 | 100 | 20 | 18 | labor_cost line item should increase |

Verify each line item in `cost_analysis` and the final `total_cost` match the formula in Section 5.

---

## 9. Problems Faced

| Issue | Cause | Solution |
|-------|-------|----------|
| Cost could not be changed without editing server files | Electricity and labour were hardcoded in `.env` / Python constants | Moved pricing to WordPress admin and pass values per upload request |
| Profit and tax were missing from total | Old formula only summed material, support, electricity, labour, and depreciation | Added `profit_amount` and `tax_amount` to `calculate_print_cost()` |
| Frontend did not send pricing to backend | `uploadService.js` only sent file and printer fields | Added 4 `formData.append()` calls reading from `window.filamentAI` |
| WordPress plugin missing pricing admin page | No PHP class for pricing settings | Created `class-filament-ai-pricing.php` and registered it in `filament-ai.php` |
| API returns 422 when pricing fields missing | New Form fields marked as required (`Form(...)`) | Frontend must always send all 4 pricing fields; defaults used when WordPress settings unavailable |
| Double markup in UI display | Backend `total_cost` already includes profit + tax, but `mapApiResponse.js` applies 2× multiplier | Known issue — `finalCostWithMarkup()` doubles the price for display. Consider showing `total_cost` directly or removing one layer of markup |
| API documentation outdated | `UPLOAD_STL_API_DOCUMENTATION.md` does not list pricing fields | Documentation needs update to include the 4 required pricing form fields |
| Debug prints in production | `upload_api.py` prints pricing values on every upload | Remove or replace with proper logging before production deployment |
| WordPress plugin not in git | `wp-app/` folder is gitignored | Pricing PHP changes exist on disk but are not version-controlled in the WordPress repo |

---

## 10. Final Result

WordPress Pricing is fully integrated:

- Admins configure electricity, labour, profit margin, and tax from **Filament AI → Pricing** in WordPress.
- Values are saved in the WordPress database and passed to Vue via `wp_localize_script()`.
- Every STL upload sends pricing as form fields to the FastAPI backend.
- `calculate_print_cost()` uses these values to compute a detailed cost breakdown including profit and tax.
- The dashboard displays the final cost in the **Cost Analysis** card.

Administrators can now update pricing without touching server code or `.env` files.

---

## 11. Combined File Summary

| File | Created / Modified | Purpose |
|------|-------------------|---------|
| `FILAMENT-AI-SYSTEM/backend/security/config.py` | Created | Load auth and JWT settings from `.env` |
| `FILAMENT-AI-SYSTEM/backend/security/jwt_handler.py` | Created | Create and decode JWT access tokens |
| `FILAMENT-AI-SYSTEM/backend/security/__init__.py` | Created | Python package marker for `security/` |
| `FILAMENT-AI-SYSTEM/backend/api/auth_api.py` | Created | `POST /login` endpoint |
| `FILAMENT-AI-SYSTEM/backend/security/auth.py` | Modified | JWT Bearer auth (replaced HTTP Basic) |
| `FILAMENT-AI-SYSTEM/backend/main.py` | Modified | Register auth router; fix CORS for Vite dev |
| `FILAMENT-AI-SYSTEM/backend/api/upload_api.py` | Modified | JWT protection + pricing Form parameters |
| `FILAMENT-AI-SYSTEM/backend/cost/cost_calculator.py` | Created / Modified | Cost engine with dynamic pricing, profit, and tax |
| `FILAMENT-AI-SYSTEM/backend/.env` | Modified (local, not in git) | JWT secret key and auth credentials |
| `FILAMENT-AI-SYSTEM/filament-dashboard/src/api/authService.js` | Created | Frontend JWT login and token storage |
| `FILAMENT-AI-SYSTEM/filament-dashboard/src/api/uploadService.js` | Modified | Bearer token upload + pricing form fields |
| `FILAMENT-AI-SYSTEM/filament-dashboard/vite.config.js` | Modified | Proxy `/login` to backend in dev |
| `FILAMENT-AI-SYSTEM/filament-dashboard/src/utils/mapApiResponse.js` | Modified | Map `cost_analysis` to UI; final cost markup |
| `FILAMENT-AI-SYSTEM/filament-dashboard/src/components/results/CostAnalysisCard.vue` | Modified | Display final cost in dashboard |
| `Filament WordPress/.../plugins/filament-ai/filament-ai.php` | Modified | Load pricing class |
| `Filament WordPress/.../plugins/filament-ai/includes/class-filament-ai-pricing.php` | Created | WordPress pricing admin page |
| `Filament WordPress/.../plugins/filament-ai/includes/class-filament-ai-assets.php` | Modified | Pass backend credentials and pricing to Vue |
| `Filament WordPress/.../plugins/filament-ai/includes/class-filament-ai-settings.php` | Unchanged (related) | Backend URL, username, password settings |
| `Filament WordPress/.../plugins/filament-ai/includes/class-filament-ai.php` | Unchanged (related) | Plugin bootstrap |
| `Filament WordPress/.../plugins/filament-ai/includes/class-filament-ai-shortcode.php` | Unchanged (related) | Renders Vue mount point `[filament_ai]` |
| `Filament WordPress/.../plugins/filament-ai/templates/app-template.php` | Unchanged (related) | Full-page template for Filament AI page |
| `Filament WordPress/.../plugins/filament-ai/build/assets/index.js` | Modified | Rebuilt Vue bundle with JWT + pricing |
| `Filament WordPress/.../plugins/filament-ai/build/assets/index.css` | Modified | Rebuilt styles from Vite build |
| `Filament WordPress/.../plugins/filament-ai/readme.txt` | Unchanged (related) | Plugin readme |
| `Filament WordPress/.../plugins/filament-ai/uninstall.php` | Unchanged (related) | Plugin uninstall hook (empty — no option cleanup) |
| `FILAMENT-AI-SYSTEM/.cursor/plans/jwt_auth_migration_84d6aa7f.plan.md` | Created | JWT migration plan and troubleshooting notes |

---

*Document generated for the Filament AI project — JWT Authentication and WordPress Pricing implementation.*
