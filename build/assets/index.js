(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Pc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const yt={},Us=[],Kn=()=>{},Xd=()=>!1,Qo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ea=t=>t.startsWith("onUpdate:"),en=Object.assign,Dc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},fm=Object.prototype.hasOwnProperty,pt=(t,e)=>fm.call(t,e),je=Array.isArray,Ns=t=>Dr(t)==="[object Map]",ta=t=>Dr(t)==="[object Set]",Du=t=>Dr(t)==="[object Date]",tt=t=>typeof t=="function",Dt=t=>typeof t=="string",Nn=t=>typeof t=="symbol",vt=t=>t!==null&&typeof t=="object",qd=t=>(vt(t)||tt(t))&&tt(t.then)&&tt(t.catch),jd=Object.prototype.toString,Dr=t=>jd.call(t),dm=t=>Dr(t).slice(8,-1),$d=t=>Dr(t)==="[object Object]",Lc=t=>Dt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pr=Pc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),na=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},hm=/-\w/g,In=na(t=>t.replace(hm,e=>e.slice(1).toUpperCase())),pm=/\B([A-Z])/g,ds=na(t=>t.replace(pm,"-$1").toLowerCase()),Yd=na(t=>t.charAt(0).toUpperCase()+t.slice(1)),wa=na(t=>t?`on${Yd(t)}`:""),jn=(t,e)=>!Object.is(t,e),bo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Kd=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},ia=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Lu;const sa=()=>Lu||(Lu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ra(t){if(je(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Dt(i)?xm(i):ra(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Dt(t)||vt(t))return t}const mm=/;(?![^(]*\))/g,gm=/:([^]+)/,_m=/\/\*[^]*?\*\//g;function xm(t){const e={};return t.replace(_m,"").split(mm).forEach(n=>{if(n){const i=n.split(gm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ot(t){let e="";if(Dt(t))e=t;else if(je(t))for(let n=0;n<t.length;n++){const i=Ot(t[n]);i&&(e+=i+" ")}else if(vt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const vm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sm=Pc(vm);function Zd(t){return!!t||t===""}function bm(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Lr(t[i],e[i]);return n}function Lr(t,e){if(t===e)return!0;let n=Du(t),i=Du(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Nn(t),i=Nn(e),n||i)return t===e;if(n=je(t),i=je(e),n||i)return n&&i?bm(t,e):!1;if(n=vt(t),i=vt(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Lr(t[o],e[o]))return!1}}return String(t)===String(e)}function ym(t,e){return t.findIndex(n=>Lr(n,e))}const Jd=t=>!!(t&&t.__v_isRef===!0),ot=t=>Dt(t)?t:t==null?"":je(t)||vt(t)&&(t.toString===jd||!tt(t.toString))?Jd(t)?ot(t.value):JSON.stringify(t,Qd,2):String(t),Qd=(t,e)=>Jd(e)?Qd(t,e.value):Ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[Ra(i,r)+" =>"]=s,n),{})}:ta(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ra(n))}:Nn(e)?Ra(e):vt(e)&&!je(e)&&!$d(e)?String(e):e,Ra=(t,e="")=>{var n;return Nn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Vt;class Mm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Vt&&(Vt.active?(this.parent=Vt,this.index=(Vt.scopes||(Vt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Vt;try{return Vt=this,e()}finally{Vt=n}}}on(){++this._on===1&&(this.prevScope=Vt,Vt=this)}off(){if(this._on>0&&--this._on===0){if(Vt===this)Vt=this.prevScope;else{let e=Vt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Em(){return Vt}let Et;const Ca=new WeakSet;class eh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Vt&&(Vt.active?Vt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ca.has(this)&&(Ca.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||nh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Iu(this),ih(this);const e=Et,n=Un;Et=this,Un=!0;try{return this.fn()}finally{sh(this),Et=e,Un=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Nc(e);this.deps=this.depsTail=void 0,Iu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ca.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){yl(this)&&this.run()}get dirty(){return yl(this)}}let th=0,mr,gr;function nh(t,e=!1){if(t.flags|=8,e){t.next=gr,gr=t;return}t.next=mr,mr=t}function Ic(){th++}function Uc(){if(--th>0)return;if(gr){let e=gr;for(gr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;mr;){let e=mr;for(mr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function ih(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function sh(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Nc(i),Tm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function yl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(rh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function rh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===yr)||(t.globalVersion=yr,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!yl(t))))return;t.flags|=2;const e=t.dep,n=Et,i=Un;Et=t,Un=!0;try{ih(t);const s=t.fn(t._value);(e.version===0||jn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Et=n,Un=i,sh(t),t.flags&=-3}}function Nc(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Nc(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Tm(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Un=!0;const oh=[];function vi(){oh.push(Un),Un=!1}function Si(){const t=oh.pop();Un=t===void 0?!0:t}function Iu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Et;Et=void 0;try{e()}finally{Et=n}}}let yr=0;class Am{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Et||!Un||Et===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Et)n=this.activeLink=new Am(Et,this),Et.deps?(n.prevDep=Et.depsTail,Et.depsTail.nextDep=n,Et.depsTail=n):Et.deps=Et.depsTail=n,ah(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Et.depsTail,n.nextDep=void 0,Et.depsTail.nextDep=n,Et.depsTail=n,Et.deps===n&&(Et.deps=i)}return n}trigger(e){this.version++,yr++,this.notify(e)}notify(e){Ic();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Uc()}}}function ah(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)ah(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ml=new WeakMap,rs=Symbol(""),El=Symbol(""),Mr=Symbol("");function Yt(t,e,n){if(Un&&Et){let i=Ml.get(t);i||Ml.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new Fc),s.map=i,s.key=n),s.track()}}function hi(t,e,n,i,s,r){const o=Ml.get(t);if(!o){yr++;return}const a=l=>{l&&l.trigger()};if(Ic(),e==="clear")o.forEach(a);else{const l=je(t),c=l&&Lc(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Mr||!Nn(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Mr)),e){case"add":l?c&&a(o.get("length")):(a(o.get(rs)),Ns(t)&&a(o.get(El)));break;case"delete":l||(a(o.get(rs)),Ns(t)&&a(o.get(El)));break;case"set":Ns(t)&&a(o.get(rs));break}}Uc()}function ms(t){const e=ht(t);return e===t?e:(Yt(e,"iterate",Mr),wn(t)?e:e.map(Fn))}function oa(t){return Yt(t=ht(t),"iterate",Mr),t}function Wn(t,e){return bi(t)?Gs(os(t)?Fn(e):e):Fn(e)}const wm={__proto__:null,[Symbol.iterator](){return Pa(this,Symbol.iterator,t=>Wn(this,t))},concat(...t){return ms(this).concat(...t.map(e=>je(e)?ms(e):e))},entries(){return Pa(this,"entries",t=>(t[1]=Wn(this,t[1]),t))},every(t,e){return si(this,"every",t,e,void 0,arguments)},filter(t,e){return si(this,"filter",t,e,n=>n.map(i=>Wn(this,i)),arguments)},find(t,e){return si(this,"find",t,e,n=>Wn(this,n),arguments)},findIndex(t,e){return si(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return si(this,"findLast",t,e,n=>Wn(this,n),arguments)},findLastIndex(t,e){return si(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return si(this,"forEach",t,e,void 0,arguments)},includes(...t){return Da(this,"includes",t)},indexOf(...t){return Da(this,"indexOf",t)},join(t){return ms(this).join(t)},lastIndexOf(...t){return Da(this,"lastIndexOf",t)},map(t,e){return si(this,"map",t,e,void 0,arguments)},pop(){return er(this,"pop")},push(...t){return er(this,"push",t)},reduce(t,...e){return Uu(this,"reduce",t,e)},reduceRight(t,...e){return Uu(this,"reduceRight",t,e)},shift(){return er(this,"shift")},some(t,e){return si(this,"some",t,e,void 0,arguments)},splice(...t){return er(this,"splice",t)},toReversed(){return ms(this).toReversed()},toSorted(t){return ms(this).toSorted(t)},toSpliced(...t){return ms(this).toSpliced(...t)},unshift(...t){return er(this,"unshift",t)},values(){return Pa(this,"values",t=>Wn(this,t))}};function Pa(t,e,n){const i=oa(t),s=i[e]();return i!==t&&!wn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const Rm=Array.prototype;function si(t,e,n,i,s,r){const o=oa(t),a=o!==t&&!wn(t),l=o[e];if(l!==Rm[e]){const f=l.apply(t,r);return a?Fn(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,Wn(t,f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Uu(t,e,n,i){const s=oa(t),r=s!==t&&!wn(t);let o=n,a=!1;s!==t&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=Wn(t,c)),n.call(this,c,Wn(t,u),f,t)}):n.length>3&&(o=function(c,u,f){return n.call(this,c,u,f,t)}));const l=s[e](o,...i);return a?Wn(t,l):l}function Da(t,e,n){const i=ht(t);Yt(i,"iterate",Mr);const s=i[e](...n);return(s===-1||s===!1)&&kc(n[0])?(n[0]=ht(n[0]),i[e](...n)):s}function er(t,e,n=[]){vi(),Ic();const i=ht(t)[e].apply(t,n);return Uc(),Si(),i}const Cm=Pc("__proto__,__v_isRef,__isVue"),lh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Nn));function Pm(t){Nn(t)||(t=String(t));const e=ht(this);return Yt(e,"has",t),e.hasOwnProperty(t)}class ch{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?zm:hh:r?dh:fh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=je(e);if(!s){let l;if(o&&(l=wm[n]))return l;if(n==="hasOwnProperty")return Pm}const a=Reflect.get(e,n,Qt(e)?e:i);if((Nn(n)?lh.has(n):Cm(n))||(s||Yt(e,"get",n),r))return a;if(Qt(a)){const l=o&&Lc(n)?a:a.value;return s&&vt(l)?Al(l):l}return vt(a)?s?Al(a):aa(a):a}}class uh extends ch{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];const o=je(e)&&Lc(n);if(!this._isShallow){const c=bi(r);if(!wn(i)&&!bi(i)&&(r=ht(r),i=ht(i)),!o&&Qt(r)&&!Qt(i))return c||(r.value=i),!0}const a=o?Number(n)<e.length:pt(e,n),l=Reflect.set(e,n,i,Qt(e)?e:s);return e===ht(s)&&(a?jn(i,r)&&hi(e,"set",n,i):hi(e,"add",n,i)),l}deleteProperty(e,n){const i=pt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&hi(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Nn(n)||!lh.has(n))&&Yt(e,"has",n),i}ownKeys(e){return Yt(e,"iterate",je(e)?"length":rs),Reflect.ownKeys(e)}}class Dm extends ch{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Lm=new uh,Im=new Dm,Um=new uh(!0);const Tl=t=>t,Gr=t=>Reflect.getPrototypeOf(t);function Nm(t,e,n){return function(...i){const s=this.__v_raw,r=ht(s),o=Ns(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Tl:e?Gs:Fn;return!e&&Yt(r,"iterate",l?El:rs),en(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function Wr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Fm(t,e){const n={get(s){const r=this.__v_raw,o=ht(r),a=ht(s);t||(jn(s,a)&&Yt(o,"get",s),Yt(o,"get",a));const{has:l}=Gr(o),c=e?Tl:t?Gs:Fn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&Yt(ht(s),"iterate",rs),s.size},has(s){const r=this.__v_raw,o=ht(r),a=ht(s);return t||(jn(s,a)&&Yt(o,"has",s),Yt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ht(a),c=e?Tl:t?Gs:Fn;return!t&&Yt(l,"iterate",rs),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return en(n,t?{add:Wr("add"),set:Wr("set"),delete:Wr("delete"),clear:Wr("clear")}:{add(s){const r=ht(this),o=Gr(r),a=ht(s),l=!e&&!wn(s)&&!bi(s)?a:s;return o.has.call(r,l)||jn(s,l)&&o.has.call(r,s)||jn(a,l)&&o.has.call(r,a)||(r.add(l),hi(r,"add",l,l)),this},set(s,r){!e&&!wn(r)&&!bi(r)&&(r=ht(r));const o=ht(this),{has:a,get:l}=Gr(o);let c=a.call(o,s);c||(s=ht(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?jn(r,u)&&hi(o,"set",s,r):hi(o,"add",s,r),this},delete(s){const r=ht(this),{has:o,get:a}=Gr(r);let l=o.call(r,s);l||(s=ht(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&hi(r,"delete",s,void 0),c},clear(){const s=ht(this),r=s.size!==0,o=s.clear();return r&&hi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Nm(s,t,e)}),n}function Oc(t,e){const n=Fm(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(pt(n,s)&&s in i?n:i,s,r)}const Om={get:Oc(!1,!1)},Bm={get:Oc(!1,!0)},km={get:Oc(!0,!1)};const fh=new WeakMap,dh=new WeakMap,hh=new WeakMap,zm=new WeakMap;function Hm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vm(t){return t.__v_skip||!Object.isExtensible(t)?0:Hm(dm(t))}function aa(t){return bi(t)?t:Bc(t,!1,Lm,Om,fh)}function Gm(t){return Bc(t,!1,Um,Bm,dh)}function Al(t){return Bc(t,!0,Im,km,hh)}function Bc(t,e,n,i,s){if(!vt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=Vm(t);if(r===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,r===2?i:n);return s.set(t,a),a}function os(t){return bi(t)?os(t.__v_raw):!!(t&&t.__v_isReactive)}function bi(t){return!!(t&&t.__v_isReadonly)}function wn(t){return!!(t&&t.__v_isShallow)}function kc(t){return t?!!t.__v_raw:!1}function ht(t){const e=t&&t.__v_raw;return e?ht(e):t}function Wm(t){return!pt(t,"__v_skip")&&Object.isExtensible(t)&&Kd(t,"__v_skip",!0),t}const Fn=t=>vt(t)?aa(t):t,Gs=t=>vt(t)?Al(t):t;function Qt(t){return t?t.__v_isRef===!0:!1}function $t(t){return Xm(t,!1)}function Xm(t,e){return Qt(t)?t:new qm(t,e)}class qm{constructor(e,n){this.dep=new Fc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ht(e),this._value=n?e:Fn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||wn(e)||bi(e);e=i?e:ht(e),jn(e,n)&&(this._rawValue=e,this._value=i?e:Fn(e),this.dep.trigger())}}function wl(t){return Qt(t)?t.value:t}const jm={get:(t,e,n)=>e==="__v_raw"?t:wl(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Qt(s)&&!Qt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function ph(t){return os(t)?t:new Proxy(t,jm)}class $m{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Fc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=yr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Et!==this)return nh(this,!0),!0}get value(){const e=this.dep.track();return rh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ym(t,e,n=!1){let i,s;return tt(t)?i=t:(i=t.get,s=t.set),new $m(i,s,n)}const Xr={},No=new WeakMap;let Ji;function Km(t,e=!1,n=Ji){if(n){let i=No.get(n);i||No.set(n,i=[]),i.push(t)}}function Zm(t,e,n=yt){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=M=>s?M:wn(M)||s===!1||s===0?pi(M,1):pi(M);let u,f,d,h,g=!1,x=!1;if(Qt(t)?(f=()=>t.value,g=wn(t)):os(t)?(f=()=>c(t),g=!0):je(t)?(x=!0,g=t.some(M=>os(M)||wn(M)),f=()=>t.map(M=>{if(Qt(M))return M.value;if(os(M))return c(M);if(tt(M))return l?l(M,2):M()})):tt(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){vi();try{d()}finally{Si()}}const M=Ji;Ji=u;try{return l?l(t,3,[h]):t(h)}finally{Ji=M}}:f=Kn,e&&s){const M=f,P=s===!0?1/0:s;f=()=>pi(M(),P)}const p=Em(),m=()=>{u.stop(),p&&p.active&&Dc(p.effects,u)};if(r&&e){const M=e;e=(...P)=>{M(...P),m()}}let S=x?new Array(t.length).fill(Xr):Xr;const E=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const P=u.run();if(s||g||(x?P.some((T,D)=>jn(T,S[D])):jn(P,S))){d&&d();const T=Ji;Ji=u;try{const D=[P,S===Xr?void 0:x&&S[0]===Xr?[]:S,h];S=P,l?l(e,3,D):e(...D)}finally{Ji=T}}}else u.run()};return a&&a(E),u=new eh(f),u.scheduler=o?()=>o(E,!1):E,h=M=>Km(M,!1,u),d=u.onStop=()=>{const M=No.get(u);if(M){if(l)l(M,4);else for(const P of M)P();No.delete(u)}},e?i?E(!0):S=u.run():o?o(E.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function pi(t,e=1/0,n){if(e<=0||!vt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Qt(t))pi(t.value,e,n);else if(je(t))for(let i=0;i<t.length;i++)pi(t[i],e,n);else if(ta(t)||Ns(t))t.forEach(i=>{pi(i,e,n)});else if($d(t)){for(const i in t)pi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&pi(t[i],e,n)}return t}function Ir(t,e,n,i){try{return i?t(...i):t()}catch(s){la(s,e,n)}}function Qn(t,e,n,i){if(tt(t)){const s=Ir(t,e,n,i);return s&&qd(s)&&s.catch(r=>{la(r,e,n)}),s}if(je(t)){const s=[];for(let r=0;r<t.length;r++)s.push(Qn(t[r],e,n,i));return s}}function la(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||yt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(r){vi(),Ir(r,null,10,[t,l,c]),Si();return}}Jm(t,n,s,i,o)}function Jm(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const rn=[];let Gn=-1;const Fs=[];let Fi=null,Ds=0;const mh=Promise.resolve();let Fo=null;function zc(t){const e=Fo||mh;return t?e.then(this?t.bind(this):t):e}function Qm(t){let e=Gn+1,n=rn.length;for(;e<n;){const i=e+n>>>1,s=rn[i],r=Er(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function Hc(t){if(!(t.flags&1)){const e=Er(t),n=rn[rn.length-1];!n||!(t.flags&2)&&e>=Er(n)?rn.push(t):rn.splice(Qm(e),0,t),t.flags|=1,gh()}}function gh(){Fo||(Fo=mh.then(xh))}function eg(t){je(t)?Fs.push(...t):Fi&&t.id===-1?Fi.splice(Ds+1,0,t):t.flags&1||(Fs.push(t),t.flags|=1),gh()}function Nu(t,e,n=Gn+1){for(;n<rn.length;n++){const i=rn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;rn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function _h(t){if(Fs.length){const e=[...new Set(Fs)].sort((n,i)=>Er(n)-Er(i));if(Fs.length=0,Fi){Fi.push(...e);return}for(Fi=e,Ds=0;Ds<Fi.length;Ds++){const n=Fi[Ds];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Fi=null,Ds=0}}const Er=t=>t.id==null?t.flags&2?-1:1/0:t.id;function xh(t){try{for(Gn=0;Gn<rn.length;Gn++){const e=rn[Gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ir(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Gn<rn.length;Gn++){const e=rn[Gn];e&&(e.flags&=-2)}Gn=-1,rn.length=0,_h(),Fo=null,(rn.length||Fs.length)&&xh()}}let Zt=null,vh=null;function Oo(t){const e=Zt;return Zt=t,vh=t&&t.type.__scopeId||null,e}function tg(t,e=Zt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&qu(-1);const r=Oo(e);let o;try{o=t(...s)}finally{Oo(r),i._d&&qu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function La(t,e){if(Zt===null)return t;const n=ha(Zt),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=yt]=e[s];r&&(tt(r)&&(r={mounted:r,updated:r}),r.deep&&pi(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function qi(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(vi(),Qn(l,n,8,[t.el,a,t,e]),Si())}}function ng(t,e){if(on){let n=on.provides;const i=on.parent&&on.parent.provides;i===n&&(n=on.provides=Object.create(i)),n[t]=e}}function yo(t,e,n=!1){const i=t_();if(i||Bs){let s=Bs?Bs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&tt(e)?e.call(i&&i.proxy):e}}const ig=Symbol.for("v-scx"),sg=()=>yo(ig);function as(t,e,n){return Sh(t,e,n)}function Sh(t,e,n=yt){const{immediate:i,deep:s,flush:r,once:o}=n,a=en({},n),l=e&&i||!e&&r!=="post";let c;if(Ar){if(r==="sync"){const h=sg();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Kn,h.resume=Kn,h.pause=Kn,h}}const u=on;a.call=(h,g,x)=>Qn(h,u,g,x);let f=!1;r==="post"?a.scheduler=h=>{fn(h,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(h,g)=>{g?h():Hc(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=Zm(t,e,a);return Ar&&(c?c.push(d):l&&d()),d}function rg(t,e,n){const i=this.proxy,s=Dt(t)?t.includes(".")?bh(i,t):()=>i[t]:t.bind(i,i);let r;tt(e)?r=e:(r=e.handler,n=e);const o=Ur(this),a=Sh(s,r.bind(i),n);return o(),a}function bh(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const og=Symbol("_vte"),ag=t=>t.__isTeleport,lg=Symbol("_leaveCb");function Vc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Vc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function yh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Fu(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const Bo=new WeakMap;function _r(t,e,n,i,s=!1){if(je(t)){t.forEach((x,p)=>_r(x,e&&(je(e)?e[p]:e),n,i,s));return}if(Os(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&_r(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?ha(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===yt?a.refs={}:a.refs,f=a.setupState,d=ht(f),h=f===yt?Xd:x=>Fu(u,x)?!1:pt(d,x),g=(x,p)=>!(p&&Fu(u,p));if(c!=null&&c!==l){if(Ou(e),Dt(c))u[c]=null,h(c)&&(f[c]=null);else if(Qt(c)){const x=e;g(c,x.k)&&(c.value=null),x.k&&(u[x.k]=null)}}if(tt(l))Ir(l,a,12,[o,u]);else{const x=Dt(l),p=Qt(l);if(x||p){const m=()=>{if(t.f){const S=x?h(l)?f[l]:u[l]:g()||!t.k?l.value:u[t.k];if(s)je(S)&&Dc(S,r);else if(je(S))S.includes(r)||S.push(r);else if(x)u[l]=[r],h(l)&&(f[l]=u[l]);else{const E=[r];g(l,t.k)&&(l.value=E),t.k&&(u[t.k]=E)}}else x?(u[l]=o,h(l)&&(f[l]=o)):p&&(g(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const S=()=>{m(),Bo.delete(t)};S.id=-1,Bo.set(t,S),fn(S,n)}else Ou(t),m()}}}function Ou(t){const e=Bo.get(t);e&&(e.flags|=8,Bo.delete(t))}sa().requestIdleCallback;sa().cancelIdleCallback;const Os=t=>!!t.type.__asyncLoader,Mh=t=>t.type.__isKeepAlive;function cg(t,e){Eh(t,"a",e)}function ug(t,e){Eh(t,"da",e)}function Eh(t,e,n=on){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ca(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Mh(s.parent.vnode)&&fg(i,e,n,s),s=s.parent}}function fg(t,e,n,i){const s=ca(e,t,i,!0);ua(()=>{Dc(i[e],s)},n)}function ca(t,e,n=on,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{vi();const a=Ur(n),l=Qn(e,n,t,o);return a(),Si(),l});return i?s.unshift(r):s.push(r),r}}const Ai=t=>(e,n=on)=>{(!Ar||t==="sp")&&ca(t,(...i)=>e(...i),n)},dg=Ai("bm"),Th=Ai("m"),hg=Ai("bu"),pg=Ai("u"),mg=Ai("bum"),ua=Ai("um"),gg=Ai("sp"),_g=Ai("rtg"),xg=Ai("rtc");function vg(t,e=on){ca("ec",t,e)}const Sg=Symbol.for("v-ndc");function ko(t,e,n,i){let s;const r=n,o=je(t);if(o||Dt(t)){const a=o&&os(t);let l=!1,c=!1;a&&(l=!wn(t),c=bi(t),t=oa(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(l?c?Gs(Fn(t[u])):Fn(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(vt(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}function bg(t,e,n={},i,s){if(Zt.ce||Zt.parent&&Os(Zt.parent)&&Zt.parent.ce){const c=Object.keys(n).length>0;return ze(),zi(Gt,null,[rt("slot",n,i)],c?-2:64)}let r=t[e];r&&r._c&&(r._d=!1),ze();const o=r&&Ah(r(n)),a=n.key||o&&o.key,l=zi(Gt,{key:(a&&!Nn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function Ah(t){return t.some(e=>Xc(e)?!(e.type===yi||e.type===Gt&&!Ah(e.children)):!0)?t:null}const Rl=t=>t?qh(t)?ha(t):Rl(t.parent):null,xr=en(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Rl(t.parent),$root:t=>Rl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Rh(t),$forceUpdate:t=>t.f||(t.f=()=>{Hc(t.update)}),$nextTick:t=>t.n||(t.n=zc.bind(t.proxy)),$watch:t=>rg.bind(t)}),Ia=(t,e)=>t!==yt&&!t.__isScriptSetup&&pt(t,e),yg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Ia(i,e))return o[e]=1,i[e];if(s!==yt&&pt(s,e))return o[e]=2,s[e];if(pt(r,e))return o[e]=3,r[e];if(n!==yt&&pt(n,e))return o[e]=4,n[e];Cl&&(o[e]=0)}}const c=xr[e];let u,f;if(c)return e==="$attrs"&&Yt(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==yt&&pt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,pt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Ia(s,e)?(s[e]=n,!0):i!==yt&&pt(i,e)?(i[e]=n,!0):pt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||t!==yt&&a[0]!=="$"&&pt(t,a)||Ia(e,a)||pt(r,a)||pt(i,a)||pt(xr,a)||pt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Bu(t){return je(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Cl=!0;function Mg(t){const e=Rh(t),n=t.proxy,i=t.ctx;Cl=!1,e.beforeCreate&&ku(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:x,deactivated:p,beforeDestroy:m,beforeUnmount:S,destroyed:E,unmounted:M,render:P,renderTracked:T,renderTriggered:D,errorCaptured:v,serverPrefetch:w,expose:U,inheritAttrs:C,components:H,directives:G,filters:X}=e;if(c&&Eg(c,i,null),o)for(const N in o){const Y=o[N];tt(Y)&&(i[N]=Y.bind(n))}if(s){const N=s.call(n,n);vt(N)&&(t.data=aa(N))}if(Cl=!0,r)for(const N in r){const Y=r[N],ce=tt(Y)?Y.bind(n,n):tt(Y.get)?Y.get.bind(n,n):Kn,de=!tt(Y)&&tt(Y.set)?Y.set.bind(n):Kn,Ee=$h({get:ce,set:de});Object.defineProperty(i,N,{enumerable:!0,configurable:!0,get:()=>Ee.value,set:Ce=>Ee.value=Ce})}if(a)for(const N in a)wh(a[N],i,n,N);if(l){const N=tt(l)?l.call(n):l;Reflect.ownKeys(N).forEach(Y=>{ng(Y,N[Y])})}u&&ku(u,t,"c");function B(N,Y){je(Y)?Y.forEach(ce=>N(ce.bind(n))):Y&&N(Y.bind(n))}if(B(dg,f),B(Th,d),B(hg,h),B(pg,g),B(cg,x),B(ug,p),B(vg,v),B(xg,T),B(_g,D),B(mg,S),B(ua,M),B(gg,w),je(U))if(U.length){const N=t.exposed||(t.exposed={});U.forEach(Y=>{Object.defineProperty(N,Y,{get:()=>n[Y],set:ce=>n[Y]=ce,enumerable:!0})})}else t.exposed||(t.exposed={});P&&t.render===Kn&&(t.render=P),C!=null&&(t.inheritAttrs=C),H&&(t.components=H),G&&(t.directives=G),w&&yh(t)}function Eg(t,e,n=Kn){je(t)&&(t=Pl(t));for(const i in t){const s=t[i];let r;vt(s)?"default"in s?r=yo(s.from||i,s.default,!0):r=yo(s.from||i):r=yo(s),Qt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function ku(t,e,n){Qn(je(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function wh(t,e,n,i){let s=i.includes(".")?bh(n,i):()=>n[i];if(Dt(t)){const r=e[t];tt(r)&&as(s,r)}else if(tt(t))as(s,t.bind(n));else if(vt(t))if(je(t))t.forEach(r=>wh(r,e,n,i));else{const r=tt(t.handler)?t.handler.bind(n):e[t.handler];tt(r)&&as(s,r,t)}}function Rh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>zo(l,c,o,!0)),zo(l,e,o)),vt(e)&&r.set(e,l),l}function zo(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&zo(t,r,n,!0),s&&s.forEach(o=>zo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Tg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Tg={data:zu,props:Hu,emits:Hu,methods:ur,computed:ur,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,beforeUnmount:tn,destroyed:tn,unmounted:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:ur,directives:ur,watch:wg,provide:zu,inject:Ag};function zu(t,e){return e?t?function(){return en(tt(t)?t.call(this,this):t,tt(e)?e.call(this,this):e)}:e:t}function Ag(t,e){return ur(Pl(t),Pl(e))}function Pl(t){if(je(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tn(t,e){return t?[...new Set([].concat(t,e))]:e}function ur(t,e){return t?en(Object.create(null),t,e):e}function Hu(t,e){return t?je(t)&&je(e)?[...new Set([...t,...e])]:en(Object.create(null),Bu(t),Bu(e??{})):e}function wg(t,e){if(!t)return e;if(!e)return t;const n=en(Object.create(null),t);for(const i in e)n[i]=tn(t[i],e[i]);return n}function Ch(){return{app:null,config:{isNativeTag:Xd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rg=0;function Cg(t,e){return function(i,s=null){tt(i)||(i=en({},i)),s!=null&&!vt(s)&&(s=null);const r=Ch(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Rg++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:a_,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&tt(u.install)?(o.add(u),u.install(c,...f)):tt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||rt(i,s);return h.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(h,u,d),l=!0,c._container=u,u.__vue_app__=c,ha(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Qn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Bs;Bs=c;try{return u()}finally{Bs=f}}};return c}}let Bs=null;const Pg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${In(e)}Modifiers`]||t[`${ds(e)}Modifiers`];function Dg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||yt;let s=n;const r=e.startsWith("update:"),o=r&&Pg(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>Dt(u)?u.trim():u)),o.number&&(s=n.map(ia)));let a,l=i[a=wa(e)]||i[a=wa(In(e))];!l&&r&&(l=i[a=wa(ds(e))]),l&&Qn(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Qn(c,t,6,s)}}const Lg=new WeakMap;function Ph(t,e,n=!1){const i=n?Lg:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!tt(t)){const l=c=>{const u=Ph(c,e,!0);u&&(a=!0,en(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(vt(t)&&i.set(t,null),null):(je(r)?r.forEach(l=>o[l]=null):en(o,r),vt(t)&&i.set(t,o),o)}function fa(t,e){return!t||!Qo(e)?!1:(e=e.slice(2).replace(/Once$/,""),pt(t,e[0].toLowerCase()+e.slice(1))||pt(t,ds(e))||pt(t,e))}function Vu(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:x}=t,p=Oo(t);let m,S;try{if(n.shapeFlag&4){const M=s||i,P=M;m=Xn(c.call(P,M,u,f,h,d,g)),S=a}else{const M=e;m=Xn(M.length>1?M(f,{attrs:a,slots:o,emit:l}):M(f,null)),S=e.props?a:Ig(a)}}catch(M){vr.length=0,la(M,t,1),m=rt(yi)}let E=m;if(S&&x!==!1){const M=Object.keys(S),{shapeFlag:P}=E;M.length&&P&7&&(r&&M.some(ea)&&(S=Ug(S,r)),E=Ws(E,S,!1,!0))}return n.dirs&&(E=Ws(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&Vc(E,n.transition),m=E,Oo(p),m}const Ig=t=>{let e;for(const n in t)(n==="class"||n==="style"||Qo(n))&&((e||(e={}))[n]=t[n]);return e},Ug=(t,e)=>{const n={};for(const i in t)(!ea(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Ng(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Gu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(Dh(o,i,d)&&!fa(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Gu(i,o,c):!0:!!o;return!1}function Gu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Dh(e,t,r)&&!fa(n,r))return!0}return!1}function Dh(t,e,n){const i=t[n],s=e[n];return n==="style"&&vt(i)&&vt(s)?!Lr(i,s):i!==s}function Fg({vnode:t,parent:e,suspense:n},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=i,t=s),s===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const Lh={},Ih=()=>Object.create(Lh),Uh=t=>Object.getPrototypeOf(t)===Lh;function Og(t,e,n,i=!1){const s={},r=Ih();t.propsDefaults=Object.create(null),Nh(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Gm(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function Bg(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=ht(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(fa(t.emitsOptions,d))continue;const h=e[d];if(l)if(pt(r,d))h!==r[d]&&(r[d]=h,c=!0);else{const g=In(d);s[g]=Dl(l,a,g,h,t,!1)}else h!==r[d]&&(r[d]=h,c=!0)}}}else{Nh(t,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!pt(e,f)&&((u=ds(f))===f||!pt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Dl(l,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!pt(e,f))&&(delete r[f],c=!0)}c&&hi(t.attrs,"set","")}function Nh(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(pr(l))continue;const c=e[l];let u;s&&pt(s,u=In(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:fa(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ht(n),c=a||yt;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Dl(s,l,f,c[f],t,!pt(c,f))}}return o}function Dl(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=pt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&tt(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=Ur(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ds(n))&&(i=!0))}return i}const kg=new WeakMap;function Fh(t,e,n=!1){const i=n?kg:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!tt(t)){const u=f=>{l=!0;const[d,h]=Fh(f,e,!0);en(o,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return vt(t)&&i.set(t,Us),Us;if(je(r))for(let u=0;u<r.length;u++){const f=In(r[u]);Wu(f)&&(o[f]=yt)}else if(r)for(const u in r){const f=In(u);if(Wu(f)){const d=r[u],h=o[f]=je(d)||tt(d)?{type:d}:en({},d),g=h.type;let x=!1,p=!0;if(je(g))for(let m=0;m<g.length;++m){const S=g[m],E=tt(S)&&S.name;if(E==="Boolean"){x=!0;break}else E==="String"&&(p=!1)}else x=tt(g)&&g.name==="Boolean";h[0]=x,h[1]=p,(x||pt(h,"default"))&&a.push(f)}}const c=[o,a];return vt(t)&&i.set(t,c),c}function Wu(t){return t[0]!=="$"&&!pr(t)}const Gc=t=>t==="_"||t==="_ctx"||t==="$stable",Wc=t=>je(t)?t.map(Xn):[Xn(t)],zg=(t,e,n)=>{if(e._n)return e;const i=tg((...s)=>Wc(e(...s)),n);return i._c=!1,i},Oh=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Gc(s))continue;const r=t[s];if(tt(r))e[s]=zg(s,r,i);else if(r!=null){const o=Wc(r);e[s]=()=>o}}},Bh=(t,e)=>{const n=Wc(e);t.slots.default=()=>n},kh=(t,e,n)=>{for(const i in e)(n||!Gc(i))&&(t[i]=e[i])},Hg=(t,e,n)=>{const i=t.slots=Ih();if(t.vnode.shapeFlag&32){const s=e._;s?(kh(i,e,n),n&&Kd(i,"_",s,!0)):Oh(e,i)}else e&&Bh(t,e)},Vg=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=yt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:kh(s,e,n):(r=!e.$stable,Oh(e,s)),o=e}else e&&(Bh(t,e),o={default:1});if(r)for(const a in s)!Gc(a)&&o[a]==null&&delete s[a]},fn=jg;function Gg(t){return Wg(t)}function Wg(t,e){const n=sa();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=Kn,insertStaticContent:g}=t,x=(R,L,W,ee=null,K=null,se=null,fe=void 0,ge=null,A=!!L.dynamicChildren)=>{if(R===L)return;R&&!tr(R,L)&&(ee=xe(R),Ce(R,K,se,!0),R=null),L.patchFlag===-2&&(A=!1,L.dynamicChildren=null);const{type:re,ref:ve,shapeFlag:he}=L;switch(re){case da:p(R,L,W,ee);break;case yi:m(R,L,W,ee);break;case Mo:R==null&&S(L,W,ee,fe);break;case Gt:H(R,L,W,ee,K,se,fe,ge,A);break;default:he&1?P(R,L,W,ee,K,se,fe,ge,A):he&6?G(R,L,W,ee,K,se,fe,ge,A):(he&64||he&128)&&re.process(R,L,W,ee,K,se,fe,ge,A,Ve)}ve!=null&&K?_r(ve,R&&R.ref,se,L||R,!L):ve==null&&R&&R.ref!=null&&_r(R.ref,null,se,R,!0)},p=(R,L,W,ee)=>{if(R==null)i(L.el=a(L.children),W,ee);else{const K=L.el=R.el;L.children!==R.children&&c(K,L.children)}},m=(R,L,W,ee)=>{R==null?i(L.el=l(L.children||""),W,ee):L.el=R.el},S=(R,L,W,ee)=>{[R.el,R.anchor]=g(R.children,L,W,ee,R.el,R.anchor)},E=({el:R,anchor:L},W,ee)=>{let K;for(;R&&R!==L;)K=d(R),i(R,W,ee),R=K;i(L,W,ee)},M=({el:R,anchor:L})=>{let W;for(;R&&R!==L;)W=d(R),s(R),R=W;s(L)},P=(R,L,W,ee,K,se,fe,ge,A)=>{if(L.type==="svg"?fe="svg":L.type==="math"&&(fe="mathml"),R==null)T(L,W,ee,K,se,fe,ge,A);else{const re=R.el&&R.el._isVueCE?R.el:null;try{re&&re._beginPatch(),w(R,L,K,se,fe,ge,A)}finally{re&&re._endPatch()}}},T=(R,L,W,ee,K,se,fe,ge)=>{let A,re;const{props:ve,shapeFlag:he,transition:Q,dirs:Pe}=R;if(A=R.el=o(R.type,se,ve&&ve.is,ve),he&8?u(A,R.children):he&16&&v(R.children,A,null,ee,K,Ua(R,se),fe,ge),Pe&&qi(R,null,ee,"created"),D(A,R,R.scopeId,fe,ee),ve){for(const _ in ve)_!=="value"&&!pr(_)&&r(A,_,null,ve[_],se,ee);"value"in ve&&r(A,"value",null,ve.value,se),(re=ve.onVnodeBeforeMount)&&zn(re,ee,R)}Pe&&qi(R,null,ee,"beforeMount");const y=Xg(K,Q);y&&Q.beforeEnter(A),i(A,L,W),((re=ve&&ve.onVnodeMounted)||y||Pe)&&fn(()=>{re&&zn(re,ee,R),y&&Q.enter(A),Pe&&qi(R,null,ee,"mounted")},K)},D=(R,L,W,ee,K)=>{if(W&&h(R,W),ee)for(let se=0;se<ee.length;se++)h(R,ee[se]);if(K){let se=K.subTree;if(L===se||Gh(se.type)&&(se.ssContent===L||se.ssFallback===L)){const fe=K.vnode;D(R,fe,fe.scopeId,fe.slotScopeIds,K.parent)}}},v=(R,L,W,ee,K,se,fe,ge,A=0)=>{for(let re=A;re<R.length;re++){const ve=R[re]=ge?di(R[re]):Xn(R[re]);x(null,ve,L,W,ee,K,se,fe,ge)}},w=(R,L,W,ee,K,se,fe)=>{const ge=L.el=R.el;let{patchFlag:A,dynamicChildren:re,dirs:ve}=L;A|=R.patchFlag&16;const he=R.props||yt,Q=L.props||yt;let Pe;if(W&&ji(W,!1),(Pe=Q.onVnodeBeforeUpdate)&&zn(Pe,W,L,R),ve&&qi(L,R,W,"beforeUpdate"),W&&ji(W,!0),(he.innerHTML&&Q.innerHTML==null||he.textContent&&Q.textContent==null)&&u(ge,""),re?U(R.dynamicChildren,re,ge,W,ee,Ua(L,K),se):fe||Y(R,L,ge,null,W,ee,Ua(L,K),se,!1),A>0){if(A&16)C(ge,he,Q,W,K);else if(A&2&&he.class!==Q.class&&r(ge,"class",null,Q.class,K),A&4&&r(ge,"style",he.style,Q.style,K),A&8){const y=L.dynamicProps;for(let _=0;_<y.length;_++){const O=y[_],Z=he[O],oe=Q[O];(oe!==Z||O==="value")&&r(ge,O,Z,oe,K,W)}}A&1&&R.children!==L.children&&u(ge,L.children)}else!fe&&re==null&&C(ge,he,Q,W,K);((Pe=Q.onVnodeUpdated)||ve)&&fn(()=>{Pe&&zn(Pe,W,L,R),ve&&qi(L,R,W,"updated")},ee)},U=(R,L,W,ee,K,se,fe)=>{for(let ge=0;ge<L.length;ge++){const A=R[ge],re=L[ge],ve=A.el&&(A.type===Gt||!tr(A,re)||A.shapeFlag&198)?f(A.el):W;x(A,re,ve,null,ee,K,se,fe,!0)}},C=(R,L,W,ee,K)=>{if(L!==W){if(L!==yt)for(const se in L)!pr(se)&&!(se in W)&&r(R,se,L[se],null,K,ee);for(const se in W){if(pr(se))continue;const fe=W[se],ge=L[se];fe!==ge&&se!=="value"&&r(R,se,ge,fe,K,ee)}"value"in W&&r(R,"value",L.value,W.value,K)}},H=(R,L,W,ee,K,se,fe,ge,A)=>{const re=L.el=R?R.el:a(""),ve=L.anchor=R?R.anchor:a("");let{patchFlag:he,dynamicChildren:Q,slotScopeIds:Pe}=L;Pe&&(ge=ge?ge.concat(Pe):Pe),R==null?(i(re,W,ee),i(ve,W,ee),v(L.children||[],W,ve,K,se,fe,ge,A)):he>0&&he&64&&Q&&R.dynamicChildren&&R.dynamicChildren.length===Q.length?(U(R.dynamicChildren,Q,W,K,se,fe,ge),(L.key!=null||K&&L===K.subTree)&&zh(R,L,!0)):Y(R,L,W,ve,K,se,fe,ge,A)},G=(R,L,W,ee,K,se,fe,ge,A)=>{L.slotScopeIds=ge,R==null?L.shapeFlag&512?K.ctx.activate(L,W,ee,fe,A):X(L,W,ee,K,se,fe,A):I(R,L,A)},X=(R,L,W,ee,K,se,fe)=>{const ge=R.component=e_(R,ee,K);if(Mh(R)&&(ge.ctx.renderer=Ve),n_(ge,!1,fe),ge.asyncDep){if(K&&K.registerDep(ge,B,fe),!R.el){const A=ge.subTree=rt(yi);m(null,A,L,W),R.placeholder=A.el}}else B(ge,R,L,W,K,se,fe)},I=(R,L,W)=>{const ee=L.component=R.component;if(Ng(R,L,W))if(ee.asyncDep&&!ee.asyncResolved){N(ee,L,W);return}else ee.next=L,ee.update();else L.el=R.el,ee.vnode=L},B=(R,L,W,ee,K,se,fe)=>{const ge=()=>{if(R.isMounted){let{next:he,bu:Q,u:Pe,parent:y,vnode:_}=R;{const me=Hh(R);if(me){he&&(he.el=_.el,N(R,he,fe)),me.asyncDep.then(()=>{fn(()=>{R.isUnmounted||re()},K)});return}}let O=he,Z;ji(R,!1),he?(he.el=_.el,N(R,he,fe)):he=_,Q&&bo(Q),(Z=he.props&&he.props.onVnodeBeforeUpdate)&&zn(Z,y,he,_),ji(R,!0);const oe=Vu(R),pe=R.subTree;R.subTree=oe,x(pe,oe,f(pe.el),xe(pe),R,K,se),he.el=oe.el,O===null&&Fg(R,oe.el),Pe&&fn(Pe,K),(Z=he.props&&he.props.onVnodeUpdated)&&fn(()=>zn(Z,y,he,_),K)}else{let he;const{el:Q,props:Pe}=L,{bm:y,m:_,parent:O,root:Z,type:oe}=R,pe=Os(L);ji(R,!1),y&&bo(y),!pe&&(he=Pe&&Pe.onVnodeBeforeMount)&&zn(he,O,L),ji(R,!0);{Z.ce&&Z.ce._hasShadowRoot()&&Z.ce._injectChildStyle(oe,R.parent?R.parent.type:void 0);const me=R.subTree=Vu(R);x(null,me,W,ee,R,K,se),L.el=me.el}if(_&&fn(_,K),!pe&&(he=Pe&&Pe.onVnodeMounted)){const me=L;fn(()=>zn(he,O,me),K)}(L.shapeFlag&256||O&&Os(O.vnode)&&O.vnode.shapeFlag&256)&&R.a&&fn(R.a,K),R.isMounted=!0,L=W=ee=null}};R.scope.on();const A=R.effect=new eh(ge);R.scope.off();const re=R.update=A.run.bind(A),ve=R.job=A.runIfDirty.bind(A);ve.i=R,ve.id=R.uid,A.scheduler=()=>Hc(ve),ji(R,!0),re()},N=(R,L,W)=>{L.component=R;const ee=R.vnode.props;R.vnode=L,R.next=null,Bg(R,L.props,ee,W),Vg(R,L.children,W),vi(),Nu(R),Si()},Y=(R,L,W,ee,K,se,fe,ge,A=!1)=>{const re=R&&R.children,ve=R?R.shapeFlag:0,he=L.children,{patchFlag:Q,shapeFlag:Pe}=L;if(Q>0){if(Q&128){de(re,he,W,ee,K,se,fe,ge,A);return}else if(Q&256){ce(re,he,W,ee,K,se,fe,ge,A);return}}Pe&8?(ve&16&&te(re,K,se),he!==re&&u(W,he)):ve&16?Pe&16?de(re,he,W,ee,K,se,fe,ge,A):te(re,K,se,!0):(ve&8&&u(W,""),Pe&16&&v(he,W,ee,K,se,fe,ge,A))},ce=(R,L,W,ee,K,se,fe,ge,A)=>{R=R||Us,L=L||Us;const re=R.length,ve=L.length,he=Math.min(re,ve);let Q;for(Q=0;Q<he;Q++){const Pe=L[Q]=A?di(L[Q]):Xn(L[Q]);x(R[Q],Pe,W,null,K,se,fe,ge,A)}re>ve?te(R,K,se,!0,!1,he):v(L,W,ee,K,se,fe,ge,A,he)},de=(R,L,W,ee,K,se,fe,ge,A)=>{let re=0;const ve=L.length;let he=R.length-1,Q=ve-1;for(;re<=he&&re<=Q;){const Pe=R[re],y=L[re]=A?di(L[re]):Xn(L[re]);if(tr(Pe,y))x(Pe,y,W,null,K,se,fe,ge,A);else break;re++}for(;re<=he&&re<=Q;){const Pe=R[he],y=L[Q]=A?di(L[Q]):Xn(L[Q]);if(tr(Pe,y))x(Pe,y,W,null,K,se,fe,ge,A);else break;he--,Q--}if(re>he){if(re<=Q){const Pe=Q+1,y=Pe<ve?L[Pe].el:ee;for(;re<=Q;)x(null,L[re]=A?di(L[re]):Xn(L[re]),W,y,K,se,fe,ge,A),re++}}else if(re>Q)for(;re<=he;)Ce(R[re],K,se,!0),re++;else{const Pe=re,y=re,_=new Map;for(re=y;re<=Q;re++){const Se=L[re]=A?di(L[re]):Xn(L[re]);Se.key!=null&&_.set(Se.key,re)}let O,Z=0;const oe=Q-y+1;let pe=!1,me=0;const J=new Array(oe);for(re=0;re<oe;re++)J[re]=0;for(re=Pe;re<=he;re++){const Se=R[re];if(Z>=oe){Ce(Se,K,se,!0);continue}let Te;if(Se.key!=null)Te=_.get(Se.key);else for(O=y;O<=Q;O++)if(J[O-y]===0&&tr(Se,L[O])){Te=O;break}Te===void 0?Ce(Se,K,se,!0):(J[Te-y]=re+1,Te>=me?me=Te:pe=!0,x(Se,L[Te],W,null,K,se,fe,ge,A),Z++)}const ae=pe?qg(J):Us;for(O=ae.length-1,re=oe-1;re>=0;re--){const Se=y+re,Te=L[Se],be=L[Se+1],_e=Se+1<ve?be.el||Vh(be):ee;J[re]===0?x(null,Te,W,_e,K,se,fe,ge,A):pe&&(O<0||re!==ae[O]?Ee(Te,W,_e,2):O--)}}},Ee=(R,L,W,ee,K=null)=>{const{el:se,type:fe,transition:ge,children:A,shapeFlag:re}=R;if(re&6){Ee(R.component.subTree,L,W,ee);return}if(re&128){R.suspense.move(L,W,ee);return}if(re&64){fe.move(R,L,W,Ve);return}if(fe===Gt){i(se,L,W);for(let he=0;he<A.length;he++)Ee(A[he],L,W,ee);i(R.anchor,L,W);return}if(fe===Mo){E(R,L,W);return}if(ee!==2&&re&1&&ge)if(ee===0)ge.beforeEnter(se),i(se,L,W),fn(()=>ge.enter(se),K);else{const{leave:he,delayLeave:Q,afterLeave:Pe}=ge,y=()=>{R.ctx.isUnmounted?s(se):i(se,L,W)},_=()=>{se._isLeaving&&se[lg](!0),he(se,()=>{y(),Pe&&Pe()})};Q?Q(se,y,_):_()}else i(se,L,W)},Ce=(R,L,W,ee=!1,K=!1)=>{const{type:se,props:fe,ref:ge,children:A,dynamicChildren:re,shapeFlag:ve,patchFlag:he,dirs:Q,cacheIndex:Pe,memo:y}=R;if(he===-2&&(K=!1),ge!=null&&(vi(),_r(ge,null,W,R,!0),Si()),Pe!=null&&(L.renderCache[Pe]=void 0),ve&256){L.ctx.deactivate(R);return}const _=ve&1&&Q,O=!Os(R);let Z;if(O&&(Z=fe&&fe.onVnodeBeforeUnmount)&&zn(Z,L,R),ve&6)He(R.component,W,ee);else{if(ve&128){R.suspense.unmount(W,ee);return}_&&qi(R,null,L,"beforeUnmount"),ve&64?R.type.remove(R,L,W,Ve,ee):re&&!re.hasOnce&&(se!==Gt||he>0&&he&64)?te(re,L,W,!1,!0):(se===Gt&&he&384||!K&&ve&16)&&te(A,L,W),ee&&We(R)}const oe=y!=null&&Pe==null;(O&&(Z=fe&&fe.onVnodeUnmounted)||_||oe)&&fn(()=>{Z&&zn(Z,L,R),_&&qi(R,null,L,"unmounted"),oe&&(R.el=null)},W)},We=R=>{const{type:L,el:W,anchor:ee,transition:K}=R;if(L===Gt){it(W,ee);return}if(L===Mo){M(R);return}const se=()=>{s(W),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(R.shapeFlag&1&&K&&!K.persisted){const{leave:fe,delayLeave:ge}=K,A=()=>fe(W,se);ge?ge(R.el,se,A):A()}else se()},it=(R,L)=>{let W;for(;R!==L;)W=d(R),s(R),R=W;s(L)},He=(R,L,W)=>{const{bum:ee,scope:K,job:se,subTree:fe,um:ge,m:A,a:re}=R;Xu(A),Xu(re),ee&&bo(ee),K.stop(),se&&(se.flags|=8,Ce(fe,R,L,W)),ge&&fn(ge,L),fn(()=>{R.isUnmounted=!0},L)},te=(R,L,W,ee=!1,K=!1,se=0)=>{for(let fe=se;fe<R.length;fe++)Ce(R[fe],L,W,ee,K)},xe=R=>{if(R.shapeFlag&6)return xe(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const L=d(R.anchor||R.el),W=L&&L[og];return W?d(W):L};let le=!1;const Fe=(R,L,W)=>{let ee;R==null?L._vnode&&(Ce(L._vnode,null,null,!0),ee=L._vnode.component):x(L._vnode||null,R,L,null,null,null,W),L._vnode=R,le||(le=!0,Nu(ee),_h(),le=!1)},Ve={p:x,um:Ce,m:Ee,r:We,mt:X,mc:v,pc:Y,pbc:U,n:xe,o:t};return{render:Fe,hydrate:void 0,createApp:Cg(Fe)}}function Ua({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ji({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Xg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function zh(t,e,n=!1){const i=t.children,s=e.children;if(je(i)&&je(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=di(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&zh(o,a)),a.type===da&&(a.patchFlag===-1&&(a=s[r]=di(a)),a.el=o.el),a.type===yi&&!a.el&&(a.el=o.el)}}function qg(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Hh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Hh(e)}function Xu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Vh(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Vh(e.subTree):null}const Gh=t=>t.__isSuspense;function jg(t,e){e&&e.pendingBranch?je(t)?e.effects.push(...t):e.effects.push(t):eg(t)}const Gt=Symbol.for("v-fgt"),da=Symbol.for("v-txt"),yi=Symbol.for("v-cmt"),Mo=Symbol.for("v-stc"),vr=[];let vn=null;function ze(t=!1){vr.push(vn=t?null:[])}function $g(){vr.pop(),vn=vr[vr.length-1]||null}let Tr=1;function qu(t,e=!1){Tr+=t,t<0&&vn&&e&&(vn.hasOnce=!0)}function Wh(t){return t.dynamicChildren=Tr>0?vn||Us:null,$g(),Tr>0&&vn&&vn.push(t),t}function qe(t,e,n,i,s,r){return Wh(ie(t,e,n,i,s,r,!0))}function zi(t,e,n,i,s){return Wh(rt(t,e,n,i,s,!0))}function Xc(t){return t?t.__v_isVNode===!0:!1}function tr(t,e){return t.type===e.type&&t.key===e.key}const Xh=({key:t})=>t??null,Eo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Dt(t)||Qt(t)||tt(t)?{i:Zt,r:t,k:e,f:!!n}:t:null);function ie(t,e=null,n=null,i=0,s=null,r=t===Gt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Xh(e),ref:e&&Eo(e),scopeId:vh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Zt};return a?(jc(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Dt(n)?8:16),Tr>0&&!o&&vn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&vn.push(l),l}const rt=Yg;function Yg(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===Sg)&&(t=yi),Xc(t)){const a=Ws(t,e,!0);return n&&jc(a,n),Tr>0&&!r&&vn&&(a.shapeFlag&6?vn[vn.indexOf(t)]=a:vn.push(a)),a.patchFlag=-2,a}if(o_(t)&&(t=t.__vccOpts),e){e=Kg(e);let{class:a,style:l}=e;a&&!Dt(a)&&(e.class=Ot(a)),vt(l)&&(kc(l)&&!je(l)&&(l=en({},l)),e.style=ra(l))}const o=Dt(t)?1:Gh(t)?128:ag(t)?64:vt(t)?4:tt(t)?2:0;return ie(t,e,n,i,s,o,r,!0)}function Kg(t){return t?kc(t)||Uh(t)?en({},t):t:null}function Ws(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?Zg(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Xh(c),ref:e&&e.ref?n&&r?je(r)?r.concat(Eo(e)):[r,Eo(e)]:Eo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Gt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ws(t.ssContent),ssFallback:t.ssFallback&&Ws(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Vc(u,l.clone(u)),u}function An(t=" ",e=0){return rt(da,null,t,e)}function qc(t,e){const n=rt(Mo,null,t);return n.staticCount=e,n}function Tt(t="",e=!1){return e?(ze(),zi(yi,null,t)):rt(yi,null,t)}function Xn(t){return t==null||typeof t=="boolean"?rt(yi):je(t)?rt(Gt,null,t.slice()):Xc(t)?di(t):rt(da,null,String(t))}function di(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ws(t)}function jc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(je(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),jc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Uh(e)?e._ctx=Zt:s===3&&Zt&&(Zt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else tt(e)?(e={default:e,_ctx:Zt},n=32):(e=String(e),i&64?(n=16,e=[An(e)]):n=8);t.children=e,t.shapeFlag|=n}function Zg(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ot([e.class,i.class]));else if(s==="style")e.style=ra([e.style,i.style]);else if(Qo(s)){const r=e[s],o=i[s];o&&r!==o&&!(je(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!ea(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function zn(t,e,n,i=null){Qn(t,e,7,[n,i])}const Jg=Ch();let Qg=0;function e_(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||Jg,r={uid:Qg++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Mm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Fh(i,s),emitsOptions:Ph(i,s),emit:null,emitted:null,propsDefaults:yt,inheritAttrs:i.inheritAttrs,ctx:yt,data:yt,props:yt,attrs:yt,slots:yt,refs:yt,setupState:yt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Dg.bind(null,r),t.ce&&t.ce(r),r}let on=null;const t_=()=>on||Zt;let Ho,Ll;{const t=sa(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Ho=e("__VUE_INSTANCE_SETTERS__",n=>on=n),Ll=e("__VUE_SSR_SETTERS__",n=>Ar=n)}const Ur=t=>{const e=on;return Ho(t),t.scope.on(),()=>{t.scope.off(),Ho(e)}},ju=()=>{on&&on.scope.off(),Ho(null)};function qh(t){return t.vnode.shapeFlag&4}let Ar=!1;function n_(t,e=!1,n=!1){e&&Ll(e);const{props:i,children:s}=t.vnode,r=qh(t);Og(t,i,r,e),Hg(t,s,n||e);const o=r?i_(t,e):void 0;return e&&Ll(!1),o}function i_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,yg);const{setup:i}=n;if(i){vi();const s=t.setupContext=i.length>1?r_(t):null,r=Ur(t),o=Ir(i,t,0,[t.props,s]),a=qd(o);if(Si(),r(),(a||t.sp)&&!Os(t)&&yh(t),a){if(o.then(ju,ju),e)return o.then(l=>{$u(t,l)}).catch(l=>{la(l,t,0)});t.asyncDep=o}else $u(t,o)}else jh(t)}function $u(t,e,n){tt(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:vt(e)&&(t.setupState=ph(e)),jh(t)}function jh(t,e,n){const i=t.type;t.render||(t.render=i.render||Kn);{const s=Ur(t);vi();try{Mg(t)}finally{Si(),s()}}}const s_={get(t,e){return Yt(t,"get",""),t[e]}};function r_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,s_),slots:t.slots,emit:t.emit,expose:e}}function ha(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(ph(Wm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in xr)return xr[n](t)},has(e,n){return n in e||n in xr}})):t.proxy}function o_(t){return tt(t)&&"__vccOpts"in t}const $h=(t,e)=>Ym(t,e,Ar),a_="3.5.34";let Il;const Yu=typeof window<"u"&&window.trustedTypes;if(Yu)try{Il=Yu.createPolicy("vue",{createHTML:t=>t})}catch{}const Yh=Il?t=>Il.createHTML(t):t=>t,l_="http://www.w3.org/2000/svg",c_="http://www.w3.org/1998/Math/MathML",fi=typeof document<"u"?document:null,Ku=fi&&fi.createElement("template"),u_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?fi.createElementNS(l_,t):e==="mathml"?fi.createElementNS(c_,t):n?fi.createElement(t,{is:n}):fi.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>fi.createTextNode(t),createComment:t=>fi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>fi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Ku.innerHTML=Yh(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Ku.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},f_=Symbol("_vtc");function d_(t,e,n){const i=t[f_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Zu=Symbol("_vod"),h_=Symbol("_vsh"),p_=Symbol(""),m_=/(?:^|;)\s*display\s*:/;function g_(t,e,n){const i=t.style,s=Dt(n);let r=!1;if(n&&!s){if(e)if(Dt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&fr(i,a,"")}else for(const o in e)n[o]==null&&fr(i,o,"");for(const o in n){o==="display"&&(r=!0);const a=n[o];a!=null?x_(t,o,!Dt(e)&&e?e[o]:void 0,a)||fr(i,o,a):fr(i,o,"")}}else if(s){if(e!==n){const o=i[p_];o&&(n+=";"+o),i.cssText=n,r=m_.test(n)}}else e&&t.removeAttribute("style");Zu in t&&(t[Zu]=r?i.display:"",t[h_]&&(i.display="none"))}const Ju=/\s*!important$/;function fr(t,e,n){if(je(n))n.forEach(i=>fr(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=__(t,e);Ju.test(n)?t.setProperty(ds(i),n.replace(Ju,""),"important"):t[i]=n}}const Qu=["Webkit","Moz","ms"],Na={};function __(t,e){const n=Na[e];if(n)return n;let i=In(e);if(i!=="filter"&&i in t)return Na[e]=i;i=Yd(i);for(let s=0;s<Qu.length;s++){const r=Qu[s]+i;if(r in t)return Na[e]=r}return e}function x_(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Dt(i)&&n===i}const ef="http://www.w3.org/1999/xlink";function tf(t,e,n,i,s,r=Sm(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ef,e.slice(6,e.length)):t.setAttributeNS(ef,e,n):n==null||r&&!Zd(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Nn(n)?String(n):n)}function nf(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Yh(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Zd(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Qi(t,e,n,i){t.addEventListener(e,n,i)}function v_(t,e,n,i){t.removeEventListener(e,n,i)}const sf=Symbol("_vei");function S_(t,e,n,i,s=null){const r=t[sf]||(t[sf]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=b_(e);if(i){const c=r[e]=E_(i,s);Qi(t,a,c,l)}else o&&(v_(t,a,o,l),r[e]=void 0)}}const rf=/(?:Once|Passive|Capture)$/;function b_(t){let e;if(rf.test(t)){e={};let i;for(;i=t.match(rf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ds(t.slice(2)),e]}let Fa=0;const y_=Promise.resolve(),M_=()=>Fa||(y_.then(()=>Fa=0),Fa=Date.now());function E_(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Qn(T_(i,n.value),e,5,[i])};return n.value=t,n.attached=M_(),n}function T_(t,e){if(je(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const of=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,A_=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?d_(t,i,o):e==="style"?g_(t,n,i):Qo(e)?ea(e)||S_(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):w_(t,e,i,o))?(nf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&tf(t,e,i,o,r,e!=="value")):t._isVueCE&&(R_(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Dt(i)))?nf(t,In(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),tf(t,e,i,o))};function w_(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&of(e)&&tt(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return of(e)&&Dt(n)?!1:e in t}function R_(t,e){const n=t._def.props;if(!n)return!1;const i=In(e);return Array.isArray(n)?n.some(s=>In(s)===i):Object.keys(n).some(s=>In(s)===i)}const Vo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return je(e)?n=>bo(e,n):e};function C_(t){t.target.composing=!0}function af(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ks=Symbol("_assign");function lf(t,e,n){return e&&(t=t.trim()),n&&(t=ia(t)),t}const P_={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[ks]=Vo(s);const r=i||s.props&&s.props.type==="number";Qi(t,e?"change":"input",o=>{o.target.composing||t[ks](lf(t.value,n,r))}),(n||r)&&Qi(t,"change",()=>{t.value=lf(t.value,n,r)}),e||(Qi(t,"compositionstart",C_),Qi(t,"compositionend",af),Qi(t,"change",af))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[ks]=Vo(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?ia(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l)}},cf={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=ta(e);Qi(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?ia(Go(o)):Go(o));t[ks](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,zc(()=>{t._assigning=!1})}),t[ks]=Vo(i)},mounted(t,{value:e}){uf(t,e)},beforeUpdate(t,e,n){t[ks]=Vo(n)},updated(t,{value:e}){t._assigning||uf(t,e)}};function uf(t,e){const n=t.multiple,i=je(e);if(!(n&&!i&&!ta(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=Go(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=ym(e,a)>-1}else o.selected=e.has(a);else if(Lr(Go(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Go(t){return"_value"in t?t._value:t.value}const D_=["ctrl","shift","alt","meta"],L_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>D_.some(n=>t[`${n}Key`]&&!e.includes(n))},ff=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=L_[e[o]];if(a&&a(s,e))return}return t(s,...r)}))},I_=en({patchProp:A_},u_);let df;function U_(){return df||(df=Gg(I_))}const N_=((...t)=>{const e=U_().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=O_(i);if(!s)return;const r=e._component;!tt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,F_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function F_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function O_(t){return Dt(t)?document.querySelector(t):t}const B_={class:"header-shell bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-6 py-6 text-white sm:px-8 sm:py-7 dark:from-indigo-900 dark:via-violet-900 dark:to-purple-950"},k_={class:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"},z_=["aria-label","title"],H_={key:0,class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5","aria-hidden":"true"},V_={key:1,class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5","aria-hidden":"true"},G_={class:"header-theme-tooltip",role:"tooltip"},W_={__name:"AppHeader",props:{darkMode:{type:Boolean,default:!1}},emits:["toggle-dark"],setup(t,{emit:e}){const n=e;return(i,s)=>(ze(),qe("header",B_,[ie("div",k_,[s[3]||(s[3]=qc('<div><p class="header-eyebrow">AI-Powered 3D Printing</p><div class="mt-2 flex items-center gap-3"><div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur" aria-hidden="true"><svg class="h-5 w-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"></path></svg></div><h1 class="text-2xl font-bold tracking-tight sm:text-3xl"> Filament Print Analysis </h1></div><p class="mt-2 max-w-xl text-sm leading-relaxed text-white/75 sm:max-w-2xl"> Upload an STL, get AI recommendations, slicer output, and cost estimates in one dashboard. </p></div>',1)),ie("button",{type:"button",class:"header-theme-btn group shrink-0 self-start","aria-label":t.darkMode?"Switch to light mode":"Switch to dark mode",title:t.darkMode?"Light mode":"Dark mode",onClick:s[0]||(s[0]=r=>n("toggle-dark"))},[t.darkMode?(ze(),qe("svg",H_,[...s[1]||(s[1]=[ie("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"},null,-1)])])):(ze(),qe("svg",V_,[...s[2]||(s[2]=[ie("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"},null,-1)])])),ie("span",G_,ot(t.darkMode?"Light mode":"Dark mode"),1)],8,z_)])]))}},X_={key:0,class:"font-semibold"},q_={__name:"AlertBanner",props:{type:{type:String,default:"info",validator:t=>["success","error","info","warning"].includes(t)},title:{type:String,default:""},message:{type:String,default:""}},setup(t){const e={success:"alert-success",error:"rounded-xl border border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950/50 dark:text-red-100",warning:"rounded-xl border border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-100",info:"rounded-xl border border-slate-200 bg-slate-50 text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"};return(n,i)=>t.message||t.title?(ze(),qe("div",{key:0,class:Ot(["px-4 py-3 text-sm",e[t.type]]),role:"alert"},[t.title?(ze(),qe("p",X_,ot(t.title),1)):Tt("",!0),t.message?(ze(),qe("p",{key:1,class:Ot(t.title?"mt-1 opacity-90":"")},ot(t.message),3)):Tt("",!0),bg(n.$slots,"default")],2)):Tt("",!0)}},j_=["disabled"],$_={class:"flex flex-col items-center px-6 py-7 text-center"},Y_=["disabled"],K_=["title"],Z_={class:"truncate"},J_={key:1,class:"mt-2.5 text-xs text-slate-400"},Q_={__name:"StlUploadZone",props:{disabled:{type:Boolean,default:!1},fileName:{type:String,default:""}},emits:["file-selected","invalid-file"],setup(t,{emit:e}){const n=t,i=e,s=$t(!1),r=$t(null);function o(f){return f?.name?.toLowerCase().endsWith(".stl")}function a(f){if(f){if(!o(f)){i("invalid-file","Only .stl files are allowed.");return}i("file-selected",f)}}function l(f){if(f.preventDefault(),s.value=!1,n.disabled)return;const d=f.dataTransfer?.files?.[0];a(d)}function c(f){const d=f.target.files?.[0];a(d),f.target.value=""}function u(){n.disabled||r.value?.click()}return(f,d)=>(ze(),qe("div",{class:Ot(["relative rounded-2xl border bg-white shadow-sm transition dark:bg-slate-900",s.value?"border-indigo-400 bg-indigo-50/50 shadow-md ring-2 ring-indigo-100 dark:border-indigo-500 dark:bg-indigo-950/30 dark:ring-indigo-900/50":"border-slate-200 hover:border-slate-300 hover:shadow dark:border-slate-700 dark:hover:border-slate-600"]),onDragover:d[0]||(d[0]=ff(h=>s.value=!0,["prevent"])),onDragleave:d[1]||(d[1]=ff(h=>s.value=!1,["prevent"])),onDrop:l},[ie("input",{ref_key:"fileInput",ref:r,type:"file",accept:".stl",class:"hidden",disabled:t.disabled,onChange:c},null,40,j_),ie("div",$_,[d[4]||(d[4]=qc('<div class="mb-3.5 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300"><svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"></path></svg></div><p class="text-base font-semibold text-slate-800 dark:text-slate-100"> Drag &amp; drop your STL file </p><p class="mt-1 text-sm text-slate-500 dark:text-slate-400">or</p>',3)),ie("button",{type:"button",class:"btn-primary mt-3.5 inline-flex min-w-[11rem] items-center justify-center gap-2 px-7",disabled:t.disabled,onClick:u},[...d[2]||(d[2]=[ie("svg",{class:"h-4 w-4 shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","aria-hidden":"true"},[ie("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1),An(" Choose file ",-1)])],8,Y_),t.fileName?(ze(),qe("div",{key:0,class:"mt-3.5 inline-flex max-w-full items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-300",title:t.fileName},[d[3]||(d[3]=ie("svg",{class:"h-4 w-4 shrink-0 text-indigo-500 dark:text-indigo-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5","aria-hidden":"true"},[ie("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})],-1)),ie("span",Z_,ot(t.fileName),1)],8,K_)):(ze(),qe("p",J_,".stl files only"))])],34))}},e0={class:"card"},t0={class:"flex flex-col items-center text-center"},n0={class:"mt-6 text-lg font-semibold text-slate-800 dark:text-slate-100"},i0={class:"mt-6 h-2 w-full max-w-md overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700"},s0={class:"mt-8 w-full max-w-sm space-y-2 text-left text-sm"},r0={__name:"ProcessingLoader",props:{step:{type:String,default:"Validating STL"},uploadPercent:{type:Number,default:0}},setup(t){const e=["Validating STL","Processing Geometry","Running AI Analysis","Generating Print Settings","Running Bambu Slicer","Calculating Cost"];return(n,i)=>(ze(),qe("div",e0,[ie("div",t0,[i[0]||(i[0]=ie("div",{class:"h-12 w-12 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600"},null,-1)),ie("p",n0,ot(t.step),1),i[1]||(i[1]=ie("p",{class:"mt-2 text-sm text-slate-500 dark:text-slate-400"}," This may take several minutes. Please keep this tab open. ",-1)),ie("div",i0,[ie("div",{class:"h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500",style:ra({width:`${Math.min(t.uploadPercent||15,90)}%`})},null,4)]),ie("ul",s0,[(ze(),qe(Gt,null,ko(e,(s,r)=>ie("li",{key:s,class:Ot(["flex items-center gap-2",t.step===s?"font-medium text-indigo-600 dark:text-indigo-400":"text-slate-400 dark:text-slate-500"])},[ie("span",{class:Ot(["inline-flex h-5 w-5 items-center justify-center rounded-full text-xs",e.indexOf(t.step)>r?"bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300":t.step===s?"bg-indigo-100 text-indigo-700 dark:bg-indigo-900":"bg-slate-100 dark:bg-slate-800"])},ot(e.indexOf(t.step)>r?"✓":r+1),3),An(" "+ot(s),1)],2)),64))])])]))}};const $c="184",zs={ROTATE:0,DOLLY:1,PAN:2},Is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},o0=0,hf=1,a0=2,To=1,l0=2,dr=3,Vi=0,dn=1,mi=2,_i=0,Hs=1,pf=2,mf=3,gf=4,c0=5,es=100,u0=101,f0=102,d0=103,h0=104,p0=200,m0=201,g0=202,_0=203,Ul=204,Nl=205,x0=206,v0=207,S0=208,b0=209,y0=210,M0=211,E0=212,T0=213,A0=214,Fl=0,Ol=1,Bl=2,Xs=3,kl=4,zl=5,Hl=6,Vl=7,Kh=0,w0=1,R0=2,Zn=0,Zh=1,Jh=2,Qh=3,ep=4,tp=5,np=6,ip=7,sp=300,cs=301,qs=302,Oa=303,Ba=304,pa=306,Gl=1e3,gi=1001,Wl=1002,Wt=1003,C0=1004,qr=1005,Jt=1006,ka=1007,ns=1008,xn=1009,rp=1010,op=1011,wr=1012,Yc=1013,ei=1014,$n=1015,Mi=1016,Kc=1017,Zc=1018,Rr=1020,ap=35902,lp=35899,cp=1021,up=1022,Ln=1023,Ei=1026,is=1027,fp=1028,Jc=1029,us=1030,Qc=1031,eu=1033,Ao=33776,wo=33777,Ro=33778,Co=33779,Xl=35840,ql=35841,jl=35842,$l=35843,Yl=36196,Kl=37492,Zl=37496,Jl=37488,Ql=37489,Wo=37490,ec=37491,tc=37808,nc=37809,ic=37810,sc=37811,rc=37812,oc=37813,ac=37814,lc=37815,cc=37816,uc=37817,fc=37818,dc=37819,hc=37820,pc=37821,mc=36492,gc=36494,_c=36495,xc=36283,vc=36284,Xo=36285,Sc=36286,P0=3200,bc=0,D0=1,Bi="",_n="srgb",qo="srgb-linear",jo="linear",mt="srgb",gs=7680,_f=519,L0=512,I0=513,U0=514,tu=515,N0=516,F0=517,nu=518,O0=519,xf=35044,vf="300 es",Yn=2e3,Cr=2001;function B0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function $o(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function k0(){const t=$o("canvas");return t.style.display="block",t}const Sf={};function bf(...t){const e="THREE."+t.shift();console.log(e,...t)}function dp(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Xe(...t){t=dp(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ft(...t){t=dp(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function yc(...t){const e=t.join(" ");e in Sf||(Sf[e]=!0,Xe(...t))}function z0(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const H0={[Fl]:Ol,[Bl]:Hl,[kl]:Vl,[Xs]:zl,[Ol]:Fl,[Hl]:Bl,[Vl]:kl,[zl]:Xs};class Wi{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yf=1234567;const Sr=Math.PI/180,Pr=180/Math.PI;function Ks(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[t&255]+qt[t>>8&255]+qt[t>>16&255]+qt[t>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[n&63|128]+qt[n>>8&255]+"-"+qt[n>>16&255]+qt[n>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function at(t,e,n){return Math.max(e,Math.min(n,t))}function iu(t,e){return(t%e+e)%e}function V0(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function G0(t,e,n){return t!==e?(n-t)/(e-t):0}function br(t,e,n){return(1-n)*t+n*e}function W0(t,e,n,i){return br(t,e,1-Math.exp(-n*i))}function X0(t,e=1){return e-Math.abs(iu(t,e*2)-e)}function q0(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function j0(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function $0(t,e){return t+Math.floor(Math.random()*(e-t+1))}function Y0(t,e){return t+Math.random()*(e-t)}function K0(t){return t*(.5-Math.random())}function Z0(t){t!==void 0&&(yf=t);let e=yf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function J0(t){return t*Sr}function Q0(t){return t*Pr}function ex(t){return(t&t-1)===0&&t!==0}function tx(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function nx(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ix(t,e,n,i,s){const r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),d=o((e-i)/2),h=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":t.set(a*u,l*f,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*h,a*c);break;case"YXY":t.set(l*h,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*h,a*u,a*c);break;default:Xe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ls(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Po={DEG2RAD:Sr,RAD2DEG:Pr,generateUUID:Ks,clamp:at,euclideanModulo:iu,mapLinear:V0,inverseLerp:G0,lerp:br,damp:W0,pingpong:X0,smoothstep:q0,smootherstep:j0,randInt:$0,randFloat:Y0,randFloatSpread:K0,seededRandom:Z0,degToRad:J0,radToDeg:Q0,isPowerOfTwo:ex,ceilPowerOfTwo:tx,floorPowerOfTwo:nx,setQuaternionFromProperEuler:ix,normalize:nn,denormalize:Ls},xu=class xu{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=at(this.x,e.x,n.x),this.y=at(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=at(this.x,e,n),this.y=at(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xu.prototype.isVector2=!0;let Je=xu;class Ti{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],d=r[o+0],h=r[o+1],g=r[o+2],x=r[o+3];if(f!==x||l!==d||c!==h||u!==g){let p=l*d+c*h+u*g+f*x;p<0&&(d=-d,h=-h,g=-g,x=-x,p=-p);let m=1-a;if(p<.9995){const S=Math.acos(p),E=Math.sin(S);m=Math.sin(m*S)/E,a=Math.sin(a*S)/E,l=l*m+d*a,c=c*m+h*a,u=u*m+g*a,f=f*m+x*a}else{l=l*m+d*a,c=c*m+h*a,u=u*m+g*a,f=f*m+x*a;const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],h=r[o+2],g=r[o+3];return e[n]=a*g+u*f+l*h-c*d,e[n+1]=l*g+u*d+c*f-a*h,e[n+2]=c*g+u*h+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),h=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vu=class vu{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Mf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Mf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=at(this.x,e.x,n.x),this.y=at(this.y,e.y,n.y),this.z=at(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=at(this.x,e,n),this.y=at(this.y,e,n),this.z=at(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return za.copy(this).projectOnVector(e),this.sub(za)}reflect(e){return this.sub(za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vu.prototype.isVector3=!0;let z=vu;const za=new z,Mf=new Ti,Su=class Su{constructor(e,n,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],x=s[0],p=s[3],m=s[6],S=s[1],E=s[4],M=s[7],P=s[2],T=s[5],D=s[8];return r[0]=o*x+a*S+l*P,r[3]=o*p+a*E+l*T,r[6]=o*m+a*M+l*D,r[1]=c*x+u*S+f*P,r[4]=c*p+u*E+f*T,r[7]=c*m+u*M+f*D,r[2]=d*x+h*S+g*P,r[5]=d*p+h*E+g*T,r[8]=d*m+h*M+g*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,h=c*r-o*l,g=n*f+i*d+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(s*c-u*i)*x,e[2]=(a*i-s*o)*x,e[3]=d*x,e[4]=(u*n-s*l)*x,e[5]=(s*r-a*n)*x,e[6]=h*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*r)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ha.makeScale(e,n)),this}rotate(e){return this.premultiply(Ha.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ha.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Su.prototype.isMatrix3=!0;let Ye=Su;const Ha=new Ye,Ef=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tf=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sx(){const t={enabled:!0,workingColorSpace:qo,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(s.r=xi(s.r),s.g=xi(s.g),s.b=xi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(s.r=Vs(s.r),s.g=Vs(s.g),s.b=Vs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bi?jo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return yc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return yc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[qo]:{primaries:e,whitePoint:i,transfer:jo,toXYZ:Ef,fromXYZ:Tf,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:Ef,fromXYZ:Tf,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),t}const ct=sx();function xi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let _s;class rx{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_s===void 0&&(_s=$o("canvas")),_s.width=e.width,_s.height=e.height;const s=_s.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=_s}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=$o("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=xi(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(xi(n[i]/255)*255):n[i]=xi(n[i]);return{data:n,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ox=0;class su{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Ks(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Va(s[o].image)):r.push(Va(s[o]))}else r=Va(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Va(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?rx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}let ax=0;const Ga=new z;class an extends Wi{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=gi,s=gi,r=Jt,o=ns,a=Ln,l=xn,c=an.DEFAULT_ANISOTROPY,u=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=Ks(),this.name="",this.source=new su(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ga).x}get height(){return this.source.getSize(Ga).y}get depth(){return this.source.getSize(Ga).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Xe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Xe(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Gl:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case Wl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Gl:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case Wl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=sp;an.DEFAULT_ANISOTROPY=1;const bu=class bu{constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,M=(h+1)/2,P=(m+1)/2,T=(u+d)/4,D=(f+x)/4,v=(g+p)/4;return E>M&&E>P?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=T/i,r=D/i):M>P?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=v/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=D/r,s=v/r),this.set(i,s,r,n),this}let S=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(f-x)/S,this.z=(d-u)/S,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=at(this.x,e.x,n.x),this.y=at(this.y,e.y,n.y),this.z=at(this.z,e.z,n.z),this.w=at(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=at(this.x,e,n),this.y=at(this.y,e,n),this.z=at(this.z,e,n),this.w=at(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bu.prototype.isVector4=!0;let Pt=bu;class lx extends Wi{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:i.depth},r=new an(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new su(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends lx{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class hp extends an{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cx extends an{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jo=class Jo{constructor(e,n,i,s,r,o,a,l,c,u,f,d,h,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,f,d,h,g,x,p)}set(e,n,i,s,r,o,a,l,c,u,f,d,h,g,x,p){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=s,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=d,m[3]=h,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jo().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,s=1/xs.setFromMatrixColumn(e,0).length(),r=1/xs.setFromMatrixColumn(e,1).length(),o=1/xs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,x=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+g*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=g+h*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,x=c*f;n[0]=d+x*a,n[4]=g*a-h,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,x=c*f;n[0]=d-x*a,n[4]=-o*f,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=x-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,x=a*f;n[0]=l*u,n[4]=g*c-h,n[8]=d*c+x,n[1]=l*f,n[5]=x*c+d,n[9]=h*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=x-d*f,n[8]=g*f+h,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*f+g,n[10]=d-x*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+x,n[5]=o*u,n[9]=h*f-g,n[2]=g*f-h,n[6]=a*u,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ux,e,fx)}lookAt(e,n,i){const s=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Pi.crossVectors(i,mn),Pi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Pi.crossVectors(i,mn)),Pi.normalize(),jr.crossVectors(mn,Pi),s[0]=Pi.x,s[4]=jr.x,s[8]=mn.x,s[1]=Pi.y,s[5]=jr.y,s[9]=mn.y,s[2]=Pi.z,s[6]=jr.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],x=i[6],p=i[10],m=i[14],S=i[3],E=i[7],M=i[11],P=i[15],T=s[0],D=s[4],v=s[8],w=s[12],U=s[1],C=s[5],H=s[9],G=s[13],X=s[2],I=s[6],B=s[10],N=s[14],Y=s[3],ce=s[7],de=s[11],Ee=s[15];return r[0]=o*T+a*U+l*X+c*Y,r[4]=o*D+a*C+l*I+c*ce,r[8]=o*v+a*H+l*B+c*de,r[12]=o*w+a*G+l*N+c*Ee,r[1]=u*T+f*U+d*X+h*Y,r[5]=u*D+f*C+d*I+h*ce,r[9]=u*v+f*H+d*B+h*de,r[13]=u*w+f*G+d*N+h*Ee,r[2]=g*T+x*U+p*X+m*Y,r[6]=g*D+x*C+p*I+m*ce,r[10]=g*v+x*H+p*B+m*de,r[14]=g*w+x*G+p*N+m*Ee,r[3]=S*T+E*U+M*X+P*Y,r[7]=S*D+E*C+M*I+P*ce,r[11]=S*v+E*H+M*B+P*de,r[15]=S*w+E*G+M*N+P*Ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],x=e[7],p=e[11],m=e[15],S=l*h-c*d,E=a*h-c*f,M=a*d-l*f,P=o*h-c*u,T=o*d-l*u,D=o*f-a*u;return n*(x*S-p*E+m*M)-i*(g*S-p*P+m*T)+s*(g*E-x*P+m*D)-r*(g*M-x*T+p*D)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],x=e[13],p=e[14],m=e[15],S=n*a-i*o,E=n*l-s*o,M=n*c-r*o,P=i*l-s*a,T=i*c-r*a,D=s*c-r*l,v=u*x-f*g,w=u*p-d*g,U=u*m-h*g,C=f*p-d*x,H=f*m-h*x,G=d*m-h*p,X=S*G-E*H+M*C+P*U-T*w+D*v;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/X;return e[0]=(a*G-l*H+c*C)*I,e[1]=(s*H-i*G-r*C)*I,e[2]=(x*D-p*T+m*P)*I,e[3]=(d*T-f*D-h*P)*I,e[4]=(l*U-o*G-c*w)*I,e[5]=(n*G-s*U+r*w)*I,e[6]=(p*M-g*D-m*E)*I,e[7]=(u*D-d*M+h*E)*I,e[8]=(o*H-a*U+c*v)*I,e[9]=(i*U-n*H-r*v)*I,e[10]=(g*T-x*M+m*S)*I,e[11]=(f*M-u*T-h*S)*I,e[12]=(a*w-o*C-l*v)*I,e[13]=(n*C-i*w+s*v)*I,e[14]=(x*E-g*P-p*S)*I,e[15]=(u*P-f*E+d*S)*I,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,f=a+a,d=r*c,h=r*u,g=r*f,x=o*u,p=o*f,m=a*f,S=l*c,E=l*u,M=l*f,P=i.x,T=i.y,D=i.z;return s[0]=(1-(x+m))*P,s[1]=(h+M)*P,s[2]=(g-E)*P,s[3]=0,s[4]=(h-M)*T,s[5]=(1-(d+m))*T,s[6]=(p+S)*T,s[7]=0,s[8]=(g+E)*D,s[9]=(p-S)*D,s[10]=(1-(d+x))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),n.identity(),this;let o=xs.set(s[0],s[1],s[2]).length();const a=xs.set(s[4],s[5],s[6]).length(),l=xs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Rn.copy(this);const c=1/o,u=1/a,f=1/l;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=f,Rn.elements[9]*=f,Rn.elements[10]*=f,n.setFromRotationMatrix(Rn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=Yn,l=!1){const c=this.elements,u=2*r/(n-e),f=2*r/(i-s),d=(n+e)/(n-e),h=(i+s)/(i-s);let g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===Yn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Cr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=Yn,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-s),d=-(n+e)/(n-e),h=-(i+s)/(i-s);let g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===Yn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Cr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Jo.prototype.isMatrix4=!0;let Rt=Jo;const xs=new z,Rn=new Rt,ux=new z(0,0,0),fx=new z(1,1,1),Pi=new z,jr=new z,mn=new z,Af=new Rt,wf=new Ti;class Gi{constructor(e=0,n=0,i=0,s=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(n){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Af.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Af,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wf.setFromEuler(this),this.setFromQuaternion(wf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class pp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dx=0;const Rf=new z,vs=new Ti,ri=new Rt,$r=new z,nr=new z,hx=new z,px=new Ti,Cf=new z(1,0,0),Pf=new z(0,1,0),Df=new z(0,0,1),Lf={type:"added"},mx={type:"removed"},Ss={type:"childadded",child:null},Wa={type:"childremoved",child:null};class Ht extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new z,n=new Gi,i=new Ti,s=new z(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Rt},normalMatrix:{value:new Ye}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return vs.setFromAxisAngle(e,n),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,n){return vs.setFromAxisAngle(e,n),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(Cf,e)}rotateY(e){return this.rotateOnAxis(Pf,e)}rotateZ(e){return this.rotateOnAxis(Df,e)}translateOnAxis(e,n){return Rf.copy(e).applyQuaternion(this.quaternion),this.position.add(Rf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Cf,e)}translateY(e){return this.translateOnAxis(Pf,e)}translateZ(e){return this.translateOnAxis(Df,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?$r.copy(e):$r.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(nr,$r,this.up):ri.lookAt($r,nr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(ri),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lf),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(mx),Wa.child=e,this.dispatchEvent(Wa),Wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ri.multiply(e.parent.matrixWorld)),e.applyMatrix4(ri),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lf),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,hx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,px,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ht.DEFAULT_UP=new z(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Yr extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gx={type:"move"};class Xa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(gx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Yr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},Kr={h:0,s:0,l:0};function qa(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class lt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=ct.workingColorSpace){return this.r=e,this.g=n,this.b=i,ct.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=ct.workingColorSpace){if(e=iu(e,1),n=at(n,0,1),i=at(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=qa(o,r,e+1/3),this.g=qa(o,r,e),this.b=qa(o,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,n=_n){function i(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=_n){const i=mp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return ct.workingToColorSpace(jt.copy(this),e),Math.round(at(jt.r*255,0,255))*65536+Math.round(at(jt.g*255,0,255))*256+Math.round(at(jt.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ct.workingColorSpace){ct.workingToColorSpace(jt.copy(this),n);const i=jt.r,s=jt.g,r=jt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ct.workingColorSpace){return ct.workingToColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=_n){ct.workingToColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,s=jt.b;return e!==_n?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Di),this.setHSL(Di.h+e,Di.s+n,Di.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Di),e.getHSL(Kr);const i=br(Di.h,Kr.h,n),s=br(Di.s,Kr.s,n),r=br(Di.l,Kr.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new lt;lt.NAMES=mp;class _x extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Cn=new z,oi=new z,ja=new z,ai=new z,bs=new z,ys=new z,If=new z,$a=new z,Ya=new z,Ka=new z,Za=new Pt,Ja=new Pt,Qa=new Pt;class Dn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Cn.subVectors(e,n),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Cn.subVectors(s,n),oi.subVectors(i,n),ja.subVectors(e,n);const o=Cn.dot(Cn),a=Cn.dot(oi),l=Cn.dot(ja),c=oi.dot(oi),u=oi.dot(ja),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-h-g,g,h)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Za.setScalar(0),Ja.setScalar(0),Qa.setScalar(0),Za.fromBufferAttribute(e,n),Ja.fromBufferAttribute(e,i),Qa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Za,r.x),o.addScaledVector(Ja,r.y),o.addScaledVector(Qa,r.z),o}static isFrontFacing(e,n,i,s){return Cn.subVectors(i,n),oi.subVectors(e,n),Cn.cross(oi).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Cn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Dn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return Dn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;bs.subVectors(s,i),ys.subVectors(r,i),$a.subVectors(e,i);const l=bs.dot($a),c=ys.dot($a);if(l<=0&&c<=0)return n.copy(i);Ya.subVectors(e,s);const u=bs.dot(Ya),f=ys.dot(Ya);if(u>=0&&f<=u)return n.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(bs,o);Ka.subVectors(e,r);const h=bs.dot(Ka),g=ys.dot(Ka);if(g>=0&&h<=g)return n.copy(r);const x=h*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(ys,a);const p=u*g-h*f;if(p<=0&&f-u>=0&&h-g>=0)return If.subVectors(r,s),a=(f-u)/(f-u+(h-g)),n.copy(s).addScaledVector(If,a);const m=1/(p+x+d);return o=x*m,a=d*m,n.copy(i).addScaledVector(bs,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Hi{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Zr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Zr.copy(i.boundingBox)),Zr.applyMatrix4(e.matrixWorld),this.union(Zr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),Jr.subVectors(this.max,ir),Ms.subVectors(e.a,ir),Es.subVectors(e.b,ir),Ts.subVectors(e.c,ir),Li.subVectors(Es,Ms),Ii.subVectors(Ts,Es),$i.subVectors(Ms,Ts);let n=[0,-Li.z,Li.y,0,-Ii.z,Ii.y,0,-$i.z,$i.y,Li.z,0,-Li.x,Ii.z,0,-Ii.x,$i.z,0,-$i.x,-Li.y,Li.x,0,-Ii.y,Ii.x,0,-$i.y,$i.x,0];return!el(n,Ms,Es,Ts,Jr)||(n=[1,0,0,0,1,0,0,0,1],!el(n,Ms,Es,Ts,Jr))?!1:(Qr.crossVectors(Li,Ii),n=[Qr.x,Qr.y,Qr.z],el(n,Ms,Es,Ts,Jr))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const li=[new z,new z,new z,new z,new z,new z,new z,new z],Pn=new z,Zr=new Hi,Ms=new z,Es=new z,Ts=new z,Li=new z,Ii=new z,$i=new z,ir=new z,Jr=new z,Qr=new z,Yi=new z;function el(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Yi.fromArray(t,r);const a=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),l=e.dot(Yi),c=n.dot(Yi),u=i.dot(Yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Nt=new z,eo=new Je;let xx=0;class Sn extends Wi{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xx++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=xf,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)eo.fromBufferAttribute(this,n),eo.applyMatrix3(e),this.setXY(n,eo.x,eo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ls(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ls(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ls(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ls(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ls(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class gp extends Sn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class _p extends Sn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ln extends Sn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const vx=new Hi,sr=new z,tl=new z;class ma{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):vx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const n=sr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(sr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(tl)),this.expandByPoint(sr.copy(e.center).sub(tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Sx=0;const Mn=new Rt,nl=new Ht,As=new z,gn=new Hi,rr=new Hi,zt=new z;class bn extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(B0(e)?_p:gp)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return nl.lookAt(e),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ln(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ma);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];rr.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(gn.min,rr.min),gn.expandByPoint(zt),zt.addVectors(gn.max,rr.max),gn.expandByPoint(zt)):(gn.expandByPoint(rr.min),gn.expandByPoint(rr.max))}gn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)zt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(zt));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)zt.fromBufferAttribute(a,c),l&&(As.fromBufferAttribute(e,c),zt.add(As)),s=Math.max(s,i.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new z,l[v]=new z;const c=new z,u=new z,f=new z,d=new Je,h=new Je,g=new Je,x=new z,p=new z;function m(v,w,U){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,w),f.fromBufferAttribute(i,U),d.fromBufferAttribute(r,v),h.fromBufferAttribute(r,w),g.fromBufferAttribute(r,U),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const C=1/(h.x*g.y-g.x*h.y);isFinite(C)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(C),p.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(C),a[v].add(x),a[w].add(x),a[U].add(x),l[v].add(p),l[w].add(p),l[U].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,w=S.length;v<w;++v){const U=S[v],C=U.start,H=U.count;for(let G=C,X=C+H;G<X;G+=3)m(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const E=new z,M=new z,P=new z,T=new z;function D(v){P.fromBufferAttribute(s,v),T.copy(P);const w=a[v];E.copy(w),E.sub(P.multiplyScalar(P.dot(w))).normalize(),M.crossVectors(T,w);const C=M.dot(l[v])<0?-1:1;o.setXYZW(v,E.x,E.y,E.z,C)}for(let v=0,w=S.length;v<w;++v){const U=S[v],C=U.start,H=U.count;for(let G=C,X=C+H;G<X;G+=3)D(e.getX(G+0)),D(e.getX(G+1)),D(e.getX(G+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),x=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,x),o.fromBufferAttribute(n,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)zt.fromBufferAttribute(e,n),zt.normalize(),e.setXYZ(n,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let m=0;m<u;m++)d[g++]=c[h++]}return new Sn(d,u,f)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new bn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let bx=0;class Zs extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=Hs,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=Nl,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_f,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Xe(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Xe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ul&&(i.blendSrc=this.blendSrc),this.blendDst!==Nl&&(i.blendDst=this.blendDst),this.blendEquation!==es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_f&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ci=new z,il=new z,to=new z,Ui=new z,sl=new z,no=new z,rl=new z;class ru{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ci)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ci.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ci.copy(this.origin).addScaledVector(this.direction,n),ci.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){il.copy(e).add(n).multiplyScalar(.5),to.copy(n).sub(e).normalize(),Ui.copy(this.origin).sub(il);const r=e.distanceTo(n)*.5,o=-this.direction.dot(to),a=Ui.dot(this.direction),l=-Ui.dot(to),c=Ui.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const x=1/u;f*=x,d*=x,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(il).addScaledVector(to,d),h}intersectSphere(e,n){ci.subVectors(e.center,this.origin);const i=ci.dot(this.direction),s=ci.dot(ci)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,ci)!==null}intersectTriangle(e,n,i,s,r){sl.subVectors(n,e),no.subVectors(i,e),rl.crossVectors(sl,no);let o=this.direction.dot(rl),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,e);const l=a*this.direction.dot(no.crossVectors(Ui,no));if(l<0)return null;const c=a*this.direction.dot(sl.cross(Ui));if(c<0||l+c>o)return null;const u=-a*Ui.dot(rl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xp extends Zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=Kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Uf=new Rt,Ki=new ru,io=new ma,Nf=new z,so=new z,ro=new z,oo=new z,ol=new z,ao=new z,Ff=new z,lo=new z;class ti extends Ht{constructor(e=new bn,n=new xp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){ao.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(ol.fromBufferAttribute(f,e),o?ao.addScaledVector(ol,u):ao.addScaledVector(ol.sub(n),u))}n.add(ao)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),io.copy(i.boundingSphere),io.applyMatrix4(r),Ki.copy(e.ray).recast(e.near),!(io.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(io,Nf)===null||Ki.origin.distanceToSquared(Nf)>(e.far-e.near)**2))&&(Uf.copy(r).invert(),Ki.copy(e.ray).applyMatrix4(Uf),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ki)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,h.start),E=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let M=S,P=E;M<P;M+=3){const T=a.getX(M),D=a.getX(M+1),v=a.getX(M+2);s=co(this,m,e,i,c,u,f,T,D,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{const g=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let p=g,m=x;p<m;p+=3){const S=a.getX(p),E=a.getX(p+1),M=a.getX(p+2);s=co(this,o,e,i,c,u,f,S,E,M),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const p=d[g],m=o[p.materialIndex],S=Math.max(p.start,h.start),E=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let M=S,P=E;M<P;M+=3){const T=M,D=M+1,v=M+2;s=co(this,m,e,i,c,u,f,T,D,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,n.push(s))}}else{const g=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let p=g,m=x;p<m;p+=3){const S=p,E=p+1,M=p+2;s=co(this,o,e,i,c,u,f,S,E,M),s&&(s.faceIndex=Math.floor(p/3),n.push(s))}}}}function yx(t,e,n,i,s,r,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Vi,a),l===null)return null;lo.copy(a),lo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(lo);return c<n.near||c>n.far?null:{distance:c,point:lo.clone(),object:t}}function co(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,so),t.getVertexPosition(l,ro),t.getVertexPosition(c,oo);const u=yx(t,e,n,i,so,ro,oo,Ff);if(u){const f=new z;Dn.getBarycoord(Ff,so,ro,oo,f),s&&(u.uv=Dn.getInterpolatedAttribute(s,a,l,c,f,new Je)),r&&(u.uv1=Dn.getInterpolatedAttribute(r,a,l,c,f,new Je)),o&&(u.normal=Dn.getInterpolatedAttribute(o,a,l,c,f,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};Dn.getNormal(so,ro,oo,d.normal),u.face=d,u.barycoord=f}return u}class Mx extends an{constructor(e=null,n=1,i=1,s,r,o,a,l,c=Wt,u=Wt,f,d){super(null,o,a,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const al=new z,Ex=new z,Tx=new Ye;class Oi{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=al.subVectors(i,n).cross(Ex.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const s=e.delta(al),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Tx.getNormalMatrix(e),s=this.coplanarPoint(al).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new ma,Ax=new Je(.5,.5),uo=new z;class ou{constructor(e=new Oi,n=new Oi,i=new Oi,s=new Oi,r=new Oi,o=new Oi){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Yn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],h=r[7],g=r[8],x=r[9],p=r[10],m=r[11],S=r[12],E=r[13],M=r[14],P=r[15];if(s[0].setComponents(c-o,h-u,m-g,P-S).normalize(),s[1].setComponents(c+o,h+u,m+g,P+S).normalize(),s[2].setComponents(c+a,h+f,m+x,P+E).normalize(),s[3].setComponents(c-a,h-f,m-x,P-E).normalize(),i)s[4].setComponents(l,d,p,M).normalize(),s[5].setComponents(c-l,h-d,m-p,P-M).normalize();else if(s[4].setComponents(c-l,h-d,m-p,P-M).normalize(),n===Yn)s[5].setComponents(c+l,h+d,m+p,P+M).normalize();else if(n===Cr)s[5].setComponents(l,d,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){Zi.center.set(0,0,0);const n=Ax.distanceTo(e.center);return Zi.radius=.7071067811865476+n,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(uo.x=s.normal.x>0?e.max.x:e.min.x,uo.y=s.normal.y>0?e.max.y:e.min.y,uo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(uo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class vp extends Zs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yo=new z,Ko=new z,Of=new Rt,or=new ru,fo=new ma,ll=new z,Bf=new z;class wx extends Ht{constructor(e=new bn,n=new vp){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)Yo.fromBufferAttribute(n,s-1),Ko.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Yo.distanceTo(Ko);e.setAttribute("lineDistance",new ln(i,1))}else Xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fo.copy(i.boundingSphere),fo.applyMatrix4(s),fo.radius+=r,e.ray.intersectsSphere(fo)===!1)return;Of.copy(s).invert(),or.copy(e.ray).applyMatrix4(Of);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=h,p=g-1;x<p;x+=c){const m=u.getX(x),S=u.getX(x+1),E=ho(this,e,or,l,m,S,x);E&&n.push(E)}if(this.isLineLoop){const x=u.getX(g-1),p=u.getX(h),m=ho(this,e,or,l,x,p,g-1);m&&n.push(m)}}else{const h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=h,p=g-1;x<p;x+=c){const m=ho(this,e,or,l,x,x+1,x);m&&n.push(m)}if(this.isLineLoop){const x=ho(this,e,or,l,g-1,h,g-1);x&&n.push(x)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ho(t,e,n,i,s,r,o){const a=t.geometry.attributes.position;if(Yo.fromBufferAttribute(a,s),Ko.fromBufferAttribute(a,r),n.distanceSqToSegment(Yo,Ko,ll,Bf)>i)return;ll.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(ll);if(!(c<e.near||c>e.far))return{distance:c,point:Bf.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const kf=new z,zf=new z;class Rx extends wx{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)kf.fromBufferAttribute(n,s),zf.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+kf.distanceTo(zf);e.setAttribute("lineDistance",new ln(i,1))}else Xe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Sp extends an{constructor(e=[],n=cs,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class js extends an{constructor(e,n,i=ei,s,r,o,a=Wt,l=Wt,c,u=Ei,f=1){if(u!==Ei&&u!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new su(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Cx extends js{constructor(e,n=ei,i=cs,s,r,o=Wt,a=Wt,l,c=Ei){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class bp extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nr extends bn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(f,2));function g(x,p,m,S,E,M,P,T,D,v,w){const U=M/D,C=P/v,H=M/2,G=P/2,X=T/2,I=D+1,B=v+1;let N=0,Y=0;const ce=new z;for(let de=0;de<B;de++){const Ee=de*C-G;for(let Ce=0;Ce<I;Ce++){const We=Ce*U-H;ce[x]=We*S,ce[p]=Ee*E,ce[m]=X,c.push(ce.x,ce.y,ce.z),ce[x]=0,ce[p]=0,ce[m]=T>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(Ce/D),f.push(1-de/v),N+=1}}for(let de=0;de<v;de++)for(let Ee=0;Ee<D;Ee++){const Ce=d+Ee+I*de,We=d+Ee+I*(de+1),it=d+(Ee+1)+I*(de+1),He=d+(Ee+1)+I*de;l.push(Ce,We,He),l.push(We,it,He),Y+=6}a.addGroup(h,Y,w),h+=Y,d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ga extends bn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=n/l,h=[],g=[],x=[],p=[];for(let m=0;m<u;m++){const S=m*d-o;for(let E=0;E<c;E++){const M=E*f-r;g.push(M,-S,0),x.push(0,0,1),p.push(E/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<a;S++){const E=S+c*m,M=S+c*(m+1),P=S+1+c*(m+1),T=S+1+c*m;h.push(E,M,T),h.push(M,P,T)}this.setIndex(h),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(x,3)),this.setAttribute("uv",new ln(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.width,e.height,e.widthSegments,e.heightSegments)}}function $s(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];if(Hf(s))s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(Hf(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function sn(t){const e={};for(let n=0;n<t.length;n++){const i=$s(t[n]);for(const s in i)e[s]=i[s]}return e}function Hf(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Px(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function yp(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const Dx={clone:$s,merge:sn};var Lx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ix=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends Zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lx,this.fragmentShader=Ix,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=Px(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ux extends ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Nx extends Zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Fx extends Zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=P0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ox extends Zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Vf={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(Gf(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!Gf(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function Gf(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Bx{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],g=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const kx=new Bx;class au{constructor(e){this.manager=e!==void 0?e:kx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}au.DEFAULT_MATERIAL_NAME="__DEFAULT";const ui={};class zx extends Error{constructor(e,n){super(e),this.response=n}}class Hx extends au{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Vf.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{n&&n(r),this.manager.itemEnd(e)},0);return}if(ui[e]!==void 0){ui[e].push({onLoad:n,onProgress:i,onError:s});return}ui[e]=[],ui[e].push({onLoad:n,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Xe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ui[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),h=d?parseInt(d):0,g=h!==0;let x=0;const p=new ReadableStream({start(m){S();function S(){f.read().then(({done:E,value:M})=>{if(E)m.close();else{x+=M.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:h});for(let T=0,D=u.length;T<D;T++){const v=u[T];v.onProgress&&v.onProgress(P)}m.enqueue(M),S()}},E=>{m.error(E)})}}});return new Response(p)}else throw new zx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,h=new TextDecoder(d);return c.arrayBuffer().then(g=>h.decode(g))}}}).then(c=>{Vf.add(`file:${e}`,c);const u=ui[e];delete ui[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onLoad&&h.onLoad(c)}}).catch(c=>{const u=ui[e];if(u===void 0)throw this.manager.itemError(e),c;delete ui[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class lu extends Ht{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class Vx extends lu{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const cl=new Rt,Wf=new z,Xf=new z;class Gx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ou,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Wf.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wf),Xf.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Xf),n.updateMatrixWorld(),cl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cl,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Cr||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(cl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const po=new z,mo=new Ti,Hn=new z;class Mp extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=Yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(po,mo,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,Hn.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(po,mo,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new z,qf=new Je,jf=new Je;class Tn extends Mp{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Pr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pr*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,n){return this.getViewBounds(e,qf,jf),n.subVectors(jf,qf)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Sr*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class cu extends Mp{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Wx extends Gx{constructor(){super(new cu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $f extends lu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Wx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class Xx extends lu{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ws=-90,Rs=1;class qx extends Ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Tn(ws,Rs,e,n);s.layers=this.layers,this.add(s);const r=new Tn(ws,Rs,e,n);r.layers=this.layers,this.add(r);const o=new Tn(ws,Rs,e,n);o.layers=this.layers,this.add(o);const a=new Tn(ws,Rs,e,n);a.layers=this.layers,this.add(a);const l=new Tn(ws,Rs,e,n);l.layers=this.layers,this.add(l);const c=new Tn(ws,Rs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Cr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class jx extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Yf{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=at(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(at(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const yu=class yu{constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){const r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};yu.prototype.isMatrix2=!0;let Kf=yu;class $x extends Rx{constructor(e=10,n=10,i=4473924,s=8947848){i=new lt(i),s=new lt(s);const r=n/2,o=e/n,a=e/2,l=[],c=[];for(let d=0,h=0,g=-a;d<=n;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const x=d===r?i:s;x.toArray(c,h),h+=3,x.toArray(c,h),h+=3,x.toArray(c,h),h+=3,x.toArray(c,h),h+=3}const u=new bn;u.setAttribute("position",new ln(l,3)),u.setAttribute("color",new ln(c,3));const f=new vp({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Yx extends Wi{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Xe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Zf(t,e,n,i){const s=Kx(i);switch(n){case cp:return t*e;case fp:return t*e/s.components*s.byteLength;case Jc:return t*e/s.components*s.byteLength;case us:return t*e*2/s.components*s.byteLength;case Qc:return t*e*2/s.components*s.byteLength;case up:return t*e*3/s.components*s.byteLength;case Ln:return t*e*4/s.components*s.byteLength;case eu:return t*e*4/s.components*s.byteLength;case Ao:case wo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ro:case Co:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ql:case $l:return Math.max(t,16)*Math.max(e,8)/4;case Xl:case jl:return Math.max(t,8)*Math.max(e,8)/2;case Yl:case Kl:case Jl:case Ql:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Zl:case Wo:case ec:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case tc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ic:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case sc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case rc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case oc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case ac:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case lc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case cc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case uc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case fc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case dc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case hc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case pc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case mc:case gc:case _c:return Math.ceil(t/4)*Math.ceil(e/4)*16;case xc:case vc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Xo:case Sc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Kx(t){switch(t){case xn:case rp:return{byteLength:1,components:1};case wr:case op:case Mi:return{byteLength:2,components:1};case Kc:case Zc:return{byteLength:2,components:4};case ei:case Yc:case $n:return{byteLength:4,components:1};case ap:case lp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$c}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$c);function Ep(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function Zx(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],x=f[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const x=f[h];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var Jx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qx=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ev=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ov=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,av=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_v=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,vv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,bv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,yv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Mv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ev=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Tv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Av=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Cv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Pv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Dv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Lv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Iv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Uv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ov=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Hv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Wv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Xv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$v=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Kv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eS=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,tS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_S=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,xS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ES=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,RS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,CS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,US=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,NS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,FS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,OS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,BS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,VS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,GS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ZS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ib=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ob=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ab=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ub=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,db=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_b=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Mb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ab=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Db=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:Jx,alphahash_pars_fragment:Qx,alphamap_fragment:ev,alphamap_pars_fragment:tv,alphatest_fragment:nv,alphatest_pars_fragment:iv,aomap_fragment:sv,aomap_pars_fragment:rv,batching_pars_vertex:ov,batching_vertex:av,begin_vertex:lv,beginnormal_vertex:cv,bsdfs:uv,iridescence_fragment:fv,bumpmap_pars_fragment:dv,clipping_planes_fragment:hv,clipping_planes_pars_fragment:pv,clipping_planes_pars_vertex:mv,clipping_planes_vertex:gv,color_fragment:_v,color_pars_fragment:xv,color_pars_vertex:vv,color_vertex:Sv,common:bv,cube_uv_reflection_fragment:yv,defaultnormal_vertex:Mv,displacementmap_pars_vertex:Ev,displacementmap_vertex:Tv,emissivemap_fragment:Av,emissivemap_pars_fragment:wv,colorspace_fragment:Rv,colorspace_pars_fragment:Cv,envmap_fragment:Pv,envmap_common_pars_fragment:Dv,envmap_pars_fragment:Lv,envmap_pars_vertex:Iv,envmap_physical_pars_fragment:Wv,envmap_vertex:Uv,fog_vertex:Nv,fog_pars_vertex:Fv,fog_fragment:Ov,fog_pars_fragment:Bv,gradientmap_pars_fragment:kv,lightmap_pars_fragment:zv,lights_lambert_fragment:Hv,lights_lambert_pars_fragment:Vv,lights_pars_begin:Gv,lights_toon_fragment:Xv,lights_toon_pars_fragment:qv,lights_phong_fragment:jv,lights_phong_pars_fragment:$v,lights_physical_fragment:Yv,lights_physical_pars_fragment:Kv,lights_fragment_begin:Zv,lights_fragment_maps:Jv,lights_fragment_end:Qv,lightprobes_pars_fragment:eS,logdepthbuf_fragment:tS,logdepthbuf_pars_fragment:nS,logdepthbuf_pars_vertex:iS,logdepthbuf_vertex:sS,map_fragment:rS,map_pars_fragment:oS,map_particle_fragment:aS,map_particle_pars_fragment:lS,metalnessmap_fragment:cS,metalnessmap_pars_fragment:uS,morphinstance_vertex:fS,morphcolor_vertex:dS,morphnormal_vertex:hS,morphtarget_pars_vertex:pS,morphtarget_vertex:mS,normal_fragment_begin:gS,normal_fragment_maps:_S,normal_pars_fragment:xS,normal_pars_vertex:vS,normal_vertex:SS,normalmap_pars_fragment:bS,clearcoat_normal_fragment_begin:yS,clearcoat_normal_fragment_maps:MS,clearcoat_pars_fragment:ES,iridescence_pars_fragment:TS,opaque_fragment:AS,packing:wS,premultiplied_alpha_fragment:RS,project_vertex:CS,dithering_fragment:PS,dithering_pars_fragment:DS,roughnessmap_fragment:LS,roughnessmap_pars_fragment:IS,shadowmap_pars_fragment:US,shadowmap_pars_vertex:NS,shadowmap_vertex:FS,shadowmask_pars_fragment:OS,skinbase_vertex:BS,skinning_pars_vertex:kS,skinning_vertex:zS,skinnormal_vertex:HS,specularmap_fragment:VS,specularmap_pars_fragment:GS,tonemapping_fragment:WS,tonemapping_pars_fragment:XS,transmission_fragment:qS,transmission_pars_fragment:jS,uv_pars_fragment:$S,uv_pars_vertex:YS,uv_vertex:KS,worldpos_vertex:ZS,background_vert:JS,background_frag:QS,backgroundCube_vert:eb,backgroundCube_frag:tb,cube_vert:nb,cube_frag:ib,depth_vert:sb,depth_frag:rb,distance_vert:ob,distance_frag:ab,equirect_vert:lb,equirect_frag:cb,linedashed_vert:ub,linedashed_frag:fb,meshbasic_vert:db,meshbasic_frag:hb,meshlambert_vert:pb,meshlambert_frag:mb,meshmatcap_vert:gb,meshmatcap_frag:_b,meshnormal_vert:xb,meshnormal_frag:vb,meshphong_vert:Sb,meshphong_frag:bb,meshphysical_vert:yb,meshphysical_frag:Mb,meshtoon_vert:Eb,meshtoon_frag:Tb,points_vert:Ab,points_frag:wb,shadow_vert:Rb,shadow_frag:Cb,sprite_vert:Pb,sprite_frag:Db},Ae={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new z},probesMax:{value:new z},probesResolution:{value:new z}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},qn={basic:{uniforms:sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:sn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:sn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new lt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:sn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:sn([Ae.points,Ae.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:sn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:sn([Ae.common,Ae.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:sn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:sn([Ae.sprite,Ae.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:sn([Ae.common,Ae.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:sn([Ae.lights,Ae.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};qn.physical={uniforms:sn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const go={r:0,b:0,g:0},Lb=new Rt,Tp=new Ye;Tp.set(-1,0,0,0,1,0,0,0,1);function Ib(t,e,n,i,s,r){const o=new lt(0);let a=s===!0?0:1,l,c,u=null,f=0,d=null;function h(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){const M=S.backgroundBlurriness>0;E=e.get(E,M)}return E}function g(S){let E=!1;const M=h(S);M===null?p(o,a):M&&M.isColor&&(p(M,1),E=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(S,E){const M=h(E);M&&(M.isCubeTexture||M.mapping===pa)?(c===void 0&&(c=new ti(new Nr(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:$s(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,T,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Lb.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Tp),c.material.toneMapped=ct.getTransfer(M.colorSpace)!==mt,(u!==M||f!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,d=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ti(new ga(2,2),new ni({name:"BackgroundMaterial",uniforms:$s(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ct.getTransfer(M.colorSpace)!==mt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,d=t.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,E){S.getRGB(go,yp(t)),n.buffers.color.setClear(go.r,go.g,go.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,E=1){o.set(S),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,p(o,a)},render:g,addToRenderList:x,dispose:m}}function Ub(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(C,H,G,X,I){let B=!1;const N=f(C,X,G,H);r!==N&&(r=N,c(r.object)),B=h(C,X,G,I),B&&g(C,X,G,I),I!==null&&e.update(I,t.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,M(C,H,G,X),I!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(I).buffer))}function l(){return t.createVertexArray()}function c(C){return t.bindVertexArray(C)}function u(C){return t.deleteVertexArray(C)}function f(C,H,G,X){const I=X.wireframe===!0;let B=i[H.id];B===void 0&&(B={},i[H.id]=B);const N=C.isInstancedMesh===!0?C.id:0;let Y=B[N];Y===void 0&&(Y={},B[N]=Y);let ce=Y[G.id];ce===void 0&&(ce={},Y[G.id]=ce);let de=ce[I];return de===void 0&&(de=d(l()),ce[I]=de),de}function d(C){const H=[],G=[],X=[];for(let I=0;I<n;I++)H[I]=0,G[I]=0,X[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:G,attributeDivisors:X,object:C,attributes:{},index:null}}function h(C,H,G,X){const I=r.attributes,B=H.attributes;let N=0;const Y=G.getAttributes();for(const ce in Y)if(Y[ce].location>=0){const Ee=I[ce];let Ce=B[ce];if(Ce===void 0&&(ce==="instanceMatrix"&&C.instanceMatrix&&(Ce=C.instanceMatrix),ce==="instanceColor"&&C.instanceColor&&(Ce=C.instanceColor)),Ee===void 0||Ee.attribute!==Ce||Ce&&Ee.data!==Ce.data)return!0;N++}return r.attributesNum!==N||r.index!==X}function g(C,H,G,X){const I={},B=H.attributes;let N=0;const Y=G.getAttributes();for(const ce in Y)if(Y[ce].location>=0){let Ee=B[ce];Ee===void 0&&(ce==="instanceMatrix"&&C.instanceMatrix&&(Ee=C.instanceMatrix),ce==="instanceColor"&&C.instanceColor&&(Ee=C.instanceColor));const Ce={};Ce.attribute=Ee,Ee&&Ee.data&&(Ce.data=Ee.data),I[ce]=Ce,N++}r.attributes=I,r.attributesNum=N,r.index=X}function x(){const C=r.newAttributes;for(let H=0,G=C.length;H<G;H++)C[H]=0}function p(C){m(C,0)}function m(C,H){const G=r.newAttributes,X=r.enabledAttributes,I=r.attributeDivisors;G[C]=1,X[C]===0&&(t.enableVertexAttribArray(C),X[C]=1),I[C]!==H&&(t.vertexAttribDivisor(C,H),I[C]=H)}function S(){const C=r.newAttributes,H=r.enabledAttributes;for(let G=0,X=H.length;G<X;G++)H[G]!==C[G]&&(t.disableVertexAttribArray(G),H[G]=0)}function E(C,H,G,X,I,B,N){N===!0?t.vertexAttribIPointer(C,H,G,I,B):t.vertexAttribPointer(C,H,G,X,I,B)}function M(C,H,G,X){x();const I=X.attributes,B=G.getAttributes(),N=H.defaultAttributeValues;for(const Y in B){const ce=B[Y];if(ce.location>=0){let de=I[Y];if(de===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(de=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(de=C.instanceColor)),de!==void 0){const Ee=de.normalized,Ce=de.itemSize,We=e.get(de);if(We===void 0)continue;const it=We.buffer,He=We.type,te=We.bytesPerElement,xe=He===t.INT||He===t.UNSIGNED_INT||de.gpuType===Yc;if(de.isInterleavedBufferAttribute){const le=de.data,Fe=le.stride,Ve=de.offset;if(le.isInstancedInterleavedBuffer){for(let Ge=0;Ge<ce.locationSize;Ge++)m(ce.location+Ge,le.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ge=0;Ge<ce.locationSize;Ge++)p(ce.location+Ge);t.bindBuffer(t.ARRAY_BUFFER,it);for(let Ge=0;Ge<ce.locationSize;Ge++)E(ce.location+Ge,Ce/ce.locationSize,He,Ee,Fe*te,(Ve+Ce/ce.locationSize*Ge)*te,xe)}else{if(de.isInstancedBufferAttribute){for(let le=0;le<ce.locationSize;le++)m(ce.location+le,de.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let le=0;le<ce.locationSize;le++)p(ce.location+le);t.bindBuffer(t.ARRAY_BUFFER,it);for(let le=0;le<ce.locationSize;le++)E(ce.location+le,Ce/ce.locationSize,He,Ee,Ce*te,Ce/ce.locationSize*le*te,xe)}}else if(N!==void 0){const Ee=N[Y];if(Ee!==void 0)switch(Ee.length){case 2:t.vertexAttrib2fv(ce.location,Ee);break;case 3:t.vertexAttrib3fv(ce.location,Ee);break;case 4:t.vertexAttrib4fv(ce.location,Ee);break;default:t.vertexAttrib1fv(ce.location,Ee)}}}}S()}function P(){w();for(const C in i){const H=i[C];for(const G in H){const X=H[G];for(const I in X){const B=X[I];for(const N in B)u(B[N].object),delete B[N];delete X[I]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;const H=i[C.id];for(const G in H){const X=H[G];for(const I in X){const B=X[I];for(const N in B)u(B[N].object),delete B[N];delete X[I]}}delete i[C.id]}function D(C){for(const H in i){const G=i[H];for(const X in G){const I=G[X];if(I[C.id]===void 0)continue;const B=I[C.id];for(const N in B)u(B[N].object),delete B[N];delete I[C.id]}}}function v(C){for(const H in i){const G=i[H],X=C.isInstancedMesh===!0?C.id:0,I=G[X];if(I!==void 0){for(const B in I){const N=I[B];for(const Y in N)u(N[Y].object),delete N[Y];delete I[B]}delete G[X],Object.keys(G).length===0&&delete i[H]}}}function w(){U(),o=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:w,resetDefaultState:U,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:p,disableUnusedAttributes:S}}function Nb(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];n.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Fb(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==Ln&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){const v=D===Mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==xn&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==$n&&!v)}function l(D){if(D==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Xe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:M,maxSamples:P,samples:T}}function Ob(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new Oi,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||s;return s=d,i=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,m=t.get(f);if(!s||g===null||g.length===0||r&&!p)r?u(null):c();else{const S=r?0:i,E=S*4;let M=m.clippingState||null;l.value=M,M=u(g,d,E,h);for(let P=0;P!==E;++P)M[P]=n[P];m.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,g!==!0||p===null){const m=h+x*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,M=h;E!==x;++E,M+=4)o.copy(f[E]).applyMatrix4(S,a),o.normal.toArray(p,M),p[M+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}const ki=4,Jf=[.125,.215,.35,.446,.526,.582],ts=20,Bb=256,ar=new cu,Qf=new lt;let ul=null,fl=0,dl=0,hl=!1;const kb=new z;class ed{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=kb}=r;ul=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ul,fl,dl),this._renderer.xr.enabled=hl,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===cs||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ul=this._renderer.getRenderTarget(),fl=this._renderer.getActiveCubeFace(),dl=this._renderer.getActiveMipmapLevel(),hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Mi,format:Ln,colorSpace:qo,depthBuffer:!1},s=td(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=td(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=zb(r)),this._blurMaterial=Vb(r,e,n),this._ggxMaterial=Hb(r,e,n)}return s}_compileMaterial(e){const n=new ti(new bn,e);this._renderer.compile(n,ar)}_sceneToCubeUV(e,n,i,s,r){const l=new Tn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Qf),f.toneMapping=Zn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ti(new Nr,new xp({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,p=x.material;let m=!1;const S=e.background;S?S.isColor&&(p.color.copy(S),e.background=null,m=!0):(p.color.copy(Qf),m=!0);for(let E=0;E<6;E++){const M=E%3;M===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):M===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const P=this._cubeSize;Cs(s,M*P,E>2?P:0,P,P),f.setRenderTarget(s),m&&f.render(x,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=S}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===cs||e.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=id()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Cs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ar)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,h=f*d,{_lodMax:g}=this,x=this._sizeLods[i],p=3*x*(i>g-ki?i-g+ki:0),m=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=g-n,Cs(r,p,m,3*x,2*x),s.setRenderTarget(r),s.render(a,ar),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Cs(e,p,m,3*x,2*x),s.setRenderTarget(e),s.render(a,ar)}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ft("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*ts-1),x=r/g,p=isFinite(r)?1+Math.floor(u*x):ts;p>ts&&Xe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ts}`);const m=[];let S=0;for(let D=0;D<ts;++D){const v=D/x,w=Math.exp(-v*v/2);m.push(w),D===0?S+=w:D<p&&(S+=2*w)}for(let D=0;D<m.length;D++)m[D]=m[D]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;const M=this._sizeLods[s],P=3*M*(s>E-ki?s-E+ki:0),T=4*(this._cubeSize-M);Cs(n,P,T,3*M,2*M),l.setRenderTarget(n),l.render(f,ar)}}function zb(t){const e=[],n=[],i=[];let s=t;const r=t-ki+1+Jf.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>t-ki?l=Jf[o-t+ki-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,x=3,p=2,m=1,S=new Float32Array(x*g*h),E=new Float32Array(p*g*h),M=new Float32Array(m*g*h);for(let T=0;T<h;T++){const D=T%3*2/3-1,v=T>2?0:-1,w=[D,v,0,D+2/3,v,0,D+2/3,v+1,0,D,v,0,D+2/3,v+1,0,D,v+1,0];S.set(w,x*g*T),E.set(d,p*g*T);const U=[T,T,T,T,T,T];M.set(U,m*g*T)}const P=new bn;P.setAttribute("position",new Sn(S,x)),P.setAttribute("uv",new Sn(E,p)),P.setAttribute("faceIndex",new Sn(M,m)),i.push(new ti(P,null)),s>ki&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function td(t,e,n){const i=new Jn(t,e,n);return i.texture.mapping=pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cs(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function Hb(t,e,n){return new ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Bb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_a(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function Vb(t,e,n){const i=new Float32Array(ts),s=new z(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function nd(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function id(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_a(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_i,depthTest:!1,depthWrite:!1})}function _a(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ap extends Jn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Sp(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Nr(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:$s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:_i});r.uniforms.tEquirect.value=n;const o=new ti(s,r),a=n.minFilter;return n.minFilter===ns&&(n.minFilter=Jt),new qx(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}function Gb(t){let e=new WeakMap,n=new WeakMap,i=null;function s(d,h=!1){return d==null?null:h?o(d):r(d)}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Oa||h===Ba)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const x=new Ap(g.height);return x.fromEquirectangularTexture(t,d),e.set(d,x),d.addEventListener("dispose",c),a(x.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const h=d.mapping,g=h===Oa||h===Ba,x=h===cs||h===qs;if(g||x){let p=n.get(d);const m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new ed(t)),p=g?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,n.set(d,p),p.texture;if(p!==void 0)return p.texture;{const S=d.image;return g&&S&&S.height>0||x&&S&&l(S)?(i===null&&(i=new ed(t)),p=g?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,n.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function a(d,h){return h===Oa?d.mapping=cs:h===Ba&&(d.mapping=qs),d}function l(d){let h=0;const g=6;for(let x=0;x<g;x++)d[x]!==void 0&&h++;return h===g}function c(d){const h=d.target;h.removeEventListener("dispose",c);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const g=n.get(h);g!==void 0&&(n.delete(h),g.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Wb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&yc("WebGLRenderer: "+i+" extension not supported."),s}}}function Xb(t,e,n,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const h=r.get(d);h&&(e.remove(h),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,g=f.attributes.position;let x=0;if(g===void 0)return;if(h!==null){const S=h.array;x=h.version;for(let E=0,M=S.length;E<M;E+=3){const P=S[E+0],T=S[E+1],D=S[E+2];d.push(P,T,T,D,D,P)}}else{const S=g.array;x=g.version;for(let E=0,M=S.length/3-1;E<M;E+=3){const P=E+0,T=E+1,D=E+2;d.push(P,T,T,D,D,P)}}const p=new(g.count>=65535?_p:gp)(d,1);p.version=x;const m=r.get(f);m&&e.remove(m),r.set(f,p)}function u(f){const d=r.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function qb(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){t.drawElements(i,d,r,f*o),n.update(d,i,1)}function c(f,d,h){h!==0&&(t.drawElementsInstanced(i,d,r,f*o,h),n.update(d,i,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,h);let x=0;for(let p=0;p<h;p++)x+=d[p];n.update(x,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function jb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:ft("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function $b(t,e,n){const i=new WeakMap,s=new Pt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let U=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",U)};var h=U;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),x===!0&&(M=2),p===!0&&(M=3);let P=a.attributes.position.count*M,T=1;P>e.maxTextureSize&&(T=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const D=new Float32Array(P*T*4*f),v=new hp(D,P,T,f);v.type=$n,v.needsUpdate=!0;const w=M*4;for(let C=0;C<f;C++){const H=m[C],G=S[C],X=E[C],I=P*T*4*C;for(let B=0;B<H.count;B++){const N=B*w;g===!0&&(s.fromBufferAttribute(H,B),D[I+N+0]=s.x,D[I+N+1]=s.y,D[I+N+2]=s.z,D[I+N+3]=0),x===!0&&(s.fromBufferAttribute(G,B),D[I+N+4]=s.x,D[I+N+5]=s.y,D[I+N+6]=s.z,D[I+N+7]=0),p===!0&&(s.fromBufferAttribute(X,B),D[I+N+8]=s.x,D[I+N+9]=s.y,D[I+N+10]=s.z,D[I+N+11]=X.itemSize===4?s.w:1)}}d={count:f,texture:v,size:new Je(P,T)},i.set(a,d),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function Yb(t,e,n,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const Kb={[Zh]:"LINEAR_TONE_MAPPING",[Jh]:"REINHARD_TONE_MAPPING",[Qh]:"CINEON_TONE_MAPPING",[ep]:"ACES_FILMIC_TONE_MAPPING",[np]:"AGX_TONE_MAPPING",[ip]:"NEUTRAL_TONE_MAPPING",[tp]:"CUSTOM_TONE_MAPPING"};function Zb(t,e,n,i,s){const r=new Jn(e,n,{type:t,depthBuffer:i,stencilBuffer:s,depthTexture:i?new js(e,n):void 0}),o=new Jn(e,n,{type:Mi,depthBuffer:!1,stencilBuffer:!1}),a=new bn;a.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ln([0,2,0,0,2,0],2));const l=new Ux({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ti(a,l),u=new cu(-1,1,1,-1,0,1);let f=null,d=null,h=!1,g,x=null,p=[],m=!1;this.setSize=function(S,E){r.setSize(S,E),o.setSize(S,E);for(let M=0;M<p.length;M++){const P=p[M];P.setSize&&P.setSize(S,E)}},this.setEffects=function(S){p=S,m=p.length>0&&p[0].isRenderPass===!0;const E=r.width,M=r.height;for(let P=0;P<p.length;P++){const T=p[P];T.setSize&&T.setSize(E,M)}},this.begin=function(S,E){if(h||S.toneMapping===Zn&&p.length===0)return!1;if(x=E,E!==null){const M=E.width,P=E.height;(r.width!==M||r.height!==P)&&this.setSize(M,P)}return m===!1&&S.setRenderTarget(r),g=S.toneMapping,S.toneMapping=Zn,!0},this.hasRenderPass=function(){return m},this.end=function(S,E){S.toneMapping=g,h=!0;let M=r,P=o;for(let T=0;T<p.length;T++){const D=p[T];if(D.enabled!==!1&&(D.render(S,P,M,E),D.needsSwap!==!1)){const v=M;M=P,P=v}}if(f!==S.outputColorSpace||d!==S.toneMapping){f=S.outputColorSpace,d=S.toneMapping,l.defines={},ct.getTransfer(f)===mt&&(l.defines.SRGB_TRANSFER="");const T=Kb[d];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,S.setRenderTarget(x),S.render(c,u),x=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const wp=new an,Mc=new js(1,1),Rp=new hp,Cp=new cx,Pp=new Sp,sd=[],rd=[],od=new Float32Array(16),ad=new Float32Array(9),ld=new Float32Array(4);function Js(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=sd[s];if(r===void 0&&(r=new Float32Array(s),sd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function Bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function xa(t,e){let n=rd[e];n===void 0&&(n=new Int32Array(e),rd[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Jb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Qb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function ey(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Bt(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function ty(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function ny(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Bt(n,i))return;ld.set(i),t.uniformMatrix2fv(this.addr,!1,ld),kt(n,i)}}function iy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Bt(n,i))return;ad.set(i),t.uniformMatrix3fv(this.addr,!1,ad),kt(n,i)}}function sy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Bt(n,i))return;od.set(i),t.uniformMatrix4fv(this.addr,!1,od),kt(n,i)}}function ry(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function oy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function ay(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function ly(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function cy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function uy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function fy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function dy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function hy(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Mc.compareFunction=n.isReversedDepthBuffer()?nu:tu,r=Mc):r=wp,n.setTexture2D(e||r,s)}function py(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Cp,s)}function my(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Pp,s)}function gy(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Rp,s)}function _y(t){switch(t){case 5126:return Jb;case 35664:return Qb;case 35665:return ey;case 35666:return ty;case 35674:return ny;case 35675:return iy;case 35676:return sy;case 5124:case 35670:return ry;case 35667:case 35671:return oy;case 35668:case 35672:return ay;case 35669:case 35673:return ly;case 5125:return cy;case 36294:return uy;case 36295:return fy;case 36296:return dy;case 35678:case 36198:case 36298:case 36306:case 35682:return hy;case 35679:case 36299:case 36307:return py;case 35680:case 36300:case 36308:case 36293:return my;case 36289:case 36303:case 36311:case 36292:return gy}}function xy(t,e){t.uniform1fv(this.addr,e)}function vy(t,e){const n=Js(e,this.size,2);t.uniform2fv(this.addr,n)}function Sy(t,e){const n=Js(e,this.size,3);t.uniform3fv(this.addr,n)}function by(t,e){const n=Js(e,this.size,4);t.uniform4fv(this.addr,n)}function yy(t,e){const n=Js(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function My(t,e){const n=Js(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Ey(t,e){const n=Js(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Ty(t,e){t.uniform1iv(this.addr,e)}function Ay(t,e){t.uniform2iv(this.addr,e)}function wy(t,e){t.uniform3iv(this.addr,e)}function Ry(t,e){t.uniform4iv(this.addr,e)}function Cy(t,e){t.uniform1uiv(this.addr,e)}function Py(t,e){t.uniform2uiv(this.addr,e)}function Dy(t,e){t.uniform3uiv(this.addr,e)}function Ly(t,e){t.uniform4uiv(this.addr,e)}function Iy(t,e,n){const i=this.cache,s=e.length,r=xa(n,s);Bt(i,r)||(t.uniform1iv(this.addr,r),kt(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=Mc:o=wp;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function Uy(t,e,n){const i=this.cache,s=e.length,r=xa(n,s);Bt(i,r)||(t.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||Cp,r[o])}function Ny(t,e,n){const i=this.cache,s=e.length,r=xa(n,s);Bt(i,r)||(t.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||Pp,r[o])}function Fy(t,e,n){const i=this.cache,s=e.length,r=xa(n,s);Bt(i,r)||(t.uniform1iv(this.addr,r),kt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||Rp,r[o])}function Oy(t){switch(t){case 5126:return xy;case 35664:return vy;case 35665:return Sy;case 35666:return by;case 35674:return yy;case 35675:return My;case 35676:return Ey;case 5124:case 35670:return Ty;case 35667:case 35671:return Ay;case 35668:case 35672:return wy;case 35669:case 35673:return Ry;case 5125:return Cy;case 36294:return Py;case 36295:return Dy;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Iy;case 35679:case 36299:case 36307:return Uy;case 35680:case 36300:case 36308:case 36293:return Ny;case 36289:case 36303:case 36311:case 36292:return Fy}}class By{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=_y(n.type)}}class ky{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Oy(n.type)}}class zy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const pl=/(\w+)(\])?(\[|\.)?/g;function cd(t,e){t.seq.push(e),t.map[e.id]=e}function Hy(t,e,n){const i=t.name,s=i.length;for(pl.lastIndex=0;;){const r=pl.exec(i),o=pl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){cd(n,c===void 0?new By(a,t,e):new ky(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new zy(a),cd(n,f)),n=f}}}class Do{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);Hy(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function ud(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Vy=37297;let Gy=0;function Wy(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const fd=new Ye;function Xy(t){ct._getMatrix(fd,ct.workingColorSpace,t);const e=`mat3( ${fd.elements.map(n=>n.toFixed(4))} )`;switch(ct.getTransfer(t)){case jo:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function dd(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+Wy(t.getShaderSource(e),a)}else return r}function qy(t,e){const n=Xy(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const jy={[Zh]:"Linear",[Jh]:"Reinhard",[Qh]:"Cineon",[ep]:"ACESFilmic",[np]:"AgX",[ip]:"Neutral",[tp]:"Custom"};function $y(t,e){const n=jy[e];return n===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const _o=new z;function Yy(){ct.getLuminanceCoefficients(_o);const t=_o.x.toFixed(4),e=_o.y.toFixed(4),n=_o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ky(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function Zy(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Jy(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function hr(t){return t!==""}function hd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function pd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ec(t){return t.replace(Qy,tM)}const eM=new Map;function tM(t,e){let n=nt[e];if(n===void 0){const i=eM.get(e);if(i!==void 0)n=nt[i],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ec(n)}const nM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function md(t){return t.replace(nM,iM)}function iM(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gd(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const sM={[To]:"SHADOWMAP_TYPE_PCF",[dr]:"SHADOWMAP_TYPE_VSM"};function rM(t){return sM[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const oM={[cs]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[pa]:"ENVMAP_TYPE_CUBE_UV"};function aM(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":oM[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const lM={[qs]:"ENVMAP_MODE_REFRACTION"};function cM(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":lM[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const uM={[Kh]:"ENVMAP_BLENDING_MULTIPLY",[w0]:"ENVMAP_BLENDING_MIX",[R0]:"ENVMAP_BLENDING_ADD"};function fM(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":uM[t.combine]||"ENVMAP_BLENDING_NONE"}function dM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function hM(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=rM(n),c=aM(n),u=cM(n),f=fM(n),d=dM(n),h=Ky(n),g=Zy(r),x=s.createProgram();let p,m,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(hr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(hr).join(`
`),m.length>0&&(m+=`
`)):(p=[gd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),m=[gd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zn?"#define TONE_MAPPING":"",n.toneMapping!==Zn?nt.tonemapping_pars_fragment:"",n.toneMapping!==Zn?$y("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,qy("linearToOutputTexel",n.outputColorSpace),Yy(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(hr).join(`
`)),o=Ec(o),o=hd(o,n),o=pd(o,n),a=Ec(a),a=hd(a,n),a=pd(a,n),o=md(o),a=md(a),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",n.glslVersion===vf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const E=S+p+o,M=S+m+a,P=ud(s,s.VERTEX_SHADER,E),T=ud(s,s.FRAGMENT_SHADER,M);s.attachShader(x,P),s.attachShader(x,T),n.index0AttributeName!==void 0?s.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function D(C){if(t.debug.checkShaderErrors){const H=s.getProgramInfoLog(x)||"",G=s.getShaderInfoLog(P)||"",X=s.getShaderInfoLog(T)||"",I=H.trim(),B=G.trim(),N=X.trim();let Y=!0,ce=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(Y=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,x,P,T);else{const de=dd(s,P,"vertex"),Ee=dd(s,T,"fragment");ft("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+de+`
`+Ee)}else I!==""?Xe("WebGLProgram: Program Info Log:",I):(B===""||N==="")&&(ce=!1);ce&&(C.diagnostics={runnable:Y,programLog:I,vertexShader:{log:B,prefix:p},fragmentShader:{log:N,prefix:m}})}s.deleteShader(P),s.deleteShader(T),v=new Do(s,x),w=Jy(s,x)}let v;this.getUniforms=function(){return v===void 0&&D(this),v};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(x,Vy)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Gy++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=T,this}let pM=0;class mM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new gM(e),n.set(e,i)),i}}class gM{constructor(e){this.id=pM++,this.code=e,this.usedTimes=0}}function _M(t){return t===us||t===Wo||t===Xo}function xM(t,e,n,i,s,r){const o=new pp,a=new mM,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,w,U,C,H,G){const X=C.fog,I=H.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,N=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,Y=e.get(v.envMap||B,N),ce=Y&&Y.mapping===pa?Y.image.height:null,de=h[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&Xe("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const Ee=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Ce=Ee!==void 0?Ee.length:0;let We=0;I.morphAttributes.position!==void 0&&(We=1),I.morphAttributes.normal!==void 0&&(We=2),I.morphAttributes.color!==void 0&&(We=3);let it,He,te,xe;if(de){const Ke=qn[de];it=Ke.vertexShader,He=Ke.fragmentShader}else it=v.vertexShader,He=v.fragmentShader,a.update(v),te=a.getVertexShaderID(v),xe=a.getFragmentShaderID(v);const le=t.getRenderTarget(),Fe=t.state.buffers.depth.getReversed(),Ve=H.isInstancedMesh===!0,Ge=H.isBatchedMesh===!0,R=!!v.map,L=!!v.matcap,W=!!Y,ee=!!v.aoMap,K=!!v.lightMap,se=!!v.bumpMap,fe=!!v.normalMap,ge=!!v.displacementMap,A=!!v.emissiveMap,re=!!v.metalnessMap,ve=!!v.roughnessMap,he=v.anisotropy>0,Q=v.clearcoat>0,Pe=v.dispersion>0,y=v.iridescence>0,_=v.sheen>0,O=v.transmission>0,Z=he&&!!v.anisotropyMap,oe=Q&&!!v.clearcoatMap,pe=Q&&!!v.clearcoatNormalMap,me=Q&&!!v.clearcoatRoughnessMap,J=y&&!!v.iridescenceMap,ae=y&&!!v.iridescenceThicknessMap,Se=_&&!!v.sheenColorMap,Te=_&&!!v.sheenRoughnessMap,be=!!v.specularMap,_e=!!v.specularColorMap,$e=!!v.specularIntensityMap,Qe=O&&!!v.transmissionMap,dt=O&&!!v.thicknessMap,F=!!v.gradientMap,ye=!!v.alphaMap,ne=v.alphaTest>0,De=!!v.alphaHash,Me=!!v.extensions;let ue=Zn;v.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ue=t.toneMapping);const Oe={shaderID:de,shaderType:v.type,shaderName:v.name,vertexShader:it,fragmentShader:He,defines:v.defines,customVertexShaderID:te,customFragmentShaderID:xe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:Ge,batchingColor:Ge&&H._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&H.instanceColor!==null,instancingMorph:Ve&&H.morphTexture!==null,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:R,matcap:L,envMap:W,envMapMode:W&&Y.mapping,envMapCubeUVHeight:ce,aoMap:ee,lightMap:K,bumpMap:se,normalMap:fe,displacementMap:ge,emissiveMap:A,normalMapObjectSpace:fe&&v.normalMapType===D0,normalMapTangentSpace:fe&&v.normalMapType===bc,packedNormalMap:fe&&v.normalMapType===bc&&_M(v.normalMap.format),metalnessMap:re,roughnessMap:ve,anisotropy:he,anisotropyMap:Z,clearcoat:Q,clearcoatMap:oe,clearcoatNormalMap:pe,clearcoatRoughnessMap:me,dispersion:Pe,iridescence:y,iridescenceMap:J,iridescenceThicknessMap:ae,sheen:_,sheenColorMap:Se,sheenRoughnessMap:Te,specularMap:be,specularColorMap:_e,specularIntensityMap:$e,transmission:O,transmissionMap:Qe,thicknessMap:dt,gradientMap:F,opaque:v.transparent===!1&&v.blending===Hs&&v.alphaToCoverage===!1,alphaMap:ye,alphaTest:ne,alphaHash:De,combine:v.combine,mapUv:R&&g(v.map.channel),aoMapUv:ee&&g(v.aoMap.channel),lightMapUv:K&&g(v.lightMap.channel),bumpMapUv:se&&g(v.bumpMap.channel),normalMapUv:fe&&g(v.normalMap.channel),displacementMapUv:ge&&g(v.displacementMap.channel),emissiveMapUv:A&&g(v.emissiveMap.channel),metalnessMapUv:re&&g(v.metalnessMap.channel),roughnessMapUv:ve&&g(v.roughnessMap.channel),anisotropyMapUv:Z&&g(v.anisotropyMap.channel),clearcoatMapUv:oe&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(v.sheenRoughnessMap.channel),specularMapUv:be&&g(v.specularMap.channel),specularColorMapUv:_e&&g(v.specularColorMap.channel),specularIntensityMapUv:$e&&g(v.specularIntensityMap.channel),transmissionMapUv:Qe&&g(v.transmissionMap.channel),thicknessMapUv:dt&&g(v.thicknessMap.channel),alphaMapUv:ye&&g(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(fe||he),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!I.attributes.uv&&(R||ye),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&fe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Fe,skinning:H.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:We,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:G.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&U.length>0,shadowMapType:t.shadowMap.type,toneMapping:ue,decodeVideoTexture:R&&v.map.isVideoTexture===!0&&ct.getTransfer(v.map.colorSpace)===mt,decodeVideoTextureEmissive:A&&v.emissiveMap.isVideoTexture===!0&&ct.getTransfer(v.emissiveMap.colorSpace)===mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===mi,flipSided:v.side===dn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Me&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&v.extensions.multiDraw===!0||Ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function p(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)w.push(U),w.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(m(w,v),S(w,v),w.push(t.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function m(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function S(v,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),w.packedNormalMap&&o.enable(22),w.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),w.numLightProbeGrids>0&&o.enable(22),v.push(o.mask)}function E(v){const w=h[v.type];let U;if(w){const C=qn[w];U=Dx.clone(C.uniforms)}else U=v.uniforms;return U}function M(v,w){let U=u.get(w);return U!==void 0?++U.usedTimes:(U=new hM(t,w,v,s),c.push(U),u.set(w,U)),U}function P(v){if(--v.usedTimes===0){const w=c.indexOf(v);c[w]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function D(){a.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:E,acquireProgram:M,releaseProgram:P,releaseShaderCache:T,programs:c,dispose:D}}function vM(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function SM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function _d(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function xd(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function a(d,h,g,x,p,m){let S=t[e];return S===void 0?(S={id:d.id,object:d,geometry:h,material:g,materialVariant:o(d),groupOrder:x,renderOrder:d.renderOrder,z:p,group:m},t[e]=S):(S.id=d.id,S.object=d,S.geometry=h,S.material=g,S.materialVariant=o(d),S.groupOrder=x,S.renderOrder=d.renderOrder,S.z=p,S.group=m),e++,S}function l(d,h,g,x,p,m){const S=a(d,h,g,x,p,m);g.transmission>0?i.push(S):g.transparent===!0?s.push(S):n.push(S)}function c(d,h,g,x,p,m){const S=a(d,h,g,x,p,m);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):n.unshift(S)}function u(d,h){n.length>1&&n.sort(d||SM),i.length>1&&i.sort(h||_d),s.length>1&&s.sort(h||_d)}function f(){for(let d=e,h=t.length;d<h;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function bM(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new xd,t.set(i,[o])):s>=r.length?(o=new xd,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function yM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new lt};break;case"SpotLight":n={position:new z,direction:new z,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new lt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":n={color:new lt,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function MM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let EM=0;function TM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function AM(t){const e=new yM,n=MM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const s=new z,r=new Rt,o=new Rt;function a(c){let u=0,f=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let h=0,g=0,x=0,p=0,m=0,S=0,E=0,M=0,P=0,T=0,D=0;c.sort(TM);for(let w=0,U=c.length;w<U;w++){const C=c[w],H=C.color,G=C.intensity,X=C.distance;let I=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===us?I=C.shadow.map.texture:I=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=H.r*G,f+=H.g*G,d+=H.b*G;else if(C.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(C.sh.coefficients[B],G);D++}else if(C.isDirectionalLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const N=C.shadow,Y=n.get(C);Y.shadowIntensity=N.intensity,Y.shadowBias=N.bias,Y.shadowNormalBias=N.normalBias,Y.shadowRadius=N.radius,Y.shadowMapSize=N.mapSize,i.directionalShadow[h]=Y,i.directionalShadowMap[h]=I,i.directionalShadowMatrix[h]=C.shadow.matrix,S++}i.directional[h]=B,h++}else if(C.isSpotLight){const B=e.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(H).multiplyScalar(G),B.distance=X,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,i.spot[x]=B;const N=C.shadow;if(C.map&&(i.spotLightMap[P]=C.map,P++,N.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[x]=N.matrix,C.castShadow){const Y=n.get(C);Y.shadowIntensity=N.intensity,Y.shadowBias=N.bias,Y.shadowNormalBias=N.normalBias,Y.shadowRadius=N.radius,Y.shadowMapSize=N.mapSize,i.spotShadow[x]=Y,i.spotShadowMap[x]=I,M++}x++}else if(C.isRectAreaLight){const B=e.get(C);B.color.copy(H).multiplyScalar(G),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),i.rectArea[p]=B,p++}else if(C.isPointLight){const B=e.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){const N=C.shadow,Y=n.get(C);Y.shadowIntensity=N.intensity,Y.shadowBias=N.bias,Y.shadowNormalBias=N.normalBias,Y.shadowRadius=N.radius,Y.shadowMapSize=N.mapSize,Y.shadowCameraNear=N.camera.near,Y.shadowCameraFar=N.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=I,i.pointShadowMatrix[g]=C.shadow.matrix,E++}i.point[g]=B,g++}else if(C.isHemisphereLight){const B=e.get(C);B.skyColor.copy(C.color).multiplyScalar(G),B.groundColor.copy(C.groundColor).multiplyScalar(G),i.hemi[m]=B,m++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const v=i.hash;(v.directionalLength!==h||v.pointLength!==g||v.spotLength!==x||v.rectAreaLength!==p||v.hemiLength!==m||v.numDirectionalShadows!==S||v.numPointShadows!==E||v.numSpotShadows!==M||v.numSpotMaps!==P||v.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=M+P-T,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=D,v.directionalLength=h,v.pointLength=g,v.spotLength=x,v.rectAreaLength=p,v.hemiLength=m,v.numDirectionalShadows=S,v.numPointShadows=E,v.numSpotShadows=M,v.numSpotMaps=P,v.numLightProbes=D,i.version=EM++)}function l(c,u){let f=0,d=0,h=0,g=0,x=0;const p=u.matrixWorldInverse;for(let m=0,S=c.length;m<S;m++){const E=c[m];if(E.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(E.isSpotLight){const M=i.spot[h];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),h++}else if(E.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(E.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){const M=i.hemi[x];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(p),x++}}}return{setup:a,setupView:l,state:i}}function vd(t){const e=new AM(t),n=[],i=[],s=[];function r(d){f.camera=d,n.length=0,i.length=0,s.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){s.push(d)}function c(){e.setup(n)}function u(d){e.setupView(n,d)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function wM(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new vd(t),e.set(s,[a])):r>=o.length?(a=new vd(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const RM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,PM=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],DM=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],Sd=new Rt,lr=new z,ml=new z;function LM(t,e,n){let i=new ou;const s=new Je,r=new Je,o=new Pt,a=new Fx,l=new Ox,c={},u=n.maxTextureSize,f={[Vi]:dn,[dn]:Vi,[mi]:mi},d=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:RM,fragmentShader:CM}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new bn;g.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ti(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=To;let m=this.type;this.render=function(T,D,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===l0&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=To);const w=t.getRenderTarget(),U=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),H=t.state;H.setBlending(_i),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const G=m!==this.type;G&&D.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(I=>I.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,I=T.length;X<I;X++){const B=T[X],N=B.shadow;if(N===void 0){Xe("WebGLShadowMap:",B,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;s.copy(N.mapSize);const Y=N.getFrameExtents();s.multiply(Y),r.copy(N.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/Y.x),s.x=r.x*Y.x,N.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/Y.y),s.y=r.y*Y.y,N.mapSize.y=r.y));const ce=t.state.buffers.depth.getReversed();if(N.camera._reversedDepth=ce,N.map===null||G===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===dr){if(B.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Jn(s.x,s.y,{format:us,type:Mi,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),N.map.texture.name=B.name+".shadowMap",N.map.depthTexture=new js(s.x,s.y,$n),N.map.depthTexture.name=B.name+".shadowMapDepth",N.map.depthTexture.format=Ei,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Wt,N.map.depthTexture.magFilter=Wt}else B.isPointLight?(N.map=new Ap(s.x),N.map.depthTexture=new Cx(s.x,ei)):(N.map=new Jn(s.x,s.y),N.map.depthTexture=new js(s.x,s.y,ei)),N.map.depthTexture.name=B.name+".shadowMap",N.map.depthTexture.format=Ei,this.type===To?(N.map.depthTexture.compareFunction=ce?nu:tu,N.map.depthTexture.minFilter=Jt,N.map.depthTexture.magFilter=Jt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Wt,N.map.depthTexture.magFilter=Wt);N.camera.updateProjectionMatrix()}const de=N.map.isWebGLCubeRenderTarget?6:1;for(let Ee=0;Ee<de;Ee++){if(N.map.isWebGLCubeRenderTarget)t.setRenderTarget(N.map,Ee),t.clear();else{Ee===0&&(t.setRenderTarget(N.map),t.clear());const Ce=N.getViewport(Ee);o.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),H.viewport(o)}if(B.isPointLight){const Ce=N.camera,We=N.matrix,it=B.distance||Ce.far;it!==Ce.far&&(Ce.far=it,Ce.updateProjectionMatrix()),lr.setFromMatrixPosition(B.matrixWorld),Ce.position.copy(lr),ml.copy(Ce.position),ml.add(PM[Ee]),Ce.up.copy(DM[Ee]),Ce.lookAt(ml),Ce.updateMatrixWorld(),We.makeTranslation(-lr.x,-lr.y,-lr.z),Sd.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),N._frustum.setFromProjectionMatrix(Sd,Ce.coordinateSystem,Ce.reversedDepth)}else N.updateMatrices(B);i=N.getFrustum(),M(D,v,N.camera,B,this.type)}N.isPointLightShadow!==!0&&this.type===dr&&S(N,v),N.needsUpdate=!1}m=this.type,p.needsUpdate=!1,t.setRenderTarget(w,U,C)};function S(T,D){const v=e.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Jn(s.x,s.y,{format:us,type:Mi})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(D,null,v,d,x,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(D,null,v,h,x,null)}function E(T,D,v,w){let U=null;const C=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)U=C;else if(U=v.isPointLight===!0?l:a,t.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const H=U.uuid,G=D.uuid;let X=c[H];X===void 0&&(X={},c[H]=X);let I=X[G];I===void 0&&(I=U.clone(),X[G]=I,D.addEventListener("dispose",P)),U=I}if(U.visible=D.visible,U.wireframe=D.wireframe,w===dr?U.side=D.shadowSide!==null?D.shadowSide:D.side:U.side=D.shadowSide!==null?D.shadowSide:f[D.side],U.alphaMap=D.alphaMap,U.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,U.map=D.map,U.clipShadows=D.clipShadows,U.clippingPlanes=D.clippingPlanes,U.clipIntersection=D.clipIntersection,U.displacementMap=D.displacementMap,U.displacementScale=D.displacementScale,U.displacementBias=D.displacementBias,U.wireframeLinewidth=D.wireframeLinewidth,U.linewidth=D.linewidth,v.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const H=t.properties.get(U);H.light=v}return U}function M(T,D,v,w,U){if(T.visible===!1)return;if(T.layers.test(D.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===dr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const G=e.update(T),X=T.material;if(Array.isArray(X)){const I=G.groups;for(let B=0,N=I.length;B<N;B++){const Y=I[B],ce=X[Y.materialIndex];if(ce&&ce.visible){const de=E(T,ce,w,U);T.onBeforeShadow(t,T,D,v,G,de,Y),t.renderBufferDirect(v,null,G,de,T,Y),T.onAfterShadow(t,T,D,v,G,de,Y)}}}else if(X.visible){const I=E(T,X,w,U);T.onBeforeShadow(t,T,D,v,G,I,null),t.renderBufferDirect(v,null,G,I,T,null),T.onAfterShadow(t,T,D,v,G,I,null)}}const H=T.children;for(let G=0,X=H.length;G<X;G++)M(H[G],D,v,w,U)}function P(T){T.target.removeEventListener("dispose",P);for(const v in c){const w=c[v],U=T.target.uuid;U in w&&(w[U].dispose(),delete w[U])}}}function IM(t,e){function n(){let F=!1;const ye=new Pt;let ne=null;const De=new Pt(0,0,0,0);return{setMask:function(Me){ne!==Me&&!F&&(t.colorMask(Me,Me,Me,Me),ne=Me)},setLocked:function(Me){F=Me},setClear:function(Me,ue,Oe,Ke,Lt){Lt===!0&&(Me*=Ke,ue*=Ke,Oe*=Ke),ye.set(Me,ue,Oe,Ke),De.equals(ye)===!1&&(t.clearColor(Me,ue,Oe,Ke),De.copy(ye))},reset:function(){F=!1,ne=null,De.set(-1,0,0,0)}}}function i(){let F=!1,ye=!1,ne=null,De=null,Me=null;return{setReversed:function(ue){if(ye!==ue){const Oe=e.get("EXT_clip_control");ue?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),ye=ue;const Ke=Me;Me=null,this.setClear(Ke)}},getReversed:function(){return ye},setTest:function(ue){ue?le(t.DEPTH_TEST):Fe(t.DEPTH_TEST)},setMask:function(ue){ne!==ue&&!F&&(t.depthMask(ue),ne=ue)},setFunc:function(ue){if(ye&&(ue=H0[ue]),De!==ue){switch(ue){case Fl:t.depthFunc(t.NEVER);break;case Ol:t.depthFunc(t.ALWAYS);break;case Bl:t.depthFunc(t.LESS);break;case Xs:t.depthFunc(t.LEQUAL);break;case kl:t.depthFunc(t.EQUAL);break;case zl:t.depthFunc(t.GEQUAL);break;case Hl:t.depthFunc(t.GREATER);break;case Vl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}De=ue}},setLocked:function(ue){F=ue},setClear:function(ue){Me!==ue&&(Me=ue,ye&&(ue=1-ue),t.clearDepth(ue))},reset:function(){F=!1,ne=null,De=null,Me=null,ye=!1}}}function s(){let F=!1,ye=null,ne=null,De=null,Me=null,ue=null,Oe=null,Ke=null,Lt=null;return{setTest:function(gt){F||(gt?le(t.STENCIL_TEST):Fe(t.STENCIL_TEST))},setMask:function(gt){ye!==gt&&!F&&(t.stencilMask(gt),ye=gt)},setFunc:function(gt,ii,Bn){(ne!==gt||De!==ii||Me!==Bn)&&(t.stencilFunc(gt,ii,Bn),ne=gt,De=ii,Me=Bn)},setOp:function(gt,ii,Bn){(ue!==gt||Oe!==ii||Ke!==Bn)&&(t.stencilOp(gt,ii,Bn),ue=gt,Oe=ii,Ke=Bn)},setLocked:function(gt){F=gt},setClear:function(gt){Lt!==gt&&(t.clearStencil(gt),Lt=gt)},reset:function(){F=!1,ye=null,ne=null,De=null,Me=null,ue=null,Oe=null,Ke=null,Lt=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d={},h=new WeakMap,g=[],x=null,p=!1,m=null,S=null,E=null,M=null,P=null,T=null,D=null,v=new lt(0,0,0),w=0,U=!1,C=null,H=null,G=null,X=null,I=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,Y=0;const ce=t.getParameter(t.VERSION);ce.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ce)[1]),N=Y>=1):ce.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),N=Y>=2);let de=null,Ee={};const Ce=t.getParameter(t.SCISSOR_BOX),We=t.getParameter(t.VIEWPORT),it=new Pt().fromArray(Ce),He=new Pt().fromArray(We);function te(F,ye,ne,De){const Me=new Uint8Array(4),ue=t.createTexture();t.bindTexture(F,ue),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Oe=0;Oe<ne;Oe++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(ye,0,t.RGBA,1,1,De,0,t.RGBA,t.UNSIGNED_BYTE,Me):t.texImage2D(ye+Oe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Me);return ue}const xe={};xe[t.TEXTURE_2D]=te(t.TEXTURE_2D,t.TEXTURE_2D,1),xe[t.TEXTURE_CUBE_MAP]=te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[t.TEXTURE_2D_ARRAY]=te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),xe[t.TEXTURE_3D]=te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(t.DEPTH_TEST),o.setFunc(Xs),se(!1),fe(hf),le(t.CULL_FACE),ee(_i);function le(F){u[F]!==!0&&(t.enable(F),u[F]=!0)}function Fe(F){u[F]!==!1&&(t.disable(F),u[F]=!1)}function Ve(F,ye){return d[F]!==ye?(t.bindFramebuffer(F,ye),d[F]=ye,F===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ye),F===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ye),!0):!1}function Ge(F,ye){let ne=g,De=!1;if(F){ne=h.get(ye),ne===void 0&&(ne=[],h.set(ye,ne));const Me=F.textures;if(ne.length!==Me.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let ue=0,Oe=Me.length;ue<Oe;ue++)ne[ue]=t.COLOR_ATTACHMENT0+ue;ne.length=Me.length,De=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,De=!0);De&&t.drawBuffers(ne)}function R(F){return x!==F?(t.useProgram(F),x=F,!0):!1}const L={[es]:t.FUNC_ADD,[u0]:t.FUNC_SUBTRACT,[f0]:t.FUNC_REVERSE_SUBTRACT};L[d0]=t.MIN,L[h0]=t.MAX;const W={[p0]:t.ZERO,[m0]:t.ONE,[g0]:t.SRC_COLOR,[Ul]:t.SRC_ALPHA,[y0]:t.SRC_ALPHA_SATURATE,[S0]:t.DST_COLOR,[x0]:t.DST_ALPHA,[_0]:t.ONE_MINUS_SRC_COLOR,[Nl]:t.ONE_MINUS_SRC_ALPHA,[b0]:t.ONE_MINUS_DST_COLOR,[v0]:t.ONE_MINUS_DST_ALPHA,[M0]:t.CONSTANT_COLOR,[E0]:t.ONE_MINUS_CONSTANT_COLOR,[T0]:t.CONSTANT_ALPHA,[A0]:t.ONE_MINUS_CONSTANT_ALPHA};function ee(F,ye,ne,De,Me,ue,Oe,Ke,Lt,gt){if(F===_i){p===!0&&(Fe(t.BLEND),p=!1);return}if(p===!1&&(le(t.BLEND),p=!0),F!==c0){if(F!==m||gt!==U){if((S!==es||P!==es)&&(t.blendEquation(t.FUNC_ADD),S=es,P=es),gt)switch(F){case Hs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pf:t.blendFunc(t.ONE,t.ONE);break;case mf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case gf:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ft("WebGLState: Invalid blending: ",F);break}else switch(F){case Hs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case pf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case mf:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gf:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",F);break}E=null,M=null,T=null,D=null,v.set(0,0,0),w=0,m=F,U=gt}return}Me=Me||ye,ue=ue||ne,Oe=Oe||De,(ye!==S||Me!==P)&&(t.blendEquationSeparate(L[ye],L[Me]),S=ye,P=Me),(ne!==E||De!==M||ue!==T||Oe!==D)&&(t.blendFuncSeparate(W[ne],W[De],W[ue],W[Oe]),E=ne,M=De,T=ue,D=Oe),(Ke.equals(v)===!1||Lt!==w)&&(t.blendColor(Ke.r,Ke.g,Ke.b,Lt),v.copy(Ke),w=Lt),m=F,U=!1}function K(F,ye){F.side===mi?Fe(t.CULL_FACE):le(t.CULL_FACE);let ne=F.side===dn;ye&&(ne=!ne),se(ne),F.blending===Hs&&F.transparent===!1?ee(_i):ee(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const De=F.stencilWrite;a.setTest(De),De&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),A(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Fe(t.SAMPLE_ALPHA_TO_COVERAGE)}function se(F){C!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),C=F)}function fe(F){F!==o0?(le(t.CULL_FACE),F!==H&&(F===hf?t.cullFace(t.BACK):F===a0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Fe(t.CULL_FACE),H=F}function ge(F){F!==G&&(N&&t.lineWidth(F),G=F)}function A(F,ye,ne){F?(le(t.POLYGON_OFFSET_FILL),(X!==ye||I!==ne)&&(X=ye,I=ne,o.getReversed()&&(ye=-ye),t.polygonOffset(ye,ne))):Fe(t.POLYGON_OFFSET_FILL)}function re(F){F?le(t.SCISSOR_TEST):Fe(t.SCISSOR_TEST)}function ve(F){F===void 0&&(F=t.TEXTURE0+B-1),de!==F&&(t.activeTexture(F),de=F)}function he(F,ye,ne){ne===void 0&&(de===null?ne=t.TEXTURE0+B-1:ne=de);let De=Ee[ne];De===void 0&&(De={type:void 0,texture:void 0},Ee[ne]=De),(De.type!==F||De.texture!==ye)&&(de!==ne&&(t.activeTexture(ne),de=ne),t.bindTexture(F,ye||xe[F]),De.type=F,De.texture=ye)}function Q(){const F=Ee[de];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Pe(){try{t.compressedTexImage2D(...arguments)}catch(F){ft("WebGLState:",F)}}function y(){try{t.compressedTexImage3D(...arguments)}catch(F){ft("WebGLState:",F)}}function _(){try{t.texSubImage2D(...arguments)}catch(F){ft("WebGLState:",F)}}function O(){try{t.texSubImage3D(...arguments)}catch(F){ft("WebGLState:",F)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(F){ft("WebGLState:",F)}}function oe(){try{t.compressedTexSubImage3D(...arguments)}catch(F){ft("WebGLState:",F)}}function pe(){try{t.texStorage2D(...arguments)}catch(F){ft("WebGLState:",F)}}function me(){try{t.texStorage3D(...arguments)}catch(F){ft("WebGLState:",F)}}function J(){try{t.texImage2D(...arguments)}catch(F){ft("WebGLState:",F)}}function ae(){try{t.texImage3D(...arguments)}catch(F){ft("WebGLState:",F)}}function Se(F){return f[F]!==void 0?f[F]:t.getParameter(F)}function Te(F,ye){f[F]!==ye&&(t.pixelStorei(F,ye),f[F]=ye)}function be(F){it.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),it.copy(F))}function _e(F){He.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),He.copy(F))}function $e(F,ye){let ne=c.get(ye);ne===void 0&&(ne=new WeakMap,c.set(ye,ne));let De=ne.get(F);De===void 0&&(De=t.getUniformBlockIndex(ye,F.name),ne.set(F,De))}function Qe(F,ye){const De=c.get(ye).get(F);l.get(ye)!==De&&(t.uniformBlockBinding(ye,De,F.__bindingPointIndex),l.set(ye,De))}function dt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},de=null,Ee={},d={},h=new WeakMap,g=[],x=null,p=!1,m=null,S=null,E=null,M=null,P=null,T=null,D=null,v=new lt(0,0,0),w=0,U=!1,C=null,H=null,G=null,X=null,I=null,it.set(0,0,t.canvas.width,t.canvas.height),He.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:le,disable:Fe,bindFramebuffer:Ve,drawBuffers:Ge,useProgram:R,setBlending:ee,setMaterial:K,setFlipSided:se,setCullFace:fe,setLineWidth:ge,setPolygonOffset:A,setScissorTest:re,activeTexture:ve,bindTexture:he,unbindTexture:Q,compressedTexImage2D:Pe,compressedTexImage3D:y,texImage2D:J,texImage3D:ae,pixelStorei:Te,getParameter:Se,updateUBOMapping:$e,uniformBlockBinding:Qe,texStorage2D:pe,texStorage3D:me,texSubImage2D:_,texSubImage3D:O,compressedTexSubImage2D:Z,compressedTexSubImage3D:oe,scissor:be,viewport:_e,reset:dt}}function UM(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,u=new WeakMap,f=new Set;let d;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(y,_){return g?new OffscreenCanvas(y,_):$o("canvas")}function p(y,_,O){let Z=1;const oe=Pe(y);if((oe.width>O||oe.height>O)&&(Z=O/Math.max(oe.width,oe.height)),Z<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const pe=Math.floor(Z*oe.width),me=Math.floor(Z*oe.height);d===void 0&&(d=x(pe,me));const J=_?x(pe,me):d;return J.width=pe,J.height=me,J.getContext("2d").drawImage(y,0,0,pe,me),Xe("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+pe+"x"+me+")."),J}else return"data"in y&&Xe("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),y;return y}function m(y){return y.generateMipmaps}function S(y){t.generateMipmap(y)}function E(y){return y.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?t.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(y,_,O,Z,oe,pe=!1){if(y!==null){if(t[y]!==void 0)return t[y];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let me;Z&&(me=e.get("EXT_texture_norm16"),me||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=_;if(_===t.RED&&(O===t.FLOAT&&(J=t.R32F),O===t.HALF_FLOAT&&(J=t.R16F),O===t.UNSIGNED_BYTE&&(J=t.R8),O===t.UNSIGNED_SHORT&&me&&(J=me.R16_EXT),O===t.SHORT&&me&&(J=me.R16_SNORM_EXT)),_===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(J=t.R8UI),O===t.UNSIGNED_SHORT&&(J=t.R16UI),O===t.UNSIGNED_INT&&(J=t.R32UI),O===t.BYTE&&(J=t.R8I),O===t.SHORT&&(J=t.R16I),O===t.INT&&(J=t.R32I)),_===t.RG&&(O===t.FLOAT&&(J=t.RG32F),O===t.HALF_FLOAT&&(J=t.RG16F),O===t.UNSIGNED_BYTE&&(J=t.RG8),O===t.UNSIGNED_SHORT&&me&&(J=me.RG16_EXT),O===t.SHORT&&me&&(J=me.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(J=t.RG8UI),O===t.UNSIGNED_SHORT&&(J=t.RG16UI),O===t.UNSIGNED_INT&&(J=t.RG32UI),O===t.BYTE&&(J=t.RG8I),O===t.SHORT&&(J=t.RG16I),O===t.INT&&(J=t.RG32I)),_===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(J=t.RGB8UI),O===t.UNSIGNED_SHORT&&(J=t.RGB16UI),O===t.UNSIGNED_INT&&(J=t.RGB32UI),O===t.BYTE&&(J=t.RGB8I),O===t.SHORT&&(J=t.RGB16I),O===t.INT&&(J=t.RGB32I)),_===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),O===t.UNSIGNED_INT&&(J=t.RGBA32UI),O===t.BYTE&&(J=t.RGBA8I),O===t.SHORT&&(J=t.RGBA16I),O===t.INT&&(J=t.RGBA32I)),_===t.RGB&&(O===t.UNSIGNED_SHORT&&me&&(J=me.RGB16_EXT),O===t.SHORT&&me&&(J=me.RGB16_SNORM_EXT),O===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),O===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),_===t.RGBA){const ae=pe?jo:ct.getTransfer(oe);O===t.FLOAT&&(J=t.RGBA32F),O===t.HALF_FLOAT&&(J=t.RGBA16F),O===t.UNSIGNED_BYTE&&(J=ae===mt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT&&me&&(J=me.RGBA16_EXT),O===t.SHORT&&me&&(J=me.RGBA16_SNORM_EXT),O===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function P(y,_){let O;return y?_===null||_===ei||_===Rr?O=t.DEPTH24_STENCIL8:_===$n?O=t.DEPTH32F_STENCIL8:_===wr&&(O=t.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ei||_===Rr?O=t.DEPTH_COMPONENT24:_===$n?O=t.DEPTH_COMPONENT32F:_===wr&&(O=t.DEPTH_COMPONENT16),O}function T(y,_){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==Wt&&y.minFilter!==Jt?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function D(y){const _=y.target;_.removeEventListener("dispose",D),w(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&f.delete(_)}function v(y){const _=y.target;_.removeEventListener("dispose",v),C(_)}function w(y){const _=i.get(y);if(_.__webglInit===void 0)return;const O=y.source,Z=h.get(O);if(Z){const oe=Z[_.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&U(y),Object.keys(Z).length===0&&h.delete(O)}i.remove(y)}function U(y){const _=i.get(y);t.deleteTexture(_.__webglTexture);const O=y.source,Z=h.get(O);delete Z[_.__cacheKey],o.memory.textures--}function C(y){const _=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let oe=0;oe<_.__webglFramebuffer[Z].length;oe++)t.deleteFramebuffer(_.__webglFramebuffer[Z][oe]);else t.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)t.deleteFramebuffer(_.__webglFramebuffer[Z]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const O=y.textures;for(let Z=0,oe=O.length;Z<oe;Z++){const pe=i.get(O[Z]);pe.__webglTexture&&(t.deleteTexture(pe.__webglTexture),o.memory.textures--),i.remove(O[Z])}i.remove(y)}let H=0;function G(){H=0}function X(){return H}function I(y){H=y}function B(){const y=H;return y>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),H+=1,y}function N(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function Y(y,_){const O=i.get(y);if(y.isVideoTexture&&he(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&O.__version!==y.version){const Z=y.image;if(Z===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(O,y,_);return}}else y.isExternalTexture&&(O.__webglTexture=y.sourceTexture?y.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+_)}function ce(y,_){const O=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){Fe(O,y,_);return}else y.isExternalTexture&&(O.__webglTexture=y.sourceTexture?y.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+_)}function de(y,_){const O=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){Fe(O,y,_);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+_)}function Ee(y,_){const O=i.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&O.__version!==y.version){Ve(O,y,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+_)}const Ce={[Gl]:t.REPEAT,[gi]:t.CLAMP_TO_EDGE,[Wl]:t.MIRRORED_REPEAT},We={[Wt]:t.NEAREST,[C0]:t.NEAREST_MIPMAP_NEAREST,[qr]:t.NEAREST_MIPMAP_LINEAR,[Jt]:t.LINEAR,[ka]:t.LINEAR_MIPMAP_NEAREST,[ns]:t.LINEAR_MIPMAP_LINEAR},it={[L0]:t.NEVER,[O0]:t.ALWAYS,[I0]:t.LESS,[tu]:t.LEQUAL,[U0]:t.EQUAL,[nu]:t.GEQUAL,[N0]:t.GREATER,[F0]:t.NOTEQUAL};function He(y,_){if(_.type===$n&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Jt||_.magFilter===ka||_.magFilter===qr||_.magFilter===ns||_.minFilter===Jt||_.minFilter===ka||_.minFilter===qr||_.minFilter===ns)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(y,t.TEXTURE_WRAP_S,Ce[_.wrapS]),t.texParameteri(y,t.TEXTURE_WRAP_T,Ce[_.wrapT]),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,Ce[_.wrapR]),t.texParameteri(y,t.TEXTURE_MAG_FILTER,We[_.magFilter]),t.texParameteri(y,t.TEXTURE_MIN_FILTER,We[_.minFilter]),_.compareFunction&&(t.texParameteri(y,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(y,t.TEXTURE_COMPARE_FUNC,it[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Wt||_.minFilter!==qr&&_.minFilter!==ns||_.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(y,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function te(y,_){let O=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",D));const Z=_.source;let oe=h.get(Z);oe===void 0&&(oe={},h.set(Z,oe));const pe=N(_);if(pe!==y.__cacheKey){oe[pe]===void 0&&(oe[pe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),oe[pe].usedTimes++;const me=oe[y.__cacheKey];me!==void 0&&(oe[y.__cacheKey].usedTimes--,me.usedTimes===0&&U(_)),y.__cacheKey=pe,y.__webglTexture=oe[pe].texture}return O}function xe(y,_,O){return Math.floor(Math.floor(y/O)/_)}function le(y,_,O,Z){const pe=y.updateRanges;if(pe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,O,Z,_.data);else{pe.sort((Te,be)=>Te.start-be.start);let me=0;for(let Te=1;Te<pe.length;Te++){const be=pe[me],_e=pe[Te],$e=be.start+be.count,Qe=xe(_e.start,_.width,4),dt=xe(be.start,_.width,4);_e.start<=$e+1&&Qe===dt&&xe(_e.start+_e.count-1,_.width,4)===Qe?be.count=Math.max(be.count,_e.start+_e.count-be.start):(++me,pe[me]=_e)}pe.length=me+1;const J=n.getParameter(t.UNPACK_ROW_LENGTH),ae=n.getParameter(t.UNPACK_SKIP_PIXELS),Se=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let Te=0,be=pe.length;Te<be;Te++){const _e=pe[Te],$e=Math.floor(_e.start/4),Qe=Math.ceil(_e.count/4),dt=$e%_.width,F=Math.floor($e/_.width),ye=Qe,ne=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,dt),n.pixelStorei(t.UNPACK_SKIP_ROWS,F),n.texSubImage2D(t.TEXTURE_2D,0,dt,F,ye,ne,O,Z,_.data)}y.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,J),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ae),n.pixelStorei(t.UNPACK_SKIP_ROWS,Se)}}function Fe(y,_,O){let Z=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=t.TEXTURE_3D);const oe=te(y,_),pe=_.source;n.bindTexture(Z,y.__webglTexture,t.TEXTURE0+O);const me=i.get(pe);if(pe.version!==me.__version||oe===!0){if(n.activeTexture(t.TEXTURE0+O),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const ne=ct.getPrimaries(ct.workingColorSpace),De=_.colorSpace===Bi?null:ct.getPrimaries(_.colorSpace),Me=_.colorSpace===Bi||ne===De?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let ae=p(_.image,!1,s.maxTextureSize);ae=Q(_,ae);const Se=r.convert(_.format,_.colorSpace),Te=r.convert(_.type);let be=M(_.internalFormat,Se,Te,_.normalized,_.colorSpace,_.isVideoTexture);He(Z,_);let _e;const $e=_.mipmaps,Qe=_.isVideoTexture!==!0,dt=me.__version===void 0||oe===!0,F=pe.dataReady,ye=T(_,ae);if(_.isDepthTexture)be=P(_.format===is,_.type),dt&&(Qe?n.texStorage2D(t.TEXTURE_2D,1,be,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,be,ae.width,ae.height,0,Se,Te,null));else if(_.isDataTexture)if($e.length>0){Qe&&dt&&n.texStorage2D(t.TEXTURE_2D,ye,be,$e[0].width,$e[0].height);for(let ne=0,De=$e.length;ne<De;ne++)_e=$e[ne],Qe?F&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,_e.width,_e.height,Se,Te,_e.data):n.texImage2D(t.TEXTURE_2D,ne,be,_e.width,_e.height,0,Se,Te,_e.data);_.generateMipmaps=!1}else Qe?(dt&&n.texStorage2D(t.TEXTURE_2D,ye,be,ae.width,ae.height),F&&le(_,ae,Se,Te)):n.texImage2D(t.TEXTURE_2D,0,be,ae.width,ae.height,0,Se,Te,ae.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Qe&&dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,be,$e[0].width,$e[0].height,ae.depth);for(let ne=0,De=$e.length;ne<De;ne++)if(_e=$e[ne],_.format!==Ln)if(Se!==null)if(Qe){if(F)if(_.layerUpdates.size>0){const Me=Zf(_e.width,_e.height,_.format,_.type);for(const ue of _.layerUpdates){const Oe=_e.data.subarray(ue*Me/_e.data.BYTES_PER_ELEMENT,(ue+1)*Me/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,ue,_e.width,_e.height,1,Se,Oe)}_.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,ae.depth,Se,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,be,_e.width,_e.height,ae.depth,0,_e.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qe?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,_e.width,_e.height,ae.depth,Se,Te,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,be,_e.width,_e.height,ae.depth,0,Se,Te,_e.data)}else{Qe&&dt&&n.texStorage2D(t.TEXTURE_2D,ye,be,$e[0].width,$e[0].height);for(let ne=0,De=$e.length;ne<De;ne++)_e=$e[ne],_.format!==Ln?Se!==null?Qe?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,_e.width,_e.height,Se,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,be,_e.width,_e.height,0,_e.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qe?F&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,_e.width,_e.height,Se,Te,_e.data):n.texImage2D(t.TEXTURE_2D,ne,be,_e.width,_e.height,0,Se,Te,_e.data)}else if(_.isDataArrayTexture)if(Qe){if(dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,be,ae.width,ae.height,ae.depth),F)if(_.layerUpdates.size>0){const ne=Zf(ae.width,ae.height,_.format,_.type);for(const De of _.layerUpdates){const Me=ae.data.subarray(De*ne/ae.data.BYTES_PER_ELEMENT,(De+1)*ne/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,De,ae.width,ae.height,1,Se,Te,Me)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Se,Te,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,ae.width,ae.height,ae.depth,0,Se,Te,ae.data);else if(_.isData3DTexture)Qe?(dt&&n.texStorage3D(t.TEXTURE_3D,ye,be,ae.width,ae.height,ae.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Se,Te,ae.data)):n.texImage3D(t.TEXTURE_3D,0,be,ae.width,ae.height,ae.depth,0,Se,Te,ae.data);else if(_.isFramebufferTexture){if(dt)if(Qe)n.texStorage2D(t.TEXTURE_2D,ye,be,ae.width,ae.height);else{let ne=ae.width,De=ae.height;for(let Me=0;Me<ye;Me++)n.texImage2D(t.TEXTURE_2D,Me,be,ne,De,0,Se,Te,null),ne>>=1,De>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const ne=t.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ae.parentNode!==ne){ne.appendChild(ae),f.add(_),ne.onpaint=Ke=>{const Lt=Ke.changedElements;for(const gt of f)Lt.includes(gt.image)&&(gt.needsUpdate=!0)},ne.requestPaint();return}const De=0,Me=t.RGBA,ue=t.RGBA,Oe=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,De,Me,ue,Oe,ae),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if($e.length>0){if(Qe&&dt){const ne=Pe($e[0]);n.texStorage2D(t.TEXTURE_2D,ye,be,ne.width,ne.height)}for(let ne=0,De=$e.length;ne<De;ne++)_e=$e[ne],Qe?F&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,Se,Te,_e):n.texImage2D(t.TEXTURE_2D,ne,be,Se,Te,_e);_.generateMipmaps=!1}else if(Qe){if(dt){const ne=Pe(ae);n.texStorage2D(t.TEXTURE_2D,ye,be,ne.width,ne.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,Te,ae)}else n.texImage2D(t.TEXTURE_2D,0,be,Se,Te,ae);m(_)&&S(Z),me.__version=pe.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function Ve(y,_,O){if(_.image.length!==6)return;const Z=te(y,_),oe=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,y.__webglTexture,t.TEXTURE0+O);const pe=i.get(oe);if(oe.version!==pe.__version||Z===!0){n.activeTexture(t.TEXTURE0+O);const me=ct.getPrimaries(ct.workingColorSpace),J=_.colorSpace===Bi?null:ct.getPrimaries(_.colorSpace),ae=_.colorSpace===Bi||me===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const Se=_.isCompressedTexture||_.image[0].isCompressedTexture,Te=_.image[0]&&_.image[0].isDataTexture,be=[];for(let ue=0;ue<6;ue++)!Se&&!Te?be[ue]=p(_.image[ue],!0,s.maxCubemapSize):be[ue]=Te?_.image[ue].image:_.image[ue],be[ue]=Q(_,be[ue]);const _e=be[0],$e=r.convert(_.format,_.colorSpace),Qe=r.convert(_.type),dt=M(_.internalFormat,$e,Qe,_.normalized,_.colorSpace),F=_.isVideoTexture!==!0,ye=pe.__version===void 0||Z===!0,ne=oe.dataReady;let De=T(_,_e);He(t.TEXTURE_CUBE_MAP,_);let Me;if(Se){F&&ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,De,dt,_e.width,_e.height);for(let ue=0;ue<6;ue++){Me=be[ue].mipmaps;for(let Oe=0;Oe<Me.length;Oe++){const Ke=Me[Oe];_.format!==Ln?$e!==null?F?ne&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,0,0,Ke.width,Ke.height,$e,Ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,dt,Ke.width,Ke.height,0,Ke.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,0,0,Ke.width,Ke.height,$e,Qe,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe,dt,Ke.width,Ke.height,0,$e,Qe,Ke.data)}}}else{if(Me=_.mipmaps,F&&ye){Me.length>0&&De++;const ue=Pe(be[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,De,dt,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(Te){F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,be[ue].width,be[ue].height,$e,Qe,be[ue].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,dt,be[ue].width,be[ue].height,0,$e,Qe,be[ue].data);for(let Oe=0;Oe<Me.length;Oe++){const Lt=Me[Oe].image[ue].image;F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,0,0,Lt.width,Lt.height,$e,Qe,Lt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,dt,Lt.width,Lt.height,0,$e,Qe,Lt.data)}}else{F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,$e,Qe,be[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,dt,$e,Qe,be[ue]);for(let Oe=0;Oe<Me.length;Oe++){const Ke=Me[Oe];F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,0,0,$e,Qe,Ke.image[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Oe+1,dt,$e,Qe,Ke.image[ue])}}}m(_)&&S(t.TEXTURE_CUBE_MAP),pe.__version=oe.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function Ge(y,_,O,Z,oe,pe){const me=r.convert(O.format,O.colorSpace),J=r.convert(O.type),ae=M(O.internalFormat,me,J,O.normalized,O.colorSpace),Se=i.get(_),Te=i.get(O);if(Te.__renderTarget=_,!Se.__hasExternalTextures){const be=Math.max(1,_.width>>pe),_e=Math.max(1,_.height>>pe);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,pe,ae,be,_e,_.depth,0,me,J,null):n.texImage2D(oe,pe,ae,be,_e,0,me,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,y),ve(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,oe,Te.__webglTexture,0,re(_)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,oe,Te.__webglTexture,pe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function R(y,_,O){if(t.bindRenderbuffer(t.RENDERBUFFER,y),_.depthBuffer){const Z=_.depthTexture,oe=Z&&Z.isDepthTexture?Z.type:null,pe=P(_.stencilBuffer,oe),me=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ve(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re(_),pe,_.width,_.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,re(_),pe,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,pe,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,me,t.RENDERBUFFER,y)}else{const Z=_.textures;for(let oe=0;oe<Z.length;oe++){const pe=Z[oe],me=r.convert(pe.format,pe.colorSpace),J=r.convert(pe.type),ae=M(pe.internalFormat,me,J,pe.normalized,pe.colorSpace);ve(_)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re(_),ae,_.width,_.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,re(_),ae,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ae,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function L(y,_,O){const Z=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=i.get(_.depthTexture);if(oe.__renderTarget=_,(!oe.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z){if(oe.__webglInit===void 0&&(oe.__webglInit=!0,_.depthTexture.addEventListener("dispose",D)),oe.__webglTexture===void 0){oe.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,oe.__webglTexture),He(t.TEXTURE_CUBE_MAP,_.depthTexture);const Se=r.convert(_.depthTexture.format),Te=r.convert(_.depthTexture.type);let be;_.depthTexture.format===Ei?be=t.DEPTH_COMPONENT24:_.depthTexture.format===is&&(be=t.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,be,_.width,_.height,0,Se,Te,null)}}else Y(_.depthTexture,0);const pe=oe.__webglTexture,me=re(_),J=Z?t.TEXTURE_CUBE_MAP_POSITIVE_X+O:t.TEXTURE_2D,ae=_.depthTexture.format===is?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ei)ve(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,J,pe,0,me):t.framebufferTexture2D(t.FRAMEBUFFER,ae,J,pe,0);else if(_.depthTexture.format===is)ve(_)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,J,pe,0,me):t.framebufferTexture2D(t.FRAMEBUFFER,ae,J,pe,0);else throw new Error("Unknown depthTexture format")}function W(y){const _=i.get(y),O=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const Z=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){const oe=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",oe)};Z.addEventListener("dispose",oe),_.__depthDisposeCallback=oe}_.__boundDepthTexture=Z}if(y.depthTexture&&!_.__autoAllocateDepthBuffer)if(O)for(let Z=0;Z<6;Z++)L(_.__webglFramebuffer[Z],y,Z);else{const Z=y.texture.mipmaps;Z&&Z.length>0?L(_.__webglFramebuffer[0],y,0):L(_.__webglFramebuffer,y,0)}else if(O){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=t.createRenderbuffer(),R(_.__webglDepthbuffer[Z],y,!1);else{const oe=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=_.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,pe),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,pe)}}else{const Z=y.texture.mipmaps;if(Z&&Z.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),R(_.__webglDepthbuffer,y,!1);else{const oe=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,pe),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,pe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ee(y,_,O){const Z=i.get(y);_!==void 0&&Ge(Z.__webglFramebuffer,y,y.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&W(y)}function K(y){const _=y.texture,O=i.get(y),Z=i.get(_);y.addEventListener("dispose",v);const oe=y.textures,pe=y.isWebGLCubeRenderTarget===!0,me=oe.length>1;if(me||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=_.version,o.memory.textures++),pe){O.__webglFramebuffer=[];for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer[J]=[];for(let ae=0;ae<_.mipmaps.length;ae++)O.__webglFramebuffer[J][ae]=t.createFramebuffer()}else O.__webglFramebuffer[J]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){O.__webglFramebuffer=[];for(let J=0;J<_.mipmaps.length;J++)O.__webglFramebuffer[J]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(me)for(let J=0,ae=oe.length;J<ae;J++){const Se=i.get(oe[J]);Se.__webglTexture===void 0&&(Se.__webglTexture=t.createTexture(),o.memory.textures++)}if(y.samples>0&&ve(y)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let J=0;J<oe.length;J++){const ae=oe[J];O.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[J]);const Se=r.convert(ae.format,ae.colorSpace),Te=r.convert(ae.type),be=M(ae.internalFormat,Se,Te,ae.normalized,ae.colorSpace,y.isXRRenderTarget===!0),_e=re(y);t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,be,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,O.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),y.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),R(O.__webglDepthRenderbuffer,y,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(pe){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),He(t.TEXTURE_CUBE_MAP,_);for(let J=0;J<6;J++)if(_.mipmaps&&_.mipmaps.length>0)for(let ae=0;ae<_.mipmaps.length;ae++)Ge(O.__webglFramebuffer[J][ae],y,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ae);else Ge(O.__webglFramebuffer[J],y,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);m(_)&&S(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(me){for(let J=0,ae=oe.length;J<ae;J++){const Se=oe[J],Te=i.get(Se);let be=t.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(be=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(be,Te.__webglTexture),He(be,Se),Ge(O.__webglFramebuffer,y,Se,t.COLOR_ATTACHMENT0+J,be,0),m(Se)&&S(be)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(J=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,Z.__webglTexture),He(J,_),_.mipmaps&&_.mipmaps.length>0)for(let ae=0;ae<_.mipmaps.length;ae++)Ge(O.__webglFramebuffer[ae],y,_,t.COLOR_ATTACHMENT0,J,ae);else Ge(O.__webglFramebuffer,y,_,t.COLOR_ATTACHMENT0,J,0);m(_)&&S(J),n.unbindTexture()}y.depthBuffer&&W(y)}function se(y){const _=y.textures;for(let O=0,Z=_.length;O<Z;O++){const oe=_[O];if(m(oe)){const pe=E(y),me=i.get(oe).__webglTexture;n.bindTexture(pe,me),S(pe),n.unbindTexture()}}}const fe=[],ge=[];function A(y){if(y.samples>0){if(ve(y)===!1){const _=y.textures,O=y.width,Z=y.height;let oe=t.COLOR_BUFFER_BIT;const pe=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(y),J=_.length>1;if(J)for(let Se=0;Se<_.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const ae=y.texture.mipmaps;ae&&ae.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Se=0;Se<_.length;Se++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[Se]);const Te=i.get(_[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Te,0)}t.blitFramebuffer(0,0,O,Z,0,0,O,Z,oe,t.NEAREST),l===!0&&(fe.length=0,ge.length=0,fe.push(t.COLOR_ATTACHMENT0+Se),y.depthBuffer&&y.resolveDepthBuffer===!1&&(fe.push(pe),ge.push(pe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ge)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,fe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let Se=0;Se<_.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,me.__webglColorRenderbuffer[Se]);const Te=i.get(_[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,Te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const _=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function re(y){return Math.min(s.maxSamples,y.samples)}function ve(y){const _=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function he(y){const _=o.render.frame;u.get(y)!==_&&(u.set(y,_),y.update())}function Q(y,_){const O=y.colorSpace,Z=y.format,oe=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||O!==qo&&O!==Bi&&(ct.getTransfer(O)===mt?(Z!==Ln||oe!==xn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",O)),_}function Pe(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=G,this.getTextureUnits=X,this.setTextureUnits=I,this.setTexture2D=Y,this.setTexture2DArray=ce,this.setTexture3D=de,this.setTextureCube=Ee,this.rebindTextures=ee,this.setupRenderTarget=K,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=A,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=ve,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function NM(t,e){function n(i,s=Bi){let r;const o=ct.getTransfer(s);if(i===xn)return t.UNSIGNED_BYTE;if(i===Kc)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Zc)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ap)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===lp)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===rp)return t.BYTE;if(i===op)return t.SHORT;if(i===wr)return t.UNSIGNED_SHORT;if(i===Yc)return t.INT;if(i===ei)return t.UNSIGNED_INT;if(i===$n)return t.FLOAT;if(i===Mi)return t.HALF_FLOAT;if(i===cp)return t.ALPHA;if(i===up)return t.RGB;if(i===Ln)return t.RGBA;if(i===Ei)return t.DEPTH_COMPONENT;if(i===is)return t.DEPTH_STENCIL;if(i===fp)return t.RED;if(i===Jc)return t.RED_INTEGER;if(i===us)return t.RG;if(i===Qc)return t.RG_INTEGER;if(i===eu)return t.RGBA_INTEGER;if(i===Ao||i===wo||i===Ro||i===Co)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ao)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ao)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===wo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ro)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Co)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xl||i===ql||i===jl||i===$l)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Xl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ql)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$l)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yl||i===Kl||i===Zl||i===Jl||i===Ql||i===Wo||i===ec)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Yl||i===Kl)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Zl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Jl)return r.COMPRESSED_R11_EAC;if(i===Ql)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Wo)return r.COMPRESSED_RG11_EAC;if(i===ec)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===tc||i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===uc||i===fc||i===dc||i===hc||i===pc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===tc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ic)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===oc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ac)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mc||i===gc||i===_c)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===mc)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_c)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xc||i===vc||i===Xo||i===Sc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===xc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===vc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rr?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const FM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class BM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new bp(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ni({vertexShader:FM,fragmentShader:OM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ti(new ga(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kM extends Wi{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const x=typeof XRWebGLBinding<"u",p=new BM,m={},S=n.getContextAttributes();let E=null,M=null;const P=[],T=[],D=new Je;let v=null;const w=new Tn;w.viewport=new Pt;const U=new Tn;U.viewport=new Pt;const C=[w,U],H=new jx;let G=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let xe=P[te];return xe===void 0&&(xe=new Xa,P[te]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(te){let xe=P[te];return xe===void 0&&(xe=new Xa,P[te]=xe),xe.getGripSpace()},this.getHand=function(te){let xe=P[te];return xe===void 0&&(xe=new Xa,P[te]=xe),xe.getHandSpace()};function I(te){const xe=T.indexOf(te.inputSource);if(xe===-1)return;const le=P[xe];le!==void 0&&(le.update(te.inputSource,te.frame,c||o),le.dispatchEvent({type:te.type,data:te.inputSource}))}function B(){s.removeEventListener("select",I),s.removeEventListener("selectstart",I),s.removeEventListener("selectend",I),s.removeEventListener("squeeze",I),s.removeEventListener("squeezestart",I),s.removeEventListener("squeezeend",I),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",N);for(let te=0;te<P.length;te++){const xe=T[te];xe!==null&&(T[te]=null,P[te].disconnect(xe))}G=null,X=null,p.reset();for(const te in m)delete m[te];e.setRenderTarget(E),h=null,d=null,f=null,s=null,M=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,i.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,i.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,n)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(te){if(s=te,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",I),s.addEventListener("selectstart",I),s.addEventListener("selectend",I),s.addEventListener("squeeze",I),s.addEventListener("squeezestart",I),s.addEventListener("squeezeend",I),s.addEventListener("end",B),s.addEventListener("inputsourceschange",N),S.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(D),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Fe=null,Ve=null;S.depth&&(Ve=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=S.stencil?is:Ei,Fe=S.stencil?Rr:ei);const Ge={colorFormat:n.RGBA8,depthFormat:Ve,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Ge),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Jn(d.textureWidth,d.textureHeight,{format:Ln,type:xn,depthTexture:new js(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const le={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,n,le),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new Jn(h.framebufferWidth,h.framebufferHeight,{format:Ln,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),He.setContext(s),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function N(te){for(let xe=0;xe<te.removed.length;xe++){const le=te.removed[xe],Fe=T.indexOf(le);Fe>=0&&(T[Fe]=null,P[Fe].disconnect(le))}for(let xe=0;xe<te.added.length;xe++){const le=te.added[xe];let Fe=T.indexOf(le);if(Fe===-1){for(let Ge=0;Ge<P.length;Ge++)if(Ge>=T.length){T.push(le),Fe=Ge;break}else if(T[Ge]===null){T[Ge]=le,Fe=Ge;break}if(Fe===-1)break}const Ve=P[Fe];Ve&&Ve.connect(le)}}const Y=new z,ce=new z;function de(te,xe,le){Y.setFromMatrixPosition(xe.matrixWorld),ce.setFromMatrixPosition(le.matrixWorld);const Fe=Y.distanceTo(ce),Ve=xe.projectionMatrix.elements,Ge=le.projectionMatrix.elements,R=Ve[14]/(Ve[10]-1),L=Ve[14]/(Ve[10]+1),W=(Ve[9]+1)/Ve[5],ee=(Ve[9]-1)/Ve[5],K=(Ve[8]-1)/Ve[0],se=(Ge[8]+1)/Ge[0],fe=R*K,ge=R*se,A=Fe/(-K+se),re=A*-K;if(xe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(re),te.translateZ(A),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ve[10]===-1)te.projectionMatrix.copy(xe.projectionMatrix),te.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const ve=R+A,he=L+A,Q=fe-re,Pe=ge+(Fe-re),y=W*L/he*ve,_=ee*L/he*ve;te.projectionMatrix.makePerspective(Q,Pe,y,_,ve,he),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function Ee(te,xe){xe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(xe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(s===null)return;let xe=te.near,le=te.far;p.texture!==null&&(p.depthNear>0&&(xe=p.depthNear),p.depthFar>0&&(le=p.depthFar)),H.near=U.near=w.near=xe,H.far=U.far=w.far=le,(G!==H.near||X!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),G=H.near,X=H.far),H.layers.mask=te.layers.mask|6,w.layers.mask=H.layers.mask&-5,U.layers.mask=H.layers.mask&-3;const Fe=te.parent,Ve=H.cameras;Ee(H,Fe);for(let Ge=0;Ge<Ve.length;Ge++)Ee(Ve[Ge],Fe);Ve.length===2?de(H,w,U):H.projectionMatrix.copy(w.projectionMatrix),Ce(te,H,Fe)};function Ce(te,xe,le){le===null?te.matrix.copy(xe.matrixWorld):(te.matrix.copy(le.matrixWorld),te.matrix.invert(),te.matrix.multiply(xe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(xe.projectionMatrix),te.projectionMatrixInverse.copy(xe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Pr*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(te){l=te,d!==null&&(d.fixedFoveation=te),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=te)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(H)},this.getCameraTexture=function(te){return m[te]};let We=null;function it(te,xe){if(u=xe.getViewerPose(c||o),g=xe,u!==null){const le=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let Fe=!1;le.length!==H.cameras.length&&(H.cameras.length=0,Fe=!0);for(let L=0;L<le.length;L++){const W=le[L];let ee=null;if(h!==null)ee=h.getViewport(W);else{const se=f.getViewSubImage(d,W);ee=se.viewport,L===0&&(e.setRenderTargetTextures(M,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(M))}let K=C[L];K===void 0&&(K=new Tn,K.layers.enable(L),K.viewport=new Pt,C[L]=K),K.matrix.fromArray(W.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(W.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(ee.x,ee.y,ee.width,ee.height),L===0&&(H.matrix.copy(K.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Fe===!0&&H.cameras.push(K)}const Ve=s.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const L=f.getDepthInformation(le[0]);L&&L.isValid&&L.texture&&p.init(L,s.renderState)}if(Ve&&Ve.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let L=0;L<le.length;L++){const W=le[L].camera;if(W){let ee=m[W];ee||(ee=new bp,m[W]=ee);const K=f.getCameraImage(W);ee.sourceTexture=K}}}}for(let le=0;le<P.length;le++){const Fe=T[le],Ve=P[le];Fe!==null&&Ve!==void 0&&Ve.update(Fe,xe,c||o)}We&&We(te,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),g=null}const He=new Ep;He.setAnimationLoop(it),this.setAnimationLoop=function(te){We=te},this.dispose=function(){}}}const zM=new Rt,Dp=new Ye;Dp.set(-1,0,0,0,1,0,0,0,1);function HM(t,e){function n(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,yp(t)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,E,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&h(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,S,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,n(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===dn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,n(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===dn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,n(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,n(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),E=S.envMap,M=S.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(zM.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Dp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=E*.5,m.map&&(p.map.value=m.map,n(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function VM(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const M=E.program;i.uniformBlockBinding(S,M)}function c(S,E){let M=s[S.id];M===void 0&&(g(S),M=u(S),s[S.id]=M,S.addEventListener("dispose",p));const P=E.program;i.updateUBOMapping(S,P);const T=e.render.frame;r[S.id]!==T&&(d(S),r[S.id]=T)}function u(S){const E=f();S.__bindingPointIndex=E;const M=t.createBuffer(),P=S.__size,T=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,P,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,M),M}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const E=s[S.id],M=S.uniforms,P=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let T=0,D=M.length;T<D;T++){const v=Array.isArray(M[T])?M[T]:[M[T]];for(let w=0,U=v.length;w<U;w++){const C=v[w];if(h(C,T,w,P)===!0){const H=C.__offset,G=Array.isArray(C.value)?C.value:[C.value];let X=0;for(let I=0;I<G.length;I++){const B=G[I],N=x(B);typeof B=="number"||typeof B=="boolean"?(C.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,H+X,C.__data)):B.isMatrix3?(C.__data[0]=B.elements[0],C.__data[1]=B.elements[1],C.__data[2]=B.elements[2],C.__data[3]=0,C.__data[4]=B.elements[3],C.__data[5]=B.elements[4],C.__data[6]=B.elements[5],C.__data[7]=0,C.__data[8]=B.elements[6],C.__data[9]=B.elements[7],C.__data[10]=B.elements[8],C.__data[11]=0):ArrayBuffer.isView(B)?C.__data.set(new B.constructor(B.buffer,B.byteOffset,C.__data.length)):(B.toArray(C.__data,X),X+=N.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(S,E,M,P){const T=S.value,D=E+"_"+M;if(P[D]===void 0)return typeof T=="number"||typeof T=="boolean"?P[D]=T:ArrayBuffer.isView(T)?P[D]=T.slice():P[D]=T.clone(),!0;{const v=P[D];if(typeof T=="number"||typeof T=="boolean"){if(v!==T)return P[D]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(v.equals(T)===!1)return v.copy(T),!0}}return!1}function g(S){const E=S.uniforms;let M=0;const P=16;for(let D=0,v=E.length;D<v;D++){const w=Array.isArray(E[D])?E[D]:[E[D]];for(let U=0,C=w.length;U<C;U++){const H=w[U],G=Array.isArray(H.value)?H.value:[H.value];for(let X=0,I=G.length;X<I;X++){const B=G[X],N=x(B),Y=M%P,ce=Y%N.boundary,de=Y+ce;M+=ce,de!==0&&P-de<N.storage&&(M+=P-de),H.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=N.storage}}}const T=M%P;return T>0&&(M+=P-T),S.__size=M,S.__cache={},this}function x(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",S),E}function p(S){const E=S.target;E.removeEventListener("dispose",p);const M=o.indexOf(E.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(const S in s)t.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:m}}const GM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vn=null;function WM(){return Vn===null&&(Vn=new Mx(GM,16,16,us,Mi),Vn.name="DFG_LUT",Vn.minFilter=Jt,Vn.magFilter=Jt,Vn.wrapS=gi,Vn.wrapT=gi,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}class XM{constructor(e={}){const{canvas:n=k0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=xn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const x=h,p=new Set([eu,Qc,Jc]),m=new Set([xn,ei,wr,Rr,Kc,Zc]),S=new Uint32Array(4),E=new Int32Array(4),M=new z;let P=null,T=null;const D=[],v=[];let w=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let C=!1,H=null;this._outputColorSpace=_n;let G=0,X=0,I=null,B=-1,N=null;const Y=new Pt,ce=new Pt;let de=null;const Ee=new lt(0);let Ce=0,We=n.width,it=n.height,He=1,te=null,xe=null;const le=new Pt(0,0,We,it),Fe=new Pt(0,0,We,it);let Ve=!1;const Ge=new ou;let R=!1,L=!1;const W=new Rt,ee=new z,K=new Pt,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function ge(){return I===null?He:1}let A=i;function re(b,k){return n.getContext(b,k)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${$c}`),n.addEventListener("webglcontextlost",ue,!1),n.addEventListener("webglcontextrestored",Oe,!1),n.addEventListener("webglcontextcreationerror",Ke,!1),A===null){const k="webgl2";if(A=re(k,b),A===null)throw re(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw ft("WebGLRenderer: "+b.message),b}let ve,he,Q,Pe,y,_,O,Z,oe,pe,me,J,ae,Se,Te,be,_e,$e,Qe,dt,F,ye,ne;function De(){ve=new Wb(A),ve.init(),F=new NM(A,ve),he=new Fb(A,ve,e,F),Q=new IM(A,ve),he.reversedDepthBuffer&&d&&Q.buffers.depth.setReversed(!0),Pe=new jb(A),y=new vM,_=new UM(A,ve,Q,y,he,F,Pe),O=new Gb(U),Z=new Zx(A),ye=new Ub(A,Z),oe=new Xb(A,Z,Pe,ye),pe=new Yb(A,oe,Z,ye,Pe),$e=new $b(A,he,_),Te=new Ob(y),me=new xM(U,O,ve,he,ye,Te),J=new HM(U,y),ae=new bM,Se=new wM(ve),_e=new Ib(U,O,Q,pe,g,l),be=new LM(U,pe,he),ne=new VM(A,Pe,he,Q),Qe=new Nb(A,ve,Pe),dt=new qb(A,ve,Pe),Pe.programs=me.programs,U.capabilities=he,U.extensions=ve,U.properties=y,U.renderLists=ae,U.shadowMap=be,U.state=Q,U.info=Pe}De(),x!==xn&&(w=new Zb(x,n.width,n.height,s,r));const Me=new kM(U,A);this.xr=Me,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const b=ve.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ve.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return He},this.setPixelRatio=function(b){b!==void 0&&(He=b,this.setSize(We,it,!1))},this.getSize=function(b){return b.set(We,it)},this.setSize=function(b,k,$=!0){if(Me.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}We=b,it=k,n.width=Math.floor(b*He),n.height=Math.floor(k*He),$===!0&&(n.style.width=b+"px",n.style.height=k+"px"),w!==null&&w.setSize(n.width,n.height),this.setViewport(0,0,b,k)},this.getDrawingBufferSize=function(b){return b.set(We*He,it*He).floor()},this.setDrawingBufferSize=function(b,k,$){We=b,it=k,He=$,n.width=Math.floor(b*$),n.height=Math.floor(k*$),this.setViewport(0,0,b,k)},this.setEffects=function(b){if(x===xn){ft("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let k=0;k<b.length;k++)if(b[k].isOutputPass===!0){Xe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Y)},this.getViewport=function(b){return b.copy(le)},this.setViewport=function(b,k,$,q){b.isVector4?le.set(b.x,b.y,b.z,b.w):le.set(b,k,$,q),Q.viewport(Y.copy(le).multiplyScalar(He).round())},this.getScissor=function(b){return b.copy(Fe)},this.setScissor=function(b,k,$,q){b.isVector4?Fe.set(b.x,b.y,b.z,b.w):Fe.set(b,k,$,q),Q.scissor(ce.copy(Fe).multiplyScalar(He).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(b){Q.setScissorTest(Ve=b)},this.setOpaqueSort=function(b){te=b},this.setTransparentSort=function(b){xe=b},this.getClearColor=function(b){return b.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(b=!0,k=!0,$=!0){let q=0;if(b){let j=!1;if(I!==null){const Re=I.texture.format;j=p.has(Re)}if(j){const Re=I.texture.type,Ie=m.has(Re),we=_e.getClearColor(),Ne=_e.getClearAlpha(),Be=we.r,Ze=we.g,st=we.b;Ie?(S[0]=Be,S[1]=Ze,S[2]=st,S[3]=Ne,A.clearBufferuiv(A.COLOR,0,S)):(E[0]=Be,E[1]=Ze,E[2]=st,E[3]=Ne,A.clearBufferiv(A.COLOR,0,E))}else q|=A.COLOR_BUFFER_BIT}k&&(q|=A.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(q|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&A.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),H=b},this.dispose=function(){n.removeEventListener("webglcontextlost",ue,!1),n.removeEventListener("webglcontextrestored",Oe,!1),n.removeEventListener("webglcontextcreationerror",Ke,!1),_e.dispose(),ae.dispose(),Se.dispose(),y.dispose(),O.dispose(),pe.dispose(),ye.dispose(),ne.dispose(),me.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Mu),Me.removeEventListener("sessionend",Eu),Xi.stop()};function ue(b){b.preventDefault(),bf("WebGLRenderer: Context Lost."),C=!0}function Oe(){bf("WebGLRenderer: Context Restored."),C=!1;const b=Pe.autoReset,k=be.enabled,$=be.autoUpdate,q=be.needsUpdate,j=be.type;De(),Pe.autoReset=b,be.enabled=k,be.autoUpdate=$,be.needsUpdate=q,be.type=j}function Ke(b){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Lt(b){const k=b.target;k.removeEventListener("dispose",Lt),gt(k)}function gt(b){ii(b),y.remove(b)}function ii(b){const k=y.get(b).programs;k!==void 0&&(k.forEach(function($){me.releaseProgram($)}),b.isShaderMaterial&&me.releaseShaderCache(b))}this.renderBufferDirect=function(b,k,$,q,j,Re){k===null&&(k=se);const Ie=j.isMesh&&j.matrixWorld.determinant()<0,we=rm(b,k,$,q,j);Q.setMaterial(q,Ie);let Ne=$.index,Be=1;if(q.wireframe===!0){if(Ne=oe.getWireframeAttribute($),Ne===void 0)return;Be=2}const Ze=$.drawRange,st=$.attributes.position;let ke=Ze.start*Be,_t=(Ze.start+Ze.count)*Be;Re!==null&&(ke=Math.max(ke,Re.start*Be),_t=Math.min(_t,(Re.start+Re.count)*Be)),Ne!==null?(ke=Math.max(ke,0),_t=Math.min(_t,Ne.count)):st!=null&&(ke=Math.max(ke,0),_t=Math.min(_t,st.count));const It=_t-ke;if(It<0||It===1/0)return;ye.setup(j,q,we,$,Ne);let Ct,St=Qe;if(Ne!==null&&(Ct=Z.get(Ne),St=dt,St.setIndex(Ct)),j.isMesh)q.wireframe===!0?(Q.setLineWidth(q.wireframeLinewidth*ge()),St.setMode(A.LINES)):St.setMode(A.TRIANGLES);else if(j.isLine){let Xt=q.linewidth;Xt===void 0&&(Xt=1),Q.setLineWidth(Xt*ge()),j.isLineSegments?St.setMode(A.LINES):j.isLineLoop?St.setMode(A.LINE_LOOP):St.setMode(A.LINE_STRIP)}else j.isPoints?St.setMode(A.POINTS):j.isSprite&&St.setMode(A.TRIANGLES);if(j.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))St.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Xt=j._multiDrawStarts,Le=j._multiDrawCounts,pn=j._multiDrawCount,ut=Ne?Z.get(Ne).bytesPerElement:1,yn=y.get(q).currentProgram.getUniforms();for(let kn=0;kn<pn;kn++)yn.setValue(A,"_gl_DrawID",kn),St.render(Xt[kn]/ut,Le[kn])}else if(j.isInstancedMesh)St.renderInstances(ke,It,j.count);else if($.isInstancedBufferGeometry){const Xt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Le=Math.min($.instanceCount,Xt);St.renderInstances(ke,It,Le)}else St.render(ke,It)};function Bn(b,k,$){b.transparent===!0&&b.side===mi&&b.forceSinglePass===!1?(b.side=dn,b.needsUpdate=!0,Vr(b,k,$),b.side=Vi,b.needsUpdate=!0,Vr(b,k,$),b.side=mi):Vr(b,k,$)}this.compile=function(b,k,$=null){$===null&&($=b),T=Se.get($),T.init(k),v.push(T),$.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),b!==$&&b.traverseVisible(function(j){j.isLight&&j.layers.test(k.layers)&&(T.pushLight(j),j.castShadow&&T.pushShadow(j))}),T.setupLights();const q=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const Re=j.material;if(Re)if(Array.isArray(Re))for(let Ie=0;Ie<Re.length;Ie++){const we=Re[Ie];Bn(we,$,j),q.add(we)}else Bn(Re,$,j),q.add(Re)}),T=v.pop(),q},this.compileAsync=function(b,k,$=null){const q=this.compile(b,k,$);return new Promise(j=>{function Re(){if(q.forEach(function(Ie){y.get(Ie).currentProgram.isReady()&&q.delete(Ie)}),q.size===0){j(b);return}setTimeout(Re,10)}ve.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Ta=null;function im(b){Ta&&Ta(b)}function Mu(){Xi.stop()}function Eu(){Xi.start()}const Xi=new Ep;Xi.setAnimationLoop(im),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(b){Ta=b,Me.setAnimationLoop(b),b===null?Xi.stop():Xi.start()},Me.addEventListener("sessionstart",Mu),Me.addEventListener("sessionend",Eu),this.render=function(b,k){if(k!==void 0&&k.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;H!==null&&H.renderStart(b,k);const $=Me.enabled===!0&&Me.isPresenting===!0,q=w!==null&&(I===null||$)&&w.begin(U,I);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(k),k=Me.getCamera()),b.isScene===!0&&b.onBeforeRender(U,b,k,I),T=Se.get(b,v.length),T.init(k),T.state.textureUnits=_.getTextureUnits(),v.push(T),W.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ge.setFromProjectionMatrix(W,Yn,k.reversedDepth),L=this.localClippingEnabled,R=Te.init(this.clippingPlanes,L),P=ae.get(b,D.length),P.init(),D.push(P),Me.enabled===!0&&Me.isPresenting===!0){const Ie=U.xr.getDepthSensingMesh();Ie!==null&&Aa(Ie,k,-1/0,U.sortObjects)}Aa(b,k,0,U.sortObjects),P.finish(),U.sortObjects===!0&&P.sort(te,xe),fe=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,fe&&_e.addToRenderList(P,b),this.info.render.frame++,R===!0&&Te.beginShadows();const j=T.state.shadowsArray;if(be.render(j,b,k),R===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&w.hasRenderPass())===!1){const Ie=P.opaque,we=P.transmissive;if(T.setupLights(),k.isArrayCamera){const Ne=k.cameras;if(we.length>0)for(let Be=0,Ze=Ne.length;Be<Ze;Be++){const st=Ne[Be];Au(Ie,we,b,st)}fe&&_e.render(b);for(let Be=0,Ze=Ne.length;Be<Ze;Be++){const st=Ne[Be];Tu(P,b,st,st.viewport)}}else we.length>0&&Au(Ie,we,b,k),fe&&_e.render(b),Tu(P,b,k)}I!==null&&X===0&&(_.updateMultisampleRenderTarget(I),_.updateRenderTargetMipmap(I)),q&&w.end(U),b.isScene===!0&&b.onAfterRender(U,b,k),ye.resetDefaultState(),B=-1,N=null,v.pop(),v.length>0?(T=v[v.length-1],_.setTextureUnits(T.state.textureUnits),R===!0&&Te.setGlobalState(U.clippingPlanes,T.state.camera)):T=null,D.pop(),D.length>0?P=D[D.length-1]:P=null,H!==null&&H.renderEnd()};function Aa(b,k,$,q){if(b.visible===!1)return;if(b.layers.test(k.layers)){if(b.isGroup)$=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(k);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Ge.intersectsSprite(b)){q&&K.setFromMatrixPosition(b.matrixWorld).applyMatrix4(W);const Ie=pe.update(b),we=b.material;we.visible&&P.push(b,Ie,we,$,K.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Ge.intersectsObject(b))){const Ie=pe.update(b),we=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),K.copy(b.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),K.copy(Ie.boundingSphere.center)),K.applyMatrix4(b.matrixWorld).applyMatrix4(W)),Array.isArray(we)){const Ne=Ie.groups;for(let Be=0,Ze=Ne.length;Be<Ze;Be++){const st=Ne[Be],ke=we[st.materialIndex];ke&&ke.visible&&P.push(b,Ie,ke,$,K.z,st)}}else we.visible&&P.push(b,Ie,we,$,K.z,null)}}const Re=b.children;for(let Ie=0,we=Re.length;Ie<we;Ie++)Aa(Re[Ie],k,$,q)}function Tu(b,k,$,q){const{opaque:j,transmissive:Re,transparent:Ie}=b;T.setupLightsView($),R===!0&&Te.setGlobalState(U.clippingPlanes,$),q&&Q.viewport(Y.copy(q)),j.length>0&&Hr(j,k,$),Re.length>0&&Hr(Re,k,$),Ie.length>0&&Hr(Ie,k,$),Q.buffers.depth.setTest(!0),Q.buffers.depth.setMask(!0),Q.buffers.color.setMask(!0),Q.setPolygonOffset(!1)}function Au(b,k,$,q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[q.id]===void 0){const ke=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[q.id]=new Jn(1,1,{generateMipmaps:!0,type:ke?Mi:xn,minFilter:ns,samples:Math.max(4,he.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const Re=T.state.transmissionRenderTarget[q.id],Ie=q.viewport||Y;Re.setSize(Ie.z*U.transmissionResolutionScale,Ie.w*U.transmissionResolutionScale);const we=U.getRenderTarget(),Ne=U.getActiveCubeFace(),Be=U.getActiveMipmapLevel();U.setRenderTarget(Re),U.getClearColor(Ee),Ce=U.getClearAlpha(),Ce<1&&U.setClearColor(16777215,.5),U.clear(),fe&&_e.render($);const Ze=U.toneMapping;U.toneMapping=Zn;const st=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),T.setupLightsView(q),R===!0&&Te.setGlobalState(U.clippingPlanes,q),Hr(b,$,q),_.updateMultisampleRenderTarget(Re),_.updateRenderTargetMipmap(Re),ve.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let _t=0,It=k.length;_t<It;_t++){const Ct=k[_t],{object:St,geometry:Xt,material:Le,group:pn}=Ct;if(Le.side===mi&&St.layers.test(q.layers)){const ut=Le.side;Le.side=dn,Le.needsUpdate=!0,wu(St,$,q,Xt,Le,pn),Le.side=ut,Le.needsUpdate=!0,ke=!0}}ke===!0&&(_.updateMultisampleRenderTarget(Re),_.updateRenderTargetMipmap(Re))}U.setRenderTarget(we,Ne,Be),U.setClearColor(Ee,Ce),st!==void 0&&(q.viewport=st),U.toneMapping=Ze}function Hr(b,k,$){const q=k.isScene===!0?k.overrideMaterial:null;for(let j=0,Re=b.length;j<Re;j++){const Ie=b[j],{object:we,geometry:Ne,group:Be}=Ie;let Ze=Ie.material;Ze.allowOverride===!0&&q!==null&&(Ze=q),we.layers.test($.layers)&&wu(we,k,$,Ne,Ze,Be)}}function wu(b,k,$,q,j,Re){b.onBeforeRender(U,k,$,q,j,Re),b.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(U,k,$,q,b,Re),j.transparent===!0&&j.side===mi&&j.forceSinglePass===!1?(j.side=dn,j.needsUpdate=!0,U.renderBufferDirect($,k,q,j,b,Re),j.side=Vi,j.needsUpdate=!0,U.renderBufferDirect($,k,q,j,b,Re),j.side=mi):U.renderBufferDirect($,k,q,j,b,Re),b.onAfterRender(U,k,$,q,j,Re)}function Vr(b,k,$){k.isScene!==!0&&(k=se);const q=y.get(b),j=T.state.lights,Re=T.state.shadowsArray,Ie=j.state.version,we=me.getParameters(b,j.state,Re,k,$,T.state.lightProbeGridArray),Ne=me.getProgramCacheKey(we);let Be=q.programs;q.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?k.environment:null,q.fog=k.fog;const Ze=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;q.envMap=O.get(b.envMap||q.environment,Ze),q.envMapRotation=q.environment!==null&&b.envMap===null?k.environmentRotation:b.envMapRotation,Be===void 0&&(b.addEventListener("dispose",Lt),Be=new Map,q.programs=Be);let st=Be.get(Ne);if(st!==void 0){if(q.currentProgram===st&&q.lightsStateVersion===Ie)return Cu(b,we),st}else we.uniforms=me.getUniforms(b),H!==null&&b.isNodeMaterial&&H.build(b,$,we),b.onBeforeCompile(we,U),st=me.acquireProgram(we,Ne),Be.set(Ne,st),q.uniforms=we.uniforms;const ke=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ke.clippingPlanes=Te.uniform),Cu(b,we),q.needsLights=am(b),q.lightsStateVersion=Ie,q.needsLights&&(ke.ambientLightColor.value=j.state.ambient,ke.lightProbe.value=j.state.probe,ke.directionalLights.value=j.state.directional,ke.directionalLightShadows.value=j.state.directionalShadow,ke.spotLights.value=j.state.spot,ke.spotLightShadows.value=j.state.spotShadow,ke.rectAreaLights.value=j.state.rectArea,ke.ltc_1.value=j.state.rectAreaLTC1,ke.ltc_2.value=j.state.rectAreaLTC2,ke.pointLights.value=j.state.point,ke.pointLightShadows.value=j.state.pointShadow,ke.hemisphereLights.value=j.state.hemi,ke.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ke.spotLightMatrix.value=j.state.spotLightMatrix,ke.spotLightMap.value=j.state.spotLightMap,ke.pointShadowMatrix.value=j.state.pointShadowMatrix),q.lightProbeGrid=T.state.lightProbeGridArray.length>0,q.currentProgram=st,q.uniformsList=null,st}function Ru(b){if(b.uniformsList===null){const k=b.currentProgram.getUniforms();b.uniformsList=Do.seqWithValue(k.seq,b.uniforms)}return b.uniformsList}function Cu(b,k){const $=y.get(b);$.outputColorSpace=k.outputColorSpace,$.batching=k.batching,$.batchingColor=k.batchingColor,$.instancing=k.instancing,$.instancingColor=k.instancingColor,$.instancingMorph=k.instancingMorph,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function sm(b,k){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(k.matrixWorld);for(let $=0,q=b.length;$<q;$++){const j=b[$];if(j.texture!==null&&j.boundingBox.containsPoint(M))return j}return null}function rm(b,k,$,q,j){k.isScene!==!0&&(k=se),_.resetTextureUnits();const Re=k.fog,Ie=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?k.environment:null,we=I===null?U.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:ct.workingColorSpace,Ne=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Be=O.get(q.envMap||Ie,Ne),Ze=q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,st=!!$.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ke=!!$.morphAttributes.position,_t=!!$.morphAttributes.normal,It=!!$.morphAttributes.color;let Ct=Zn;q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ct=U.toneMapping);const St=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Xt=St!==void 0?St.length:0,Le=y.get(q),pn=T.state.lights;if(R===!0&&(L===!0||b!==N)){const Mt=b===N&&q.id===B;Te.setState(q,b,Mt)}let ut=!1;q.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==pn.state.version||Le.outputColorSpace!==we||j.isBatchedMesh&&Le.batching===!1||!j.isBatchedMesh&&Le.batching===!0||j.isBatchedMesh&&Le.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Le.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Le.instancing===!1||!j.isInstancedMesh&&Le.instancing===!0||j.isSkinnedMesh&&Le.skinning===!1||!j.isSkinnedMesh&&Le.skinning===!0||j.isInstancedMesh&&Le.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Le.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Le.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Le.instancingMorph===!1&&j.morphTexture!==null||Le.envMap!==Be||q.fog===!0&&Le.fog!==Re||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Te.numPlanes||Le.numIntersection!==Te.numIntersection)||Le.vertexAlphas!==Ze||Le.vertexTangents!==st||Le.morphTargets!==ke||Le.morphNormals!==_t||Le.morphColors!==It||Le.toneMapping!==Ct||Le.morphTargetsCount!==Xt||!!Le.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,Le.__version=q.version);let yn=Le.currentProgram;ut===!0&&(yn=Vr(q,k,j),H&&q.isNodeMaterial&&H.onUpdateProgram(q,yn,Le));let kn=!1,wi=!1,hs=!1;const bt=yn.getUniforms(),Ut=Le.uniforms;if(Q.useProgram(yn.program)&&(kn=!0,wi=!0,hs=!0),q.id!==B&&(B=q.id,wi=!0),Le.needsLights){const Mt=sm(T.state.lightProbeGridArray,j);Le.lightProbeGrid!==Mt&&(Le.lightProbeGrid=Mt,wi=!0)}if(kn||N!==b){Q.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),bt.setValue(A,"projectionMatrix",b.projectionMatrix),bt.setValue(A,"viewMatrix",b.matrixWorldInverse);const Ci=bt.map.cameraPosition;Ci!==void 0&&Ci.setValue(A,ee.setFromMatrixPosition(b.matrixWorld)),he.logarithmicDepthBuffer&&bt.setValue(A,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&bt.setValue(A,"isOrthographic",b.isOrthographicCamera===!0),N!==b&&(N=b,wi=!0,hs=!0)}if(Le.needsLights&&(pn.state.directionalShadowMap.length>0&&bt.setValue(A,"directionalShadowMap",pn.state.directionalShadowMap,_),pn.state.spotShadowMap.length>0&&bt.setValue(A,"spotShadowMap",pn.state.spotShadowMap,_),pn.state.pointShadowMap.length>0&&bt.setValue(A,"pointShadowMap",pn.state.pointShadowMap,_)),j.isSkinnedMesh){bt.setOptional(A,j,"bindMatrix"),bt.setOptional(A,j,"bindMatrixInverse");const Mt=j.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),bt.setValue(A,"boneTexture",Mt.boneTexture,_))}j.isBatchedMesh&&(bt.setOptional(A,j,"batchingTexture"),bt.setValue(A,"batchingTexture",j._matricesTexture,_),bt.setOptional(A,j,"batchingIdTexture"),bt.setValue(A,"batchingIdTexture",j._indirectTexture,_),bt.setOptional(A,j,"batchingColorTexture"),j._colorsTexture!==null&&bt.setValue(A,"batchingColorTexture",j._colorsTexture,_));const Ri=$.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&$e.update(j,$,yn),(wi||Le.receiveShadow!==j.receiveShadow)&&(Le.receiveShadow=j.receiveShadow,bt.setValue(A,"receiveShadow",j.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&k.environment!==null&&(Ut.envMapIntensity.value=k.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=WM()),wi){if(bt.setValue(A,"toneMappingExposure",U.toneMappingExposure),Le.needsLights&&om(Ut,hs),Re&&q.fog===!0&&J.refreshFogUniforms(Ut,Re),J.refreshMaterialUniforms(Ut,q,He,it,T.state.transmissionRenderTarget[b.id]),Le.needsLights&&Le.lightProbeGrid){const Mt=Le.lightProbeGrid;Ut.probesSH.value=Mt.texture,Ut.probesMin.value.copy(Mt.boundingBox.min),Ut.probesMax.value.copy(Mt.boundingBox.max),Ut.probesResolution.value.copy(Mt.resolution)}Do.upload(A,Ru(Le),Ut,_)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Do.upload(A,Ru(Le),Ut,_),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&bt.setValue(A,"center",j.center),bt.setValue(A,"modelViewMatrix",j.modelViewMatrix),bt.setValue(A,"normalMatrix",j.normalMatrix),bt.setValue(A,"modelMatrix",j.matrixWorld),q.uniformsGroups!==void 0){const Mt=q.uniformsGroups;for(let Ci=0,ps=Mt.length;Ci<ps;Ci++){const Pu=Mt[Ci];ne.update(Pu,yn),ne.bind(Pu,yn)}}return yn}function om(b,k){b.ambientLightColor.needsUpdate=k,b.lightProbe.needsUpdate=k,b.directionalLights.needsUpdate=k,b.directionalLightShadows.needsUpdate=k,b.pointLights.needsUpdate=k,b.pointLightShadows.needsUpdate=k,b.spotLights.needsUpdate=k,b.spotLightShadows.needsUpdate=k,b.rectAreaLights.needsUpdate=k,b.hemisphereLights.needsUpdate=k}function am(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,k,$){const q=y.get(b);q.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),y.get(b.texture).__webglTexture=k,y.get(b.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:$,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,k){const $=y.get(b);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0};const lm=A.createFramebuffer();this.setRenderTarget=function(b,k=0,$=0){I=b,G=k,X=$;let q=null,j=!1,Re=!1;if(b){const we=y.get(b);if(we.__useDefaultFramebuffer!==void 0){Q.bindFramebuffer(A.FRAMEBUFFER,we.__webglFramebuffer),Y.copy(b.viewport),ce.copy(b.scissor),de=b.scissorTest,Q.viewport(Y),Q.scissor(ce),Q.setScissorTest(de),B=-1;return}else if(we.__webglFramebuffer===void 0)_.setupRenderTarget(b);else if(we.__hasExternalTextures)_.rebindTextures(b,y.get(b.texture).__webglTexture,y.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ze=b.depthTexture;if(we.__boundDepthTexture!==Ze){if(Ze!==null&&y.has(Ze)&&(b.width!==Ze.image.width||b.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");_.setupDepthRenderbuffer(b)}}const Ne=b.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Re=!0);const Be=y.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Be[k])?q=Be[k][$]:q=Be[k],j=!0):b.samples>0&&_.useMultisampledRTT(b)===!1?q=y.get(b).__webglMultisampledFramebuffer:Array.isArray(Be)?q=Be[$]:q=Be,Y.copy(b.viewport),ce.copy(b.scissor),de=b.scissorTest}else Y.copy(le).multiplyScalar(He).floor(),ce.copy(Fe).multiplyScalar(He).floor(),de=Ve;if($!==0&&(q=lm),Q.bindFramebuffer(A.FRAMEBUFFER,q)&&Q.drawBuffers(b,q),Q.viewport(Y),Q.scissor(ce),Q.setScissorTest(de),j){const we=y.get(b.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+k,we.__webglTexture,$)}else if(Re){const we=k;for(let Ne=0;Ne<b.textures.length;Ne++){const Be=y.get(b.textures[Ne]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Ne,Be.__webglTexture,$,we)}}else if(b!==null&&$!==0){const we=y.get(b.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,we.__webglTexture,$)}B=-1},this.readRenderTargetPixels=function(b,k,$,q,j,Re,Ie,we=0){if(!(b&&b.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne){Q.bindFramebuffer(A.FRAMEBUFFER,Ne);try{const Be=b.textures[we],Ze=Be.format,st=Be.type;if(b.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+we),!he.textureFormatReadable(Ze)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(st)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=b.width-q&&$>=0&&$<=b.height-j&&A.readPixels(k,$,q,j,F.convert(Ze),F.convert(st),Re)}finally{const Be=I!==null?y.get(I).__webglFramebuffer:null;Q.bindFramebuffer(A.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(b,k,$,q,j,Re,Ie,we=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne)if(k>=0&&k<=b.width-q&&$>=0&&$<=b.height-j){Q.bindFramebuffer(A.FRAMEBUFFER,Ne);const Be=b.textures[we],Ze=Be.format,st=Be.type;if(b.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+we),!he.textureFormatReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(st))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,ke),A.bufferData(A.PIXEL_PACK_BUFFER,Re.byteLength,A.STREAM_READ),A.readPixels(k,$,q,j,F.convert(Ze),F.convert(st),0);const _t=I!==null?y.get(I).__webglFramebuffer:null;Q.bindFramebuffer(A.FRAMEBUFFER,_t);const It=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await z0(A,It,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,ke),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Re),A.deleteBuffer(ke),A.deleteSync(It),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,k=null,$=0){const q=Math.pow(2,-$),j=Math.floor(b.image.width*q),Re=Math.floor(b.image.height*q),Ie=k!==null?k.x:0,we=k!==null?k.y:0;_.setTexture2D(b,0),A.copyTexSubImage2D(A.TEXTURE_2D,$,0,0,Ie,we,j,Re),Q.unbindTexture()};const cm=A.createFramebuffer(),um=A.createFramebuffer();this.copyTextureToTexture=function(b,k,$=null,q=null,j=0,Re=0){let Ie,we,Ne,Be,Ze,st,ke,_t,It;const Ct=b.isCompressedTexture?b.mipmaps[Re]:b.image;if($!==null)Ie=$.max.x-$.min.x,we=$.max.y-$.min.y,Ne=$.isBox3?$.max.z-$.min.z:1,Be=$.min.x,Ze=$.min.y,st=$.isBox3?$.min.z:0;else{const Ut=Math.pow(2,-j);Ie=Math.floor(Ct.width*Ut),we=Math.floor(Ct.height*Ut),b.isDataArrayTexture?Ne=Ct.depth:b.isData3DTexture?Ne=Math.floor(Ct.depth*Ut):Ne=1,Be=0,Ze=0,st=0}q!==null?(ke=q.x,_t=q.y,It=q.z):(ke=0,_t=0,It=0);const St=F.convert(k.format),Xt=F.convert(k.type);let Le;k.isData3DTexture?(_.setTexture3D(k,0),Le=A.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(_.setTexture2DArray(k,0),Le=A.TEXTURE_2D_ARRAY):(_.setTexture2D(k,0),Le=A.TEXTURE_2D),Q.activeTexture(A.TEXTURE0),Q.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,k.flipY),Q.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),Q.pixelStorei(A.UNPACK_ALIGNMENT,k.unpackAlignment);const pn=Q.getParameter(A.UNPACK_ROW_LENGTH),ut=Q.getParameter(A.UNPACK_IMAGE_HEIGHT),yn=Q.getParameter(A.UNPACK_SKIP_PIXELS),kn=Q.getParameter(A.UNPACK_SKIP_ROWS),wi=Q.getParameter(A.UNPACK_SKIP_IMAGES);Q.pixelStorei(A.UNPACK_ROW_LENGTH,Ct.width),Q.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Ct.height),Q.pixelStorei(A.UNPACK_SKIP_PIXELS,Be),Q.pixelStorei(A.UNPACK_SKIP_ROWS,Ze),Q.pixelStorei(A.UNPACK_SKIP_IMAGES,st);const hs=b.isDataArrayTexture||b.isData3DTexture,bt=k.isDataArrayTexture||k.isData3DTexture;if(b.isDepthTexture){const Ut=y.get(b),Ri=y.get(k),Mt=y.get(Ut.__renderTarget),Ci=y.get(Ri.__renderTarget);Q.bindFramebuffer(A.READ_FRAMEBUFFER,Mt.__webglFramebuffer),Q.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let ps=0;ps<Ne;ps++)hs&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,y.get(b).__webglTexture,j,st+ps),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,y.get(k).__webglTexture,Re,It+ps)),A.blitFramebuffer(Be,Ze,Ie,we,ke,_t,Ie,we,A.DEPTH_BUFFER_BIT,A.NEAREST);Q.bindFramebuffer(A.READ_FRAMEBUFFER,null),Q.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(j!==0||b.isRenderTargetTexture||y.has(b)){const Ut=y.get(b),Ri=y.get(k);Q.bindFramebuffer(A.READ_FRAMEBUFFER,cm),Q.bindFramebuffer(A.DRAW_FRAMEBUFFER,um);for(let Mt=0;Mt<Ne;Mt++)hs?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ut.__webglTexture,j,st+Mt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ut.__webglTexture,j),bt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ri.__webglTexture,Re,It+Mt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ri.__webglTexture,Re),j!==0?A.blitFramebuffer(Be,Ze,Ie,we,ke,_t,Ie,we,A.COLOR_BUFFER_BIT,A.NEAREST):bt?A.copyTexSubImage3D(Le,Re,ke,_t,It+Mt,Be,Ze,Ie,we):A.copyTexSubImage2D(Le,Re,ke,_t,Be,Ze,Ie,we);Q.bindFramebuffer(A.READ_FRAMEBUFFER,null),Q.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else bt?b.isDataTexture||b.isData3DTexture?A.texSubImage3D(Le,Re,ke,_t,It,Ie,we,Ne,St,Xt,Ct.data):k.isCompressedArrayTexture?A.compressedTexSubImage3D(Le,Re,ke,_t,It,Ie,we,Ne,St,Ct.data):A.texSubImage3D(Le,Re,ke,_t,It,Ie,we,Ne,St,Xt,Ct):b.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Re,ke,_t,Ie,we,St,Xt,Ct.data):b.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Re,ke,_t,Ct.width,Ct.height,St,Ct.data):A.texSubImage2D(A.TEXTURE_2D,Re,ke,_t,Ie,we,St,Xt,Ct);Q.pixelStorei(A.UNPACK_ROW_LENGTH,pn),Q.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ut),Q.pixelStorei(A.UNPACK_SKIP_PIXELS,yn),Q.pixelStorei(A.UNPACK_SKIP_ROWS,kn),Q.pixelStorei(A.UNPACK_SKIP_IMAGES,wi),Re===0&&k.generateMipmaps&&A.generateMipmap(Le),Q.unbindTexture()},this.initRenderTarget=function(b){y.get(b).__webglFramebuffer===void 0&&_.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?_.setTextureCube(b,0):b.isData3DTexture?_.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?_.setTexture2DArray(b,0):_.setTexture2D(b,0),Q.unbindTexture()},this.resetState=function(){G=0,X=0,I=null,Q.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=ct._getUnpackColorSpace()}}const bd={type:"change"},uu={type:"start"},Lp={type:"end"},xo=new ru,yd=new Oi,qM=Math.cos(70*Po.DEG2RAD),Ft=new z,un=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gl=1e-6;class jM extends Yx{constructor(e,n=null){super(e,n),this.state=xt.NONE,this.target=new z,this.cursor=new z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zs.ROTATE,MIDDLE:zs.DOLLY,RIGHT:zs.PAN},this.touches={ONE:Is.ROTATE,TWO:Is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new z,this._lastQuaternion=new Ti,this._lastTargetPosition=new z,this._quat=new Ti().setFromUnitVectors(e.up,new z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Yf,this._sphericalDelta=new Yf,this._scale=1,this._panOffset=new z,this._rotateStart=new Je,this._rotateEnd=new Je,this._rotateDelta=new Je,this._panStart=new Je,this._panEnd=new Je,this._panDelta=new Je,this._dollyStart=new Je,this._dollyEnd=new Je,this._dollyDelta=new Je,this._dollyDirection=new z,this._mouse=new Je,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=YM.bind(this),this._onPointerDown=$M.bind(this),this._onPointerUp=KM.bind(this),this._onContextMenu=iE.bind(this),this._onMouseWheel=QM.bind(this),this._onKeyDown=eE.bind(this),this._onTouchStart=tE.bind(this),this._onTouchMove=nE.bind(this),this._onMouseDown=ZM.bind(this),this._onMouseMove=JM.bind(this),this._interceptControlDown=sE.bind(this),this._interceptControlUp=rE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bd),this.update(),this.state=xt.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Ft.copy(n).sub(this.target),Ft.applyQuaternion(this._quat),this._spherical.setFromVector3(Ft),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=un:i>Math.PI&&(i-=un),s<-Math.PI?s+=un:s>Math.PI&&(s-=un),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ft.setFromSpherical(this._spherical),Ft.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ft),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ft.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new z(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ft.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(xo.origin.copy(this.object.position),xo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xo.direction))<qM?this.object.lookAt(this.target):(yd.setFromNormalAndCoplanarPoint(this.object.up,this.target),xo.intersectPlane(yd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>gl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gl||this._lastTargetPosition.distanceToSquared(this.target)>gl?(this.dispatchEvent(bd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?un/60*this.autoRotateSpeed*e:un/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Ft.setFromMatrixColumn(n,0),Ft.multiplyScalar(-e),this._panOffset.add(Ft)}_panUp(e,n){this.screenSpacePanning===!0?Ft.setFromMatrixColumn(n,1):(Ft.setFromMatrixColumn(n,0),Ft.crossVectors(this.object.up,Ft)),Ft.multiplyScalar(e),this._panOffset.add(Ft)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ft.copy(s).sub(this.target);let r=Ft.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(un*this._rotateDelta.x/n.clientHeight),this._rotateUp(un*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(un*this._rotateDelta.x/n.clientHeight),this._rotateUp(un*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Je,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function $M(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function YM(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function KM(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Lp),this.state=xt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function ZM(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case zs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=xt.DOLLY;break;case zs.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=xt.ROTATE}break;case zs.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(uu)}function JM(t){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function QM(t){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(t.preventDefault(),this.dispatchEvent(uu),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(Lp))}function eE(t){this.enabled!==!1&&this._handleKeyDown(t)}function tE(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Is.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=xt.TOUCH_ROTATE;break;case Is.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case Is.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=xt.TOUCH_DOLLY_PAN;break;case Is.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(uu)}function nE(t){switch(this._trackPointer(t),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=xt.NONE}}function iE(t){this.enabled!==!1&&t.preventDefault()}function sE(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function rE(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class oE extends au{constructor(e){super(e)}load(e,n,i,s){const r=this,o=new Hx(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{n(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}parse(e){function n(c){const u=new DataView(c),f=32/8*3+32/8*3*3+16/8,d=u.getUint32(80,!0);if(80+32/8+d*f===u.byteLength)return!0;const g=[115,111,108,105,100];for(let x=0;x<5;x++)if(i(g,u,x))return!1;return!0}function i(c,u,f){for(let d=0,h=c.length;d<h;d++)if(c[d]!==u.getUint8(f+d))return!1;return!0}function s(c){const u=new DataView(c),f=u.getUint32(80,!0);let d,h,g,x=!1,p,m,S,E,M;for(let C=0;C<70;C++)u.getUint32(C,!1)==1129270351&&u.getUint8(C+4)==82&&u.getUint8(C+5)==61&&(x=!0,p=new Float32Array(f*3*3),m=u.getUint8(C+6)/255,S=u.getUint8(C+7)/255,E=u.getUint8(C+8)/255,M=u.getUint8(C+9)/255);const P=84,T=50,D=new bn,v=new Float32Array(f*3*3),w=new Float32Array(f*3*3),U=new lt;for(let C=0;C<f;C++){const H=P+C*T,G=u.getFloat32(H,!0),X=u.getFloat32(H+4,!0),I=u.getFloat32(H+8,!0);if(x){const B=u.getUint16(H+48,!0);(B&32768)===0?(d=(B&31)/31,h=(B>>5&31)/31,g=(B>>10&31)/31):(d=m,h=S,g=E)}for(let B=1;B<=3;B++){const N=H+B*12,Y=C*3*3+(B-1)*3;v[Y]=u.getFloat32(N,!0),v[Y+1]=u.getFloat32(N+4,!0),v[Y+2]=u.getFloat32(N+8,!0),w[Y]=G,w[Y+1]=X,w[Y+2]=I,x&&(U.setRGB(d,h,g,_n),p[Y]=U.r,p[Y+1]=U.g,p[Y+2]=U.b)}}return D.setAttribute("position",new Sn(v,3)),D.setAttribute("normal",new Sn(w,3)),x&&(D.setAttribute("color",new Sn(p,3)),D.hasColors=!0,D.alpha=M),D}function r(c){const u=new bn,f=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g,h=/solid\s(.+)/;let g=0;const x=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,p=new RegExp("vertex"+x+x+x,"g"),m=new RegExp("normal"+x+x+x,"g"),S=[],E=[],M=[],P=new z;let T,D=0,v=0,w=0;for(;(T=f.exec(c))!==null;){v=w;const U=T[0],C=(T=h.exec(U))!==null?T[1]:"";for(M.push(C);(T=d.exec(U))!==null;){let X=0,I=0;const B=T[0];for(;(T=m.exec(B))!==null;)P.x=parseFloat(T[1]),P.y=parseFloat(T[2]),P.z=parseFloat(T[3]),I++;for(;(T=p.exec(B))!==null;)S.push(parseFloat(T[1]),parseFloat(T[2]),parseFloat(T[3])),E.push(P.x,P.y,P.z),X++,w++;I!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),X!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const H=v,G=w-v;u.userData.groupNames=M,u.addGroup(H,G,D),D++}return u.setAttribute("position",new ln(S,3)),u.setAttribute("normal",new ln(E,3)),u}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let f=0;f<c.length;f++)u[f]=c.charCodeAt(f)&255;return u.buffer||u}else return c}const l=a(e);return n(l)?s(l):r(o(e))}}const aE={class:"relative h-full min-h-[380px] overflow-hidden rounded-xl border border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/70"},lE={key:0,class:"absolute inset-0 flex items-center justify-center px-4 text-center text-sm text-slate-500 dark:text-slate-400"},cE={key:1,class:"absolute inset-0 flex items-center justify-center bg-white/70 text-sm font-medium text-slate-700 dark:bg-slate-900/70 dark:text-slate-200"},uE={key:2,class:"absolute inset-0 flex items-center justify-center px-4 text-center text-sm text-rose-600 dark:text-rose-400"},fE=16317180,dE=988970,hE=5195493,pE=13751771,mE={__name:"StlViewer",props:{file:{type:[File,null],default:null},fileBuffer:{type:[ArrayBuffer,null],default:null},darkMode:{type:Boolean,default:!1},orientation:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(t){const e=t;function n(){return e.darkMode?pE:hE}function i(){u&&(u.background=new lt(e.darkMode?dE:fE))}function s(){x?.material&&x.material.color.setHex(n())}const r=$t(null),o=$t(!1),a=$t(""),l=$t(!1),c=$h(()=>e.file instanceof File);let u=null,f=null,d=null,h=null,g=null,x=null,p=0;const m=new z(1,-1,.75).normalize();function S(G,X=0){const I=Number(G);return Number.isFinite(I)?I:X}function E(){if(!r.value)return;u=new _x,i(),f=new Tn(45,1,.1,5e3),f.up.set(0,0,1),f.position.set(160,-160,120),d=new XM({antialias:!0,alpha:!1}),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.value.appendChild(d.domElement);const G=new Xx(16777215,.6);u.add(G);const X=new Vx(16777215,13358561,.45);u.add(X);const I=new $f(16777215,.8);I.position.set(120,180,80),u.add(I);const B=new $f(16777215,.35);B.position.set(-120,80,-80),u.add(B);const N=new $x(260,26,8227738,11450564);N.rotation.x=Math.PI/2,u.add(N),h=new jM(f,d.domElement),h.enableDamping=!0,h.enablePan=!0,h.enableRotate=!0,h.enableZoom=!0,h.target.set(0,0,0),P(),M()}function M(){!d||!u||!f||!h||(g=window.requestAnimationFrame(M),h.update(),d.render(u,f))}function P(){if(!d||!f||!r.value)return;const G=r.value.clientWidth||400,X=r.value.clientHeight||420;d.setSize(G,X,!1),f.aspect=G/X,f.updateProjectionMatrix()}function T(){!u||!x||(u.remove(x),x.geometry.dispose(),x.material.dispose(),x=null)}function D(G){return Array.isArray(G)&&G.length===3&&G.every(X=>Array.isArray(X)&&X.length===3&&X.every(I=>Number.isFinite(Number(I))))}function v(){if(!x||!l.value)return;x.position.set(0,0,0),x.rotation.set(0,0,0,"XYZ"),x.scale.set(1,1,1),x.matrixAutoUpdate=!0;const G=e.orientation?.rotation_matrix;if(D(G)){const X=new Rt().set(Number(G[0][0]),Number(G[0][1]),Number(G[0][2]),0,Number(G[1][0]),Number(G[1][1]),Number(G[1][2]),0,Number(G[2][0]),Number(G[2][1]),Number(G[2][2]),0,0,0,0,1),I=new z,B=new Ti,N=new z;X.decompose(I,B,N),x.quaternion.copy(B)}else{const X=Po.degToRad(S(e.orientation?.x)),I=Po.degToRad(S(e.orientation?.y)),B=Po.degToRad(S(e.orientation?.z));x.rotateX(X),x.rotateY(I),x.rotateZ(B)}w()}function w(){if(!x||!f||!h)return;const X=new Hi().setFromObject(x).getCenter(new z);x.position.x-=X.x,x.position.y-=X.y;const I=new Hi().setFromObject(x);x.position.z-=I.min.z;const B=new Hi().setFromObject(x),N=B.getCenter(new z),Y=B.getSize(new z),de=Math.max(Y.x,Y.y,Y.z,1)*1.9+55;h.target.copy(N),f.position.copy(N).addScaledVector(m,de),f.near=.1,f.far=Math.max(5e3,de*25),f.updateProjectionMatrix(),h.update()}async function U(G){return e.fileBuffer instanceof ArrayBuffer&&e.fileBuffer.byteLength>0?e.fileBuffer:G.arrayBuffer()}async function C(G){if(a.value="",!(G instanceof File)){T();return}if(!l.value||!u)return;const X=++p;o.value=!0;try{const I=new oE,B=await U(G);if(X!==p)return;const N=I.parse(B);if(!N?.attributes?.position?.count)throw new Error("STL contains no geometry");if(N.computeVertexNormals(),N.computeBoundingBox(),!N.boundingBox)throw new Error("Could not compute model bounds");if(T(),X!==p)return;const Y=new z;N.boundingBox.getCenter(Y),N.translate(-Y.x,-Y.y,0),N.computeBoundingBox();const ce=new z;N.boundingBox.getSize(ce);const Ee=130/Math.max(ce.x||1,ce.y||1,ce.z||1);N.scale(Ee,Ee,Ee),N.computeBoundingBox();const Ce=new Nx({color:n(),metalness:.1,roughness:.55});x=new ti(N,Ce),x.castShadow=!1,x.receiveShadow=!1,u.add(x),v()}catch(I){if(X!==p)return;console.error("STL preview load failed:",I),T(),a.value="Failed to load STL preview. The file may be invalid or unsupported."}finally{X===p&&(o.value=!1)}}function H(){p+=1,window.removeEventListener("resize",P),g&&(window.cancelAnimationFrame(g),g=null),T(),h?.dispose(),d?.dispose(),d?.domElement&&r.value?.contains(d.domElement)&&r.value.removeChild(d.domElement),h=null,d=null,f=null,u=null,l.value=!1}return as(()=>e.darkMode,()=>{i(),s()}),as([()=>e.file,()=>e.fileBuffer,l],([G,,X])=>{X&&C(G)}),as(()=>e.orientation,()=>{if(!(!l.value||!x))try{v()}catch(G){console.error("STL orientation apply failed:",G)}},{deep:!0}),Th(async()=>{await zc(),E(),l.value=!!u,window.addEventListener("resize",P),e.file&&C(e.file)}),ua(()=>{H()}),(G,X)=>(ze(),qe("div",aE,[ie("div",{ref_key:"mountEl",ref:r,class:"h-full min-h-[380px] w-full"},null,512),c.value?o.value?(ze(),qe("div",cE," Loading 3D model... ")):a.value?(ze(),qe("div",uE,ot(a.value),1)):Tt("",!0):(ze(),qe("div",lE," Select an STL file to preview. "))]))}},gE={class:"text-sm text-slate-500 dark:text-slate-400"},_E={class:"text-right text-sm font-medium text-slate-800 dark:text-slate-100"},wt={__name:"StatRow",props:{label:{type:String,required:!0},value:{type:String,default:"—"},compact:{type:Boolean,default:!1}},setup(t){return(e,n)=>(ze(),qe("div",{class:Ot(["flex items-start justify-between gap-3 border-b border-slate-100 last:border-0 dark:border-slate-800",t.compact?"py-2":"py-3"])},[ie("span",gE,ot(t.label),1),ie("span",_E,ot(t.value),1)],2))}},xE={class:"card flex w-full min-w-0 flex-col transition hover:shadow-md"},vE={key:0},SE={class:"mt-5 border-t border-slate-100 pt-4 dark:border-slate-800"},bE={key:1,class:"mt-5 border-t border-slate-100 pt-4 dark:border-slate-800"},yE={__name:"AiRecommendationsCard",props:{data:{type:Object,required:!0}},emits:["copy-settings"],setup(t,{emit:e}){const n=e;async function i(s){try{await navigator.clipboard.writeText(s||""),n("copy-settings")}catch{}}return(s,r)=>(ze(),qe("article",xE,[r[4]||(r[4]=ie("h2",{class:"card-title"},[ie("span",{class:"text-indigo-500"},"✦"),An(" AI Recommendations ")],-1)),t.data.hasUseCaseResolution?(ze(),qe("div",vE,[r[1]||(r[1]=ie("p",{class:"section-label mb-1"}," Use case ",-1)),rt(wt,{label:"Your use case",value:t.data.userUseCase},null,8,["value"]),t.data.showAiComparison?(ze(),zi(wt,{key:0,label:"AI suggested use case",value:t.data.aiUseCase},null,8,["value"])):Tt("",!0),t.data.showAiComparison?(ze(),zi(wt,{key:1,label:"Alignment",value:t.data.useCaseAligned},null,8,["value"])):Tt("",!0),rt(wt,{label:"Final use case",value:t.data.effectiveUseCase},null,8,["value"])])):Tt("",!0),ie("div",{class:Ot(t.data.hasUseCaseResolution?"mt-5 border-t border-slate-100 pt-4 dark:border-slate-800":"")},[r[2]||(r[2]=ie("p",{class:"section-label mb-1"}," Material & orientation ",-1)),rt(wt,{label:"Recommended Filament",value:t.data.recommendedFilament},null,8,["value"]),rt(wt,{label:"Orientation (angles)",value:t.data.orientationAngles},null,8,["value"])],2),ie("div",SE,[r[3]||(r[3]=ie("p",{class:"section-label mb-1"}," Print settings ",-1)),rt(wt,{label:"Support Required",value:t.data.supportRequired},null,8,["value"]),rt(wt,{label:"Support Difficulty",value:t.data.supportDifficulty},null,8,["value"]),rt(wt,{label:"Support Settings",value:t.data.supportSettings},null,8,["value"]),rt(wt,{label:"Layer Height",value:t.data.layerHeight},null,8,["value"]),rt(wt,{label:"Wall Count",value:String(t.data.wallCount)},null,8,["value"]),rt(wt,{label:"Infill Percentage",value:t.data.infillPercentage},null,8,["value"]),rt(wt,{label:"Infill Type",value:t.data.infillType},null,8,["value"]),rt(wt,{label:"Brim Required",value:t.data.brimRequired},null,8,["value"]),rt(wt,{label:"Print Quality",value:t.data.printQuality},null,8,["value"])]),t.data.settingsFullText?(ze(),qe("div",bE,[ie("button",{type:"button",class:"btn-secondary w-full py-2.5 text-sm",onClick:r[0]||(r[0]=o=>i(t.data.settingsFullText))}," Copy settings ")])):Tt("",!0)]))}},ME={class:"card w-full min-w-0 transition hover:shadow-md"},EE={key:0,class:"mb-4 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200"},TE={class:"mt-5 border-t border-slate-100 pt-4 dark:border-slate-800"},_l="—",AE={__name:"PrintStatsCard",props:{data:{type:Object,required:!0}},setup(t){const e=t;function n(){const{printTime:i,printTimeHours:s}=e.data,r=i&&i!==_l,o=s&&s!==_l;return r&&o?`${i} (${s})`:r?i:o?s:_l}return(i,s)=>(ze(),qe("article",ME,[s[2]||(s[2]=ie("h2",{class:"card-title"},[ie("span",{class:"text-violet-500"},"◈"),An(" Print Statistics ")],-1)),t.data.hasStats?Tt("",!0):(ze(),qe("div",EE," Print statistics unavailable — slicing may have partially failed. ")),ie("div",null,[s[0]||(s[0]=ie("p",{class:"section-label mb-1"}," Slicer output ",-1)),rt(wt,{label:"Filament Weight",value:t.data.filamentWeight},null,8,["value"]),rt(wt,{label:"Filament Length",value:t.data.filamentLength},null,8,["value"]),rt(wt,{label:"Print Time",value:n()},null,8,["value"])]),ie("div",TE,[s[1]||(s[1]=ie("p",{class:"section-label mb-1"}," Geometry ",-1)),rt(wt,{label:"Model Volume",value:t.data.modelVolume},null,8,["value"]),rt(wt,{label:"Dimensions (W×H×D)",value:t.data.dimensions},null,8,["value"]),rt(wt,{label:"Watertight",value:t.data.isWatertight},null,8,["value"]),rt(wt,{label:"Overhang Volume %",value:t.data.overhangVolumePercentage},null,8,["value"]),rt(wt,{label:"Overhang Volume",value:t.data.overhangVolume},null,8,["value"])])]))}},wE={class:"card w-full min-w-0 p-5 transition hover:shadow-md"},RE={class:"mt-3 rounded-xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-violet-50 px-4 py-4 dark:border-indigo-900/60 dark:from-indigo-950/50 dark:to-violet-950/50"},CE={class:"mt-1.5 text-3xl font-extrabold tabular-nums tracking-tight text-indigo-700 dark:text-indigo-200"},PE={__name:"CostAnalysisCard",props:{data:{type:Object,required:!0}},setup(t){return(e,n)=>(ze(),qe("article",wE,[n[1]||(n[1]=ie("h2",{class:"card-title mb-2"},[ie("span",{class:"text-emerald-500"},"₹"),An(" Cost Analysis ")],-1)),ie("div",RE,[n[0]||(n[0]=ie("p",{class:"text-sm font-semibold text-indigo-700 dark:text-indigo-300"}," Final Cost (+ GST) ",-1)),ie("p",CE,ot(t.data.finalCost),1)])]))}},Ip=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},DE={class:"card w-full min-w-0 transition hover:shadow-md"},LE={class:"grid grid-cols-3 gap-2"},IE={"aria-hidden":"true"},UE={"aria-hidden":"true"},NE={"aria-hidden":"true"},FE={class:"mt-5 space-y-4"},OE={key:0},BE={class:"mt-1 flex items-start justify-between gap-2"},kE={class:"text-sm font-medium text-slate-800 dark:text-slate-100"},zE=["title"],HE={class:"path-box-text"},VE={key:1},GE={class:"mt-1 flex items-start justify-between gap-2"},WE={class:"text-sm font-medium text-slate-800 dark:text-slate-100"},XE=["title"],qE={class:"path-box-text"},jE={key:0,class:"mt-5 border-t border-slate-100 pt-4 dark:border-slate-800"},$E={class:"space-y-3"},YE={key:0,class:"rounded-lg border border-slate-100 p-2.5 dark:border-slate-700"},KE={class:"mt-0.5 flex items-start justify-between gap-2"},ZE={class:"text-sm font-medium text-slate-800 dark:text-slate-100"},JE=["title"],QE={class:"path-box-text"},eT={key:1,class:"rounded-lg border border-slate-100 p-2.5 dark:border-slate-700"},tT={class:"mt-0.5 flex items-start justify-between gap-2"},nT={class:"text-sm font-medium text-slate-800 dark:text-slate-100"},iT=["title"],sT={class:"path-box-text"},rT={__name:"SlicerInfoCard",props:{data:{type:Object,required:!0}},setup(t){const e=$t(new Set);function n(l){if(!l||l==="—")return null;const c=String(l).split(/[/\\]/);return c[c.length-1]||l}function i(l){return!!(l&&l!=="—")}function s(l){return e.value.has(l)}function r(l){const c=new Set(e.value);c.has(l)?c.delete(l):c.add(l),e.value=c}function o(l,c=!1){return l?"border-emerald-200 bg-emerald-50 dark:border-emerald-800/60 dark:bg-emerald-950/30":c?"border-red-200 bg-red-50 dark:border-red-900/60 dark:bg-red-950/30":"border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/50"}function a(l,c=!1){return l?"text-emerald-700 dark:text-emerald-400":c?"text-red-600 dark:text-red-400":"text-slate-400 dark:text-slate-500"}return(l,c)=>(ze(),qe("article",DE,[c[12]||(c[12]=ie("h2",{class:"card-title"},[ie("span",{class:"text-sky-500"},"⚙"),An(" Slicer Information ")],-1)),ie("div",LE,[ie("div",{class:Ot(["flex min-h-[4.5rem] min-w-0 flex-col rounded-xl border px-3 py-3",o(t.data.gcodeGenerated)])},[c[4]||(c[4]=ie("p",{class:"section-label truncate"}," G-code ",-1)),ie("p",{class:Ot(["mt-auto text-xs font-semibold leading-snug",a(t.data.gcodeGenerated)])},[ie("span",IE,ot(t.data.gcodeGenerated?"✓ ":"— "),1),An(ot(t.data.gcodeGenerated?"Generated":"Not generated"),1)],2)],2),ie("div",{class:Ot(["flex min-h-[4.5rem] min-w-0 flex-col rounded-xl border px-3 py-3",o(t.data.threeMfGenerated)])},[c[5]||(c[5]=ie("p",{class:"section-label truncate"}," 3MF ",-1)),ie("p",{class:Ot(["mt-auto text-xs font-semibold leading-snug",a(t.data.threeMfGenerated)])},[ie("span",UE,ot(t.data.threeMfGenerated?"✓ ":"— "),1),An(ot(t.data.threeMfGenerated?"Generated":"Not generated"),1)],2)],2),ie("div",{class:Ot(["flex min-h-[4.5rem] min-w-0 flex-col rounded-xl border px-3 py-3",o(t.data.slicingSuccess,!t.data.slicingSuccess)])},[c[6]||(c[6]=ie("p",{class:"section-label truncate"}," Slicing ",-1)),ie("p",{class:Ot(["mt-auto text-xs font-semibold leading-snug",a(t.data.slicingSuccess,!t.data.slicingSuccess)])},[ie("span",NE,ot(t.data.slicingSuccess?"✓ ":"✗ "),1),An(ot(t.data.slicingSuccess?"Success":"Failed"),1)],2)],2)]),ie("div",FE,[i(t.data.printerProfile)?(ze(),qe("div",OE,[c[7]||(c[7]=ie("p",{class:"section-label"}," Printer profile ",-1)),ie("div",BE,[ie("p",kE,ot(n(t.data.printerProfile)),1),ie("button",{type:"button",class:"shrink-0 text-xs font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300",onClick:c[0]||(c[0]=u=>r("printer"))},ot(s("printer")?"Hide path":"Show path"),1)]),s("printer")?(ze(),qe("div",{key:0,class:"path-box mt-2",title:t.data.printerProfile},[ie("p",HE,ot(t.data.printerProfile),1)],8,zE)):Tt("",!0)])):Tt("",!0),i(t.data.filamentProfile)?(ze(),qe("div",VE,[c[8]||(c[8]=ie("p",{class:"section-label"}," Filament profile ",-1)),ie("div",GE,[ie("p",WE,ot(n(t.data.filamentProfile)),1),ie("button",{type:"button",class:"shrink-0 text-xs font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300",onClick:c[1]||(c[1]=u=>r("filament"))},ot(s("filament")?"Hide path":"Show path"),1)]),s("filament")?(ze(),qe("div",{key:0,class:"path-box mt-2",title:t.data.filamentProfile},[ie("p",qE,ot(t.data.filamentProfile),1)],8,XE)):Tt("",!0)])):Tt("",!0)]),i(t.data.gcodePath)||i(t.data.threeMfPath)?(ze(),qe("div",jE,[c[11]||(c[11]=ie("p",{class:"section-label mb-3"}," Output files ",-1)),ie("div",$E,[i(t.data.gcodePath)?(ze(),qe("div",YE,[c[9]||(c[9]=ie("p",{class:"text-xs text-slate-500 dark:text-slate-400"}," G-code ",-1)),ie("div",KE,[ie("p",ZE,ot(n(t.data.gcodePath)),1),ie("button",{type:"button",class:"shrink-0 text-xs font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300",onClick:c[2]||(c[2]=u=>r("gcode"))},ot(s("gcode")?"Hide path":"Show path"),1)]),s("gcode")?(ze(),qe("div",{key:0,class:"path-box mt-2",title:t.data.gcodePath},[ie("p",QE,ot(t.data.gcodePath),1)],8,JE)):Tt("",!0)])):Tt("",!0),i(t.data.threeMfPath)?(ze(),qe("div",eT,[c[10]||(c[10]=ie("p",{class:"text-xs text-slate-500 dark:text-slate-400"}," 3MF ",-1)),ie("div",tT,[ie("p",nT,ot(n(t.data.threeMfPath)),1),ie("button",{type:"button",class:"shrink-0 text-xs font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300",onClick:c[3]||(c[3]=u=>r("threeMf"))},ot(s("threeMf")?"Hide path":"Show path"),1)]),s("threeMf")?(ze(),qe("div",{key:0,class:"path-box mt-2",title:t.data.threeMfPath},[ie("p",sT,ot(t.data.threeMfPath),1)],8,iT)):Tt("",!0)])):Tt("",!0)])])):Tt("",!0),c[13]||(c[13]=qc('<div class="mt-5 border-t border-slate-100 pt-4 dark:border-slate-800" data-v-eebd13cb><div class="flex flex-wrap gap-2" data-v-eebd13cb><button type="button" disabled title="Download requires a backend file endpoint (paths are server-side only)" class="min-w-[8.5rem] flex-1 cursor-not-allowed rounded-lg border border-dashed border-slate-300 bg-slate-50 px-3 py-2.5 text-xs font-medium text-slate-500 opacity-70 dark:border-slate-600 dark:bg-slate-800/40 dark:text-slate-400" data-v-eebd13cb> Download G-code </button><button type="button" disabled title="Download requires a backend file endpoint" class="min-w-[8.5rem] flex-1 cursor-not-allowed rounded-lg border border-dashed border-slate-300 bg-slate-50 px-3 py-2.5 text-xs font-medium text-slate-500 opacity-70 dark:border-slate-600 dark:bg-slate-800/40 dark:text-slate-400" data-v-eebd13cb> Download 3MF </button></div><p class="mt-2 text-[11px] leading-relaxed text-slate-400 dark:text-slate-500" data-v-eebd13cb> Downloads require a server file endpoint — paths are server-side only. </p></div>',1))]))}},oT=Ip(rT,[["__scopeId","data-v-eebd13cb"]]),aT={class:"card transition hover:shadow-md"},lT={key:0,class:"rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"},cT={class:"space-y-0"},uT={key:0,class:"section-label ml-1.5 text-amber-700 dark:text-amber-300"},fT={class:"mt-4 flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800/80"},dT={class:"text-sm font-semibold tabular-nums text-slate-900 dark:text-slate-100"},hT={__name:"PipelineTimingsCard",props:{data:{type:Object,required:!0}},setup(t){const e=new Set(["ai_orientation","ai_support","ai_rendering","ai_vision","ai_filament","ai_print_settings"]);function n(i){return e.has(i)}return(i,s)=>(ze(),qe("article",aT,[s[1]||(s[1]=ie("h2",{class:"card-title"},[ie("span",{class:"text-sky-500"},"⏱"),An(" Pipeline execution time ")],-1)),t.data.hasTimings?(ze(),qe(Gt,{key:1},[ie("ul",cT,[(ze(!0),qe(Gt,null,ko(t.data.stages,r=>(ze(),qe("li",{key:r.key,class:Ot(["flex items-start justify-between gap-3",[n(r.key)?"ml-3 border-l-2 border-slate-200 py-2 pl-4 dark:border-slate-700":"py-3",r.isSlowest?"rounded-lg border border-amber-200 bg-amber-50/80 px-3 dark:border-amber-800 dark:bg-amber-950/40":"border-b border-slate-100 last:border-0 dark:border-slate-800"]])},[ie("span",{class:Ot(["text-sm",r.isSlowest?"font-semibold text-amber-900 dark:text-amber-100":n(r.key)?"text-slate-400 dark:text-slate-500":"text-slate-500 dark:text-slate-400"])},[An(ot(r.label)+" ",1),r.isSlowest?(ze(),qe("span",uT," Slowest ")):Tt("",!0)],2),ie("span",{class:Ot(["text-right text-sm font-medium tabular-nums",r.isSlowest?"text-amber-900 dark:text-amber-100":n(r.key)?"text-slate-500 dark:text-slate-400":"text-slate-800 dark:text-slate-100"])},ot(r.display),3)],2))),128))]),ie("div",fT,[s[0]||(s[0]=ie("span",{class:"text-sm font-semibold text-slate-700 dark:text-slate-200"}," Total processing time ",-1)),ie("span",dT,ot(t.data.totalDisplay),1)])],64)):(ze(),qe("p",lT," Timing data unavailable. "))]))}};function Up(t,e){return function(){return t.apply(e,arguments)}}const{toString:pT}=Object.prototype,{getPrototypeOf:va}=Object,{iterator:Sa,toStringTag:Np}=Symbol,ba=(t=>e=>{const n=pT.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),On=t=>(t=t.toLowerCase(),e=>ba(e)===t),ya=t=>e=>typeof e===t,{isArray:Qs}=Array,Ys=ya("undefined");function Fr(t){return t!==null&&!Ys(t)&&t.constructor!==null&&!Ys(t.constructor)&&hn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Fp=On("ArrayBuffer");function mT(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Fp(t.buffer),e}const gT=ya("string"),hn=ya("function"),Op=ya("number"),Or=t=>t!==null&&typeof t=="object",_T=t=>t===!0||t===!1,Lo=t=>{if(ba(t)!=="object")return!1;const e=va(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Np in t)&&!(Sa in t)},xT=t=>{if(!Or(t)||Fr(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},vT=On("Date"),ST=On("File"),bT=t=>!!(t&&typeof t.uri<"u"),yT=t=>t&&typeof t.getParts<"u",MT=On("Blob"),ET=On("FileList"),TT=t=>Or(t)&&hn(t.pipe);function AT(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Md=AT(),Ed=typeof Md.FormData<"u"?Md.FormData:void 0,wT=t=>{if(!t)return!1;if(Ed&&t instanceof Ed)return!0;const e=va(t);if(!e||e===Object.prototype||!hn(t.append))return!1;const n=ba(t);return n==="formdata"||n==="object"&&hn(t.toString)&&t.toString()==="[object FormData]"},RT=On("URLSearchParams"),[CT,PT,DT,LT]=["ReadableStream","Request","Response","Headers"].map(On),IT=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Br(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,s;if(typeof t!="object"&&(t=[t]),Qs(t))for(i=0,s=t.length;i<s;i++)e.call(null,t[i],i,t);else{if(Fr(t))return;const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,t[a],a,t)}}function Bp(t,e){if(Fr(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,s;for(;i-- >0;)if(s=n[i],e===s.toLowerCase())return s;return null}const ss=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,kp=t=>!Ys(t)&&t!==ss;function Tc(...t){const{caseless:e,skipUndefined:n}=kp(this)&&this||{},i={},s=(r,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const a=e&&Bp(i,o)||o,l=Ac(i,a)?i[a]:void 0;Lo(l)&&Lo(r)?i[a]=Tc(l,r):Lo(r)?i[a]=Tc({},r):Qs(r)?i[a]=r.slice():(!n||!Ys(r))&&(i[a]=r)};for(let r=0,o=t.length;r<o;r++)t[r]&&Br(t[r],s);return i}const UT=(t,e,n,{allOwnKeys:i}={})=>(Br(e,(s,r)=>{n&&hn(s)?Object.defineProperty(t,r,{__proto__:null,value:Up(s,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,r,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),NT=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),FT=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},OT=(t,e,n,i)=>{let s,r,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),r=s.length;r-- >0;)o=s[r],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&va(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},BT=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},kT=t=>{if(!t)return null;if(Qs(t))return t;let e=t.length;if(!Op(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},zT=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&va(Uint8Array)),HT=(t,e)=>{const i=(t&&t[Sa]).call(t);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(t,r[0],r[1])}},VT=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},GT=On("HTMLFormElement"),WT=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,s){return i.toUpperCase()+s}),Ac=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),XT=On("RegExp"),zp=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Br(n,(s,r)=>{let o;(o=e(s,r,t))!==!1&&(i[r]=o||s)}),Object.defineProperties(t,i)},qT=t=>{zp(t,(e,n)=>{if(hn(t)&&["arguments","caller","callee"].includes(n))return!1;const i=t[n];if(hn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},jT=(t,e)=>{const n={},i=s=>{s.forEach(r=>{n[r]=!0})};return Qs(t)?i(t):i(String(t).split(e)),n},$T=()=>{},YT=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function KT(t){return!!(t&&hn(t.append)&&t[Np]==="FormData"&&t[Sa])}const ZT=t=>{const e=new WeakSet,n=i=>{if(Or(i)){if(e.has(i))return;if(Fr(i))return i;if(!("toJSON"in i)){e.add(i);const s=Qs(i)?[]:{};return Br(i,(r,o)=>{const a=n(r);!Ys(a)&&(s[o]=a)}),e.delete(i),s}}return i};return n(t)},JT=On("AsyncFunction"),QT=t=>t&&(Or(t)||hn(t))&&hn(t.then)&&hn(t.catch),Hp=((t,e)=>t?setImmediate:e?((n,i)=>(ss.addEventListener("message",({source:s,data:r})=>{s===ss&&r===n&&i.length&&i.shift()()},!1),s=>{i.push(s),ss.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",hn(ss.postMessage)),eA=typeof queueMicrotask<"u"?queueMicrotask.bind(ss):typeof process<"u"&&process.nextTick||Hp,tA=t=>t!=null&&hn(t[Sa]),V={isArray:Qs,isArrayBuffer:Fp,isBuffer:Fr,isFormData:wT,isArrayBufferView:mT,isString:gT,isNumber:Op,isBoolean:_T,isObject:Or,isPlainObject:Lo,isEmptyObject:xT,isReadableStream:CT,isRequest:PT,isResponse:DT,isHeaders:LT,isUndefined:Ys,isDate:vT,isFile:ST,isReactNativeBlob:bT,isReactNative:yT,isBlob:MT,isRegExp:XT,isFunction:hn,isStream:TT,isURLSearchParams:RT,isTypedArray:zT,isFileList:ET,forEach:Br,merge:Tc,extend:UT,trim:IT,stripBOM:NT,inherits:FT,toFlatObject:OT,kindOf:ba,kindOfTest:On,endsWith:BT,toArray:kT,forEachEntry:HT,matchAll:VT,isHTMLForm:GT,hasOwnProperty:Ac,hasOwnProp:Ac,reduceDescriptors:zp,freezeMethods:qT,toObjectSet:jT,toCamelCase:WT,noop:$T,toFiniteNumber:YT,findKey:Bp,global:ss,isContextDefined:kp,isSpecCompliantForm:KT,toJSONObject:ZT,isAsyncFn:JT,isThenable:QT,setImmediate:Hp,asap:eA,isIterable:tA},nA=V.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),iA=t=>{const e={};let n,i,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!n||e[n]&&nA[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e};function sA(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const rA=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),oA=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function fu(t,e){return V.isArray(t)?t.map(n=>fu(n,e)):sA(String(t).replace(e,""))}const aA=t=>fu(t,rA),lA=t=>fu(t,oA);function Vp(t){const e=Object.create(null);return V.forEach(t.toJSON(),(n,i)=>{e[i]=lA(n)}),e}const Td=Symbol("internals");function cr(t){return t&&String(t).trim().toLowerCase()}function Io(t){return t===!1||t==null?t:V.isArray(t)?t.map(Io):aA(String(t))}function cA(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const uA=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function xl(t,e,n,i,s){if(V.isFunction(i))return i.call(this,e,n);if(s&&(e=n),!!V.isString(e)){if(V.isString(i))return e.indexOf(i)!==-1;if(V.isRegExp(i))return i.test(e)}}function fA(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function dA(t,e){const n=V.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{__proto__:null,value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}let cn=class{constructor(e){e&&this.set(e)}set(e,n,i){const s=this;function r(a,l,c){const u=cr(l);if(!u)throw new Error("header name must be a non-empty string");const f=V.findKey(s,u);(!f||s[f]===void 0||c===!0||c===void 0&&s[f]!==!1)&&(s[f||l]=Io(a))}const o=(a,l)=>V.forEach(a,(c,u)=>r(c,u,l));if(V.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(V.isString(e)&&(e=e.trim())&&!uA(e))o(iA(e),n);else if(V.isObject(e)&&V.isIterable(e)){let a={},l,c;for(const u of e){if(!V.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[c=u[0]]=(l=a[c])?V.isArray(l)?[...l,u[1]]:[l,u[1]]:u[1]}o(a,n)}else e!=null&&r(n,e,i);return this}get(e,n){if(e=cr(e),e){const i=V.findKey(this,e);if(i){const s=this[i];if(!n)return s;if(n===!0)return cA(s);if(V.isFunction(n))return n.call(this,s,i);if(V.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=cr(e),e){const i=V.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||xl(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let s=!1;function r(o){if(o=cr(o),o){const a=V.findKey(i,o);a&&(!n||xl(i,i[a],a,n))&&(delete i[a],s=!0)}}return V.isArray(e)?e.forEach(r):r(e),s}clear(e){const n=Object.keys(this);let i=n.length,s=!1;for(;i--;){const r=n[i];(!e||xl(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const n=this,i={};return V.forEach(this,(s,r)=>{const o=V.findKey(i,r);if(o){n[o]=Io(s),delete n[r];return}const a=e?fA(r):String(r).trim();a!==r&&delete n[r],n[a]=Io(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return V.forEach(this,(i,s)=>{i!=null&&i!==!1&&(n[s]=e&&V.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[Td]=this[Td]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=cr(o);i[a]||(dA(s,o),i[a]=!0)}return V.isArray(e)?e.forEach(r):r(e),this}};cn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);V.reduceDescriptors(cn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});V.freezeMethods(cn);const hA="[REDACTED ****]";function pA(t){if(V.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(V.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function mA(t,e){const n=new Set(e.map(r=>String(r).toLowerCase())),i=[],s=r=>{if(r===null||typeof r!="object"||V.isBuffer(r))return r;if(i.indexOf(r)!==-1)return;r instanceof cn&&(r=r.toJSON()),i.push(r);let o;if(V.isArray(r))o=[],r.forEach((a,l)=>{const c=s(a);V.isUndefined(c)||(o[l]=c)});else{if(!V.isPlainObject(r)&&pA(r))return i.pop(),r;o=Object.create(null);for(const[a,l]of Object.entries(r)){const c=n.has(a.toLowerCase())?hA:s(l);V.isUndefined(c)||(o[a]=c)}}return i.pop(),o};return s(t)}let Ue=class Gp extends Error{static from(e,n,i,s,r,o){const a=new Gp(e.message,n||e.code,i,s,r);return a.cause=e,a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,s,r){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),s&&(this.request=s),r&&(this.response=r,this.status=r.status)}toJSON(){const e=this.config,n=e&&V.hasOwnProp(e,"redact")?e.redact:void 0,i=V.isArray(n)&&n.length>0?mA(e,n):V.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};Ue.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Ue.ERR_BAD_OPTION="ERR_BAD_OPTION";Ue.ECONNABORTED="ECONNABORTED";Ue.ETIMEDOUT="ETIMEDOUT";Ue.ECONNREFUSED="ECONNREFUSED";Ue.ERR_NETWORK="ERR_NETWORK";Ue.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Ue.ERR_DEPRECATED="ERR_DEPRECATED";Ue.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Ue.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Ue.ERR_CANCELED="ERR_CANCELED";Ue.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Ue.ERR_INVALID_URL="ERR_INVALID_URL";Ue.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const gA=null;function wc(t){return V.isPlainObject(t)||V.isArray(t)}function Wp(t){return V.endsWith(t,"[]")?t.slice(0,-2):t}function vl(t,e,n){return t?t.concat(e).map(function(s,r){return s=Wp(s),!n&&r?"["+s+"]":s}).join(n?".":""):e}function _A(t){return V.isArray(t)&&!t.some(wc)}const xA=V.toFlatObject(V,{},null,function(e){return/^is[A-Z]/.test(e)});function Ma(t,e,n){if(!V.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=V.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(p,m){return!V.isUndefined(m[p])});const i=n.metaTokens,s=n.visitor||f,r=n.dots,o=n.indexes,a=n.Blob||typeof Blob<"u"&&Blob,l=n.maxDepth===void 0?100:n.maxDepth,c=a&&V.isSpecCompliantForm(e);if(!V.isFunction(s))throw new TypeError("visitor must be a function");function u(x){if(x===null)return"";if(V.isDate(x))return x.toISOString();if(V.isBoolean(x))return x.toString();if(!c&&V.isBlob(x))throw new Ue("Blob is not supported. Use a Buffer instead.");return V.isArrayBuffer(x)||V.isTypedArray(x)?c&&typeof Blob=="function"?new Blob([x]):Buffer.from(x):x}function f(x,p,m){let S=x;if(V.isReactNative(e)&&V.isReactNativeBlob(x))return e.append(vl(m,p,r),u(x)),!1;if(x&&!m&&typeof x=="object"){if(V.endsWith(p,"{}"))p=i?p:p.slice(0,-2),x=JSON.stringify(x);else if(V.isArray(x)&&_A(x)||(V.isFileList(x)||V.endsWith(p,"[]"))&&(S=V.toArray(x)))return p=Wp(p),S.forEach(function(M,P){!(V.isUndefined(M)||M===null)&&e.append(o===!0?vl([p],P,r):o===null?p:p+"[]",u(M))}),!1}return wc(x)?!0:(e.append(vl(m,p,r),u(x)),!1)}const d=[],h=Object.assign(xA,{defaultVisitor:f,convertValue:u,isVisitable:wc});function g(x,p,m=0){if(!V.isUndefined(x)){if(m>l)throw new Ue("Object is too deeply nested ("+m+" levels). Max depth: "+l,Ue.ERR_FORM_DATA_DEPTH_EXCEEDED);if(d.indexOf(x)!==-1)throw Error("Circular reference detected in "+p.join("."));d.push(x),V.forEach(x,function(E,M){(!(V.isUndefined(E)||E===null)&&s.call(e,E,V.isString(M)?M.trim():M,p,h))===!0&&g(E,p?p.concat(M):[M],m+1)}),d.pop()}}if(!V.isObject(t))throw new TypeError("data must be an object");return g(t),e}function Ad(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(i){return e[i]})}function du(t,e){this._pairs=[],t&&Ma(t,this,e)}const Xp=du.prototype;Xp.append=function(e,n){this._pairs.push([e,n])};Xp.toString=function(e){const n=e?function(i){return e.call(this,i,Ad)}:Ad;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function vA(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function qp(t,e,n){if(!e)return t;const i=n&&n.encode||vA,s=V.isFunction(n)?{serialize:n}:n,r=s&&s.serialize;let o;if(r?o=r(e,s):o=V.isURLSearchParams(e)?e.toString():new du(e,s).toString(i),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class wd{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){V.forEach(this.handlers,function(i){i!==null&&e(i)})}}const hu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},SA=typeof URLSearchParams<"u"?URLSearchParams:du,bA=typeof FormData<"u"?FormData:null,yA=typeof Blob<"u"?Blob:null,MA={isBrowser:!0,classes:{URLSearchParams:SA,FormData:bA,Blob:yA},protocols:["http","https","file","blob","url","data"]},pu=typeof window<"u"&&typeof document<"u",Rc=typeof navigator=="object"&&navigator||void 0,EA=pu&&(!Rc||["ReactNative","NativeScript","NS"].indexOf(Rc.product)<0),TA=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",AA=pu&&window.location.href||"http://localhost",wA=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:pu,hasStandardBrowserEnv:EA,hasStandardBrowserWebWorkerEnv:TA,navigator:Rc,origin:AA},Symbol.toStringTag,{value:"Module"})),Kt={...wA,...MA};function RA(t,e){return Ma(t,new Kt.classes.URLSearchParams,{visitor:function(n,i,s,r){return Kt.isNode&&V.isBuffer(n)?(this.append(i,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...e})}function CA(t){return V.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function PA(t){const e={},n=Object.keys(t);let i;const s=n.length;let r;for(i=0;i<s;i++)r=n[i],e[r]=t[r];return e}function jp(t){function e(n,i,s,r){let o=n[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=n.length;return o=!o&&V.isArray(s)?s.length:o,l?(V.hasOwnProp(s,o)?s[o]=V.isArray(s[o])?s[o].concat(i):[s[o],i]:s[o]=i,!a):((!V.hasOwnProp(s,o)||!V.isObject(s[o]))&&(s[o]=[]),e(n,i,s[o],r)&&V.isArray(s[o])&&(s[o]=PA(s[o])),!a)}if(V.isFormData(t)&&V.isFunction(t.entries)){const n={};return V.forEachEntry(t,(i,s)=>{e(CA(i),s,n,0)}),n}return null}const Ps=(t,e)=>t!=null&&V.hasOwnProp(t,e)?t[e]:void 0;function DA(t,e,n){if(V.isString(t))try{return(e||JSON.parse)(t),V.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const kr={transitional:hu,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",s=i.indexOf("application/json")>-1,r=V.isObject(e);if(r&&V.isHTMLForm(e)&&(e=new FormData(e)),V.isFormData(e))return s?JSON.stringify(jp(e)):e;if(V.isArrayBuffer(e)||V.isBuffer(e)||V.isStream(e)||V.isFile(e)||V.isBlob(e)||V.isReadableStream(e))return e;if(V.isArrayBufferView(e))return e.buffer;if(V.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){const l=Ps(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return RA(e,l).toString();if((a=V.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=Ps(this,"env"),u=c&&c.FormData;return Ma(a?{"files[]":e}:e,u&&new u,l)}}return r||s?(n.setContentType("application/json",!1),DA(e)):e}],transformResponse:[function(e){const n=Ps(this,"transitional")||kr.transitional,i=n&&n.forcedJSONParsing,s=Ps(this,"responseType"),r=s==="json";if(V.isResponse(e)||V.isReadableStream(e))return e;if(e&&V.isString(e)&&(i&&!s||r)){const a=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e,Ps(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?Ue.from(l,Ue.ERR_BAD_RESPONSE,this,null,Ps(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Kt.classes.FormData,Blob:Kt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};V.forEach(["delete","get","head","post","put","patch","query"],t=>{kr.headers[t]={}});function Sl(t,e){const n=this||kr,i=e||n,s=cn.from(i.headers);let r=i.data;return V.forEach(t,function(a){r=a.call(n,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function $p(t){return!!(t&&t.__CANCEL__)}let zr=class extends Ue{constructor(e,n,i){super(e??"canceled",Ue.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function Yp(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Ue("Request failed with status code "+n.status,n.status>=400&&n.status<500?Ue.ERR_BAD_REQUEST:Ue.ERR_BAD_RESPONSE,n.config,n.request,n))}function LA(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1]||""}function IA(t,e){t=t||10;const n=new Array(t),i=new Array(t);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[r];o||(o=c),n[s]=l,i[s]=c;let f=r,d=0;for(;f!==s;)d+=n[f++],f=f%t;if(s=(s+1)%t,s===r&&(r=(r+1)%t),c-o<e)return;const h=u&&c-u;return h?Math.round(d*1e3/h):void 0}}function UA(t,e){let n=0,i=1e3/e,s,r;const o=(c,u=Date.now())=>{n=u,s=null,r&&(clearTimeout(r),r=null),t(...c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(s=c,r||(r=setTimeout(()=>{r=null,o(s)},i-f)))},()=>s&&o(s)]}const Zo=(t,e,n=3)=>{let i=0;const s=IA(50,250);return UA(r=>{if(!r||typeof r.loaded!="number")return;const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=a!=null?Math.min(o,a):o,c=Math.max(0,l-i),u=s(c);i=Math.max(i,l);const f={loaded:l,total:a,progress:a?l/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a?(a-l)/u:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},Rd=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Cd=t=>(...e)=>V.asap(()=>t(...e)),NA=Kt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Kt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Kt.origin),Kt.navigator&&/(msie|trident)/i.test(Kt.navigator.userAgent)):()=>!0,FA=Kt.hasStandardBrowserEnv?{write(t,e,n,i,s,r,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];V.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),V.isString(i)&&a.push(`path=${i}`),V.isString(s)&&a.push(`domain=${s}`),r===!0&&a.push("secure"),V.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let n=0;n<e.length;n++){const i=e[n].replace(/^\s+/,""),s=i.indexOf("=");if(s!==-1&&i.slice(0,s)===t)return decodeURIComponent(i.slice(s+1))}return null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function OA(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function BA(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Kp(t,e,n){let i=!OA(e);return t&&(i||n===!1)?BA(t,e):e}const Pd=t=>t instanceof cn?{...t}:t;function fs(t,e){e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(c,u,f,d){return V.isPlainObject(c)&&V.isPlainObject(u)?V.merge.call({caseless:d},c,u):V.isPlainObject(u)?V.merge({},u):V.isArray(u)?u.slice():u}function s(c,u,f,d){if(V.isUndefined(u)){if(!V.isUndefined(c))return i(void 0,c,f,d)}else return i(c,u,f,d)}function r(c,u){if(!V.isUndefined(u))return i(void 0,u)}function o(c,u){if(V.isUndefined(u)){if(!V.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,f){if(V.hasOwnProp(e,f))return i(c,u);if(V.hasOwnProp(t,f))return i(void 0,c)}const l={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:a,headers:(c,u,f)=>s(Pd(c),Pd(u),f,!0)};return V.forEach(Object.keys({...t,...e}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const f=V.hasOwnProp(l,u)?l[u]:s,d=V.hasOwnProp(t,u)?t[u]:void 0,h=V.hasOwnProp(e,u)?e[u]:void 0,g=f(d,h,u);V.isUndefined(g)&&f!==a||(n[u]=g)}),n}const kA=["content-type","content-length"];function zA(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e).forEach(([i,s])=>{kA.includes(i.toLowerCase())&&t.set(i,s)})}const HA=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),Zp=t=>{const e=fs({},t),n=d=>V.hasOwnProp(e,d)?e[d]:void 0,i=n("data");let s=n("withXSRFToken");const r=n("xsrfHeaderName"),o=n("xsrfCookieName");let a=n("headers");const l=n("auth"),c=n("baseURL"),u=n("allowAbsoluteUrls"),f=n("url");if(e.headers=a=cn.from(a),e.url=qp(Kp(c,f,u),t.params,t.paramsSerializer),l&&a.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?HA(l.password):""))),V.isFormData(i)&&(Kt.hasStandardBrowserEnv||Kt.hasStandardBrowserWebWorkerEnv?a.setContentType(void 0):V.isFunction(i.getHeaders)&&zA(a,i.getHeaders(),n("formDataHeaderPolicy"))),Kt.hasStandardBrowserEnv&&(V.isFunction(s)&&(s=s(e)),s===!0||s==null&&NA(e.url))){const h=r&&o&&FA.read(o);h&&a.set(r,h)}return e},VA=typeof XMLHttpRequest<"u",GA=VA&&function(t){return new Promise(function(n,i){const s=Zp(t);let r=s.data;const o=cn.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=s,u,f,d,h,g;function x(){h&&h(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let p=new XMLHttpRequest;p.open(s.method.toUpperCase(),s.url,!0),p.timeout=s.timeout;function m(){if(!p)return;const E=cn.from("getAllResponseHeaders"in p&&p.getAllResponseHeaders()),P={data:!a||a==="text"||a==="json"?p.responseText:p.response,status:p.status,statusText:p.statusText,headers:E,config:t,request:p};Yp(function(D){n(D),x()},function(D){i(D),x()},P),p=null}"onloadend"in p?p.onloadend=m:p.onreadystatechange=function(){!p||p.readyState!==4||p.status===0&&!(p.responseURL&&p.responseURL.startsWith("file:"))||setTimeout(m)},p.onabort=function(){p&&(i(new Ue("Request aborted",Ue.ECONNABORTED,t,p)),x(),p=null)},p.onerror=function(M){const P=M&&M.message?M.message:"Network Error",T=new Ue(P,Ue.ERR_NETWORK,t,p);T.event=M||null,i(T),x(),p=null},p.ontimeout=function(){let M=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const P=s.transitional||hu;s.timeoutErrorMessage&&(M=s.timeoutErrorMessage),i(new Ue(M,P.clarifyTimeoutError?Ue.ETIMEDOUT:Ue.ECONNABORTED,t,p)),x(),p=null},r===void 0&&o.setContentType(null),"setRequestHeader"in p&&V.forEach(Vp(o),function(M,P){p.setRequestHeader(P,M)}),V.isUndefined(s.withCredentials)||(p.withCredentials=!!s.withCredentials),a&&a!=="json"&&(p.responseType=s.responseType),c&&([d,g]=Zo(c,!0),p.addEventListener("progress",d)),l&&p.upload&&([f,h]=Zo(l),p.upload.addEventListener("progress",f),p.upload.addEventListener("loadend",h)),(s.cancelToken||s.signal)&&(u=E=>{p&&(i(!E||E.type?new zr(null,t,p):E),p.abort(),x(),p=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const S=LA(s.url);if(S&&!Kt.protocols.includes(S)){i(new Ue("Unsupported protocol "+S+":",Ue.ERR_BAD_REQUEST,t));return}p.send(r||null)})},WA=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let i=!1;const s=function(l){if(!i){i=!0,o();const c=l instanceof Error?l:this.reason;n.abort(c instanceof Ue?c:new zr(c instanceof Error?c.message:c))}};let r=e&&setTimeout(()=>{r=null,s(new Ue(`timeout of ${e}ms exceeded`,Ue.ETIMEDOUT))},e);const o=()=>{t&&(r&&clearTimeout(r),r=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),t=null)};t.forEach(l=>l.addEventListener("abort",s));const{signal:a}=n;return a.unsubscribe=()=>V.asap(o),a},XA=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,s;for(;i<n;)s=i+e,yield t.slice(i,s),i=s},qA=async function*(t,e){for await(const n of jA(t))yield*XA(n,e)},jA=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},Dd=(t,e,n,i)=>{const s=qA(t,e);let r=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await s.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let d=r+=f;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),s.return()}},{highWaterMark:2})};function $A(t){if(!t||typeof t!="string"||!t.startsWith("data:"))return 0;const e=t.indexOf(",");if(e<0)return 0;const n=t.slice(5,e),i=t.slice(e+1);if(/;base64/i.test(n)){let o=i.length;const a=i.length;for(let h=0;h<a;h++)if(i.charCodeAt(h)===37&&h+2<a){const g=i.charCodeAt(h+1),x=i.charCodeAt(h+2);(g>=48&&g<=57||g>=65&&g<=70||g>=97&&g<=102)&&(x>=48&&x<=57||x>=65&&x<=70||x>=97&&x<=102)&&(o-=2,h+=2)}let l=0,c=a-1;const u=h=>h>=2&&i.charCodeAt(h-2)===37&&i.charCodeAt(h-1)===51&&(i.charCodeAt(h)===68||i.charCodeAt(h)===100);c>=0&&(i.charCodeAt(c)===61?(l++,c--):u(c)&&(l++,c-=3)),l===1&&c>=0&&(i.charCodeAt(c)===61||u(c))&&l++;const d=Math.floor(o/4)*3-(l||0);return d>0?d:0}if(typeof Buffer<"u"&&typeof Buffer.byteLength=="function")return Buffer.byteLength(i,"utf8");let r=0;for(let o=0,a=i.length;o<a;o++){const l=i.charCodeAt(o);if(l<128)r+=1;else if(l<2048)r+=2;else if(l>=55296&&l<=56319&&o+1<a){const c=i.charCodeAt(o+1);c>=56320&&c<=57343?(r+=4,o++):r+=3}else r+=3}return r}const mu="1.16.1",Ld=64*1024,{isFunction:vo}=V,Id=(t,...e)=>{try{return!!t(...e)}catch{return!1}},YA=t=>{const e=V.global!==void 0&&V.global!==null?V.global:globalThis,{ReadableStream:n,TextEncoder:i}=e;t=V.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},t);const{fetch:s,Request:r,Response:o}=t,a=s?vo(s):typeof fetch=="function",l=vo(r),c=vo(o);if(!a)return!1;const u=a&&vo(n),f=a&&(typeof i=="function"?(m=>S=>m.encode(S))(new i):async m=>new Uint8Array(await new r(m).arrayBuffer())),d=l&&u&&Id(()=>{let m=!1;const S=new r(Kt.origin,{body:new n,method:"POST",get duplex(){return m=!0,"half"}}),E=S.headers.has("Content-Type");return S.body!=null&&S.body.cancel(),m&&!E}),h=c&&u&&Id(()=>V.isReadableStream(new o("").body)),g={stream:h&&(m=>m.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(m=>{!g[m]&&(g[m]=(S,E)=>{let M=S&&S[m];if(M)return M.call(S);throw new Ue(`Response type '${m}' is not supported`,Ue.ERR_NOT_SUPPORT,E)})});const x=async m=>{if(m==null)return 0;if(V.isBlob(m))return m.size;if(V.isSpecCompliantForm(m))return(await new r(Kt.origin,{method:"POST",body:m}).arrayBuffer()).byteLength;if(V.isArrayBufferView(m)||V.isArrayBuffer(m))return m.byteLength;if(V.isURLSearchParams(m)&&(m=m+""),V.isString(m))return(await f(m)).byteLength},p=async(m,S)=>{const E=V.toFiniteNumber(m.getContentLength());return E??x(S)};return async m=>{let{url:S,method:E,data:M,signal:P,cancelToken:T,timeout:D,onDownloadProgress:v,onUploadProgress:w,responseType:U,headers:C,withCredentials:H="same-origin",fetchOptions:G,maxContentLength:X,maxBodyLength:I}=Zp(m);const B=V.isNumber(X)&&X>-1,N=V.isNumber(I)&&I>-1;let Y=s||fetch;U=U?(U+"").toLowerCase():"text";let ce=WA([P,T&&T.toAbortSignal()],D),de=null;const Ee=ce&&ce.unsubscribe&&(()=>{ce.unsubscribe()});let Ce;try{if(B&&typeof S=="string"&&S.startsWith("data:")&&$A(S)>X)throw new Ue("maxContentLength size of "+X+" exceeded",Ue.ERR_BAD_RESPONSE,m,de);if(N&&E!=="get"&&E!=="head"){const le=await p(C,M);if(typeof le=="number"&&isFinite(le)&&le>I)throw new Ue("Request body larger than maxBodyLength limit",Ue.ERR_BAD_REQUEST,m,de)}if(w&&d&&E!=="get"&&E!=="head"&&(Ce=await p(C,M))!==0){let le=new r(S,{method:"POST",body:M,duplex:"half"}),Fe;if(V.isFormData(M)&&(Fe=le.headers.get("content-type"))&&C.setContentType(Fe),le.body){const[Ve,Ge]=Rd(Ce,Zo(Cd(w)));M=Dd(le.body,Ld,Ve,Ge)}}V.isString(H)||(H=H?"include":"omit");const We=l&&"credentials"in r.prototype;if(V.isFormData(M)){const le=C.getContentType();le&&/^multipart\/form-data/i.test(le)&&!/boundary=/i.test(le)&&C.delete("content-type")}C.set("User-Agent","axios/"+mu,!1);const it={...G,signal:ce,method:E.toUpperCase(),headers:Vp(C.normalize()),body:M,duplex:"half",credentials:We?H:void 0};de=l&&new r(S,it);let He=await(l?Y(de,G):Y(S,it));if(B){const le=V.toFiniteNumber(He.headers.get("content-length"));if(le!=null&&le>X)throw new Ue("maxContentLength size of "+X+" exceeded",Ue.ERR_BAD_RESPONSE,m,de)}const te=h&&(U==="stream"||U==="response");if(h&&He.body&&(v||B||te&&Ee)){const le={};["status","statusText","headers"].forEach(W=>{le[W]=He[W]});const Fe=V.toFiniteNumber(He.headers.get("content-length")),[Ve,Ge]=v&&Rd(Fe,Zo(Cd(v),!0))||[];let R=0;const L=W=>{if(B&&(R=W,R>X))throw new Ue("maxContentLength size of "+X+" exceeded",Ue.ERR_BAD_RESPONSE,m,de);Ve&&Ve(W)};He=new o(Dd(He.body,Ld,L,()=>{Ge&&Ge(),Ee&&Ee()}),le)}U=U||"text";let xe=await g[V.findKey(g,U)||"text"](He,m);if(B&&!h&&!te){let le;if(xe!=null&&(typeof xe.byteLength=="number"?le=xe.byteLength:typeof xe.size=="number"?le=xe.size:typeof xe=="string"&&(le=typeof i=="function"?new i().encode(xe).byteLength:xe.length)),typeof le=="number"&&le>X)throw new Ue("maxContentLength size of "+X+" exceeded",Ue.ERR_BAD_RESPONSE,m,de)}return!te&&Ee&&Ee(),await new Promise((le,Fe)=>{Yp(le,Fe,{data:xe,headers:cn.from(He.headers),status:He.status,statusText:He.statusText,config:m,request:de})})}catch(We){if(Ee&&Ee(),ce&&ce.aborted&&ce.reason instanceof Ue){const it=ce.reason;throw it.config=m,de&&(it.request=de),We!==it&&(it.cause=We),it}throw We&&We.name==="TypeError"&&/Load failed|fetch/i.test(We.message)?Object.assign(new Ue("Network Error",Ue.ERR_NETWORK,m,de,We&&We.response),{cause:We.cause||We}):Ue.from(We,We&&We.code,m,de,We&&We.response)}}},KA=new Map,Jp=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:s}=e,r=[i,s,n];let o=r.length,a=o,l,c,u=KA;for(;a--;)l=r[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:YA(e)),u=c;return c};Jp();const gu={http:gA,xhr:GA,fetch:{get:Jp}};V.forEach(gu,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const Ud=t=>`- ${t}`,ZA=t=>V.isFunction(t)||t===null||t===!1;function JA(t,e){t=V.isArray(t)?t:[t];const{length:n}=t;let i,s;const r={};for(let o=0;o<n;o++){i=t[o];let a;if(s=i,!ZA(i)&&(s=gu[(a=String(i)).toLowerCase()],s===void 0))throw new Ue(`Unknown adapter '${a}'`);if(s&&(V.isFunction(s)||(s=s.get(e))))break;r[a||"#"+o]=s}if(!s){const o=Object.entries(r).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(Ud).join(`
`):" "+Ud(o[0]):"as no adapter specified";throw new Ue("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return s}const Qp={getAdapter:JA,adapters:gu};function bl(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new zr(null,t)}function Nd(t){return bl(t),t.headers=cn.from(t.headers),t.data=Sl.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Qp.getAdapter(t.adapter||kr.adapter,t)(t).then(function(i){bl(t),t.response=i;try{i.data=Sl.call(t,t.transformResponse,i)}finally{delete t.response}return i.headers=cn.from(i.headers),i},function(i){if(!$p(i)&&(bl(t),i&&i.response)){t.response=i.response;try{i.response.data=Sl.call(t,t.transformResponse,i.response)}finally{delete t.response}i.response.headers=cn.from(i.response.headers)}return Promise.reject(i)})}const Ea={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Ea[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Fd={};Ea.transitional=function(e,n,i){function s(r,o){return"[Axios v"+mu+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new Ue(s(o," has been removed"+(n?" in "+n:"")),Ue.ERR_DEPRECATED);return n&&!Fd[o]&&(Fd[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};Ea.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function QA(t,e,n){if(typeof t!="object")throw new Ue("options must be an object",Ue.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const r=i[s],o=Object.prototype.hasOwnProperty.call(e,r)?e[r]:void 0;if(o){const a=t[r],l=a===void 0||o(a,r,t);if(l!==!0)throw new Ue("option "+r+" must be "+l,Ue.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ue("Unknown option "+r,Ue.ERR_BAD_OPTION)}}const Uo={assertOptions:QA,validators:Ea},En=Uo.validators;let ls=class{constructor(e){this.defaults=e||{},this.interceptors={request:new wd,response:new wd}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=(()=>{if(!s.stack)return"";const o=s.stack.indexOf(`
`);return o===-1?"":s.stack.slice(o+1)})();try{if(!i.stack)i.stack=r;else if(r){const o=r.indexOf(`
`),a=o===-1?-1:r.indexOf(`
`,o+1),l=a===-1?"":r.slice(a+1);String(i.stack).endsWith(l)||(i.stack+=`
`+r)}}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=fs(this.defaults,n);const{transitional:i,paramsSerializer:s,headers:r}=n;i!==void 0&&Uo.assertOptions(i,{silentJSONParsing:En.transitional(En.boolean),forcedJSONParsing:En.transitional(En.boolean),clarifyTimeoutError:En.transitional(En.boolean),legacyInterceptorReqResOrdering:En.transitional(En.boolean)},!1),s!=null&&(V.isFunction(s)?n.paramsSerializer={serialize:s}:Uo.assertOptions(s,{encode:En.function,serialize:En.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Uo.assertOptions(n,{baseUrl:En.spelling("baseURL"),withXsrfToken:En.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=r&&V.merge(r.common,r[n.method]);r&&V.forEach(["delete","get","head","post","put","patch","query","common"],g=>{delete r[g]}),n.headers=cn.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(x){if(typeof x.runWhen=="function"&&x.runWhen(n)===!1)return;l=l&&x.synchronous;const p=n.transitional||hu;p&&p.legacyInterceptorReqResOrdering?a.unshift(x.fulfilled,x.rejected):a.push(x.fulfilled,x.rejected)});const c=[];this.interceptors.response.forEach(function(x){c.push(x.fulfilled,x.rejected)});let u,f=0,d;if(!l){const g=[Nd.bind(this),void 0];for(g.unshift(...a),g.push(...c),d=g.length,u=Promise.resolve(n);f<d;)u=u.then(g[f++],g[f++]);return u}d=a.length;let h=n;for(;f<d;){const g=a[f++],x=a[f++];try{h=g(h)}catch(p){x.call(this,p);break}}try{u=Nd.call(this,h)}catch(g){return Promise.reject(g)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=fs(this.defaults,e);const n=Kp(e.baseURL,e.url,e.allowAbsoluteUrls);return qp(n,e.params,e.paramsSerializer)}};V.forEach(["delete","get","head","options"],function(e){ls.prototype[e]=function(n,i){return this.request(fs(i||{},{method:e,url:n,data:(i||{}).data}))}});V.forEach(["post","put","patch","query"],function(e){function n(i){return function(r,o,a){return this.request(fs(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}ls.prototype[e]=n(),e!=="query"&&(ls.prototype[e+"Form"]=n(!0))});let ew=class em{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new zr(r,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new em(function(s){e=s}),cancel:e}}};function tw(t){return function(n){return t.apply(null,n)}}function nw(t){return V.isObject(t)&&t.isAxiosError===!0}const Cc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Cc).forEach(([t,e])=>{Cc[e]=t});function tm(t){const e=new ls(t),n=Up(ls.prototype.request,e);return V.extend(n,ls.prototype,e,{allOwnKeys:!0}),V.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return tm(fs(t,s))},n}const At=tm(kr);At.Axios=ls;At.CanceledError=zr;At.CancelToken=ew;At.isCancel=$p;At.VERSION=mu;At.toFormData=Ma;At.AxiosError=Ue;At.Cancel=At.CanceledError;At.all=function(e){return Promise.all(e)};At.spread=tw;At.isAxiosError=nw;At.mergeConfig=fs;At.AxiosHeaders=cn;At.formToJSON=t=>jp(V.isHTMLForm(t)?new FormData(t):t);At.getAdapter=Qp.getAdapter;At.HttpStatusCode=Cc;At.default=At;const{Axios:r1,AxiosError:o1,CanceledError:a1,isCancel:l1,CancelToken:c1,VERSION:u1,all:f1,Cancel:d1,isAxiosError:h1,spread:p1,toFormData:m1,AxiosHeaders:g1,HttpStatusCode:_1,formToJSON:x1,getAdapter:v1,mergeConfig:S1,create:b1}=At,_u="filament_ai_access_token",iw=3e4,sw=3e4,rw=window.filamentAI?.backendUrl??"",ow=window.filamentAI?.username||"",aw=window.filamentAI?.password||"";function lw(){return sessionStorage.getItem(_u)}function cw(t){sessionStorage.setItem(_u,t)}function uw(){sessionStorage.removeItem(_u)}function fw(t){const e=t.split(".");if(e.length!==3)return null;try{const n=e[1].replace(/-/g,"+").replace(/_/g,"/"),i=atob(n);return JSON.parse(i)}catch{return null}}function dw(t){if(!t)return!1;const e=fw(t);if(!e?.exp)return!1;const n=e.exp*1e3;return Date.now()<n-iw}async function nm(){const e=(await At.post(`${rw}/login`,{username:ow,password:aw},{timeout:sw})).data.access_token;return cw(e),e}async function hw(){const t=lw();return t&&dw(t)?t:nm()}const pw=6e5,mw=window.filamentAI?.backendUrl??"";function gw(t){return At.isAxiosError(t)&&t.response?.status===401}async function Od(t,e,n){return At.post(`${mw}/upload-stl`,t,{timeout:pw,headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${e}`},onUploadProgress:i=>{if(!n||!i.total)return;const s=Math.round(i.loaded*100/i.total);n(s)}})}async function _w({file:t,useCase:e,printerType:n,printerKey:i,onUploadProgress:s}){const r=new FormData;r.append("file",t),r.append("use_case",e),r.append("printer_type",n),r.append("printer_key",i),r.append("electricity_cost",window.filamentAI?.electricityCost||"8"),r.append("labour_cost",window.filamentAI?.labourCost||"50"),r.append("profit_margin",window.filamentAI?.profitMargin||"20"),r.append("tax",window.filamentAI?.tax||"18");const o=await hw();try{return(await Od(r,o,s)).data}catch(a){if(!gw(a))throw a;uw();const l=await nm();return(await Od(r,l,s)).data}}function xw(t){if(At.isAxiosError(t)){if(t.code==="ECONNABORTED")return"Request timed out. The analysis may take several minutes — try again.";if(t.response?.status===401)return"Authentication failed. Check the backend username and password in the WordPress settings, or log in again if your session expired.";if(t.response?.data?.detail)return t.response.data.detail;if(t.response?.data?.message)return t.response.data.message;if(t.message)return t.message}return"Could not reach the server. Is the backend running on port 8000?"}const Bd=[{value:"Bambu Lab X1C",label:"Bambu Lab X1C"},{value:"Bambu Lab P1S",label:"Bambu Lab P1S"},{value:"Bambu Lab A1",label:"Bambu Lab A1"},{value:"open",label:"Open Source (PLA/PETG/TPU only)"}],kd=[{value:"x1c",label:"Bambu Lab X1C"},{value:"p1s",label:"Bambu Lab P1S"},{value:"a1",label:"Bambu Lab A1"}],So=["Validating STL","Processing Geometry","Running AI Analysis","Generating Print Settings","Running Bambu Slicer","Calculating Cost"],vw=["validating_stl","processing_geometry","running_ai_analysis","ai_orientation","ai_support","ai_rendering","ai_vision","ai_filament","generating_print_settings","ai_print_settings","running_bambu_slicer","calculating_cost"],Sw={validating_stl:"Validating STL",processing_geometry:"Processing Geometry",running_ai_analysis:"Running AI Analysis",ai_orientation:"AI: Orientation Analysis",ai_support:"AI: Support Analysis",ai_rendering:"AI: Rendering Views",ai_vision:"AI: Vision Analysis",ai_filament:"AI: Filament Recommendation",generating_print_settings:"Generating Print Settings",ai_print_settings:"AI: Print Settings LLM",running_bambu_slicer:"Running Bambu Slicer",calculating_cost:"Calculating Cost"},et="—";function zd(t){if(t==null||Number.isNaN(Number(t)))return et;const e=Number(t);return e<1?`${Math.round(e*1e3)} ms`:`${e.toFixed(2)} s`}function bw(t){if(!t||typeof t!="object")return{hasTimings:!1,stages:[],totalSeconds:null,totalDisplay:et};const e=vw.map(r=>{const o=t[r]!=null?Number(t[r]):null;return{key:r,label:Sw[r]??r,seconds:o,display:zd(o),isSlowest:!1}}).filter(r=>r.seconds!=null&&!Number.isNaN(r.seconds));if(e.length===0)return{hasTimings:!1,stages:[],totalSeconds:null,totalDisplay:et};let n=e[0].key,i=e[0].seconds;for(const r of e)r.seconds>i&&(i=r.seconds,n=r.key);for(const r of e)r.isSlowest=r.key===n;const s=t.total_time!=null?Number(t.total_time):null;return{hasTimings:!0,stages:e,totalSeconds:s,totalDisplay:zd(s)}}function Hd(t){if(!t)return et;const{x:e=0,y:n=0,z:i=0}=t;return`X ${e}° · Y ${n}° · Z ${i}°`}function yw(t){if(!t)return et;const{width:e,height:n,depth:i}=t,s=r=>{if(r==null)return"—";const o=Number(r);return Number.isNaN(o)?String(r):o.toFixed(1)};return`${s(e)} × ${s(n)} × ${s(i)} mm`}function Vd(t,e,n=et){if(!t)return n;const i=t.match(e);return i?i[1].trim():n}function Gd(t){return!!(t&&String(t).length>0)}function Mw(t,e=2){return t==null||Number.isNaN(Number(t))?null:Math.round(Number(t)*e*100)/100}function Wd(t){if(!t||t.success!==!0)return null;const e=t.processing_data??{},n=t.bambu_settings??{},i=t.filament_recommendation??{},s=i.use_case_resolution??{},r=t.print_settings?.settings??"",o=t.slicer_result??{},a=t.cost_analysis??{},l=t.slicing_artifacts??{},c=l.slicer_output??{},u=o.gcode_path??l.gcode_extraction?.gcode_path,f=c.output_3mf_path??c.output_path,d=s.show_ai_comparison===!0||s.show_ai_comparison==null&&s.aligned===!0,h=e.top_orientations?.[0],g=h?.rotation_angles??n.orientation??{x:0,y:0,z:0},x=h?.rotation_matrix??n.orientation?.rotation_matrix??null;return{filename:t.filename??et,message:t.message??"",ai:{orientation:{x:Number(g.x??0),y:Number(g.y??0),z:Number(g.z??0),rotation_matrix:x},recommendedFilament:i.recommended_filament??n.filament_type??et,recommendedOrientation:t.orientation_analysis?.analysis?.slice(0,120)||Hd(n.orientation),orientationAngles:Hd(n.orientation),supportRequired:n.supports!=null?n.supports?"Yes":"No":et,supportDifficulty:e.support_difficulty??et,layerHeight:n.layer_height!=null?`${n.layer_height} mm`:et,wallCount:n.wall_count??et,infillPercentage:n.infill_percentage!=null?`${n.infill_percentage}%`:et,infillType:n.infill_type??et,brimRequired:n.brim!=null?n.brim?"Yes":"No":et,supportSettings:Vd(r,/Support Settings:\s*(.+)/i,n.supports?"Enabled (see AI settings)":et),printQuality:Vd(r,/Print Quality:\s*(.+)/i,"Standard"),settingsFullText:r,filamentExplanation:i.recommendation??et,userUseCase:s.user_use_case??et,aiUseCase:d?s.ai_use_case??et:et,useCaseAligned:d?s.aligned===!0?"Yes":s.aligned===!1?"No":et:et,effectiveUseCase:s.final_use_case??et,showAiComparison:d,hasUseCaseResolution:!!s.user_use_case},stats:{filamentWeight:o.weight_g!=null?`${o.weight_g} g`:et,filamentLength:o.filament_used_m!=null?`${o.filament_used_m} m`:et,printTime:o.print_time??et,printTimeHours:o.print_time_hours!=null?`${o.print_time_hours} h`:et,modelVolume:e.volume!=null?`${e.volume.toFixed(1)} mm³`:et,dimensions:yw(e.dimensions),isWatertight:e.is_watertight!=null?e.is_watertight?"Yes":"No":et,overhangVolume:e.overhang_volume_mm3!=null?`${e.overhang_volume_mm3.toFixed(1)} mm³`:et,overhangVolumePercentage:e.overhang_volume_percentage!=null?`${e.overhang_volume_percentage}%`:et,overhangThreshold:e.overhang_threshold_degrees!=null?`${e.overhang_threshold_degrees}°`:et,hasStats:!!(o.print_time||o.weight_g)},cost:{materialCost:a.material_cost!=null?`₹${a.material_cost}`:et,electricityCost:a.electricity_cost!=null?`₹${a.electricity_cost}`:et,laborCost:a.labor_cost!=null?`₹${a.labor_cost}`:et,machineCost:a.depreciation_cost!=null?`₹${a.depreciation_cost}`:et,supportCost:a.support_cost!=null?`₹${a.support_cost}`:et,totalCost:a.total_cost!=null?`₹${a.total_cost}`:et,finalCost:a.total_cost!=null?`₹${Mw(a.total_cost)}`:et,rawTotal:a.total_cost},slicer:{gcodeGenerated:Gd(u),threeMfGenerated:Gd(f),slicingSuccess:o.success===!0,printerProfile:c.machine_profile_path??et,filamentProfile:c.filament_profile_path??et,processProfile:c.process_profile_path??Ew(t),gcodePath:u??"",threeMfPath:f??""},validation:t.validation_data??{},renderImages:t.rendering_data?.images??null,timings:bw(t.timings)}}function Ew(t){return t.profile_result?.profile_path??"—"}function Tw(t){if(!t)return{title:"Request failed",message:"No response from server.",stage:null};const e=t.stage??null,n=t.message??t.error??"Something went wrong.";return{title:e?Aw(e):"Analysis failed",message:n,stage:e,errorCode:t.error_code??null}}function Aw(t){return{bambu_slicing:"Slicing failed",gcode_extraction:"G-code extraction failed",gcode_parsing:"G-code parsing failed",slicer_result_parsing:"Print statistics missing",cost_calculation:"Cost calculation failed"}[t]??"Pipeline error"}const ww={success:!0,message:"STL uploaded, processed, and rendered successfully",filename:"sample_gear.stl",validation_data:{vertices:12480,faces:24956},processing_data:{success:!0,volume:45230.5,dimensions:{width:62.4,height:28.1,depth:18.7},bounding_box:[[0,0,0],[62.4,28.1,18.7]],vertices_count:12480,faces_count:24956,is_watertight:!0,total_volume_mm3:45230.5,overhang_volume_mm3:6422.7,overhang_volume_percentage:14.2,overhang_threshold_degrees:45,support_difficulty:"MEDIUM",top_orientations:[{rotation_angles:{x:0,y:0,z:0},surface_area:3200,score:.92,total_volume_mm3:45230.5,overhang_volume_mm3:6422.7,overhang_volume_percentage:14.2,overhang_threshold_degrees:45,support_difficulty:"MEDIUM"}]},rendering_data:{success:!0,images:{front:"renders/sample_front.png",side:"renders/sample_side.png",top:"renders/sample_top.png",isometric:"renders/sample_iso.png"}},orientation_analysis:{success:!0,analysis:"Lay flat with largest face on the build plate to minimize supports."},filament_recommendation:{success:!0,recommended_filament:"PLA",recommendation:`Material: PLA
PLA offers good stiffness for functional prototypes.`,use_case_resolution:{user_use_case:"functional gear prototype",ai_use_case:"mechanical gear-like functional part",aligned:!0,final_use_case:"mechanical gear-like functional part",selected_by:"ai",show_ai_comparison:!0}},print_settings:{success:!0,settings:`Wall Count: 3
Layer Height: 0.2
Infill Type: Gyroid
Infill Percentage: 20
Supports: Yes
Brim: Yes
Support Settings: Tree supports, 45° overhang threshold
Print Quality: Standard functional quality`},bambu_settings:{orientation:{x:0,y:0,z:0},filament_type:"PLA",wall_count:3,layer_height:.2,infill_type:"Gyroid",infill_percentage:20,supports:!0,brim:!0},slicer_result:{success:!0,print_time:"2h 15m 0s",print_time_hours:2.25,weight_g:42.5,filament_used_m:14.2,filament_used_mm:14200,gcode_path:"generated_gcode/sample/file.gcode"},cost_analysis:{success:!0,filament_type:"PLA",weight_g:42.5,print_time_hours:2.25,material_cost:61.63,support_cost:7.7,electricity_cost:2.7,labor_cost:112.5,depreciation_cost:42.98,total_cost:227.51},slicing_artifacts:{slicer_output:{success:!0,output_3mf_path:"generated_profiles/sample_abc123.3mf",output_path:"generated_profiles/sample_abc123.3mf",machine_profile_path:"profiles/machine_x1c.json",filament_profile_path:"profiles/filament_pla.json",process_profile_path:"generated_profiles/ai_generated_profile.json"},gcode_extraction:{success:!0,gcode_path:"generated_gcode/sample/file.gcode"},gcode_stats:{success:!0}},profile_result:{success:!0,profile_path:"generated_profiles/ai_generated_profile.json",profile_data:{name:"ai_generated_profile"}},timings:{validating_stl:.25,processing_geometry:1.12,running_ai_analysis:3.45,generating_print_settings:.82,running_bambu_slicer:12.3,calculating_cost:.05,total_time:17.99}},Rw={class:"min-h-screen"},Cw={class:"mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8"},Pw={class:"mt-8 grid gap-8 lg:grid-cols-3"},Dw={class:"space-y-6 lg:col-span-1"},Lw={class:"card space-y-4"},Iw={class:"block"},Uw=["disabled"],Nw={class:"block"},Fw=["disabled"],Ow=["value"],Bw={class:"block"},kw=["disabled"],zw=["value"],Hw=["disabled"],Vw=["disabled"],Gw=["disabled"],Ww={class:"space-y-6 lg:col-span-2"},Xw={key:1,class:"alert-success px-4 py-3 text-sm"},qw={key:2,class:"card overflow-hidden p-0"},jw={class:"section-label px-6 pt-6 pb-4"},$w={class:"w-full min-h-[380px] h-[min(480px,55vh)] sm:aspect-video sm:min-h-[400px] sm:h-auto"},Yw={key:4,class:"animate-[fadeIn_0.4s_ease-out] space-y-6"},Kw={class:"alert-success p-6"},Zw={class:"font-semibold"},Jw={class:"results-card-columns"},Qw={key:5,class:"card flex min-h-[320px] items-center justify-center border-dashed bg-white/50 text-center dark:bg-slate-900/50"},e1={__name:"App",setup(t){const e=$t("idle"),n=$t(!1),i=$t(null),s=$t(null),r=$t(0),o=$t(So[0]),a=$t(null),l=$t({type:"info",title:"",message:""}),c=$t(!1),u=aa({useCase:"",printerType:Bd[0].value,printerKey:kd[0].value});let f=null;as(n,v=>{document.documentElement.classList.toggle("dark",v)});function d(){n.value=!n.value}function h(v,w,U){l.value={type:v,title:w,message:U}}function g(){l.value={type:"info",title:"",message:""}}async function x(v){if(s.value=null,v)try{s.value=await v.arrayBuffer()}catch{s.value=null}i.value=v,g()}function p(v){h("error","Invalid file",v)}function m(){let v=0;o.value=So[0],f=setInterval(()=>{v=Math.min(v+1,So.length-1),o.value=So[v]},4e3)}function S(){f&&(clearInterval(f),f=null)}ua(S);function E(){return i.value&&u.useCase.trim().length>0&&u.printerType&&u.printerKey}async function M(){if(!E()){h("error","Missing input","Please select an STL file, describe your use case, and choose printer options.");return}g(),e.value="loading",r.value=0,a.value=null,m();try{const v=await _w({file:i.value,useCase:u.useCase.trim(),printerType:u.printerType,printerKey:u.printerKey,onUploadProgress:w=>{r.value=w}});if(S(),v.success!==!0){e.value="error";const w=Tw(v);h("error",w.title,w.message);return}a.value=Wd(v),e.value="success",h("success","Analysis complete",v.message||"Your print report is ready below.")}catch(v){S(),e.value="error",h("error","Request failed",xw(v))}}function P(){i.value=null,s.value=null,a.value=null,e.value="idle",r.value=0,g()}function T(){S(),a.value=Wd(ww),e.value="success",h("info","Demo mode","Showing sample data from dummyResponse.js")}function D(){c.value=!0,setTimeout(()=>{c.value=!1},2e3)}return(v,w)=>(ze(),qe("div",Rw,[ie("div",Cw,[rt(W_,{"dark-mode":n.value,onToggleDark:d},null,8,["dark-mode"]),ie("div",Pw,[ie("section",Dw,[rt(Q_,{disabled:e.value==="loading","file-name":i.value?.name??"",onFileSelected:x,onInvalidFile:p},null,8,["disabled","file-name"]),ie("div",Lw,[w[7]||(w[7]=ie("h2",{class:"section-label"}," Print options ",-1)),ie("label",Iw,[w[3]||(w[3]=ie("span",{class:"form-label"},"Use case",-1)),La(ie("input",{"onUpdate:modelValue":w[0]||(w[0]=U=>u.useCase=U),type:"text",placeholder:"e.g. outdoor phone mount, prototype bracket",class:"form-control",disabled:e.value==="loading"},null,8,Uw),[[P_,u.useCase]]),w[4]||(w[4]=ie("p",{class:"mt-1 text-xs text-slate-500 dark:text-slate-400"}," Describe what you are printing. After analysis, we compare this with the AI suggestion for filament choice. ",-1))]),ie("label",Nw,[w[5]||(w[5]=ie("span",{class:"form-label"},"Printer type",-1)),La(ie("select",{"onUpdate:modelValue":w[1]||(w[1]=U=>u.printerType=U),class:"form-control",disabled:e.value==="loading"},[(ze(!0),qe(Gt,null,ko(wl(Bd),U=>(ze(),qe("option",{key:U.value,value:U.value},ot(U.label),9,Ow))),128))],8,Fw),[[cf,u.printerType]])]),ie("label",Bw,[w[6]||(w[6]=ie("span",{class:"form-label"},"Printer key (cost)",-1)),La(ie("select",{"onUpdate:modelValue":w[2]||(w[2]=U=>u.printerKey=U),class:"form-control",disabled:e.value==="loading"},[(ze(!0),qe(Gt,null,ko(wl(kd),U=>(ze(),qe("option",{key:U.value,value:U.value},ot(U.label),9,zw))),128))],8,kw),[[cf,u.printerKey]])]),ie("button",{type:"button",class:"btn-primary w-full",disabled:e.value==="loading"||!E(),onClick:M},ot(e.value==="loading"?"Analyzing…":"Analyze & estimate cost"),9,Hw),ie("button",{type:"button",class:"btn-secondary w-full",disabled:e.value==="loading",onClick:T}," Preview demo dashboard ",8,Vw),e.value!=="idle"?(ze(),qe("button",{key:0,type:"button",class:"btn-ghost w-full",disabled:e.value==="loading",onClick:P}," Start over ",8,Gw)):Tt("",!0)]),e.value==="success"&&a.value?(ze(),zi(oT,{key:0,data:a.value.slicer},null,8,["data"])):Tt("",!0)]),ie("section",Ww,[l.value.message||l.value.title?(ze(),zi(q_,{key:0,type:l.value.type,title:l.value.title,message:l.value.message},null,8,["type","title","message"])):Tt("",!0),c.value?(ze(),qe("p",Xw," AI settings copied to clipboard. ")):Tt("",!0),i.value?(ze(),qe("div",qw,[ie("p",jw,ot(e.value==="success"&&a.value?"3D preview — recommended orientation":"3D preview"),1),ie("div",$w,[rt(mE,{class:"h-full w-full","dark-mode":n.value,file:i.value,"file-buffer":s.value,orientation:a.value?.ai?.orientation??{x:0,y:0,z:0}},null,8,["dark-mode","file","file-buffer","orientation"])])])):Tt("",!0),e.value==="loading"?(ze(),zi(r0,{key:3,step:o.value,"upload-percent":r.value},null,8,["step","upload-percent"])):Tt("",!0),e.value==="success"&&a.value?(ze(),qe("div",Yw,[ie("div",Kw,[ie("p",Zw," Results for "+ot(a.value.filename),1)]),ie("div",Jw,[ie("div",null,[rt(yE,{data:a.value.ai,onCopySettings:D},null,8,["data"])]),ie("div",null,[rt(AE,{data:a.value.stats},null,8,["data"]),rt(PE,{data:a.value.cost},null,8,["data"])])]),rt(hT,{data:a.value.timings},null,8,["data"])])):e.value==="idle"&&!i.value?(ze(),qe("div",Qw,[...w[8]||(w[8]=[ie("div",null,[ie("p",{class:"text-lg font-medium text-slate-600 dark:text-slate-400"}," Upload an STL to begin "),ie("p",{class:"mt-2 text-sm text-slate-400"}," Your AI analysis, print stats, and cost breakdown will appear here. ")],-1)])])):Tt("",!0)])])])]))}},t1=Ip(e1,[["__scopeId","data-v-3d873543"]]);N_(t1).mount("#app");
