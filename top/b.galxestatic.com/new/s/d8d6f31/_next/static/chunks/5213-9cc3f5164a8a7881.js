"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5213],{86999:function(e,t,n){n.d(t,{Dv:function(){return d},KO:function(){return c},b9:function(){return f},oR:function(){return u},zt:function(){return i}});var r=n(24917),l=n(60641);let o=(0,r.createContext)(void 0),u=e=>{let t=(0,r.useContext)(o);return(null==e?void 0:e.store)||t||(0,l.K7)()},i=e=>{let{children:t,store:n}=e,u=(0,r.useRef)();return n||u.current||(u.current=(0,l.MT)()),(0,r.createElement)(o.Provider,{value:n||u.current},t)},a=e=>"function"==typeof(null==e?void 0:e.then),s=r.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e});function d(e,t){let n=u(t),[[l,o,i],d]=(0,r.useReducer)(t=>{let r=n.get(e);return Object.is(t[0],r)&&t[1]===n&&t[2]===e?t:[r,n,e]},void 0,()=>[n.get(e),n,e]),f=l;(o!==n||i!==e)&&(d(),f=n.get(e));let c=null==t?void 0:t.delay;return(0,r.useEffect)(()=>{let t=n.sub(e,()=>{if("number"==typeof c){setTimeout(d,c);return}d()});return d(),t},[n,e,c]),(0,r.useDebugValue)(f),a(f)?s(f):f}function f(e,t){let n=u(t);return(0,r.useCallback)(function(){for(var t=arguments.length,r=Array(t),l=0;l<t;l++)r[l]=arguments[l];if(!("write"in e))throw Error("not writable atom");return n.set(e,...r)},[n,e])}function c(e,t){return[d(e,t),f(e,t)]}},60641:function(e,t,n){let r;n.d(t,{K7:function(){return I},MT:function(){return S},cn:function(){return o}});let l=0;function o(e,t){let n=`atom${++l}`,r={toString:()=>n};return"function"==typeof e?r.read=e:(r.init=e,r.read=u,r.write=i),t&&(r.write=t),r}function u(e){return e(this)}function i(e,t,n){return t(this,"function"==typeof n?n(e(this)):n)}let a=(e,t)=>e.unstable_is?e.unstable_is(t):t===e,s=e=>"init"in e,d=e=>!!e.write,f=new WeakMap,c=(e,t)=>{f.set(e,t),e.catch(()=>{}).finally(()=>f.delete(e))},v=(e,t)=>{let n=f.get(e);n&&(f.delete(e),n(t))},h=(e,t)=>{e.status="fulfilled",e.value=t},w=(e,t)=>{e.status="rejected",e.reason=t},g=e=>"function"==typeof(null==e?void 0:e.then),p=(e,t)=>!!e&&"v"in e&&"v"in t&&Object.is(e.v,t.v),m=(e,t)=>!!e&&"e"in e&&"e"in t&&Object.is(e.e,t.e),b=e=>!!e&&"v"in e&&e.v instanceof Promise,E=(e,t)=>"v"in e&&"v"in t&&e.v.orig&&e.v.orig===t.v.orig,_=e=>{if("e"in e)throw e.e;return e.v},y=()=>{let e,t;let n=new WeakMap,r=new WeakMap,l=[],o=new WeakMap;e=new Set,t=new Set;let u=e=>n.get(e),i=(e,t)=>{t.d.forEach((t,n)=>{var r;if(!o.has(n)){let e=u(n);null==(r=l[l.length-1])||r.add(n),o.set(n,[e,new Set]),e&&i(n,e)}o.get(n)[1].add(e)})},f=(e,t)=>{var r;Object.freeze(t);let a=u(e);if(n.set(e,t),o.has(e)||(null==(r=l[l.length-1])||r.add(e),o.set(e,[a,new Set]),i(e,t)),b(a)){let e="v"in t?t.v instanceof Promise?t.v:Promise.resolve(t.v):Promise.reject(t.e);a.v!==e&&v(a.v,e)}},y=(e,t,n,r)=>{let l=new Map(r?t.d:null),o=!1;n.forEach((n,r)=>{!n&&a(e,r)&&(n=t),n?(l.set(r,n),t.d.get(r)!==n&&(o=!0)):console.warn("[Bug] atom state not found")}),(o||t.d.size!==l.size)&&(t.d=l)},S=(e,t,n,r)=>{let l=u(e),o={d:(null==l?void 0:l.d)||new Map,v:t};if(n&&y(e,o,n,r),p(l,o)&&l.d===o.d)return l;if(b(l)&&b(o)&&E(l,o)){if(l.d===o.d)return l;o.v=l.v}return f(e,o),o},I=(e,t,n,l)=>{if(g(t)){let o;let i=()=>{let t=u(e);if(!b(t)||t.v!==a)return;let l=S(e,a,n);r.has(e)&&t.d!==l.d&&z(e,l,t.d)},a=new Promise((e,n)=>{let r=!1;t.then(t=>{r||(r=!0,h(a,t),e(t),i())},e=>{r||(r=!0,w(a,e),n(e),i())}),o=t=>{r||(r=!0,t.then(e=>h(a,e),e=>w(a,e)),e(t))}});return a.orig=t,a.status="pending",c(a,e=>{e&&o(e),null==l||l()}),S(e,a,n,!0)}return S(e,t,n)},O=(e,t,n)=>{let r=u(e),l={d:(null==r?void 0:r.d)||new Map,e:t};return(n&&y(e,l,n),m(r,l)&&r.d===l.d)?r:(f(e,l),l)},T=(e,t)=>{let n,l;let o=u(e);if(!(null==t?void 0:t(e))&&o&&(r.has(e)||Array.from(o.d).every(([n,r])=>{if(n===e)return!0;let l=T(n,t);return l===r||p(l,r)})))return o;let i=new Map,f=!0;try{let r=e.read(n=>{if(a(e,n)){let e=u(n);if(e)return i.set(n,e),_(e);if(s(n))return i.set(n,void 0),n.init;throw Error("no atom init")}let r=T(n,t);return i.set(n,r),_(r)},{get signal(){return n||(n=new AbortController),n.signal},get setSelf(){return d(e)||console.warn("setSelf function cannot be used with read-only atom"),!l&&d(e)&&(l=(...t)=>{if(f&&console.warn("setSelf function cannot be called in sync"),!f)return A(e,...t)}),l}});return I(e,r,i,()=>null==n?void 0:n.abort())}catch(t){return O(e,t,i)}finally{f=!1}},k=e=>{let t=e=>{var t,n;let l=new Set(null==(t=r.get(e))?void 0:t.t);return null==(n=o.get(e))||n[1].forEach(e=>{l.add(e)}),l},n=[],l=new Set,a=e=>{if(!l.has(e)){for(let n of(l.add(e),t(e)))e!==n&&a(n);n.push(e)}};a(e);let s=new Set([e]),d=e=>l.has(e);for(let e=n.length-1;e>=0;--e){let t=n[e],r=u(t);if(!r)continue;let o=!1;for(let e of r.d.keys())if(e!==t&&s.has(e)){o=!0;break}if(o){let e=T(t,d);i(t,e),p(r,e)||s.add(t)}l.delete(t)}},M=(t,...n)=>t.write(e=>_(T(e)),(n,...r)=>{let o;let i=l.length>0;if(i||l.push(new Set([n])),a(t,n)){if(!s(n))throw Error("atom not writable");p(u(n),I(n,r[0]))||k(n)}else o=M(n,...r);if(!i){let t=C(l.pop());e.forEach(e=>e({type:"async-write",flushed:t}))}return o},...n),A=(t,...n)=>{l.push(new Set([t]));let r=M(t,...n),o=C(l.pop());return e.forEach(e=>e({type:"write",flushed:o})),r},j=(e,n,l)=>{var o;let i=r.get(e);if(i)return n&&i.t.add(n),i;let a=l||[];null==(o=u(e))||o.d.forEach((t,n)=>{n!==e&&j(n,e,a)}),T(e);let s={t:new Set(n&&[n]),l:new Set};if(r.set(e,s),t.add(e),d(e)&&e.onMount){let{onMount:t}=e;a.push(()=>{let n=t((...t)=>A(e,...t));n&&(s.u=n)})}return l||a.forEach(e=>e()),s},P=(e,t)=>!t.l.size&&(!t.t.size||1===t.t.size&&t.t.has(e)),R=(e,n)=>{if(!P(e,n))return;let l=n.u;l&&l(),r.delete(e),t.delete(e);let o=u(e);o?(b(o)&&v(o.v),o.d.forEach((t,n)=>{if(n!==e){let t=r.get(n);t&&(t.t.delete(e),R(n,t))}})):console.warn("[Bug] could not find atom state to unmount",e)},z=(e,t,n)=>{let l=new Set(t.d.keys()),o=new Set;null==n||n.forEach((t,n)=>{if(l.has(n)){l.delete(n);return}o.add(n);let u=r.get(n);u&&u.t.delete(e)}),l.forEach(t=>{j(t,e)}),o.forEach(e=>{let t=r.get(e);t&&R(e,t)})},C=e=>{let t;t=new Set;let n=[],l=e=>{var t;if(!o.has(e))return;let[r,i]=o.get(e);o.delete(e),n.push([e,r]),i.forEach(l),null==(t=u(e))||t.d.forEach((e,t)=>l(t))};return e.forEach(l),n.forEach(([e,n])=>{let l=u(e);if(!l){console.warn("[Bug] no atom state to flush");return}if(l!==n){let o=r.get(e);o&&l.d!==(null==n?void 0:n.d)&&z(e,l,null==n?void 0:n.d),o&&!(!b(n)&&(p(n,l)||m(n,l)))&&(o.l.forEach(e=>e()),t.add(e))}}),t};return{get:e=>_(T(e)),set:A,sub:(t,n)=>{let r=j(t),l=C([t]),o=r.l;return o.add(n),e.forEach(e=>e({type:"sub",flushed:l})),()=>{o.delete(n),R(t,r),e.forEach(e=>e({type:"unsub"}))}},dev_subscribe_store:t=>(e.add(t),()=>{e.delete(t)}),dev_get_mounted_atoms:()=>t.values(),dev_get_atom_state:e=>n.get(e),dev_get_mounted:e=>r.get(e),dev_restore_atoms:t=>{for(let[e,n]of(l.push(new Set),t))s(e)&&(I(e,n),k(e));let n=C(l.pop());e.forEach(e=>e({type:"restore",flushed:n}))}}};Symbol("CONTINUE_PROMISE");let S=y,I=()=>(r||(r=y(),globalThis.__JOTAI_DEFAULT_STORE__||(globalThis.__JOTAI_DEFAULT_STORE__=r),globalThis.__JOTAI_DEFAULT_STORE__!==r&&console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044")),r)},66132:function(e,t,n){n.d(t,{O4:function(){return i}});var r=n(60641);let l=Symbol("RESET"),o=e=>"function"==typeof(null==e?void 0:e.then),u=function(e=()=>{try{return window.localStorage}catch(e){"undefined"!=typeof window&&console.warn(e);return}},t){let n,r;let l={getItem:(t,l)=>{var u,i;let a=e=>{if(n!==(e=e||"")){try{r=JSON.parse(e,void 0)}catch(e){return l}n=e}return r},s=null!=(i=null==(u=e())?void 0:u.getItem(t))?i:null;return o(s)?s.then(a):a(s)},setItem:(t,n)=>{var r;return null==(r=e())?void 0:r.setItem(t,JSON.stringify(n,void 0))},removeItem:t=>{var n;return null==(n=e())?void 0:n.removeItem(t)}};return"undefined"!=typeof window&&"function"==typeof window.addEventListener&&window.Storage&&(l.subscribe=(t,n,r)=>{if(!(e() instanceof window.Storage))return()=>{};let l=l=>{if(l.storageArea===e()&&l.key===t){let e;try{e=JSON.parse(l.newValue||"")}catch(t){e=r}n(e)}};return window.addEventListener("storage",l),()=>{window.removeEventListener("storage",l)}}),l}();function i(e,t,n=u,o){let i=null==o?void 0:o.getOnInit,a=(0,r.cn)(i?n.getItem(e,t):t);return a.debugPrivate=!0,a.onMount=r=>{let l;return r(n.getItem(e,t)),n.subscribe&&(l=n.subscribe(e,r,t)),l},(0,r.cn)(e=>e(a),(r,o,u)=>{let i="function"==typeof u?u(r(a)):u;return i===l?(o(a,t),n.removeItem(e)):i instanceof Promise?i.then(t=>(o(a,t),n.setItem(e,t))):(o(a,i),n.setItem(e,i))})}}}]);