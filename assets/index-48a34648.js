(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const L={};function ae(e){L.context=e}const Ct=(e,t)=>e===t,K=Symbol("solid-proxy"),Oe=Symbol("solid-track"),ge={equals:Ct};let kt=ct;const G=1,ye=2,et={owned:null,cleanups:null,context:null,owner:null},Ce={};var _=null;let J=null,p=null,T=null,Q=null,je=0;function re(e,t){const n=p,r=_,i=e.length===0,s=i?et:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},o=i?e:()=>e(()=>B(()=>$e(s)));_=s,p=null;try{return W(o,!0)}finally{p=n,_=r}}function N(e,t){t=t?Object.assign({},ge,t):ge;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=i=>(typeof i=="function"&&(i=i(n.value)),ot(n,i));return[st.bind(n),r]}function Me(e,t,n){const r=qe(e,t,!0,G);ce(r)}function j(e,t,n){const r=qe(e,t,!1,G);ce(r)}function P(e,t,n){n=n?Object.assign({},ge,n):ge;const r=qe(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,ce(r),st.bind(r)}function me(e,t,n){let r,i,s;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,i=e,s=t||{}):(r=e,i=t,s=n||{});let o=null,l=Ce,a=null,u=!1,c="initialValue"in s,y=typeof r=="function"&&P(r);const d=new Set,[m,w]=(s.storage||N)(s.initialValue),[b,k]=N(void 0),[E,A]=N(void 0,{equals:!1}),[$,v]=N(c?"ready":"unresolved");if(L.context){a=`${L.context.id}${L.context.count++}`;let f;s.ssrLoadFrom==="initial"?l=s.initialValue:L.load&&(f=L.load(a))&&(l=f[0])}function S(f,g,h,O){return o===f&&(o=null,c=!0,(f===l||g===l)&&s.onHydrated&&queueMicrotask(()=>s.onHydrated(O,{value:g})),l=Ce,D(g,h)),g}function D(f,g){W(()=>{g===void 0&&w(()=>f),v(g!==void 0?"errored":"ready"),k(g);for(const h of d.keys())h.decrement();d.clear()},!1)}function q(){const f=Nt,g=m(),h=b();if(h!==void 0&&!o)throw h;return p&&!p.user&&f&&Me(()=>{E(),o&&(f.resolved||d.has(f)||(f.increment(),d.add(f)))}),g}function U(f=!0){if(f!==!1&&u)return;u=!1;const g=y?y():r;if(g==null||g===!1){S(o,B(m));return}const h=l!==Ce?l:B(()=>i(g,{value:m(),refetching:f}));return typeof h!="object"||!(h&&"then"in h)?(S(o,h,void 0,g),h):(o=h,u=!0,queueMicrotask(()=>u=!1),W(()=>{v(c?"refreshing":"pending"),A()},!1),h.then(O=>S(h,O,void 0,g),O=>S(h,void 0,ut(O),g)))}return Object.defineProperties(q,{state:{get:()=>$()},error:{get:()=>b()},loading:{get(){const f=$();return f==="pending"||f==="refreshing"}},latest:{get(){if(!c)return q();const f=b();if(f&&!o)throw f;return m()}}}),y?Me(()=>U(!1)):U(!1),[q,{refetch:U,mutate:w}]}function Et(e){return W(e,!1)}function B(e){if(p===null)return e();const t=p;p=null;try{return e()}finally{p=t}}function tt(e,t,n){const r=Array.isArray(e);let i,s=n&&n.defer;return o=>{let l;if(r){l=Array(e.length);for(let u=0;u<e.length;u++)l[u]=e[u]()}else l=e();if(s){s=!1;return}const a=B(()=>t(l,i,o));return i=l,a}}function De(e){return _===null||(_.cleanups===null?_.cleanups=[e]:_.cleanups.push(e)),e}function nt(){return p}function Ot(){return _}function Lt(e,t){const n=_,r=p;_=e,p=null;try{return W(t,!0)}catch(i){Fe(i)}finally{_=n,p=r}}function Tt(e){const t=p,n=_;return Promise.resolve().then(()=>{p=t,_=n;let r;return W(e,!1),p=_=null,r?r.done:void 0})}function rt(e,t){const n=Symbol("context");return{id:n,Provider:jt(n),defaultValue:e}}function Be(e){let t;return(t=ft(_,e.id))!==void 0?t:e.defaultValue}function it(e){const t=P(e),n=P(()=>Le(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let Nt;function st(){const e=J;if(this.sources&&(this.state||e))if(this.state===G||e)ce(this);else{const t=T;T=null,W(()=>be(this),!1),T=t}if(p){const t=this.observers?this.observers.length:0;p.sources?(p.sources.push(this),p.sourceSlots.push(t)):(p.sources=[this],p.sourceSlots=[t]),this.observers?(this.observers.push(p),this.observerSlots.push(p.sources.length-1)):(this.observers=[p],this.observerSlots=[p.sources.length-1])}return this.value}function ot(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&W(()=>{for(let i=0;i<e.observers.length;i+=1){const s=e.observers[i],o=J&&J.running;o&&J.disposed.has(s),(o&&!s.tState||!o&&!s.state)&&(s.pure?T.push(s):Q.push(s),s.observers&&at(s)),o||(s.state=G)}if(T.length>1e6)throw T=[],new Error},!1)),t}function ce(e){if(!e.fn)return;$e(e);const t=_,n=p,r=je;p=_=e,Rt(e,e.value,r),p=n,_=t}function Rt(e,t,n){let r;try{r=e.fn(t)}catch(i){e.pure&&(e.state=G,e.owned&&e.owned.forEach($e),e.owned=null),Fe(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?ot(e,r):e.value=r,e.updatedAt=n)}function qe(e,t,n,r=G,i){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:_,context:null,pure:n};return _===null||_!==et&&(_.owned?_.owned.push(s):_.owned=[s]),s}function lt(e){const t=J;if(e.state===0||t)return;if(e.state===ye||t)return be(e);if(e.suspense&&B(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<je);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===G||t)ce(e);else if(e.state===ye||t){const i=T;T=null,W(()=>be(e,n[0]),!1),T=i}}function W(e,t){if(T)return e();let n=!1;t||(T=[]),Q?n=!0:Q=[],je++;try{const r=e();return It(n),r}catch(r){n||(Q=null),T=null,Fe(r)}}function It(e){if(T&&(ct(T),T=null),e)return;const t=Q;Q=null,t.length&&W(()=>kt(t),!1)}function ct(e){for(let t=0;t<e.length;t++)lt(e[t])}function be(e,t){const n=J;e.state=0;for(let r=0;r<e.sources.length;r+=1){const i=e.sources[r];i.sources&&(i.state===G||n?i!==t&&lt(i):(i.state===ye||n)&&be(i,t))}}function at(e){const t=J;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=ye,r.pure?T.push(r):Q.push(r),r.observers&&at(r))}}function $e(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const s=i.pop(),o=n.observerSlots.pop();r<i.length&&(s.sourceSlots[o]=r,i[r]=s,n.observerSlots[r]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)$e(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ut(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Fe(e){throw e=ut(e),e}function ft(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:ft(e.owner,t):void 0}function Le(e){if(typeof e=="function"&&!e.length)return Le(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Le(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function jt(e,t){return function(r){let i;return j(()=>i=B(()=>(_.context={[e]:r.value},it(()=>r.children))),void 0),i}}const Dt=Symbol("fallback");function Ue(e){for(let t=0;t<e.length;t++)e[t]()}function Bt(e,t,n={}){let r=[],i=[],s=[],o=0,l=t.length>1?[]:null;return De(()=>Ue(s)),()=>{let a=e()||[],u,c;return a[Oe],B(()=>{let d=a.length,m,w,b,k,E,A,$,v,S;if(d===0)o!==0&&(Ue(s),s=[],r=[],i=[],o=0,l&&(l=[])),n.fallback&&(r=[Dt],i[0]=re(D=>(s[0]=D,n.fallback())),o=1);else if(o===0){for(i=new Array(d),c=0;c<d;c++)r[c]=a[c],i[c]=re(y);o=d}else{for(b=new Array(d),k=new Array(d),l&&(E=new Array(d)),A=0,$=Math.min(o,d);A<$&&r[A]===a[A];A++);for($=o-1,v=d-1;$>=A&&v>=A&&r[$]===a[v];$--,v--)b[v]=i[$],k[v]=s[$],l&&(E[v]=l[$]);for(m=new Map,w=new Array(v+1),c=v;c>=A;c--)S=a[c],u=m.get(S),w[c]=u===void 0?-1:u,m.set(S,c);for(u=A;u<=$;u++)S=r[u],c=m.get(S),c!==void 0&&c!==-1?(b[c]=i[u],k[c]=s[u],l&&(E[c]=l[u]),c=w[c],m.set(S,c)):s[u]();for(c=A;c<d;c++)c in b?(i[c]=b[c],s[c]=k[c],l&&(l[c]=E[c],l[c](c))):i[c]=re(y);i=i.slice(0,o=d),r=a.slice(0)}return i});function y(d){if(s[c]=d,l){const[m,w]=N(c);return l[c]=w,t(a[c],m)}return t(a[c])}}}function x(e,t){return B(()=>e(t||{}))}function ue(){return!0}const Te={get(e,t,n){return t===K?n:e.get(t)},has(e,t){return t===K?!0:e.has(t)},set:ue,deleteProperty:ue,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ue,deleteProperty:ue}},ownKeys(e){return e.keys()}};function ke(e){return(e=typeof e=="function"?e():e)?e:{}}function He(...e){let t=!1;for(let r=0;r<e.length;r++){const i=e[r];t=t||!!i&&K in i,e[r]=typeof i=="function"?(t=!0,P(i)):i}if(t)return new Proxy({get(r){for(let i=e.length-1;i>=0;i--){const s=ke(e[i])[r];if(s!==void 0)return s}},has(r){for(let i=e.length-1;i>=0;i--)if(r in ke(e[i]))return!0;return!1},keys(){const r=[];for(let i=0;i<e.length;i++)r.push(...Object.keys(ke(e[i])));return[...new Set(r)]}},Te);const n={};for(let r=e.length-1;r>=0;r--)if(e[r]){const i=Object.getOwnPropertyDescriptors(e[r]);for(const s in i)s in n||Object.defineProperty(n,s,{enumerable:!0,get(){for(let o=e.length-1;o>=0;o--){const l=(e[o]||{})[s];if(l!==void 0)return l}}})}return n}function qt(e,...t){const n=new Set(t.flat());if(K in e){const i=t.map(s=>new Proxy({get(o){return s.includes(o)?e[o]:void 0},has(o){return s.includes(o)&&o in e},keys(){return s.filter(o=>o in e)}},Te));return i.push(new Proxy({get(s){return n.has(s)?void 0:e[s]},has(s){return n.has(s)?!1:s in e},keys(){return Object.keys(e).filter(s=>!n.has(s))}},Te)),i}const r=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(r).filter(i=>!n.has(i))),t.map(i=>{const s={};for(let o=0;o<i.length;o++){const l=i[o];l in e&&Object.defineProperty(s,l,r[l]?r[l]:{get(){return e[l]},set(){return!0},enumerable:!0})}return s})}function Ft(e){let t,n;const r=i=>{const s=L.context;if(s){const[l,a]=N();(n||(n=e())).then(u=>{ae(s),a(()=>u.default),ae()}),t=l}else if(!t){const[l]=me(()=>(n||(n=e())).then(a=>a.default));t=l}let o;return P(()=>(o=t())&&B(()=>{if(!s)return o(i);const l=L.context;ae(s);const a=o(i);return ae(l),a}))};return r.preload=()=>n||((n=e()).then(i=>t=()=>i.default),n),r}function We(e){const t="fallback"in e&&{fallback:()=>e.fallback};return P(Bt(()=>e.each,e.children,t||void 0))}function ie(e){let t=!1;const n=e.keyed,r=P(()=>e.when,void 0,{equals:(i,s)=>t?i===s:!i==!s});return P(()=>{const i=r();if(i){const s=e.children,o=typeof s=="function"&&s.length>0;return t=n||o,o?B(()=>s(i)):s}return e.fallback},void 0,void 0)}const Kt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Mt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Kt]),Ut=new Set(["innerHTML","textContent","innerText","children"]),Ht=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),Ve=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),Wt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Vt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Xt(e,t,n){let r=n.length,i=t.length,s=r,o=0,l=0,a=t[i-1].nextSibling,u=null;for(;o<i||l<s;){if(t[o]===n[l]){o++,l++;continue}for(;t[i-1]===n[s-1];)i--,s--;if(i===o){const c=s<r?l?n[l-1].nextSibling:n[s-l]:a;for(;l<s;)e.insertBefore(n[l++],c)}else if(s===l)for(;o<i;)(!u||!u.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[s-1]&&n[l]===t[i-1]){const c=t[--i].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--s],c),t[i]=n[s]}else{if(!u){u=new Map;let y=l;for(;y<s;)u.set(n[y],y++)}const c=u.get(t[o]);if(c!=null)if(l<c&&c<s){let y=o,d=1,m;for(;++y<i&&y<s&&!((m=u.get(t[y]))==null||m!==c+d);)d++;if(d>c-l){const w=t[o];for(;l<c;)e.insertBefore(n[l++],w)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const Xe="_$DX_DELEGATE";function zt(e,t,n,r={}){let i;return re(s=>{i=s,t===document?e():C(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{i(),t.textContent=""}}function M(e,t,n){const r=document.createElement("template");r.innerHTML=e;let i=r.content.firstChild;return n&&(i=i.firstChild),i}function ve(e,t=window.document){const n=t[Xe]||(t[Xe]=new Set);for(let r=0,i=e.length;r<i;r++){const s=e[r];n.has(s)||(n.add(s),t.addEventListener(s,nn))}}function Se(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Gt(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function I(e,t){t==null?e.removeAttribute("class"):e.className=t}function Jt(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=s=>i.call(e,n[1],s))}else e.addEventListener(t,n)}function Qt(e,t,n={}){const r=Object.keys(t||{}),i=Object.keys(n);let s,o;for(s=0,o=i.length;s<o;s++){const l=i[s];!l||l==="undefined"||t[l]||(ze(e,l,!1),delete n[l])}for(s=0,o=r.length;s<o;s++){const l=r[s],a=!!t[l];!l||l==="undefined"||n[l]===a||!a||(ze(e,l,!0),n[l]=a)}return n}function Yt(e,t,n){if(!t)return n?Se(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let i,s;for(s in n)t[s]==null&&r.removeProperty(s),delete n[s];for(s in t)i=t[s],i!==n[s]&&(r.setProperty(s,i),n[s]=i);return n}function Zt(e,t={},n,r){const i={};return r||j(()=>i.children=te(e,t.children,i.children)),j(()=>t.ref&&t.ref(e)),j(()=>en(e,t,n,!0,i,!0)),i}function C(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return te(e,t,r,n);j(i=>te(e,t(),i,n),r)}function en(e,t,n,r,i={},s=!1){t||(t={});for(const o in i)if(!(o in t)){if(o==="children")continue;i[o]=Ge(e,o,null,i[o],n,s)}for(const o in t){if(o==="children"){r||te(e,t.children);continue}const l=t[o];i[o]=Ge(e,o,l,i[o],n,s)}}function tn(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function ze(e,t,n){const r=t.trim().split(/\s+/);for(let i=0,s=r.length;i<s;i++)e.classList.toggle(r[i],n)}function Ge(e,t,n,r,i,s){let o,l,a;if(t==="style")return Yt(e,n,r);if(t==="classList")return Qt(e,n,r);if(n===r)return r;if(t==="ref")s||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);r&&e.removeEventListener(u,r),n&&e.addEventListener(u,n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);r&&e.removeEventListener(u,r,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),c=Wt.has(u);if(!c&&r){const y=Array.isArray(r)?r[0]:r;e.removeEventListener(u,y)}(c||n)&&(Jt(e,u,n,c),c&&ve([u]))}else if((a=Ut.has(t))||!i&&(Ve[t]||(l=Mt.has(t)))||(o=e.nodeName.includes("-")))t==="class"||t==="className"?I(e,n):o&&!l&&!a?e[tn(t)]=n:e[Ve[t]||t]=n;else{const u=i&&t.indexOf(":")>-1&&Vt[t.split(":")[0]];u?Gt(e,u,t,n):Se(e,Ht[t]||t,n)}return n}function nn(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),L.registry&&!L.done&&(L.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>{for(;r&&r.nodeType!==8&&r.nodeValue!=="pl-"+e;){let i=r.nextSibling;r.remove(),r=i}r&&r.remove()}));n;){const r=n[t];if(r&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?r.call(n,i,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function te(e,t,n,r,i){for(L.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,o=r!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(L.context)return n;if(s==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=Z(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean"){if(L.context)return n;n=Z(e,n,r)}else{if(s==="function")return j(()=>{let l=t();for(;typeof l=="function";)l=l();n=te(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[],a=n&&Array.isArray(n);if(Ne(l,t,n,i))return j(()=>n=te(e,l,n,r,!0)),()=>n;if(L.context){if(!l.length)return n;for(let u=0;u<l.length;u++)if(l[u].parentNode)return n=l}if(l.length===0){if(n=Z(e,n,r),o)return n}else a?n.length===0?Je(e,l,r):Xt(e,n,l):(n&&Z(e),Je(e,l));n=l}else if(t instanceof Node){if(L.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=Z(e,n,r,t);Z(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Ne(e,t,n,r){let i=!1;for(let s=0,o=t.length;s<o;s++){let l=t[s],a=n&&n[s];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=Ne(e,l,a)||i;else if(typeof l=="function")if(r){for(;typeof l=="function";)l=l();i=Ne(e,Array.isArray(l)?l:[l],Array.isArray(a)?a:[a])||i}else e.push(l),i=!0;else{const u=String(l);a&&a.nodeType===3&&a.data===u?e.push(a):e.push(document.createTextNode(u))}}return i}function Je(e,t,n=null){for(let r=0,i=t.length;r<i;r++)e.insertBefore(t[r],n)}function Z(e,t,n,r){if(n===void 0)return e.textContent="";const i=r||document.createTextNode("");if(t.length){let s=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(i!==l){const a=l.parentNode===e;!s&&!o?a?e.replaceChild(i,l):e.insertBefore(i,n):a&&l.remove()}else s=!0}}else e.insertBefore(i,n);return[i]}const rn=!1;function dt(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function sn([e,t],n,r){return[n?()=>n(e()):e,r?i=>t(r(i)):t]}function on(e){try{return document.querySelector(e)}catch{return null}}function ht(e,t){const n=on(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function gt(e,t,n,r){let i=!1;const s=l=>typeof l=="string"?{value:l}:l,o=sn(N(s(e()),{equals:(l,a)=>l.value===a.value}),void 0,l=>(!i&&t(l),l));return n&&De(n((l=e())=>{i=!0,o[1](s(l)),i=!1})),{signal:o,utils:r}}function ln(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:N({value:""})};return e}function cn(){return gt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),ht(window.location.hash.slice(1),n)},e=>dt(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function an(){return gt(()=>window.location.hash.slice(1),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"","#"+e):window.location.hash=e;const i=e.indexOf("#"),s=i>=0?e.slice(i+1):"";ht(s,n)},e=>dt(window,"hashchange",()=>e()),{go:e=>window.history.go(e),renderPath:e=>`#${e}`,parsePath:e=>{const t=e.replace(/^.*?#/,"");if(!t.startsWith("/")){const[,n="/"]=window.location.hash.split("#",2);return`${n}#${t}`}return t}})}function un(){let e=new Set;function t(i){return e.add(i),()=>e.delete(i)}let n=!1;function r(i,s){if(n)return!(n=!1);const o={to:i,options:s,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const l of e)l.listener({...o,from:l.location,retry:a=>{a&&(n=!0),l.navigate(i,s)}});return!o.defaultPrevented}return{subscribe:t,confirm:r}}const fn=/^(?:[a-z0-9]+:)?\/\//i,dn=/^\/+|\/+$/g;function Y(e,t=!1){const n=e.replace(dn,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function de(e,t,n){if(fn.test(t))return;const r=Y(e),i=n&&Y(n);let s="";return!i||t.startsWith("/")?s=r:i.toLowerCase().indexOf(r.toLowerCase())!==0?s=r+i:s=i,(s||"/")+Y(t,!s)}function hn(e,t){if(e==null)throw new Error(t);return e}function yt(e,t){return Y(e).replace(/\/*(\*.*)?$/g,"")+Y(t)}function gn(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function yn(e,t,n){const[r,i]=e.split("/*",2),s=r.split("/").filter(Boolean),o=s.length;return l=>{const a=l.split("/").filter(Boolean),u=a.length-o;if(u<0||u>0&&i===void 0&&!t)return null;const c={path:o?"":"/",params:{}},y=d=>n===void 0?void 0:n[d];for(let d=0;d<o;d++){const m=s[d],w=a[d],b=m[0]===":"?m.slice(1):m;if(m[0]===":"&&Ee(w,y(b)))c.params[b]=w;else if(!Ee(w,m))return null;c.path+=`/${w}`}if(i){const d=u?a.slice(-u).join("/"):"";if(Ee(d,y(i)))c.params[i]=d;else return null}return c}}function Ee(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function mn(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((i,s)=>i+(s.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function mt(e){const t=new Map,n=Ot();return new Proxy({},{get(r,i){return t.has(i)||Lt(n,()=>t.set(i,P(()=>e()[i]))),t.get(i)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function bt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const i=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)i.push(n+=t[1]),r=r.slice(t[0].length);return bt(r).reduce((s,o)=>[...s,...i.map(l=>l+o)],[])}const bn=100,wt=rt(),xe=rt(),Ae=()=>hn(Be(wt),"Make sure your app is wrapped in a <Router />");let se;const Pe=()=>se||Be(xe)||Ae().base,wn=e=>{const t=Pe();return P(()=>t.resolvePath(e()))},pn=e=>{const t=Ae();return P(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},_n=()=>Ae().location,$n=()=>Pe().params;function vn(e,t="",n){const{component:r,data:i,children:s}=e,o=!s||Array.isArray(s)&&!s.length,l={key:e,element:r?()=>x(r,{}):()=>{const{element:a}=e;return a===void 0&&n?x(n,{}):a},preload:e.component?r.preload:e.preload,data:i};return pt(e.path).reduce((a,u)=>{for(const c of bt(u)){const y=yt(t,c),d=o?y:y.split("/*",1)[0];a.push({...l,originalPath:c,pattern:d,matcher:yn(d,!o,e.matchFilters)})}return a},[])}function Sn(e,t=0){return{routes:e,score:mn(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let i=e.length-1;i>=0;i--){const s=e[i],o=s.matcher(n);if(!o)return null;r.unshift({...o,route:s})}return r}}}function pt(e){return Array.isArray(e)?e:[e]}function _t(e,t="",n,r=[],i=[]){const s=pt(e);for(let o=0,l=s.length;o<l;o++){const a=s[o];if(a&&typeof a=="object"&&a.hasOwnProperty("path")){const u=vn(a,t,n);for(const c of u){r.push(c);const y=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!y)_t(a.children,c.pattern,n,r,i);else{const d=Sn([...r],i.length);i.push(d)}r.pop()}}}return r.length?i:i.sort((o,l)=>l.score-o.score)}function xn(e,t){for(let n=0,r=e.length;n<r;n++){const i=e[n].matcher(t);if(i)return i}return[]}function An(e,t){const n=new URL("http://sar"),r=P(a=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),a}},n,{equals:(a,u)=>a.href===u.href}),i=P(()=>r().pathname),s=P(()=>r().search,!0),o=P(()=>r().hash),l=P(()=>"");return{get pathname(){return i()},get search(){return s()},get hash(){return o()},get state(){return t()},get key(){return l()},query:mt(tt(s,()=>gn(r())))}}function Pn(e,t="",n,r){const{signal:[i,s],utils:o={}}=ln(e),l=o.parsePath||(f=>f),a=o.renderPath||(f=>f),u=o.beforeLeave||un(),c=de("",t),y=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!i().value&&s({value:c,replace:!0,scroll:!1});const[d,m]=N(!1),w=async f=>{m(!0);try{await Tt(f)}finally{m(!1)}},[b,k]=N(i().value),[E,A]=N(i().state),$=An(b,E),v=[],S={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(f){return de(c,f)}};if(n)try{se=S,S.data=n({data:void 0,params:{},location:$,navigate:q(S)})}finally{se=void 0}function D(f,g,h){B(()=>{if(typeof g=="number"){g&&(o.go?u.confirm(g,h)&&o.go(g):console.warn("Router integration does not support relative routing"));return}const{replace:O,resolve:V,scroll:R,state:H}={replace:!1,resolve:!0,scroll:!0,...h},F=V?f.resolvePath(g):de("",g);if(F===void 0)throw new Error(`Path '${g}' is not a routable path`);if(v.length>=bn)throw new Error("Too many redirects");const z=b();if((F!==z||H!==E())&&!rn){if(u.confirm(F,h)){const Pt=v.push({value:z,replace:O,scroll:R,state:E()});w(()=>{k(F),A(H)}).then(()=>{v.length===Pt&&U({value:F,state:H})})}}})}function q(f){return f=f||Be(xe)||S,(g,h)=>D(f,g,h)}function U(f){const g=v[0];g&&((f.value!==g.value||f.state!==g.state)&&s({...f,replace:g.replace,scroll:g.scroll}),v.length=0)}j(()=>{const{value:f,state:g}=i();B(()=>{f!==b()&&w(()=>{k(f),A(g)})})});{let f=function(g){if(g.defaultPrevented||g.button!==0||g.metaKey||g.altKey||g.ctrlKey||g.shiftKey)return;const h=g.composedPath().find(z=>z instanceof Node&&z.nodeName.toUpperCase()==="A");if(!h||!h.hasAttribute("link"))return;const O=h.href;if(h.target||!O&&!h.hasAttribute("state"))return;const V=(h.getAttribute("rel")||"").split(/\s+/);if(h.hasAttribute("download")||V&&V.includes("external"))return;const R=new URL(O);if(R.origin!==window.location.origin||c&&R.pathname&&!R.pathname.toLowerCase().startsWith(c.toLowerCase()))return;const H=l(R.pathname+R.search+R.hash),F=h.getAttribute("state");g.preventDefault(),D(S,H,{resolve:!1,replace:h.hasAttribute("replace"),scroll:!h.hasAttribute("noscroll"),state:F&&JSON.parse(F)})};ve(["click"]),document.addEventListener("click",f),De(()=>document.removeEventListener("click",f))}return{base:S,out:y,location:$,isRouting:d,renderPath:a,parsePath:l,navigatorFactory:q,beforeLeave:u}}function Cn(e,t,n,r,i){const{base:s,location:o,navigatorFactory:l}=e,{pattern:a,element:u,preload:c,data:y}=r().route,d=P(()=>r().path);c&&c();const m={parent:t,pattern:a,get child(){return n()},path:d,params:i,data:t.data,outlet:u,resolvePath(w){return de(s.path(),w,d())}};if(y)try{se=m,m.data=y({data:t.data,params:i,location:o,navigate:l(m)})}finally{se=void 0}return m}const kn=M("<a link></a>"),En=e=>{const{source:t,url:n,base:r,data:i,out:s}=e,o=t||cn(),l=Pn(o,r,i);return x(wt.Provider,{value:l,get children(){return e.children}})},On=e=>{const t=Ae(),n=Pe(),r=it(()=>e.children),i=P(()=>_t(r(),yt(n.pattern,e.base||""),Tn)),s=P(()=>xn(i(),t.location.pathname)),o=mt(()=>{const c=s(),y={};for(let d=0;d<c.length;d++)Object.assign(y,c[d].params);return y});t.out&&t.out.matches.push(s().map(({route:c,path:y,params:d})=>({originalPath:c.originalPath,pattern:c.pattern,path:y,params:d})));const l=[];let a;const u=P(tt(s,(c,y,d)=>{let m=y&&c.length===y.length;const w=[];for(let b=0,k=c.length;b<k;b++){const E=y&&y[b],A=c[b];d&&E&&A.route.key===E.route.key?w[b]=d[b]:(m=!1,l[b]&&l[b](),re($=>{l[b]=$,w[b]=Cn(t,w[b-1]||n,()=>u()[b+1],()=>s()[b],o)}))}return l.splice(c.length).forEach(b=>b()),d&&m?d:(a=w[0],w)}));return x(ie,{get when(){return u()&&a},children:c=>x(xe.Provider,{value:c,get children(){return c.outlet()}})})},Ln=(e,t)=>()=>x(On,{base:t,children:e}),Tn=()=>{const e=Pe();return x(ie,{get when(){return e.child},children:t=>x(xe.Provider,{value:t,get children(){return t.outlet()}})})};function $t(e){e=He({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=qt(e,["href","state","class","activeClass","inactiveClass","end"]),n=wn(()=>e.href),r=pn(n),i=_n(),s=P(()=>{const o=n();if(o===void 0)return!1;const l=Y(o.split(/[?#]/,1)[0]).toLowerCase(),a=Y(i.pathname).toLowerCase();return e.end?l===a:a.startsWith(l)});return(()=>{const o=kn.cloneNode(!0);return Zt(o,He(t,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!s(),[e.activeClass]:s(),...t.classList}},get["aria-current"](){return s()?"page":void 0}}),!1,!1),o})()}const Nn="modulepreload",Rn=function(e){return"/pet-match-wh/"+e},Qe={},In=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Rn(s),s in Qe)return;Qe[s]=!0;const o=s.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const y=i[c];if(y.href===s&&(!o||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Nn,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,y)=>{u.addEventListener("load",c),u.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},Re=Symbol("store-raw"),oe=Symbol("store-node"),jn=Symbol("store-name");function vt(e,t){let n=e[K];if(!n&&(Object.defineProperty(e,K,{value:n=new Proxy(e,qn)}),!Array.isArray(e))){const r=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let s=0,o=r.length;s<o;s++){const l=r[s];i[l].get&&Object.defineProperty(e,l,{enumerable:i[l].enumerable,get:i[l].get.bind(n)})}}return n}function we(e){let t;return e!=null&&typeof e=="object"&&(e[K]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function le(e,t=new Set){let n,r,i,s;if(n=e!=null&&e[Re])return n;if(!we(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let o=0,l=e.length;o<l;o++)i=e[o],(r=le(i,t))!==i&&(e[o]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const o=Object.keys(e),l=Object.getOwnPropertyDescriptors(e);for(let a=0,u=o.length;a<u;a++)s=o[a],!l[s].get&&(i=e[s],(r=le(i,t))!==i&&(e[s]=r))}return e}function Ke(e){let t=e[oe];return t||Object.defineProperty(e,oe,{value:t={}}),t}function Ie(e,t,n){return e[t]||(e[t]=xt(n))}function Dn(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===K||t===oe||t===jn||(delete n.value,delete n.writable,n.get=()=>e[K][t]),n}function St(e){if(nt()){const t=Ke(e);(t._||(t._=xt()))()}}function Bn(e){return St(e),Reflect.ownKeys(e)}function xt(e){const[t,n]=N(e,{equals:!1,internal:!0});return t.$=n,t}const qn={get(e,t,n){if(t===Re)return e;if(t===K)return n;if(t===Oe)return St(e),n;const r=Ke(e),i=r.hasOwnProperty(t);let s=i?r[t]():e[t];if(t===oe||t==="__proto__")return s;if(!i){const o=Object.getOwnPropertyDescriptor(e,t);nt()&&(typeof s!="function"||e.hasOwnProperty(t))&&!(o&&o.get)&&(s=Ie(r,t,s)())}return we(s)?vt(s):s},has(e,t){return t===Re||t===K||t===Oe||t===oe||t==="__proto__"?!0:(this.get(e,t,e),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:Bn,getOwnPropertyDescriptor:Dn};function pe(e,t,n,r=!1){if(!r&&e[t]===n)return;const i=e[t],s=e.length;n===void 0?delete e[t]:e[t]=n;let o=Ke(e),l;(l=Ie(o,t,i))&&l.$(()=>n),Array.isArray(e)&&e.length!==s&&(l=Ie(o,"length",s))&&l.$(e.length),(l=o._)&&l.$()}function At(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const i=n[r];pe(e,i,t[i])}}function Fn(e,t){if(typeof t=="function"&&(t=t(e)),t=le(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const i=t[n];e[n]!==i&&pe(e,n,i)}pe(e,"length",r)}else At(e,t)}function ne(e,t,n=[]){let r,i=e;if(t.length>1){r=t.shift();const o=typeof r,l=Array.isArray(e);if(Array.isArray(r)){for(let a=0;a<r.length;a++)ne(e,[r[a]].concat(t),n);return}else if(l&&o==="function"){for(let a=0;a<e.length;a++)r(e[a],a)&&ne(e,[a].concat(t),n);return}else if(l&&o==="object"){const{from:a=0,to:u=e.length-1,by:c=1}=r;for(let y=a;y<=u;y+=c)ne(e,[y].concat(t),n);return}else if(t.length>1){ne(e[r],t,[r].concat(n));return}i=e[r],n=[r].concat(n)}let s=t[0];typeof s=="function"&&(s=s(i,n),s===i)||r===void 0&&s==null||(s=le(s),r===void 0||we(i)&&we(s)&&!Array.isArray(s)?At(i,s):pe(e,r,s))}function Ye(...[e,t]){const n=le(e||{}),r=Array.isArray(n),i=vt(n);function s(...o){Et(()=>{r&&o.length===1?Fn(n,o[0]):ne(n,o)})}return[i,s]}const Kn="_itemCard_1kryd_1",Mn="_fadeInAnimation_1kryd_1",Un="_itemTitle_1kryd_14",Hn="_itemDescription_1kryd_18",Wn="_itemImage_1kryd_22",fe={itemCard:Kn,fadeInAnimation:Mn,itemTitle:Un,itemDescription:Hn,itemImage:Wn},Vn=M("<div><img><div><h1> <!> </h1><p> <!> </p></div></div>");function Xn(e){return(()=>{const t=Vn.cloneNode(!0),n=t.firstChild,r=n.nextSibling,i=r.firstChild,s=i.firstChild,o=s.nextSibling;o.nextSibling;const l=i.nextSibling,a=l.firstChild,u=a.nextSibling;return u.nextSibling,C(i,()=>e.pet.name,o),C(l,()=>e.pet.description,u),j(c=>{const y=`${fe.itemCard}`,d=`${e.i/10}s`,m=e.pet.image,w=fe.itemImage,b=fe.itemTitle,k=fe.itemDescription;return y!==c._v$&&I(t,c._v$=y),d!==c._v$2&&t.style.setProperty("animation-delay",c._v$2=d),m!==c._v$3&&Se(n,"src",c._v$3=m),w!==c._v$4&&I(n,c._v$4=w),b!==c._v$5&&I(i,c._v$5=b),k!==c._v$6&&I(l,c._v$6=k),c},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),t})()}const zn=M("<button></button>");function he(e){const[t,n]=N(e.default);return(()=>{const r=zn.cloneNode(!0);return r.$$click=i=>{n(!t()),t()?e.onOn(i):e.onOff(i)},C(r,()=>e.text),j(()=>I(r,`transition-colors duration-150 p-4 rounded-xl ${t()?"bg-sky-300 dark:bg-sky-800":"bg-gray-100 dark:bg-dark-200"} w-full`)),r})()}ve(["click"]);const Gn=M('<div class="grid grid-cols-2 dark:bg-dark-600 dark:text-gray-100"><div class="m-6 flex flex-col gap-2"><div><small>MATCHING</small><div class="grid grid-cols-2 gap-2"><button>Best</button><button>Perfect</button></div></div><div><small>WHISKERED FRIENDS</small><div class="grid grid-cols-2 gap-2"></div></div><div><small>TRAITS</small><input class="w-full p-4 border-1 border-gray-400 dark:border-gray-700 placeholder-gray-400 focus:border-gray-800 dark:focus:border-gray-400 rounded-xl bg-gray-100 dark:bg-dark-200" type="text" placeholder="Search for traits"><div class="grid grid-cols-4 my-2"></div></div></div><div class="m-6"><small>TOP RESULTS</small></div></div>'),Jn=M('<div class="m-1"></div>'),Qn=M('<p class="text-gray-500 text-center mt-1/4">Nothing to show; select traits</p>');function Yn(e,t){let n=0;for(let r of e)t.includes(r)&&n++;return n}function Zn(e,t,n,r){let i=[];for(let s of t)i.push({breed:s,count:Yn(e,s.temperaments)});return i.filter(s=>n.includes(s.breed.type)).sort((s,o)=>o.count-s.count).map(s=>s.breed).slice(0,r)}function er(e,t,n,r){return t.filter(i=>n.includes(i.type)).filter(i=>{for(let s of e)if(!i.temperaments.includes(s))return!1;return!0}).slice(0,r)}function Ze(e){switch(e){case X.BEST:return Zn;case X.PERFECT:return er}}var X;(function(e){e[e.BEST=0]="BEST",e[e.PERFECT=1]="PERFECT"})(X||(X={}));function tr(){const[e]=me(async()=>(await fetch(_e+"temperaments.json")).json()),[t]=me(async()=>(await fetch(_e+"pets.json")).json()),[n,r]=N(""),[i,s]=Ye([]),[o,l]=Ye(["dog","cat"]),[a,u]=N(X.BEST);return(()=>{const c=Gn.cloneNode(!0),y=c.firstChild,d=y.firstChild,m=d.firstChild,w=m.nextSibling,b=w.firstChild,k=b.nextSibling,E=d.nextSibling,A=E.firstChild,$=A.nextSibling,v=E.nextSibling,S=v.firstChild,D=S.nextSibling,q=D.nextSibling,U=y.nextSibling;return U.firstChild,b.$$click=()=>u(X.BEST),k.$$click=()=>u(X.PERFECT),C($,x(he,{default:!0,text:"Cats",onOn:f=>{l([...o,"cat"])},onOff:f=>{let g=o.findIndex(h=>h==="cat");l(o.filter((h,O)=>O!==g))}}),null),C($,x(he,{default:!0,text:"Dogs",onOn:f=>{l([...o,"dog"])},onOff:f=>{let g=o.findIndex(h=>h==="dog");l(o.filter((h,O)=>O!==g))}}),null),D.$$keyup=f=>r(f.currentTarget.value.toLocaleLowerCase()),C(q,x(We,{get each(){return e()},children:(f,g)=>x(ie,{get when(){return n().length==0||f.toLowerCase().includes(n())},get children(){const h=Jn.cloneNode(!0);return C(h,x(he,{default:!1,text:f,onOn:O=>{s([...i,f])},onOff:O=>{let V=i.findIndex(R=>R===f);s(i.filter((R,H)=>H!==V))}})),h}})})),C(U,x(ie,{get when(){return P(()=>!t.loading&&i.length!=0&&o.length!=0)()&&Ze(a())(i,t(),o,10).length!=0},get fallback(){return Qn.cloneNode(!0)},get children(){return x(We,{get each(){return Ze(a())(i,t(),o,10)},children:(f,g)=>x($t,{get href(){return`/pet/${f.id}`},class:"no-underline text-black dark:text-gray-300",get children(){return x(Xn,{pet:f,get i(){return g()}})}})})}}),null),j(f=>{const g=`${a()===X.BEST?"bg-sky-300 dark:bg-sky-800":"bg-gray-100 dark:bg-dark-200"} p-4 rounded-xl transition-colors duration-150`,h=`${a()===X.PERFECT?"bg-sky-300 dark:bg-sky-800":"bg-gray-100 dark:bg-dark-200"} p-4 rounded-xl transition-colors duration-150`;return g!==f._v$&&I(b,f._v$=g),h!==f._v$2&&I(k,f._v$2=h),f},{_v$:void 0,_v$2:void 0}),c})()}ve(["click","keyup"]);const nr="_title_13ta5_1",rr="_subtitle_13ta5_8",ir="_infoSection_13ta5_13",sr="_infoImage_13ta5_22",ee={title:nr,subtitle:rr,infoSection:ir,infoImage:sr},or=M("<h1> <!> </h1>"),lr=M('<div class="flex mx-20"><div><h2> Information </h2><div><p> Weight: <!> - <!> lbs </p><p> Lifespan: <!> - <!> years </p><p> Temperaments: <!> </p></div><h2> Description </h2><div><p> <!> </p></div></div><img></div>'),cr=M('<div class="dark:text-white"></div>'),ar=M("<p>Hang on a sec...</p>");function ur(e,t){for(let n of e)if(n.id==t)return n}function fr(){const e=$n(),t=parseInt(e.id),[n]=me(async()=>{let r=await(await fetch(_e+"pets.json")).json();return ur(r,t)});return(()=>{const r=cr.cloneNode(!0);return C(r,x(ie,{get when(){return!n.loading},get fallback(){return ar.cloneNode(!0)},get children(){return[(()=>{const i=or.cloneNode(!0),s=i.firstChild,o=s.nextSibling;return o.nextSibling,C(i,()=>n().name,o),j(()=>I(i,ee.title)),i})(),(()=>{const i=lr.cloneNode(!0),s=i.firstChild,o=s.firstChild,l=o.nextSibling,a=l.firstChild,u=a.firstChild,c=u.nextSibling,y=c.nextSibling,d=y.nextSibling;d.nextSibling;const m=a.nextSibling,w=m.firstChild,b=w.nextSibling,k=b.nextSibling,E=k.nextSibling;E.nextSibling;const A=m.nextSibling,$=A.firstChild,v=$.nextSibling;v.nextSibling;const S=l.nextSibling,D=S.nextSibling,q=D.firstChild,U=q.firstChild,f=U.nextSibling;f.nextSibling;const g=s.nextSibling;return C(a,()=>n().weight_low_lbs,c),C(a,()=>n().weight_high_lbs,d),C(m,()=>n().life_span_low,b),C(m,()=>n().life_span_high,E),C(A,()=>n().temperaments.join(", "),v),C(q,()=>n().description,f),j(h=>{const O=ee.subtitle,V=ee.infoSection,R=ee.subtitle,H=ee.infoSection,F=ee.infoImage,z=n().image;return O!==h._v$&&I(o,h._v$=O),V!==h._v$2&&I(l,h._v$2=V),R!==h._v$3&&I(S,h._v$3=R),H!==h._v$4&&I(D,h._v$4=H),F!==h._v$5&&I(g,h._v$5=F),z!==h._v$6&&Se(g,"src",h._v$6=z),h},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),i})()]}})),r})()}const dr=[{path:"/",component:tr},{path:"/pet/:id",component:fr},{path:"**",component:Ft(()=>In(()=>import("./404-37bbb9f6.js"),[]))}],hr=M('<div><nav class="p-4 bg-gray-100 dark:bg-dark-800"><div class="float-right"></div></nav><main class="h-full"></main></div>'),gr=()=>{const e=Ln(dr);return(()=>{const t=hr.cloneNode(!0),n=t.firstChild,r=n.firstChild,i=n.nextSibling;return C(n,x($t,{href:"/",class:"text-5xl font-bold p-4 text-black dark:text-white no-underline fill-white",style:"font-family: 'Righteous', 'Inter', sans-serif;",children:"PETFINDER"}),r),C(r,x(he,{get default(){return localStorage.getItem("dark")==="true"},onOn:s=>{document.body.classList.add("dark"),localStorage.setItem("dark","true")},onOff:s=>{document.body.classList.remove("dark"),localStorage.setItem("dark","false")},text:"Dark mode"})),i.style.setProperty("font-family","'Inter', sans-serif"),C(i,x(e,{})),t})()},_e=location.href.includes("github")?"/pet-match-wh/":"/",yr=document.getElementById("root");localStorage.getItem("dark")==="true"&&document.body.classList.add("dark");zt(()=>x(En,{base:_e,get source(){return an()},get children(){return x(gr,{})}}),yr);export{M as t};