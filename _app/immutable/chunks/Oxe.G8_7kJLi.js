import{s as z,e as p,a as C,b as g,n as x,d as y,f as D,g as X,i as _,k as B,j as b,v as h,w as W,q as L,x as V,y as N}from"./scheduler.OhbmNE_e.js";import{S as Q,i as G}from"./index.eDosbYco.js";let o;const F=typeof TextDecoder<"u"?new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw Error("TextDecoder not available")}};typeof TextDecoder<"u"&&F.decode();let A=null;function j(){return(A===null||A.byteLength===0)&&(A=new Uint8Array(o.memory.buffer)),A}function M(t,e){return t=t>>>0,F.decode(j().subarray(t,t+e))}let v=0;const I=typeof TextEncoder<"u"?new TextEncoder("utf-8"):{encode:()=>{throw Error("TextEncoder not available")}},H=typeof I.encodeInto=="function"?function(t,e){return I.encodeInto(t,e)}:function(t,e){const n=I.encode(t);return e.set(n),{read:t.length,written:n.length}};function S(t,e,n){if(n===void 0){const i=I.encode(t),l=e(i.length,1)>>>0;return j().subarray(l,l+i.length).set(i),v=i.length,l}let s=t.length,r=e(s,1)>>>0;const c=j();let a=0;for(;a<s;a++){const i=t.charCodeAt(a);if(i>127)break;c[r+a]=i}if(a!==s){a!==0&&(t=t.slice(a)),r=n(r,s,s=a+t.length*3,1)>>>0;const i=j().subarray(r+a,r+s),l=H(t,i);a+=l.written,r=n(r,s,a,1)>>>0}return v=a,r}function J(t){const e=S(t,o.__wbindgen_malloc,o.__wbindgen_realloc),n=v,s=o.run_stack(e,n);return U.__wrap(s)}let R=null;function m(){return(R===null||R.byteLength===0)&&(R=new Int32Array(o.memory.buffer)),R}const O=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(t=>o.__wbg_result_free(t>>>0));class U{static __wrap(e){e=e>>>0;const n=Object.create(U.prototype);return n.__wbg_ptr=e,O.register(n,n.__wbg_ptr,n),n}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,O.unregister(this),e}free(){const e=this.__destroy_into_raw();o.__wbg_result_free(e)}static new(e,n){const s=S(e,o.__wbindgen_malloc,o.__wbindgen_realloc),r=v,c=S(n,o.__wbindgen_malloc,o.__wbindgen_realloc),a=v,i=o.result_new(s,r,c,a);return U.__wrap(i)}output(){let e,n;try{const c=o.__wbindgen_add_to_stack_pointer(-16);o.result_output(c,this.__wbg_ptr);var s=m()[c/4+0],r=m()[c/4+1];return e=s,n=r,M(s,r)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(e,n,1)}}log(){let e,n;try{const c=o.__wbindgen_add_to_stack_pointer(-16);o.result_log(c,this.__wbg_ptr);var s=m()[c/4+0],r=m()[c/4+1];return e=s,n=r,M(s,r)}finally{o.__wbindgen_add_to_stack_pointer(16),o.__wbindgen_free(e,n,1)}}}async function K(t,e){if(typeof Response=="function"&&t instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(t,e)}catch(s){if(t.headers.get("Content-Type")!="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",s);else throw s}const n=await t.arrayBuffer();return await WebAssembly.instantiate(n,e)}else{const n=await WebAssembly.instantiate(t,e);return n instanceof WebAssembly.Instance?{instance:n,module:t}:n}}function P(){const t={};return t.wbg={},t.wbg.__wbg_prompt_1a7b517699a71a7b=function(e,n,s){const r=prompt(M(n,s)),c=S(r,o.__wbindgen_malloc,o.__wbindgen_realloc),a=v;m()[e/4+1]=a,m()[e/4+0]=c},t.wbg.__wbindgen_throw=function(e,n){throw new Error(M(e,n))},t}function Y(t,e){return o=t.exports,q.__wbindgen_wasm_module=e,R=null,A=null,o}async function q(t){if(o!==void 0)return o;typeof t>"u"&&(t=new URL(""+new URL("../assets/web_stack_bg.RrXQ3A2q.wasm",import.meta.url).href,import.meta.url));const e=P();(typeof t=="string"||typeof Request=="function"&&t instanceof Request||typeof URL=="function"&&t instanceof URL)&&(t=fetch(t));const{instance:n,module:s}=await K(await t,e);return Y(n,s)}function Z(t){let e,n,s,r,c="実行",a,i,l,E,u,T,w;return{c(){e=p("div"),n=p("textarea"),s=C(),r=p("button"),r.textContent=c,a=C(),i=p("div"),l=p("textarea"),E=C(),u=p("textarea"),this.h()},l(d){e=g(d,"DIV",{id:!0,class:!0});var f=x(e);n=g(f,"TEXTAREA",{id:!0,rows:!0,class:!0}),x(n).forEach(y),s=D(f),r=g(f,"BUTTON",{class:!0,"data-svelte-h":!0}),X(r)!=="svelte-nc1svf"&&(r.textContent=c),a=D(f),i=g(f,"DIV",{class:!0});var k=x(i);l=g(k,"TEXTAREA",{id:!0,rows:!0,class:!0}),x(l).forEach(y),E=D(k),u=g(k,"TEXTAREA",{id:!0,rows:!0,class:!0}),x(u).forEach(y),k.forEach(y),f.forEach(y),this.h()},h(){_(n,"id","code"),_(n,"rows","10"),_(n,"class","svelte-1j051wy"),_(r,"class","btn form-control btn-primary svelte-1j051wy"),_(l,"id","output"),_(l,"rows","15"),_(l,"class","svelte-1j051wy"),_(u,"id","log"),_(u,"rows","15"),_(u,"class","svelte-1j051wy"),_(i,"class","split svelte-1j051wy"),_(e,"id","main"),_(e,"class","svelte-1j051wy")},m(d,f){B(d,e,f),b(e,n),h(n,t[0]),b(e,s),b(e,r),b(e,a),b(e,i),b(i,l),h(l,t[1]),b(i,E),b(i,u),h(u,t[2]),T||(w=[W(n,"input",t[4]),W(r,"click",t[5]),W(l,"input",t[6]),W(u,"input",t[7])],T=!0)},p(d,[f]){f&1&&h(n,d[0]),f&2&&h(l,d[1]),f&4&&h(u,d[2])},i:L,o:L,d(d){d&&y(e),T=!1,V(w)}}}function $(t,e,n){let s=null;N(()=>{q().then(()=>{s=J})});let{code:r}=e,c,a;function i(){if(s){console.log(r);const w=s(r);n(1,c=w.output()),n(2,a=w.log())}else{alert("WebAssemblyの読み込みが完了していません。");return}}function l(){r=this.value,n(0,r)}const E=()=>i();function u(){c=this.value,n(1,c)}function T(){a=this.value,n(2,a)}return t.$$set=w=>{"code"in w&&n(0,r=w.code)},[r,c,a,i,l,E,u,T]}class ne extends Q{constructor(e){super(),G(this,e,$,Z,z,{code:0})}}export{ne as O};