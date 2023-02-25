(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const L={};function ae(e){L.context=e}const St=(e,t)=>e===t,M=Symbol("solid-proxy"),Ee=Symbol("solid-track"),ge={equals:St};let xt=lt;const G=1,ye=2,Ze={owned:null,cleanups:null,context:null,owner:null},Pe={};var _=null;let J=null,p=null,T=null,Q=null,je=0;function re(e,t){const n=p,r=_,i=e.length===0,s=i?Ze:{owned:null,cleanups:null,context:null,owner:t===void 0?r:t},o=i?e:()=>e(()=>B(()=>_e(s)));_=s,p=null;try{return V(o,!0)}finally{p=n,_=r}}function N(e,t){t=t?Object.assign({},ge,t):ge;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},r=i=>(typeof i=="function"&&(i=i(n.value)),st(n,i));return[it.bind(n),r]}function Ke(e,t,n){const r=qe(e,t,!0,G);ce(r)}function j(e,t,n){const r=qe(e,t,!1,G);ce(r)}function P(e,t,n){n=n?Object.assign({},ge,n):ge;const r=qe(e,t,!0,0);return r.observers=null,r.observerSlots=null,r.comparator=n.equals||void 0,ce(r),it.bind(r)}function me(e,t,n){let r,i,s;arguments.length===2&&typeof t=="object"||arguments.length===1?(r=!0,i=e,s=t||{}):(r=e,i=t,s=n||{});let o=null,l=Pe,a=null,u=!1,c="initialValue"in s,y=typeof r=="function"&&P(r);const d=new Set,[m,w]=(s.storage||N)(s.initialValue),[b,k]=N(void 0),[E,A]=N(void 0,{equals:!1}),[$,v]=N(c?"ready":"unresolved");if(L.context){a=`${L.context.id}${L.context.count++}`;let f;s.ssrLoadFrom==="initial"?l=s.initialValue:L.load&&(f=L.load(a))&&(l=f[0])}function S(f,g,h,O){return o===f&&(o=null,c=!0,(f===l||g===l)&&s.onHydrated&&queueMicrotask(()=>s.onHydrated(O,{value:g})),l=Pe,D(g,h)),g}function D(f,g){V(()=>{g===void 0&&w(()=>f),v(g!==void 0?"errored":"ready"),k(g);for(const h of d.keys())h.decrement();d.clear()},!1)}function q(){const f=Et,g=m(),h=b();if(h!==void 0&&!o)throw h;return p&&!p.user&&f&&Ke(()=>{E(),o&&(f.resolved||d.has(f)||(f.increment(),d.add(f)))}),g}function U(f=!0){if(f!==!1&&u)return;u=!1;const g=y?y():r;if(g==null||g===!1){S(o,B(m));return}const h=l!==Pe?l:B(()=>i(g,{value:m(),refetching:f}));return typeof h!="object"||!(h&&"then"in h)?(S(o,h,void 0,g),h):(o=h,u=!0,queueMicrotask(()=>u=!1),V(()=>{v(c?"refreshing":"pending"),A()},!1),h.then(O=>S(h,O,void 0,g),O=>S(h,void 0,at(O),g)))}return Object.defineProperties(q,{state:{get:()=>$()},error:{get:()=>b()},loading:{get(){const f=$();return f==="pending"||f==="refreshing"}},latest:{get(){if(!c)return q();const f=b();if(f&&!o)throw f;return m()}}}),y?Ke(()=>U(!1)):U(!1),[q,{refetch:U,mutate:w}]}function At(e){return V(e,!1)}function B(e){if(p===null)return e();const t=p;p=null;try{return e()}finally{p=t}}function et(e,t,n){const r=Array.isArray(e);let i,s=n&&n.defer;return o=>{let l;if(r){l=Array(e.length);for(let u=0;u<e.length;u++)l[u]=e[u]()}else l=e();if(s){s=!1;return}const a=B(()=>t(l,i,o));return i=l,a}}function De(e){return _===null||(_.cleanups===null?_.cleanups=[e]:_.cleanups.push(e)),e}function tt(){return p}function Pt(){return _}function Ct(e,t){const n=_,r=p;_=e,p=null;try{return V(t,!0)}catch(i){Fe(i)}finally{_=n,p=r}}function kt(e){const t=p,n=_;return Promise.resolve().then(()=>{p=t,_=n;let r;return V(e,!1),p=_=null,r?r.done:void 0})}function nt(e,t){const n=Symbol("context");return{id:n,Provider:Tt(n),defaultValue:e}}function Be(e){let t;return(t=ut(_,e.id))!==void 0?t:e.defaultValue}function rt(e){const t=P(e),n=P(()=>Oe(t()));return n.toArray=()=>{const r=n();return Array.isArray(r)?r:r!=null?[r]:[]},n}let Et;function it(){const e=J;if(this.sources&&(this.state||e))if(this.state===G||e)ce(this);else{const t=T;T=null,V(()=>be(this),!1),T=t}if(p){const t=this.observers?this.observers.length:0;p.sources?(p.sources.push(this),p.sourceSlots.push(t)):(p.sources=[this],p.sourceSlots=[t]),this.observers?(this.observers.push(p),this.observerSlots.push(p.sources.length-1)):(this.observers=[p],this.observerSlots=[p.sources.length-1])}return this.value}function st(e,t,n){let r=e.value;return(!e.comparator||!e.comparator(r,t))&&(e.value=t,e.observers&&e.observers.length&&V(()=>{for(let i=0;i<e.observers.length;i+=1){const s=e.observers[i],o=J&&J.running;o&&J.disposed.has(s),(o&&!s.tState||!o&&!s.state)&&(s.pure?T.push(s):Q.push(s),s.observers&&ct(s)),o||(s.state=G)}if(T.length>1e6)throw T=[],new Error},!1)),t}function ce(e){if(!e.fn)return;_e(e);const t=_,n=p,r=je;p=_=e,Ot(e,e.value,r),p=n,_=t}function Ot(e,t,n){let r;try{r=e.fn(t)}catch(i){e.pure&&(e.state=G,e.owned&&e.owned.forEach(_e),e.owned=null),Fe(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?st(e,r):e.value=r,e.updatedAt=n)}function qe(e,t,n,r=G,i){const s={fn:e,state:r,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:_,context:null,pure:n};return _===null||_!==Ze&&(_.owned?_.owned.push(s):_.owned=[s]),s}function ot(e){const t=J;if(e.state===0||t)return;if(e.state===ye||t)return be(e);if(e.suspense&&B(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<je);)(e.state||t)&&n.push(e);for(let r=n.length-1;r>=0;r--)if(e=n[r],e.state===G||t)ce(e);else if(e.state===ye||t){const i=T;T=null,V(()=>be(e,n[0]),!1),T=i}}function V(e,t){if(T)return e();let n=!1;t||(T=[]),Q?n=!0:Q=[],je++;try{const r=e();return Lt(n),r}catch(r){n||(Q=null),T=null,Fe(r)}}function Lt(e){if(T&&(lt(T),T=null),e)return;const t=Q;Q=null,t.length&&V(()=>xt(t),!1)}function lt(e){for(let t=0;t<e.length;t++)ot(e[t])}function be(e,t){const n=J;e.state=0;for(let r=0;r<e.sources.length;r+=1){const i=e.sources[r];i.sources&&(i.state===G||n?i!==t&&ot(i):(i.state===ye||n)&&be(i,t))}}function ct(e){const t=J;for(let n=0;n<e.observers.length;n+=1){const r=e.observers[n];(!r.state||t)&&(r.state=ye,r.pure?T.push(r):Q.push(r),r.observers&&ct(r))}}function _e(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),r=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const s=i.pop(),o=n.observerSlots.pop();r<i.length&&(s.sourceSlots[o]=r,i[r]=s,n.observerSlots[r]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)_e(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function at(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Fe(e){throw e=at(e),e}function ut(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:ut(e.owner,t):void 0}function Oe(e){if(typeof e=="function"&&!e.length)return Oe(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const r=Oe(e[n]);Array.isArray(r)?t.push.apply(t,r):t.push(r)}return t}return e}function Tt(e,t){return function(r){let i;return j(()=>i=B(()=>(_.context={[e]:r.value},rt(()=>r.children))),void 0),i}}const Nt=Symbol("fallback");function Ue(e){for(let t=0;t<e.length;t++)e[t]()}function Rt(e,t,n={}){let r=[],i=[],s=[],o=0,l=t.length>1?[]:null;return De(()=>Ue(s)),()=>{let a=e()||[],u,c;return a[Ee],B(()=>{let d=a.length,m,w,b,k,E,A,$,v,S;if(d===0)o!==0&&(Ue(s),s=[],r=[],i=[],o=0,l&&(l=[])),n.fallback&&(r=[Nt],i[0]=re(D=>(s[0]=D,n.fallback())),o=1);else if(o===0){for(i=new Array(d),c=0;c<d;c++)r[c]=a[c],i[c]=re(y);o=d}else{for(b=new Array(d),k=new Array(d),l&&(E=new Array(d)),A=0,$=Math.min(o,d);A<$&&r[A]===a[A];A++);for($=o-1,v=d-1;$>=A&&v>=A&&r[$]===a[v];$--,v--)b[v]=i[$],k[v]=s[$],l&&(E[v]=l[$]);for(m=new Map,w=new Array(v+1),c=v;c>=A;c--)S=a[c],u=m.get(S),w[c]=u===void 0?-1:u,m.set(S,c);for(u=A;u<=$;u++)S=r[u],c=m.get(S),c!==void 0&&c!==-1?(b[c]=i[u],k[c]=s[u],l&&(E[c]=l[u]),c=w[c],m.set(S,c)):s[u]();for(c=A;c<d;c++)c in b?(i[c]=b[c],s[c]=k[c],l&&(l[c]=E[c],l[c](c))):i[c]=re(y);i=i.slice(0,o=d),r=a.slice(0)}return i});function y(d){if(s[c]=d,l){const[m,w]=N(c);return l[c]=w,t(a[c],m)}return t(a[c])}}}function x(e,t){return B(()=>e(t||{}))}function ue(){return!0}const Le={get(e,t,n){return t===M?n:e.get(t)},has(e,t){return t===M?!0:e.has(t)},set:ue,deleteProperty:ue,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ue,deleteProperty:ue}},ownKeys(e){return e.keys()}};function Ce(e){return(e=typeof e=="function"?e():e)?e:{}}function He(...e){let t=!1;for(let r=0;r<e.length;r++){const i=e[r];t=t||!!i&&M in i,e[r]=typeof i=="function"?(t=!0,P(i)):i}if(t)return new Proxy({get(r){for(let i=e.length-1;i>=0;i--){const s=Ce(e[i])[r];if(s!==void 0)return s}},has(r){for(let i=e.length-1;i>=0;i--)if(r in Ce(e[i]))return!0;return!1},keys(){const r=[];for(let i=0;i<e.length;i++)r.push(...Object.keys(Ce(e[i])));return[...new Set(r)]}},Le);const n={};for(let r=e.length-1;r>=0;r--)if(e[r]){const i=Object.getOwnPropertyDescriptors(e[r]);for(const s in i)s in n||Object.defineProperty(n,s,{enumerable:!0,get(){for(let o=e.length-1;o>=0;o--){const l=(e[o]||{})[s];if(l!==void 0)return l}}})}return n}function It(e,...t){const n=new Set(t.flat());if(M in e){const i=t.map(s=>new Proxy({get(o){return s.includes(o)?e[o]:void 0},has(o){return s.includes(o)&&o in e},keys(){return s.filter(o=>o in e)}},Le));return i.push(new Proxy({get(s){return n.has(s)?void 0:e[s]},has(s){return n.has(s)?!1:s in e},keys(){return Object.keys(e).filter(s=>!n.has(s))}},Le)),i}const r=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(r).filter(i=>!n.has(i))),t.map(i=>{const s={};for(let o=0;o<i.length;o++){const l=i[o];l in e&&Object.defineProperty(s,l,r[l]?r[l]:{get(){return e[l]},set(){return!0},enumerable:!0})}return s})}function jt(e){let t,n;const r=i=>{const s=L.context;if(s){const[l,a]=N();(n||(n=e())).then(u=>{ae(s),a(()=>u.default),ae()}),t=l}else if(!t){const[l]=me(()=>(n||(n=e())).then(a=>a.default));t=l}let o;return P(()=>(o=t())&&B(()=>{if(!s)return o(i);const l=L.context;ae(s);const a=o(i);return ae(l),a}))};return r.preload=()=>n||((n=e()).then(i=>t=()=>i.default),n),r}function Ve(e){const t="fallback"in e&&{fallback:()=>e.fallback};return P(Rt(()=>e.each,e.children,t||void 0))}function ie(e){let t=!1;const n=e.keyed,r=P(()=>e.when,void 0,{equals:(i,s)=>t?i===s:!i==!s});return P(()=>{const i=r();if(i){const s=e.children,o=typeof s=="function"&&s.length>0;return t=n||o,o?B(()=>s(i)):s}return e.fallback},void 0,void 0)}const Dt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Bt=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Dt]),qt=new Set(["innerHTML","textContent","innerText","children"]),Ft=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),We=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),Mt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Kt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Ut(e,t,n){let r=n.length,i=t.length,s=r,o=0,l=0,a=t[i-1].nextSibling,u=null;for(;o<i||l<s;){if(t[o]===n[l]){o++,l++;continue}for(;t[i-1]===n[s-1];)i--,s--;if(i===o){const c=s<r?l?n[l-1].nextSibling:n[s-l]:a;for(;l<s;)e.insertBefore(n[l++],c)}else if(s===l)for(;o<i;)(!u||!u.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[s-1]&&n[l]===t[i-1]){const c=t[--i].nextSibling;e.insertBefore(n[l++],t[o++].nextSibling),e.insertBefore(n[--s],c),t[i]=n[s]}else{if(!u){u=new Map;let y=l;for(;y<s;)u.set(n[y],y++)}const c=u.get(t[o]);if(c!=null)if(l<c&&c<s){let y=o,d=1,m;for(;++y<i&&y<s&&!((m=u.get(t[y]))==null||m!==c+d);)d++;if(d>c-l){const w=t[o];for(;l<c;)e.insertBefore(n[l++],w)}else e.replaceChild(n[l++],t[o++])}else o++;else t[o++].remove()}}}const Xe="_$DX_DELEGATE";function Ht(e,t,n,r={}){let i;return re(s=>{i=s,t===document?e():C(t,e(),t.firstChild?null:void 0,n)},r.owner),()=>{i(),t.textContent=""}}function K(e,t,n){const r=document.createElement("template");r.innerHTML=e;let i=r.content.firstChild;return n&&(i=i.firstChild),i}function $e(e,t=window.document){const n=t[Xe]||(t[Xe]=new Set);for(let r=0,i=e.length;r<i;r++){const s=e[r];n.has(s)||(n.add(s),t.addEventListener(s,Yt))}}function ve(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function Vt(e,t,n,r){r==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,r)}function I(e,t){t==null?e.removeAttribute("class"):e.className=t}function Wt(e,t,n,r){if(r)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=s=>i.call(e,n[1],s))}else e.addEventListener(t,n)}function Xt(e,t,n={}){const r=Object.keys(t||{}),i=Object.keys(n);let s,o;for(s=0,o=i.length;s<o;s++){const l=i[s];!l||l==="undefined"||t[l]||(ze(e,l,!1),delete n[l])}for(s=0,o=r.length;s<o;s++){const l=r[s],a=!!t[l];!l||l==="undefined"||n[l]===a||!a||(ze(e,l,!0),n[l]=a)}return n}function zt(e,t,n){if(!t)return n?ve(e,"style"):t;const r=e.style;if(typeof t=="string")return r.cssText=t;typeof n=="string"&&(r.cssText=n=void 0),n||(n={}),t||(t={});let i,s;for(s in n)t[s]==null&&r.removeProperty(s),delete n[s];for(s in t)i=t[s],i!==n[s]&&(r.setProperty(s,i),n[s]=i);return n}function Gt(e,t={},n,r){const i={};return r||j(()=>i.children=te(e,t.children,i.children)),j(()=>t.ref&&t.ref(e)),j(()=>Jt(e,t,n,!0,i,!0)),i}function C(e,t,n,r){if(n!==void 0&&!r&&(r=[]),typeof t!="function")return te(e,t,r,n);j(i=>te(e,t(),i,n),r)}function Jt(e,t,n,r,i={},s=!1){t||(t={});for(const o in i)if(!(o in t)){if(o==="children")continue;i[o]=Ge(e,o,null,i[o],n,s)}for(const o in t){if(o==="children"){r||te(e,t.children);continue}const l=t[o];i[o]=Ge(e,o,l,i[o],n,s)}}function Qt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function ze(e,t,n){const r=t.trim().split(/\s+/);for(let i=0,s=r.length;i<s;i++)e.classList.toggle(r[i],n)}function Ge(e,t,n,r,i,s){let o,l,a;if(t==="style")return zt(e,n,r);if(t==="classList")return Xt(e,n,r);if(n===r)return r;if(t==="ref")s||n(e);else if(t.slice(0,3)==="on:"){const u=t.slice(3);r&&e.removeEventListener(u,r),n&&e.addEventListener(u,n)}else if(t.slice(0,10)==="oncapture:"){const u=t.slice(10);r&&e.removeEventListener(u,r,!0),n&&e.addEventListener(u,n,!0)}else if(t.slice(0,2)==="on"){const u=t.slice(2).toLowerCase(),c=Mt.has(u);if(!c&&r){const y=Array.isArray(r)?r[0]:r;e.removeEventListener(u,y)}(c||n)&&(Wt(e,u,n,c),c&&$e([u]))}else if((a=qt.has(t))||!i&&(We[t]||(l=Bt.has(t)))||(o=e.nodeName.includes("-")))t==="class"||t==="className"?I(e,n):o&&!l&&!a?e[Qt(t)]=n:e[We[t]||t]=n;else{const u=i&&t.indexOf(":")>-1&&Kt[t.split(":")[0]];u?Vt(e,u,t,n):ve(e,Ft[t]||t,n)}return n}function Yt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),L.registry&&!L.done&&(L.done=!0,document.querySelectorAll("[id^=pl-]").forEach(r=>{for(;r&&r.nodeType!==8&&r.nodeValue!=="pl-"+e;){let i=r.nextSibling;r.remove(),r=i}r&&r.remove()}));n;){const r=n[t];if(r&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?r.call(n,i,e):r.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function te(e,t,n,r,i){for(L.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const s=typeof t,o=r!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,s==="string"||s==="number"){if(L.context)return n;if(s==="number"&&(t=t.toString()),o){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=Z(e,n,r,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||s==="boolean"){if(L.context)return n;n=Z(e,n,r)}else{if(s==="function")return j(()=>{let l=t();for(;typeof l=="function";)l=l();n=te(e,l,n,r)}),()=>n;if(Array.isArray(t)){const l=[],a=n&&Array.isArray(n);if(Te(l,t,n,i))return j(()=>n=te(e,l,n,r,!0)),()=>n;if(L.context){if(!l.length)return n;for(let u=0;u<l.length;u++)if(l[u].parentNode)return n=l}if(l.length===0){if(n=Z(e,n,r),o)return n}else a?n.length===0?Je(e,l,r):Ut(e,n,l):(n&&Z(e),Je(e,l));n=l}else if(t instanceof Node){if(L.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=Z(e,n,r,t);Z(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Te(e,t,n,r){let i=!1;for(let s=0,o=t.length;s<o;s++){let l=t[s],a=n&&n[s];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=Te(e,l,a)||i;else if(typeof l=="function")if(r){for(;typeof l=="function";)l=l();i=Te(e,Array.isArray(l)?l:[l],Array.isArray(a)?a:[a])||i}else e.push(l),i=!0;else{const u=String(l);a&&a.nodeType===3&&a.data===u?e.push(a):e.push(document.createTextNode(u))}}return i}function Je(e,t,n=null){for(let r=0,i=t.length;r<i;r++)e.insertBefore(t[r],n)}function Z(e,t,n,r){if(n===void 0)return e.textContent="";const i=r||document.createTextNode("");if(t.length){let s=!1;for(let o=t.length-1;o>=0;o--){const l=t[o];if(i!==l){const a=l.parentNode===e;!s&&!o?a?e.replaceChild(i,l):e.insertBefore(i,n):a&&l.remove()}else s=!0}}else e.insertBefore(i,n);return[i]}const Zt=!1;function en(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function tn([e,t],n,r){return[n?()=>n(e()):e,r?i=>t(r(i)):t]}function nn(e){try{return document.querySelector(e)}catch{return null}}function rn(e,t){const n=nn(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function sn(e,t,n,r){let i=!1;const s=l=>typeof l=="string"?{value:l}:l,o=tn(N(s(e()),{equals:(l,a)=>l.value===a.value}),void 0,l=>(!i&&t(l),l));return n&&De(n((l=e())=>{i=!0,o[1](s(l)),i=!1})),{signal:o,utils:r}}function on(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:N({value:""})};return e}function ln(){return sn(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:r})=>{t?window.history.replaceState(r,"",e):window.history.pushState(r,"",e),rn(window.location.hash.slice(1),n)},e=>en(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function cn(){let e=new Set;function t(i){return e.add(i),()=>e.delete(i)}let n=!1;function r(i,s){if(n)return!(n=!1);const o={to:i,options:s,defaultPrevented:!1,preventDefault:()=>o.defaultPrevented=!0};for(const l of e)l.listener({...o,from:l.location,retry:a=>{a&&(n=!0),l.navigate(i,s)}});return!o.defaultPrevented}return{subscribe:t,confirm:r}}const an=/^(?:[a-z0-9]+:)?\/\//i,un=/^\/+|\/+$/g;function Y(e,t=!1){const n=e.replace(un,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function de(e,t,n){if(an.test(t))return;const r=Y(e),i=n&&Y(n);let s="";return!i||t.startsWith("/")?s=r:i.toLowerCase().indexOf(r.toLowerCase())!==0?s=r+i:s=i,(s||"/")+Y(t,!s)}function fn(e,t){if(e==null)throw new Error(t);return e}function ft(e,t){return Y(e).replace(/\/*(\*.*)?$/g,"")+Y(t)}function dn(e){const t={};return e.searchParams.forEach((n,r)=>{t[r]=n}),t}function hn(e,t,n){const[r,i]=e.split("/*",2),s=r.split("/").filter(Boolean),o=s.length;return l=>{const a=l.split("/").filter(Boolean),u=a.length-o;if(u<0||u>0&&i===void 0&&!t)return null;const c={path:o?"":"/",params:{}},y=d=>n===void 0?void 0:n[d];for(let d=0;d<o;d++){const m=s[d],w=a[d],b=m[0]===":"?m.slice(1):m;if(m[0]===":"&&ke(w,y(b)))c.params[b]=w;else if(!ke(w,m))return null;c.path+=`/${w}`}if(i){const d=u?a.slice(-u).join("/"):"";if(ke(d,y(i)))c.params[i]=d;else return null}return c}}function ke(e,t){const n=r=>r.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function gn(e){const[t,n]=e.pattern.split("/*",2),r=t.split("/").filter(Boolean);return r.reduce((i,s)=>i+(s.startsWith(":")?2:3),r.length-(n===void 0?0:1))}function dt(e){const t=new Map,n=Pt();return new Proxy({},{get(r,i){return t.has(i)||Ct(n,()=>t.set(i,P(()=>e()[i]))),t.get(i)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function ht(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),r=e.slice(t.index+t[0].length);const i=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(r);)i.push(n+=t[1]),r=r.slice(t[0].length);return ht(r).reduce((s,o)=>[...s,...i.map(l=>l+o)],[])}const yn=100,gt=nt(),Se=nt(),xe=()=>fn(Be(gt),"Make sure your app is wrapped in a <Router />");let se;const Ae=()=>se||Be(Se)||xe().base,mn=e=>{const t=Ae();return P(()=>t.resolvePath(e()))},bn=e=>{const t=xe();return P(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},wn=()=>xe().location,pn=()=>Ae().params;function _n(e,t="",n){const{component:r,data:i,children:s}=e,o=!s||Array.isArray(s)&&!s.length,l={key:e,element:r?()=>x(r,{}):()=>{const{element:a}=e;return a===void 0&&n?x(n,{}):a},preload:e.component?r.preload:e.preload,data:i};return yt(e.path).reduce((a,u)=>{for(const c of ht(u)){const y=ft(t,c),d=o?y:y.split("/*",1)[0];a.push({...l,originalPath:c,pattern:d,matcher:hn(d,!o,e.matchFilters)})}return a},[])}function $n(e,t=0){return{routes:e,score:gn(e[e.length-1])*1e4-t,matcher(n){const r=[];for(let i=e.length-1;i>=0;i--){const s=e[i],o=s.matcher(n);if(!o)return null;r.unshift({...o,route:s})}return r}}}function yt(e){return Array.isArray(e)?e:[e]}function mt(e,t="",n,r=[],i=[]){const s=yt(e);for(let o=0,l=s.length;o<l;o++){const a=s[o];if(a&&typeof a=="object"&&a.hasOwnProperty("path")){const u=_n(a,t,n);for(const c of u){r.push(c);const y=Array.isArray(a.children)&&a.children.length===0;if(a.children&&!y)mt(a.children,c.pattern,n,r,i);else{const d=$n([...r],i.length);i.push(d)}r.pop()}}}return r.length?i:i.sort((o,l)=>l.score-o.score)}function vn(e,t){for(let n=0,r=e.length;n<r;n++){const i=e[n].matcher(t);if(i)return i}return[]}function Sn(e,t){const n=new URL("http://sar"),r=P(a=>{const u=e();try{return new URL(u,n)}catch{return console.error(`Invalid path ${u}`),a}},n,{equals:(a,u)=>a.href===u.href}),i=P(()=>r().pathname),s=P(()=>r().search,!0),o=P(()=>r().hash),l=P(()=>"");return{get pathname(){return i()},get search(){return s()},get hash(){return o()},get state(){return t()},get key(){return l()},query:dt(et(s,()=>dn(r())))}}function xn(e,t="",n,r){const{signal:[i,s],utils:o={}}=on(e),l=o.parsePath||(f=>f),a=o.renderPath||(f=>f),u=o.beforeLeave||cn(),c=de("",t),y=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!i().value&&s({value:c,replace:!0,scroll:!1});const[d,m]=N(!1),w=async f=>{m(!0);try{await kt(f)}finally{m(!1)}},[b,k]=N(i().value),[E,A]=N(i().state),$=Sn(b,E),v=[],S={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(f){return de(c,f)}};if(n)try{se=S,S.data=n({data:void 0,params:{},location:$,navigate:q(S)})}finally{se=void 0}function D(f,g,h){B(()=>{if(typeof g=="number"){g&&(o.go?u.confirm(g,h)&&o.go(g):console.warn("Router integration does not support relative routing"));return}const{replace:O,resolve:W,scroll:R,state:H}={replace:!1,resolve:!0,scroll:!0,...h},F=W?f.resolvePath(g):de("",g);if(F===void 0)throw new Error(`Path '${g}' is not a routable path`);if(v.length>=yn)throw new Error("Too many redirects");const z=b();if((F!==z||H!==E())&&!Zt){if(u.confirm(F,h)){const vt=v.push({value:z,replace:O,scroll:R,state:E()});w(()=>{k(F),A(H)}).then(()=>{v.length===vt&&U({value:F,state:H})})}}})}function q(f){return f=f||Be(Se)||S,(g,h)=>D(f,g,h)}function U(f){const g=v[0];g&&((f.value!==g.value||f.state!==g.state)&&s({...f,replace:g.replace,scroll:g.scroll}),v.length=0)}j(()=>{const{value:f,state:g}=i();B(()=>{f!==b()&&w(()=>{k(f),A(g)})})});{let f=function(g){if(g.defaultPrevented||g.button!==0||g.metaKey||g.altKey||g.ctrlKey||g.shiftKey)return;const h=g.composedPath().find(z=>z instanceof Node&&z.nodeName.toUpperCase()==="A");if(!h||!h.hasAttribute("link"))return;const O=h.href;if(h.target||!O&&!h.hasAttribute("state"))return;const W=(h.getAttribute("rel")||"").split(/\s+/);if(h.hasAttribute("download")||W&&W.includes("external"))return;const R=new URL(O);if(R.origin!==window.location.origin||c&&R.pathname&&!R.pathname.toLowerCase().startsWith(c.toLowerCase()))return;const H=l(R.pathname+R.search+R.hash),F=h.getAttribute("state");g.preventDefault(),D(S,H,{resolve:!1,replace:h.hasAttribute("replace"),scroll:!h.hasAttribute("noscroll"),state:F&&JSON.parse(F)})};$e(["click"]),document.addEventListener("click",f),De(()=>document.removeEventListener("click",f))}return{base:S,out:y,location:$,isRouting:d,renderPath:a,parsePath:l,navigatorFactory:q,beforeLeave:u}}function An(e,t,n,r,i){const{base:s,location:o,navigatorFactory:l}=e,{pattern:a,element:u,preload:c,data:y}=r().route,d=P(()=>r().path);c&&c();const m={parent:t,pattern:a,get child(){return n()},path:d,params:i,data:t.data,outlet:u,resolvePath(w){return de(s.path(),w,d())}};if(y)try{se=m,m.data=y({data:t.data,params:i,location:o,navigate:l(m)})}finally{se=void 0}return m}const Pn=K("<a link></a>"),Cn=e=>{const{source:t,url:n,base:r,data:i,out:s}=e,o=t||ln(),l=xn(o,r,i);return x(gt.Provider,{value:l,get children(){return e.children}})},kn=e=>{const t=xe(),n=Ae(),r=rt(()=>e.children),i=P(()=>mt(r(),ft(n.pattern,e.base||""),On)),s=P(()=>vn(i(),t.location.pathname)),o=dt(()=>{const c=s(),y={};for(let d=0;d<c.length;d++)Object.assign(y,c[d].params);return y});t.out&&t.out.matches.push(s().map(({route:c,path:y,params:d})=>({originalPath:c.originalPath,pattern:c.pattern,path:y,params:d})));const l=[];let a;const u=P(et(s,(c,y,d)=>{let m=y&&c.length===y.length;const w=[];for(let b=0,k=c.length;b<k;b++){const E=y&&y[b],A=c[b];d&&E&&A.route.key===E.route.key?w[b]=d[b]:(m=!1,l[b]&&l[b](),re($=>{l[b]=$,w[b]=An(t,w[b-1]||n,()=>u()[b+1],()=>s()[b],o)}))}return l.splice(c.length).forEach(b=>b()),d&&m?d:(a=w[0],w)}));return x(ie,{get when(){return u()&&a},children:c=>x(Se.Provider,{value:c,get children(){return c.outlet()}})})},En=(e,t)=>()=>x(kn,{base:t,children:e}),On=()=>{const e=Ae();return x(ie,{get when(){return e.child},children:t=>x(Se.Provider,{value:t,get children(){return t.outlet()}})})};function bt(e){e=He({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=It(e,["href","state","class","activeClass","inactiveClass","end"]),n=mn(()=>e.href),r=bn(n),i=wn(),s=P(()=>{const o=n();if(o===void 0)return!1;const l=Y(o.split(/[?#]/,1)[0]).toLowerCase(),a=Y(i.pathname).toLowerCase();return e.end?l===a:a.startsWith(l)});return(()=>{const o=Pn.cloneNode(!0);return Gt(o,He(t,{get href(){return r()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!s(),[e.activeClass]:s(),...t.classList}},get["aria-current"](){return s()?"page":void 0}}),!1,!1),o})()}const Ln="modulepreload",Tn=function(e){return"/"+e},Qe={},Nn=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=Tn(s),s in Qe)return;Qe[s]=!0;const o=s.endsWith(".css"),l=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const y=i[c];if(y.href===s&&(!o||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${l}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":Ln,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,y)=>{u.addEventListener("load",c),u.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t())},Ne=Symbol("store-raw"),oe=Symbol("store-node"),Rn=Symbol("store-name");function wt(e,t){let n=e[M];if(!n&&(Object.defineProperty(e,M,{value:n=new Proxy(e,Dn)}),!Array.isArray(e))){const r=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let s=0,o=r.length;s<o;s++){const l=r[s];i[l].get&&Object.defineProperty(e,l,{enumerable:i[l].enumerable,get:i[l].get.bind(n)})}}return n}function we(e){let t;return e!=null&&typeof e=="object"&&(e[M]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function le(e,t=new Set){let n,r,i,s;if(n=e!=null&&e[Ne])return n;if(!we(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let o=0,l=e.length;o<l;o++)i=e[o],(r=le(i,t))!==i&&(e[o]=r)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const o=Object.keys(e),l=Object.getOwnPropertyDescriptors(e);for(let a=0,u=o.length;a<u;a++)s=o[a],!l[s].get&&(i=e[s],(r=le(i,t))!==i&&(e[s]=r))}return e}function Me(e){let t=e[oe];return t||Object.defineProperty(e,oe,{value:t={}}),t}function Re(e,t,n){return e[t]||(e[t]=_t(n))}function In(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===M||t===oe||t===Rn||(delete n.value,delete n.writable,n.get=()=>e[M][t]),n}function pt(e){if(tt()){const t=Me(e);(t._||(t._=_t()))()}}function jn(e){return pt(e),Reflect.ownKeys(e)}function _t(e){const[t,n]=N(e,{equals:!1,internal:!0});return t.$=n,t}const Dn={get(e,t,n){if(t===Ne)return e;if(t===M)return n;if(t===Ee)return pt(e),n;const r=Me(e),i=r.hasOwnProperty(t);let s=i?r[t]():e[t];if(t===oe||t==="__proto__")return s;if(!i){const o=Object.getOwnPropertyDescriptor(e,t);tt()&&(typeof s!="function"||e.hasOwnProperty(t))&&!(o&&o.get)&&(s=Re(r,t,s)())}return we(s)?wt(s):s},has(e,t){return t===Ne||t===M||t===Ee||t===oe||t==="__proto__"?!0:(this.get(e,t,e),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:jn,getOwnPropertyDescriptor:In};function pe(e,t,n,r=!1){if(!r&&e[t]===n)return;const i=e[t],s=e.length;n===void 0?delete e[t]:e[t]=n;let o=Me(e),l;(l=Re(o,t,i))&&l.$(()=>n),Array.isArray(e)&&e.length!==s&&(l=Re(o,"length",s))&&l.$(e.length),(l=o._)&&l.$()}function $t(e,t){const n=Object.keys(t);for(let r=0;r<n.length;r+=1){const i=n[r];pe(e,i,t[i])}}function Bn(e,t){if(typeof t=="function"&&(t=t(e)),t=le(t),Array.isArray(t)){if(e===t)return;let n=0,r=t.length;for(;n<r;n++){const i=t[n];e[n]!==i&&pe(e,n,i)}pe(e,"length",r)}else $t(e,t)}function ne(e,t,n=[]){let r,i=e;if(t.length>1){r=t.shift();const o=typeof r,l=Array.isArray(e);if(Array.isArray(r)){for(let a=0;a<r.length;a++)ne(e,[r[a]].concat(t),n);return}else if(l&&o==="function"){for(let a=0;a<e.length;a++)r(e[a],a)&&ne(e,[a].concat(t),n);return}else if(l&&o==="object"){const{from:a=0,to:u=e.length-1,by:c=1}=r;for(let y=a;y<=u;y+=c)ne(e,[y].concat(t),n);return}else if(t.length>1){ne(e[r],t,[r].concat(n));return}i=e[r],n=[r].concat(n)}let s=t[0];typeof s=="function"&&(s=s(i,n),s===i)||r===void 0&&s==null||(s=le(s),r===void 0||we(i)&&we(s)&&!Array.isArray(s)?$t(i,s):pe(e,r,s))}function Ye(...[e,t]){const n=le(e||{}),r=Array.isArray(n),i=wt(n);function s(...o){At(()=>{r&&o.length===1?Bn(n,o[0]):ne(n,o)})}return[i,s]}const qn="_itemCard_1kryd_1",Fn="_fadeInAnimation_1kryd_1",Mn="_itemTitle_1kryd_14",Kn="_itemDescription_1kryd_18",Un="_itemImage_1kryd_22",fe={itemCard:qn,fadeInAnimation:Fn,itemTitle:Mn,itemDescription:Kn,itemImage:Un},Hn=K("<div><img><div><h1> <!> </h1><p> <!> </p></div></div>");function Vn(e){return(()=>{const t=Hn.cloneNode(!0),n=t.firstChild,r=n.nextSibling,i=r.firstChild,s=i.firstChild,o=s.nextSibling;o.nextSibling;const l=i.nextSibling,a=l.firstChild,u=a.nextSibling;return u.nextSibling,C(i,()=>e.pet.name,o),C(l,()=>e.pet.description,u),j(c=>{const y=`${fe.itemCard}`,d=`${e.i/10}s`,m=e.pet.image,w=fe.itemImage,b=fe.itemTitle,k=fe.itemDescription;return y!==c._v$&&I(t,c._v$=y),d!==c._v$2&&t.style.setProperty("animation-delay",c._v$2=d),m!==c._v$3&&ve(n,"src",c._v$3=m),w!==c._v$4&&I(n,c._v$4=w),b!==c._v$5&&I(i,c._v$5=b),k!==c._v$6&&I(l,c._v$6=k),c},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),t})()}const Wn=K("<button></button>");function he(e){const[t,n]=N(e.default);return(()=>{const r=Wn.cloneNode(!0);return r.$$click=i=>{n(!t()),t()?e.onOn(i):e.onOff(i)},C(r,()=>e.text),j(()=>I(r,`transition-colors duration-150 p-4 rounded-xl ${t()?"bg-sky-300 dark:bg-sky-800":"bg-gray-100 dark:bg-dark-200"} w-full`)),r})()}$e(["click"]);const Xn=K('<div class="grid grid-cols-2 dark:bg-dark-600 dark:text-gray-100"><div class="m-6 flex flex-col gap-2"><div><small>MATCHING</small><div class="grid grid-cols-2 gap-2"><button>Best</button><button>Perfect</button></div></div><div><small>WHISKERED FRIENDS</small><div class="grid grid-cols-2 gap-2"></div></div><div><small>TRAITS</small><input class="w-full p-4 border-1 border-gray-400 dark:border-gray-700 placeholder-gray-400 focus:border-gray-800 dark:focus:border-gray-400 rounded-xl bg-gray-100 dark:bg-dark-200" type="text" placeholder="Search for traits"><div class="grid grid-cols-4 my-2"></div></div></div><div class="m-6"><small>TOP RESULTS</small></div></div>'),zn=K('<div class="m-1"></div>'),Gn=K('<p class="text-gray-500 text-center mt-1/4">Nothing to show; select traits</p>');function Jn(e,t){let n=0;for(let r of e)t.includes(r)&&n++;return n}function Qn(e,t,n,r){let i=[];for(let s of t)i.push({breed:s,count:Jn(e,s.temperaments)});return i.filter(s=>n.includes(s.breed.type)).sort((s,o)=>o.count-s.count).map(s=>s.breed).slice(0,r)}function Yn(e,t,n,r){return t.filter(i=>n.includes(i.type)).filter(i=>{for(let s of e)if(!i.temperaments.includes(s))return!1;return!0}).slice(0,r)}function Zn(e){switch(e){case X.BEST:return Qn;case X.PERFECT:return Yn}}var X;(function(e){e[e.BEST=0]="BEST",e[e.PERFECT=1]="PERFECT"})(X||(X={}));function er(){const[e]=me(async()=>(await fetch(Ie+"temperaments.json")).json()),[t]=me(async()=>(await fetch(Ie+"pets.json")).json()),[n,r]=N(""),[i,s]=Ye([]),[o,l]=Ye(["dog","cat"]),[a,u]=N(X.BEST);return(()=>{const c=Xn.cloneNode(!0),y=c.firstChild,d=y.firstChild,m=d.firstChild,w=m.nextSibling,b=w.firstChild,k=b.nextSibling,E=d.nextSibling,A=E.firstChild,$=A.nextSibling,v=E.nextSibling,S=v.firstChild,D=S.nextSibling,q=D.nextSibling,U=y.nextSibling;return U.firstChild,b.$$click=()=>u(X.BEST),k.$$click=()=>u(X.PERFECT),C($,x(he,{default:!0,text:"Cats",onOn:f=>{l([...o,"cat"])},onOff:f=>{let g=o.findIndex(h=>h==="cat");l(o.filter((h,O)=>O!==g))}}),null),C($,x(he,{default:!0,text:"Dogs",onOn:f=>{l([...o,"dog"])},onOff:f=>{let g=o.findIndex(h=>h==="dog");l(o.filter((h,O)=>O!==g))}}),null),D.$$keyup=f=>r(f.currentTarget.value.toLocaleLowerCase()),C(q,x(Ve,{get each(){return e()},children:(f,g)=>x(ie,{get when(){return n().length==0||f.toLowerCase().includes(n())},get children(){const h=zn.cloneNode(!0);return C(h,x(he,{default:!1,text:f,onOn:O=>{s([...i,f])},onOff:O=>{let W=i.findIndex(R=>R===f);s(i.filter((R,H)=>H!==W))}})),h}})})),C(U,x(ie,{get when(){return!t.loading&&i.length!=0&&o.length!=0},get fallback(){return Gn.cloneNode(!0)},get children(){return x(Ve,{get each(){return Zn(a())(i,t(),o,10)},children:(f,g)=>x(bt,{get href(){return`/pet/${f.id}`},class:"no-underline text-black dark:text-gray-300",get children(){return x(Vn,{pet:f,get i(){return g()}})}})})}}),null),j(f=>{const g=`${a()===X.BEST?"bg-sky-300 dark:bg-sky-800":"bg-gray-100 dark:bg-dark-200"} p-4 rounded-xl transition-colors duration-150`,h=`${a()===X.PERFECT?"bg-sky-300 dark:bg-sky-800":"bg-gray-100 dark:bg-dark-200"} p-4 rounded-xl transition-colors duration-150`;return g!==f._v$&&I(b,f._v$=g),h!==f._v$2&&I(k,f._v$2=h),f},{_v$:void 0,_v$2:void 0}),c})()}$e(["click","keyup"]);function tr(){return[]}const nr="_title_13ta5_1",rr="_subtitle_13ta5_8",ir="_infoSection_13ta5_13",sr="_infoImage_13ta5_22",ee={title:nr,subtitle:rr,infoSection:ir,infoImage:sr},or=K("<h1> <!> </h1>"),lr=K('<div class="flex mx-20"><div><h2> Information </h2><div><p> Weight: <!> - <!> lbs </p><p> Lifespan: <!> - <!> years </p><p> Temperaments: <!> </p></div><h2> Description </h2><div><p> <!> </p></div></div><img></div>'),cr=K('<div class="dark:text-white"></div>'),ar=K("<p>Hang on a sec...</p>");function ur(e,t){for(let n of e)if(n.id==t)return n}function fr(){const e=pn(),t=parseInt(e.id),[n]=me(async()=>{let r=await(await fetch(Ie+"pets.json")).json();return ur(r,t)});return(()=>{const r=cr.cloneNode(!0);return C(r,x(ie,{get when(){return!n.loading},get fallback(){return ar.cloneNode(!0)},get children(){return[(()=>{const i=or.cloneNode(!0),s=i.firstChild,o=s.nextSibling;return o.nextSibling,C(i,()=>n().name,o),j(()=>I(i,ee.title)),i})(),(()=>{const i=lr.cloneNode(!0),s=i.firstChild,o=s.firstChild,l=o.nextSibling,a=l.firstChild,u=a.firstChild,c=u.nextSibling,y=c.nextSibling,d=y.nextSibling;d.nextSibling;const m=a.nextSibling,w=m.firstChild,b=w.nextSibling,k=b.nextSibling,E=k.nextSibling;E.nextSibling;const A=m.nextSibling,$=A.firstChild,v=$.nextSibling;v.nextSibling;const S=l.nextSibling,D=S.nextSibling,q=D.firstChild,U=q.firstChild,f=U.nextSibling;f.nextSibling;const g=s.nextSibling;return C(a,()=>n().weight_low_lbs,c),C(a,()=>n().weight_high_lbs,d),C(m,()=>n().life_span_low,b),C(m,()=>n().life_span_high,E),C(A,()=>n().temperaments.join(", "),v),C(q,()=>n().description,f),j(h=>{const O=ee.subtitle,W=ee.infoSection,R=ee.subtitle,H=ee.infoSection,F=ee.infoImage,z=n().image;return O!==h._v$&&I(o,h._v$=O),W!==h._v$2&&I(l,h._v$2=W),R!==h._v$3&&I(S,h._v$3=R),H!==h._v$4&&I(D,h._v$4=H),F!==h._v$5&&I(g,h._v$5=F),z!==h._v$6&&ve(g,"src",h._v$6=z),h},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),i})()]}})),r})()}const dr=[{path:"/",component:er},{path:"/findmypet",component:tr},{path:"/pet/:id",component:fr},{path:"**",component:jt(()=>Nn(()=>import("./404-130b441e.js"),[]))}],hr=K('<div><nav class="p-4 bg-gray-100 dark:bg-dark-800"><div class="float-right"></div></nav><main class="h-full"></main></div>'),gr=()=>{const e=En(dr);return(()=>{const t=hr.cloneNode(!0),n=t.firstChild,r=n.firstChild,i=n.nextSibling;return C(n,x(bt,{href:"/",class:"text-5xl font-bold p-4 text-black dark:text-white no-underline fill-white",style:"font-family: 'Righteous', 'Inter', sans-serif;",children:"PETFINDER"}),r),C(r,x(he,{get default(){return localStorage.getItem("dark")==="true"},onOn:s=>{document.body.classList.add("dark"),localStorage.setItem("dark","true")},onOff:s=>{document.body.classList.remove("dark"),localStorage.setItem("dark","false")},text:"Dark mode"})),i.style.setProperty("font-family","'Inter', sans-serif"),C(i,x(e,{})),t})()},Ie=location.href.includes("github")?"/pet-match-wh/":"/",yr=document.getElementById("root");localStorage.getItem("dark")==="true"&&document.body.classList.add("dark");Ht(()=>x(Cn,{get children(){return x(gr,{})}}),yr);export{K as t};
