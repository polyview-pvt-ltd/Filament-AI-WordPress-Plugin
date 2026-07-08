(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();function Dc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Et={},Us=[],Zn=()=>{},Jd=()=>!1,ea=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ta=t=>t.startsWith("onUpdate:"),en=Object.assign,Lc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Sm=Object.prototype.hasOwnProperty,pt=(t,e)=>Sm.call(t,e),$e=Array.isArray,Ns=t=>Ir(t)==="[object Map]",na=t=>Ir(t)==="[object Set]",Bu=t=>Ir(t)==="[object Date]",nt=t=>typeof t=="function",Lt=t=>typeof t=="string",Nn=t=>typeof t=="symbol",St=t=>t!==null&&typeof t=="object",Qd=t=>(St(t)||nt(t))&&nt(t.then)&&nt(t.catch),eh=Object.prototype.toString,Ir=t=>eh.call(t),bm=t=>Ir(t).slice(8,-1),th=t=>Ir(t)==="[object Object]",Ic=t=>Lt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,pr=Dc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ia=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},ym=/-\w/g,In=ia(t=>t.replace(ym,e=>e.slice(1).toUpperCase())),Mm=/\B([A-Z])/g,ds=ia(t=>t.replace(Mm,"-$1").toLowerCase()),nh=ia(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ra=ia(t=>t?`on${nh(t)}`:""),$n=(t,e)=>!Object.is(t,e),Mo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ih=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},sa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ku;const ra=()=>ku||(ku=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function oa(t){if($e(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],s=Lt(i)?wm(i):oa(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(Lt(t)||St(t))return t}const Em=/;(?![^(]*\))/g,Tm=/:([^]+)/,Am=/\/\*[^]*?\*\//g;function wm(t){const e={};return t.replace(Am,"").split(Em).forEach(n=>{if(n){const i=n.split(Tm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ft(t){let e="";if(Lt(t))e=t;else if($e(t))for(let n=0;n<t.length;n++){const i=Ft(t[n]);i&&(e+=i+" ")}else if(St(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Rm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cm=Dc(Rm);function sh(t){return!!t||t===""}function Pm(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Ur(t[i],e[i]);return n}function Ur(t,e){if(t===e)return!0;let n=Bu(t),i=Bu(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Nn(t),i=Nn(e),n||i)return t===e;if(n=$e(t),i=$e(e),n||i)return n&&i?Pm(t,e):!1;if(n=St(t),i=St(e),n||i){if(!n||!i)return!1;const s=Object.keys(t).length,r=Object.keys(e).length;if(s!==r)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Ur(t[o],e[o]))return!1}}return String(t)===String(e)}function Dm(t,e){return t.findIndex(n=>Ur(n,e))}const rh=t=>!!(t&&t.__v_isRef===!0),je=t=>Lt(t)?t:t==null?"":$e(t)||St(t)&&(t.toString===eh||!nt(t.toString))?rh(t)?je(t.value):JSON.stringify(t,oh,2):String(t),oh=(t,e)=>rh(e)?oh(t,e.value):Ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,s],r)=>(n[Ca(i,r)+" =>"]=s,n),{})}:na(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ca(n))}:Nn(e)?Ca(e):St(e)&&!$e(e)&&!th(e)?String(e):e,Ca=(t,e="")=>{var n;return Nn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Wt;class Lm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Wt&&(Wt.active?(this.parent=Wt,this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Wt;try{return Wt=this,e()}finally{Wt=n}}}on(){++this._on===1&&(this.prevScope=Wt,Wt=this)}off(){if(this._on>0&&--this._on===0){if(Wt===this)Wt=this.prevScope;else{let e=Wt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Im(){return Wt}let At;const Pa=new WeakSet;class ah{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Wt&&(Wt.active?Wt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Pa.has(this)&&(Pa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ch(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,zu(this),uh(this);const e=At,n=Un;At=this,Un=!0;try{return this.fn()}finally{fh(this),At=e,Un=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Fc(e);this.deps=this.depsTail=void 0,zu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Pa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ml(this)&&this.run()}get dirty(){return Ml(this)}}let lh=0,mr,gr;function ch(t,e=!1){if(t.flags|=8,e){t.next=gr,gr=t;return}t.next=mr,mr=t}function Uc(){lh++}function Nc(){if(--lh>0)return;if(gr){let e=gr;for(gr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;mr;){let e=mr;for(mr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function uh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function fh(t){let e,n=t.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Fc(i),Um(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}t.deps=e,t.depsTail=n}function Ml(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(dh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function dh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Mr)||(t.globalVersion=Mr,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ml(t))))return;t.flags|=2;const e=t.dep,n=At,i=Un;At=t,Un=!0;try{uh(t);const s=t.fn(t._value);(e.version===0||$n(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{At=n,Un=i,fh(t),t.flags&=-3}}function Fc(t,e=!1){const{dep:n,prevSub:i,nextSub:s}=t;if(i&&(i.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Fc(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Um(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Un=!0;const hh=[];function Si(){hh.push(Un),Un=!1}function bi(){const t=hh.pop();Un=t===void 0?!0:t}function zu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=At;At=void 0;try{e()}finally{At=n}}}let Mr=0;class Nm{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Oc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!At||!Un||At===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==At)n=this.activeLink=new Nm(At,this),At.deps?(n.prevDep=At.depsTail,At.depsTail.nextDep=n,At.depsTail=n):At.deps=At.depsTail=n,ph(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=At.depsTail,n.nextDep=void 0,At.depsTail.nextDep=n,At.depsTail=n,At.deps===n&&(At.deps=i)}return n}trigger(e){this.version++,Mr++,this.notify(e)}notify(e){Uc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Nc()}}}function ph(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)ph(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const El=new WeakMap,rs=Symbol(""),Tl=Symbol(""),Er=Symbol("");function Yt(t,e,n){if(Un&&At){let i=El.get(t);i||El.set(t,i=new Map);let s=i.get(n);s||(i.set(n,s=new Oc),s.map=i,s.key=n),s.track()}}function pi(t,e,n,i,s,r){const o=El.get(t);if(!o){Mr++;return}const a=l=>{l&&l.trigger()};if(Uc(),e==="clear")o.forEach(a);else{const l=$e(t),c=l&&Ic(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Er||!Nn(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Er)),e){case"add":l?c&&a(o.get("length")):(a(o.get(rs)),Ns(t)&&a(o.get(Tl)));break;case"delete":l||(a(o.get(rs)),Ns(t)&&a(o.get(Tl)));break;case"set":Ns(t)&&a(o.get(rs));break}}Nc()}function ms(t){const e=ht(t);return e===t?e:(Yt(e,"iterate",Er),wn(t)?e:e.map(Fn))}function aa(t){return Yt(t=ht(t),"iterate",Er),t}function Wn(t,e){return yi(t)?Gs(os(t)?Fn(e):e):Fn(e)}const Fm={__proto__:null,[Symbol.iterator](){return Da(this,Symbol.iterator,t=>Wn(this,t))},concat(...t){return ms(this).concat(...t.map(e=>$e(e)?ms(e):e))},entries(){return Da(this,"entries",t=>(t[1]=Wn(this,t[1]),t))},every(t,e){return ri(this,"every",t,e,void 0,arguments)},filter(t,e){return ri(this,"filter",t,e,n=>n.map(i=>Wn(this,i)),arguments)},find(t,e){return ri(this,"find",t,e,n=>Wn(this,n),arguments)},findIndex(t,e){return ri(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return ri(this,"findLast",t,e,n=>Wn(this,n),arguments)},findLastIndex(t,e){return ri(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return ri(this,"forEach",t,e,void 0,arguments)},includes(...t){return La(this,"includes",t)},indexOf(...t){return La(this,"indexOf",t)},join(t){return ms(this).join(t)},lastIndexOf(...t){return La(this,"lastIndexOf",t)},map(t,e){return ri(this,"map",t,e,void 0,arguments)},pop(){return er(this,"pop")},push(...t){return er(this,"push",t)},reduce(t,...e){return Hu(this,"reduce",t,e)},reduceRight(t,...e){return Hu(this,"reduceRight",t,e)},shift(){return er(this,"shift")},some(t,e){return ri(this,"some",t,e,void 0,arguments)},splice(...t){return er(this,"splice",t)},toReversed(){return ms(this).toReversed()},toSorted(t){return ms(this).toSorted(t)},toSpliced(...t){return ms(this).toSpliced(...t)},unshift(...t){return er(this,"unshift",t)},values(){return Da(this,"values",t=>Wn(this,t))}};function Da(t,e,n){const i=aa(t),s=i[e]();return i!==t&&!wn(t)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const Om=Array.prototype;function ri(t,e,n,i,s,r){const o=aa(t),a=o!==t&&!wn(t),l=o[e];if(l!==Om[e]){const f=l.apply(t,r);return a?Fn(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,Wn(t,f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Hu(t,e,n,i){const s=aa(t),r=s!==t&&!wn(t);let o=n,a=!1;s!==t&&(r?(a=i.length===0,o=function(c,u,f){return a&&(a=!1,c=Wn(t,c)),n.call(this,c,Wn(t,u),f,t)}):n.length>3&&(o=function(c,u,f){return n.call(this,c,u,f,t)}));const l=s[e](o,...i);return a?Wn(t,l):l}function La(t,e,n){const i=ht(t);Yt(i,"iterate",Er);const s=i[e](...n);return(s===-1||s===!1)&&zc(n[0])?(n[0]=ht(n[0]),i[e](...n)):s}function er(t,e,n=[]){Si(),Uc();const i=ht(t)[e].apply(t,n);return Nc(),bi(),i}const Bm=Dc("__proto__,__v_isRef,__isVue"),mh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Nn));function km(t){Nn(t)||(t=String(t));const e=ht(this);return Yt(e,"has",t),e.hasOwnProperty(t)}class gh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?Ym:Sh:r?vh:xh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=$e(e);if(!s){let l;if(o&&(l=Fm[n]))return l;if(n==="hasOwnProperty")return km}const a=Reflect.get(e,n,Qt(e)?e:i);if((Nn(n)?mh.has(n):Bm(n))||(s||Yt(e,"get",n),r))return a;if(Qt(a)){const l=o&&Ic(n)?a:a.value;return s&&St(l)?wl(l):l}return St(a)?s?wl(a):la(a):a}}class _h extends gh{constructor(e=!1){super(!1,e)}set(e,n,i,s){let r=e[n];const o=$e(e)&&Ic(n);if(!this._isShallow){const c=yi(r);if(!wn(i)&&!yi(i)&&(r=ht(r),i=ht(i)),!o&&Qt(r)&&!Qt(i))return c||(r.value=i),!0}const a=o?Number(n)<e.length:pt(e,n),l=Reflect.set(e,n,i,Qt(e)?e:s);return e===ht(s)&&(a?$n(i,r)&&pi(e,"set",n,i):pi(e,"add",n,i)),l}deleteProperty(e,n){const i=pt(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&i&&pi(e,"delete",n,void 0),s}has(e,n){const i=Reflect.has(e,n);return(!Nn(n)||!mh.has(n))&&Yt(e,"has",n),i}ownKeys(e){return Yt(e,"iterate",$e(e)?"length":rs),Reflect.ownKeys(e)}}class zm extends gh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Hm=new _h,Vm=new zm,Gm=new _h(!0);const Al=t=>t,Xr=t=>Reflect.getPrototypeOf(t);function Wm(t,e,n){return function(...i){const s=this.__v_raw,r=ht(s),o=Ns(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...i),u=n?Al:e?Gs:Fn;return!e&&Yt(r,"iterate",l?Tl:rs),en(Object.create(c),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}}})}}function qr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Xm(t,e){const n={get(s){const r=this.__v_raw,o=ht(r),a=ht(s);t||($n(s,a)&&Yt(o,"get",s),Yt(o,"get",a));const{has:l}=Xr(o),c=e?Al:t?Gs:Fn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!t&&Yt(ht(s),"iterate",rs),s.size},has(s){const r=this.__v_raw,o=ht(r),a=ht(s);return t||($n(s,a)&&Yt(o,"has",s),Yt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=ht(a),c=e?Al:t?Gs:Fn;return!t&&Yt(l,"iterate",rs),a.forEach((u,f)=>s.call(r,c(u),c(f),o))}};return en(n,t?{add:qr("add"),set:qr("set"),delete:qr("delete"),clear:qr("clear")}:{add(s){const r=ht(this),o=Xr(r),a=ht(s),l=!e&&!wn(s)&&!yi(s)?a:s;return o.has.call(r,l)||$n(s,l)&&o.has.call(r,s)||$n(a,l)&&o.has.call(r,a)||(r.add(l),pi(r,"add",l,l)),this},set(s,r){!e&&!wn(r)&&!yi(r)&&(r=ht(r));const o=ht(this),{has:a,get:l}=Xr(o);let c=a.call(o,s);c||(s=ht(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?$n(r,u)&&pi(o,"set",s,r):pi(o,"add",s,r),this},delete(s){const r=ht(this),{has:o,get:a}=Xr(r);let l=o.call(r,s);l||(s=ht(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&pi(r,"delete",s,void 0),c},clear(){const s=ht(this),r=s.size!==0,o=s.clear();return r&&pi(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Wm(s,t,e)}),n}function Bc(t,e){const n=Xm(t,e);return(i,s,r)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?i:Reflect.get(pt(n,s)&&s in i?n:i,s,r)}const qm={get:Bc(!1,!1)},$m={get:Bc(!1,!0)},jm={get:Bc(!0,!1)};const xh=new WeakMap,vh=new WeakMap,Sh=new WeakMap,Ym=new WeakMap;function Km(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zm(t){return t.__v_skip||!Object.isExtensible(t)?0:Km(bm(t))}function la(t){return yi(t)?t:kc(t,!1,Hm,qm,xh)}function Jm(t){return kc(t,!1,Gm,$m,vh)}function wl(t){return kc(t,!0,Vm,jm,Sh)}function kc(t,e,n,i,s){if(!St(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=Zm(t);if(r===0)return t;const o=s.get(t);if(o)return o;const a=new Proxy(t,r===2?i:n);return s.set(t,a),a}function os(t){return yi(t)?os(t.__v_raw):!!(t&&t.__v_isReactive)}function yi(t){return!!(t&&t.__v_isReadonly)}function wn(t){return!!(t&&t.__v_isShallow)}function zc(t){return t?!!t.__v_raw:!1}function ht(t){const e=t&&t.__v_raw;return e?ht(e):t}function Qm(t){return!pt(t,"__v_skip")&&Object.isExtensible(t)&&ih(t,"__v_skip",!0),t}const Fn=t=>St(t)?la(t):t,Gs=t=>St(t)?wl(t):t;function Qt(t){return t?t.__v_isRef===!0:!1}function wt(t){return eg(t,!1)}function eg(t,e){return Qt(t)?t:new tg(t,e)}class tg{constructor(e,n){this.dep=new Oc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ht(e),this._value=n?e:Fn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||wn(e)||yi(e);e=i?e:ht(e),$n(e,n)&&(this._rawValue=e,this._value=i?e:Fn(e),this.dep.trigger())}}function Rl(t){return Qt(t)?t.value:t}const ng={get:(t,e,n)=>e==="__v_raw"?t:Rl(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const s=t[e];return Qt(s)&&!Qt(n)?(s.value=n,!0):Reflect.set(t,e,n,i)}};function bh(t){return os(t)?t:new Proxy(t,ng)}class ig{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Oc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Mr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&At!==this)return ch(this,!0),!0}get value(){const e=this.dep.track();return dh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function sg(t,e,n=!1){let i,s;return nt(t)?i=t:(i=t.get,s=t.set),new ig(i,s,n)}const $r={},Oo=new WeakMap;let Ji;function rg(t,e=!1,n=Ji){if(n){let i=Oo.get(n);i||Oo.set(n,i=[]),i.push(t)}}function og(t,e,n=Et){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=M=>s?M:wn(M)||s===!1||s===0?mi(M,1):mi(M);let u,f,d,h,g=!1,_=!1;if(Qt(t)?(f=()=>t.value,g=wn(t)):os(t)?(f=()=>c(t),g=!0):$e(t)?(_=!0,g=t.some(M=>os(M)||wn(M)),f=()=>t.map(M=>{if(Qt(M))return M.value;if(os(M))return c(M);if(nt(M))return l?l(M,2):M()})):nt(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){Si();try{d()}finally{bi()}}const M=Ji;Ji=u;try{return l?l(t,3,[h]):t(h)}finally{Ji=M}}:f=Zn,e&&s){const M=f,D=s===!0?1/0:s;f=()=>mi(M(),D)}const m=Im(),p=()=>{u.stop(),m&&m.active&&Lc(m.effects,u)};if(r&&e){const M=e;e=(...D)=>{M(...D),p()}}let S=_?new Array(t.length).fill($r):$r;const E=M=>{if(!(!(u.flags&1)||!u.dirty&&!M))if(e){const D=u.run();if(s||g||(_?D.some((T,L)=>$n(T,S[L])):$n(D,S))){d&&d();const T=Ji;Ji=u;try{const L=[D,S===$r?void 0:_&&S[0]===$r?[]:S,h];S=D,l?l(e,3,L):e(...L)}finally{Ji=T}}}else u.run()};return a&&a(E),u=new ah(f),u.scheduler=o?()=>o(E,!1):E,h=M=>rg(M,!1,u),d=u.onStop=()=>{const M=Oo.get(u);if(M){if(l)l(M,4);else for(const D of M)D();Oo.delete(u)}},e?i?E(!0):S=u.run():o?o(E.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function mi(t,e=1/0,n){if(e<=0||!St(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Qt(t))mi(t.value,e,n);else if($e(t))for(let i=0;i<t.length;i++)mi(t[i],e,n);else if(na(t)||Ns(t))t.forEach(i=>{mi(i,e,n)});else if(th(t)){for(const i in t)mi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&mi(t[i],e,n)}return t}function Nr(t,e,n,i){try{return i?t(...i):t()}catch(s){ca(s,e,n)}}function ei(t,e,n,i){if(nt(t)){const s=Nr(t,e,n,i);return s&&Qd(s)&&s.catch(r=>{ca(r,e,n)}),s}if($e(t)){const s=[];for(let r=0;r<t.length;r++)s.push(ei(t[r],e,n,i));return s}}function ca(t,e,n,i=!0){const s=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Et;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(r){Si(),Nr(r,null,10,[t,l,c]),bi();return}}ag(t,n,s,i,o)}function ag(t,e,n,i=!0,s=!1){if(s)throw t;console.error(t)}const rn=[];let Gn=-1;const Fs=[];let Oi=null,Ds=0;const yh=Promise.resolve();let Bo=null;function Hc(t){const e=Bo||yh;return t?e.then(this?t.bind(this):t):e}function lg(t){let e=Gn+1,n=rn.length;for(;e<n;){const i=e+n>>>1,s=rn[i],r=Tr(s);r<t||r===t&&s.flags&2?e=i+1:n=i}return e}function Vc(t){if(!(t.flags&1)){const e=Tr(t),n=rn[rn.length-1];!n||!(t.flags&2)&&e>=Tr(n)?rn.push(t):rn.splice(lg(e),0,t),t.flags|=1,Mh()}}function Mh(){Bo||(Bo=yh.then(Th))}function cg(t){$e(t)?Fs.push(...t):Oi&&t.id===-1?Oi.splice(Ds+1,0,t):t.flags&1||(Fs.push(t),t.flags|=1),Mh()}function Vu(t,e,n=Gn+1){for(;n<rn.length;n++){const i=rn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;rn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Eh(t){if(Fs.length){const e=[...new Set(Fs)].sort((n,i)=>Tr(n)-Tr(i));if(Fs.length=0,Oi){Oi.push(...e);return}for(Oi=e,Ds=0;Ds<Oi.length;Ds++){const n=Oi[Ds];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Oi=null,Ds=0}}const Tr=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Th(t){try{for(Gn=0;Gn<rn.length;Gn++){const e=rn[Gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Nr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Gn<rn.length;Gn++){const e=rn[Gn];e&&(e.flags&=-2)}Gn=-1,rn.length=0,Eh(),Bo=null,(rn.length||Fs.length)&&Th()}}let Zt=null,Ah=null;function ko(t){const e=Zt;return Zt=t,Ah=t&&t.type.__scopeId||null,e}function ug(t,e=Zt,n){if(!e||t._n)return t;const i=(...s)=>{i._d&&Qu(-1);const r=ko(e);let o;try{o=t(...s)}finally{ko(r),i._d&&Qu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ia(t,e){if(Zt===null)return t;const n=pa(Zt),i=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=Et]=e[s];r&&(nt(r)&&(r={mounted:r,updated:r}),r.deep&&mi(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function qi(t,e,n,i){const s=t.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Si(),ei(l,n,8,[t.el,a,t,e]),bi())}}function fg(t,e){if(on){let n=on.provides;const i=on.parent&&on.parent.provides;i===n&&(n=on.provides=Object.create(i)),n[t]=e}}function Eo(t,e,n=!1){const i=u_();if(i||Bs){let s=Bs?Bs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&nt(e)?e.call(i&&i.proxy):e}}const dg=Symbol.for("v-scx"),hg=()=>Eo(dg);function as(t,e,n){return wh(t,e,n)}function wh(t,e,n=Et){const{immediate:i,deep:s,flush:r,once:o}=n,a=en({},n),l=e&&i||!e&&r!=="post";let c;if(Rr){if(r==="sync"){const h=hg();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Zn,h.resume=Zn,h.pause=Zn,h}}const u=on;a.call=(h,g,_)=>ei(h,u,g,_);let f=!1;r==="post"?a.scheduler=h=>{fn(h,u&&u.suspense)}:r!=="sync"&&(f=!0,a.scheduler=(h,g)=>{g?h():Vc(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=og(t,e,a);return Rr&&(c?c.push(d):l&&d()),d}function pg(t,e,n){const i=this.proxy,s=Lt(t)?t.includes(".")?Rh(i,t):()=>i[t]:t.bind(i,i);let r;nt(e)?r=e:(r=e.handler,n=e);const o=Fr(this),a=wh(s,r.bind(i),n);return o(),a}function Rh(t,e){const n=e.split(".");return()=>{let i=t;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const mg=Symbol("_vte"),gg=t=>t.__isTeleport,_g=Symbol("_leaveCb");function Gc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Gc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ch(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Gu(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const zo=new WeakMap;function _r(t,e,n,i,s=!1){if($e(t)){t.forEach((_,m)=>_r(_,e&&($e(e)?e[m]:e),n,i,s));return}if(Os(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&_r(t,e,n,i.component.subTree);return}const r=i.shapeFlag&4?pa(i.component):i.el,o=s?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Et?a.refs={}:a.refs,f=a.setupState,d=ht(f),h=f===Et?Jd:_=>Gu(u,_)?!1:pt(d,_),g=(_,m)=>!(m&&Gu(u,m));if(c!=null&&c!==l){if(Wu(e),Lt(c))u[c]=null,h(c)&&(f[c]=null);else if(Qt(c)){const _=e;g(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(nt(l))Nr(l,a,12,[o,u]);else{const _=Lt(l),m=Qt(l);if(_||m){const p=()=>{if(t.f){const S=_?h(l)?f[l]:u[l]:g()||!t.k?l.value:u[t.k];if(s)$e(S)&&Lc(S,r);else if($e(S))S.includes(r)||S.push(r);else if(_)u[l]=[r],h(l)&&(f[l]=u[l]);else{const E=[r];g(l,t.k)&&(l.value=E),t.k&&(u[t.k]=E)}}else _?(u[l]=o,h(l)&&(f[l]=o)):m&&(g(l,t.k)&&(l.value=o),t.k&&(u[t.k]=o))};if(o){const S=()=>{p(),zo.delete(t)};S.id=-1,zo.set(t,S),fn(S,n)}else Wu(t),p()}}}function Wu(t){const e=zo.get(t);e&&(e.flags|=8,zo.delete(t))}ra().requestIdleCallback;ra().cancelIdleCallback;const Os=t=>!!t.type.__asyncLoader,Ph=t=>t.type.__isKeepAlive;function xg(t,e){Dh(t,"a",e)}function vg(t,e){Dh(t,"da",e)}function Dh(t,e,n=on){const i=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ua(e,i,n),n){let s=n.parent;for(;s&&s.parent;)Ph(s.parent.vnode)&&Sg(i,e,n,s),s=s.parent}}function Sg(t,e,n,i){const s=ua(e,t,i,!0);fa(()=>{Lc(i[e],s)},n)}function ua(t,e,n=on,i=!1){if(n){const s=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Si();const a=Fr(n),l=ei(e,n,t,o);return a(),bi(),l});return i?s.unshift(r):s.push(r),r}}const wi=t=>(e,n=on)=>{(!Rr||t==="sp")&&ua(t,(...i)=>e(...i),n)},bg=wi("bm"),Wc=wi("m"),yg=wi("bu"),Mg=wi("u"),Eg=wi("bum"),fa=wi("um"),Tg=wi("sp"),Ag=wi("rtg"),wg=wi("rtc");function Rg(t,e=on){ua("ec",t,e)}const Cg=Symbol.for("v-ndc");function Ar(t,e,n,i){let s;const r=n,o=$e(t);if(o||Lt(t)){const a=o&&os(t);let l=!1,c=!1;a&&(l=!wn(t),c=yi(t),t=aa(t)),s=new Array(t.length);for(let u=0,f=t.length;u<f;u++)s[u]=e(l?c?Gs(Fn(t[u])):Fn(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){s=new Array(t);for(let a=0;a<t;a++)s[a]=e(a+1,a,void 0,r)}else if(St(t))if(t[Symbol.iterator])s=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(t[u],u,l,r)}}else s=[];return s}function Pg(t,e,n={},i,s){if(Zt.ce||Zt.parent&&Os(Zt.parent)&&Zt.parent.ce){const c=Object.keys(n).length>0;return Ue(),jn(Vt,null,[ot("slot",n,i)],c?-2:64)}let r=t[e];r&&r._c&&(r._d=!1),Ue();const o=r&&Lh(r(n)),a=n.key||o&&o.key,l=jn(Vt,{key:(a&&!Nn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),r&&r._c&&(r._d=!0),l}function Lh(t){return t.some(e=>$c(e)?!(e.type===Mi||e.type===Vt&&!Lh(e.children)):!0)?t:null}const Cl=t=>t?Jh(t)?pa(t):Cl(t.parent):null,xr=en(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Cl(t.parent),$root:t=>Cl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Uh(t),$forceUpdate:t=>t.f||(t.f=()=>{Vc(t.update)}),$nextTick:t=>t.n||(t.n=Hc.bind(t.proxy)),$watch:t=>pg.bind(t)}),Ua=(t,e)=>t!==Et&&!t.__isScriptSetup&&pt(t,e),Dg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return s[e];case 4:return n[e];case 3:return r[e]}else{if(Ua(i,e))return o[e]=1,i[e];if(s!==Et&&pt(s,e))return o[e]=2,s[e];if(pt(r,e))return o[e]=3,r[e];if(n!==Et&&pt(n,e))return o[e]=4,n[e];Pl&&(o[e]=0)}}const c=xr[e];let u,f;if(c)return e==="$attrs"&&Yt(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==Et&&pt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,pt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:s,ctx:r}=t;return Ua(s,e)?(s[e]=n,!0):i!==Et&&pt(i,e)?(i[e]=n,!0):pt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||t!==Et&&a[0]!=="$"&&pt(t,a)||Ua(e,a)||pt(r,a)||pt(i,a)||pt(xr,a)||pt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:pt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Xu(t){return $e(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Pl=!0;function Lg(t){const e=Uh(t),n=t.proxy,i=t.ctx;Pl=!1,e.beforeCreate&&qu(e.beforeCreate,t,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:S,destroyed:E,unmounted:M,render:D,renderTracked:T,renderTriggered:L,errorCaptured:v,serverPrefetch:R,expose:B,inheritAttrs:C,components:V,directives:W,filters:k}=e;if(c&&Ig(c,i,null),o)for(const U in o){const K=o[U];nt(K)&&(i[U]=K.bind(n))}if(s){const U=s.call(n,n);St(U)&&(t.data=la(U))}if(Pl=!0,r)for(const U in r){const K=r[U],ce=nt(K)?K.bind(n,n):nt(K.get)?K.get.bind(n,n):Zn,de=!nt(K)&&nt(K.set)?K.set.bind(n):Zn,Ee=ep({get:ce,set:de});Object.defineProperty(i,U,{enumerable:!0,configurable:!0,get:()=>Ee.value,set:Ce=>Ee.value=Ce})}if(a)for(const U in a)Ih(a[U],i,n,U);if(l){const U=nt(l)?l.call(n):l;Reflect.ownKeys(U).forEach(K=>{fg(K,U[K])})}u&&qu(u,t,"c");function N(U,K){$e(K)?K.forEach(ce=>U(ce.bind(n))):K&&U(K.bind(n))}if(N(bg,f),N(Wc,d),N(yg,h),N(Mg,g),N(xg,_),N(vg,m),N(Rg,v),N(wg,T),N(Ag,L),N(Eg,S),N(fa,M),N(Tg,R),$e(B))if(B.length){const U=t.exposed||(t.exposed={});B.forEach(K=>{Object.defineProperty(U,K,{get:()=>n[K],set:ce=>n[K]=ce,enumerable:!0})})}else t.exposed||(t.exposed={});D&&t.render===Zn&&(t.render=D),C!=null&&(t.inheritAttrs=C),V&&(t.components=V),W&&(t.directives=W),R&&Ch(t)}function Ig(t,e,n=Zn){$e(t)&&(t=Dl(t));for(const i in t){const s=t[i];let r;St(s)?"default"in s?r=Eo(s.from||i,s.default,!0):r=Eo(s.from||i):r=Eo(s),Qt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function qu(t,e,n){ei($e(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ih(t,e,n,i){let s=i.includes(".")?Rh(n,i):()=>n[i];if(Lt(t)){const r=e[t];nt(r)&&as(s,r)}else if(nt(t))as(s,t.bind(n));else if(St(t))if($e(t))t.forEach(r=>Ih(r,e,n,i));else{const r=nt(t.handler)?t.handler.bind(n):e[t.handler];nt(r)&&as(s,r,t)}}function Uh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!n&&!i?l=e:(l={},s.length&&s.forEach(c=>Ho(l,c,o,!0)),Ho(l,e,o)),St(e)&&r.set(e,l),l}function Ho(t,e,n,i=!1){const{mixins:s,extends:r}=e;r&&Ho(t,r,n,!0),s&&s.forEach(o=>Ho(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Ug[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Ug={data:$u,props:ju,emits:ju,methods:ur,computed:ur,beforeCreate:tn,created:tn,beforeMount:tn,mounted:tn,beforeUpdate:tn,updated:tn,beforeDestroy:tn,beforeUnmount:tn,destroyed:tn,unmounted:tn,activated:tn,deactivated:tn,errorCaptured:tn,serverPrefetch:tn,components:ur,directives:ur,watch:Fg,provide:$u,inject:Ng};function $u(t,e){return e?t?function(){return en(nt(t)?t.call(this,this):t,nt(e)?e.call(this,this):e)}:e:t}function Ng(t,e){return ur(Dl(t),Dl(e))}function Dl(t){if($e(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function tn(t,e){return t?[...new Set([].concat(t,e))]:e}function ur(t,e){return t?en(Object.create(null),t,e):e}function ju(t,e){return t?$e(t)&&$e(e)?[...new Set([...t,...e])]:en(Object.create(null),Xu(t),Xu(e??{})):e}function Fg(t,e){if(!t)return e;if(!e)return t;const n=en(Object.create(null),t);for(const i in e)n[i]=tn(t[i],e[i]);return n}function Nh(){return{app:null,config:{isNativeTag:Jd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Og=0;function Bg(t,e){return function(i,s=null){nt(i)||(i=en({},i)),s!=null&&!St(s)&&(s=null);const r=Nh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Og++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:g_,get config(){return r.config},set config(u){},use(u,...f){return o.has(u)||(u&&nt(u.install)?(o.add(u),u.install(c,...f)):nt(u)&&(o.add(u),u(c,...f))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,f){return f?(r.components[u]=f,c):r.components[u]},directive(u,f){return f?(r.directives[u]=f,c):r.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||ot(i,s);return h.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),t(h,u,d),l=!0,c._container=u,u.__vue_app__=c,pa(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(ei(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return r.provides[u]=f,c},runWithContext(u){const f=Bs;Bs=c;try{return u()}finally{Bs=f}}};return c}}let Bs=null;const kg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${In(e)}Modifiers`]||t[`${ds(e)}Modifiers`];function zg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Et;let s=n;const r=e.startsWith("update:"),o=r&&kg(i,e.slice(7));o&&(o.trim&&(s=n.map(u=>Lt(u)?u.trim():u)),o.number&&(s=n.map(sa)));let a,l=i[a=Ra(e)]||i[a=Ra(In(e))];!l&&r&&(l=i[a=Ra(ds(e))]),l&&ei(l,t,6,s);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,ei(c,t,6,s)}}const Hg=new WeakMap;function Fh(t,e,n=!1){const i=n?Hg:e.emitsCache,s=i.get(t);if(s!==void 0)return s;const r=t.emits;let o={},a=!1;if(!nt(t)){const l=c=>{const u=Fh(c,e,!0);u&&(a=!0,en(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(St(t)&&i.set(t,null),null):($e(r)?r.forEach(l=>o[l]=null):en(o,r),St(t)&&i.set(t,o),o)}function da(t,e){return!t||!ea(e)?!1:(e=e.slice(2).replace(/Once$/,""),pt(t,e[0].toLowerCase()+e.slice(1))||pt(t,ds(e))||pt(t,e))}function Yu(t){const{type:e,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:_}=t,m=ko(t);let p,S;try{if(n.shapeFlag&4){const M=s||i,D=M;p=Xn(c.call(D,M,u,f,h,d,g)),S=a}else{const M=e;p=Xn(M.length>1?M(f,{attrs:a,slots:o,emit:l}):M(f,null)),S=e.props?a:Vg(a)}}catch(M){vr.length=0,ca(M,t,1),p=ot(Mi)}let E=p;if(S&&_!==!1){const M=Object.keys(S),{shapeFlag:D}=E;M.length&&D&7&&(r&&M.some(ta)&&(S=Gg(S,r)),E=Ws(E,S,!1,!0))}return n.dirs&&(E=Ws(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&Gc(E,n.transition),p=E,ko(m),p}const Vg=t=>{let e;for(const n in t)(n==="class"||n==="style"||ea(n))&&((e||(e={}))[n]=t[n]);return e},Gg=(t,e)=>{const n={};for(const i in t)(!ta(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Wg(t,e,n){const{props:i,children:s,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Ku(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(Oh(o,i,d)&&!da(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ku(i,o,c):!0:!!o;return!1}function Ku(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Oh(e,t,r)&&!da(n,r))return!0}return!1}function Oh(t,e,n){const i=t[n],s=e[n];return n==="style"&&St(i)&&St(s)?!Ur(i,s):i!==s}function Xg({vnode:t,parent:e,suspense:n},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=i,t=s),s===t)(t=e.vnode).el=i,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=i)}const Bh={},kh=()=>Object.create(Bh),zh=t=>Object.getPrototypeOf(t)===Bh;function qg(t,e,n,i=!1){const s={},r=kh();t.propsDefaults=Object.create(null),Hh(t,e,s,r);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=i?s:Jm(s):t.type.props?t.props=s:t.props=r,t.attrs=r}function $g(t,e,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=t,a=ht(s),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(da(t.emitsOptions,d))continue;const h=e[d];if(l)if(pt(r,d))h!==r[d]&&(r[d]=h,c=!0);else{const g=In(d);s[g]=Ll(l,a,g,h,t,!1)}else h!==r[d]&&(r[d]=h,c=!0)}}}else{Hh(t,e,s,r)&&(c=!0);let u;for(const f in a)(!e||!pt(e,f)&&((u=ds(f))===f||!pt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(s[f]=Ll(l,a,f,void 0,t,!0)):delete s[f]);if(r!==a)for(const f in r)(!e||!pt(e,f))&&(delete r[f],c=!0)}c&&pi(t.attrs,"set","")}function Hh(t,e,n,i){const[s,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(pr(l))continue;const c=e[l];let u;s&&pt(s,u=In(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:da(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=ht(n),c=a||Et;for(let u=0;u<r.length;u++){const f=r[u];n[f]=Ll(s,l,f,c[f],t,!pt(c,f))}}return o}function Ll(t,e,n,i,s,r){const o=t[n];if(o!=null){const a=pt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&nt(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const u=Fr(s);i=c[n]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ds(n))&&(i=!0))}return i}const jg=new WeakMap;function Vh(t,e,n=!1){const i=n?jg:e.propsCache,s=i.get(t);if(s)return s;const r=t.props,o={},a=[];let l=!1;if(!nt(t)){const u=f=>{l=!0;const[d,h]=Vh(f,e,!0);en(o,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return St(t)&&i.set(t,Us),Us;if($e(r))for(let u=0;u<r.length;u++){const f=In(r[u]);Zu(f)&&(o[f]=Et)}else if(r)for(const u in r){const f=In(u);if(Zu(f)){const d=r[u],h=o[f]=$e(d)||nt(d)?{type:d}:en({},d),g=h.type;let _=!1,m=!0;if($e(g))for(let p=0;p<g.length;++p){const S=g[p],E=nt(S)&&S.name;if(E==="Boolean"){_=!0;break}else E==="String"&&(m=!1)}else _=nt(g)&&g.name==="Boolean";h[0]=_,h[1]=m,(_||pt(h,"default"))&&a.push(f)}}const c=[o,a];return St(t)&&i.set(t,c),c}function Zu(t){return t[0]!=="$"&&!pr(t)}const Xc=t=>t==="_"||t==="_ctx"||t==="$stable",qc=t=>$e(t)?t.map(Xn):[Xn(t)],Yg=(t,e,n)=>{if(e._n)return e;const i=ug((...s)=>qc(e(...s)),n);return i._c=!1,i},Gh=(t,e,n)=>{const i=t._ctx;for(const s in t){if(Xc(s))continue;const r=t[s];if(nt(r))e[s]=Yg(s,r,i);else if(r!=null){const o=qc(r);e[s]=()=>o}}},Wh=(t,e)=>{const n=qc(e);t.slots.default=()=>n},Xh=(t,e,n)=>{for(const i in e)(n||!Xc(i))&&(t[i]=e[i])},Kg=(t,e,n)=>{const i=t.slots=kh();if(t.vnode.shapeFlag&32){const s=e._;s?(Xh(i,e,n),n&&ih(i,"_",s,!0)):Gh(e,i)}else e&&Wh(t,e)},Zg=(t,e,n)=>{const{vnode:i,slots:s}=t;let r=!0,o=Et;if(i.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Xh(s,e,n):(r=!e.$stable,Gh(e,s)),o=e}else e&&(Wh(t,e),o={default:1});if(r)for(const a in s)!Xc(a)&&o[a]==null&&delete s[a]},fn=n_;function Jg(t){return Qg(t)}function Qg(t,e){const n=ra();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=Zn,insertStaticContent:g}=t,_=(w,I,X,te=null,Z=null,se=null,fe=void 0,ge=null,A=!!I.dynamicChildren)=>{if(w===I)return;w&&!tr(w,I)&&(te=xe(w),Ce(w,Z,se,!0),w=null),I.patchFlag===-2&&(A=!1,I.dynamicChildren=null);const{type:re,ref:ve,shapeFlag:he}=I;switch(re){case ha:m(w,I,X,te);break;case Mi:p(w,I,X,te);break;case To:w==null&&S(I,X,te,fe);break;case Vt:V(w,I,X,te,Z,se,fe,ge,A);break;default:he&1?D(w,I,X,te,Z,se,fe,ge,A):he&6?W(w,I,X,te,Z,se,fe,ge,A):(he&64||he&128)&&re.process(w,I,X,te,Z,se,fe,ge,A,Ge)}ve!=null&&Z?_r(ve,w&&w.ref,se,I||w,!I):ve==null&&w&&w.ref!=null&&_r(w.ref,null,se,w,!0)},m=(w,I,X,te)=>{if(w==null)i(I.el=a(I.children),X,te);else{const Z=I.el=w.el;I.children!==w.children&&c(Z,I.children)}},p=(w,I,X,te)=>{w==null?i(I.el=l(I.children||""),X,te):I.el=w.el},S=(w,I,X,te)=>{[w.el,w.anchor]=g(w.children,I,X,te,w.el,w.anchor)},E=({el:w,anchor:I},X,te)=>{let Z;for(;w&&w!==I;)Z=d(w),i(w,X,te),w=Z;i(I,X,te)},M=({el:w,anchor:I})=>{let X;for(;w&&w!==I;)X=d(w),s(w),w=X;s(I)},D=(w,I,X,te,Z,se,fe,ge,A)=>{if(I.type==="svg"?fe="svg":I.type==="math"&&(fe="mathml"),w==null)T(I,X,te,Z,se,fe,ge,A);else{const re=w.el&&w.el._isVueCE?w.el:null;try{re&&re._beginPatch(),R(w,I,Z,se,fe,ge,A)}finally{re&&re._endPatch()}}},T=(w,I,X,te,Z,se,fe,ge)=>{let A,re;const{props:ve,shapeFlag:he,transition:ee,dirs:Pe}=w;if(A=w.el=o(w.type,se,ve&&ve.is,ve),he&8?u(A,w.children):he&16&&v(w.children,A,null,te,Z,Na(w,se),fe,ge),Pe&&qi(w,null,te,"created"),L(A,w,w.scopeId,fe,te),ve){for(const x in ve)x!=="value"&&!pr(x)&&r(A,x,null,ve[x],se,te);"value"in ve&&r(A,"value",null,ve.value,se),(re=ve.onVnodeBeforeMount)&&zn(re,te,w)}Pe&&qi(w,null,te,"beforeMount");const y=e_(Z,ee);y&&ee.beforeEnter(A),i(A,I,X),((re=ve&&ve.onVnodeMounted)||y||Pe)&&fn(()=>{re&&zn(re,te,w),y&&ee.enter(A),Pe&&qi(w,null,te,"mounted")},Z)},L=(w,I,X,te,Z)=>{if(X&&h(w,X),te)for(let se=0;se<te.length;se++)h(w,te[se]);if(Z){let se=Z.subTree;if(I===se||Yh(se.type)&&(se.ssContent===I||se.ssFallback===I)){const fe=Z.vnode;L(w,fe,fe.scopeId,fe.slotScopeIds,Z.parent)}}},v=(w,I,X,te,Z,se,fe,ge,A=0)=>{for(let re=A;re<w.length;re++){const ve=w[re]=ge?hi(w[re]):Xn(w[re]);_(null,ve,I,X,te,Z,se,fe,ge)}},R=(w,I,X,te,Z,se,fe)=>{const ge=I.el=w.el;let{patchFlag:A,dynamicChildren:re,dirs:ve}=I;A|=w.patchFlag&16;const he=w.props||Et,ee=I.props||Et;let Pe;if(X&&$i(X,!1),(Pe=ee.onVnodeBeforeUpdate)&&zn(Pe,X,I,w),ve&&qi(I,w,X,"beforeUpdate"),X&&$i(X,!0),(he.innerHTML&&ee.innerHTML==null||he.textContent&&ee.textContent==null)&&u(ge,""),re?B(w.dynamicChildren,re,ge,X,te,Na(I,Z),se):fe||K(w,I,ge,null,X,te,Na(I,Z),se,!1),A>0){if(A&16)C(ge,he,ee,X,Z);else if(A&2&&he.class!==ee.class&&r(ge,"class",null,ee.class,Z),A&4&&r(ge,"style",he.style,ee.style,Z),A&8){const y=I.dynamicProps;for(let x=0;x<y.length;x++){const O=y[x],J=he[O],oe=ee[O];(oe!==J||O==="value")&&r(ge,O,J,oe,Z,X)}}A&1&&w.children!==I.children&&u(ge,I.children)}else!fe&&re==null&&C(ge,he,ee,X,Z);((Pe=ee.onVnodeUpdated)||ve)&&fn(()=>{Pe&&zn(Pe,X,I,w),ve&&qi(I,w,X,"updated")},te)},B=(w,I,X,te,Z,se,fe)=>{for(let ge=0;ge<I.length;ge++){const A=w[ge],re=I[ge],ve=A.el&&(A.type===Vt||!tr(A,re)||A.shapeFlag&198)?f(A.el):X;_(A,re,ve,null,te,Z,se,fe,!0)}},C=(w,I,X,te,Z)=>{if(I!==X){if(I!==Et)for(const se in I)!pr(se)&&!(se in X)&&r(w,se,I[se],null,Z,te);for(const se in X){if(pr(se))continue;const fe=X[se],ge=I[se];fe!==ge&&se!=="value"&&r(w,se,ge,fe,Z,te)}"value"in X&&r(w,"value",I.value,X.value,Z)}},V=(w,I,X,te,Z,se,fe,ge,A)=>{const re=I.el=w?w.el:a(""),ve=I.anchor=w?w.anchor:a("");let{patchFlag:he,dynamicChildren:ee,slotScopeIds:Pe}=I;Pe&&(ge=ge?ge.concat(Pe):Pe),w==null?(i(re,X,te),i(ve,X,te),v(I.children||[],X,ve,Z,se,fe,ge,A)):he>0&&he&64&&ee&&w.dynamicChildren&&w.dynamicChildren.length===ee.length?(B(w.dynamicChildren,ee,X,Z,se,fe,ge),(I.key!=null||Z&&I===Z.subTree)&&qh(w,I,!0)):K(w,I,X,ve,Z,se,fe,ge,A)},W=(w,I,X,te,Z,se,fe,ge,A)=>{I.slotScopeIds=ge,w==null?I.shapeFlag&512?Z.ctx.activate(I,X,te,fe,A):k(I,X,te,Z,se,fe,A):P(w,I,A)},k=(w,I,X,te,Z,se,fe)=>{const ge=w.component=c_(w,te,Z);if(Ph(w)&&(ge.ctx.renderer=Ge),f_(ge,!1,fe),ge.asyncDep){if(Z&&Z.registerDep(ge,N,fe),!w.el){const A=ge.subTree=ot(Mi);p(null,A,I,X),w.placeholder=A.el}}else N(ge,w,I,X,Z,se,fe)},P=(w,I,X)=>{const te=I.component=w.component;if(Wg(w,I,X))if(te.asyncDep&&!te.asyncResolved){U(te,I,X);return}else te.next=I,te.update();else I.el=w.el,te.vnode=I},N=(w,I,X,te,Z,se,fe)=>{const ge=()=>{if(w.isMounted){let{next:he,bu:ee,u:Pe,parent:y,vnode:x}=w;{const me=$h(w);if(me){he&&(he.el=x.el,U(w,he,fe)),me.asyncDep.then(()=>{fn(()=>{w.isUnmounted||re()},Z)});return}}let O=he,J;$i(w,!1),he?(he.el=x.el,U(w,he,fe)):he=x,ee&&Mo(ee),(J=he.props&&he.props.onVnodeBeforeUpdate)&&zn(J,y,he,x),$i(w,!0);const oe=Yu(w),pe=w.subTree;w.subTree=oe,_(pe,oe,f(pe.el),xe(pe),w,Z,se),he.el=oe.el,O===null&&Xg(w,oe.el),Pe&&fn(Pe,Z),(J=he.props&&he.props.onVnodeUpdated)&&fn(()=>zn(J,y,he,x),Z)}else{let he;const{el:ee,props:Pe}=I,{bm:y,m:x,parent:O,root:J,type:oe}=w,pe=Os(I);$i(w,!1),y&&Mo(y),!pe&&(he=Pe&&Pe.onVnodeBeforeMount)&&zn(he,O,I),$i(w,!0);{J.ce&&J.ce._hasShadowRoot()&&J.ce._injectChildStyle(oe,w.parent?w.parent.type:void 0);const me=w.subTree=Yu(w);_(null,me,X,te,w,Z,se),I.el=me.el}if(x&&fn(x,Z),!pe&&(he=Pe&&Pe.onVnodeMounted)){const me=I;fn(()=>zn(he,O,me),Z)}(I.shapeFlag&256||O&&Os(O.vnode)&&O.vnode.shapeFlag&256)&&w.a&&fn(w.a,Z),w.isMounted=!0,I=X=te=null}};w.scope.on();const A=w.effect=new ah(ge);w.scope.off();const re=w.update=A.run.bind(A),ve=w.job=A.runIfDirty.bind(A);ve.i=w,ve.id=w.uid,A.scheduler=()=>Vc(ve),$i(w,!0),re()},U=(w,I,X)=>{I.component=w;const te=w.vnode.props;w.vnode=I,w.next=null,$g(w,I.props,te,X),Zg(w,I.children,X),Si(),Vu(w),bi()},K=(w,I,X,te,Z,se,fe,ge,A=!1)=>{const re=w&&w.children,ve=w?w.shapeFlag:0,he=I.children,{patchFlag:ee,shapeFlag:Pe}=I;if(ee>0){if(ee&128){de(re,he,X,te,Z,se,fe,ge,A);return}else if(ee&256){ce(re,he,X,te,Z,se,fe,ge,A);return}}Pe&8?(ve&16&&ne(re,Z,se),he!==re&&u(X,he)):ve&16?Pe&16?de(re,he,X,te,Z,se,fe,ge,A):ne(re,Z,se,!0):(ve&8&&u(X,""),Pe&16&&v(he,X,te,Z,se,fe,ge,A))},ce=(w,I,X,te,Z,se,fe,ge,A)=>{w=w||Us,I=I||Us;const re=w.length,ve=I.length,he=Math.min(re,ve);let ee;for(ee=0;ee<he;ee++){const Pe=I[ee]=A?hi(I[ee]):Xn(I[ee]);_(w[ee],Pe,X,null,Z,se,fe,ge,A)}re>ve?ne(w,Z,se,!0,!1,he):v(I,X,te,Z,se,fe,ge,A,he)},de=(w,I,X,te,Z,se,fe,ge,A)=>{let re=0;const ve=I.length;let he=w.length-1,ee=ve-1;for(;re<=he&&re<=ee;){const Pe=w[re],y=I[re]=A?hi(I[re]):Xn(I[re]);if(tr(Pe,y))_(Pe,y,X,null,Z,se,fe,ge,A);else break;re++}for(;re<=he&&re<=ee;){const Pe=w[he],y=I[ee]=A?hi(I[ee]):Xn(I[ee]);if(tr(Pe,y))_(Pe,y,X,null,Z,se,fe,ge,A);else break;he--,ee--}if(re>he){if(re<=ee){const Pe=ee+1,y=Pe<ve?I[Pe].el:te;for(;re<=ee;)_(null,I[re]=A?hi(I[re]):Xn(I[re]),X,y,Z,se,fe,ge,A),re++}}else if(re>ee)for(;re<=he;)Ce(w[re],Z,se,!0),re++;else{const Pe=re,y=re,x=new Map;for(re=y;re<=ee;re++){const Se=I[re]=A?hi(I[re]):Xn(I[re]);Se.key!=null&&x.set(Se.key,re)}let O,J=0;const oe=ee-y+1;let pe=!1,me=0;const Q=new Array(oe);for(re=0;re<oe;re++)Q[re]=0;for(re=Pe;re<=he;re++){const Se=w[re];if(J>=oe){Ce(Se,Z,se,!0);continue}let Te;if(Se.key!=null)Te=x.get(Se.key);else for(O=y;O<=ee;O++)if(Q[O-y]===0&&tr(Se,I[O])){Te=O;break}Te===void 0?Ce(Se,Z,se,!0):(Q[Te-y]=re+1,Te>=me?me=Te:pe=!0,_(Se,I[Te],X,null,Z,se,fe,ge,A),J++)}const ae=pe?t_(Q):Us;for(O=ae.length-1,re=oe-1;re>=0;re--){const Se=y+re,Te=I[Se],be=I[Se+1],_e=Se+1<ve?be.el||jh(be):te;Q[re]===0?_(null,Te,X,_e,Z,se,fe,ge,A):pe&&(O<0||re!==ae[O]?Ee(Te,X,_e,2):O--)}}},Ee=(w,I,X,te,Z=null)=>{const{el:se,type:fe,transition:ge,children:A,shapeFlag:re}=w;if(re&6){Ee(w.component.subTree,I,X,te);return}if(re&128){w.suspense.move(I,X,te);return}if(re&64){fe.move(w,I,X,Ge);return}if(fe===Vt){i(se,I,X);for(let he=0;he<A.length;he++)Ee(A[he],I,X,te);i(w.anchor,I,X);return}if(fe===To){E(w,I,X);return}if(te!==2&&re&1&&ge)if(te===0)ge.beforeEnter(se),i(se,I,X),fn(()=>ge.enter(se),Z);else{const{leave:he,delayLeave:ee,afterLeave:Pe}=ge,y=()=>{w.ctx.isUnmounted?s(se):i(se,I,X)},x=()=>{se._isLeaving&&se[_g](!0),he(se,()=>{y(),Pe&&Pe()})};ee?ee(se,y,x):x()}else i(se,I,X)},Ce=(w,I,X,te=!1,Z=!1)=>{const{type:se,props:fe,ref:ge,children:A,dynamicChildren:re,shapeFlag:ve,patchFlag:he,dirs:ee,cacheIndex:Pe,memo:y}=w;if(he===-2&&(Z=!1),ge!=null&&(Si(),_r(ge,null,X,w,!0),bi()),Pe!=null&&(I.renderCache[Pe]=void 0),ve&256){I.ctx.deactivate(w);return}const x=ve&1&&ee,O=!Os(w);let J;if(O&&(J=fe&&fe.onVnodeBeforeUnmount)&&zn(J,I,w),ve&6)Ve(w.component,X,te);else{if(ve&128){w.suspense.unmount(X,te);return}x&&qi(w,null,I,"beforeUnmount"),ve&64?w.type.remove(w,I,X,Ge,te):re&&!re.hasOnce&&(se!==Vt||he>0&&he&64)?ne(re,I,X,!1,!0):(se===Vt&&he&384||!Z&&ve&16)&&ne(A,I,X),te&&Xe(w)}const oe=y!=null&&Pe==null;(O&&(J=fe&&fe.onVnodeUnmounted)||x||oe)&&fn(()=>{J&&zn(J,I,w),x&&qi(w,null,I,"unmounted"),oe&&(w.el=null)},X)},Xe=w=>{const{type:I,el:X,anchor:te,transition:Z}=w;if(I===Vt){st(X,te);return}if(I===To){M(w);return}const se=()=>{s(X),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(w.shapeFlag&1&&Z&&!Z.persisted){const{leave:fe,delayLeave:ge}=Z,A=()=>fe(X,se);ge?ge(w.el,se,A):A()}else se()},st=(w,I)=>{let X;for(;w!==I;)X=d(w),s(w),w=X;s(I)},Ve=(w,I,X)=>{const{bum:te,scope:Z,job:se,subTree:fe,um:ge,m:A,a:re}=w;Ju(A),Ju(re),te&&Mo(te),Z.stop(),se&&(se.flags|=8,Ce(fe,w,I,X)),ge&&fn(ge,I),fn(()=>{w.isUnmounted=!0},I)},ne=(w,I,X,te=!1,Z=!1,se=0)=>{for(let fe=se;fe<w.length;fe++)Ce(w[fe],I,X,te,Z)},xe=w=>{if(w.shapeFlag&6)return xe(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const I=d(w.anchor||w.el),X=I&&I[mg];return X?d(X):I};let le=!1;const Oe=(w,I,X)=>{let te;w==null?I._vnode&&(Ce(I._vnode,null,null,!0),te=I._vnode.component):_(I._vnode||null,w,I,null,null,null,X),I._vnode=w,le||(le=!0,Vu(te),Eh(),le=!1)},Ge={p:_,um:Ce,m:Ee,r:Xe,mt:k,mc:v,pc:K,pbc:B,n:xe,o:t};return{render:Oe,hydrate:void 0,createApp:Bg(Oe)}}function Na({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function $i({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function e_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function qh(t,e,n=!1){const i=t.children,s=e.children;if($e(i)&&$e(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=hi(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&qh(o,a)),a.type===ha&&(a.patchFlag===-1&&(a=s[r]=hi(a)),a.el=o.el),a.type===Mi&&!a.el&&(a.el=o.el)}}function t_(t){const e=t.slice(),n=[0];let i,s,r,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(s=n[n.length-1],t[s]<c){e[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function $h(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$h(e)}function Ju(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function jh(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?jh(e.subTree):null}const Yh=t=>t.__isSuspense;function n_(t,e){e&&e.pendingBranch?$e(t)?e.effects.push(...t):e.effects.push(t):cg(t)}const Vt=Symbol.for("v-fgt"),ha=Symbol.for("v-txt"),Mi=Symbol.for("v-cmt"),To=Symbol.for("v-stc"),vr=[];let vn=null;function Ue(t=!1){vr.push(vn=t?null:[])}function i_(){vr.pop(),vn=vr[vr.length-1]||null}let wr=1;function Qu(t,e=!1){wr+=t,t<0&&vn&&e&&(vn.hasOnce=!0)}function Kh(t){return t.dynamicChildren=wr>0?vn||Us:null,i_(),wr>0&&vn&&vn.push(t),t}function He(t,e,n,i,s,r){return Kh(j(t,e,n,i,s,r,!0))}function jn(t,e,n,i,s){return Kh(ot(t,e,n,i,s,!0))}function $c(t){return t?t.__v_isVNode===!0:!1}function tr(t,e){return t.type===e.type&&t.key===e.key}const Zh=({key:t})=>t??null,Ao=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Lt(t)||Qt(t)||nt(t)?{i:Zt,r:t,k:e,f:!!n}:t:null);function j(t,e=null,n=null,i=0,s=null,r=t===Vt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Zh(e),ref:e&&Ao(e),scopeId:Ah,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Zt};return a?(Yc(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Lt(n)?8:16),wr>0&&!o&&vn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&vn.push(l),l}const ot=s_;function s_(t,e=null,n=null,i=0,s=null,r=!1){if((!t||t===Cg)&&(t=Mi),$c(t)){const a=Ws(t,e,!0);return n&&Yc(a,n),wr>0&&!r&&vn&&(a.shapeFlag&6?vn[vn.indexOf(t)]=a:vn.push(a)),a.patchFlag=-2,a}if(m_(t)&&(t=t.__vccOpts),e){e=r_(e);let{class:a,style:l}=e;a&&!Lt(a)&&(e.class=Ft(a)),St(l)&&(zc(l)&&!$e(l)&&(l=en({},l)),e.style=oa(l))}const o=Lt(t)?1:Yh(t)?128:gg(t)?64:St(t)?4:nt(t)?2:0;return j(t,e,n,i,s,o,r,!0)}function r_(t){return t?zc(t)||zh(t)?en({},t):t:null}function Ws(t,e,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?o_(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Zh(c),ref:e&&e.ref?n&&r?$e(r)?r.concat(Ao(e)):[r,Ao(e)]:Ao(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Vt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ws(t.ssContent),ssFallback:t.ssFallback&&Ws(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Gc(u,l.clone(u)),u}function An(t=" ",e=0){return ot(ha,null,t,e)}function jc(t,e){const n=ot(To,null,t);return n.staticCount=e,n}function xt(t="",e=!1){return e?(Ue(),jn(Mi,null,t)):ot(Mi,null,t)}function Xn(t){return t==null||typeof t=="boolean"?ot(Mi):$e(t)?ot(Vt,null,t.slice()):$c(t)?hi(t):ot(ha,null,String(t))}function hi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ws(t)}function Yc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if($e(e))n=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),Yc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!zh(e)?e._ctx=Zt:s===3&&Zt&&(Zt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else nt(e)?(e={default:e,_ctx:Zt},n=32):(e=String(e),i&64?(n=16,e=[An(e)]):n=8);t.children=e,t.shapeFlag|=n}function o_(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Ft([e.class,i.class]));else if(s==="style")e.style=oa([e.style,i.style]);else if(ea(s)){const r=e[s],o=i[s];o&&r!==o&&!($e(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!ta(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function zn(t,e,n,i=null){ei(t,e,7,[n,i])}const a_=Nh();let l_=0;function c_(t,e,n){const i=t.type,s=(e?e.appContext:t.appContext)||a_,r={uid:l_++,vnode:t,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Lm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vh(i,s),emitsOptions:Fh(i,s),emit:null,emitted:null,propsDefaults:Et,inheritAttrs:i.inheritAttrs,ctx:Et,data:Et,props:Et,attrs:Et,slots:Et,refs:Et,setupState:Et,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=zg.bind(null,r),t.ce&&t.ce(r),r}let on=null;const u_=()=>on||Zt;let Vo,Il;{const t=ra(),e=(n,i)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Vo=e("__VUE_INSTANCE_SETTERS__",n=>on=n),Il=e("__VUE_SSR_SETTERS__",n=>Rr=n)}const Fr=t=>{const e=on;return Vo(t),t.scope.on(),()=>{t.scope.off(),Vo(e)}},ef=()=>{on&&on.scope.off(),Vo(null)};function Jh(t){return t.vnode.shapeFlag&4}let Rr=!1;function f_(t,e=!1,n=!1){e&&Il(e);const{props:i,children:s}=t.vnode,r=Jh(t);qg(t,i,r,e),Kg(t,s,n||e);const o=r?d_(t,e):void 0;return e&&Il(!1),o}function d_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Dg);const{setup:i}=n;if(i){Si();const s=t.setupContext=i.length>1?p_(t):null,r=Fr(t),o=Nr(i,t,0,[t.props,s]),a=Qd(o);if(bi(),r(),(a||t.sp)&&!Os(t)&&Ch(t),a){if(o.then(ef,ef),e)return o.then(l=>{tf(t,l)}).catch(l=>{ca(l,t,0)});t.asyncDep=o}else tf(t,o)}else Qh(t)}function tf(t,e,n){nt(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:St(e)&&(t.setupState=bh(e)),Qh(t)}function Qh(t,e,n){const i=t.type;t.render||(t.render=i.render||Zn);{const s=Fr(t);Si();try{Lg(t)}finally{bi(),s()}}}const h_={get(t,e){return Yt(t,"get",""),t[e]}};function p_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,h_),slots:t.slots,emit:t.emit,expose:e}}function pa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(bh(Qm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in xr)return xr[n](t)},has(e,n){return n in e||n in xr}})):t.proxy}function m_(t){return nt(t)&&"__vccOpts"in t}const ep=(t,e)=>sg(t,e,Rr),g_="3.5.34";let Ul;const nf=typeof window<"u"&&window.trustedTypes;if(nf)try{Ul=nf.createPolicy("vue",{createHTML:t=>t})}catch{}const tp=Ul?t=>Ul.createHTML(t):t=>t,__="http://www.w3.org/2000/svg",x_="http://www.w3.org/1998/Math/MathML",di=typeof document<"u"?document:null,sf=di&&di.createElement("template"),v_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const s=e==="svg"?di.createElementNS(__,t):e==="mathml"?di.createElementNS(x_,t):n?di.createElement(t,{is:n}):di.createElement(t);return t==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:t=>di.createTextNode(t),createComment:t=>di.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>di.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,s,r){const o=n?n.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{sf.innerHTML=tp(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=sf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},S_=Symbol("_vtc");function b_(t,e,n){const i=t[S_];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const rf=Symbol("_vod"),y_=Symbol("_vsh"),M_=Symbol(""),E_=/(?:^|;)\s*display\s*:/;function T_(t,e,n){const i=t.style,s=Lt(n);let r=!1;if(n&&!s){if(e)if(Lt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&fr(i,a,"")}else for(const o in e)n[o]==null&&fr(i,o,"");for(const o in n){o==="display"&&(r=!0);const a=n[o];a!=null?w_(t,o,!Lt(e)&&e?e[o]:void 0,a)||fr(i,o,a):fr(i,o,"")}}else if(s){if(e!==n){const o=i[M_];o&&(n+=";"+o),i.cssText=n,r=E_.test(n)}}else e&&t.removeAttribute("style");rf in t&&(t[rf]=r?i.display:"",t[y_]&&(i.display="none"))}const of=/\s*!important$/;function fr(t,e,n){if($e(n))n.forEach(i=>fr(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=A_(t,e);of.test(n)?t.setProperty(ds(i),n.replace(of,""),"important"):t[i]=n}}const af=["Webkit","Moz","ms"],Fa={};function A_(t,e){const n=Fa[e];if(n)return n;let i=In(e);if(i!=="filter"&&i in t)return Fa[e]=i;i=nh(i);for(let s=0;s<af.length;s++){const r=af[s]+i;if(r in t)return Fa[e]=r}return e}function w_(t,e,n,i){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Lt(i)&&n===i}const lf="http://www.w3.org/1999/xlink";function cf(t,e,n,i,s,r=Cm(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(lf,e.slice(6,e.length)):t.setAttributeNS(lf,e,n):n==null||r&&!sh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Nn(n)?String(n):n)}function uf(t,e,n,i,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?tp(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=sh(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Qi(t,e,n,i){t.addEventListener(e,n,i)}function R_(t,e,n,i){t.removeEventListener(e,n,i)}const ff=Symbol("_vei");function C_(t,e,n,i,s=null){const r=t[ff]||(t[ff]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=P_(e);if(i){const c=r[e]=I_(i,s);Qi(t,a,c,l)}else o&&(R_(t,a,o,l),r[e]=void 0)}}const df=/(?:Once|Passive|Capture)$/;function P_(t){let e;if(df.test(t)){e={};let i;for(;i=t.match(df);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ds(t.slice(2)),e]}let Oa=0;const D_=Promise.resolve(),L_=()=>Oa||(D_.then(()=>Oa=0),Oa=Date.now());function I_(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;ei(U_(i,n.value),e,5,[i])};return n.value=t,n.attached=L_(),n}function U_(t,e){if($e(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>s=>!s._stopped&&i&&i(s))}else return e}const hf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,N_=(t,e,n,i,s,r)=>{const o=s==="svg";e==="class"?b_(t,i,o):e==="style"?T_(t,n,i):ea(e)?ta(e)||C_(t,e,n,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):F_(t,e,i,o))?(uf(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&cf(t,e,i,o,r,e!=="value")):t._isVueCE&&(O_(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Lt(i)))?uf(t,In(e),i,r,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),cf(t,e,i,o))};function F_(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&hf(e)&&nt(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return hf(e)&&Lt(n)?!1:e in t}function O_(t,e){const n=t._def.props;if(!n)return!1;const i=In(e);return Array.isArray(n)?n.some(s=>In(s)===i):Object.keys(n).some(s=>In(s)===i)}const Go=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $e(e)?n=>Mo(e,n):e};function B_(t){t.target.composing=!0}function pf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ks=Symbol("_assign");function mf(t,e,n){return e&&(t=t.trim()),n&&(t=sa(t)),t}const k_={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t[ks]=Go(s);const r=i||s.props&&s.props.type==="number";Qi(t,e?"change":"input",o=>{o.target.composing||t[ks](mf(t.value,n,r))}),(n||r)&&Qi(t,"change",()=>{t.value=mf(t.value,n,r)}),e||(Qi(t,"compositionstart",B_),Qi(t,"compositionend",pf),Qi(t,"change",pf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(t[ks]=Go(o),t.composing)return;const a=(r||t.type==="number")&&!/^0\d/.test(t.value)?sa(t.value):t.value,l=e??"";if(a===l)return;const c=t.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===t&&t.type!=="range"&&(i&&e===n||s&&t.value.trim()===l)||(t.value=l)}},gf={deep:!0,created(t,{value:e,modifiers:{number:n}},i){const s=na(e);Qi(t,"change",()=>{const r=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?sa(Wo(o)):Wo(o));t[ks](t.multiple?s?new Set(r):r:r[0]),t._assigning=!0,Hc(()=>{t._assigning=!1})}),t[ks]=Go(i)},mounted(t,{value:e}){_f(t,e)},beforeUpdate(t,e,n){t[ks]=Go(n)},updated(t,{value:e}){t._assigning||_f(t,e)}};function _f(t,e){const n=t.multiple,i=$e(e);if(!(n&&!i&&!na(e))){for(let s=0,r=t.options.length;s<r;s++){const o=t.options[s],a=Wo(o);if(n)if(i){const l=typeof a;l==="string"||l==="number"?o.selected=e.some(c=>String(c)===String(a)):o.selected=Dm(e,a)>-1}else o.selected=e.has(a);else if(Ur(Wo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Wo(t){return"_value"in t?t._value:t.value}const z_=["ctrl","shift","alt","meta"],H_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>z_.some(n=>t[`${n}Key`]&&!e.includes(n))},xf=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((s,...r)=>{for(let o=0;o<e.length;o++){const a=H_[e[o]];if(a&&a(s,e))return}return t(s,...r)}))},V_=en({patchProp:N_},v_);let vf;function G_(){return vf||(vf=Jg(V_))}const W_=((...t)=>{const e=G_().createApp(...t),{mount:n}=e;return e.mount=i=>{const s=q_(i);if(!s)return;const r=e._component;!nt(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,X_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function X_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function q_(t){return Lt(t)?document.querySelector(t):t}const $_={class:"header-shell bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 px-6 py-6 text-white sm:px-8 sm:py-7 dark:from-indigo-900 dark:via-violet-900 dark:to-purple-950"},j_={class:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"},Y_={class:"mt-4 flex flex-wrap gap-2","aria-label":"Main navigation"},K_=["aria-label","title"],Z_={key:0,class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5","aria-hidden":"true"},J_={key:1,class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5","aria-hidden":"true"},Q_={class:"header-theme-tooltip",role:"tooltip"},e0={__name:"AppHeader",props:{darkMode:{type:Boolean,default:!1},activeScreen:{type:String,default:"analyzer",validator:t=>["analyzer","orders"].includes(t)}},emits:["toggle-dark","navigate"],setup(t,{emit:e}){const n=e;return(i,s)=>(Ue(),He("header",$_,[j("div",j_,[j("div",null,[s[3]||(s[3]=jc('<p class="header-eyebrow">AI-Powered 3D Printing</p><div class="mt-2 flex items-center gap-3"><div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur" aria-hidden="true"><svg class="h-5 w-5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"></path></svg></div><h1 class="text-2xl font-bold tracking-tight sm:text-3xl"> Filament Print Analysis </h1></div><p class="mt-2 max-w-xl text-sm leading-relaxed text-white/75 sm:max-w-2xl"> Upload an STL, get AI recommendations, slicer output, and cost estimates in one dashboard. </p>',3)),j("nav",Y_,[j("button",{type:"button",class:Ft(["rounded-lg px-4 py-2 text-sm font-medium transition",t.activeScreen==="analyzer"?"bg-white/20 text-white ring-1 ring-white/20":"text-white/75 hover:bg-white/10 hover:text-white"]),onClick:s[0]||(s[0]=r=>n("navigate","analyzer"))}," Analyzer ",2),j("button",{type:"button",class:Ft(["rounded-lg px-4 py-2 text-sm font-medium transition",t.activeScreen==="orders"?"bg-white/20 text-white ring-1 ring-white/20":"text-white/75 hover:bg-white/10 hover:text-white"]),onClick:s[1]||(s[1]=r=>n("navigate","orders"))}," Orders ",2)])]),j("button",{type:"button",class:"header-theme-btn group shrink-0 self-start","aria-label":t.darkMode?"Switch to light mode":"Switch to dark mode",title:t.darkMode?"Light mode":"Dark mode",onClick:s[2]||(s[2]=r=>n("toggle-dark"))},[t.darkMode?(Ue(),He("svg",Z_,[...s[4]||(s[4]=[j("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"},null,-1)])])):(Ue(),He("svg",J_,[...s[5]||(s[5]=[j("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"},null,-1)])])),j("span",Q_,je(t.darkMode?"Light mode":"Dark mode"),1)],8,K_)])]))}},t0={key:0,class:"font-semibold"},np={__name:"AlertBanner",props:{type:{type:String,default:"info",validator:t=>["success","error","info","warning"].includes(t)},title:{type:String,default:""},message:{type:String,default:""}},setup(t){const e={success:"alert-success",error:"rounded-xl border border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950/50 dark:text-red-100",warning:"rounded-xl border border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-800 dark:bg-amber-950/50 dark:text-amber-100",info:"rounded-xl border border-slate-200 bg-slate-50 text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"};return(n,i)=>t.message||t.title?(Ue(),He("div",{key:0,class:Ft(["px-4 py-3 text-sm",e[t.type]]),role:"alert"},[t.title?(Ue(),He("p",t0,je(t.title),1)):xt("",!0),t.message?(Ue(),He("p",{key:1,class:Ft(t.title?"mt-1 opacity-90":"")},je(t.message),3)):xt("",!0),Pg(n.$slots,"default")],2)):xt("",!0)}},n0=["disabled"],i0={class:"flex flex-col items-center px-6 py-7 text-center"},s0=["disabled"],r0=["title"],o0={class:"truncate"},a0={key:1,class:"mt-2.5 text-xs text-slate-400"},l0={__name:"StlUploadZone",props:{disabled:{type:Boolean,default:!1},fileName:{type:String,default:""}},emits:["file-selected","invalid-file"],setup(t,{emit:e}){const n=t,i=e,s=wt(!1),r=wt(null);function o(f){return f?.name?.toLowerCase().endsWith(".stl")}function a(f){if(f){if(!o(f)){i("invalid-file","Only .stl files are allowed.");return}i("file-selected",f)}}function l(f){if(f.preventDefault(),s.value=!1,n.disabled)return;const d=f.dataTransfer?.files?.[0];a(d)}function c(f){const d=f.target.files?.[0];a(d),f.target.value=""}function u(){n.disabled||r.value?.click()}return(f,d)=>(Ue(),He("div",{class:Ft(["relative rounded-2xl border bg-white shadow-sm transition dark:bg-slate-900",s.value?"border-indigo-400 bg-indigo-50/50 shadow-md ring-2 ring-indigo-100 dark:border-indigo-500 dark:bg-indigo-950/30 dark:ring-indigo-900/50":"border-slate-200 hover:border-slate-300 hover:shadow dark:border-slate-700 dark:hover:border-slate-600"]),onDragover:d[0]||(d[0]=xf(h=>s.value=!0,["prevent"])),onDragleave:d[1]||(d[1]=xf(h=>s.value=!1,["prevent"])),onDrop:l},[j("input",{ref_key:"fileInput",ref:r,type:"file",accept:".stl",class:"hidden",disabled:t.disabled,onChange:c},null,40,n0),j("div",i0,[d[4]||(d[4]=jc('<div class="mb-3.5 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300"><svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"></path></svg></div><p class="text-base font-semibold text-slate-800 dark:text-slate-100"> Drag &amp; drop your STL file </p><p class="mt-1 text-sm text-slate-500 dark:text-slate-400">or</p>',3)),j("button",{type:"button",class:"btn-primary mt-3.5 inline-flex min-w-[11rem] items-center justify-center gap-2 px-7",disabled:t.disabled,onClick:u},[...d[2]||(d[2]=[j("svg",{class:"h-4 w-4 shrink-0",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2","aria-hidden":"true"},[j("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"})],-1),An(" Choose file ",-1)])],8,s0),t.fileName?(Ue(),He("div",{key:0,class:"mt-3.5 inline-flex max-w-full items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/50 dark:text-indigo-300",title:t.fileName},[d[3]||(d[3]=j("svg",{class:"h-4 w-4 shrink-0 text-indigo-500 dark:text-indigo-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"1.5","aria-hidden":"true"},[j("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})],-1)),j("span",o0,je(t.fileName),1)],8,r0)):(Ue(),He("p",a0,".stl files only"))])],34))}},c0={class:"card"},u0={class:"flex flex-col items-center text-center"},f0={class:"mt-6 text-lg font-semibold text-slate-800 dark:text-slate-100"},d0={class:"mt-6 h-2 w-full max-w-md overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700"},h0={class:"mt-8 w-full max-w-sm space-y-2 text-left text-sm"},p0={__name:"ProcessingLoader",props:{step:{type:String,default:"Validating STL"},uploadPercent:{type:Number,default:0}},setup(t){const e=["Validating STL","Processing Geometry","Running AI Analysis","Generating Print Settings","Running Bambu Slicer","Calculating Cost"];return(n,i)=>(Ue(),He("div",c0,[j("div",u0,[i[0]||(i[0]=j("div",{class:"h-12 w-12 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600"},null,-1)),j("p",f0,je(t.step),1),i[1]||(i[1]=j("p",{class:"mt-2 text-sm text-slate-500 dark:text-slate-400"}," This may take several minutes. Please keep this tab open. ",-1)),j("div",d0,[j("div",{class:"h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-500",style:oa({width:`${Math.min(t.uploadPercent||15,90)}%`})},null,4)]),j("ul",h0,[(Ue(),He(Vt,null,Ar(e,(s,r)=>j("li",{key:s,class:Ft(["flex items-center gap-2",t.step===s?"font-medium text-indigo-600 dark:text-indigo-400":"text-slate-400 dark:text-slate-500"])},[j("span",{class:Ft(["inline-flex h-5 w-5 items-center justify-center rounded-full text-xs",e.indexOf(t.step)>r?"bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300":t.step===s?"bg-indigo-100 text-indigo-700 dark:bg-indigo-900":"bg-slate-100 dark:bg-slate-800"])},je(e.indexOf(t.step)>r?"✓":r+1),3),An(" "+je(s),1)],2)),64))])])]))}};const Kc="184",zs={ROTATE:0,DOLLY:1,PAN:2},Is={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},m0=0,Sf=1,g0=2,wo=1,_0=2,dr=3,Vi=0,dn=1,gi=2,xi=0,Hs=1,bf=2,yf=3,Mf=4,x0=5,es=100,v0=101,S0=102,b0=103,y0=104,M0=200,E0=201,T0=202,A0=203,Nl=204,Fl=205,w0=206,R0=207,C0=208,P0=209,D0=210,L0=211,I0=212,U0=213,N0=214,Ol=0,Bl=1,kl=2,Xs=3,zl=4,Hl=5,Vl=6,Gl=7,ip=0,F0=1,O0=2,Jn=0,sp=1,rp=2,op=3,ap=4,lp=5,cp=6,up=7,fp=300,cs=301,qs=302,Ba=303,ka=304,ma=306,Wl=1e3,_i=1001,Xl=1002,Xt=1003,B0=1004,jr=1005,Jt=1006,za=1007,ns=1008,xn=1009,dp=1010,hp=1011,Cr=1012,Zc=1013,ti=1014,Yn=1015,Ei=1016,Jc=1017,Qc=1018,Pr=1020,pp=35902,mp=35899,gp=1021,_p=1022,Ln=1023,Ti=1026,is=1027,xp=1028,eu=1029,us=1030,tu=1031,nu=1033,Ro=33776,Co=33777,Po=33778,Do=33779,ql=35840,$l=35841,jl=35842,Yl=35843,Kl=36196,Zl=37492,Jl=37496,Ql=37488,ec=37489,Xo=37490,tc=37491,nc=37808,ic=37809,sc=37810,rc=37811,oc=37812,ac=37813,lc=37814,cc=37815,uc=37816,fc=37817,dc=37818,hc=37819,pc=37820,mc=37821,gc=36492,_c=36494,xc=36495,vc=36283,Sc=36284,qo=36285,bc=36286,k0=3200,yc=0,z0=1,ki="",_n="srgb",$o="srgb-linear",jo="linear",mt="srgb",gs=7680,Ef=519,H0=512,V0=513,G0=514,iu=515,W0=516,X0=517,su=518,q0=519,Tf=35044,Af="300 es",Kn=2e3,Dr=2001;function $0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Yo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function j0(){const t=Yo("canvas");return t.style.display="block",t}const wf={};function Rf(...t){const e="THREE."+t.shift();console.log(e,...t)}function vp(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function qe(...t){t=vp(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ft(...t){t=vp(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Mc(...t){const e=t.join(" ");e in wf||(wf[e]=!0,qe(...t))}function Y0(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const K0={[Ol]:Bl,[kl]:Vl,[zl]:Gl,[Xs]:Hl,[Bl]:Ol,[Vl]:kl,[Gl]:zl,[Hl]:Xs};class Wi{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cf=1234567;const Sr=Math.PI/180,Lr=180/Math.PI;function Ks(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function at(t,e,n){return Math.max(e,Math.min(n,t))}function ru(t,e){return(t%e+e)%e}function Z0(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function J0(t,e,n){return t!==e?(n-t)/(e-t):0}function br(t,e,n){return(1-n)*t+n*e}function Q0(t,e,n,i){return br(t,e,1-Math.exp(-n*i))}function ex(t,e=1){return e-Math.abs(ru(t,e*2)-e)}function tx(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function nx(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function ix(t,e){return t+Math.floor(Math.random()*(e-t+1))}function sx(t,e){return t+Math.random()*(e-t)}function rx(t){return t*(.5-Math.random())}function ox(t){t!==void 0&&(Cf=t);let e=Cf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ax(t){return t*Sr}function lx(t){return t*Lr}function cx(t){return(t&t-1)===0&&t!==0}function ux(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function fx(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function dx(t,e,n,i,s){const r=Math.cos,o=Math.sin,a=r(n/2),l=o(n/2),c=r((e+i)/2),u=o((e+i)/2),f=r((e-i)/2),d=o((e-i)/2),h=r((i-e)/2),g=o((i-e)/2);switch(s){case"XYX":t.set(a*u,l*f,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*h,a*c);break;case"YXY":t.set(l*h,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*h,a*u,a*c);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ls(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Lo={DEG2RAD:Sr,RAD2DEG:Lr,generateUUID:Ks,clamp:at,euclideanModulo:ru,mapLinear:Z0,inverseLerp:J0,lerp:br,damp:Q0,pingpong:ex,smoothstep:tx,smootherstep:nx,randInt:ix,randFloat:sx,randFloatSpread:rx,seededRandom:ox,degToRad:ax,radToDeg:lx,isPowerOfTwo:cx,ceilPowerOfTwo:ux,floorPowerOfTwo:fx,setQuaternionFromProperEuler:dx,normalize:nn,denormalize:Ls},Tu=class Tu{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=at(this.x,e.x,n.x),this.y=at(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=at(this.x,e,n),this.y=at(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Tu.prototype.isVector2=!0;let Qe=Tu;class Ai{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],d=r[o+0],h=r[o+1],g=r[o+2],_=r[o+3];if(f!==_||l!==d||c!==h||u!==g){let m=l*d+c*h+u*g+f*_;m<0&&(d=-d,h=-h,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const S=Math.acos(m),E=Math.sin(S);p=Math.sin(p*S)/E,a=Math.sin(a*S)/E,l=l*p+d*a,c=c*p+h*a,u=u*p+g*a,f=f*p+_*a}else{l=l*p+d*a,c=c*p+h*a,u=u*p+g*a,f=f*p+_*a;const S=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=S,c*=S,u*=S,f*=S}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[o],d=r[o+1],h=r[o+2],g=r[o+3];return e[n]=a*g+u*f+l*h-c*d,e[n+1]=l*g+u*d+c*f-a*h,e[n+2]=c*g+u*h+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),f=a(r/2),d=l(i/2),h=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(r-c)*h,this._z=(o-s)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(s+o)/h,this._z=(r+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(r-c)/h,this._x=(s+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-s)/h,this._x=(r+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,r=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Au=class Au{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Pf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Pf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*n-r*s),f=2*(r*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=at(this.x,e.x,n.x),this.y=at(this.y,e.y,n.y),this.z=at(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=at(this.x,e,n),this.y=at(this.y,e,n),this.z=at(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,r=e.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ha.copy(this).projectOnVector(e),this.sub(Ha)}reflect(e){return this.sub(Ha.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(at(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Au.prototype.isVector3=!0;let H=Au;const Ha=new H,Pf=new Ai,wu=class wu{constructor(e,n,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c)}set(e,n,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=n,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],_=s[0],m=s[3],p=s[6],S=s[1],E=s[4],M=s[7],D=s[2],T=s[5],L=s[8];return r[0]=o*_+a*S+l*D,r[3]=o*m+a*E+l*T,r[6]=o*p+a*M+l*L,r[1]=c*_+u*S+f*D,r[4]=c*m+u*E+f*T,r[7]=c*p+u*M+f*L,r[2]=d*_+h*S+g*D,r[5]=d*m+h*E+g*T,r[8]=d*p+h*M+g*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*r,h=c*r-o*l,g=n*f+i*d+s*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(s*c-u*i)*_,e[2]=(a*i-s*o)*_,e[3]=d*_,e[4]=(u*n-s*l)*_,e[5]=(s*r-a*n)*_,e[6]=h*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*r)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Va.makeScale(e,n)),this}rotate(e){return this.premultiply(Va.makeRotation(-e)),this}translate(e,n){return this.premultiply(Va.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};wu.prototype.isMatrix3=!0;let Ke=wu;const Va=new Ke,Df=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lf=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hx(){const t={enabled:!0,workingColorSpace:$o,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===mt&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(s.r=Vs(s.r),s.g=Vs(s.g),s.b=Vs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ki?jo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Mc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Mc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[$o]:{primaries:e,whitePoint:i,transfer:jo,toXYZ:Df,fromXYZ:Lf,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:Df,fromXYZ:Lf,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),t}const ct=hx();function vi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let _s;class px{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{_s===void 0&&(_s=Yo("canvas")),_s.width=e.width,_s.height=e.height;const s=_s.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=_s}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Yo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vi(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(vi(n[i]/255)*255):n[i]=vi(n[i]);return{data:n,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mx=0;class ou{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mx++}),this.uuid=Ks(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ga(s[o].image)):r.push(Ga(s[o]))}else r=Ga(s);i.url=r}return n||(e.images[this.uuid]=i),i}}function Ga(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?px.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let gx=0;const Wa=new H;class an extends Wi{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=_i,s=_i,r=Jt,o=ns,a=Ln,l=xn,c=an.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gx++}),this.uuid=Ks(),this.name="",this.source=new ou(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wa).x}get height(){return this.source.getSize(Wa).y}get depth(){return this.source.getSize(Wa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){qe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){qe(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==fp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wl:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case Xl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wl:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case Xl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=fp;an.DEFAULT_ANISOTROPY=1;const Ru=class Ru{constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(c+1)/2,M=(h+1)/2,D=(p+1)/2,T=(u+d)/4,L=(f+_)/4,v=(g+m)/4;return E>M&&E>D?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=T/i,r=L/i):M>D?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=T/s,r=v/s):D<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),i=L/r,s=v/r),this.set(i,s,r,n),this}let S=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-_)/S,this.z=(d-u)/S,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=at(this.x,e.x,n.x),this.y=at(this.y,e.y,n.y),this.z=at(this.z,e.z,n.z),this.w=at(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=at(this.x,e,n),this.y=at(this.y,e,n),this.z=at(this.z,e,n),this.w=at(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(at(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ru.prototype.isVector4=!0;let Dt=Ru;class _x extends Wi{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n),this.textures=[];const s={width:e,height:n,depth:i.depth},r=new an(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},e.textures[n].image);this.textures[n].source=new ou(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends _x{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Sp extends an{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class xx extends an{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qo=class Qo{constructor(e,n,i,s,r,o,a,l,c,u,f,d,h,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,o,a,l,c,u,f,d,h,g,_,m)}set(e,n,i,s,r,o,a,l,c,u,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qo().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,s=1/xs.setFromMatrixColumn(e,0).length(),r=1/xs.setFromMatrixColumn(e,1).length(),o=1/xs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+g*c,n[5]=d-_*c,n[9]=-a*l,n[2]=_-d*c,n[6]=g+h*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;n[0]=d+_*a,n[4]=g*a-h,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=_+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;n[0]=d-_*a,n[4]=-o*f,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=_-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=g*c-h,n[8]=d*c+_,n[1]=l*f,n[5]=_*c+d,n[9]=h*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=_-d*f,n[8]=g*f+h,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*f+g,n[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+_,n[5]=o*u,n[9]=h*f-g,n[2]=g*f-h,n[6]=a*u,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vx,e,Sx)}lookAt(e,n,i){const s=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Di.crossVectors(i,mn),Di.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Di.crossVectors(i,mn)),Di.normalize(),Yr.crossVectors(mn,Di),s[0]=Di.x,s[4]=Yr.x,s[8]=mn.x,s[1]=Di.y,s[5]=Yr.y,s[9]=mn.y,s[2]=Di.z,s[6]=Yr.z,s[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],S=i[3],E=i[7],M=i[11],D=i[15],T=s[0],L=s[4],v=s[8],R=s[12],B=s[1],C=s[5],V=s[9],W=s[13],k=s[2],P=s[6],N=s[10],U=s[14],K=s[3],ce=s[7],de=s[11],Ee=s[15];return r[0]=o*T+a*B+l*k+c*K,r[4]=o*L+a*C+l*P+c*ce,r[8]=o*v+a*V+l*N+c*de,r[12]=o*R+a*W+l*U+c*Ee,r[1]=u*T+f*B+d*k+h*K,r[5]=u*L+f*C+d*P+h*ce,r[9]=u*v+f*V+d*N+h*de,r[13]=u*R+f*W+d*U+h*Ee,r[2]=g*T+_*B+m*k+p*K,r[6]=g*L+_*C+m*P+p*ce,r[10]=g*v+_*V+m*N+p*de,r[14]=g*R+_*W+m*U+p*Ee,r[3]=S*T+E*B+M*k+D*K,r[7]=S*L+E*C+M*P+D*ce,r[11]=S*v+E*V+M*N+D*de,r[15]=S*R+E*W+M*U+D*Ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15],S=l*h-c*d,E=a*h-c*f,M=a*d-l*f,D=o*h-c*u,T=o*d-l*u,L=o*f-a*u;return n*(_*S-m*E+p*M)-i*(g*S-m*D+p*T)+s*(g*E-_*D+p*L)-r*(g*M-_*T+m*L)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=n*a-i*o,E=n*l-s*o,M=n*c-r*o,D=i*l-s*a,T=i*c-r*a,L=s*c-r*l,v=u*_-f*g,R=u*m-d*g,B=u*p-h*g,C=f*m-d*_,V=f*p-h*_,W=d*p-h*m,k=S*W-E*V+M*C+D*B-T*R+L*v;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/k;return e[0]=(a*W-l*V+c*C)*P,e[1]=(s*V-i*W-r*C)*P,e[2]=(_*L-m*T+p*D)*P,e[3]=(d*T-f*L-h*D)*P,e[4]=(l*B-o*W-c*R)*P,e[5]=(n*W-s*B+r*R)*P,e[6]=(m*M-g*L-p*E)*P,e[7]=(u*L-d*M+h*E)*P,e[8]=(o*V-a*B+c*v)*P,e[9]=(i*B-n*V-r*v)*P,e[10]=(g*T-_*M+p*S)*P,e[11]=(f*M-u*T-h*S)*P,e[12]=(a*R-o*C-l*v)*P,e[13]=(n*C-i*R+s*v)*P,e[14]=(_*E-g*D-m*S)*P,e[15]=(u*D-f*E+d*S)*P,this}scale(e){const n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,u=o+o,f=a+a,d=r*c,h=r*u,g=r*f,_=o*u,m=o*f,p=a*f,S=l*c,E=l*u,M=l*f,D=i.x,T=i.y,L=i.z;return s[0]=(1-(_+p))*D,s[1]=(h+M)*D,s[2]=(g-E)*D,s[3]=0,s[4]=(h-M)*T,s[5]=(1-(d+p))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+E)*L,s[9]=(m-S)*L,s[10]=(1-(d+_))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),n.identity(),this;let o=xs.set(s[0],s[1],s[2]).length();const a=xs.set(s[4],s[5],s[6]).length(),l=xs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Rn.copy(this);const c=1/o,u=1/a,f=1/l;return Rn.elements[0]*=c,Rn.elements[1]*=c,Rn.elements[2]*=c,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=f,Rn.elements[9]*=f,Rn.elements[10]*=f,n.setFromRotationMatrix(Rn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,s,r,o,a=Kn,l=!1){const c=this.elements,u=2*r/(n-e),f=2*r/(i-s),d=(n+e)/(n-e),h=(i+s)/(i-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===Kn)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Dr)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,s,r,o,a=Kn,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-s),d=-(n+e)/(n-e),h=-(i+s)/(i-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===Kn)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Dr)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Qo.prototype.isMatrix4=!0;let Ct=Qo;const xs=new H,Rn=new Ct,vx=new H(0,0,0),Sx=new H(1,1,1),Di=new H,Yr=new H,mn=new H,If=new Ct,Uf=new Ai;class Gi{constructor(e=0,n=0,i=0,s=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],d=s[6],h=s[10];switch(n){case"XYZ":this._y=Math.asin(at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,h),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return If.makeRotationFromQuaternion(e),this.setFromRotationMatrix(If,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Uf.setFromEuler(this),this.setFromQuaternion(Uf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class bp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bx=0;const Nf=new H,vs=new Ai,oi=new Ct,Kr=new H,nr=new H,yx=new H,Mx=new Ai,Ff=new H(1,0,0),Of=new H(0,1,0),Bf=new H(0,0,1),kf={type:"added"},Ex={type:"removed"},Ss={type:"childadded",child:null},Xa={type:"childremoved",child:null};class Gt extends Wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=Ks(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new H,n=new Gi,i=new Ai,s=new H(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Ke}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return vs.setFromAxisAngle(e,n),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,n){return vs.setFromAxisAngle(e,n),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(Ff,e)}rotateY(e){return this.rotateOnAxis(Of,e)}rotateZ(e){return this.rotateOnAxis(Bf,e)}translateOnAxis(e,n){return Nf.copy(e).applyQuaternion(this.quaternion),this.position.add(Nf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ff,e)}translateY(e){return this.translateOnAxis(Of,e)}translateZ(e){return this.translateOnAxis(Bf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Kr.copy(e):Kr.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(nr,Kr,this.up):oi.lookAt(Kr,nr,this.up),this.quaternion.setFromRotationMatrix(oi),s&&(oi.extractRotation(s.matrixWorld),vs.setFromRotationMatrix(oi),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kf),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ex),Xa.child=e,this.dispatchEvent(Xa),Xa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kf),Ss.child=e,this.dispatchEvent(Ss),Ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,yx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,Mx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Gt.DEFAULT_UP=new H(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zr extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Tx={type:"move"};class qa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Tx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Zr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const yp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Jr={h:0,s:0,l:0};function $a(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class lt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=ct.workingColorSpace){return this.r=e,this.g=n,this.b=i,ct.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=ct.workingColorSpace){if(e=ru(e,1),n=at(n,0,1),i=at(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=$a(o,r,e+1/3),this.g=$a(o,r,e),this.b=$a(o,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,n=_n){function i(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=_n){const i=yp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vi(e.r),this.g=vi(e.g),this.b=vi(e.b),this}copyLinearToSRGB(e){return this.r=Vs(e.r),this.g=Vs(e.g),this.b=Vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return ct.workingToColorSpace(jt.copy(this),e),Math.round(at(jt.r*255,0,255))*65536+Math.round(at(jt.g*255,0,255))*256+Math.round(at(jt.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ct.workingColorSpace){ct.workingToColorSpace(jt.copy(this),n);const i=jt.r,s=jt.g,r=jt.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ct.workingColorSpace){return ct.workingToColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=_n){ct.workingToColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,s=jt.b;return e!==_n?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+n,Li.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Li),e.getHSL(Jr);const i=br(Li.h,Jr.h,n),s=br(Li.s,Jr.s,n),r=br(Li.l,Jr.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new lt;lt.NAMES=yp;class Ax extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Cn=new H,ai=new H,ja=new H,li=new H,bs=new H,ys=new H,zf=new H,Ya=new H,Ka=new H,Za=new H,Ja=new Dt,Qa=new Dt,el=new Dt;class Dn{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Cn.subVectors(e,n),s.cross(Cn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Cn.subVectors(s,n),ai.subVectors(i,n),ja.subVectors(e,n);const o=Cn.dot(Cn),a=Cn.dot(ai),l=Cn.dot(ja),c=ai.dot(ai),u=ai.dot(ja),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-h-g,g,h)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,n,i,s,r,o,a,l){return this.getBarycoord(e,n,i,s,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(e,n,i,s,r,o){return Ja.setScalar(0),Qa.setScalar(0),el.setScalar(0),Ja.fromBufferAttribute(e,n),Qa.fromBufferAttribute(e,i),el.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Ja,r.x),o.addScaledVector(Qa,r.y),o.addScaledVector(el,r.z),o}static isFrontFacing(e,n,i,s){return Cn.subVectors(i,n),ai.subVectors(e,n),Cn.cross(ai).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),Cn.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Dn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return Dn.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,r=this.c;let o,a;bs.subVectors(s,i),ys.subVectors(r,i),Ya.subVectors(e,i);const l=bs.dot(Ya),c=ys.dot(Ya);if(l<=0&&c<=0)return n.copy(i);Ka.subVectors(e,s);const u=bs.dot(Ka),f=ys.dot(Ka);if(u>=0&&f<=u)return n.copy(s);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(bs,o);Za.subVectors(e,r);const h=bs.dot(Za),g=ys.dot(Za);if(g>=0&&h<=g)return n.copy(r);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(ys,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return zf.subVectors(r,s),a=(f-u)/(f-u+(h-g)),n.copy(s).addScaledVector(zf,a);const p=1/(m+_+d);return o=_*p,a=d*p,n.copy(i).addScaledVector(bs,o).addScaledVector(ys,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Hi{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(r,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Qr.copy(i.boundingBox)),Qr.applyMatrix4(e.matrixWorld),this.union(Qr)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ir),eo.subVectors(this.max,ir),Ms.subVectors(e.a,ir),Es.subVectors(e.b,ir),Ts.subVectors(e.c,ir),Ii.subVectors(Es,Ms),Ui.subVectors(Ts,Es),ji.subVectors(Ms,Ts);let n=[0,-Ii.z,Ii.y,0,-Ui.z,Ui.y,0,-ji.z,ji.y,Ii.z,0,-Ii.x,Ui.z,0,-Ui.x,ji.z,0,-ji.x,-Ii.y,Ii.x,0,-Ui.y,Ui.x,0,-ji.y,ji.x,0];return!tl(n,Ms,Es,Ts,eo)||(n=[1,0,0,0,1,0,0,0,1],!tl(n,Ms,Es,Ts,eo))?!1:(to.crossVectors(Ii,Ui),n=[to.x,to.y,to.z],tl(n,Ms,Es,Ts,eo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ci=[new H,new H,new H,new H,new H,new H,new H,new H],Pn=new H,Qr=new Hi,Ms=new H,Es=new H,Ts=new H,Ii=new H,Ui=new H,ji=new H,ir=new H,eo=new H,to=new H,Yi=new H;function tl(t,e,n,i,s){for(let r=0,o=t.length-3;r<=o;r+=3){Yi.fromArray(t,r);const a=s.x*Math.abs(Yi.x)+s.y*Math.abs(Yi.y)+s.z*Math.abs(Yi.z),l=e.dot(Yi),c=n.dot(Yi),u=i.dot(Yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ot=new H,no=new Qe;let wx=0;class Sn extends Wi{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wx++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Tf,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)no.fromBufferAttribute(this,n),no.applyMatrix3(e),this.setXY(n,no.x,no.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix3(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyMatrix4(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.applyNormalMatrix(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ot.fromBufferAttribute(this,n),Ot.transformDirection(e),this.setXYZ(n,Ot.x,Ot.y,Ot.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ls(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ls(n,this.array)),n}setX(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ls(n,this.array)),n}setY(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ls(n,this.array)),n}setZ(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ls(n,this.array)),n}setW(e,n){return this.normalized&&(n=nn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),s=nn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=nn(n,this.array),i=nn(i,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Mp extends Sn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ep extends Sn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ln extends Sn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Rx=new Hi,sr=new H,nl=new H;class ga{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Rx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const n=sr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(sr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(nl)),this.expandByPoint(sr.copy(e.center).sub(nl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Cx=0;const Mn=new Ct,il=new Gt,As=new H,gn=new Hi,rr=new Hi,Ht=new H;class bn extends Wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=Ks(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($0(e)?Ep:Mp)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ke().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return il.lookAt(e),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(As).negate(),this.translate(As.x,As.y,As.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=e.length;s<r;s++){const o=e[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ln(i,3))}else{const i=Math.min(e.length,n.count);for(let s=0;s<i;s++){const r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ga);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];rr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(gn.min,rr.min),gn.expandByPoint(Ht),Ht.addVectors(gn.max,rr.max),gn.expandByPoint(Ht)):(gn.expandByPoint(rr.min),gn.expandByPoint(rr.max))}gn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ht));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ht.fromBufferAttribute(a,c),l&&(As.fromBufferAttribute(e,c),Ht.add(As)),s=Math.max(s,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Sn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new H,l[v]=new H;const c=new H,u=new H,f=new H,d=new Qe,h=new Qe,g=new Qe,_=new H,m=new H;function p(v,R,B){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,R),f.fromBufferAttribute(i,B),d.fromBufferAttribute(r,v),h.fromBufferAttribute(r,R),g.fromBufferAttribute(r,B),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const C=1/(h.x*g.y-g.x*h.y);isFinite(C)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(C),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(C),a[v].add(_),a[R].add(_),a[B].add(_),l[v].add(m),l[R].add(m),l[B].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,R=S.length;v<R;++v){const B=S[v],C=B.start,V=B.count;for(let W=C,k=C+V;W<k;W+=3)p(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const E=new H,M=new H,D=new H,T=new H;function L(v){D.fromBufferAttribute(s,v),T.copy(D);const R=a[v];E.copy(R),E.sub(D.multiplyScalar(D.dot(R))).normalize(),M.crossVectors(T,R);const C=M.dot(l[v])<0?-1:1;o.setXYZW(v,E.x,E.y,E.z,C)}for(let v=0,R=S.length;v<R;++v){const B=S[v],C=B.start,V=B.count;for(let W=C,k=C+V;W<k;W+=3)L(e.getX(W+0)),L(e.getX(W+1)),L(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Sn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,u=new H,f=new H;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new Sn(d,u,f)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new bn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(n))}const r=e.morphAttributes;for(const c in r){const u=[],f=r[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Px=0;class Zs extends Wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=Ks(),this.name="",this.type="Material",this.blending=Hs,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Fl,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new lt(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ef,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){qe(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){qe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Hs&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Nl&&(i.blendSrc=this.blendSrc),this.blendDst!==Fl&&(i.blendDst=this.blendDst),this.blendEquation!==es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ef&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ui=new H,sl=new H,io=new H,Ni=new H,rl=new H,so=new H,ol=new H;class au{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ui.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,n),ui.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){sl.copy(e).add(n).multiplyScalar(.5),io.copy(n).sub(e).normalize(),Ni.copy(this.origin).sub(sl);const r=e.distanceTo(n)*.5,o=-this.direction.dot(io),a=Ni.dot(this.direction),l=-Ni.dot(io),c=Ni.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=r*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),h=d*(d+2*l)+c):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-l),r),h=-f*f+d*(d+2*l)+c);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(sl).addScaledVector(io,d),h}intersectSphere(e,n){ui.subVectors(e.center,this.origin);const i=ui.dot(this.direction),s=ui.dot(ui)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,n,i,s,r){rl.subVectors(n,e),so.subVectors(i,e),ol.crossVectors(rl,so);let o=this.direction.dot(ol),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ni.subVectors(this.origin,e);const l=a*this.direction.dot(so.crossVectors(Ni,so));if(l<0)return null;const c=a*this.direction.dot(rl.cross(Ni));if(c<0||l+c>o)return null;const u=-a*Ni.dot(ol);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tp extends Zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=ip,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hf=new Ct,Ki=new au,ro=new ga,Vf=new H,oo=new H,ao=new H,lo=new H,al=new H,co=new H,Gf=new H,uo=new H;class ni extends Gt{constructor(e=new bn,n=new Tp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){co.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],f=r[l];u!==0&&(al.fromBufferAttribute(f,e),o?co.addScaledVector(al,u):co.addScaledVector(al.sub(n),u))}n.add(co)}return n}raycast(e,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere),ro.applyMatrix4(r),Ki.copy(e.ray).recast(e.near),!(ro.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(ro,Vf)===null||Ki.origin.distanceToSquared(Vf)>(e.far-e.near)**2))&&(Hf.copy(r).invert(),Ki.copy(e.ray).applyMatrix4(Hf),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ki)))}_computeIntersections(e,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,h.start),E=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let M=S,D=E;M<D;M+=3){const T=a.getX(M),L=a.getX(M+1),v=a.getX(M+2);s=fo(this,p,e,i,c,u,f,T,L,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const S=a.getX(m),E=a.getX(m+1),M=a.getX(m+2);s=fo(this,o,e,i,c,u,f,S,E,M),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],S=Math.max(m.start,h.start),E=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let M=S,D=E;M<D;M+=3){const T=M,L=M+1,v=M+2;s=fo(this,p,e,i,c,u,f,T,L,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const S=m,E=m+1,M=m+2;s=fo(this,o,e,i,c,u,f,S,E,M),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function Dx(t,e,n,i,s,r,o,a){let l;if(e.side===dn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===Vi,a),l===null)return null;uo.copy(a),uo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(uo);return c<n.near||c>n.far?null:{distance:c,point:uo.clone(),object:t}}function fo(t,e,n,i,s,r,o,a,l,c){t.getVertexPosition(a,oo),t.getVertexPosition(l,ao),t.getVertexPosition(c,lo);const u=Dx(t,e,n,i,oo,ao,lo,Gf);if(u){const f=new H;Dn.getBarycoord(Gf,oo,ao,lo,f),s&&(u.uv=Dn.getInterpolatedAttribute(s,a,l,c,f,new Qe)),r&&(u.uv1=Dn.getInterpolatedAttribute(r,a,l,c,f,new Qe)),o&&(u.normal=Dn.getInterpolatedAttribute(o,a,l,c,f,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new H,materialIndex:0};Dn.getNormal(oo,ao,lo,d.normal),u.face=d,u.barycoord=f}return u}class Lx extends an{constructor(e=null,n=1,i=1,s,r,o,a,l,c=Xt,u=Xt,f,d){super(null,o,a,l,c,u,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ll=new H,Ix=new H,Ux=new Ke;class Bi{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=ll.subVectors(i,n).cross(Ix.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const s=e.delta(ll),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(s,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ux.getNormalMatrix(e),s=this.coplanarPoint(ll).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zi=new ga,Nx=new Qe(.5,.5),ho=new H;class lu{constructor(e=new Bi,n=new Bi,i=new Bi,s=new Bi,r=new Bi,o=new Bi){this.planes=[e,n,i,s,r,o]}set(e,n,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Kn,i=!1){const s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],d=r[6],h=r[7],g=r[8],_=r[9],m=r[10],p=r[11],S=r[12],E=r[13],M=r[14],D=r[15];if(s[0].setComponents(c-o,h-u,p-g,D-S).normalize(),s[1].setComponents(c+o,h+u,p+g,D+S).normalize(),s[2].setComponents(c+a,h+f,p+_,D+E).normalize(),s[3].setComponents(c-a,h-f,p-_,D-E).normalize(),i)s[4].setComponents(l,d,m,M).normalize(),s[5].setComponents(c-l,h-d,p-m,D-M).normalize();else if(s[4].setComponents(c-l,h-d,p-m,D-M).normalize(),n===Kn)s[5].setComponents(c+l,h+d,p+m,D+M).normalize();else if(n===Dr)s[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zi)}intersectsSprite(e){Zi.center.set(0,0,0);const n=Nx.distanceTo(e.center);return Zi.radius=.7071067811865476+n,Zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zi)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(ho.x=s.normal.x>0?e.max.x:e.min.x,ho.y=s.normal.y>0?e.max.y:e.min.y,ho.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ap extends Zs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new lt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ko=new H,Zo=new H,Wf=new Ct,or=new au,po=new ga,cl=new H,Xf=new H;class Fx extends Gt{constructor(e=new bn,n=new Ap){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)Ko.fromBufferAttribute(n,s-1),Zo.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Ko.distanceTo(Zo);e.setAttribute("lineDistance",new ln(i,1))}else qe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(s),po.radius+=r,e.ray.intersectsSphere(po)===!1)return;Wf.copy(s).invert(),or.copy(e.ray).applyMatrix4(Wf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=c){const p=u.getX(_),S=u.getX(_+1),E=mo(this,e,or,l,p,S,_);E&&n.push(E)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(h),p=mo(this,e,or,l,_,m,g-1);p&&n.push(p)}}else{const h=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=h,m=g-1;_<m;_+=c){const p=mo(this,e,or,l,_,_+1,_);p&&n.push(p)}if(this.isLineLoop){const _=mo(this,e,or,l,g-1,h,g-1);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function mo(t,e,n,i,s,r,o){const a=t.geometry.attributes.position;if(Ko.fromBufferAttribute(a,s),Zo.fromBufferAttribute(a,r),n.distanceSqToSegment(Ko,Zo,cl,Xf)>i)return;cl.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(cl);if(!(c<e.near||c>e.far))return{distance:c,point:Xf.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const qf=new H,$f=new H;class Ox extends Fx{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)qf.fromBufferAttribute(n,s),$f.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+qf.distanceTo($f);e.setAttribute("lineDistance",new ln(i,1))}else qe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wp extends an{constructor(e=[],n=cs,i,s,r,o,a,l,c,u){super(e,n,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class $s extends an{constructor(e,n,i=ti,s,r,o,a=Xt,l=Xt,c,u=Ti,f=1){if(u!==Ti&&u!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ou(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Bx extends $s{constructor(e,n=ti,i=cs,s,r,o=Xt,a=Xt,l,c=Ti){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Rp extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Or extends bn{constructor(e=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,n,e,o,r,0),g("z","y","x",1,-1,i,n,-e,o,r,1),g("x","z","y",1,1,e,i,n,s,o,2),g("x","z","y",1,-1,e,i,-n,s,o,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ln(c,3)),this.setAttribute("normal",new ln(u,3)),this.setAttribute("uv",new ln(f,2));function g(_,m,p,S,E,M,D,T,L,v,R){const B=M/L,C=D/v,V=M/2,W=D/2,k=T/2,P=L+1,N=v+1;let U=0,K=0;const ce=new H;for(let de=0;de<N;de++){const Ee=de*C-W;for(let Ce=0;Ce<P;Ce++){const Xe=Ce*B-V;ce[_]=Xe*S,ce[m]=Ee*E,ce[p]=k,c.push(ce.x,ce.y,ce.z),ce[_]=0,ce[m]=0,ce[p]=T>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(Ce/L),f.push(1-de/v),U+=1}}for(let de=0;de<v;de++)for(let Ee=0;Ee<L;Ee++){const Ce=d+Ee+P*de,Xe=d+Ee+P*(de+1),st=d+(Ee+1)+P*(de+1),Ve=d+(Ee+1)+P*de;l.push(Ce,Xe,Ve),l.push(Xe,st,Ve),K+=6}a.addGroup(h,K,R),h+=K,d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class _a extends bn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const r=e/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,f=e/a,d=n/l,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*d-o;for(let E=0;E<c;E++){const M=E*f-r;g.push(M,-S,0),_.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){const E=S+c*p,M=S+c*(p+1),D=S+1+c*(p+1),T=S+1+c*p;h.push(E,M,T),h.push(M,D,T)}this.setIndex(h),this.setAttribute("position",new ln(g,3)),this.setAttribute("normal",new ln(_,3)),this.setAttribute("uv",new ln(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _a(e.width,e.height,e.widthSegments,e.heightSegments)}}function js(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];if(jf(s))s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(jf(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function sn(t){const e={};for(let n=0;n<t.length;n++){const i=js(t[n]);for(const s in i)e[s]=i[s]}return e}function jf(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function kx(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Cp(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const zx={clone:js,merge:sn};var Hx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends Zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hx,this.fragmentShader=Vx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=js(e.uniforms),this.uniformsGroups=kx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Gx extends ii{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wx extends Zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xx extends Zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=k0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qx extends Zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yf={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(Kf(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!Kf(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function Kf(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class $x{constructor(e,n,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],g=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const jx=new $x;class cu{constructor(e){this.manager=e!==void 0?e:jx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}cu.DEFAULT_MATERIAL_NAME="__DEFAULT";const fi={};class Yx extends Error{constructor(e,n){super(e),this.response=n}}class Kx extends cu{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Yf.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{n&&n(r),this.manager.itemEnd(e)},0);return}if(fi[e]!==void 0){fi[e].push({onLoad:n,onProgress:i,onError:s});return}fi[e]=[],fi[e].push({onLoad:n,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=fi[e],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),h=d?parseInt(d):0,g=h!==0;let _=0;const m=new ReadableStream({start(p){S();function S(){f.read().then(({done:E,value:M})=>{if(E)p.close();else{_+=M.byteLength;const D=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:h});for(let T=0,L=u.length;T<L;T++){const v=u[T];v.onProgress&&v.onProgress(D)}p.enqueue(M),S()}},E=>{p.error(E)})}}});return new Response(m)}else throw new Yx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,h=new TextDecoder(d);return c.arrayBuffer().then(g=>h.decode(g))}}}).then(c=>{Yf.add(`file:${e}`,c);const u=fi[e];delete fi[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onLoad&&h.onLoad(c)}}).catch(c=>{const u=fi[e];if(u===void 0)throw this.manager.itemError(e),c;delete fi[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class uu extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new lt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class Zx extends uu{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new lt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const ul=new Ct,Zf=new H,Jf=new H;class Jx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lu,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Zf.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zf),Jf.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Jf),n.updateMatrixWorld(),ul.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Dr||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const go=new H,_o=new Ai,Hn=new H;class Pp extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(go,_o,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(go,_o,Hn.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(go,_o,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(go,_o,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Fi=new H,Qf=new Qe,ed=new Qe;class Tn extends Pp{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Lr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Sr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(Sr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fi.x,Fi.y).multiplyScalar(-e/Fi.z)}getViewSize(e,n){return this.getViewBounds(e,Qf,ed),n.subVectors(ed,Qf)}setViewOffset(e,n,i,s,r,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Sr*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class fu extends Pp{constructor(e=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Qx extends Jx{constructor(){super(new fu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class td extends uu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new Qx}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class ev extends uu{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ws=-90,Rs=1;class tv extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Tn(ws,Rs,e,n);s.layers=this.layers,this.add(s);const r=new Tn(ws,Rs,e,n);r.layers=this.layers,this.add(r);const o=new Tn(ws,Rs,e,n);o.layers=this.layers,this.add(o);const a=new Tn(ws,Rs,e,n);a.layers=this.layers,this.add(a);const l=new Tn(ws,Rs,e,n);l.layers=this.layers,this.add(l);const c=new Tn(ws,Rs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(e===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Dr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class nv extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class nd{constructor(e=1,n=0,i=0){this.radius=e,this.phi=n,this.theta=i}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=at(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(at(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Cu=class Cu{constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){const r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};Cu.prototype.isMatrix2=!0;let id=Cu;class iv extends Ox{constructor(e=10,n=10,i=4473924,s=8947848){i=new lt(i),s=new lt(s);const r=n/2,o=e/n,a=e/2,l=[],c=[];for(let d=0,h=0,g=-a;d<=n;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=d===r?i:s;_.toArray(c,h),h+=3,_.toArray(c,h),h+=3,_.toArray(c,h),h+=3,_.toArray(c,h),h+=3}const u=new bn;u.setAttribute("position",new ln(l,3)),u.setAttribute("color",new ln(c,3));const f=new Ap({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class sv extends Wi{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){qe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function sd(t,e,n,i){const s=rv(i);switch(n){case gp:return t*e;case xp:return t*e/s.components*s.byteLength;case eu:return t*e/s.components*s.byteLength;case us:return t*e*2/s.components*s.byteLength;case tu:return t*e*2/s.components*s.byteLength;case _p:return t*e*3/s.components*s.byteLength;case Ln:return t*e*4/s.components*s.byteLength;case nu:return t*e*4/s.components*s.byteLength;case Ro:case Co:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Po:case Do:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $l:case Yl:return Math.max(t,16)*Math.max(e,8)/4;case ql:case jl:return Math.max(t,8)*Math.max(e,8)/2;case Kl:case Zl:case Ql:case ec:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Jl:case Xo:case tc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case sc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case rc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case oc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case ac:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case lc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case cc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case uc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case fc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case dc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case hc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case pc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case mc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case gc:case _c:case xc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case vc:case Sc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case qo:case bc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function rv(t){switch(t){case xn:case dp:return{byteLength:1,components:1};case Cr:case hp:case Ei:return{byteLength:2,components:1};case Jc:case Qc:return{byteLength:2,components:4};case ti:case Zc:case Yn:return{byteLength:4,components:1};case pp:case mp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kc}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kc);function Dp(){let t=null,e=!1,n=null,i=null;function s(r,o){n(r,o),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function ov(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var av=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lv=`#ifdef USE_ALPHAHASH
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
#endif`,cv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hv=`#ifdef USE_AOMAP
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
#endif`,pv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mv=`#ifdef USE_BATCHING
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
#endif`,gv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_v=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sv=`#ifdef USE_IRIDESCENCE
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
#endif`,bv=`#ifdef USE_BUMPMAP
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
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Pv=`#define PI 3.141592653589793
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
} // validated`,Dv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lv=`vec3 transformedNormal = objectNormal;
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
#endif`,Iv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ov="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kv=`#ifdef USE_ENVMAP
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
#endif`,zv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Hv=`#ifdef USE_ENVMAP
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
#endif`,Vv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gv=`#ifdef USE_ENVMAP
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
#endif`,Wv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$v=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jv=`#ifdef USE_GRADIENTMAP
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
}`,Yv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Qv=`#ifdef USE_ENVMAP
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
#endif`,eS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sS=`PhysicalMaterial material;
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
#endif`,rS=`uniform sampler2D dfgLUT;
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
}`,oS=`
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
#endif`,aS=`#if defined( RE_IndirectDiffuse )
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
#endif`,lS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cS=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,uS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_S=`#if defined( USE_POINTS_UV )
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
#endif`,xS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,MS=`#ifdef USE_MORPHTARGETS
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
#endif`,ES=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,AS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PS=`#ifdef USE_NORMALMAP
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
#endif`,DS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,US=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,FS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,OS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,WS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qS=`float getShadowMask() {
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
}`,$S=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jS=`#ifdef USE_SKINNING
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
#endif`,YS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KS=`#ifdef USE_SKINNING
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
#endif`,ZS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tb=`#ifdef USE_TRANSMISSION
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
#endif`,nb=`#ifdef USE_TRANSMISSION
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
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ob=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ab=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lb=`uniform sampler2D t2D;
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
}`,cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ub=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,db=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hb=`#include <common>
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
}`,pb=`#if DEPTH_PACKING == 3200
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
}`,mb=`#define DISTANCE
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
}`,gb=`#define DISTANCE
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
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`uniform float scale;
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
}`,Sb=`uniform vec3 diffuse;
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
}`,bb=`#include <common>
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
}`,yb=`uniform vec3 diffuse;
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
}`,Mb=`#define LAMBERT
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
}`,Eb=`#define LAMBERT
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
}`,Tb=`#define MATCAP
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
}`,Ab=`#define MATCAP
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
}`,wb=`#define NORMAL
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
}`,Rb=`#define NORMAL
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
}`,Cb=`#define PHONG
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
}`,Pb=`#define PHONG
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
}`,Db=`#define STANDARD
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
}`,Lb=`#define STANDARD
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
}`,Ib=`#define TOON
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
}`,Ub=`#define TOON
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
}`,Nb=`uniform float size;
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
}`,Fb=`uniform vec3 diffuse;
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
}`,Ob=`#include <common>
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
}`,Bb=`uniform vec3 color;
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
}`,kb=`uniform float rotation;
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
}`,zb=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:av,alphahash_pars_fragment:lv,alphamap_fragment:cv,alphamap_pars_fragment:uv,alphatest_fragment:fv,alphatest_pars_fragment:dv,aomap_fragment:hv,aomap_pars_fragment:pv,batching_pars_vertex:mv,batching_vertex:gv,begin_vertex:_v,beginnormal_vertex:xv,bsdfs:vv,iridescence_fragment:Sv,bumpmap_pars_fragment:bv,clipping_planes_fragment:yv,clipping_planes_pars_fragment:Mv,clipping_planes_pars_vertex:Ev,clipping_planes_vertex:Tv,color_fragment:Av,color_pars_fragment:wv,color_pars_vertex:Rv,color_vertex:Cv,common:Pv,cube_uv_reflection_fragment:Dv,defaultnormal_vertex:Lv,displacementmap_pars_vertex:Iv,displacementmap_vertex:Uv,emissivemap_fragment:Nv,emissivemap_pars_fragment:Fv,colorspace_fragment:Ov,colorspace_pars_fragment:Bv,envmap_fragment:kv,envmap_common_pars_fragment:zv,envmap_pars_fragment:Hv,envmap_pars_vertex:Vv,envmap_physical_pars_fragment:Qv,envmap_vertex:Gv,fog_vertex:Wv,fog_pars_vertex:Xv,fog_fragment:qv,fog_pars_fragment:$v,gradientmap_pars_fragment:jv,lightmap_pars_fragment:Yv,lights_lambert_fragment:Kv,lights_lambert_pars_fragment:Zv,lights_pars_begin:Jv,lights_toon_fragment:eS,lights_toon_pars_fragment:tS,lights_phong_fragment:nS,lights_phong_pars_fragment:iS,lights_physical_fragment:sS,lights_physical_pars_fragment:rS,lights_fragment_begin:oS,lights_fragment_maps:aS,lights_fragment_end:lS,lightprobes_pars_fragment:cS,logdepthbuf_fragment:uS,logdepthbuf_pars_fragment:fS,logdepthbuf_pars_vertex:dS,logdepthbuf_vertex:hS,map_fragment:pS,map_pars_fragment:mS,map_particle_fragment:gS,map_particle_pars_fragment:_S,metalnessmap_fragment:xS,metalnessmap_pars_fragment:vS,morphinstance_vertex:SS,morphcolor_vertex:bS,morphnormal_vertex:yS,morphtarget_pars_vertex:MS,morphtarget_vertex:ES,normal_fragment_begin:TS,normal_fragment_maps:AS,normal_pars_fragment:wS,normal_pars_vertex:RS,normal_vertex:CS,normalmap_pars_fragment:PS,clearcoat_normal_fragment_begin:DS,clearcoat_normal_fragment_maps:LS,clearcoat_pars_fragment:IS,iridescence_pars_fragment:US,opaque_fragment:NS,packing:FS,premultiplied_alpha_fragment:OS,project_vertex:BS,dithering_fragment:kS,dithering_pars_fragment:zS,roughnessmap_fragment:HS,roughnessmap_pars_fragment:VS,shadowmap_pars_fragment:GS,shadowmap_pars_vertex:WS,shadowmap_vertex:XS,shadowmask_pars_fragment:qS,skinbase_vertex:$S,skinning_pars_vertex:jS,skinning_vertex:YS,skinnormal_vertex:KS,specularmap_fragment:ZS,specularmap_pars_fragment:JS,tonemapping_fragment:QS,tonemapping_pars_fragment:eb,transmission_fragment:tb,transmission_pars_fragment:nb,uv_pars_fragment:ib,uv_pars_vertex:sb,uv_vertex:rb,worldpos_vertex:ob,background_vert:ab,background_frag:lb,backgroundCube_vert:cb,backgroundCube_frag:ub,cube_vert:fb,cube_frag:db,depth_vert:hb,depth_frag:pb,distance_vert:mb,distance_frag:gb,equirect_vert:_b,equirect_frag:xb,linedashed_vert:vb,linedashed_frag:Sb,meshbasic_vert:bb,meshbasic_frag:yb,meshlambert_vert:Mb,meshlambert_frag:Eb,meshmatcap_vert:Tb,meshmatcap_frag:Ab,meshnormal_vert:wb,meshnormal_frag:Rb,meshphong_vert:Cb,meshphong_frag:Pb,meshphysical_vert:Db,meshphysical_frag:Lb,meshtoon_vert:Ib,meshtoon_frag:Ub,points_vert:Nb,points_frag:Fb,shadow_vert:Ob,shadow_frag:Bb,sprite_vert:kb,sprite_frag:zb},Ae={common:{diffuse:{value:new lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new lt(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},qn={basic:{uniforms:sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new lt(0)},envMapIntensity:{value:1}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:sn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new lt(0)},specular:{value:new lt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:sn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:sn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new lt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:sn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:sn([Ae.points,Ae.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:sn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:sn([Ae.common,Ae.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:sn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:sn([Ae.sprite,Ae.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distance:{uniforms:sn([Ae.common,Ae.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distance_vert,fragmentShader:it.distance_frag},shadow:{uniforms:sn([Ae.lights,Ae.fog,{color:{value:new lt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};qn.physical={uniforms:sn([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new lt(0)},specularColor:{value:new lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const xo={r:0,b:0,g:0},Hb=new Ct,Lp=new Ke;Lp.set(-1,0,0,0,1,0,0,0,1);function Vb(t,e,n,i,s,r){const o=new lt(0);let a=s===!0?0:1,l,c,u=null,f=0,d=null;function h(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){const M=S.backgroundBlurriness>0;E=e.get(E,M)}return E}function g(S){let E=!1;const M=h(S);M===null?m(o,a):M&&M.isColor&&(m(M,1),E=!0);const D=t.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,r):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(S,E){const M=h(E);M&&(M.isCubeTexture||M.mapping===ma)?(c===void 0&&(c=new ni(new Or(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:js(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(D,T,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Hb.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Lp),c.material.toneMapped=ct.getTransfer(M.colorSpace)!==mt,(u!==M||f!==M.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,d=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ni(new _a(2,2),new ii({name:"BackgroundMaterial",uniforms:js(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=ct.getTransfer(M.colorSpace)!==mt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,d=t.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,E){S.getRGB(xo,Cp(t)),n.buffers.color.setClear(xo.r,xo.g,xo.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,E=1){o.set(S),a=E,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,m(o,a)},render:g,addToRenderList:_,dispose:p}}function Gb(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(C,V,W,k,P){let N=!1;const U=f(C,k,W,V);r!==U&&(r=U,c(r.object)),N=h(C,k,W,P),N&&g(C,k,W,P),P!==null&&e.update(P,t.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,M(C,V,W,k),P!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function l(){return t.createVertexArray()}function c(C){return t.bindVertexArray(C)}function u(C){return t.deleteVertexArray(C)}function f(C,V,W,k){const P=k.wireframe===!0;let N=i[V.id];N===void 0&&(N={},i[V.id]=N);const U=C.isInstancedMesh===!0?C.id:0;let K=N[U];K===void 0&&(K={},N[U]=K);let ce=K[W.id];ce===void 0&&(ce={},K[W.id]=ce);let de=ce[P];return de===void 0&&(de=d(l()),ce[P]=de),de}function d(C){const V=[],W=[],k=[];for(let P=0;P<n;P++)V[P]=0,W[P]=0,k[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:W,attributeDivisors:k,object:C,attributes:{},index:null}}function h(C,V,W,k){const P=r.attributes,N=V.attributes;let U=0;const K=W.getAttributes();for(const ce in K)if(K[ce].location>=0){const Ee=P[ce];let Ce=N[ce];if(Ce===void 0&&(ce==="instanceMatrix"&&C.instanceMatrix&&(Ce=C.instanceMatrix),ce==="instanceColor"&&C.instanceColor&&(Ce=C.instanceColor)),Ee===void 0||Ee.attribute!==Ce||Ce&&Ee.data!==Ce.data)return!0;U++}return r.attributesNum!==U||r.index!==k}function g(C,V,W,k){const P={},N=V.attributes;let U=0;const K=W.getAttributes();for(const ce in K)if(K[ce].location>=0){let Ee=N[ce];Ee===void 0&&(ce==="instanceMatrix"&&C.instanceMatrix&&(Ee=C.instanceMatrix),ce==="instanceColor"&&C.instanceColor&&(Ee=C.instanceColor));const Ce={};Ce.attribute=Ee,Ee&&Ee.data&&(Ce.data=Ee.data),P[ce]=Ce,U++}r.attributes=P,r.attributesNum=U,r.index=k}function _(){const C=r.newAttributes;for(let V=0,W=C.length;V<W;V++)C[V]=0}function m(C){p(C,0)}function p(C,V){const W=r.newAttributes,k=r.enabledAttributes,P=r.attributeDivisors;W[C]=1,k[C]===0&&(t.enableVertexAttribArray(C),k[C]=1),P[C]!==V&&(t.vertexAttribDivisor(C,V),P[C]=V)}function S(){const C=r.newAttributes,V=r.enabledAttributes;for(let W=0,k=V.length;W<k;W++)V[W]!==C[W]&&(t.disableVertexAttribArray(W),V[W]=0)}function E(C,V,W,k,P,N,U){U===!0?t.vertexAttribIPointer(C,V,W,P,N):t.vertexAttribPointer(C,V,W,k,P,N)}function M(C,V,W,k){_();const P=k.attributes,N=W.getAttributes(),U=V.defaultAttributeValues;for(const K in N){const ce=N[K];if(ce.location>=0){let de=P[K];if(de===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(de=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(de=C.instanceColor)),de!==void 0){const Ee=de.normalized,Ce=de.itemSize,Xe=e.get(de);if(Xe===void 0)continue;const st=Xe.buffer,Ve=Xe.type,ne=Xe.bytesPerElement,xe=Ve===t.INT||Ve===t.UNSIGNED_INT||de.gpuType===Zc;if(de.isInterleavedBufferAttribute){const le=de.data,Oe=le.stride,Ge=de.offset;if(le.isInstancedInterleavedBuffer){for(let We=0;We<ce.locationSize;We++)p(ce.location+We,le.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let We=0;We<ce.locationSize;We++)m(ce.location+We);t.bindBuffer(t.ARRAY_BUFFER,st);for(let We=0;We<ce.locationSize;We++)E(ce.location+We,Ce/ce.locationSize,Ve,Ee,Oe*ne,(Ge+Ce/ce.locationSize*We)*ne,xe)}else{if(de.isInstancedBufferAttribute){for(let le=0;le<ce.locationSize;le++)p(ce.location+le,de.meshPerAttribute);C.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let le=0;le<ce.locationSize;le++)m(ce.location+le);t.bindBuffer(t.ARRAY_BUFFER,st);for(let le=0;le<ce.locationSize;le++)E(ce.location+le,Ce/ce.locationSize,Ve,Ee,Ce*ne,Ce/ce.locationSize*le*ne,xe)}}else if(U!==void 0){const Ee=U[K];if(Ee!==void 0)switch(Ee.length){case 2:t.vertexAttrib2fv(ce.location,Ee);break;case 3:t.vertexAttrib3fv(ce.location,Ee);break;case 4:t.vertexAttrib4fv(ce.location,Ee);break;default:t.vertexAttrib1fv(ce.location,Ee)}}}}S()}function D(){R();for(const C in i){const V=i[C];for(const W in V){const k=V[W];for(const P in k){const N=k[P];for(const U in N)u(N[U].object),delete N[U];delete k[P]}}delete i[C]}}function T(C){if(i[C.id]===void 0)return;const V=i[C.id];for(const W in V){const k=V[W];for(const P in k){const N=k[P];for(const U in N)u(N[U].object),delete N[U];delete k[P]}}delete i[C.id]}function L(C){for(const V in i){const W=i[V];for(const k in W){const P=W[k];if(P[C.id]===void 0)continue;const N=P[C.id];for(const U in N)u(N[U].object),delete N[U];delete P[C.id]}}}function v(C){for(const V in i){const W=i[V],k=C.isInstancedMesh===!0?C.id:0,P=W[k];if(P!==void 0){for(const N in P){const U=P[N];for(const K in U)u(U[K].object),delete U[K];delete P[N]}delete W[k],Object.keys(W).length===0&&delete i[V]}}}function R(){B(),o=!0,r!==s&&(r=s,c(r.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:B,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfObject:v,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Wb(t,e,n){let i;function s(l){i=l}function r(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function a(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];n.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Xb(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==Ln&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const v=L===Ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==xn&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==Yn&&!v)}function l(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),E=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),D=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:M,maxSamples:D,samples:T}}function qb(t){const e=this;let n=null,i=0,s=!1,r=!1;const o=new Bi,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||s;return s=d,i=f.length,h},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const S=r?0:i,E=S*4;let M=p.clippingState||null;l.value=M,M=u(g,d,E,h);for(let D=0;D!==E;++D)M[D]=n[D];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,M=h;E!==_;++E,M+=4)o.copy(f[E]).applyMatrix4(S,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const zi=4,rd=[.125,.215,.35,.446,.526,.582],ts=20,$b=256,ar=new fu,od=new lt;let fl=null,dl=0,hl=0,pl=!1;const jb=new H;class ad{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=jb}=r;fl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fl,dl,hl),this._renderer.xr.enabled=pl,e.scissorTest=!1,Cs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===cs||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),pl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Ei,format:Ln,colorSpace:$o,depthBuffer:!1},s=ld(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ld(e,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Yb(r)),this._blurMaterial=Zb(r,e,n),this._ggxMaterial=Kb(r,e,n)}return s}_compileMaterial(e){const n=new ni(new bn,e);this._renderer.compile(n,ar)}_sceneToCubeUV(e,n,i,s,r){const l=new Tn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(od),f.toneMapping=Jn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ni(new Or,new Tp({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const S=e.background;S?S.isColor&&(m.color.copy(S),e.background=null,p=!0):(m.color.copy(od),p=!0);for(let E=0;E<6;E++){const M=E%3;M===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):M===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));const D=this._cubeSize;Cs(s,M*D,E>2?D:0,D,D),f.setRenderTarget(s),p&&f.render(_,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=S}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===cs||e.mapping===qs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cd());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Cs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ar)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);n.autoClear=i}_applyGGXFilter(e,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,h=f*d,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-zi?i-g+zi:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=g-n,Cs(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(a,ar),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Cs(e,m,p,3*_,2*_),s.setRenderTarget(e),s.render(a,ar)}_blur(e,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&ft("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[s];f.material=c;const d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*ts-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):ts;m>ts&&qe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ts}`);const p=[];let S=0;for(let L=0;L<ts;++L){const v=L/_,R=Math.exp(-v*v/2);p.push(R),L===0?S+=R:L<m&&(S+=2*R)}for(let L=0;L<p.length;L++)p[L]=p[L]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-i;const M=this._sizeLods[s],D=3*M*(s>E-zi?s-E+zi:0),T=4*(this._cubeSize-M);Cs(n,D,T,3*M,2*M),l.setRenderTarget(n),l.render(f,ar)}}function Yb(t){const e=[],n=[],i=[];let s=t;const r=t-zi+1+rd.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>t-zi?l=rd[o-t+zi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*h),E=new Float32Array(m*g*h),M=new Float32Array(p*g*h);for(let T=0;T<h;T++){const L=T%3*2/3-1,v=T>2?0:-1,R=[L,v,0,L+2/3,v,0,L+2/3,v+1,0,L,v,0,L+2/3,v+1,0,L,v+1,0];S.set(R,_*g*T),E.set(d,m*g*T);const B=[T,T,T,T,T,T];M.set(B,p*g*T)}const D=new bn;D.setAttribute("position",new Sn(S,_)),D.setAttribute("uv",new Sn(E,m)),D.setAttribute("faceIndex",new Sn(M,p)),i.push(new ni(D,null)),s>zi&&s--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function ld(t,e,n){const i=new Qn(t,e,n);return i.texture.mapping=ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cs(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function Kb(t,e,n){return new ii({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$b,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xa(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function Zb(t,e,n){const i=new Float32Array(ts),s=new H(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xa(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function cd(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xa(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function ud(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function xa(){return`

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
	`}class Ip extends Qn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new wp(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Or(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:js(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:xi});r.uniforms.tEquirect.value=n;const o=new ni(s,r),a=n.minFilter;return n.minFilter===ns&&(n.minFilter=Jt),new tv(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,s);e.setRenderTarget(r)}}function Jb(t){let e=new WeakMap,n=new WeakMap,i=null;function s(d,h=!1){return d==null?null:h?o(d):r(d)}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Ba||h===ka)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const _=new Ip(g.height);return _.fromEquirectangularTexture(t,d),e.set(d,_),d.addEventListener("dispose",c),a(_.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const h=d.mapping,g=h===Ba||h===ka,_=h===cs||h===qs;if(g||_){let m=n.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new ad(t)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const S=d.image;return g&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new ad(t)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function a(d,h){return h===Ba?d.mapping=cs:h===ka&&(d.mapping=qs),d}function l(d){let h=0;const g=6;for(let _=0;_<g;_++)d[_]!==void 0&&h++;return h===g}function c(d){const h=d.target;h.removeEventListener("dispose",c);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const g=n.get(h);g!==void 0&&(n.delete(h),g.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Qb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&Mc("WebGLRenderer: "+i+" extension not supported."),s}}}function ey(t,e,n,i){const s={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];const h=r.get(d);h&&(e.remove(h),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(g===void 0)return;if(h!==null){const S=h.array;_=h.version;for(let E=0,M=S.length;E<M;E+=3){const D=S[E+0],T=S[E+1],L=S[E+2];d.push(D,T,T,L,L,D)}}else{const S=g.array;_=g.version;for(let E=0,M=S.length/3-1;E<M;E+=3){const D=E+0,T=E+1,L=E+2;d.push(D,T,T,L,L,D)}}const m=new(g.count>=65535?Ep:Mp)(d,1);m.version=_;const p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){const d=r.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function ty(t,e,n){let i;function s(f){i=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,d){t.drawElements(i,d,r,f*o),n.update(d,i,1)}function c(f,d,h){h!==0&&(t.drawElementsInstanced(i,d,r,f*o,h),n.update(d,i,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,h);let _=0;for(let m=0;m<h;m++)_+=d[m];n.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function ny(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(r/3);break;case t.LINES:n.lines+=a*(r/2);break;case t.LINE_STRIP:n.lines+=a*(r-1);break;case t.LINE_LOOP:n.lines+=a*r;break;case t.POINTS:n.points+=a*r;break;default:ft("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function iy(t,e,n){const i=new WeakMap,s=new Dt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let B=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",B)};var h=B;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let D=a.attributes.position.count*M,T=1;D>e.maxTextureSize&&(T=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const L=new Float32Array(D*T*4*f),v=new Sp(L,D,T,f);v.type=Yn,v.needsUpdate=!0;const R=M*4;for(let C=0;C<f;C++){const V=p[C],W=S[C],k=E[C],P=D*T*4*C;for(let N=0;N<V.count;N++){const U=N*R;g===!0&&(s.fromBufferAttribute(V,N),L[P+U+0]=s.x,L[P+U+1]=s.y,L[P+U+2]=s.z,L[P+U+3]=0),_===!0&&(s.fromBufferAttribute(W,N),L[P+U+4]=s.x,L[P+U+5]=s.y,L[P+U+6]=s.z,L[P+U+7]=0),m===!0&&(s.fromBufferAttribute(k,N),L[P+U+8]=s.x,L[P+U+9]=s.y,L[P+U+10]=s.z,L[P+U+11]=k.itemSize===4?s.w:1)}}d={count:f,texture:v,size:new Qe(D,T)},i.set(a,d),a.addEventListener("dispose",B)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function sy(t,e,n,i,s){let r=new WeakMap;function o(c){const u=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function a(){r=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}const ry={[sp]:"LINEAR_TONE_MAPPING",[rp]:"REINHARD_TONE_MAPPING",[op]:"CINEON_TONE_MAPPING",[ap]:"ACES_FILMIC_TONE_MAPPING",[cp]:"AGX_TONE_MAPPING",[up]:"NEUTRAL_TONE_MAPPING",[lp]:"CUSTOM_TONE_MAPPING"};function oy(t,e,n,i,s){const r=new Qn(e,n,{type:t,depthBuffer:i,stencilBuffer:s,depthTexture:i?new $s(e,n):void 0}),o=new Qn(e,n,{type:Ei,depthBuffer:!1,stencilBuffer:!1}),a=new bn;a.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ln([0,2,0,0,2,0],2));const l=new Gx({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new ni(a,l),u=new fu(-1,1,1,-1,0,1);let f=null,d=null,h=!1,g,_=null,m=[],p=!1;this.setSize=function(S,E){r.setSize(S,E),o.setSize(S,E);for(let M=0;M<m.length;M++){const D=m[M];D.setSize&&D.setSize(S,E)}},this.setEffects=function(S){m=S,p=m.length>0&&m[0].isRenderPass===!0;const E=r.width,M=r.height;for(let D=0;D<m.length;D++){const T=m[D];T.setSize&&T.setSize(E,M)}},this.begin=function(S,E){if(h||S.toneMapping===Jn&&m.length===0)return!1;if(_=E,E!==null){const M=E.width,D=E.height;(r.width!==M||r.height!==D)&&this.setSize(M,D)}return p===!1&&S.setRenderTarget(r),g=S.toneMapping,S.toneMapping=Jn,!0},this.hasRenderPass=function(){return p},this.end=function(S,E){S.toneMapping=g,h=!0;let M=r,D=o;for(let T=0;T<m.length;T++){const L=m[T];if(L.enabled!==!1&&(L.render(S,D,M,E),L.needsSwap!==!1)){const v=M;M=D,D=v}}if(f!==S.outputColorSpace||d!==S.toneMapping){f=S.outputColorSpace,d=S.toneMapping,l.defines={},ct.getTransfer(f)===mt&&(l.defines.SRGB_TRANSFER="");const T=ry[d];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,S.setRenderTarget(_),S.render(c,u),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const Up=new an,Ec=new $s(1,1),Np=new Sp,Fp=new xx,Op=new wp,fd=[],dd=[],hd=new Float32Array(16),pd=new Float32Array(9),md=new Float32Array(4);function Js(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let r=fd[s];if(r===void 0&&(r=new Float32Array(s),fd[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(r,a)}return r}function kt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function va(t,e){let n=dd[e];n===void 0&&(n=new Int32Array(e),dd[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ay(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function ly(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function cy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(kt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function uy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function fy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;md.set(i),t.uniformMatrix2fv(this.addr,!1,md),zt(n,i)}}function dy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;pd.set(i),t.uniformMatrix3fv(this.addr,!1,pd),zt(n,i)}}function hy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(kt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(kt(n,i))return;hd.set(i),t.uniformMatrix4fv(this.addr,!1,hd),zt(n,i)}}function py(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function my(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function gy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function _y(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function xy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function vy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(kt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function Sy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(kt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function by(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(kt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function yy(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(Ec.compareFunction=n.isReversedDepthBuffer()?su:iu,r=Ec):r=Up,n.setTexture2D(e||r,s)}function My(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Fp,s)}function Ey(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Op,s)}function Ty(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||Np,s)}function Ay(t){switch(t){case 5126:return ay;case 35664:return ly;case 35665:return cy;case 35666:return uy;case 35674:return fy;case 35675:return dy;case 35676:return hy;case 5124:case 35670:return py;case 35667:case 35671:return my;case 35668:case 35672:return gy;case 35669:case 35673:return _y;case 5125:return xy;case 36294:return vy;case 36295:return Sy;case 36296:return by;case 35678:case 36198:case 36298:case 36306:case 35682:return yy;case 35679:case 36299:case 36307:return My;case 35680:case 36300:case 36308:case 36293:return Ey;case 36289:case 36303:case 36311:case 36292:return Ty}}function wy(t,e){t.uniform1fv(this.addr,e)}function Ry(t,e){const n=Js(e,this.size,2);t.uniform2fv(this.addr,n)}function Cy(t,e){const n=Js(e,this.size,3);t.uniform3fv(this.addr,n)}function Py(t,e){const n=Js(e,this.size,4);t.uniform4fv(this.addr,n)}function Dy(t,e){const n=Js(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Ly(t,e){const n=Js(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Iy(t,e){const n=Js(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Uy(t,e){t.uniform1iv(this.addr,e)}function Ny(t,e){t.uniform2iv(this.addr,e)}function Fy(t,e){t.uniform3iv(this.addr,e)}function Oy(t,e){t.uniform4iv(this.addr,e)}function By(t,e){t.uniform1uiv(this.addr,e)}function ky(t,e){t.uniform2uiv(this.addr,e)}function zy(t,e){t.uniform3uiv(this.addr,e)}function Hy(t,e){t.uniform4uiv(this.addr,e)}function Vy(t,e,n){const i=this.cache,s=e.length,r=va(n,s);kt(i,r)||(t.uniform1iv(this.addr,r),zt(i,r));let o;this.type===t.SAMPLER_2D_SHADOW?o=Ec:o=Up;for(let a=0;a!==s;++a)n.setTexture2D(e[a]||o,r[a])}function Gy(t,e,n){const i=this.cache,s=e.length,r=va(n,s);kt(i,r)||(t.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)n.setTexture3D(e[o]||Fp,r[o])}function Wy(t,e,n){const i=this.cache,s=e.length,r=va(n,s);kt(i,r)||(t.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)n.setTextureCube(e[o]||Op,r[o])}function Xy(t,e,n){const i=this.cache,s=e.length,r=va(n,s);kt(i,r)||(t.uniform1iv(this.addr,r),zt(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(e[o]||Np,r[o])}function qy(t){switch(t){case 5126:return wy;case 35664:return Ry;case 35665:return Cy;case 35666:return Py;case 35674:return Dy;case 35675:return Ly;case 35676:return Iy;case 5124:case 35670:return Uy;case 35667:case 35671:return Ny;case 35668:case 35672:return Fy;case 35669:case 35673:return Oy;case 5125:return By;case 36294:return ky;case 36295:return zy;case 36296:return Hy;case 35678:case 36198:case 36298:case 36306:case 35682:return Vy;case 35679:case 36299:case 36307:return Gy;case 35680:case 36300:case 36308:case 36293:return Wy;case 36289:case 36303:case 36311:case 36292:return Xy}}class $y{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Ay(n.type)}}class jy{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=qy(n.type)}}class Yy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,n[a.id],i)}}}const ml=/(\w+)(\])?(\[|\.)?/g;function gd(t,e){t.seq.push(e),t.map[e.id]=e}function Ky(t,e,n){const i=t.name,s=i.length;for(ml.lastIndex=0;;){const r=ml.exec(i),o=ml.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){gd(n,c===void 0?new $y(a,t,e):new jy(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new Yy(a),gd(n,f)),n=f}}}class Io{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);Ky(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in n&&i.push(o)}return i}}function _d(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Zy=37297;let Jy=0;function Qy(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const xd=new Ke;function eM(t){ct._getMatrix(xd,ct.workingColorSpace,t);const e=`mat3( ${xd.elements.map(n=>n.toFixed(4))} )`;switch(ct.getTransfer(t)){case jo:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function vd(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+Qy(t.getShaderSource(e),a)}else return r}function tM(t,e){const n=eM(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const nM={[sp]:"Linear",[rp]:"Reinhard",[op]:"Cineon",[ap]:"ACESFilmic",[cp]:"AgX",[up]:"Neutral",[lp]:"Custom"};function iM(t,e){const n=nM[e];return n===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const vo=new H;function sM(){ct.getLuminanceCoefficients(vo);const t=vo.x.toFixed(4),e=vo.y.toFixed(4),n=vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rM(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function oM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function aM(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=t.getActiveAttrib(e,s),o=r.name;let a=1;r.type===t.FLOAT_MAT2&&(a=2),r.type===t.FLOAT_MAT3&&(a=3),r.type===t.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function hr(t){return t!==""}function Sd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function bd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(t){return t.replace(lM,uM)}const cM=new Map;function uM(t,e){let n=it[e];if(n===void 0){const i=cM.get(e);if(i!==void 0)n=it[i],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Tc(n)}const fM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yd(t){return t.replace(fM,dM)}function dM(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Md(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const hM={[wo]:"SHADOWMAP_TYPE_PCF",[dr]:"SHADOWMAP_TYPE_VSM"};function pM(t){return hM[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mM={[cs]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[ma]:"ENVMAP_TYPE_CUBE_UV"};function gM(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":mM[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const _M={[qs]:"ENVMAP_MODE_REFRACTION"};function xM(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":_M[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const vM={[ip]:"ENVMAP_BLENDING_MULTIPLY",[F0]:"ENVMAP_BLENDING_MIX",[O0]:"ENVMAP_BLENDING_ADD"};function SM(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":vM[t.combine]||"ENVMAP_BLENDING_NONE"}function bM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function yM(t,e,n,i){const s=t.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=pM(n),c=gM(n),u=xM(n),f=SM(n),d=bM(n),h=rM(n),g=oM(r),_=s.createProgram();let m,p,S=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(hr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(hr).join(`
`),p.length>0&&(p+=`
`)):(m=[Md(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),p=[Md(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Jn?"#define TONE_MAPPING":"",n.toneMapping!==Jn?it.tonemapping_pars_fragment:"",n.toneMapping!==Jn?iM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,tM("linearToOutputTexel",n.outputColorSpace),sM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(hr).join(`
`)),o=Tc(o),o=Sd(o,n),o=bd(o,n),a=Tc(a),a=Sd(a,n),a=bd(a,n),o=yd(o),a=yd(a),n.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Af?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Af?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=S+m+o,M=S+p+a,D=_d(s,s.VERTEX_SHADER,E),T=_d(s,s.FRAGMENT_SHADER,M);s.attachShader(_,D),s.attachShader(_,T),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function L(C){if(t.debug.checkShaderErrors){const V=s.getProgramInfoLog(_)||"",W=s.getShaderInfoLog(D)||"",k=s.getShaderInfoLog(T)||"",P=V.trim(),N=W.trim(),U=k.trim();let K=!0,ce=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,_,D,T);else{const de=vd(s,D,"vertex"),Ee=vd(s,T,"fragment");ft("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+de+`
`+Ee)}else P!==""?qe("WebGLProgram: Program Info Log:",P):(N===""||U==="")&&(ce=!1);ce&&(C.diagnostics={runnable:K,programLog:P,vertexShader:{log:N,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(D),s.deleteShader(T),v=new Io(s,_),R=aM(s,_)}let v;this.getUniforms=function(){return v===void 0&&L(this),v};let R;this.getAttributes=function(){return R===void 0&&L(this),R};let B=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(_,Zy)),B},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Jy++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=T,this}let MM=0;class EM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new TM(e),n.set(e,i)),i}}class TM{constructor(e){this.id=MM++,this.code=e,this.usedTimes=0}}function AM(t){return t===us||t===Xo||t===qo}function wM(t,e,n,i,s,r){const o=new bp,a=new EM,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer;let d=i.precision;const h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,R,B,C,V,W){const k=C.fog,P=V.geometry,N=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,U=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,K=e.get(v.envMap||N,U),ce=K&&K.mapping===ma?K.image.height:null,de=h[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&qe("WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const Ee=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,Ce=Ee!==void 0?Ee.length:0;let Xe=0;P.morphAttributes.position!==void 0&&(Xe=1),P.morphAttributes.normal!==void 0&&(Xe=2),P.morphAttributes.color!==void 0&&(Xe=3);let st,Ve,ne,xe;if(de){const Ze=qn[de];st=Ze.vertexShader,Ve=Ze.fragmentShader}else st=v.vertexShader,Ve=v.fragmentShader,a.update(v),ne=a.getVertexShaderID(v),xe=a.getFragmentShaderID(v);const le=t.getRenderTarget(),Oe=t.state.buffers.depth.getReversed(),Ge=V.isInstancedMesh===!0,We=V.isBatchedMesh===!0,w=!!v.map,I=!!v.matcap,X=!!K,te=!!v.aoMap,Z=!!v.lightMap,se=!!v.bumpMap,fe=!!v.normalMap,ge=!!v.displacementMap,A=!!v.emissiveMap,re=!!v.metalnessMap,ve=!!v.roughnessMap,he=v.anisotropy>0,ee=v.clearcoat>0,Pe=v.dispersion>0,y=v.iridescence>0,x=v.sheen>0,O=v.transmission>0,J=he&&!!v.anisotropyMap,oe=ee&&!!v.clearcoatMap,pe=ee&&!!v.clearcoatNormalMap,me=ee&&!!v.clearcoatRoughnessMap,Q=y&&!!v.iridescenceMap,ae=y&&!!v.iridescenceThicknessMap,Se=x&&!!v.sheenColorMap,Te=x&&!!v.sheenRoughnessMap,be=!!v.specularMap,_e=!!v.specularColorMap,Ye=!!v.specularIntensityMap,et=O&&!!v.transmissionMap,dt=O&&!!v.thicknessMap,F=!!v.gradientMap,ye=!!v.alphaMap,ie=v.alphaTest>0,De=!!v.alphaHash,Me=!!v.extensions;let ue=Jn;v.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(ue=t.toneMapping);const Be={shaderID:de,shaderType:v.type,shaderName:v.name,vertexShader:st,fragmentShader:Ve,defines:v.defines,customVertexShaderID:ne,customFragmentShaderID:xe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,batching:We,batchingColor:We&&V._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&V.instanceColor!==null,instancingMorph:Ge&&V.morphTexture!==null,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:w,matcap:I,envMap:X,envMapMode:X&&K.mapping,envMapCubeUVHeight:ce,aoMap:te,lightMap:Z,bumpMap:se,normalMap:fe,displacementMap:ge,emissiveMap:A,normalMapObjectSpace:fe&&v.normalMapType===z0,normalMapTangentSpace:fe&&v.normalMapType===yc,packedNormalMap:fe&&v.normalMapType===yc&&AM(v.normalMap.format),metalnessMap:re,roughnessMap:ve,anisotropy:he,anisotropyMap:J,clearcoat:ee,clearcoatMap:oe,clearcoatNormalMap:pe,clearcoatRoughnessMap:me,dispersion:Pe,iridescence:y,iridescenceMap:Q,iridescenceThicknessMap:ae,sheen:x,sheenColorMap:Se,sheenRoughnessMap:Te,specularMap:be,specularColorMap:_e,specularIntensityMap:Ye,transmission:O,transmissionMap:et,thicknessMap:dt,gradientMap:F,opaque:v.transparent===!1&&v.blending===Hs&&v.alphaToCoverage===!1,alphaMap:ye,alphaTest:ie,alphaHash:De,combine:v.combine,mapUv:w&&g(v.map.channel),aoMapUv:te&&g(v.aoMap.channel),lightMapUv:Z&&g(v.lightMap.channel),bumpMapUv:se&&g(v.bumpMap.channel),normalMapUv:fe&&g(v.normalMap.channel),displacementMapUv:ge&&g(v.displacementMap.channel),emissiveMapUv:A&&g(v.emissiveMap.channel),metalnessMapUv:re&&g(v.metalnessMap.channel),roughnessMapUv:ve&&g(v.roughnessMap.channel),anisotropyMapUv:J&&g(v.anisotropyMap.channel),clearcoatMapUv:oe&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:pe&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(v.sheenRoughnessMap.channel),specularMapUv:be&&g(v.specularMap.channel),specularColorMapUv:_e&&g(v.specularColorMap.channel),specularIntensityMapUv:Ye&&g(v.specularIntensityMap.channel),transmissionMapUv:et&&g(v.transmissionMap.channel),thicknessMapUv:dt&&g(v.thicknessMap.channel),alphaMapUv:ye&&g(v.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(fe||he),vertexNormals:!!P.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!P.attributes.uv&&(w||ye),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||P.attributes.normal===void 0&&fe===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Oe,skinning:V.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:Xe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:W.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&B.length>0,shadowMapType:t.shadowMap.type,toneMapping:ue,decodeVideoTexture:w&&v.map.isVideoTexture===!0&&ct.getTransfer(v.map.colorSpace)===mt,decodeVideoTextureEmissive:A&&v.emissiveMap.isVideoTexture===!0&&ct.getTransfer(v.emissiveMap.colorSpace)===mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===gi,flipSided:v.side===dn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Me&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&v.extensions.multiDraw===!0||We)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function m(v){const R=[];if(v.shaderID?R.push(v.shaderID):(R.push(v.customVertexShaderID),R.push(v.customFragmentShaderID)),v.defines!==void 0)for(const B in v.defines)R.push(B),R.push(v.defines[B]);return v.isRawShaderMaterial===!1&&(p(R,v),S(R,v),R.push(t.outputColorSpace)),R.push(v.customProgramCacheKey),R.join()}function p(v,R){v.push(R.precision),v.push(R.outputColorSpace),v.push(R.envMapMode),v.push(R.envMapCubeUVHeight),v.push(R.mapUv),v.push(R.alphaMapUv),v.push(R.lightMapUv),v.push(R.aoMapUv),v.push(R.bumpMapUv),v.push(R.normalMapUv),v.push(R.displacementMapUv),v.push(R.emissiveMapUv),v.push(R.metalnessMapUv),v.push(R.roughnessMapUv),v.push(R.anisotropyMapUv),v.push(R.clearcoatMapUv),v.push(R.clearcoatNormalMapUv),v.push(R.clearcoatRoughnessMapUv),v.push(R.iridescenceMapUv),v.push(R.iridescenceThicknessMapUv),v.push(R.sheenColorMapUv),v.push(R.sheenRoughnessMapUv),v.push(R.specularMapUv),v.push(R.specularColorMapUv),v.push(R.specularIntensityMapUv),v.push(R.transmissionMapUv),v.push(R.thicknessMapUv),v.push(R.combine),v.push(R.fogExp2),v.push(R.sizeAttenuation),v.push(R.morphTargetsCount),v.push(R.morphAttributeCount),v.push(R.numDirLights),v.push(R.numPointLights),v.push(R.numSpotLights),v.push(R.numSpotLightMaps),v.push(R.numHemiLights),v.push(R.numRectAreaLights),v.push(R.numDirLightShadows),v.push(R.numPointLightShadows),v.push(R.numSpotLightShadows),v.push(R.numSpotLightShadowsWithMaps),v.push(R.numLightProbes),v.push(R.shadowMapType),v.push(R.toneMapping),v.push(R.numClippingPlanes),v.push(R.numClipIntersection),v.push(R.depthPacking)}function S(v,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),v.push(o.mask)}function E(v){const R=h[v.type];let B;if(R){const C=qn[R];B=zx.clone(C.uniforms)}else B=v.uniforms;return B}function M(v,R){let B=u.get(R);return B!==void 0?++B.usedTimes:(B=new yM(t,R,v,s),c.push(B),u.set(R,B)),B}function D(v){if(--v.usedTimes===0){const R=c.indexOf(v);c[R]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function T(v){a.remove(v)}function L(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:E,acquireProgram:M,releaseProgram:D,releaseShaderCache:T,programs:c,dispose:L}}function RM(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function s(o,a,l){t.get(o)[a]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function CM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Ed(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Td(){const t=[];let e=0;const n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function o(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function a(d,h,g,_,m,p){let S=t[e];return S===void 0?(S={id:d.id,object:d,geometry:h,material:g,materialVariant:o(d),groupOrder:_,renderOrder:d.renderOrder,z:m,group:p},t[e]=S):(S.id=d.id,S.object=d,S.geometry=h,S.material=g,S.materialVariant=o(d),S.groupOrder=_,S.renderOrder=d.renderOrder,S.z=m,S.group=p),e++,S}function l(d,h,g,_,m,p){const S=a(d,h,g,_,m,p);g.transmission>0?i.push(S):g.transparent===!0?s.push(S):n.push(S)}function c(d,h,g,_,m,p){const S=a(d,h,g,_,m,p);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):n.unshift(S)}function u(d,h){n.length>1&&n.sort(d||CM),i.length>1&&i.sort(h||Ed),s.length>1&&s.sort(h||Ed)}function f(){for(let d=e,h=t.length;d<h;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function PM(){let t=new WeakMap;function e(i,s){const r=t.get(i);let o;return r===void 0?(o=new Td,t.set(i,[o])):s>=r.length?(o=new Td,r.push(o)):o=r[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function DM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new lt};break;case"SpotLight":n={position:new H,direction:new H,color:new lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new lt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new lt,groundColor:new lt};break;case"RectAreaLight":n={color:new lt,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function LM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let IM=0;function UM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function NM(t){const e=new DM,n=LM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const s=new H,r=new Ct,o=new Ct;function a(c){let u=0,f=0,d=0;for(let R=0;R<9;R++)i.probe[R].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,S=0,E=0,M=0,D=0,T=0,L=0;c.sort(UM);for(let R=0,B=c.length;R<B;R++){const C=c[R],V=C.color,W=C.intensity,k=C.distance;let P=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===us?P=C.shadow.map.texture:P=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=V.r*W,f+=V.g*W,d+=V.b*W;else if(C.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(C.sh.coefficients[N],W);L++}else if(C.isDirectionalLight){const N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const U=C.shadow,K=n.get(C);K.shadowIntensity=U.intensity,K.shadowBias=U.bias,K.shadowNormalBias=U.normalBias,K.shadowRadius=U.radius,K.shadowMapSize=U.mapSize,i.directionalShadow[h]=K,i.directionalShadowMap[h]=P,i.directionalShadowMatrix[h]=C.shadow.matrix,S++}i.directional[h]=N,h++}else if(C.isSpotLight){const N=e.get(C);N.position.setFromMatrixPosition(C.matrixWorld),N.color.copy(V).multiplyScalar(W),N.distance=k,N.coneCos=Math.cos(C.angle),N.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),N.decay=C.decay,i.spot[_]=N;const U=C.shadow;if(C.map&&(i.spotLightMap[D]=C.map,D++,U.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[_]=U.matrix,C.castShadow){const K=n.get(C);K.shadowIntensity=U.intensity,K.shadowBias=U.bias,K.shadowNormalBias=U.normalBias,K.shadowRadius=U.radius,K.shadowMapSize=U.mapSize,i.spotShadow[_]=K,i.spotShadowMap[_]=P,M++}_++}else if(C.isRectAreaLight){const N=e.get(C);N.color.copy(V).multiplyScalar(W),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),i.rectArea[m]=N,m++}else if(C.isPointLight){const N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity),N.distance=C.distance,N.decay=C.decay,C.castShadow){const U=C.shadow,K=n.get(C);K.shadowIntensity=U.intensity,K.shadowBias=U.bias,K.shadowNormalBias=U.normalBias,K.shadowRadius=U.radius,K.shadowMapSize=U.mapSize,K.shadowCameraNear=U.camera.near,K.shadowCameraFar=U.camera.far,i.pointShadow[g]=K,i.pointShadowMap[g]=P,i.pointShadowMatrix[g]=C.shadow.matrix,E++}i.point[g]=N,g++}else if(C.isHemisphereLight){const N=e.get(C);N.skyColor.copy(C.color).multiplyScalar(W),N.groundColor.copy(C.groundColor).multiplyScalar(W),i.hemi[p]=N,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const v=i.hash;(v.directionalLength!==h||v.pointLength!==g||v.spotLength!==_||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==S||v.numPointShadows!==E||v.numSpotShadows!==M||v.numSpotMaps!==D||v.numLightProbes!==L)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=M+D-T,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=L,v.directionalLength=h,v.pointLength=g,v.spotLength=_,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=S,v.numPointShadows=E,v.numSpotShadows=M,v.numSpotMaps=D,v.numLightProbes=L,i.version=IM++)}function l(c,u){let f=0,d=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const E=c[p];if(E.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(E.isSpotLight){const M=i.spot[h];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(E.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(E.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Ad(t){const e=new NM(t),n=[],i=[],s=[];function r(d){f.camera=d,n.length=0,i.length=0,s.length=0}function o(d){n.push(d)}function a(d){i.push(d)}function l(d){s.push(d)}function c(){e.setup(n)}function u(d){e.setupView(n,d)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function FM(t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ad(t),e.set(s,[a])):r>=o.length?(a=new Ad(t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const OM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,BM=`uniform sampler2D shadow_pass;
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
}`,kM=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],zM=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],wd=new Ct,lr=new H,gl=new H;function HM(t,e,n){let i=new lu;const s=new Qe,r=new Qe,o=new Dt,a=new Xx,l=new qx,c={},u=n.maxTextureSize,f={[Vi]:dn,[dn]:Vi,[gi]:gi},d=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:OM,fragmentShader:BM}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new bn;g.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ni(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wo;let p=this.type;this.render=function(T,L,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===_0&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=wo);const R=t.getRenderTarget(),B=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),V=t.state;V.setBlending(xi),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const W=p!==this.type;W&&L.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(P=>P.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,P=T.length;k<P;k++){const N=T[k],U=N.shadow;if(U===void 0){qe("WebGLShadowMap:",N,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);const K=U.getFrameExtents();s.multiply(K),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/K.x),s.x=r.x*K.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/K.y),s.y=r.y*K.y,U.mapSize.y=r.y));const ce=t.state.buffers.depth.getReversed();if(U.camera._reversedDepth=ce,U.map===null||W===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===dr){if(N.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Qn(s.x,s.y,{format:us,type:Ei,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),U.map.texture.name=N.name+".shadowMap",U.map.depthTexture=new $s(s.x,s.y,Yn),U.map.depthTexture.name=N.name+".shadowMapDepth",U.map.depthTexture.format=Ti,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Xt,U.map.depthTexture.magFilter=Xt}else N.isPointLight?(U.map=new Ip(s.x),U.map.depthTexture=new Bx(s.x,ti)):(U.map=new Qn(s.x,s.y),U.map.depthTexture=new $s(s.x,s.y,ti)),U.map.depthTexture.name=N.name+".shadowMap",U.map.depthTexture.format=Ti,this.type===wo?(U.map.depthTexture.compareFunction=ce?su:iu,U.map.depthTexture.minFilter=Jt,U.map.depthTexture.magFilter=Jt):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Xt,U.map.depthTexture.magFilter=Xt);U.camera.updateProjectionMatrix()}const de=U.map.isWebGLCubeRenderTarget?6:1;for(let Ee=0;Ee<de;Ee++){if(U.map.isWebGLCubeRenderTarget)t.setRenderTarget(U.map,Ee),t.clear();else{Ee===0&&(t.setRenderTarget(U.map),t.clear());const Ce=U.getViewport(Ee);o.set(r.x*Ce.x,r.y*Ce.y,r.x*Ce.z,r.y*Ce.w),V.viewport(o)}if(N.isPointLight){const Ce=U.camera,Xe=U.matrix,st=N.distance||Ce.far;st!==Ce.far&&(Ce.far=st,Ce.updateProjectionMatrix()),lr.setFromMatrixPosition(N.matrixWorld),Ce.position.copy(lr),gl.copy(Ce.position),gl.add(kM[Ee]),Ce.up.copy(zM[Ee]),Ce.lookAt(gl),Ce.updateMatrixWorld(),Xe.makeTranslation(-lr.x,-lr.y,-lr.z),wd.multiplyMatrices(Ce.projectionMatrix,Ce.matrixWorldInverse),U._frustum.setFromProjectionMatrix(wd,Ce.coordinateSystem,Ce.reversedDepth)}else U.updateMatrices(N);i=U.getFrustum(),M(L,v,U.camera,N,this.type)}U.isPointLightShadow!==!0&&this.type===dr&&S(U,v),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(R,B,C)};function S(T,L){const v=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Qn(s.x,s.y,{format:us,type:Ei})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(L,null,v,d,_,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(L,null,v,h,_,null)}function E(T,L,v,R){let B=null;const C=v.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)B=C;else if(B=v.isPointLight===!0?l:a,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const V=B.uuid,W=L.uuid;let k=c[V];k===void 0&&(k={},c[V]=k);let P=k[W];P===void 0&&(P=B.clone(),k[W]=P,L.addEventListener("dispose",D)),B=P}if(B.visible=L.visible,B.wireframe=L.wireframe,R===dr?B.side=L.shadowSide!==null?L.shadowSide:L.side:B.side=L.shadowSide!==null?L.shadowSide:f[L.side],B.alphaMap=L.alphaMap,B.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,B.map=L.map,B.clipShadows=L.clipShadows,B.clippingPlanes=L.clippingPlanes,B.clipIntersection=L.clipIntersection,B.displacementMap=L.displacementMap,B.displacementScale=L.displacementScale,B.displacementBias=L.displacementBias,B.wireframeLinewidth=L.wireframeLinewidth,B.linewidth=L.linewidth,v.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const V=t.properties.get(B);V.light=v}return B}function M(T,L,v,R,B){if(T.visible===!1)return;if(T.layers.test(L.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&B===dr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,T.matrixWorld);const W=e.update(T),k=T.material;if(Array.isArray(k)){const P=W.groups;for(let N=0,U=P.length;N<U;N++){const K=P[N],ce=k[K.materialIndex];if(ce&&ce.visible){const de=E(T,ce,R,B);T.onBeforeShadow(t,T,L,v,W,de,K),t.renderBufferDirect(v,null,W,de,T,K),T.onAfterShadow(t,T,L,v,W,de,K)}}}else if(k.visible){const P=E(T,k,R,B);T.onBeforeShadow(t,T,L,v,W,P,null),t.renderBufferDirect(v,null,W,P,T,null),T.onAfterShadow(t,T,L,v,W,P,null)}}const V=T.children;for(let W=0,k=V.length;W<k;W++)M(V[W],L,v,R,B)}function D(T){T.target.removeEventListener("dispose",D);for(const v in c){const R=c[v],B=T.target.uuid;B in R&&(R[B].dispose(),delete R[B])}}}function VM(t,e){function n(){let F=!1;const ye=new Dt;let ie=null;const De=new Dt(0,0,0,0);return{setMask:function(Me){ie!==Me&&!F&&(t.colorMask(Me,Me,Me,Me),ie=Me)},setLocked:function(Me){F=Me},setClear:function(Me,ue,Be,Ze,It){It===!0&&(Me*=Ze,ue*=Ze,Be*=Ze),ye.set(Me,ue,Be,Ze),De.equals(ye)===!1&&(t.clearColor(Me,ue,Be,Ze),De.copy(ye))},reset:function(){F=!1,ie=null,De.set(-1,0,0,0)}}}function i(){let F=!1,ye=!1,ie=null,De=null,Me=null;return{setReversed:function(ue){if(ye!==ue){const Be=e.get("EXT_clip_control");ue?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),ye=ue;const Ze=Me;Me=null,this.setClear(Ze)}},getReversed:function(){return ye},setTest:function(ue){ue?le(t.DEPTH_TEST):Oe(t.DEPTH_TEST)},setMask:function(ue){ie!==ue&&!F&&(t.depthMask(ue),ie=ue)},setFunc:function(ue){if(ye&&(ue=K0[ue]),De!==ue){switch(ue){case Ol:t.depthFunc(t.NEVER);break;case Bl:t.depthFunc(t.ALWAYS);break;case kl:t.depthFunc(t.LESS);break;case Xs:t.depthFunc(t.LEQUAL);break;case zl:t.depthFunc(t.EQUAL);break;case Hl:t.depthFunc(t.GEQUAL);break;case Vl:t.depthFunc(t.GREATER);break;case Gl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}De=ue}},setLocked:function(ue){F=ue},setClear:function(ue){Me!==ue&&(Me=ue,ye&&(ue=1-ue),t.clearDepth(ue))},reset:function(){F=!1,ie=null,De=null,Me=null,ye=!1}}}function s(){let F=!1,ye=null,ie=null,De=null,Me=null,ue=null,Be=null,Ze=null,It=null;return{setTest:function(gt){F||(gt?le(t.STENCIL_TEST):Oe(t.STENCIL_TEST))},setMask:function(gt){ye!==gt&&!F&&(t.stencilMask(gt),ye=gt)},setFunc:function(gt,si,Bn){(ie!==gt||De!==si||Me!==Bn)&&(t.stencilFunc(gt,si,Bn),ie=gt,De=si,Me=Bn)},setOp:function(gt,si,Bn){(ue!==gt||Be!==si||Ze!==Bn)&&(t.stencilOp(gt,si,Bn),ue=gt,Be=si,Ze=Bn)},setLocked:function(gt){F=gt},setClear:function(gt){It!==gt&&(t.clearStencil(gt),It=gt)},reset:function(){F=!1,ye=null,ie=null,De=null,Me=null,ue=null,Be=null,Ze=null,It=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},f={},d={},h=new WeakMap,g=[],_=null,m=!1,p=null,S=null,E=null,M=null,D=null,T=null,L=null,v=new lt(0,0,0),R=0,B=!1,C=null,V=null,W=null,k=null,P=null;const N=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,K=0;const ce=t.getParameter(t.VERSION);ce.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ce)[1]),U=K>=1):ce.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),U=K>=2);let de=null,Ee={};const Ce=t.getParameter(t.SCISSOR_BOX),Xe=t.getParameter(t.VIEWPORT),st=new Dt().fromArray(Ce),Ve=new Dt().fromArray(Xe);function ne(F,ye,ie,De){const Me=new Uint8Array(4),ue=t.createTexture();t.bindTexture(F,ue),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Be=0;Be<ie;Be++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(ye,0,t.RGBA,1,1,De,0,t.RGBA,t.UNSIGNED_BYTE,Me):t.texImage2D(ye+Be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Me);return ue}const xe={};xe[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),xe[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),xe[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),xe[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(t.DEPTH_TEST),o.setFunc(Xs),se(!1),fe(Sf),le(t.CULL_FACE),te(xi);function le(F){u[F]!==!0&&(t.enable(F),u[F]=!0)}function Oe(F){u[F]!==!1&&(t.disable(F),u[F]=!1)}function Ge(F,ye){return d[F]!==ye?(t.bindFramebuffer(F,ye),d[F]=ye,F===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ye),F===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ye),!0):!1}function We(F,ye){let ie=g,De=!1;if(F){ie=h.get(ye),ie===void 0&&(ie=[],h.set(ye,ie));const Me=F.textures;if(ie.length!==Me.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let ue=0,Be=Me.length;ue<Be;ue++)ie[ue]=t.COLOR_ATTACHMENT0+ue;ie.length=Me.length,De=!0}}else ie[0]!==t.BACK&&(ie[0]=t.BACK,De=!0);De&&t.drawBuffers(ie)}function w(F){return _!==F?(t.useProgram(F),_=F,!0):!1}const I={[es]:t.FUNC_ADD,[v0]:t.FUNC_SUBTRACT,[S0]:t.FUNC_REVERSE_SUBTRACT};I[b0]=t.MIN,I[y0]=t.MAX;const X={[M0]:t.ZERO,[E0]:t.ONE,[T0]:t.SRC_COLOR,[Nl]:t.SRC_ALPHA,[D0]:t.SRC_ALPHA_SATURATE,[C0]:t.DST_COLOR,[w0]:t.DST_ALPHA,[A0]:t.ONE_MINUS_SRC_COLOR,[Fl]:t.ONE_MINUS_SRC_ALPHA,[P0]:t.ONE_MINUS_DST_COLOR,[R0]:t.ONE_MINUS_DST_ALPHA,[L0]:t.CONSTANT_COLOR,[I0]:t.ONE_MINUS_CONSTANT_COLOR,[U0]:t.CONSTANT_ALPHA,[N0]:t.ONE_MINUS_CONSTANT_ALPHA};function te(F,ye,ie,De,Me,ue,Be,Ze,It,gt){if(F===xi){m===!0&&(Oe(t.BLEND),m=!1);return}if(m===!1&&(le(t.BLEND),m=!0),F!==x0){if(F!==p||gt!==B){if((S!==es||D!==es)&&(t.blendEquation(t.FUNC_ADD),S=es,D=es),gt)switch(F){case Hs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bf:t.blendFunc(t.ONE,t.ONE);break;case yf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Mf:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ft("WebGLState: Invalid blending: ",F);break}else switch(F){case Hs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case yf:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mf:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",F);break}E=null,M=null,T=null,L=null,v.set(0,0,0),R=0,p=F,B=gt}return}Me=Me||ye,ue=ue||ie,Be=Be||De,(ye!==S||Me!==D)&&(t.blendEquationSeparate(I[ye],I[Me]),S=ye,D=Me),(ie!==E||De!==M||ue!==T||Be!==L)&&(t.blendFuncSeparate(X[ie],X[De],X[ue],X[Be]),E=ie,M=De,T=ue,L=Be),(Ze.equals(v)===!1||It!==R)&&(t.blendColor(Ze.r,Ze.g,Ze.b,It),v.copy(Ze),R=It),p=F,B=!1}function Z(F,ye){F.side===gi?Oe(t.CULL_FACE):le(t.CULL_FACE);let ie=F.side===dn;ye&&(ie=!ie),se(ie),F.blending===Hs&&F.transparent===!1?te(xi):te(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const De=F.stencilWrite;a.setTest(De),De&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),A(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function se(F){C!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),C=F)}function fe(F){F!==m0?(le(t.CULL_FACE),F!==V&&(F===Sf?t.cullFace(t.BACK):F===g0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Oe(t.CULL_FACE),V=F}function ge(F){F!==W&&(U&&t.lineWidth(F),W=F)}function A(F,ye,ie){F?(le(t.POLYGON_OFFSET_FILL),(k!==ye||P!==ie)&&(k=ye,P=ie,o.getReversed()&&(ye=-ye),t.polygonOffset(ye,ie))):Oe(t.POLYGON_OFFSET_FILL)}function re(F){F?le(t.SCISSOR_TEST):Oe(t.SCISSOR_TEST)}function ve(F){F===void 0&&(F=t.TEXTURE0+N-1),de!==F&&(t.activeTexture(F),de=F)}function he(F,ye,ie){ie===void 0&&(de===null?ie=t.TEXTURE0+N-1:ie=de);let De=Ee[ie];De===void 0&&(De={type:void 0,texture:void 0},Ee[ie]=De),(De.type!==F||De.texture!==ye)&&(de!==ie&&(t.activeTexture(ie),de=ie),t.bindTexture(F,ye||xe[F]),De.type=F,De.texture=ye)}function ee(){const F=Ee[de];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Pe(){try{t.compressedTexImage2D(...arguments)}catch(F){ft("WebGLState:",F)}}function y(){try{t.compressedTexImage3D(...arguments)}catch(F){ft("WebGLState:",F)}}function x(){try{t.texSubImage2D(...arguments)}catch(F){ft("WebGLState:",F)}}function O(){try{t.texSubImage3D(...arguments)}catch(F){ft("WebGLState:",F)}}function J(){try{t.compressedTexSubImage2D(...arguments)}catch(F){ft("WebGLState:",F)}}function oe(){try{t.compressedTexSubImage3D(...arguments)}catch(F){ft("WebGLState:",F)}}function pe(){try{t.texStorage2D(...arguments)}catch(F){ft("WebGLState:",F)}}function me(){try{t.texStorage3D(...arguments)}catch(F){ft("WebGLState:",F)}}function Q(){try{t.texImage2D(...arguments)}catch(F){ft("WebGLState:",F)}}function ae(){try{t.texImage3D(...arguments)}catch(F){ft("WebGLState:",F)}}function Se(F){return f[F]!==void 0?f[F]:t.getParameter(F)}function Te(F,ye){f[F]!==ye&&(t.pixelStorei(F,ye),f[F]=ye)}function be(F){st.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),st.copy(F))}function _e(F){Ve.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Ve.copy(F))}function Ye(F,ye){let ie=c.get(ye);ie===void 0&&(ie=new WeakMap,c.set(ye,ie));let De=ie.get(F);De===void 0&&(De=t.getUniformBlockIndex(ye,F.name),ie.set(F,De))}function et(F,ye){const De=c.get(ye).get(F);l.get(ye)!==De&&(t.uniformBlockBinding(ye,De,F.__bindingPointIndex),l.set(ye,De))}function dt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},de=null,Ee={},d={},h=new WeakMap,g=[],_=null,m=!1,p=null,S=null,E=null,M=null,D=null,T=null,L=null,v=new lt(0,0,0),R=0,B=!1,C=null,V=null,W=null,k=null,P=null,st.set(0,0,t.canvas.width,t.canvas.height),Ve.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:le,disable:Oe,bindFramebuffer:Ge,drawBuffers:We,useProgram:w,setBlending:te,setMaterial:Z,setFlipSided:se,setCullFace:fe,setLineWidth:ge,setPolygonOffset:A,setScissorTest:re,activeTexture:ve,bindTexture:he,unbindTexture:ee,compressedTexImage2D:Pe,compressedTexImage3D:y,texImage2D:Q,texImage3D:ae,pixelStorei:Te,getParameter:Se,updateUBOMapping:Ye,uniformBlockBinding:et,texStorage2D:pe,texStorage3D:me,texSubImage2D:x,texSubImage3D:O,compressedTexSubImage2D:J,compressedTexSubImage3D:oe,scissor:be,viewport:_e,reset:dt}}function GM(t,e,n,i,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Qe,u=new WeakMap,f=new Set;let d;const h=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,x){return g?new OffscreenCanvas(y,x):Yo("canvas")}function m(y,x,O){let J=1;const oe=Pe(y);if((oe.width>O||oe.height>O)&&(J=O/Math.max(oe.width,oe.height)),J<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const pe=Math.floor(J*oe.width),me=Math.floor(J*oe.height);d===void 0&&(d=_(pe,me));const Q=x?_(pe,me):d;return Q.width=pe,Q.height=me,Q.getContext("2d").drawImage(y,0,0,pe,me),qe("WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+pe+"x"+me+")."),Q}else return"data"in y&&qe("WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),y;return y}function p(y){return y.generateMipmaps}function S(y){t.generateMipmap(y)}function E(y){return y.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?t.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function M(y,x,O,J,oe,pe=!1){if(y!==null){if(t[y]!==void 0)return t[y];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let me;J&&(me=e.get("EXT_texture_norm16"),me||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=x;if(x===t.RED&&(O===t.FLOAT&&(Q=t.R32F),O===t.HALF_FLOAT&&(Q=t.R16F),O===t.UNSIGNED_BYTE&&(Q=t.R8),O===t.UNSIGNED_SHORT&&me&&(Q=me.R16_EXT),O===t.SHORT&&me&&(Q=me.R16_SNORM_EXT)),x===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(Q=t.R8UI),O===t.UNSIGNED_SHORT&&(Q=t.R16UI),O===t.UNSIGNED_INT&&(Q=t.R32UI),O===t.BYTE&&(Q=t.R8I),O===t.SHORT&&(Q=t.R16I),O===t.INT&&(Q=t.R32I)),x===t.RG&&(O===t.FLOAT&&(Q=t.RG32F),O===t.HALF_FLOAT&&(Q=t.RG16F),O===t.UNSIGNED_BYTE&&(Q=t.RG8),O===t.UNSIGNED_SHORT&&me&&(Q=me.RG16_EXT),O===t.SHORT&&me&&(Q=me.RG16_SNORM_EXT)),x===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(Q=t.RG8UI),O===t.UNSIGNED_SHORT&&(Q=t.RG16UI),O===t.UNSIGNED_INT&&(Q=t.RG32UI),O===t.BYTE&&(Q=t.RG8I),O===t.SHORT&&(Q=t.RG16I),O===t.INT&&(Q=t.RG32I)),x===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),O===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),O===t.UNSIGNED_INT&&(Q=t.RGB32UI),O===t.BYTE&&(Q=t.RGB8I),O===t.SHORT&&(Q=t.RGB16I),O===t.INT&&(Q=t.RGB32I)),x===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),O===t.UNSIGNED_INT&&(Q=t.RGBA32UI),O===t.BYTE&&(Q=t.RGBA8I),O===t.SHORT&&(Q=t.RGBA16I),O===t.INT&&(Q=t.RGBA32I)),x===t.RGB&&(O===t.UNSIGNED_SHORT&&me&&(Q=me.RGB16_EXT),O===t.SHORT&&me&&(Q=me.RGB16_SNORM_EXT),O===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),O===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),x===t.RGBA){const ae=pe?jo:ct.getTransfer(oe);O===t.FLOAT&&(Q=t.RGBA32F),O===t.HALF_FLOAT&&(Q=t.RGBA16F),O===t.UNSIGNED_BYTE&&(Q=ae===mt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT&&me&&(Q=me.RGBA16_EXT),O===t.SHORT&&me&&(Q=me.RGBA16_SNORM_EXT),O===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function D(y,x){let O;return y?x===null||x===ti||x===Pr?O=t.DEPTH24_STENCIL8:x===Yn?O=t.DEPTH32F_STENCIL8:x===Cr&&(O=t.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ti||x===Pr?O=t.DEPTH_COMPONENT24:x===Yn?O=t.DEPTH_COMPONENT32F:x===Cr&&(O=t.DEPTH_COMPONENT16),O}function T(y,x){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==Xt&&y.minFilter!==Jt?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function L(y){const x=y.target;x.removeEventListener("dispose",L),R(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&f.delete(x)}function v(y){const x=y.target;x.removeEventListener("dispose",v),C(x)}function R(y){const x=i.get(y);if(x.__webglInit===void 0)return;const O=y.source,J=h.get(O);if(J){const oe=J[x.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&B(y),Object.keys(J).length===0&&h.delete(O)}i.remove(y)}function B(y){const x=i.get(y);t.deleteTexture(x.__webglTexture);const O=y.source,J=h.get(O);delete J[x.__cacheKey],o.memory.textures--}function C(y){const x=i.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),i.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let oe=0;oe<x.__webglFramebuffer[J].length;oe++)t.deleteFramebuffer(x.__webglFramebuffer[J][oe]);else t.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)t.deleteFramebuffer(x.__webglFramebuffer[J]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const O=y.textures;for(let J=0,oe=O.length;J<oe;J++){const pe=i.get(O[J]);pe.__webglTexture&&(t.deleteTexture(pe.__webglTexture),o.memory.textures--),i.remove(O[J])}i.remove(y)}let V=0;function W(){V=0}function k(){return V}function P(y){V=y}function N(){const y=V;return y>=s.maxTextures&&qe("WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),V+=1,y}function U(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function K(y,x){const O=i.get(y);if(y.isVideoTexture&&he(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&O.__version!==y.version){const J=y.image;if(J===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(O,y,x);return}}else y.isExternalTexture&&(O.__webglTexture=y.sourceTexture?y.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+x)}function ce(y,x){const O=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){Oe(O,y,x);return}else y.isExternalTexture&&(O.__webglTexture=y.sourceTexture?y.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+x)}function de(y,x){const O=i.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&O.__version!==y.version){Oe(O,y,x);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+x)}function Ee(y,x){const O=i.get(y);if(y.isCubeDepthTexture!==!0&&y.version>0&&O.__version!==y.version){Ge(O,y,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+x)}const Ce={[Wl]:t.REPEAT,[_i]:t.CLAMP_TO_EDGE,[Xl]:t.MIRRORED_REPEAT},Xe={[Xt]:t.NEAREST,[B0]:t.NEAREST_MIPMAP_NEAREST,[jr]:t.NEAREST_MIPMAP_LINEAR,[Jt]:t.LINEAR,[za]:t.LINEAR_MIPMAP_NEAREST,[ns]:t.LINEAR_MIPMAP_LINEAR},st={[H0]:t.NEVER,[q0]:t.ALWAYS,[V0]:t.LESS,[iu]:t.LEQUAL,[G0]:t.EQUAL,[su]:t.GEQUAL,[W0]:t.GREATER,[X0]:t.NOTEQUAL};function Ve(y,x){if(x.type===Yn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Jt||x.magFilter===za||x.magFilter===jr||x.magFilter===ns||x.minFilter===Jt||x.minFilter===za||x.minFilter===jr||x.minFilter===ns)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(y,t.TEXTURE_WRAP_S,Ce[x.wrapS]),t.texParameteri(y,t.TEXTURE_WRAP_T,Ce[x.wrapT]),(y===t.TEXTURE_3D||y===t.TEXTURE_2D_ARRAY)&&t.texParameteri(y,t.TEXTURE_WRAP_R,Ce[x.wrapR]),t.texParameteri(y,t.TEXTURE_MAG_FILTER,Xe[x.magFilter]),t.texParameteri(y,t.TEXTURE_MIN_FILTER,Xe[x.minFilter]),x.compareFunction&&(t.texParameteri(y,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(y,t.TEXTURE_COMPARE_FUNC,st[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Xt||x.minFilter!==jr&&x.minFilter!==ns||x.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(y,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ne(y,x){let O=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",L));const J=x.source;let oe=h.get(J);oe===void 0&&(oe={},h.set(J,oe));const pe=U(x);if(pe!==y.__cacheKey){oe[pe]===void 0&&(oe[pe]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),oe[pe].usedTimes++;const me=oe[y.__cacheKey];me!==void 0&&(oe[y.__cacheKey].usedTimes--,me.usedTimes===0&&B(x)),y.__cacheKey=pe,y.__webglTexture=oe[pe].texture}return O}function xe(y,x,O){return Math.floor(Math.floor(y/O)/x)}function le(y,x,O,J){const pe=y.updateRanges;if(pe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,O,J,x.data);else{pe.sort((Te,be)=>Te.start-be.start);let me=0;for(let Te=1;Te<pe.length;Te++){const be=pe[me],_e=pe[Te],Ye=be.start+be.count,et=xe(_e.start,x.width,4),dt=xe(be.start,x.width,4);_e.start<=Ye+1&&et===dt&&xe(_e.start+_e.count-1,x.width,4)===et?be.count=Math.max(be.count,_e.start+_e.count-be.start):(++me,pe[me]=_e)}pe.length=me+1;const Q=n.getParameter(t.UNPACK_ROW_LENGTH),ae=n.getParameter(t.UNPACK_SKIP_PIXELS),Se=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let Te=0,be=pe.length;Te<be;Te++){const _e=pe[Te],Ye=Math.floor(_e.start/4),et=Math.ceil(_e.count/4),dt=Ye%x.width,F=Math.floor(Ye/x.width),ye=et,ie=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,dt),n.pixelStorei(t.UNPACK_SKIP_ROWS,F),n.texSubImage2D(t.TEXTURE_2D,0,dt,F,ye,ie,O,J,x.data)}y.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ae),n.pixelStorei(t.UNPACK_SKIP_ROWS,Se)}}function Oe(y,x,O){let J=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=t.TEXTURE_3D);const oe=ne(y,x),pe=x.source;n.bindTexture(J,y.__webglTexture,t.TEXTURE0+O);const me=i.get(pe);if(pe.version!==me.__version||oe===!0){if(n.activeTexture(t.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const ie=ct.getPrimaries(ct.workingColorSpace),De=x.colorSpace===ki?null:ct.getPrimaries(x.colorSpace),Me=x.colorSpace===ki||ie===De?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me)}n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment);let ae=m(x.image,!1,s.maxTextureSize);ae=ee(x,ae);const Se=r.convert(x.format,x.colorSpace),Te=r.convert(x.type);let be=M(x.internalFormat,Se,Te,x.normalized,x.colorSpace,x.isVideoTexture);Ve(J,x);let _e;const Ye=x.mipmaps,et=x.isVideoTexture!==!0,dt=me.__version===void 0||oe===!0,F=pe.dataReady,ye=T(x,ae);if(x.isDepthTexture)be=D(x.format===is,x.type),dt&&(et?n.texStorage2D(t.TEXTURE_2D,1,be,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,be,ae.width,ae.height,0,Se,Te,null));else if(x.isDataTexture)if(Ye.length>0){et&&dt&&n.texStorage2D(t.TEXTURE_2D,ye,be,Ye[0].width,Ye[0].height);for(let ie=0,De=Ye.length;ie<De;ie++)_e=Ye[ie],et?F&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,_e.width,_e.height,Se,Te,_e.data):n.texImage2D(t.TEXTURE_2D,ie,be,_e.width,_e.height,0,Se,Te,_e.data);x.generateMipmaps=!1}else et?(dt&&n.texStorage2D(t.TEXTURE_2D,ye,be,ae.width,ae.height),F&&le(x,ae,Se,Te)):n.texImage2D(t.TEXTURE_2D,0,be,ae.width,ae.height,0,Se,Te,ae.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){et&&dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,be,Ye[0].width,Ye[0].height,ae.depth);for(let ie=0,De=Ye.length;ie<De;ie++)if(_e=Ye[ie],x.format!==Ln)if(Se!==null)if(et){if(F)if(x.layerUpdates.size>0){const Me=sd(_e.width,_e.height,x.format,x.type);for(const ue of x.layerUpdates){const Be=_e.data.subarray(ue*Me/_e.data.BYTES_PER_ELEMENT,(ue+1)*Me/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,ue,_e.width,_e.height,1,Se,Be)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,_e.width,_e.height,ae.depth,Se,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,be,_e.width,_e.height,ae.depth,0,_e.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,_e.width,_e.height,ae.depth,Se,Te,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,be,_e.width,_e.height,ae.depth,0,Se,Te,_e.data)}else{et&&dt&&n.texStorage2D(t.TEXTURE_2D,ye,be,Ye[0].width,Ye[0].height);for(let ie=0,De=Ye.length;ie<De;ie++)_e=Ye[ie],x.format!==Ln?Se!==null?et?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,_e.width,_e.height,Se,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,be,_e.width,_e.height,0,_e.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?F&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,_e.width,_e.height,Se,Te,_e.data):n.texImage2D(t.TEXTURE_2D,ie,be,_e.width,_e.height,0,Se,Te,_e.data)}else if(x.isDataArrayTexture)if(et){if(dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ye,be,ae.width,ae.height,ae.depth),F)if(x.layerUpdates.size>0){const ie=sd(ae.width,ae.height,x.format,x.type);for(const De of x.layerUpdates){const Me=ae.data.subarray(De*ie/ae.data.BYTES_PER_ELEMENT,(De+1)*ie/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,De,ae.width,ae.height,1,Se,Te,Me)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Se,Te,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,ae.width,ae.height,ae.depth,0,Se,Te,ae.data);else if(x.isData3DTexture)et?(dt&&n.texStorage3D(t.TEXTURE_3D,ye,be,ae.width,ae.height,ae.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Se,Te,ae.data)):n.texImage3D(t.TEXTURE_3D,0,be,ae.width,ae.height,ae.depth,0,Se,Te,ae.data);else if(x.isFramebufferTexture){if(dt)if(et)n.texStorage2D(t.TEXTURE_2D,ye,be,ae.width,ae.height);else{let ie=ae.width,De=ae.height;for(let Me=0;Me<ye;Me++)n.texImage2D(t.TEXTURE_2D,Me,be,ie,De,0,Se,Te,null),ie>>=1,De>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in t){const ie=t.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),ae.parentNode!==ie){ie.appendChild(ae),f.add(x),ie.onpaint=Ze=>{const It=Ze.changedElements;for(const gt of f)It.includes(gt.image)&&(gt.needsUpdate=!0)},ie.requestPaint();return}const De=0,Me=t.RGBA,ue=t.RGBA,Be=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,De,Me,ue,Be,ae),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Ye.length>0){if(et&&dt){const ie=Pe(Ye[0]);n.texStorage2D(t.TEXTURE_2D,ye,be,ie.width,ie.height)}for(let ie=0,De=Ye.length;ie<De;ie++)_e=Ye[ie],et?F&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,Se,Te,_e):n.texImage2D(t.TEXTURE_2D,ie,be,Se,Te,_e);x.generateMipmaps=!1}else if(et){if(dt){const ie=Pe(ae);n.texStorage2D(t.TEXTURE_2D,ye,be,ie.width,ie.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,Te,ae)}else n.texImage2D(t.TEXTURE_2D,0,be,Se,Te,ae);p(x)&&S(J),me.__version=pe.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function Ge(y,x,O){if(x.image.length!==6)return;const J=ne(y,x),oe=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,y.__webglTexture,t.TEXTURE0+O);const pe=i.get(oe);if(oe.version!==pe.__version||J===!0){n.activeTexture(t.TEXTURE0+O);const me=ct.getPrimaries(ct.workingColorSpace),Q=x.colorSpace===ki?null:ct.getPrimaries(x.colorSpace),ae=x.colorSpace===ki||me===Q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const Se=x.isCompressedTexture||x.image[0].isCompressedTexture,Te=x.image[0]&&x.image[0].isDataTexture,be=[];for(let ue=0;ue<6;ue++)!Se&&!Te?be[ue]=m(x.image[ue],!0,s.maxCubemapSize):be[ue]=Te?x.image[ue].image:x.image[ue],be[ue]=ee(x,be[ue]);const _e=be[0],Ye=r.convert(x.format,x.colorSpace),et=r.convert(x.type),dt=M(x.internalFormat,Ye,et,x.normalized,x.colorSpace),F=x.isVideoTexture!==!0,ye=pe.__version===void 0||J===!0,ie=oe.dataReady;let De=T(x,_e);Ve(t.TEXTURE_CUBE_MAP,x);let Me;if(Se){F&&ye&&n.texStorage2D(t.TEXTURE_CUBE_MAP,De,dt,_e.width,_e.height);for(let ue=0;ue<6;ue++){Me=be[ue].mipmaps;for(let Be=0;Be<Me.length;Be++){const Ze=Me[Be];x.format!==Ln?Ye!==null?F?ie&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be,0,0,Ze.width,Ze.height,Ye,Ze.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be,dt,Ze.width,Ze.height,0,Ze.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be,0,0,Ze.width,Ze.height,Ye,et,Ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be,dt,Ze.width,Ze.height,0,Ye,et,Ze.data)}}}else{if(Me=x.mipmaps,F&&ye){Me.length>0&&De++;const ue=Pe(be[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,De,dt,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(Te){F?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,be[ue].width,be[ue].height,Ye,et,be[ue].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,dt,be[ue].width,be[ue].height,0,Ye,et,be[ue].data);for(let Be=0;Be<Me.length;Be++){const It=Me[Be].image[ue].image;F?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be+1,0,0,It.width,It.height,Ye,et,It.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be+1,dt,It.width,It.height,0,Ye,et,It.data)}}else{F?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ye,et,be[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,dt,Ye,et,be[ue]);for(let Be=0;Be<Me.length;Be++){const Ze=Me[Be];F?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be+1,0,0,Ye,et,Ze.image[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be+1,dt,Ye,et,Ze.image[ue])}}}p(x)&&S(t.TEXTURE_CUBE_MAP),pe.__version=oe.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function We(y,x,O,J,oe,pe){const me=r.convert(O.format,O.colorSpace),Q=r.convert(O.type),ae=M(O.internalFormat,me,Q,O.normalized,O.colorSpace),Se=i.get(x),Te=i.get(O);if(Te.__renderTarget=x,!Se.__hasExternalTextures){const be=Math.max(1,x.width>>pe),_e=Math.max(1,x.height>>pe);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,pe,ae,be,_e,x.depth,0,me,Q,null):n.texImage2D(oe,pe,ae,be,_e,0,me,Q,null)}n.bindFramebuffer(t.FRAMEBUFFER,y),ve(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,J,oe,Te.__webglTexture,0,re(x)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,J,oe,Te.__webglTexture,pe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function w(y,x,O){if(t.bindRenderbuffer(t.RENDERBUFFER,y),x.depthBuffer){const J=x.depthTexture,oe=J&&J.isDepthTexture?J.type:null,pe=D(x.stencilBuffer,oe),me=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ve(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re(x),pe,x.width,x.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,re(x),pe,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,pe,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,me,t.RENDERBUFFER,y)}else{const J=x.textures;for(let oe=0;oe<J.length;oe++){const pe=J[oe],me=r.convert(pe.format,pe.colorSpace),Q=r.convert(pe.type),ae=M(pe.internalFormat,me,Q,pe.normalized,pe.colorSpace);ve(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,re(x),ae,x.width,x.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,re(x),ae,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,ae,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function I(y,x,O){const J=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=i.get(x.depthTexture);if(oe.__renderTarget=x,(!oe.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J){if(oe.__webglInit===void 0&&(oe.__webglInit=!0,x.depthTexture.addEventListener("dispose",L)),oe.__webglTexture===void 0){oe.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,oe.__webglTexture),Ve(t.TEXTURE_CUBE_MAP,x.depthTexture);const Se=r.convert(x.depthTexture.format),Te=r.convert(x.depthTexture.type);let be;x.depthTexture.format===Ti?be=t.DEPTH_COMPONENT24:x.depthTexture.format===is&&(be=t.DEPTH24_STENCIL8);for(let _e=0;_e<6;_e++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,be,x.width,x.height,0,Se,Te,null)}}else K(x.depthTexture,0);const pe=oe.__webglTexture,me=re(x),Q=J?t.TEXTURE_CUBE_MAP_POSITIVE_X+O:t.TEXTURE_2D,ae=x.depthTexture.format===is?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ti)ve(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,Q,pe,0,me):t.framebufferTexture2D(t.FRAMEBUFFER,ae,Q,pe,0);else if(x.depthTexture.format===is)ve(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,Q,pe,0,me):t.framebufferTexture2D(t.FRAMEBUFFER,ae,Q,pe,0);else throw new Error("Unknown depthTexture format")}function X(y){const x=i.get(y),O=y.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==y.depthTexture){const J=y.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),J){const oe=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,J.removeEventListener("dispose",oe)};J.addEventListener("dispose",oe),x.__depthDisposeCallback=oe}x.__boundDepthTexture=J}if(y.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let J=0;J<6;J++)I(x.__webglFramebuffer[J],y,J);else{const J=y.texture.mipmaps;J&&J.length>0?I(x.__webglFramebuffer[0],y,0):I(x.__webglFramebuffer,y,0)}else if(O){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]===void 0)x.__webglDepthbuffer[J]=t.createRenderbuffer(),w(x.__webglDepthbuffer[J],y,!1);else{const oe=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=x.__webglDepthbuffer[J];t.bindRenderbuffer(t.RENDERBUFFER,pe),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,pe)}}else{const J=y.texture.mipmaps;if(J&&J.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),w(x.__webglDepthbuffer,y,!1);else{const oe=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,pe),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,pe)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function te(y,x,O){const J=i.get(y);x!==void 0&&We(J.__webglFramebuffer,y,y.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&X(y)}function Z(y){const x=y.texture,O=i.get(y),J=i.get(x);y.addEventListener("dispose",v);const oe=y.textures,pe=y.isWebGLCubeRenderTarget===!0,me=oe.length>1;if(me||(J.__webglTexture===void 0&&(J.__webglTexture=t.createTexture()),J.__version=x.version,o.memory.textures++),pe){O.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[Q]=[];for(let ae=0;ae<x.mipmaps.length;ae++)O.__webglFramebuffer[Q][ae]=t.createFramebuffer()}else O.__webglFramebuffer[Q]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)O.__webglFramebuffer[Q]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(me)for(let Q=0,ae=oe.length;Q<ae;Q++){const Se=i.get(oe[Q]);Se.__webglTexture===void 0&&(Se.__webglTexture=t.createTexture(),o.memory.textures++)}if(y.samples>0&&ve(y)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let Q=0;Q<oe.length;Q++){const ae=oe[Q];O.__webglColorRenderbuffer[Q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[Q]);const Se=r.convert(ae.format,ae.colorSpace),Te=r.convert(ae.type),be=M(ae.internalFormat,Se,Te,ae.normalized,ae.colorSpace,y.isXRRenderTarget===!0),_e=re(y);t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,be,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.RENDERBUFFER,O.__webglColorRenderbuffer[Q])}t.bindRenderbuffer(t.RENDERBUFFER,null),y.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),w(O.__webglDepthRenderbuffer,y,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(pe){n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),Ve(t.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0)for(let ae=0;ae<x.mipmaps.length;ae++)We(O.__webglFramebuffer[Q][ae],y,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ae);else We(O.__webglFramebuffer[Q],y,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(x)&&S(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(me){for(let Q=0,ae=oe.length;Q<ae;Q++){const Se=oe[Q],Te=i.get(Se);let be=t.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(be=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(be,Te.__webglTexture),Ve(be,Se),We(O.__webglFramebuffer,y,Se,t.COLOR_ATTACHMENT0+Q,be,0),p(Se)&&S(be)}n.unbindTexture()}else{let Q=t.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(Q=y.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Q,J.__webglTexture),Ve(Q,x),x.mipmaps&&x.mipmaps.length>0)for(let ae=0;ae<x.mipmaps.length;ae++)We(O.__webglFramebuffer[ae],y,x,t.COLOR_ATTACHMENT0,Q,ae);else We(O.__webglFramebuffer,y,x,t.COLOR_ATTACHMENT0,Q,0);p(x)&&S(Q),n.unbindTexture()}y.depthBuffer&&X(y)}function se(y){const x=y.textures;for(let O=0,J=x.length;O<J;O++){const oe=x[O];if(p(oe)){const pe=E(y),me=i.get(oe).__webglTexture;n.bindTexture(pe,me),S(pe),n.unbindTexture()}}}const fe=[],ge=[];function A(y){if(y.samples>0){if(ve(y)===!1){const x=y.textures,O=y.width,J=y.height;let oe=t.COLOR_BUFFER_BIT;const pe=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=i.get(y),Q=x.length>1;if(Q)for(let Se=0;Se<x.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer);const ae=y.texture.mipmaps;ae&&ae.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let Se=0;Se<x.length;Se++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),Q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,me.__webglColorRenderbuffer[Se]);const Te=i.get(x[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Te,0)}t.blitFramebuffer(0,0,O,J,0,0,O,J,oe,t.NEAREST),l===!0&&(fe.length=0,ge.length=0,fe.push(t.COLOR_ATTACHMENT0+Se),y.depthBuffer&&y.resolveDepthBuffer===!1&&(fe.push(pe),ge.push(pe),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ge)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,fe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Q)for(let Se=0;Se<x.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,me.__webglColorRenderbuffer[Se]);const Te=i.get(x[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,Te,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const x=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function re(y){return Math.min(s.maxSamples,y.samples)}function ve(y){const x=i.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function he(y){const x=o.render.frame;u.get(y)!==x&&(u.set(y,x),y.update())}function ee(y,x){const O=y.colorSpace,J=y.format,oe=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||O!==$o&&O!==ki&&(ct.getTransfer(O)===mt?(J!==Ln||oe!==xn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",O)),x}function Pe(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=W,this.getTextureUnits=k,this.setTextureUnits=P,this.setTexture2D=K,this.setTexture2DArray=ce,this.setTexture3D=de,this.setTextureCube=Ee,this.rebindTextures=te,this.setupRenderTarget=Z,this.updateRenderTargetMipmap=se,this.updateMultisampleRenderTarget=A,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=We,this.useMultisampledRTT=ve,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function WM(t,e){function n(i,s=ki){let r;const o=ct.getTransfer(s);if(i===xn)return t.UNSIGNED_BYTE;if(i===Jc)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Qc)return t.UNSIGNED_SHORT_5_5_5_1;if(i===pp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===mp)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===dp)return t.BYTE;if(i===hp)return t.SHORT;if(i===Cr)return t.UNSIGNED_SHORT;if(i===Zc)return t.INT;if(i===ti)return t.UNSIGNED_INT;if(i===Yn)return t.FLOAT;if(i===Ei)return t.HALF_FLOAT;if(i===gp)return t.ALPHA;if(i===_p)return t.RGB;if(i===Ln)return t.RGBA;if(i===Ti)return t.DEPTH_COMPONENT;if(i===is)return t.DEPTH_STENCIL;if(i===xp)return t.RED;if(i===eu)return t.RED_INTEGER;if(i===us)return t.RG;if(i===tu)return t.RG_INTEGER;if(i===nu)return t.RGBA_INTEGER;if(i===Ro||i===Co||i===Po||i===Do)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ro)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Co)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ro)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Co)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Do)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ql||i===$l||i===jl||i===Yl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ql)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$l)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kl||i===Zl||i===Jl||i===Ql||i===ec||i===Xo||i===tc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Kl||i===Zl)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Jl)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ql)return r.COMPRESSED_R11_EAC;if(i===ec)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Xo)return r.COMPRESSED_RG11_EAC;if(i===tc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===nc||i===ic||i===sc||i===rc||i===oc||i===ac||i===lc||i===cc||i===uc||i===fc||i===dc||i===hc||i===pc||i===mc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===nc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ic)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===oc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ac)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===lc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===cc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===uc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===hc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===pc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===mc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gc||i===_c||i===xc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===gc)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_c)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vc||i===Sc||i===qo||i===bc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===vc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Sc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===bc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pr?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const XM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qM=`
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

}`;class $M{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Rp(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ii({vertexShader:XM,fragmentShader:qM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ni(new _a(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jM extends Wi{constructor(e,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",m=new $M,p={},S=n.getContextAttributes();let E=null,M=null;const D=[],T=[],L=new Qe;let v=null;const R=new Tn;R.viewport=new Dt;const B=new Tn;B.viewport=new Dt;const C=[R,B],V=new nv;let W=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let xe=D[ne];return xe===void 0&&(xe=new qa,D[ne]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(ne){let xe=D[ne];return xe===void 0&&(xe=new qa,D[ne]=xe),xe.getGripSpace()},this.getHand=function(ne){let xe=D[ne];return xe===void 0&&(xe=new qa,D[ne]=xe),xe.getHandSpace()};function P(ne){const xe=T.indexOf(ne.inputSource);if(xe===-1)return;const le=D[xe];le!==void 0&&(le.update(ne.inputSource,ne.frame,c||o),le.dispatchEvent({type:ne.type,data:ne.inputSource}))}function N(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",N),s.removeEventListener("inputsourceschange",U);for(let ne=0;ne<D.length;ne++){const xe=T[ne];xe!==null&&(T[ne]=null,D[ne].disconnect(xe))}W=null,k=null,m.reset();for(const ne in p)delete p[ne];e.setRenderTarget(E),h=null,d=null,f=null,s=null,M=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(v),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,n)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",N),s.addEventListener("inputsourceschange",U),S.xrCompatible!==!0&&await n.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(L),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Oe=null,Ge=null;S.depth&&(Ge=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=S.stencil?is:Ti,Oe=S.stencil?Pr:ti);const We={colorFormat:n.RGBA8,depthFormat:Ge,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(We),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Qn(d.textureWidth,d.textureHeight,{format:Ln,type:xn,depthTexture:new $s(d.textureWidth,d.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const le={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,n,le),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new Qn(h.framebufferWidth,h.framebufferHeight,{format:Ln,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Ve.setContext(s),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(ne){for(let xe=0;xe<ne.removed.length;xe++){const le=ne.removed[xe],Oe=T.indexOf(le);Oe>=0&&(T[Oe]=null,D[Oe].disconnect(le))}for(let xe=0;xe<ne.added.length;xe++){const le=ne.added[xe];let Oe=T.indexOf(le);if(Oe===-1){for(let We=0;We<D.length;We++)if(We>=T.length){T.push(le),Oe=We;break}else if(T[We]===null){T[We]=le,Oe=We;break}if(Oe===-1)break}const Ge=D[Oe];Ge&&Ge.connect(le)}}const K=new H,ce=new H;function de(ne,xe,le){K.setFromMatrixPosition(xe.matrixWorld),ce.setFromMatrixPosition(le.matrixWorld);const Oe=K.distanceTo(ce),Ge=xe.projectionMatrix.elements,We=le.projectionMatrix.elements,w=Ge[14]/(Ge[10]-1),I=Ge[14]/(Ge[10]+1),X=(Ge[9]+1)/Ge[5],te=(Ge[9]-1)/Ge[5],Z=(Ge[8]-1)/Ge[0],se=(We[8]+1)/We[0],fe=w*Z,ge=w*se,A=Oe/(-Z+se),re=A*-Z;if(xe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(re),ne.translateZ(A),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ge[10]===-1)ne.projectionMatrix.copy(xe.projectionMatrix),ne.projectionMatrixInverse.copy(xe.projectionMatrixInverse);else{const ve=w+A,he=I+A,ee=fe-re,Pe=ge+(Oe-re),y=X*I/he*ve,x=te*I/he*ve;ne.projectionMatrix.makePerspective(ee,Pe,y,x,ve,he),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function Ee(ne,xe){xe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(xe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let xe=ne.near,le=ne.far;m.texture!==null&&(m.depthNear>0&&(xe=m.depthNear),m.depthFar>0&&(le=m.depthFar)),V.near=B.near=R.near=xe,V.far=B.far=R.far=le,(W!==V.near||k!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),W=V.near,k=V.far),V.layers.mask=ne.layers.mask|6,R.layers.mask=V.layers.mask&-5,B.layers.mask=V.layers.mask&-3;const Oe=ne.parent,Ge=V.cameras;Ee(V,Oe);for(let We=0;We<Ge.length;We++)Ee(Ge[We],Oe);Ge.length===2?de(V,R,B):V.projectionMatrix.copy(R.projectionMatrix),Ce(ne,V,Oe)};function Ce(ne,xe,le){le===null?ne.matrix.copy(xe.matrixWorld):(ne.matrix.copy(le.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(xe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(xe.projectionMatrix),ne.projectionMatrixInverse.copy(xe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Lr*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ne)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(ne){return p[ne]};let Xe=null;function st(ne,xe){if(u=xe.getViewerPose(c||o),g=xe,u!==null){const le=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let Oe=!1;le.length!==V.cameras.length&&(V.cameras.length=0,Oe=!0);for(let I=0;I<le.length;I++){const X=le[I];let te=null;if(h!==null)te=h.getViewport(X);else{const se=f.getViewSubImage(d,X);te=se.viewport,I===0&&(e.setRenderTargetTextures(M,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(M))}let Z=C[I];Z===void 0&&(Z=new Tn,Z.layers.enable(I),Z.viewport=new Dt,C[I]=Z),Z.matrix.fromArray(X.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(X.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(te.x,te.y,te.width,te.height),I===0&&(V.matrix.copy(Z.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Oe===!0&&V.cameras.push(Z)}const Ge=s.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const I=f.getDepthInformation(le[0]);I&&I.isValid&&I.texture&&m.init(I,s.renderState)}if(Ge&&Ge.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let I=0;I<le.length;I++){const X=le[I].camera;if(X){let te=p[X];te||(te=new Rp,p[X]=te);const Z=f.getCameraImage(X);te.sourceTexture=Z}}}}for(let le=0;le<D.length;le++){const Oe=T[le],Ge=D[le];Oe!==null&&Ge!==void 0&&Ge.update(Oe,xe,c||o)}Xe&&Xe(ne,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),g=null}const Ve=new Dp;Ve.setAnimationLoop(st),this.setAnimationLoop=function(ne){Xe=ne},this.dispose=function(){}}}const YM=new Ct,Bp=new Ke;Bp.set(-1,0,0,0,1,0,0,0,1);function KM(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Cp(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,E,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,S,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),E=S.envMap,M=S.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(YM.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Bp),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=E*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function ZM(t,e,n,i){let s={},r={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const M=E.program;i.uniformBlockBinding(S,M)}function c(S,E){let M=s[S.id];M===void 0&&(g(S),M=u(S),s[S.id]=M,S.addEventListener("dispose",m));const D=E.program;i.updateUBOMapping(S,D);const T=e.render.frame;r[S.id]!==T&&(d(S),r[S.id]=T)}function u(S){const E=f();S.__bindingPointIndex=E;const M=t.createBuffer(),D=S.__size,T=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,D,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,M),M}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const E=s[S.id],M=S.uniforms,D=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let T=0,L=M.length;T<L;T++){const v=Array.isArray(M[T])?M[T]:[M[T]];for(let R=0,B=v.length;R<B;R++){const C=v[R];if(h(C,T,R,D)===!0){const V=C.__offset,W=Array.isArray(C.value)?C.value:[C.value];let k=0;for(let P=0;P<W.length;P++){const N=W[P],U=_(N);typeof N=="number"||typeof N=="boolean"?(C.__data[0]=N,t.bufferSubData(t.UNIFORM_BUFFER,V+k,C.__data)):N.isMatrix3?(C.__data[0]=N.elements[0],C.__data[1]=N.elements[1],C.__data[2]=N.elements[2],C.__data[3]=0,C.__data[4]=N.elements[3],C.__data[5]=N.elements[4],C.__data[6]=N.elements[5],C.__data[7]=0,C.__data[8]=N.elements[6],C.__data[9]=N.elements[7],C.__data[10]=N.elements[8],C.__data[11]=0):ArrayBuffer.isView(N)?C.__data.set(new N.constructor(N.buffer,N.byteOffset,C.__data.length)):(N.toArray(C.__data,k),k+=U.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(S,E,M,D){const T=S.value,L=E+"_"+M;if(D[L]===void 0)return typeof T=="number"||typeof T=="boolean"?D[L]=T:ArrayBuffer.isView(T)?D[L]=T.slice():D[L]=T.clone(),!0;{const v=D[L];if(typeof T=="number"||typeof T=="boolean"){if(v!==T)return D[L]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(v.equals(T)===!1)return v.copy(T),!0}}return!1}function g(S){const E=S.uniforms;let M=0;const D=16;for(let L=0,v=E.length;L<v;L++){const R=Array.isArray(E[L])?E[L]:[E[L]];for(let B=0,C=R.length;B<C;B++){const V=R[B],W=Array.isArray(V.value)?V.value:[V.value];for(let k=0,P=W.length;k<P;k++){const N=W[k],U=_(N),K=M%D,ce=K%U.boundary,de=K+ce;M+=ce,de!==0&&D-de<U.storage&&(M+=D-de),V.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=M,M+=U.storage}}}const T=M%D;return T>0&&(M+=D-T),S.__size=M,S.__cache={},this}function _(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(E.boundary=16,E.storage=S.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",S),E}function m(S){const E=S.target;E.removeEventListener("dispose",m);const M=o.indexOf(E.__bindingPointIndex);o.splice(M,1),t.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(const S in s)t.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}const JM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Vn=null;function QM(){return Vn===null&&(Vn=new Lx(JM,16,16,us,Ei),Vn.name="DFG_LUT",Vn.minFilter=Jt,Vn.magFilter=Jt,Vn.wrapS=_i,Vn.wrapT=_i,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}class eE{constructor(e={}){const{canvas:n=j0(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=xn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=h,m=new Set([nu,tu,eu]),p=new Set([xn,ti,Cr,Pr,Jc,Qc]),S=new Uint32Array(4),E=new Int32Array(4),M=new H;let D=null,T=null;const L=[],v=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Jn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let C=!1,V=null;this._outputColorSpace=_n;let W=0,k=0,P=null,N=-1,U=null;const K=new Dt,ce=new Dt;let de=null;const Ee=new lt(0);let Ce=0,Xe=n.width,st=n.height,Ve=1,ne=null,xe=null;const le=new Dt(0,0,Xe,st),Oe=new Dt(0,0,Xe,st);let Ge=!1;const We=new lu;let w=!1,I=!1;const X=new Ct,te=new H,Z=new Dt,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fe=!1;function ge(){return P===null?Ve:1}let A=i;function re(b,z){return n.getContext(b,z)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Kc}`),n.addEventListener("webglcontextlost",ue,!1),n.addEventListener("webglcontextrestored",Be,!1),n.addEventListener("webglcontextcreationerror",Ze,!1),A===null){const z="webgl2";if(A=re(z,b),A===null)throw re(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw ft("WebGLRenderer: "+b.message),b}let ve,he,ee,Pe,y,x,O,J,oe,pe,me,Q,ae,Se,Te,be,_e,Ye,et,dt,F,ye,ie;function De(){ve=new Qb(A),ve.init(),F=new WM(A,ve),he=new Xb(A,ve,e,F),ee=new VM(A,ve),he.reversedDepthBuffer&&d&&ee.buffers.depth.setReversed(!0),Pe=new ny(A),y=new RM,x=new GM(A,ve,ee,y,he,F,Pe),O=new Jb(B),J=new ov(A),ye=new Gb(A,J),oe=new ey(A,J,Pe,ye),pe=new sy(A,oe,J,ye,Pe),Ye=new iy(A,he,x),Te=new qb(y),me=new wM(B,O,ve,he,ye,Te),Q=new KM(B,y),ae=new PM,Se=new FM(ve),_e=new Vb(B,O,ee,pe,g,l),be=new HM(B,pe,he),ie=new ZM(A,Pe,he,ee),et=new Wb(A,ve,Pe),dt=new ty(A,ve,Pe),Pe.programs=me.programs,B.capabilities=he,B.extensions=ve,B.properties=y,B.renderLists=ae,B.shadowMap=be,B.state=ee,B.info=Pe}De(),_!==xn&&(R=new oy(_,n.width,n.height,s,r));const Me=new jM(B,A);this.xr=Me,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const b=ve.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ve.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ve},this.setPixelRatio=function(b){b!==void 0&&(Ve=b,this.setSize(Xe,st,!1))},this.getSize=function(b){return b.set(Xe,st)},this.setSize=function(b,z,Y=!0){if(Me.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}Xe=b,st=z,n.width=Math.floor(b*Ve),n.height=Math.floor(z*Ve),Y===!0&&(n.style.width=b+"px",n.style.height=z+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(Xe*Ve,st*Ve).floor()},this.setDrawingBufferSize=function(b,z,Y){Xe=b,st=z,Ve=Y,n.width=Math.floor(b*Y),n.height=Math.floor(z*Y),this.setViewport(0,0,b,z)},this.setEffects=function(b){if(_===xn){ft("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let z=0;z<b.length;z++)if(b[z].isOutputPass===!0){qe("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(K)},this.getViewport=function(b){return b.copy(le)},this.setViewport=function(b,z,Y,q){b.isVector4?le.set(b.x,b.y,b.z,b.w):le.set(b,z,Y,q),ee.viewport(K.copy(le).multiplyScalar(Ve).round())},this.getScissor=function(b){return b.copy(Oe)},this.setScissor=function(b,z,Y,q){b.isVector4?Oe.set(b.x,b.y,b.z,b.w):Oe.set(b,z,Y,q),ee.scissor(ce.copy(Oe).multiplyScalar(Ve).round())},this.getScissorTest=function(){return Ge},this.setScissorTest=function(b){ee.setScissorTest(Ge=b)},this.setOpaqueSort=function(b){ne=b},this.setTransparentSort=function(b){xe=b},this.getClearColor=function(b){return b.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(b=!0,z=!0,Y=!0){let q=0;if(b){let $=!1;if(P!==null){const Re=P.texture.format;$=m.has(Re)}if($){const Re=P.texture.type,Ie=p.has(Re),we=_e.getClearColor(),Fe=_e.getClearAlpha(),ke=we.r,Je=we.g,rt=we.b;Ie?(S[0]=ke,S[1]=Je,S[2]=rt,S[3]=Fe,A.clearBufferuiv(A.COLOR,0,S)):(E[0]=ke,E[1]=Je,E[2]=rt,E[3]=Fe,A.clearBufferiv(A.COLOR,0,E))}else q|=A.COLOR_BUFFER_BIT}z&&(q|=A.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(q|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&A.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),V=b},this.dispose=function(){n.removeEventListener("webglcontextlost",ue,!1),n.removeEventListener("webglcontextrestored",Be,!1),n.removeEventListener("webglcontextcreationerror",Ze,!1),_e.dispose(),ae.dispose(),Se.dispose(),y.dispose(),O.dispose(),pe.dispose(),ye.dispose(),ie.dispose(),me.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Pu),Me.removeEventListener("sessionend",Du),Xi.stop()};function ue(b){b.preventDefault(),Rf("WebGLRenderer: Context Lost."),C=!0}function Be(){Rf("WebGLRenderer: Context Restored."),C=!1;const b=Pe.autoReset,z=be.enabled,Y=be.autoUpdate,q=be.needsUpdate,$=be.type;De(),Pe.autoReset=b,be.enabled=z,be.autoUpdate=Y,be.needsUpdate=q,be.type=$}function Ze(b){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function It(b){const z=b.target;z.removeEventListener("dispose",It),gt(z)}function gt(b){si(b),y.remove(b)}function si(b){const z=y.get(b).programs;z!==void 0&&(z.forEach(function(Y){me.releaseProgram(Y)}),b.isShaderMaterial&&me.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,Y,q,$,Re){z===null&&(z=se);const Ie=$.isMesh&&$.matrixWorld.determinant()<0,we=pm(b,z,Y,q,$);ee.setMaterial(q,Ie);let Fe=Y.index,ke=1;if(q.wireframe===!0){if(Fe=oe.getWireframeAttribute(Y),Fe===void 0)return;ke=2}const Je=Y.drawRange,rt=Y.attributes.position;let ze=Je.start*ke,_t=(Je.start+Je.count)*ke;Re!==null&&(ze=Math.max(ze,Re.start*ke),_t=Math.min(_t,(Re.start+Re.count)*ke)),Fe!==null?(ze=Math.max(ze,0),_t=Math.min(_t,Fe.count)):rt!=null&&(ze=Math.max(ze,0),_t=Math.min(_t,rt.count));const Ut=_t-ze;if(Ut<0||Ut===1/0)return;ye.setup($,q,we,Y,Fe);let Pt,yt=et;if(Fe!==null&&(Pt=J.get(Fe),yt=dt,yt.setIndex(Pt)),$.isMesh)q.wireframe===!0?(ee.setLineWidth(q.wireframeLinewidth*ge()),yt.setMode(A.LINES)):yt.setMode(A.TRIANGLES);else if($.isLine){let qt=q.linewidth;qt===void 0&&(qt=1),ee.setLineWidth(qt*ge()),$.isLineSegments?yt.setMode(A.LINES):$.isLineLoop?yt.setMode(A.LINE_LOOP):yt.setMode(A.LINE_STRIP)}else $.isPoints?yt.setMode(A.POINTS):$.isSprite&&yt.setMode(A.TRIANGLES);if($.isBatchedMesh)if(ve.get("WEBGL_multi_draw"))yt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const qt=$._multiDrawStarts,Le=$._multiDrawCounts,pn=$._multiDrawCount,ut=Fe?J.get(Fe).bytesPerElement:1,yn=y.get(q).currentProgram.getUniforms();for(let kn=0;kn<pn;kn++)yn.setValue(A,"_gl_DrawID",kn),yt.render(qt[kn]/ut,Le[kn])}else if($.isInstancedMesh)yt.renderInstances(ze,Ut,$.count);else if(Y.isInstancedBufferGeometry){const qt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Le=Math.min(Y.instanceCount,qt);yt.renderInstances(ze,Ut,Le)}else yt.render(ze,Ut)};function Bn(b,z,Y){b.transparent===!0&&b.side===gi&&b.forceSinglePass===!1?(b.side=dn,b.needsUpdate=!0,Wr(b,z,Y),b.side=Vi,b.needsUpdate=!0,Wr(b,z,Y),b.side=gi):Wr(b,z,Y)}this.compile=function(b,z,Y=null){Y===null&&(Y=b),T=Se.get(Y),T.init(z),v.push(T),Y.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(T.pushLight($),$.castShadow&&T.pushShadow($))}),b!==Y&&b.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(T.pushLight($),$.castShadow&&T.pushShadow($))}),T.setupLights();const q=new Set;return b.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Re=$.material;if(Re)if(Array.isArray(Re))for(let Ie=0;Ie<Re.length;Ie++){const we=Re[Ie];Bn(we,Y,$),q.add(we)}else Bn(Re,Y,$),q.add(Re)}),T=v.pop(),q},this.compileAsync=function(b,z,Y=null){const q=this.compile(b,z,Y);return new Promise($=>{function Re(){if(q.forEach(function(Ie){y.get(Ie).currentProgram.isReady()&&q.delete(Ie)}),q.size===0){$(b);return}setTimeout(Re,10)}ve.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Aa=null;function dm(b){Aa&&Aa(b)}function Pu(){Xi.stop()}function Du(){Xi.start()}const Xi=new Dp;Xi.setAnimationLoop(dm),typeof self<"u"&&Xi.setContext(self),this.setAnimationLoop=function(b){Aa=b,Me.setAnimationLoop(b),b===null?Xi.stop():Xi.start()},Me.addEventListener("sessionstart",Pu),Me.addEventListener("sessionend",Du),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;V!==null&&V.renderStart(b,z);const Y=Me.enabled===!0&&Me.isPresenting===!0,q=R!==null&&(P===null||Y)&&R.begin(B,P);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(z),z=Me.getCamera()),b.isScene===!0&&b.onBeforeRender(B,b,z,P),T=Se.get(b,v.length),T.init(z),T.state.textureUnits=x.getTextureUnits(),v.push(T),X.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),We.setFromProjectionMatrix(X,Kn,z.reversedDepth),I=this.localClippingEnabled,w=Te.init(this.clippingPlanes,I),D=ae.get(b,L.length),D.init(),L.push(D),Me.enabled===!0&&Me.isPresenting===!0){const Ie=B.xr.getDepthSensingMesh();Ie!==null&&wa(Ie,z,-1/0,B.sortObjects)}wa(b,z,0,B.sortObjects),D.finish(),B.sortObjects===!0&&D.sort(ne,xe),fe=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,fe&&_e.addToRenderList(D,b),this.info.render.frame++,w===!0&&Te.beginShadows();const $=T.state.shadowsArray;if(be.render($,b,z),w===!0&&Te.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&R.hasRenderPass())===!1){const Ie=D.opaque,we=D.transmissive;if(T.setupLights(),z.isArrayCamera){const Fe=z.cameras;if(we.length>0)for(let ke=0,Je=Fe.length;ke<Je;ke++){const rt=Fe[ke];Iu(Ie,we,b,rt)}fe&&_e.render(b);for(let ke=0,Je=Fe.length;ke<Je;ke++){const rt=Fe[ke];Lu(D,b,rt,rt.viewport)}}else we.length>0&&Iu(Ie,we,b,z),fe&&_e.render(b),Lu(D,b,z)}P!==null&&k===0&&(x.updateMultisampleRenderTarget(P),x.updateRenderTargetMipmap(P)),q&&R.end(B),b.isScene===!0&&b.onAfterRender(B,b,z),ye.resetDefaultState(),N=-1,U=null,v.pop(),v.length>0?(T=v[v.length-1],x.setTextureUnits(T.state.textureUnits),w===!0&&Te.setGlobalState(B.clippingPlanes,T.state.camera)):T=null,L.pop(),L.length>0?D=L[L.length-1]:D=null,V!==null&&V.renderEnd()};function wa(b,z,Y,q){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLightProbeGrid)T.pushLightProbeGrid(b);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||We.intersectsSprite(b)){q&&Z.setFromMatrixPosition(b.matrixWorld).applyMatrix4(X);const Ie=pe.update(b),we=b.material;we.visible&&D.push(b,Ie,we,Y,Z.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||We.intersectsObject(b))){const Ie=pe.update(b),we=b.material;if(q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Z.copy(b.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Z.copy(Ie.boundingSphere.center)),Z.applyMatrix4(b.matrixWorld).applyMatrix4(X)),Array.isArray(we)){const Fe=Ie.groups;for(let ke=0,Je=Fe.length;ke<Je;ke++){const rt=Fe[ke],ze=we[rt.materialIndex];ze&&ze.visible&&D.push(b,Ie,ze,Y,Z.z,rt)}}else we.visible&&D.push(b,Ie,we,Y,Z.z,null)}}const Re=b.children;for(let Ie=0,we=Re.length;Ie<we;Ie++)wa(Re[Ie],z,Y,q)}function Lu(b,z,Y,q){const{opaque:$,transmissive:Re,transparent:Ie}=b;T.setupLightsView(Y),w===!0&&Te.setGlobalState(B.clippingPlanes,Y),q&&ee.viewport(K.copy(q)),$.length>0&&Gr($,z,Y),Re.length>0&&Gr(Re,z,Y),Ie.length>0&&Gr(Ie,z,Y),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Iu(b,z,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[q.id]===void 0){const ze=ve.has("EXT_color_buffer_half_float")||ve.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[q.id]=new Qn(1,1,{generateMipmaps:!0,type:ze?Ei:xn,minFilter:ns,samples:Math.max(4,he.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const Re=T.state.transmissionRenderTarget[q.id],Ie=q.viewport||K;Re.setSize(Ie.z*B.transmissionResolutionScale,Ie.w*B.transmissionResolutionScale);const we=B.getRenderTarget(),Fe=B.getActiveCubeFace(),ke=B.getActiveMipmapLevel();B.setRenderTarget(Re),B.getClearColor(Ee),Ce=B.getClearAlpha(),Ce<1&&B.setClearColor(16777215,.5),B.clear(),fe&&_e.render(Y);const Je=B.toneMapping;B.toneMapping=Jn;const rt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),T.setupLightsView(q),w===!0&&Te.setGlobalState(B.clippingPlanes,q),Gr(b,Y,q),x.updateMultisampleRenderTarget(Re),x.updateRenderTargetMipmap(Re),ve.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let _t=0,Ut=z.length;_t<Ut;_t++){const Pt=z[_t],{object:yt,geometry:qt,material:Le,group:pn}=Pt;if(Le.side===gi&&yt.layers.test(q.layers)){const ut=Le.side;Le.side=dn,Le.needsUpdate=!0,Uu(yt,Y,q,qt,Le,pn),Le.side=ut,Le.needsUpdate=!0,ze=!0}}ze===!0&&(x.updateMultisampleRenderTarget(Re),x.updateRenderTargetMipmap(Re))}B.setRenderTarget(we,Fe,ke),B.setClearColor(Ee,Ce),rt!==void 0&&(q.viewport=rt),B.toneMapping=Je}function Gr(b,z,Y){const q=z.isScene===!0?z.overrideMaterial:null;for(let $=0,Re=b.length;$<Re;$++){const Ie=b[$],{object:we,geometry:Fe,group:ke}=Ie;let Je=Ie.material;Je.allowOverride===!0&&q!==null&&(Je=q),we.layers.test(Y.layers)&&Uu(we,z,Y,Fe,Je,ke)}}function Uu(b,z,Y,q,$,Re){b.onBeforeRender(B,z,Y,q,$,Re),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(B,z,Y,q,b,Re),$.transparent===!0&&$.side===gi&&$.forceSinglePass===!1?($.side=dn,$.needsUpdate=!0,B.renderBufferDirect(Y,z,q,$,b,Re),$.side=Vi,$.needsUpdate=!0,B.renderBufferDirect(Y,z,q,$,b,Re),$.side=gi):B.renderBufferDirect(Y,z,q,$,b,Re),b.onAfterRender(B,z,Y,q,$,Re)}function Wr(b,z,Y){z.isScene!==!0&&(z=se);const q=y.get(b),$=T.state.lights,Re=T.state.shadowsArray,Ie=$.state.version,we=me.getParameters(b,$.state,Re,z,Y,T.state.lightProbeGridArray),Fe=me.getProgramCacheKey(we);let ke=q.programs;q.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?z.environment:null,q.fog=z.fog;const Je=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;q.envMap=O.get(b.envMap||q.environment,Je),q.envMapRotation=q.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,ke===void 0&&(b.addEventListener("dispose",It),ke=new Map,q.programs=ke);let rt=ke.get(Fe);if(rt!==void 0){if(q.currentProgram===rt&&q.lightsStateVersion===Ie)return Fu(b,we),rt}else we.uniforms=me.getUniforms(b),V!==null&&b.isNodeMaterial&&V.build(b,Y,we),b.onBeforeCompile(we,B),rt=me.acquireProgram(we,Fe),ke.set(Fe,rt),q.uniforms=we.uniforms;const ze=q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ze.clippingPlanes=Te.uniform),Fu(b,we),q.needsLights=gm(b),q.lightsStateVersion=Ie,q.needsLights&&(ze.ambientLightColor.value=$.state.ambient,ze.lightProbe.value=$.state.probe,ze.directionalLights.value=$.state.directional,ze.directionalLightShadows.value=$.state.directionalShadow,ze.spotLights.value=$.state.spot,ze.spotLightShadows.value=$.state.spotShadow,ze.rectAreaLights.value=$.state.rectArea,ze.ltc_1.value=$.state.rectAreaLTC1,ze.ltc_2.value=$.state.rectAreaLTC2,ze.pointLights.value=$.state.point,ze.pointLightShadows.value=$.state.pointShadow,ze.hemisphereLights.value=$.state.hemi,ze.directionalShadowMatrix.value=$.state.directionalShadowMatrix,ze.spotLightMatrix.value=$.state.spotLightMatrix,ze.spotLightMap.value=$.state.spotLightMap,ze.pointShadowMatrix.value=$.state.pointShadowMatrix),q.lightProbeGrid=T.state.lightProbeGridArray.length>0,q.currentProgram=rt,q.uniformsList=null,rt}function Nu(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=Io.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function Fu(b,z){const Y=y.get(b);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function hm(b,z){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(z.matrixWorld);for(let Y=0,q=b.length;Y<q;Y++){const $=b[Y];if($.texture!==null&&$.boundingBox.containsPoint(M))return $}return null}function pm(b,z,Y,q,$){z.isScene!==!0&&(z=se),x.resetTextureUnits();const Re=z.fog,Ie=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?z.environment:null,we=P===null?B.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ct.workingColorSpace,Fe=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,ke=O.get(q.envMap||Ie,Fe),Je=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,rt=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),ze=!!Y.morphAttributes.position,_t=!!Y.morphAttributes.normal,Ut=!!Y.morphAttributes.color;let Pt=Jn;q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Pt=B.toneMapping);const yt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,qt=yt!==void 0?yt.length:0,Le=y.get(q),pn=T.state.lights;if(w===!0&&(I===!0||b!==U)){const Tt=b===U&&q.id===N;Te.setState(q,b,Tt)}let ut=!1;q.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==pn.state.version||Le.outputColorSpace!==we||$.isBatchedMesh&&Le.batching===!1||!$.isBatchedMesh&&Le.batching===!0||$.isBatchedMesh&&Le.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Le.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Le.instancing===!1||!$.isInstancedMesh&&Le.instancing===!0||$.isSkinnedMesh&&Le.skinning===!1||!$.isSkinnedMesh&&Le.skinning===!0||$.isInstancedMesh&&Le.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Le.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Le.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Le.instancingMorph===!1&&$.morphTexture!==null||Le.envMap!==ke||q.fog===!0&&Le.fog!==Re||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Te.numPlanes||Le.numIntersection!==Te.numIntersection)||Le.vertexAlphas!==Je||Le.vertexTangents!==rt||Le.morphTargets!==ze||Le.morphNormals!==_t||Le.morphColors!==Ut||Le.toneMapping!==Pt||Le.morphTargetsCount!==qt||!!Le.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ut=!0):(ut=!0,Le.__version=q.version);let yn=Le.currentProgram;ut===!0&&(yn=Wr(q,z,$),V&&q.isNodeMaterial&&V.onUpdateProgram(q,yn,Le));let kn=!1,Ri=!1,hs=!1;const Mt=yn.getUniforms(),Nt=Le.uniforms;if(ee.useProgram(yn.program)&&(kn=!0,Ri=!0,hs=!0),q.id!==N&&(N=q.id,Ri=!0),Le.needsLights){const Tt=hm(T.state.lightProbeGridArray,$);Le.lightProbeGrid!==Tt&&(Le.lightProbeGrid=Tt,Ri=!0)}if(kn||U!==b){ee.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Mt.setValue(A,"projectionMatrix",b.projectionMatrix),Mt.setValue(A,"viewMatrix",b.matrixWorldInverse);const Pi=Mt.map.cameraPosition;Pi!==void 0&&Pi.setValue(A,te.setFromMatrixPosition(b.matrixWorld)),he.logarithmicDepthBuffer&&Mt.setValue(A,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Mt.setValue(A,"isOrthographic",b.isOrthographicCamera===!0),U!==b&&(U=b,Ri=!0,hs=!0)}if(Le.needsLights&&(pn.state.directionalShadowMap.length>0&&Mt.setValue(A,"directionalShadowMap",pn.state.directionalShadowMap,x),pn.state.spotShadowMap.length>0&&Mt.setValue(A,"spotShadowMap",pn.state.spotShadowMap,x),pn.state.pointShadowMap.length>0&&Mt.setValue(A,"pointShadowMap",pn.state.pointShadowMap,x)),$.isSkinnedMesh){Mt.setOptional(A,$,"bindMatrix"),Mt.setOptional(A,$,"bindMatrixInverse");const Tt=$.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),Mt.setValue(A,"boneTexture",Tt.boneTexture,x))}$.isBatchedMesh&&(Mt.setOptional(A,$,"batchingTexture"),Mt.setValue(A,"batchingTexture",$._matricesTexture,x),Mt.setOptional(A,$,"batchingIdTexture"),Mt.setValue(A,"batchingIdTexture",$._indirectTexture,x),Mt.setOptional(A,$,"batchingColorTexture"),$._colorsTexture!==null&&Mt.setValue(A,"batchingColorTexture",$._colorsTexture,x));const Ci=Y.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&Ye.update($,Y,yn),(Ri||Le.receiveShadow!==$.receiveShadow)&&(Le.receiveShadow=$.receiveShadow,Mt.setValue(A,"receiveShadow",$.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&z.environment!==null&&(Nt.envMapIntensity.value=z.environmentIntensity),Nt.dfgLUT!==void 0&&(Nt.dfgLUT.value=QM()),Ri){if(Mt.setValue(A,"toneMappingExposure",B.toneMappingExposure),Le.needsLights&&mm(Nt,hs),Re&&q.fog===!0&&Q.refreshFogUniforms(Nt,Re),Q.refreshMaterialUniforms(Nt,q,Ve,st,T.state.transmissionRenderTarget[b.id]),Le.needsLights&&Le.lightProbeGrid){const Tt=Le.lightProbeGrid;Nt.probesSH.value=Tt.texture,Nt.probesMin.value.copy(Tt.boundingBox.min),Nt.probesMax.value.copy(Tt.boundingBox.max),Nt.probesResolution.value.copy(Tt.resolution)}Io.upload(A,Nu(Le),Nt,x)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Io.upload(A,Nu(Le),Nt,x),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Mt.setValue(A,"center",$.center),Mt.setValue(A,"modelViewMatrix",$.modelViewMatrix),Mt.setValue(A,"normalMatrix",$.normalMatrix),Mt.setValue(A,"modelMatrix",$.matrixWorld),q.uniformsGroups!==void 0){const Tt=q.uniformsGroups;for(let Pi=0,ps=Tt.length;Pi<ps;Pi++){const Ou=Tt[Pi];ie.update(Ou,yn),ie.bind(Ou,yn)}}return yn}function mm(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function gm(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,z,Y){const q=y.get(b);q.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),y.get(b.texture).__webglTexture=z,y.get(b.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,z){const Y=y.get(b);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0};const _m=A.createFramebuffer();this.setRenderTarget=function(b,z=0,Y=0){P=b,W=z,k=Y;let q=null,$=!1,Re=!1;if(b){const we=y.get(b);if(we.__useDefaultFramebuffer!==void 0){ee.bindFramebuffer(A.FRAMEBUFFER,we.__webglFramebuffer),K.copy(b.viewport),ce.copy(b.scissor),de=b.scissorTest,ee.viewport(K),ee.scissor(ce),ee.setScissorTest(de),N=-1;return}else if(we.__webglFramebuffer===void 0)x.setupRenderTarget(b);else if(we.__hasExternalTextures)x.rebindTextures(b,y.get(b.texture).__webglTexture,y.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Je=b.depthTexture;if(we.__boundDepthTexture!==Je){if(Je!==null&&y.has(Je)&&(b.width!==Je.image.width||b.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(b)}}const Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Re=!0);const ke=y.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ke[z])?q=ke[z][Y]:q=ke[z],$=!0):b.samples>0&&x.useMultisampledRTT(b)===!1?q=y.get(b).__webglMultisampledFramebuffer:Array.isArray(ke)?q=ke[Y]:q=ke,K.copy(b.viewport),ce.copy(b.scissor),de=b.scissorTest}else K.copy(le).multiplyScalar(Ve).floor(),ce.copy(Oe).multiplyScalar(Ve).floor(),de=Ge;if(Y!==0&&(q=_m),ee.bindFramebuffer(A.FRAMEBUFFER,q)&&ee.drawBuffers(b,q),ee.viewport(K),ee.scissor(ce),ee.setScissorTest(de),$){const we=y.get(b.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+z,we.__webglTexture,Y)}else if(Re){const we=z;for(let Fe=0;Fe<b.textures.length;Fe++){const ke=y.get(b.textures[Fe]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Fe,ke.__webglTexture,Y,we)}}else if(b!==null&&Y!==0){const we=y.get(b.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,we.__webglTexture,Y)}N=-1},this.readRenderTargetPixels=function(b,z,Y,q,$,Re,Ie,we=0){if(!(b&&b.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe){ee.bindFramebuffer(A.FRAMEBUFFER,Fe);try{const ke=b.textures[we],Je=ke.format,rt=ke.type;if(b.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+we),!he.textureFormatReadable(Je)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(rt)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-q&&Y>=0&&Y<=b.height-$&&A.readPixels(z,Y,q,$,F.convert(Je),F.convert(rt),Re)}finally{const ke=P!==null?y.get(P).__webglFramebuffer:null;ee.bindFramebuffer(A.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(b,z,Y,q,$,Re,Ie,we=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=y.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe)if(z>=0&&z<=b.width-q&&Y>=0&&Y<=b.height-$){ee.bindFramebuffer(A.FRAMEBUFFER,Fe);const ke=b.textures[we],Je=ke.format,rt=ke.type;if(b.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+we),!he.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ze=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,ze),A.bufferData(A.PIXEL_PACK_BUFFER,Re.byteLength,A.STREAM_READ),A.readPixels(z,Y,q,$,F.convert(Je),F.convert(rt),0);const _t=P!==null?y.get(P).__webglFramebuffer:null;ee.bindFramebuffer(A.FRAMEBUFFER,_t);const Ut=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Y0(A,Ut,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,ze),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Re),A.deleteBuffer(ze),A.deleteSync(Ut),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,z=null,Y=0){const q=Math.pow(2,-Y),$=Math.floor(b.image.width*q),Re=Math.floor(b.image.height*q),Ie=z!==null?z.x:0,we=z!==null?z.y:0;x.setTexture2D(b,0),A.copyTexSubImage2D(A.TEXTURE_2D,Y,0,0,Ie,we,$,Re),ee.unbindTexture()};const xm=A.createFramebuffer(),vm=A.createFramebuffer();this.copyTextureToTexture=function(b,z,Y=null,q=null,$=0,Re=0){let Ie,we,Fe,ke,Je,rt,ze,_t,Ut;const Pt=b.isCompressedTexture?b.mipmaps[Re]:b.image;if(Y!==null)Ie=Y.max.x-Y.min.x,we=Y.max.y-Y.min.y,Fe=Y.isBox3?Y.max.z-Y.min.z:1,ke=Y.min.x,Je=Y.min.y,rt=Y.isBox3?Y.min.z:0;else{const Nt=Math.pow(2,-$);Ie=Math.floor(Pt.width*Nt),we=Math.floor(Pt.height*Nt),b.isDataArrayTexture?Fe=Pt.depth:b.isData3DTexture?Fe=Math.floor(Pt.depth*Nt):Fe=1,ke=0,Je=0,rt=0}q!==null?(ze=q.x,_t=q.y,Ut=q.z):(ze=0,_t=0,Ut=0);const yt=F.convert(z.format),qt=F.convert(z.type);let Le;z.isData3DTexture?(x.setTexture3D(z,0),Le=A.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(x.setTexture2DArray(z,0),Le=A.TEXTURE_2D_ARRAY):(x.setTexture2D(z,0),Le=A.TEXTURE_2D),ee.activeTexture(A.TEXTURE0),ee.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,z.flipY),ee.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),ee.pixelStorei(A.UNPACK_ALIGNMENT,z.unpackAlignment);const pn=ee.getParameter(A.UNPACK_ROW_LENGTH),ut=ee.getParameter(A.UNPACK_IMAGE_HEIGHT),yn=ee.getParameter(A.UNPACK_SKIP_PIXELS),kn=ee.getParameter(A.UNPACK_SKIP_ROWS),Ri=ee.getParameter(A.UNPACK_SKIP_IMAGES);ee.pixelStorei(A.UNPACK_ROW_LENGTH,Pt.width),ee.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Pt.height),ee.pixelStorei(A.UNPACK_SKIP_PIXELS,ke),ee.pixelStorei(A.UNPACK_SKIP_ROWS,Je),ee.pixelStorei(A.UNPACK_SKIP_IMAGES,rt);const hs=b.isDataArrayTexture||b.isData3DTexture,Mt=z.isDataArrayTexture||z.isData3DTexture;if(b.isDepthTexture){const Nt=y.get(b),Ci=y.get(z),Tt=y.get(Nt.__renderTarget),Pi=y.get(Ci.__renderTarget);ee.bindFramebuffer(A.READ_FRAMEBUFFER,Tt.__webglFramebuffer),ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,Pi.__webglFramebuffer);for(let ps=0;ps<Fe;ps++)hs&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,y.get(b).__webglTexture,$,rt+ps),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,y.get(z).__webglTexture,Re,Ut+ps)),A.blitFramebuffer(ke,Je,Ie,we,ze,_t,Ie,we,A.DEPTH_BUFFER_BIT,A.NEAREST);ee.bindFramebuffer(A.READ_FRAMEBUFFER,null),ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if($!==0||b.isRenderTargetTexture||y.has(b)){const Nt=y.get(b),Ci=y.get(z);ee.bindFramebuffer(A.READ_FRAMEBUFFER,xm),ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,vm);for(let Tt=0;Tt<Fe;Tt++)hs?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Nt.__webglTexture,$,rt+Tt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Nt.__webglTexture,$),Mt?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ci.__webglTexture,Re,Ut+Tt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ci.__webglTexture,Re),$!==0?A.blitFramebuffer(ke,Je,Ie,we,ze,_t,Ie,we,A.COLOR_BUFFER_BIT,A.NEAREST):Mt?A.copyTexSubImage3D(Le,Re,ze,_t,Ut+Tt,ke,Je,Ie,we):A.copyTexSubImage2D(Le,Re,ze,_t,ke,Je,Ie,we);ee.bindFramebuffer(A.READ_FRAMEBUFFER,null),ee.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Mt?b.isDataTexture||b.isData3DTexture?A.texSubImage3D(Le,Re,ze,_t,Ut,Ie,we,Fe,yt,qt,Pt.data):z.isCompressedArrayTexture?A.compressedTexSubImage3D(Le,Re,ze,_t,Ut,Ie,we,Fe,yt,Pt.data):A.texSubImage3D(Le,Re,ze,_t,Ut,Ie,we,Fe,yt,qt,Pt):b.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Re,ze,_t,Ie,we,yt,qt,Pt.data):b.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Re,ze,_t,Pt.width,Pt.height,yt,Pt.data):A.texSubImage2D(A.TEXTURE_2D,Re,ze,_t,Ie,we,yt,qt,Pt);ee.pixelStorei(A.UNPACK_ROW_LENGTH,pn),ee.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ut),ee.pixelStorei(A.UNPACK_SKIP_PIXELS,yn),ee.pixelStorei(A.UNPACK_SKIP_ROWS,kn),ee.pixelStorei(A.UNPACK_SKIP_IMAGES,Ri),Re===0&&z.generateMipmaps&&A.generateMipmap(Le),ee.unbindTexture()},this.initRenderTarget=function(b){y.get(b).__webglFramebuffer===void 0&&x.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?x.setTextureCube(b,0):b.isData3DTexture?x.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?x.setTexture2DArray(b,0):x.setTexture2D(b,0),ee.unbindTexture()},this.resetState=function(){W=0,k=0,P=null,ee.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=ct._getUnpackColorSpace()}}const Rd={type:"change"},du={type:"start"},kp={type:"end"},So=new au,Cd=new Bi,tE=Math.cos(70*Lo.DEG2RAD),Bt=new H,un=2*Math.PI,vt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_l=1e-6;class nE extends sv{constructor(e,n=null){super(e,n),this.state=vt.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:zs.ROTATE,MIDDLE:zs.DOLLY,RIGHT:zs.PAN},this.touches={ONE:Is.ROTATE,TWO:Is.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new Ai,this._lastTargetPosition=new H,this._quat=new Ai().setFromUnitVectors(e.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new nd,this._sphericalDelta=new nd,this._scale=1,this._panOffset=new H,this._rotateStart=new Qe,this._rotateEnd=new Qe,this._rotateDelta=new Qe,this._panStart=new Qe,this._panEnd=new Qe,this._panDelta=new Qe,this._dollyStart=new Qe,this._dollyEnd=new Qe,this._dollyDelta=new Qe,this._dollyDirection=new H,this._mouse=new Qe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=sE.bind(this),this._onPointerDown=iE.bind(this),this._onPointerUp=rE.bind(this),this._onContextMenu=dE.bind(this),this._onMouseWheel=lE.bind(this),this._onKeyDown=cE.bind(this),this._onTouchStart=uE.bind(this),this._onTouchMove=fE.bind(this),this._onMouseDown=oE.bind(this),this._onMouseMove=aE.bind(this),this._interceptControlDown=hE.bind(this),this._interceptControlUp=pE.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rd),this.update(),this.state=vt.NONE}pan(e,n){this._pan(e,n),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const n=this.object.position;Bt.copy(n).sub(this.target),Bt.applyQuaternion(this._quat),this._spherical.setFromVector3(Bt),this.autoRotate&&this.state===vt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=un:i>Math.PI&&(i-=un),s<-Math.PI?s+=un:s>Math.PI&&(s-=un),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Bt.setFromSpherical(this._spherical),Bt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Bt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Bt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new H(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Bt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(So.origin.copy(this.object.position),So.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(So.direction))<tE?this.object.lookAt(this.target):(Cd.setFromNormalAndCoplanarPoint(this.object.up,this.target),So.intersectPlane(Cd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>_l||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_l||this._lastTargetPosition.distanceToSquared(this.target)>_l?(this.dispatchEvent(Rd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?un/60*this.autoRotateSpeed*e:un/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Bt.setFromMatrixColumn(n,0),Bt.multiplyScalar(-e),this._panOffset.add(Bt)}_panUp(e,n){this.screenSpacePanning===!0?Bt.setFromMatrixColumn(n,1):(Bt.setFromMatrixColumn(n,0),Bt.crossVectors(this.object.up,Bt)),Bt.multiplyScalar(e),this._panOffset.add(Bt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Bt.copy(s).sub(this.target);let r=Bt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(un*this._rotateDelta.x/n.clientHeight),this._rotateUp(un*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(un*this._rotateDelta.x/n.clientHeight),this._rotateUp(un*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),s=.5*(e.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,s=e.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new Qe,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function iE(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function sE(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function rE(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(kp),this.state=vt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function oE(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case zs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=vt.DOLLY;break;case zs.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=vt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=vt.ROTATE}break;case zs.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=vt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=vt.PAN}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(du)}function aE(t){switch(this.state){case vt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case vt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case vt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function lE(t){this.enabled===!1||this.enableZoom===!1||this.state!==vt.NONE||(t.preventDefault(),this.dispatchEvent(du),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(kp))}function cE(t){this.enabled!==!1&&this._handleKeyDown(t)}function uE(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case Is.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=vt.TOUCH_ROTATE;break;case Is.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=vt.TOUCH_PAN;break;default:this.state=vt.NONE}break;case 2:switch(this.touches.TWO){case Is.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=vt.TOUCH_DOLLY_PAN;break;case Is.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=vt.TOUCH_DOLLY_ROTATE;break;default:this.state=vt.NONE}break;default:this.state=vt.NONE}this.state!==vt.NONE&&this.dispatchEvent(du)}function fE(t){switch(this._trackPointer(t),this.state){case vt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case vt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case vt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case vt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=vt.NONE}}function dE(t){this.enabled!==!1&&t.preventDefault()}function hE(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function pE(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class mE extends cu{constructor(e){super(e)}load(e,n,i,s){const r=this,o=new Kx(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{n(r.parse(a))}catch(l){s?s(l):console.error(l),r.manager.itemError(e)}},i,s)}parse(e){function n(c){const u=new DataView(c),f=32/8*3+32/8*3*3+16/8,d=u.getUint32(80,!0);if(80+32/8+d*f===u.byteLength)return!0;const g=[115,111,108,105,100];for(let _=0;_<5;_++)if(i(g,u,_))return!1;return!0}function i(c,u,f){for(let d=0,h=c.length;d<h;d++)if(c[d]!==u.getUint8(f+d))return!1;return!0}function s(c){const u=new DataView(c),f=u.getUint32(80,!0);let d,h,g,_=!1,m,p,S,E,M;for(let C=0;C<70;C++)u.getUint32(C,!1)==1129270351&&u.getUint8(C+4)==82&&u.getUint8(C+5)==61&&(_=!0,m=new Float32Array(f*3*3),p=u.getUint8(C+6)/255,S=u.getUint8(C+7)/255,E=u.getUint8(C+8)/255,M=u.getUint8(C+9)/255);const D=84,T=50,L=new bn,v=new Float32Array(f*3*3),R=new Float32Array(f*3*3),B=new lt;for(let C=0;C<f;C++){const V=D+C*T,W=u.getFloat32(V,!0),k=u.getFloat32(V+4,!0),P=u.getFloat32(V+8,!0);if(_){const N=u.getUint16(V+48,!0);(N&32768)===0?(d=(N&31)/31,h=(N>>5&31)/31,g=(N>>10&31)/31):(d=p,h=S,g=E)}for(let N=1;N<=3;N++){const U=V+N*12,K=C*3*3+(N-1)*3;v[K]=u.getFloat32(U,!0),v[K+1]=u.getFloat32(U+4,!0),v[K+2]=u.getFloat32(U+8,!0),R[K]=W,R[K+1]=k,R[K+2]=P,_&&(B.setRGB(d,h,g,_n),m[K]=B.r,m[K+1]=B.g,m[K+2]=B.b)}}return L.setAttribute("position",new Sn(v,3)),L.setAttribute("normal",new Sn(R,3)),_&&(L.setAttribute("color",new Sn(m,3)),L.hasColors=!0,L.alpha=M),L}function r(c){const u=new bn,f=/solid([\s\S]*?)endsolid/g,d=/facet([\s\S]*?)endfacet/g,h=/solid\s(.+)/;let g=0;const _=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+_+_+_,"g"),p=new RegExp("normal"+_+_+_,"g"),S=[],E=[],M=[],D=new H;let T,L=0,v=0,R=0;for(;(T=f.exec(c))!==null;){v=R;const B=T[0],C=(T=h.exec(B))!==null?T[1]:"";for(M.push(C);(T=d.exec(B))!==null;){let k=0,P=0;const N=T[0];for(;(T=p.exec(N))!==null;)D.x=parseFloat(T[1]),D.y=parseFloat(T[2]),D.z=parseFloat(T[3]),P++;for(;(T=m.exec(N))!==null;)S.push(parseFloat(T[1]),parseFloat(T[2]),parseFloat(T[3])),E.push(D.x,D.y,D.z),k++,R++;P!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+g),k!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+g),g++}const V=v,W=R-v;u.userData.groupNames=M,u.addGroup(V,W,L),L++}return u.setAttribute("position",new ln(S,3)),u.setAttribute("normal",new ln(E,3)),u}function o(c){return typeof c!="string"?new TextDecoder().decode(c):c}function a(c){if(typeof c=="string"){const u=new Uint8Array(c.length);for(let f=0;f<c.length;f++)u[f]=c.charCodeAt(f)&255;return u.buffer||u}else return c}const l=a(e);return n(l)?s(l):r(o(e))}}const gE={class:"relative h-full min-h-[380px] overflow-hidden rounded-xl border border-slate-300 bg-slate-50 dark:border-slate-700 dark:bg-slate-900/70"},_E={key:0,class:"absolute inset-0 flex items-center justify-center px-4 text-center text-sm text-slate-500 dark:text-slate-400"},xE={key:1,class:"absolute inset-0 flex items-center justify-center bg-white/70 text-sm font-medium text-slate-700 dark:bg-slate-900/70 dark:text-slate-200"},vE={key:2,class:"absolute inset-0 flex items-center justify-center px-4 text-center text-sm text-rose-600 dark:text-rose-400"},SE=16317180,bE=988970,yE=5195493,ME=13751771,EE={__name:"StlViewer",props:{file:{type:[File,null],default:null},fileBuffer:{type:[ArrayBuffer,null],default:null},darkMode:{type:Boolean,default:!1},orientation:{type:Object,default:()=>({x:0,y:0,z:0})}},setup(t){const e=t;function n(){return e.darkMode?ME:yE}function i(){u&&(u.background=new lt(e.darkMode?bE:SE))}function s(){_?.material&&_.material.color.setHex(n())}const r=wt(null),o=wt(!1),a=wt(""),l=wt(!1),c=ep(()=>e.file instanceof File);let u=null,f=null,d=null,h=null,g=null,_=null,m=0;const p=new H(1,-1,.75).normalize();function S(W,k=0){const P=Number(W);return Number.isFinite(P)?P:k}function E(){if(!r.value)return;u=new Ax,i(),f=new Tn(45,1,.1,5e3),f.up.set(0,0,1),f.position.set(160,-160,120),d=new eE({antialias:!0,alpha:!1}),d.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.value.appendChild(d.domElement);const W=new ev(16777215,.6);u.add(W);const k=new Zx(16777215,13358561,.45);u.add(k);const P=new td(16777215,.8);P.position.set(120,180,80),u.add(P);const N=new td(16777215,.35);N.position.set(-120,80,-80),u.add(N);const U=new iv(260,26,8227738,11450564);U.rotation.x=Math.PI/2,u.add(U),h=new nE(f,d.domElement),h.enableDamping=!0,h.enablePan=!0,h.enableRotate=!0,h.enableZoom=!0,h.target.set(0,0,0),D(),M()}function M(){!d||!u||!f||!h||(g=window.requestAnimationFrame(M),h.update(),d.render(u,f))}function D(){if(!d||!f||!r.value)return;const W=r.value.clientWidth||400,k=r.value.clientHeight||420;d.setSize(W,k,!1),f.aspect=W/k,f.updateProjectionMatrix()}function T(){!u||!_||(u.remove(_),_.geometry.dispose(),_.material.dispose(),_=null)}function L(W){return Array.isArray(W)&&W.length===3&&W.every(k=>Array.isArray(k)&&k.length===3&&k.every(P=>Number.isFinite(Number(P))))}function v(){if(!_||!l.value)return;_.position.set(0,0,0),_.rotation.set(0,0,0,"XYZ"),_.scale.set(1,1,1),_.matrixAutoUpdate=!0;const W=e.orientation?.rotation_matrix;if(L(W)){const k=new Ct().set(Number(W[0][0]),Number(W[0][1]),Number(W[0][2]),0,Number(W[1][0]),Number(W[1][1]),Number(W[1][2]),0,Number(W[2][0]),Number(W[2][1]),Number(W[2][2]),0,0,0,0,1),P=new H,N=new Ai,U=new H;k.decompose(P,N,U),_.quaternion.copy(N)}else{const k=Lo.degToRad(S(e.orientation?.x)),P=Lo.degToRad(S(e.orientation?.y)),N=Lo.degToRad(S(e.orientation?.z));_.rotateX(k),_.rotateY(P),_.rotateZ(N)}R()}function R(){if(!_||!f||!h)return;const k=new Hi().setFromObject(_).getCenter(new H);_.position.x-=k.x,_.position.y-=k.y;const P=new Hi().setFromObject(_);_.position.z-=P.min.z;const N=new Hi().setFromObject(_),U=N.getCenter(new H),K=N.getSize(new H),de=Math.max(K.x,K.y,K.z,1)*1.9+55;h.target.copy(U),f.position.copy(U).addScaledVector(p,de),f.near=.1,f.far=Math.max(5e3,de*25),f.updateProjectionMatrix(),h.update()}async function B(W){return e.fileBuffer instanceof ArrayBuffer&&e.fileBuffer.byteLength>0?e.fileBuffer:W.arrayBuffer()}async function C(W){if(a.value="",!(W instanceof File)){T();return}if(!l.value||!u)return;const k=++m;o.value=!0;try{const P=new mE,N=await B(W);if(k!==m)return;const U=P.parse(N);if(!U?.attributes?.position?.count)throw new Error("STL contains no geometry");if(U.computeVertexNormals(),U.computeBoundingBox(),!U.boundingBox)throw new Error("Could not compute model bounds");if(T(),k!==m)return;const K=new H;U.boundingBox.getCenter(K),U.translate(-K.x,-K.y,0),U.computeBoundingBox();const ce=new H;U.boundingBox.getSize(ce);const Ee=130/Math.max(ce.x||1,ce.y||1,ce.z||1);U.scale(Ee,Ee,Ee),U.computeBoundingBox();const Ce=new Wx({color:n(),metalness:.1,roughness:.55});_=new ni(U,Ce),_.castShadow=!1,_.receiveShadow=!1,u.add(_),v()}catch(P){if(k!==m)return;console.error("STL preview load failed:",P),T(),a.value="Failed to load STL preview. The file may be invalid or unsupported."}finally{k===m&&(o.value=!1)}}function V(){m+=1,window.removeEventListener("resize",D),g&&(window.cancelAnimationFrame(g),g=null),T(),h?.dispose(),d?.dispose(),d?.domElement&&r.value?.contains(d.domElement)&&r.value.removeChild(d.domElement),h=null,d=null,f=null,u=null,l.value=!1}return as(()=>e.darkMode,()=>{i(),s()}),as([()=>e.file,()=>e.fileBuffer,l],([W,,k])=>{k&&C(W)}),as(()=>e.orientation,()=>{if(!(!l.value||!_))try{v()}catch(W){console.error("STL orientation apply failed:",W)}},{deep:!0}),Wc(async()=>{await Hc(),E(),l.value=!!u,window.addEventListener("resize",D),e.file&&C(e.file)}),fa(()=>{V()}),(W,k)=>(Ue(),He("div",gE,[j("div",{ref_key:"mountEl",ref:r,class:"h-full min-h-[380px] w-full"},null,512),c.value?o.value?(Ue(),He("div",xE," Loading 3D model... ")):a.value?(Ue(),He("div",vE,je(a.value),1)):xt("",!0):(Ue(),He("div",_E," Select an STL file to preview. "))]))}},TE={class:"text-sm text-slate-500 dark:text-slate-400"},AE={class:"text-right text-sm font-medium text-slate-800 dark:text-slate-100"},Rt={__name:"StatRow",props:{label:{type:String,required:!0},value:{type:String,default:"—"},compact:{type:Boolean,default:!1}},setup(t){return(e,n)=>(Ue(),He("div",{class:Ft(["flex items-start justify-between gap-3 border-b border-slate-100 last:border-0 dark:border-slate-800",t.compact?"py-2":"py-3"])},[j("span",TE,je(t.label),1),j("span",AE,je(t.value),1)],2))}},wE={class:"card flex w-full min-w-0 flex-col transition hover:shadow-md"},RE={key:0},CE={class:"mt-5 border-t border-slate-100 pt-4 dark:border-slate-800"},PE={key:1,class:"mt-5 border-t border-slate-100 pt-4 dark:border-slate-800"},DE={__name:"AiRecommendationsCard",props:{data:{type:Object,required:!0}},emits:["copy-settings"],setup(t,{emit:e}){const n=e;async function i(s){try{await navigator.clipboard.writeText(s||""),n("copy-settings")}catch{}}return(s,r)=>(Ue(),He("article",wE,[r[4]||(r[4]=j("h2",{class:"card-title"},[j("span",{class:"text-indigo-500"},"✦"),An(" AI Recommendations ")],-1)),t.data.hasUseCaseResolution?(Ue(),He("div",RE,[r[1]||(r[1]=j("p",{class:"section-label mb-1"}," Use case ",-1)),ot(Rt,{label:"Your use case",value:t.data.userUseCase},null,8,["value"]),t.data.showAiComparison?(Ue(),jn(Rt,{key:0,label:"AI suggested use case",value:t.data.aiUseCase},null,8,["value"])):xt("",!0),t.data.showAiComparison?(Ue(),jn(Rt,{key:1,label:"Alignment",value:t.data.useCaseAligned},null,8,["value"])):xt("",!0),ot(Rt,{label:"Final use case",value:t.data.effectiveUseCase},null,8,["value"])])):xt("",!0),j("div",{class:Ft(t.data.hasUseCaseResolution?"mt-5 border-t border-slate-100 pt-4 dark:border-slate-800":"")},[r[2]||(r[2]=j("p",{class:"section-label mb-1"}," Material & orientation ",-1)),ot(Rt,{label:"Recommended Filament",value:t.data.recommendedFilament},null,8,["value"]),ot(Rt,{label:"Orientation (angles)",value:t.data.orientationAngles},null,8,["value"])],2),j("div",CE,[r[3]||(r[3]=j("p",{class:"section-label mb-1"}," Print settings ",-1)),ot(Rt,{label:"Support Required",value:t.data.supportRequired},null,8,["value"]),ot(Rt,{label:"Support Difficulty",value:t.data.supportDifficulty},null,8,["value"]),ot(Rt,{label:"Support Settings",value:t.data.supportSettings},null,8,["value"]),ot(Rt,{label:"Layer Height",value:t.data.layerHeight},null,8,["value"]),ot(Rt,{label:"Wall Count",value:String(t.data.wallCount)},null,8,["value"]),ot(Rt,{label:"Infill Percentage",value:t.data.infillPercentage},null,8,["value"]),ot(Rt,{label:"Infill Type",value:t.data.infillType},null,8,["value"]),ot(Rt,{label:"Brim Required",value:t.data.brimRequired},null,8,["value"]),ot(Rt,{label:"Print Quality",value:t.data.printQuality},null,8,["value"])]),t.data.settingsFullText?(Ue(),He("div",PE,[j("button",{type:"button",class:"btn-secondary w-full py-2.5 text-sm",onClick:r[0]||(r[0]=o=>i(t.data.settingsFullText))}," Copy settings ")])):xt("",!0)]))}},LE={class:"card w-full min-w-0 transition hover:shadow-md"},IE={key:0,class:"mb-4 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800 dark:border-amber-800 dark:bg-amber-950/40 dark:text-amber-200"},UE={class:"mt-5 border-t border-slate-100 pt-4 dark:border-slate-800"},xl="—",NE={__name:"PrintStatsCard",props:{data:{type:Object,required:!0}},setup(t){const e=t;function n(){const{printTime:i,printTimeHours:s}=e.data,r=i&&i!==xl,o=s&&s!==xl;return r&&o?`${i} (${s})`:r?i:o?s:xl}return(i,s)=>(Ue(),He("article",LE,[s[2]||(s[2]=j("h2",{class:"card-title"},[j("span",{class:"text-violet-500"},"◈"),An(" Print Statistics ")],-1)),t.data.hasStats?xt("",!0):(Ue(),He("div",IE," Print statistics unavailable — slicing may have partially failed. ")),j("div",null,[s[0]||(s[0]=j("p",{class:"section-label mb-1"}," Slicer output ",-1)),ot(Rt,{label:"Filament Weight",value:t.data.filamentWeight},null,8,["value"]),ot(Rt,{label:"Filament Length",value:t.data.filamentLength},null,8,["value"]),ot(Rt,{label:"Print Time",value:n()},null,8,["value"])]),j("div",UE,[s[1]||(s[1]=j("p",{class:"section-label mb-1"}," Geometry ",-1)),ot(Rt,{label:"Model Volume",value:t.data.modelVolume},null,8,["value"]),ot(Rt,{label:"Dimensions (W×H×D)",value:t.data.dimensions},null,8,["value"]),ot(Rt,{label:"Watertight",value:t.data.isWatertight},null,8,["value"]),ot(Rt,{label:"Overhang Volume %",value:t.data.overhangVolumePercentage},null,8,["value"]),ot(Rt,{label:"Overhang Volume",value:t.data.overhangVolume},null,8,["value"])])]))}},FE={class:"card w-full min-w-0 p-5 transition hover:shadow-md"},OE={class:"mt-3 rounded-xl border border-indigo-100 bg-gradient-to-r from-indigo-50 to-violet-50 px-4 py-4 dark:border-indigo-900/60 dark:from-indigo-950/50 dark:to-violet-950/50"},BE={class:"mt-1.5 text-3xl font-extrabold tabular-nums tracking-tight text-indigo-700 dark:text-indigo-200"},kE={__name:"CostAnalysisCard",props:{data:{type:Object,required:!0}},setup(t){return(e,n)=>(Ue(),He("article",FE,[n[1]||(n[1]=j("h2",{class:"card-title mb-2"},[j("span",{class:"text-emerald-500"},"₹"),An(" Cost Analysis ")],-1)),j("div",OE,[n[0]||(n[0]=j("p",{class:"text-sm font-semibold text-indigo-700 dark:text-indigo-300"}," Final Cost (+ GST) ",-1)),j("p",BE,je(t.data.finalCost),1)])]))}},zp=(t,e)=>{const n=t.__vccOpts||t;for(const[i,s]of e)n[i]=s;return n},zE={class:"card w-full min-w-0 transition hover:shadow-md"},HE={class:"grid grid-cols-3 gap-2"},VE={"aria-hidden":"true"},GE={"aria-hidden":"true"},WE={"aria-hidden":"true"},XE={class:"mt-5 space-y-4"},qE={key:0},$E={class:"mt-1 flex items-start justify-between gap-2"},jE={class:"text-sm font-medium text-slate-800 dark:text-slate-100"},YE=["title"],KE={class:"path-box-text"},ZE={key:1},JE={class:"mt-1 flex items-start justify-between gap-2"},QE={class:"text-sm font-medium text-slate-800 dark:text-slate-100"},eT=["title"],tT={class:"path-box-text"},nT={key:0,class:"mt-5 border-t border-slate-100 pt-4 dark:border-slate-800"},iT={class:"space-y-3"},sT={key:0,class:"rounded-lg border border-slate-100 p-2.5 dark:border-slate-700"},rT={class:"mt-0.5 flex items-start justify-between gap-2"},oT={class:"text-sm font-medium text-slate-800 dark:text-slate-100"},aT=["title"],lT={class:"path-box-text"},cT={key:1,class:"rounded-lg border border-slate-100 p-2.5 dark:border-slate-700"},uT={class:"mt-0.5 flex items-start justify-between gap-2"},fT={class:"text-sm font-medium text-slate-800 dark:text-slate-100"},dT=["title"],hT={class:"path-box-text"},pT={class:"mt-4 border-t border-slate-100 pt-4 dark:border-slate-800"},mT=["disabled"],gT={key:0,class:"mt-2 text-[11px] leading-relaxed text-slate-400 dark:text-slate-500"},_T={__name:"SlicerInfoCard",props:{data:{type:Object,required:!0},canPlaceOrder:{type:Boolean,default:!1},placingOrder:{type:Boolean,default:!1},orderPlaced:{type:Boolean,default:!1}},emits:["place-order"],setup(t,{emit:e}){const n=e,i=wt(new Set);function s(u){if(!u||u==="—")return null;const f=String(u).split(/[/\\]/);return f[f.length-1]||u}function r(u){return!!(u&&u!=="—")}function o(u){return i.value.has(u)}function a(u){const f=new Set(i.value);f.has(u)?f.delete(u):f.add(u),i.value=f}function l(u,f=!1){return u?"border-emerald-200 bg-emerald-50 dark:border-emerald-800/60 dark:bg-emerald-950/30":f?"border-red-200 bg-red-50 dark:border-red-900/60 dark:bg-red-950/30":"border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/50"}function c(u,f=!1){return u?"text-emerald-700 dark:text-emerald-400":f?"text-red-600 dark:text-red-400":"text-slate-400 dark:text-slate-500"}return(u,f)=>(Ue(),He("article",zE,[f[13]||(f[13]=j("h2",{class:"card-title"},[j("span",{class:"text-sky-500"},"⚙"),An(" Slicer Information ")],-1)),j("div",HE,[j("div",{class:Ft(["flex min-h-[4.5rem] min-w-0 flex-col rounded-xl border px-3 py-3",l(t.data.gcodeGenerated)])},[f[5]||(f[5]=j("p",{class:"section-label truncate"}," G-code ",-1)),j("p",{class:Ft(["mt-auto text-xs font-semibold leading-snug",c(t.data.gcodeGenerated)])},[j("span",VE,je(t.data.gcodeGenerated?"✓ ":"— "),1),An(je(t.data.gcodeGenerated?"Generated":"Not generated"),1)],2)],2),j("div",{class:Ft(["flex min-h-[4.5rem] min-w-0 flex-col rounded-xl border px-3 py-3",l(t.data.threeMfGenerated)])},[f[6]||(f[6]=j("p",{class:"section-label truncate"}," 3MF ",-1)),j("p",{class:Ft(["mt-auto text-xs font-semibold leading-snug",c(t.data.threeMfGenerated)])},[j("span",GE,je(t.data.threeMfGenerated?"✓ ":"— "),1),An(je(t.data.threeMfGenerated?"Generated":"Not generated"),1)],2)],2),j("div",{class:Ft(["flex min-h-[4.5rem] min-w-0 flex-col rounded-xl border px-3 py-3",l(t.data.slicingSuccess,!t.data.slicingSuccess)])},[f[7]||(f[7]=j("p",{class:"section-label truncate"}," Slicing ",-1)),j("p",{class:Ft(["mt-auto text-xs font-semibold leading-snug",c(t.data.slicingSuccess,!t.data.slicingSuccess)])},[j("span",WE,je(t.data.slicingSuccess?"✓ ":"✗ "),1),An(je(t.data.slicingSuccess?"Success":"Failed"),1)],2)],2)]),j("div",XE,[r(t.data.printerProfile)?(Ue(),He("div",qE,[f[8]||(f[8]=j("p",{class:"section-label"}," Printer profile ",-1)),j("div",$E,[j("p",jE,je(s(t.data.printerProfile)),1),j("button",{type:"button",class:"shrink-0 text-xs font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300",onClick:f[0]||(f[0]=d=>a("printer"))},je(o("printer")?"Hide path":"Show path"),1)]),o("printer")?(Ue(),He("div",{key:0,class:"path-box mt-2",title:t.data.printerProfile},[j("p",KE,je(t.data.printerProfile),1)],8,YE)):xt("",!0)])):xt("",!0),r(t.data.filamentProfile)?(Ue(),He("div",ZE,[f[9]||(f[9]=j("p",{class:"section-label"}," Filament profile ",-1)),j("div",JE,[j("p",QE,je(s(t.data.filamentProfile)),1),j("button",{type:"button",class:"shrink-0 text-xs font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300",onClick:f[1]||(f[1]=d=>a("filament"))},je(o("filament")?"Hide path":"Show path"),1)]),o("filament")?(Ue(),He("div",{key:0,class:"path-box mt-2",title:t.data.filamentProfile},[j("p",tT,je(t.data.filamentProfile),1)],8,eT)):xt("",!0)])):xt("",!0)]),r(t.data.gcodePath)||r(t.data.threeMfPath)?(Ue(),He("div",nT,[f[12]||(f[12]=j("p",{class:"section-label mb-3"}," Output files ",-1)),j("div",iT,[r(t.data.gcodePath)?(Ue(),He("div",sT,[f[10]||(f[10]=j("p",{class:"text-xs text-slate-500 dark:text-slate-400"}," G-code ",-1)),j("div",rT,[j("p",oT,je(s(t.data.gcodePath)),1),j("button",{type:"button",class:"shrink-0 text-xs font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300",onClick:f[2]||(f[2]=d=>a("gcode"))},je(o("gcode")?"Hide path":"Show path"),1)]),o("gcode")?(Ue(),He("div",{key:0,class:"path-box mt-2",title:t.data.gcodePath},[j("p",lT,je(t.data.gcodePath),1)],8,aT)):xt("",!0)])):xt("",!0),r(t.data.threeMfPath)?(Ue(),He("div",cT,[f[11]||(f[11]=j("p",{class:"text-xs text-slate-500 dark:text-slate-400"}," 3MF ",-1)),j("div",uT,[j("p",fT,je(s(t.data.threeMfPath)),1),j("button",{type:"button",class:"shrink-0 text-xs font-medium text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300",onClick:f[3]||(f[3]=d=>a("threeMf"))},je(o("threeMf")?"Hide path":"Show path"),1)]),o("threeMf")?(Ue(),He("div",{key:0,class:"path-box mt-2",title:t.data.threeMfPath},[j("p",hT,je(t.data.threeMfPath),1)],8,dT)):xt("",!0)])):xt("",!0)])])):xt("",!0),f[14]||(f[14]=jc('<div class="mt-5 border-t border-slate-100 pt-4 dark:border-slate-800" data-v-768768c5><div class="flex flex-wrap gap-2" data-v-768768c5><button type="button" disabled title="Download requires a backend file endpoint (paths are server-side only)" class="min-w-[8.5rem] flex-1 cursor-not-allowed rounded-lg border border-dashed border-slate-300 bg-slate-50 px-3 py-2.5 text-xs font-medium text-slate-500 opacity-70 dark:border-slate-600 dark:bg-slate-800/40 dark:text-slate-400" data-v-768768c5> Download G-code </button><button type="button" disabled title="Download requires a backend file endpoint" class="min-w-[8.5rem] flex-1 cursor-not-allowed rounded-lg border border-dashed border-slate-300 bg-slate-50 px-3 py-2.5 text-xs font-medium text-slate-500 opacity-70 dark:border-slate-600 dark:bg-slate-800/40 dark:text-slate-400" data-v-768768c5> Download 3MF </button></div><p class="mt-2 text-[11px] leading-relaxed text-slate-400 dark:text-slate-500" data-v-768768c5> Downloads require a server file endpoint — paths are server-side only. </p></div>',1)),j("div",pT,[j("button",{type:"button",class:"btn-primary w-full",disabled:!t.canPlaceOrder||t.placingOrder||t.orderPlaced,onClick:f[4]||(f[4]=d=>n("place-order"))},je(t.orderPlaced?"Order placed":t.placingOrder?"Placing order…":"Place Order"),9,mT),t.canPlaceOrder?xt("",!0):(Ue(),He("p",gT," Place Order is available after a successful analysis with G-code and print stats. "))])]))}},xT=zp(_T,[["__scopeId","data-v-768768c5"]]),vT={class:"card transition hover:shadow-md"},ST={key:0,class:"rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"},bT={class:"space-y-0"},yT={key:0,class:"section-label ml-1.5 text-amber-700 dark:text-amber-300"},MT={class:"mt-4 flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-700 dark:bg-slate-800/80"},ET={class:"text-sm font-semibold tabular-nums text-slate-900 dark:text-slate-100"},TT={__name:"PipelineTimingsCard",props:{data:{type:Object,required:!0}},setup(t){const e=new Set(["ai_orientation","ai_support","ai_rendering","ai_vision","ai_filament","ai_print_settings"]);function n(i){return e.has(i)}return(i,s)=>(Ue(),He("article",vT,[s[1]||(s[1]=j("h2",{class:"card-title"},[j("span",{class:"text-sky-500"},"⏱"),An(" Pipeline execution time ")],-1)),t.data.hasTimings?(Ue(),He(Vt,{key:1},[j("ul",bT,[(Ue(!0),He(Vt,null,Ar(t.data.stages,r=>(Ue(),He("li",{key:r.key,class:Ft(["flex items-start justify-between gap-3",[n(r.key)?"ml-3 border-l-2 border-slate-200 py-2 pl-4 dark:border-slate-700":"py-3",r.isSlowest?"rounded-lg border border-amber-200 bg-amber-50/80 px-3 dark:border-amber-800 dark:bg-amber-950/40":"border-b border-slate-100 last:border-0 dark:border-slate-800"]])},[j("span",{class:Ft(["text-sm",r.isSlowest?"font-semibold text-amber-900 dark:text-amber-100":n(r.key)?"text-slate-400 dark:text-slate-500":"text-slate-500 dark:text-slate-400"])},[An(je(r.label)+" ",1),r.isSlowest?(Ue(),He("span",yT," Slowest ")):xt("",!0)],2),j("span",{class:Ft(["text-right text-sm font-medium tabular-nums",r.isSlowest?"text-amber-900 dark:text-amber-100":n(r.key)?"text-slate-500 dark:text-slate-400":"text-slate-800 dark:text-slate-100"])},je(r.display),3)],2))),128))]),j("div",MT,[s[0]||(s[0]=j("span",{class:"text-sm font-semibold text-slate-700 dark:text-slate-200"}," Total processing time ",-1)),j("span",ET,je(t.data.totalDisplay),1)])],64)):(Ue(),He("p",ST," Timing data unavailable. "))]))}};function Hp(t,e){return function(){return t.apply(e,arguments)}}const{toString:AT}=Object.prototype,{getPrototypeOf:Sa}=Object,{iterator:ba,toStringTag:Vp}=Symbol,ya=(t=>e=>{const n=AT.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),On=t=>(t=t.toLowerCase(),e=>ya(e)===t),Ma=t=>e=>typeof e===t,{isArray:Qs}=Array,Ys=Ma("undefined");function Br(t){return t!==null&&!Ys(t)&&t.constructor!==null&&!Ys(t.constructor)&&hn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Gp=On("ArrayBuffer");function wT(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Gp(t.buffer),e}const RT=Ma("string"),hn=Ma("function"),Wp=Ma("number"),kr=t=>t!==null&&typeof t=="object",CT=t=>t===!0||t===!1,Uo=t=>{if(ya(t)!=="object")return!1;const e=Sa(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Vp in t)&&!(ba in t)},PT=t=>{if(!kr(t)||Br(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},DT=On("Date"),LT=On("File"),IT=t=>!!(t&&typeof t.uri<"u"),UT=t=>t&&typeof t.getParts<"u",NT=On("Blob"),FT=On("FileList"),OT=t=>kr(t)&&hn(t.pipe);function BT(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Pd=BT(),Dd=typeof Pd.FormData<"u"?Pd.FormData:void 0,kT=t=>{if(!t)return!1;if(Dd&&t instanceof Dd)return!0;const e=Sa(t);if(!e||e===Object.prototype||!hn(t.append))return!1;const n=ya(t);return n==="formdata"||n==="object"&&hn(t.toString)&&t.toString()==="[object FormData]"},zT=On("URLSearchParams"),[HT,VT,GT,WT]=["ReadableStream","Request","Response","Headers"].map(On),XT=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function zr(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,s;if(typeof t!="object"&&(t=[t]),Qs(t))for(i=0,s=t.length;i<s;i++)e.call(null,t[i],i,t);else{if(Br(t))return;const r=n?Object.getOwnPropertyNames(t):Object.keys(t),o=r.length;let a;for(i=0;i<o;i++)a=r[i],e.call(null,t[a],a,t)}}function Xp(t,e){if(Br(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,s;for(;i-- >0;)if(s=n[i],e===s.toLowerCase())return s;return null}const ss=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,qp=t=>!Ys(t)&&t!==ss;function Ac(...t){const{caseless:e,skipUndefined:n}=qp(this)&&this||{},i={},s=(r,o)=>{if(o==="__proto__"||o==="constructor"||o==="prototype")return;const a=e&&Xp(i,o)||o,l=wc(i,a)?i[a]:void 0;Uo(l)&&Uo(r)?i[a]=Ac(l,r):Uo(r)?i[a]=Ac({},r):Qs(r)?i[a]=r.slice():(!n||!Ys(r))&&(i[a]=r)};for(let r=0,o=t.length;r<o;r++)t[r]&&zr(t[r],s);return i}const qT=(t,e,n,{allOwnKeys:i}={})=>(zr(e,(s,r)=>{n&&hn(s)?Object.defineProperty(t,r,{__proto__:null,value:Hp(s,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,r,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),$T=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),jT=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},YT=(t,e,n,i)=>{let s,r,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),r=s.length;r-- >0;)o=s[r],(!i||i(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&Sa(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},KT=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},ZT=t=>{if(!t)return null;if(Qs(t))return t;let e=t.length;if(!Wp(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},JT=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Sa(Uint8Array)),QT=(t,e)=>{const i=(t&&t[ba]).call(t);let s;for(;(s=i.next())&&!s.done;){const r=s.value;e.call(t,r[0],r[1])}},eA=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},tA=On("HTMLFormElement"),nA=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,s){return i.toUpperCase()+s}),wc=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),iA=On("RegExp"),$p=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};zr(n,(s,r)=>{let o;(o=e(s,r,t))!==!1&&(i[r]=o||s)}),Object.defineProperties(t,i)},sA=t=>{$p(t,(e,n)=>{if(hn(t)&&["arguments","caller","callee"].includes(n))return!1;const i=t[n];if(hn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},rA=(t,e)=>{const n={},i=s=>{s.forEach(r=>{n[r]=!0})};return Qs(t)?i(t):i(String(t).split(e)),n},oA=()=>{},aA=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function lA(t){return!!(t&&hn(t.append)&&t[Vp]==="FormData"&&t[ba])}const cA=t=>{const e=new WeakSet,n=i=>{if(kr(i)){if(e.has(i))return;if(Br(i))return i;if(!("toJSON"in i)){e.add(i);const s=Qs(i)?[]:{};return zr(i,(r,o)=>{const a=n(r);!Ys(a)&&(s[o]=a)}),e.delete(i),s}}return i};return n(t)},uA=On("AsyncFunction"),fA=t=>t&&(kr(t)||hn(t))&&hn(t.then)&&hn(t.catch),jp=((t,e)=>t?setImmediate:e?((n,i)=>(ss.addEventListener("message",({source:s,data:r})=>{s===ss&&r===n&&i.length&&i.shift()()},!1),s=>{i.push(s),ss.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",hn(ss.postMessage)),dA=typeof queueMicrotask<"u"?queueMicrotask.bind(ss):typeof process<"u"&&process.nextTick||jp,hA=t=>t!=null&&hn(t[ba]),G={isArray:Qs,isArrayBuffer:Gp,isBuffer:Br,isFormData:kT,isArrayBufferView:wT,isString:RT,isNumber:Wp,isBoolean:CT,isObject:kr,isPlainObject:Uo,isEmptyObject:PT,isReadableStream:HT,isRequest:VT,isResponse:GT,isHeaders:WT,isUndefined:Ys,isDate:DT,isFile:LT,isReactNativeBlob:IT,isReactNative:UT,isBlob:NT,isRegExp:iA,isFunction:hn,isStream:OT,isURLSearchParams:zT,isTypedArray:JT,isFileList:FT,forEach:zr,merge:Ac,extend:qT,trim:XT,stripBOM:$T,inherits:jT,toFlatObject:YT,kindOf:ya,kindOfTest:On,endsWith:KT,toArray:ZT,forEachEntry:QT,matchAll:eA,isHTMLForm:tA,hasOwnProperty:wc,hasOwnProp:wc,reduceDescriptors:$p,freezeMethods:sA,toObjectSet:rA,toCamelCase:nA,noop:oA,toFiniteNumber:aA,findKey:Xp,global:ss,isContextDefined:qp,isSpecCompliantForm:lA,toJSONObject:cA,isAsyncFn:uA,isThenable:fA,setImmediate:jp,asap:dA,isIterable:hA},pA=G.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),mA=t=>{const e={};let n,i,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),i=o.substring(s+1).trim(),!(!n||e[n]&&pA[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e};function gA(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const _A=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),xA=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function hu(t,e){return G.isArray(t)?t.map(n=>hu(n,e)):gA(String(t).replace(e,""))}const vA=t=>hu(t,_A),SA=t=>hu(t,xA);function Yp(t){const e=Object.create(null);return G.forEach(t.toJSON(),(n,i)=>{e[i]=SA(n)}),e}const Ld=Symbol("internals");function cr(t){return t&&String(t).trim().toLowerCase()}function No(t){return t===!1||t==null?t:G.isArray(t)?t.map(No):vA(String(t))}function bA(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const yA=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function vl(t,e,n,i,s){if(G.isFunction(i))return i.call(this,e,n);if(s&&(e=n),!!G.isString(e)){if(G.isString(i))return e.indexOf(i)!==-1;if(G.isRegExp(i))return i.test(e)}}function MA(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function EA(t,e){const n=G.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{__proto__:null,value:function(s,r,o){return this[i].call(this,e,s,r,o)},configurable:!0})})}let cn=class{constructor(e){e&&this.set(e)}set(e,n,i){const s=this;function r(a,l,c){const u=cr(l);if(!u)throw new Error("header name must be a non-empty string");const f=G.findKey(s,u);(!f||s[f]===void 0||c===!0||c===void 0&&s[f]!==!1)&&(s[f||l]=No(a))}const o=(a,l)=>G.forEach(a,(c,u)=>r(c,u,l));if(G.isPlainObject(e)||e instanceof this.constructor)o(e,n);else if(G.isString(e)&&(e=e.trim())&&!yA(e))o(mA(e),n);else if(G.isObject(e)&&G.isIterable(e)){let a={},l,c;for(const u of e){if(!G.isArray(u))throw TypeError("Object iterator must return a key-value pair");a[c=u[0]]=(l=a[c])?G.isArray(l)?[...l,u[1]]:[l,u[1]]:u[1]}o(a,n)}else e!=null&&r(n,e,i);return this}get(e,n){if(e=cr(e),e){const i=G.findKey(this,e);if(i){const s=this[i];if(!n)return s;if(n===!0)return bA(s);if(G.isFunction(n))return n.call(this,s,i);if(G.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=cr(e),e){const i=G.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||vl(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let s=!1;function r(o){if(o=cr(o),o){const a=G.findKey(i,o);a&&(!n||vl(i,i[a],a,n))&&(delete i[a],s=!0)}}return G.isArray(e)?e.forEach(r):r(e),s}clear(e){const n=Object.keys(this);let i=n.length,s=!1;for(;i--;){const r=n[i];(!e||vl(this,this[r],r,e,!0))&&(delete this[r],s=!0)}return s}normalize(e){const n=this,i={};return G.forEach(this,(s,r)=>{const o=G.findKey(i,r);if(o){n[o]=No(s),delete n[r];return}const a=e?MA(r):String(r).trim();a!==r&&delete n[r],n[a]=No(s),i[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return G.forEach(this,(i,s)=>{i!=null&&i!==!1&&(n[s]=e&&G.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(s=>i.set(s)),i}static accessor(e){const i=(this[Ld]=this[Ld]={accessors:{}}).accessors,s=this.prototype;function r(o){const a=cr(o);i[a]||(EA(s,o),i[a]=!0)}return G.isArray(e)?e.forEach(r):r(e),this}};cn.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);G.reduceDescriptors(cn.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});G.freezeMethods(cn);const TA="[REDACTED ****]";function AA(t){if(G.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(G.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function wA(t,e){const n=new Set(e.map(r=>String(r).toLowerCase())),i=[],s=r=>{if(r===null||typeof r!="object"||G.isBuffer(r))return r;if(i.indexOf(r)!==-1)return;r instanceof cn&&(r=r.toJSON()),i.push(r);let o;if(G.isArray(r))o=[],r.forEach((a,l)=>{const c=s(a);G.isUndefined(c)||(o[l]=c)});else{if(!G.isPlainObject(r)&&AA(r))return i.pop(),r;o=Object.create(null);for(const[a,l]of Object.entries(r)){const c=n.has(a.toLowerCase())?TA:s(l);G.isUndefined(c)||(o[a]=c)}}return i.pop(),o};return s(t)}let Ne=class Kp extends Error{static from(e,n,i,s,r,o){const a=new Kp(e.message,n||e.code,i,s,r);return a.cause=e,a.name=e.name,e.status!=null&&a.status==null&&(a.status=e.status),o&&Object.assign(a,o),a}constructor(e,n,i,s,r){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),s&&(this.request=s),r&&(this.response=r,this.status=r.status)}toJSON(){const e=this.config,n=e&&G.hasOwnProp(e,"redact")?e.redact:void 0,i=G.isArray(n)&&n.length>0?wA(e,n):G.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};Ne.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";Ne.ERR_BAD_OPTION="ERR_BAD_OPTION";Ne.ECONNABORTED="ECONNABORTED";Ne.ETIMEDOUT="ETIMEDOUT";Ne.ECONNREFUSED="ECONNREFUSED";Ne.ERR_NETWORK="ERR_NETWORK";Ne.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";Ne.ERR_DEPRECATED="ERR_DEPRECATED";Ne.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";Ne.ERR_BAD_REQUEST="ERR_BAD_REQUEST";Ne.ERR_CANCELED="ERR_CANCELED";Ne.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";Ne.ERR_INVALID_URL="ERR_INVALID_URL";Ne.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const RA=null;function Rc(t){return G.isPlainObject(t)||G.isArray(t)}function Zp(t){return G.endsWith(t,"[]")?t.slice(0,-2):t}function Sl(t,e,n){return t?t.concat(e).map(function(s,r){return s=Zp(s),!n&&r?"["+s+"]":s}).join(n?".":""):e}function CA(t){return G.isArray(t)&&!t.some(Rc)}const PA=G.toFlatObject(G,{},null,function(e){return/^is[A-Z]/.test(e)});function Ea(t,e,n){if(!G.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=G.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,p){return!G.isUndefined(p[m])});const i=n.metaTokens,s=n.visitor||f,r=n.dots,o=n.indexes,a=n.Blob||typeof Blob<"u"&&Blob,l=n.maxDepth===void 0?100:n.maxDepth,c=a&&G.isSpecCompliantForm(e);if(!G.isFunction(s))throw new TypeError("visitor must be a function");function u(_){if(_===null)return"";if(G.isDate(_))return _.toISOString();if(G.isBoolean(_))return _.toString();if(!c&&G.isBlob(_))throw new Ne("Blob is not supported. Use a Buffer instead.");return G.isArrayBuffer(_)||G.isTypedArray(_)?c&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function f(_,m,p){let S=_;if(G.isReactNative(e)&&G.isReactNativeBlob(_))return e.append(Sl(p,m,r),u(_)),!1;if(_&&!p&&typeof _=="object"){if(G.endsWith(m,"{}"))m=i?m:m.slice(0,-2),_=JSON.stringify(_);else if(G.isArray(_)&&CA(_)||(G.isFileList(_)||G.endsWith(m,"[]"))&&(S=G.toArray(_)))return m=Zp(m),S.forEach(function(M,D){!(G.isUndefined(M)||M===null)&&e.append(o===!0?Sl([m],D,r):o===null?m:m+"[]",u(M))}),!1}return Rc(_)?!0:(e.append(Sl(p,m,r),u(_)),!1)}const d=[],h=Object.assign(PA,{defaultVisitor:f,convertValue:u,isVisitable:Rc});function g(_,m,p=0){if(!G.isUndefined(_)){if(p>l)throw new Ne("Object is too deeply nested ("+p+" levels). Max depth: "+l,Ne.ERR_FORM_DATA_DEPTH_EXCEEDED);if(d.indexOf(_)!==-1)throw Error("Circular reference detected in "+m.join("."));d.push(_),G.forEach(_,function(E,M){(!(G.isUndefined(E)||E===null)&&s.call(e,E,G.isString(M)?M.trim():M,m,h))===!0&&g(E,m?m.concat(M):[M],p+1)}),d.pop()}}if(!G.isObject(t))throw new TypeError("data must be an object");return g(t),e}function Id(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(i){return e[i]})}function pu(t,e){this._pairs=[],t&&Ea(t,this,e)}const Jp=pu.prototype;Jp.append=function(e,n){this._pairs.push([e,n])};Jp.toString=function(e){const n=e?function(i){return e.call(this,i,Id)}:Id;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function DA(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Qp(t,e,n){if(!e)return t;const i=n&&n.encode||DA,s=G.isFunction(n)?{serialize:n}:n,r=s&&s.serialize;let o;if(r?o=r(e,s):o=G.isURLSearchParams(e)?e.toString():new pu(e,s).toString(i),o){const a=t.indexOf("#");a!==-1&&(t=t.slice(0,a)),t+=(t.indexOf("?")===-1?"?":"&")+o}return t}class Ud{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){G.forEach(this.handlers,function(i){i!==null&&e(i)})}}const mu={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},LA=typeof URLSearchParams<"u"?URLSearchParams:pu,IA=typeof FormData<"u"?FormData:null,UA=typeof Blob<"u"?Blob:null,NA={isBrowser:!0,classes:{URLSearchParams:LA,FormData:IA,Blob:UA},protocols:["http","https","file","blob","url","data"]},gu=typeof window<"u"&&typeof document<"u",Cc=typeof navigator=="object"&&navigator||void 0,FA=gu&&(!Cc||["ReactNative","NativeScript","NS"].indexOf(Cc.product)<0),OA=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",BA=gu&&window.location.href||"http://localhost",kA=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:gu,hasStandardBrowserEnv:FA,hasStandardBrowserWebWorkerEnv:OA,navigator:Cc,origin:BA},Symbol.toStringTag,{value:"Module"})),Kt={...kA,...NA};function zA(t,e){return Ea(t,new Kt.classes.URLSearchParams,{visitor:function(n,i,s,r){return Kt.isNode&&G.isBuffer(n)?(this.append(i,n.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)},...e})}function HA(t){return G.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function VA(t){const e={},n=Object.keys(t);let i;const s=n.length;let r;for(i=0;i<s;i++)r=n[i],e[r]=t[r];return e}function em(t){function e(n,i,s,r){let o=n[r++];if(o==="__proto__")return!0;const a=Number.isFinite(+o),l=r>=n.length;return o=!o&&G.isArray(s)?s.length:o,l?(G.hasOwnProp(s,o)?s[o]=G.isArray(s[o])?s[o].concat(i):[s[o],i]:s[o]=i,!a):((!G.hasOwnProp(s,o)||!G.isObject(s[o]))&&(s[o]=[]),e(n,i,s[o],r)&&G.isArray(s[o])&&(s[o]=VA(s[o])),!a)}if(G.isFormData(t)&&G.isFunction(t.entries)){const n={};return G.forEachEntry(t,(i,s)=>{e(HA(i),s,n,0)}),n}return null}const Ps=(t,e)=>t!=null&&G.hasOwnProp(t,e)?t[e]:void 0;function GA(t,e,n){if(G.isString(t))try{return(e||JSON.parse)(t),G.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const Hr={transitional:mu,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",s=i.indexOf("application/json")>-1,r=G.isObject(e);if(r&&G.isHTMLForm(e)&&(e=new FormData(e)),G.isFormData(e))return s?JSON.stringify(em(e)):e;if(G.isArrayBuffer(e)||G.isBuffer(e)||G.isStream(e)||G.isFile(e)||G.isBlob(e)||G.isReadableStream(e))return e;if(G.isArrayBufferView(e))return e.buffer;if(G.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(r){const l=Ps(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return zA(e,l).toString();if((a=G.isFileList(e))||i.indexOf("multipart/form-data")>-1){const c=Ps(this,"env"),u=c&&c.FormData;return Ea(a?{"files[]":e}:e,u&&new u,l)}}return r||s?(n.setContentType("application/json",!1),GA(e)):e}],transformResponse:[function(e){const n=Ps(this,"transitional")||Hr.transitional,i=n&&n.forcedJSONParsing,s=Ps(this,"responseType"),r=s==="json";if(G.isResponse(e)||G.isReadableStream(e))return e;if(e&&G.isString(e)&&(i&&!s||r)){const a=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e,Ps(this,"parseReviver"))}catch(l){if(a)throw l.name==="SyntaxError"?Ne.from(l,Ne.ERR_BAD_RESPONSE,this,null,Ps(this,"response")):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Kt.classes.FormData,Blob:Kt.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};G.forEach(["delete","get","head","post","put","patch","query"],t=>{Hr.headers[t]={}});function bl(t,e){const n=this||Hr,i=e||n,s=cn.from(i.headers);let r=i.data;return G.forEach(t,function(a){r=a.call(n,r,s.normalize(),e?e.status:void 0)}),s.normalize(),r}function tm(t){return!!(t&&t.__CANCEL__)}let Vr=class extends Ne{constructor(e,n,i){super(e??"canceled",Ne.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function nm(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Ne("Request failed with status code "+n.status,n.status>=400&&n.status<500?Ne.ERR_BAD_REQUEST:Ne.ERR_BAD_RESPONSE,n.config,n.request,n))}function WA(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1]||""}function XA(t,e){t=t||10;const n=new Array(t),i=new Array(t);let s=0,r=0,o;return e=e!==void 0?e:1e3,function(l){const c=Date.now(),u=i[r];o||(o=c),n[s]=l,i[s]=c;let f=r,d=0;for(;f!==s;)d+=n[f++],f=f%t;if(s=(s+1)%t,s===r&&(r=(r+1)%t),c-o<e)return;const h=u&&c-u;return h?Math.round(d*1e3/h):void 0}}function qA(t,e){let n=0,i=1e3/e,s,r;const o=(c,u=Date.now())=>{n=u,s=null,r&&(clearTimeout(r),r=null),t(...c)};return[(...c)=>{const u=Date.now(),f=u-n;f>=i?o(c,u):(s=c,r||(r=setTimeout(()=>{r=null,o(s)},i-f)))},()=>s&&o(s)]}const Jo=(t,e,n=3)=>{let i=0;const s=XA(50,250);return qA(r=>{if(!r||typeof r.loaded!="number")return;const o=r.loaded,a=r.lengthComputable?r.total:void 0,l=a!=null?Math.min(o,a):o,c=Math.max(0,l-i),u=s(c);i=Math.max(i,l);const f={loaded:l,total:a,progress:a?l/a:void 0,bytes:c,rate:u||void 0,estimated:u&&a?(a-l)/u:void 0,event:r,lengthComputable:a!=null,[e?"download":"upload"]:!0};t(f)},n)},Nd=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Fd=t=>(...e)=>G.asap(()=>t(...e)),$A=Kt.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Kt.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Kt.origin),Kt.navigator&&/(msie|trident)/i.test(Kt.navigator.userAgent)):()=>!0,jA=Kt.hasStandardBrowserEnv?{write(t,e,n,i,s,r,o){if(typeof document>"u")return;const a=[`${t}=${encodeURIComponent(e)}`];G.isNumber(n)&&a.push(`expires=${new Date(n).toUTCString()}`),G.isString(i)&&a.push(`path=${i}`),G.isString(s)&&a.push(`domain=${s}`),r===!0&&a.push("secure"),G.isString(o)&&a.push(`SameSite=${o}`),document.cookie=a.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie.split(";");for(let n=0;n<e.length;n++){const i=e[n].replace(/^\s+/,""),s=i.indexOf("=");if(s!==-1&&i.slice(0,s)===t)return decodeURIComponent(i.slice(s+1))}return null},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function YA(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function KA(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function im(t,e,n){let i=!YA(e);return t&&(i||n===!1)?KA(t,e):e}const Od=t=>t instanceof cn?{...t}:t;function fs(t,e){e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function i(c,u,f,d){return G.isPlainObject(c)&&G.isPlainObject(u)?G.merge.call({caseless:d},c,u):G.isPlainObject(u)?G.merge({},u):G.isArray(u)?u.slice():u}function s(c,u,f,d){if(G.isUndefined(u)){if(!G.isUndefined(c))return i(void 0,c,f,d)}else return i(c,u,f,d)}function r(c,u){if(!G.isUndefined(u))return i(void 0,u)}function o(c,u){if(G.isUndefined(u)){if(!G.isUndefined(c))return i(void 0,c)}else return i(void 0,u)}function a(c,u,f){if(G.hasOwnProp(e,f))return i(c,u);if(G.hasOwnProp(t,f))return i(void 0,c)}const l={url:r,method:r,data:r,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:a,headers:(c,u,f)=>s(Od(c),Od(u),f,!0)};return G.forEach(Object.keys({...t,...e}),function(u){if(u==="__proto__"||u==="constructor"||u==="prototype")return;const f=G.hasOwnProp(l,u)?l[u]:s,d=G.hasOwnProp(t,u)?t[u]:void 0,h=G.hasOwnProp(e,u)?e[u]:void 0,g=f(d,h,u);G.isUndefined(g)&&f!==a||(n[u]=g)}),n}const ZA=["content-type","content-length"];function JA(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e).forEach(([i,s])=>{ZA.includes(i.toLowerCase())&&t.set(i,s)})}const QA=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),sm=t=>{const e=fs({},t),n=d=>G.hasOwnProp(e,d)?e[d]:void 0,i=n("data");let s=n("withXSRFToken");const r=n("xsrfHeaderName"),o=n("xsrfCookieName");let a=n("headers");const l=n("auth"),c=n("baseURL"),u=n("allowAbsoluteUrls"),f=n("url");if(e.headers=a=cn.from(a),e.url=Qp(im(c,f,u),t.params,t.paramsSerializer),l&&a.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?QA(l.password):""))),G.isFormData(i)&&(Kt.hasStandardBrowserEnv||Kt.hasStandardBrowserWebWorkerEnv?a.setContentType(void 0):G.isFunction(i.getHeaders)&&JA(a,i.getHeaders(),n("formDataHeaderPolicy"))),Kt.hasStandardBrowserEnv&&(G.isFunction(s)&&(s=s(e)),s===!0||s==null&&$A(e.url))){const h=r&&o&&jA.read(o);h&&a.set(r,h)}return e},ew=typeof XMLHttpRequest<"u",tw=ew&&function(t){return new Promise(function(n,i){const s=sm(t);let r=s.data;const o=cn.from(s.headers).normalize();let{responseType:a,onUploadProgress:l,onDownloadProgress:c}=s,u,f,d,h,g;function _(){h&&h(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let m=new XMLHttpRequest;m.open(s.method.toUpperCase(),s.url,!0),m.timeout=s.timeout;function p(){if(!m)return;const E=cn.from("getAllResponseHeaders"in m&&m.getAllResponseHeaders()),D={data:!a||a==="text"||a==="json"?m.responseText:m.response,status:m.status,statusText:m.statusText,headers:E,config:t,request:m};nm(function(L){n(L),_()},function(L){i(L),_()},D),m=null}"onloadend"in m?m.onloadend=p:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.startsWith("file:"))||setTimeout(p)},m.onabort=function(){m&&(i(new Ne("Request aborted",Ne.ECONNABORTED,t,m)),_(),m=null)},m.onerror=function(M){const D=M&&M.message?M.message:"Network Error",T=new Ne(D,Ne.ERR_NETWORK,t,m);T.event=M||null,i(T),_(),m=null},m.ontimeout=function(){let M=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const D=s.transitional||mu;s.timeoutErrorMessage&&(M=s.timeoutErrorMessage),i(new Ne(M,D.clarifyTimeoutError?Ne.ETIMEDOUT:Ne.ECONNABORTED,t,m)),_(),m=null},r===void 0&&o.setContentType(null),"setRequestHeader"in m&&G.forEach(Yp(o),function(M,D){m.setRequestHeader(D,M)}),G.isUndefined(s.withCredentials)||(m.withCredentials=!!s.withCredentials),a&&a!=="json"&&(m.responseType=s.responseType),c&&([d,g]=Jo(c,!0),m.addEventListener("progress",d)),l&&m.upload&&([f,h]=Jo(l),m.upload.addEventListener("progress",f),m.upload.addEventListener("loadend",h)),(s.cancelToken||s.signal)&&(u=E=>{m&&(i(!E||E.type?new Vr(null,t,m):E),m.abort(),_(),m=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const S=WA(s.url);if(S&&!Kt.protocols.includes(S)){i(new Ne("Unsupported protocol "+S+":",Ne.ERR_BAD_REQUEST,t));return}m.send(r||null)})},nw=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let i=!1;const s=function(l){if(!i){i=!0,o();const c=l instanceof Error?l:this.reason;n.abort(c instanceof Ne?c:new Vr(c instanceof Error?c.message:c))}};let r=e&&setTimeout(()=>{r=null,s(new Ne(`timeout of ${e}ms exceeded`,Ne.ETIMEDOUT))},e);const o=()=>{t&&(r&&clearTimeout(r),r=null,t.forEach(l=>{l.unsubscribe?l.unsubscribe(s):l.removeEventListener("abort",s)}),t=null)};t.forEach(l=>l.addEventListener("abort",s));const{signal:a}=n;return a.unsubscribe=()=>G.asap(o),a},iw=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,s;for(;i<n;)s=i+e,yield t.slice(i,s),i=s},sw=async function*(t,e){for await(const n of rw(t))yield*iw(n,e)},rw=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},Bd=(t,e,n,i)=>{const s=sw(t,e);let r=0,o,a=l=>{o||(o=!0,i&&i(l))};return new ReadableStream({async pull(l){try{const{done:c,value:u}=await s.next();if(c){a(),l.close();return}let f=u.byteLength;if(n){let d=r+=f;n(d)}l.enqueue(new Uint8Array(u))}catch(c){throw a(c),c}},cancel(l){return a(l),s.return()}},{highWaterMark:2})};function ow(t){if(!t||typeof t!="string"||!t.startsWith("data:"))return 0;const e=t.indexOf(",");if(e<0)return 0;const n=t.slice(5,e),i=t.slice(e+1);if(/;base64/i.test(n)){let o=i.length;const a=i.length;for(let h=0;h<a;h++)if(i.charCodeAt(h)===37&&h+2<a){const g=i.charCodeAt(h+1),_=i.charCodeAt(h+2);(g>=48&&g<=57||g>=65&&g<=70||g>=97&&g<=102)&&(_>=48&&_<=57||_>=65&&_<=70||_>=97&&_<=102)&&(o-=2,h+=2)}let l=0,c=a-1;const u=h=>h>=2&&i.charCodeAt(h-2)===37&&i.charCodeAt(h-1)===51&&(i.charCodeAt(h)===68||i.charCodeAt(h)===100);c>=0&&(i.charCodeAt(c)===61?(l++,c--):u(c)&&(l++,c-=3)),l===1&&c>=0&&(i.charCodeAt(c)===61||u(c))&&l++;const d=Math.floor(o/4)*3-(l||0);return d>0?d:0}if(typeof Buffer<"u"&&typeof Buffer.byteLength=="function")return Buffer.byteLength(i,"utf8");let r=0;for(let o=0,a=i.length;o<a;o++){const l=i.charCodeAt(o);if(l<128)r+=1;else if(l<2048)r+=2;else if(l>=55296&&l<=56319&&o+1<a){const c=i.charCodeAt(o+1);c>=56320&&c<=57343?(r+=4,o++):r+=3}else r+=3}return r}const _u="1.16.1",kd=64*1024,{isFunction:bo}=G,zd=(t,...e)=>{try{return!!t(...e)}catch{return!1}},aw=t=>{const e=G.global!==void 0&&G.global!==null?G.global:globalThis,{ReadableStream:n,TextEncoder:i}=e;t=G.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response},t);const{fetch:s,Request:r,Response:o}=t,a=s?bo(s):typeof fetch=="function",l=bo(r),c=bo(o);if(!a)return!1;const u=a&&bo(n),f=a&&(typeof i=="function"?(p=>S=>p.encode(S))(new i):async p=>new Uint8Array(await new r(p).arrayBuffer())),d=l&&u&&zd(()=>{let p=!1;const S=new r(Kt.origin,{body:new n,method:"POST",get duplex(){return p=!0,"half"}}),E=S.headers.has("Content-Type");return S.body!=null&&S.body.cancel(),p&&!E}),h=c&&u&&zd(()=>G.isReadableStream(new o("").body)),g={stream:h&&(p=>p.body)};a&&["text","arrayBuffer","blob","formData","stream"].forEach(p=>{!g[p]&&(g[p]=(S,E)=>{let M=S&&S[p];if(M)return M.call(S);throw new Ne(`Response type '${p}' is not supported`,Ne.ERR_NOT_SUPPORT,E)})});const _=async p=>{if(p==null)return 0;if(G.isBlob(p))return p.size;if(G.isSpecCompliantForm(p))return(await new r(Kt.origin,{method:"POST",body:p}).arrayBuffer()).byteLength;if(G.isArrayBufferView(p)||G.isArrayBuffer(p))return p.byteLength;if(G.isURLSearchParams(p)&&(p=p+""),G.isString(p))return(await f(p)).byteLength},m=async(p,S)=>{const E=G.toFiniteNumber(p.getContentLength());return E??_(S)};return async p=>{let{url:S,method:E,data:M,signal:D,cancelToken:T,timeout:L,onDownloadProgress:v,onUploadProgress:R,responseType:B,headers:C,withCredentials:V="same-origin",fetchOptions:W,maxContentLength:k,maxBodyLength:P}=sm(p);const N=G.isNumber(k)&&k>-1,U=G.isNumber(P)&&P>-1;let K=s||fetch;B=B?(B+"").toLowerCase():"text";let ce=nw([D,T&&T.toAbortSignal()],L),de=null;const Ee=ce&&ce.unsubscribe&&(()=>{ce.unsubscribe()});let Ce;try{if(N&&typeof S=="string"&&S.startsWith("data:")&&ow(S)>k)throw new Ne("maxContentLength size of "+k+" exceeded",Ne.ERR_BAD_RESPONSE,p,de);if(U&&E!=="get"&&E!=="head"){const le=await m(C,M);if(typeof le=="number"&&isFinite(le)&&le>P)throw new Ne("Request body larger than maxBodyLength limit",Ne.ERR_BAD_REQUEST,p,de)}if(R&&d&&E!=="get"&&E!=="head"&&(Ce=await m(C,M))!==0){let le=new r(S,{method:"POST",body:M,duplex:"half"}),Oe;if(G.isFormData(M)&&(Oe=le.headers.get("content-type"))&&C.setContentType(Oe),le.body){const[Ge,We]=Nd(Ce,Jo(Fd(R)));M=Bd(le.body,kd,Ge,We)}}G.isString(V)||(V=V?"include":"omit");const Xe=l&&"credentials"in r.prototype;if(G.isFormData(M)){const le=C.getContentType();le&&/^multipart\/form-data/i.test(le)&&!/boundary=/i.test(le)&&C.delete("content-type")}C.set("User-Agent","axios/"+_u,!1);const st={...W,signal:ce,method:E.toUpperCase(),headers:Yp(C.normalize()),body:M,duplex:"half",credentials:Xe?V:void 0};de=l&&new r(S,st);let Ve=await(l?K(de,W):K(S,st));if(N){const le=G.toFiniteNumber(Ve.headers.get("content-length"));if(le!=null&&le>k)throw new Ne("maxContentLength size of "+k+" exceeded",Ne.ERR_BAD_RESPONSE,p,de)}const ne=h&&(B==="stream"||B==="response");if(h&&Ve.body&&(v||N||ne&&Ee)){const le={};["status","statusText","headers"].forEach(X=>{le[X]=Ve[X]});const Oe=G.toFiniteNumber(Ve.headers.get("content-length")),[Ge,We]=v&&Nd(Oe,Jo(Fd(v),!0))||[];let w=0;const I=X=>{if(N&&(w=X,w>k))throw new Ne("maxContentLength size of "+k+" exceeded",Ne.ERR_BAD_RESPONSE,p,de);Ge&&Ge(X)};Ve=new o(Bd(Ve.body,kd,I,()=>{We&&We(),Ee&&Ee()}),le)}B=B||"text";let xe=await g[G.findKey(g,B)||"text"](Ve,p);if(N&&!h&&!ne){let le;if(xe!=null&&(typeof xe.byteLength=="number"?le=xe.byteLength:typeof xe.size=="number"?le=xe.size:typeof xe=="string"&&(le=typeof i=="function"?new i().encode(xe).byteLength:xe.length)),typeof le=="number"&&le>k)throw new Ne("maxContentLength size of "+k+" exceeded",Ne.ERR_BAD_RESPONSE,p,de)}return!ne&&Ee&&Ee(),await new Promise((le,Oe)=>{nm(le,Oe,{data:xe,headers:cn.from(Ve.headers),status:Ve.status,statusText:Ve.statusText,config:p,request:de})})}catch(Xe){if(Ee&&Ee(),ce&&ce.aborted&&ce.reason instanceof Ne){const st=ce.reason;throw st.config=p,de&&(st.request=de),Xe!==st&&(st.cause=Xe),st}throw Xe&&Xe.name==="TypeError"&&/Load failed|fetch/i.test(Xe.message)?Object.assign(new Ne("Network Error",Ne.ERR_NETWORK,p,de,Xe&&Xe.response),{cause:Xe.cause||Xe}):Ne.from(Xe,Xe&&Xe.code,p,de,Xe&&Xe.response)}}},lw=new Map,rm=t=>{let e=t&&t.env||{};const{fetch:n,Request:i,Response:s}=e,r=[i,s,n];let o=r.length,a=o,l,c,u=lw;for(;a--;)l=r[a],c=u.get(l),c===void 0&&u.set(l,c=a?new Map:aw(e)),u=c;return c};rm();const xu={http:RA,xhr:tw,fetch:{get:rm}};G.forEach(xu,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const Hd=t=>`- ${t}`,cw=t=>G.isFunction(t)||t===null||t===!1;function uw(t,e){t=G.isArray(t)?t:[t];const{length:n}=t;let i,s;const r={};for(let o=0;o<n;o++){i=t[o];let a;if(s=i,!cw(i)&&(s=xu[(a=String(i)).toLowerCase()],s===void 0))throw new Ne(`Unknown adapter '${a}'`);if(s&&(G.isFunction(s)||(s=s.get(e))))break;r[a||"#"+o]=s}if(!s){const o=Object.entries(r).map(([l,c])=>`adapter ${l} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=n?o.length>1?`since :
`+o.map(Hd).join(`
`):" "+Hd(o[0]):"as no adapter specified";throw new Ne("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return s}const om={getAdapter:uw,adapters:xu};function yl(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Vr(null,t)}function Vd(t){return yl(t),t.headers=cn.from(t.headers),t.data=bl.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),om.getAdapter(t.adapter||Hr.adapter,t)(t).then(function(i){yl(t),t.response=i;try{i.data=bl.call(t,t.transformResponse,i)}finally{delete t.response}return i.headers=cn.from(i.headers),i},function(i){if(!tm(i)&&(yl(t),i&&i.response)){t.response=i.response;try{i.response.data=bl.call(t,t.transformResponse,i.response)}finally{delete t.response}i.response.headers=cn.from(i.response.headers)}return Promise.reject(i)})}const Ta={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Ta[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const Gd={};Ta.transitional=function(e,n,i){function s(r,o){return"[Axios v"+_u+"] Transitional option '"+r+"'"+o+(i?". "+i:"")}return(r,o,a)=>{if(e===!1)throw new Ne(s(o," has been removed"+(n?" in "+n:"")),Ne.ERR_DEPRECATED);return n&&!Gd[o]&&(Gd[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(r,o,a):!0}};Ta.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function fw(t,e,n){if(typeof t!="object")throw new Ne("options must be an object",Ne.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let s=i.length;for(;s-- >0;){const r=i[s],o=Object.prototype.hasOwnProperty.call(e,r)?e[r]:void 0;if(o){const a=t[r],l=a===void 0||o(a,r,t);if(l!==!0)throw new Ne("option "+r+" must be "+l,Ne.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Ne("Unknown option "+r,Ne.ERR_BAD_OPTION)}}const Fo={assertOptions:fw,validators:Ta},En=Fo.validators;let ls=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Ud,response:new Ud}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const r=(()=>{if(!s.stack)return"";const o=s.stack.indexOf(`
`);return o===-1?"":s.stack.slice(o+1)})();try{if(!i.stack)i.stack=r;else if(r){const o=r.indexOf(`
`),a=o===-1?-1:r.indexOf(`
`,o+1),l=a===-1?"":r.slice(a+1);String(i.stack).endsWith(l)||(i.stack+=`
`+r)}}catch{}}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=fs(this.defaults,n);const{transitional:i,paramsSerializer:s,headers:r}=n;i!==void 0&&Fo.assertOptions(i,{silentJSONParsing:En.transitional(En.boolean),forcedJSONParsing:En.transitional(En.boolean),clarifyTimeoutError:En.transitional(En.boolean),legacyInterceptorReqResOrdering:En.transitional(En.boolean)},!1),s!=null&&(G.isFunction(s)?n.paramsSerializer={serialize:s}:Fo.assertOptions(s,{encode:En.function,serialize:En.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Fo.assertOptions(n,{baseUrl:En.spelling("baseURL"),withXsrfToken:En.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=r&&G.merge(r.common,r[n.method]);r&&G.forEach(["delete","get","head","post","put","patch","query","common"],g=>{delete r[g]}),n.headers=cn.concat(o,r);const a=[];let l=!0;this.interceptors.request.forEach(function(_){if(typeof _.runWhen=="function"&&_.runWhen(n)===!1)return;l=l&&_.synchronous;const m=n.transitional||mu;m&&m.legacyInterceptorReqResOrdering?a.unshift(_.fulfilled,_.rejected):a.push(_.fulfilled,_.rejected)});const c=[];this.interceptors.response.forEach(function(_){c.push(_.fulfilled,_.rejected)});let u,f=0,d;if(!l){const g=[Vd.bind(this),void 0];for(g.unshift(...a),g.push(...c),d=g.length,u=Promise.resolve(n);f<d;)u=u.then(g[f++],g[f++]);return u}d=a.length;let h=n;for(;f<d;){const g=a[f++],_=a[f++];try{h=g(h)}catch(m){_.call(this,m);break}}try{u=Vd.call(this,h)}catch(g){return Promise.reject(g)}for(f=0,d=c.length;f<d;)u=u.then(c[f++],c[f++]);return u}getUri(e){e=fs(this.defaults,e);const n=im(e.baseURL,e.url,e.allowAbsoluteUrls);return Qp(n,e.params,e.paramsSerializer)}};G.forEach(["delete","get","head","options"],function(e){ls.prototype[e]=function(n,i){return this.request(fs(i||{},{method:e,url:n,data:(i||{}).data}))}});G.forEach(["post","put","patch","query"],function(e){function n(i){return function(r,o,a){return this.request(fs(a||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:r,data:o}))}}ls.prototype[e]=n(),e!=="query"&&(ls.prototype[e+"Form"]=n(!0))});let dw=class am{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(r){n=r});const i=this;this.promise.then(s=>{if(!i._listeners)return;let r=i._listeners.length;for(;r-- >0;)i._listeners[r](s);i._listeners=null}),this.promise.then=s=>{let r;const o=new Promise(a=>{i.subscribe(a),r=a}).then(s);return o.cancel=function(){i.unsubscribe(r)},o},e(function(r,o,a){i.reason||(i.reason=new Vr(r,o,a),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new am(function(s){e=s}),cancel:e}}};function hw(t){return function(n){return t.apply(null,n)}}function pw(t){return G.isObject(t)&&t.isAxiosError===!0}const Pc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Pc).forEach(([t,e])=>{Pc[e]=t});function lm(t){const e=new ls(t),n=Hp(ls.prototype.request,e);return G.extend(n,ls.prototype,e,{allOwnKeys:!0}),G.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return lm(fs(t,s))},n}const bt=lm(Hr);bt.Axios=ls;bt.CanceledError=Vr;bt.CancelToken=dw;bt.isCancel=tm;bt.VERSION=_u;bt.toFormData=Ea;bt.AxiosError=Ne;bt.Cancel=bt.CanceledError;bt.all=function(e){return Promise.all(e)};bt.spread=hw;bt.isAxiosError=pw;bt.mergeConfig=fs;bt.AxiosHeaders=cn;bt.formToJSON=t=>em(G.isHTMLForm(t)?new FormData(t):t);bt.getAdapter=om.getAdapter;bt.HttpStatusCode=Pc;bt.default=bt;const{Axios:B1,AxiosError:k1,CanceledError:z1,isCancel:H1,CancelToken:V1,VERSION:G1,all:W1,Cancel:X1,isAxiosError:q1,spread:$1,toFormData:j1,AxiosHeaders:Y1,HttpStatusCode:K1,formToJSON:Z1,getAdapter:J1,mergeConfig:Q1,create:eR}=bt,vu="filament_ai_access_token",mw=3e4,gw=3e4,_w=window.filamentAI?.backendUrl??"",xw=window.filamentAI?.username||"",vw=window.filamentAI?.password||"";function Sw(){return sessionStorage.getItem(vu)}function bw(t){sessionStorage.setItem(vu,t)}function cm(){sessionStorage.removeItem(vu)}function yw(t){const e=t.split(".");if(e.length!==3)return null;try{const n=e[1].replace(/-/g,"+").replace(/_/g,"/"),i=atob(n);return JSON.parse(i)}catch{return null}}function Mw(t){if(!t)return!1;const e=yw(t);if(!e?.exp)return!1;const n=e.exp*1e3;return Date.now()<n-mw}async function Su(){const e=(await bt.post(`${_w}/login`,{username:xw,password:vw},{timeout:gw})).data.access_token;return bw(e),e}async function um(){const t=Sw();return t&&Mw(t)?t:Su()}const Ew=6e5,Tw=window.filamentAI?.backendUrl??"";function Aw(t){return bt.isAxiosError(t)&&t.response?.status===401}async function Wd(t,e,n){return bt.post(`${Tw}/upload-stl`,t,{timeout:Ew,headers:{"Content-Type":"multipart/form-data",Authorization:`Bearer ${e}`},onUploadProgress:i=>{if(!n||!i.total)return;const s=Math.round(i.loaded*100/i.total);n(s)}})}async function ww({file:t,useCase:e,printerType:n,printerKey:i,onUploadProgress:s}){const r=new FormData;r.append("file",t),r.append("use_case",e),r.append("printer_type",n),r.append("printer_key",i),r.append("electricity_cost",window.filamentAI?.electricityCost||"8"),r.append("labour_cost",window.filamentAI?.labourCost||"50"),r.append("profit_margin",window.filamentAI?.profitMargin||"20"),r.append("tax",window.filamentAI?.tax||"18");const o=await um();try{return(await Wd(r,o,s)).data}catch(a){if(!Aw(a))throw a;cm();const l=await Su();return(await Wd(r,l,s)).data}}function yr(t){if(bt.isAxiosError(t)){if(t.code==="ECONNABORTED")return"Request timed out. The analysis may take several minutes — try again.";if(t.response?.status===401)return"Authentication failed. Check the backend username and password in the WordPress settings, or log in again if your session expired.";if(t.response?.data?.detail)return t.response.data.detail;if(t.response?.data?.message)return t.response.data.message;if(t.message)return t.message}return"Could not reach the server. Is the backend running on port 8000?"}const bu=6e4,yu=window.filamentAI?.backendUrl??"";function Rw(t){return bt.isAxiosError(t)&&t.response?.status===401}function Mu(t){return{Authorization:`Bearer ${t}`}}function Cw(t){if(!t)return null;const e=t.match(/filename\*=UTF-8''([^;]+)/i);if(e?.[1])try{return decodeURIComponent(e[1])}catch{return e[1]}const n=t.match(/filename="([^"]+)"/i);if(n?.[1])return n[1];const i=t.match(/filename=([^;]+)/i);return i?.[1]?i[1].trim():null}function Pw(t,e){const n=URL.createObjectURL(t),i=document.createElement("a");i.href=n,i.download=e||"download",i.style.display="none",document.body.appendChild(i),i.click(),i.remove(),URL.revokeObjectURL(n)}async function Eu(t){const e=await um();try{return await t(e)}catch(n){if(!Rw(n))throw n;cm();const i=await Su();return t(i)}}async function Dw(t){return Eu(async e=>(await bt.post(`${yu}/orders`,t,{timeout:bu,headers:Mu(e)})).data)}async function Lw(){return Eu(async t=>(await bt.get(`${yu}/orders`,{timeout:bu,headers:Mu(t)})).data)}async function fm(t,e,n){return Eu(async i=>{const s=await bt.get(`${yu}/orders/${t}/download/${e}`,{timeout:bu,headers:Mu(i),responseType:"blob"}),r=Cw(s.headers["content-disposition"]);Pw(s.data,r||n)})}async function Iw(t,e){return fm(t,"stl",e)}async function Uw(t,e){return fm(t,"gcode",e)}const Nw={class:"space-y-6"},Fw={class:"card"},Ow={class:"flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"},Bw=["disabled"],kw={key:1,class:"mt-6 flex min-h-[240px] items-center justify-center text-sm text-slate-500 dark:text-slate-400"},zw={key:2,class:"mt-6 flex min-h-[240px] items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/50 px-6 text-center dark:border-slate-700 dark:bg-slate-900/30"},Hw={key:3,class:"mt-6 overflow-x-auto"},Vw={class:"min-w-full text-left text-sm"},Gw={class:"px-3 py-3 font-medium text-slate-800 dark:text-slate-100"},Ww={class:"px-3 py-3 text-slate-700 dark:text-slate-200"},Xw={class:"px-3 py-3 text-slate-700 dark:text-slate-200"},qw={class:"px-3 py-3 text-slate-700 dark:text-slate-200"},$w={class:"px-3 py-3"},jw=["disabled","onClick"],Yw={class:"px-3 py-3"},Kw=["disabled","onClick"],Zw={__name:"OrdersScreen",setup(t){const e=wt("loading"),n=wt([]),i=wt({type:"info",title:"",message:""}),s=wt({orderId:null,kind:null});function r(f,d,h){i.value={type:f,title:d,message:h}}async function o(){e.value="loading",i.value={type:"info",title:"",message:""};try{const f=await Lw();if(f.success!==!0){e.value="error",r("error","Could not load orders",f.message||"Something went wrong."),n.value=[];return}n.value=Array.isArray(f.orders)?f.orders:[],e.value="success"}catch(f){e.value="error",n.value=[],r("error","Request failed",yr(f))}}async function a(f){s.value={orderId:f.order_id,kind:"stl"};try{await Iw(f.order_id,f.stl_file_name)}catch(d){r("error","Download failed",yr(d))}finally{s.value={orderId:null,kind:null}}}async function l(f){s.value={orderId:f.order_id,kind:"gcode"};try{await Uw(f.order_id,f.gcode_file_name)}catch(d){r("error","Download failed",yr(d))}finally{s.value={orderId:null,kind:null}}}function c(f,d){return s.value.orderId===f&&s.value.kind===d}function u(f){return f==null||Number.isNaN(Number(f))?"—":`${Number(f)} g`}return Wc(o),(f,d)=>(Ue(),He("section",Nw,[j("div",Fw,[j("div",Ow,[d[0]||(d[0]=j("div",null,[j("h2",{class:"card-title"},"Orders"),j("p",{class:"mt-1 text-sm text-slate-500 dark:text-slate-400"}," Saved print orders from completed analyses. ")],-1)),j("button",{type:"button",class:"btn-secondary shrink-0",disabled:e.value==="loading",onClick:o}," Refresh ",8,Bw)]),i.value.message||i.value.title?(Ue(),jn(np,{key:0,class:"mt-4",type:i.value.type,title:i.value.title,message:i.value.message},null,8,["type","title","message"])):xt("",!0),e.value==="loading"?(Ue(),He("div",kw," Loading orders… ")):n.value.length===0?(Ue(),He("div",zw,[...d[1]||(d[1]=[j("div",null,[j("p",{class:"text-sm font-medium text-slate-600 dark:text-slate-300"}," No orders yet "),j("p",{class:"mt-2 text-sm text-slate-400"}," Place an order after analysis completes on the Analyzer screen. ")],-1)])])):(Ue(),He("div",Hw,[j("table",Vw,[d[2]||(d[2]=j("thead",null,[j("tr",{class:"border-b border-slate-200 dark:border-slate-700"},[j("th",{class:"px-3 py-3 font-semibold text-slate-600 dark:text-slate-300"}," STL File "),j("th",{class:"px-3 py-3 font-semibold text-slate-600 dark:text-slate-300"}," Material "),j("th",{class:"px-3 py-3 font-semibold text-slate-600 dark:text-slate-300"}," Material Required "),j("th",{class:"px-3 py-3 font-semibold text-slate-600 dark:text-slate-300"}," Print Time "),j("th",{class:"px-3 py-3 font-semibold text-slate-600 dark:text-slate-300"}," Download STL "),j("th",{class:"px-3 py-3 font-semibold text-slate-600 dark:text-slate-300"}," Download G-code ")])],-1)),j("tbody",null,[(Ue(!0),He(Vt,null,Ar(n.value,h=>(Ue(),He("tr",{key:h.order_id,class:"border-b border-slate-100 last:border-0 dark:border-slate-800"},[j("td",Gw,je(h.stl_file_name||"—"),1),j("td",Ww,je(h.material||"—"),1),j("td",Xw,je(u(h.material_required_grams)),1),j("td",qw,je(h.print_time||"—"),1),j("td",$w,[j("button",{type:"button",class:"btn-secondary text-xs",disabled:c(h.order_id,"stl"),onClick:g=>a(h)},je(c(h.order_id,"stl")?"Downloading…":"Download STL"),9,jw)]),j("td",Yw,[j("button",{type:"button",class:"btn-secondary text-xs",disabled:c(h.order_id,"gcode"),onClick:g=>l(h)},je(c(h.order_id,"gcode")?"Downloading…":"Download G-code"),9,Kw)])]))),128))])])]))])]))}},Xd=[{value:"Bambu Lab X1C",label:"Bambu Lab X1C"},{value:"Bambu Lab P1S",label:"Bambu Lab P1S"},{value:"Bambu Lab A1",label:"Bambu Lab A1"},{value:"open",label:"Open Source (PLA/PETG/TPU only)"}],qd=[{value:"x1c",label:"Bambu Lab X1C"},{value:"p1s",label:"Bambu Lab P1S"},{value:"a1",label:"Bambu Lab A1"}],yo=["Validating STL","Processing Geometry","Running AI Analysis","Generating Print Settings","Running Bambu Slicer","Calculating Cost"],Jw=["validating_stl","processing_geometry","running_ai_analysis","ai_orientation","ai_support","ai_rendering","ai_vision","ai_filament","generating_print_settings","ai_print_settings","running_bambu_slicer","calculating_cost"],Qw={validating_stl:"Validating STL",processing_geometry:"Processing Geometry",running_ai_analysis:"Running AI Analysis",ai_orientation:"AI: Orientation Analysis",ai_support:"AI: Support Analysis",ai_rendering:"AI: Rendering Views",ai_vision:"AI: Vision Analysis",ai_filament:"AI: Filament Recommendation",generating_print_settings:"Generating Print Settings",ai_print_settings:"AI: Print Settings LLM",running_bambu_slicer:"Running Bambu Slicer",calculating_cost:"Calculating Cost"},tt="—";function $d(t){if(t==null||Number.isNaN(Number(t)))return tt;const e=Number(t);return e<1?`${Math.round(e*1e3)} ms`:`${e.toFixed(2)} s`}function e1(t){if(!t||typeof t!="object")return{hasTimings:!1,stages:[],totalSeconds:null,totalDisplay:tt};const e=Jw.map(r=>{const o=t[r]!=null?Number(t[r]):null;return{key:r,label:Qw[r]??r,seconds:o,display:$d(o),isSlowest:!1}}).filter(r=>r.seconds!=null&&!Number.isNaN(r.seconds));if(e.length===0)return{hasTimings:!1,stages:[],totalSeconds:null,totalDisplay:tt};let n=e[0].key,i=e[0].seconds;for(const r of e)r.seconds>i&&(i=r.seconds,n=r.key);for(const r of e)r.isSlowest=r.key===n;const s=t.total_time!=null?Number(t.total_time):null;return{hasTimings:!0,stages:e,totalSeconds:s,totalDisplay:$d(s)}}function jd(t){if(!t)return tt;const{x:e=0,y:n=0,z:i=0}=t;return`X ${e}° · Y ${n}° · Z ${i}°`}function t1(t){if(!t)return tt;const{width:e,height:n,depth:i}=t,s=r=>{if(r==null)return"—";const o=Number(r);return Number.isNaN(o)?String(r):o.toFixed(1)};return`${s(e)} × ${s(n)} × ${s(i)} mm`}function Yd(t,e,n=tt){if(!t)return n;const i=t.match(e);return i?i[1].trim():n}function Kd(t){return!!(t&&String(t).length>0)}function n1(t,e=2){return t==null||Number.isNaN(Number(t))?null:Math.round(Number(t)*e*100)/100}function Zd(t){if(!t||t.success!==!0)return null;const e=t.processing_data??{},n=t.bambu_settings??{},i=t.filament_recommendation??{},s=i.use_case_resolution??{},r=t.print_settings?.settings??"",o=t.slicer_result??{},a=t.cost_analysis??{},l=t.slicing_artifacts??{},c=l.slicer_output??{},u=o.gcode_path??l.gcode_extraction?.gcode_path,f=c.output_3mf_path??c.output_path,d=s.show_ai_comparison===!0||s.show_ai_comparison==null&&s.aligned===!0,h=e.top_orientations?.[0],g=h?.rotation_angles??n.orientation??{x:0,y:0,z:0},_=h?.rotation_matrix??n.orientation?.rotation_matrix??null;return{filename:t.filename??tt,message:t.message??"",ai:{orientation:{x:Number(g.x??0),y:Number(g.y??0),z:Number(g.z??0),rotation_matrix:_},recommendedFilament:i.recommended_filament??n.filament_type??tt,recommendedOrientation:t.orientation_analysis?.analysis?.slice(0,120)||jd(n.orientation),orientationAngles:jd(n.orientation),supportRequired:n.supports!=null?n.supports?"Yes":"No":tt,supportDifficulty:e.support_difficulty??tt,layerHeight:n.layer_height!=null?`${n.layer_height} mm`:tt,wallCount:n.wall_count??tt,infillPercentage:n.infill_percentage!=null?`${n.infill_percentage}%`:tt,infillType:n.infill_type??tt,brimRequired:n.brim!=null?n.brim?"Yes":"No":tt,supportSettings:Yd(r,/Support Settings:\s*(.+)/i,n.supports?"Enabled (see AI settings)":tt),printQuality:Yd(r,/Print Quality:\s*(.+)/i,"Standard"),settingsFullText:r,filamentExplanation:i.recommendation??tt,userUseCase:s.user_use_case??tt,aiUseCase:d?s.ai_use_case??tt:tt,useCaseAligned:d?s.aligned===!0?"Yes":s.aligned===!1?"No":tt:tt,effectiveUseCase:s.final_use_case??tt,showAiComparison:d,hasUseCaseResolution:!!s.user_use_case},stats:{filamentWeight:o.weight_g!=null?`${o.weight_g} g`:tt,filamentLength:o.filament_used_m!=null?`${o.filament_used_m} m`:tt,printTime:o.print_time??tt,printTimeHours:o.print_time_hours!=null?`${o.print_time_hours} h`:tt,modelVolume:e.volume!=null?`${e.volume.toFixed(1)} mm³`:tt,dimensions:t1(e.dimensions),isWatertight:e.is_watertight!=null?e.is_watertight?"Yes":"No":tt,overhangVolume:e.overhang_volume_mm3!=null?`${e.overhang_volume_mm3.toFixed(1)} mm³`:tt,overhangVolumePercentage:e.overhang_volume_percentage!=null?`${e.overhang_volume_percentage}%`:tt,overhangThreshold:e.overhang_threshold_degrees!=null?`${e.overhang_threshold_degrees}°`:tt,hasStats:!!(o.print_time||o.weight_g)},cost:{materialCost:a.material_cost!=null?`₹${a.material_cost}`:tt,electricityCost:a.electricity_cost!=null?`₹${a.electricity_cost}`:tt,laborCost:a.labor_cost!=null?`₹${a.labor_cost}`:tt,machineCost:a.depreciation_cost!=null?`₹${a.depreciation_cost}`:tt,supportCost:a.support_cost!=null?`₹${a.support_cost}`:tt,totalCost:a.total_cost!=null?`₹${a.total_cost}`:tt,finalCost:a.total_cost!=null?`₹${n1(a.total_cost)}`:tt,rawTotal:a.total_cost},slicer:{gcodeGenerated:Kd(u),threeMfGenerated:Kd(f),slicingSuccess:o.success===!0,printerProfile:c.machine_profile_path??tt,filamentProfile:c.filament_profile_path??tt,processProfile:c.process_profile_path??i1(t),gcodePath:u??"",threeMfPath:f??""},validation:t.validation_data??{},renderImages:t.rendering_data?.images??null,timings:e1(t.timings),order:{stlFileName:t.filename??"",gcodeFilePath:u??"",material:i.recommended_filament??n.filament_type??"",materialRequiredGrams:o.weight_g!=null?Number(o.weight_g):null,printTime:o.print_time??"",canPlaceOrder:!!(t.filename&&u&&o.weight_g>0&&o.print_time)}}}function i1(t){return t.profile_result?.profile_path??"—"}function s1(t){if(!t)return{title:"Request failed",message:"No response from server.",stage:null};const e=t.stage??null,n=t.message??t.error??"Something went wrong.";return{title:e?r1(e):"Analysis failed",message:n,stage:e,errorCode:t.error_code??null}}function r1(t){return{bambu_slicing:"Slicing failed",gcode_extraction:"G-code extraction failed",gcode_parsing:"G-code parsing failed",slicer_result_parsing:"Print statistics missing",cost_calculation:"Cost calculation failed"}[t]??"Pipeline error"}const o1={success:!0,message:"STL uploaded, processed, and rendered successfully",filename:"sample_gear.stl",validation_data:{vertices:12480,faces:24956},processing_data:{success:!0,volume:45230.5,dimensions:{width:62.4,height:28.1,depth:18.7},bounding_box:[[0,0,0],[62.4,28.1,18.7]],vertices_count:12480,faces_count:24956,is_watertight:!0,total_volume_mm3:45230.5,overhang_volume_mm3:6422.7,overhang_volume_percentage:14.2,overhang_threshold_degrees:45,support_difficulty:"MEDIUM",top_orientations:[{rotation_angles:{x:0,y:0,z:0},surface_area:3200,score:.92,total_volume_mm3:45230.5,overhang_volume_mm3:6422.7,overhang_volume_percentage:14.2,overhang_threshold_degrees:45,support_difficulty:"MEDIUM"}]},rendering_data:{success:!0,images:{front:"renders/sample_front.png",side:"renders/sample_side.png",top:"renders/sample_top.png",isometric:"renders/sample_iso.png"}},orientation_analysis:{success:!0,analysis:"Lay flat with largest face on the build plate to minimize supports."},filament_recommendation:{success:!0,recommended_filament:"PLA",recommendation:`Material: PLA
PLA offers good stiffness for functional prototypes.`,use_case_resolution:{user_use_case:"functional gear prototype",ai_use_case:"mechanical gear-like functional part",aligned:!0,final_use_case:"mechanical gear-like functional part",selected_by:"ai",show_ai_comparison:!0}},print_settings:{success:!0,settings:`Wall Count: 3
Layer Height: 0.2
Infill Type: Gyroid
Infill Percentage: 20
Supports: Yes
Brim: Yes
Support Settings: Tree supports, 45° overhang threshold
Print Quality: Standard functional quality`},bambu_settings:{orientation:{x:0,y:0,z:0},filament_type:"PLA",wall_count:3,layer_height:.2,infill_type:"Gyroid",infill_percentage:20,supports:!0,brim:!0},slicer_result:{success:!0,print_time:"2h 15m 0s",print_time_hours:2.25,weight_g:42.5,filament_used_m:14.2,filament_used_mm:14200,gcode_path:"generated_gcode/sample/file.gcode"},cost_analysis:{success:!0,filament_type:"PLA",weight_g:42.5,print_time_hours:2.25,material_cost:61.63,support_cost:7.7,electricity_cost:2.7,labor_cost:112.5,depreciation_cost:42.98,total_cost:227.51},slicing_artifacts:{slicer_output:{success:!0,output_3mf_path:"generated_profiles/sample_abc123.3mf",output_path:"generated_profiles/sample_abc123.3mf",machine_profile_path:"profiles/machine_x1c.json",filament_profile_path:"profiles/filament_pla.json",process_profile_path:"generated_profiles/ai_generated_profile.json"},gcode_extraction:{success:!0,gcode_path:"generated_gcode/sample/file.gcode"},gcode_stats:{success:!0}},profile_result:{success:!0,profile_path:"generated_profiles/ai_generated_profile.json",profile_data:{name:"ai_generated_profile"}},timings:{validating_stl:.25,processing_geometry:1.12,running_ai_analysis:3.45,generating_print_settings:.82,running_bambu_slicer:12.3,calculating_cost:.05,total_time:17.99}},a1={class:"min-h-screen"},l1={class:"mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8"},c1={key:1,class:"mt-8 grid gap-8 lg:grid-cols-3"},u1={class:"space-y-6 lg:col-span-1"},f1={class:"card space-y-4"},d1={class:"block"},h1=["disabled"],p1={class:"block"},m1=["disabled"],g1=["value"],_1={class:"block"},x1=["disabled"],v1=["value"],S1=["disabled"],b1=["disabled"],y1=["disabled"],M1={class:"space-y-6 lg:col-span-2"},E1={key:1,class:"alert-success px-4 py-3 text-sm"},T1={key:2,class:"card overflow-hidden p-0"},A1={class:"section-label px-6 pt-6 pb-4"},w1={class:"w-full min-h-[380px] h-[min(480px,55vh)] sm:aspect-video sm:min-h-[400px] sm:h-auto"},R1={key:4,class:"animate-[fadeIn_0.4s_ease-out] space-y-6"},C1={class:"alert-success p-6"},P1={class:"font-semibold"},D1={class:"results-card-columns"},L1={key:5,class:"card flex min-h-[320px] items-center justify-center border-dashed bg-white/50 text-center dark:bg-slate-900/50"},I1={__name:"App",setup(t){const e=wt("analyzer"),n=wt("idle"),i=wt(!1),s=wt(null),r=wt(null),o=wt(0),a=wt(yo[0]),l=wt(null),c=wt({type:"info",title:"",message:""}),u=wt(!1),f=wt(!1),d=wt(!1),h=wt(!1),g=la({useCase:"",printerType:Xd[0].value,printerKey:qd[0].value});let _=null;as(i,k=>{document.documentElement.classList.toggle("dark",k)});function m(){i.value=!i.value}function p(k,P,N){c.value={type:k,title:P,message:N}}function S(){c.value={type:"info",title:"",message:""}}async function E(k){if(r.value=null,k)try{r.value=await k.arrayBuffer()}catch{r.value=null}s.value=k,S()}function M(k){p("error","Invalid file",k)}function D(){let k=0;a.value=yo[0],_=setInterval(()=>{k=Math.min(k+1,yo.length-1),a.value=yo[k]},4e3)}function T(){_&&(clearInterval(_),_=null)}fa(T);function L(){return s.value&&g.useCase.trim().length>0&&g.printerType&&g.printerKey}async function v(){if(!L()){p("error","Missing input","Please select an STL file, describe your use case, and choose printer options.");return}S(),n.value="loading",o.value=0,l.value=null,d.value=!1,h.value=!1,D();try{const k=await ww({file:s.value,useCase:g.useCase.trim(),printerType:g.printerType,printerKey:g.printerKey,onUploadProgress:P=>{o.value=P}});if(T(),k.success!==!0){n.value="error";const P=s1(k);p("error",P.title,P.message);return}l.value=Zd(k),n.value="success",p("success","Analysis complete",k.message||"Your print report is ready below.")}catch(k){T(),n.value="error",p("error","Request failed",yr(k))}}function R(){s.value=null,r.value=null,l.value=null,n.value="idle",o.value=0,d.value=!1,h.value=!1,S()}function B(k){e.value=k}async function C(){const k=l.value?.order;if(!k?.canPlaceOrder||h.value){p("error","Cannot place order",h.value?"Demo data cannot be saved as an order. Run a real analysis first.":"Missing order details from the analysis result.");return}f.value=!0;try{const P=await Dw({stl_file_name:k.stlFileName,gcode_file_path:k.gcodeFilePath,material:k.material,material_required_grams:k.materialRequiredGrams,print_time:k.printTime});if(P.success!==!0){p("error","Order failed",P.message||"Could not save the order.");return}d.value=!0,p("success","Order placed",P.message||"Your order was saved successfully.")}catch(P){p("error","Request failed",yr(P))}finally{f.value=!1}}function V(){T(),l.value=Zd(o1),n.value="success",d.value=!1,h.value=!0,p("info","Demo mode","Showing sample data from dummyResponse.js")}function W(){u.value=!0,setTimeout(()=>{u.value=!1},2e3)}return(k,P)=>(Ue(),He("div",a1,[j("div",l1,[ot(e0,{"dark-mode":i.value,"active-screen":e.value,onToggleDark:m,onNavigate:B},null,8,["dark-mode","active-screen"]),e.value==="orders"?(Ue(),jn(Zw,{key:0,class:"mt-8"})):(Ue(),He("div",c1,[j("section",u1,[ot(l0,{disabled:n.value==="loading","file-name":s.value?.name??"",onFileSelected:E,onInvalidFile:M},null,8,["disabled","file-name"]),j("div",f1,[P[7]||(P[7]=j("h2",{class:"section-label"}," Print options ",-1)),j("label",d1,[P[3]||(P[3]=j("span",{class:"form-label"},"Use case",-1)),Ia(j("input",{"onUpdate:modelValue":P[0]||(P[0]=N=>g.useCase=N),type:"text",placeholder:"e.g. outdoor phone mount, prototype bracket",class:"form-control",disabled:n.value==="loading"},null,8,h1),[[k_,g.useCase]]),P[4]||(P[4]=j("p",{class:"mt-1 text-xs text-slate-500 dark:text-slate-400"}," Describe what you are printing. After analysis, we compare this with the AI suggestion for filament choice. ",-1))]),j("label",p1,[P[5]||(P[5]=j("span",{class:"form-label"},"Printer type",-1)),Ia(j("select",{"onUpdate:modelValue":P[1]||(P[1]=N=>g.printerType=N),class:"form-control",disabled:n.value==="loading"},[(Ue(!0),He(Vt,null,Ar(Rl(Xd),N=>(Ue(),He("option",{key:N.value,value:N.value},je(N.label),9,g1))),128))],8,m1),[[gf,g.printerType]])]),j("label",_1,[P[6]||(P[6]=j("span",{class:"form-label"},"Printer key (cost)",-1)),Ia(j("select",{"onUpdate:modelValue":P[2]||(P[2]=N=>g.printerKey=N),class:"form-control",disabled:n.value==="loading"},[(Ue(!0),He(Vt,null,Ar(Rl(qd),N=>(Ue(),He("option",{key:N.value,value:N.value},je(N.label),9,v1))),128))],8,x1),[[gf,g.printerKey]])]),j("button",{type:"button",class:"btn-primary w-full",disabled:n.value==="loading"||!L(),onClick:v},je(n.value==="loading"?"Analyzing…":"Analyze & estimate cost"),9,S1),j("button",{type:"button",class:"btn-secondary w-full",disabled:n.value==="loading",onClick:V}," Preview demo dashboard ",8,b1),n.value!=="idle"?(Ue(),He("button",{key:0,type:"button",class:"btn-ghost w-full",disabled:n.value==="loading",onClick:R}," Start over ",8,y1)):xt("",!0)]),n.value==="success"&&l.value?(Ue(),jn(xT,{key:0,data:l.value.slicer,"can-place-order":l.value.order?.canPlaceOrder&&!h.value,"placing-order":f.value,"order-placed":d.value,onPlaceOrder:C},null,8,["data","can-place-order","placing-order","order-placed"])):xt("",!0)]),j("section",M1,[c.value.message||c.value.title?(Ue(),jn(np,{key:0,type:c.value.type,title:c.value.title,message:c.value.message},null,8,["type","title","message"])):xt("",!0),u.value?(Ue(),He("p",E1," AI settings copied to clipboard. ")):xt("",!0),s.value?(Ue(),He("div",T1,[j("p",A1,je(n.value==="success"&&l.value?"3D preview — recommended orientation":"3D preview"),1),j("div",w1,[ot(EE,{class:"h-full w-full","dark-mode":i.value,file:s.value,"file-buffer":r.value,orientation:l.value?.ai?.orientation??{x:0,y:0,z:0}},null,8,["dark-mode","file","file-buffer","orientation"])])])):xt("",!0),n.value==="loading"?(Ue(),jn(p0,{key:3,step:a.value,"upload-percent":o.value},null,8,["step","upload-percent"])):xt("",!0),n.value==="success"&&l.value?(Ue(),He("div",R1,[j("div",C1,[j("p",P1," Results for "+je(l.value.filename),1)]),j("div",D1,[j("div",null,[ot(DE,{data:l.value.ai,onCopySettings:W},null,8,["data"])]),j("div",null,[ot(NE,{data:l.value.stats},null,8,["data"]),ot(kE,{data:l.value.cost},null,8,["data"])])]),ot(TT,{data:l.value.timings},null,8,["data"])])):n.value==="idle"&&!s.value?(Ue(),He("div",L1,[...P[8]||(P[8]=[j("div",null,[j("p",{class:"text-lg font-medium text-slate-600 dark:text-slate-400"}," Upload an STL to begin "),j("p",{class:"mt-2 text-sm text-slate-400"}," Your AI analysis, print stats, and cost breakdown will appear here. ")],-1)])])):xt("",!0)])]))])]))}},U1=zp(I1,[["__scopeId","data-v-975c023f"]]);W_(U1).mount("#app");
