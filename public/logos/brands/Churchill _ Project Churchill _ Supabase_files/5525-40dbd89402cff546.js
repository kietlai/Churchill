(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5525],{87613:function(e,t,n){var r=n(39872);e.exports=function(e){return(null==e?0:e.length)?r(e,0,-1):[]}},55050:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(56626);let a=(0,r.Z)("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]])},81689:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(56626);let a=(0,r.Z)("FileDiff",[["path",{d:"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z",key:"1nnpy2"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M9 17h6",key:"r8uit2"}]])},47716:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(56626);let a=(0,r.Z)("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]])},88724:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(56626);let a=(0,r.Z)("X",[["line",{x1:"18",x2:"6",y1:"6",y2:"18",key:"15jfxm"}],["line",{x1:"6",x2:"18",y1:"6",y2:"18",key:"d1lma3"}]])},27533:function(e,t,n){"use strict";n.d(t,{RJ:function(){return useChat}});var r,a=n(2784),i=n(43100);let noop=()=>{},s=noop(),o=Object,isUndefined=e=>e===s,isFunction=e=>"function"==typeof e,mergeObjects=(e,t)=>({...e,...t}),isPromiseLike=e=>isFunction(e.then),l=new WeakMap,c=0,stableHash=e=>{let t,n;let r=typeof e,a=e&&e.constructor,i=a==Date;if(o(e)!==e||i||a==RegExp)t=i?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(t=l.get(e))return t;if(t=++c+"~",l.set(e,t),a==Array){for(n=0,t="@";n<e.length;n++)t+=stableHash(e[n])+",";l.set(e,t)}if(a==o){t="#";let r=o.keys(e).sort();for(;!isUndefined(n=r.pop());)isUndefined(e[n])||(t+=n+":"+stableHash(e[n])+",");l.set(e,t)}}return t},u=new WeakMap,d={},f={},g="undefined",p=typeof window!=g,m=typeof document!=g,hasRequestAnimationFrame=()=>p&&typeof window.requestAnimationFrame!=g,createCacheHelper=(e,t)=>{let n=u.get(e);return[()=>!isUndefined(t)&&e.get(t)||d,r=>{if(!isUndefined(t)){let a=e.get(t);t in f||(f[t]=a),n[5](t,mergeObjects(a,r),a||d)}},n[6],()=>!isUndefined(t)&&t in f?f[t]:!isUndefined(t)&&e.get(t)||d]},h=!0,[y,b]=p&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[noop,noop],v={initFocus:e=>(m&&document.addEventListener("visibilitychange",e),y("focus",e),()=>{m&&document.removeEventListener("visibilitychange",e),b("focus",e)}),initReconnect:e=>{let onOnline=()=>{h=!0,e()},onOffline=()=>{h=!1};return y("online",onOnline),y("offline",onOffline),()=>{b("online",onOnline),b("offline",onOffline)}}},w=!a.useId,_=!p||"Deno"in window,rAF=e=>hasRequestAnimationFrame()?window.requestAnimationFrame(e):setTimeout(e,1),E=_?a.useEffect:a.useLayoutEffect,C="undefined"!=typeof navigator&&navigator.connection,R=!_&&C&&(["slow-2g","2g"].includes(C.effectiveType)||C.saveData),dist_serialize=e=>{if(isFunction(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?stableHash(e):"",t]},S=0,getTimestamp=()=>++S;var k={ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function internalMutate(...e){let[t,n,r,a]=e,i=mergeObjects({populateCache:!0,throwOnError:!0},"boolean"==typeof a?{revalidate:a}:a||{}),o=i.populateCache,l=i.rollbackOnError,c=i.optimisticData,d=!1!==i.revalidate,rollbackOnError=e=>"function"==typeof l?l(e):!1!==l,f=i.throwOnError;if(isFunction(n)){let e=[],r=t.keys();for(let a of r)!/^\$(inf|sub)\$/.test(a)&&n(t.get(a)._k)&&e.push(a);return Promise.all(e.map(mutateByKey))}return mutateByKey(n);async function mutateByKey(n){let a;let[i]=dist_serialize(n);if(!i)return;let[l,g]=createCacheHelper(t,i),[p,m,h,y]=u.get(t),b=p[i],startRevalidate=()=>d&&(delete h[i],delete y[i],b&&b[0])?b[0](2).then(()=>l().data):l().data;if(e.length<3)return startRevalidate();let v=r,w=getTimestamp();m[i]=[w,0];let _=!isUndefined(c),E=l(),C=E.data,R=E._c,S=isUndefined(R)?C:R;if(_&&g({data:c=isFunction(c)?c(S,C):c,_c:S}),isFunction(v))try{v=v(S)}catch(e){a=e}if(v&&isPromiseLike(v)){if(v=await v.catch(e=>{a=e}),w!==m[i][0]){if(a)throw a;return v}a&&_&&rollbackOnError(a)&&(o=!0,g({data:v=S,_c:s}))}o&&!a&&(isFunction(o)&&(v=o(v,S)),g({data:v,error:s,_c:s})),m[i][1]=getTimestamp();let k=await startRevalidate();if(g({_c:s}),a){if(f)throw a;return}return o?k:v}}let revalidateAllKeys=(e,t)=>{for(let n in e)e[n][0]&&e[n][0](t)},initCache=(e,t)=>{if(!u.has(e)){let n=mergeObjects(v,t),r={},a=internalMutate.bind(s,e),i=noop,o={},subscribe=(e,t)=>{let n=o[e]||[];return o[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},setter=(t,n,r)=>{e.set(t,n);let a=o[t];if(a)for(let e of a)e(n,r)},initProvider=()=>{if(!u.has(e)&&(u.set(e,[r,{},{},{},a,setter,subscribe]),!_)){let t=n.initFocus(setTimeout.bind(s,revalidateAllKeys.bind(s,r,0))),a=n.initReconnect(setTimeout.bind(s,revalidateAllKeys.bind(s,r,1)));i=()=>{t&&t(),a&&a(),u.delete(e)}}};return initProvider(),[e,a,initProvider,i]}return[e,u.get(e)[4]]},[x,O]=initCache(new Map),T=mergeObjects({onLoadingSlow:noop,onSuccess:noop,onError:noop,onErrorRetry:(e,t,n,r,a)=>{let i=n.errorRetryCount,s=a.retryCount,o=~~((Math.random()+.5)*(1<<(s<8?s:8)))*n.errorRetryInterval;(isUndefined(i)||!(s>i))&&setTimeout(r,o,a)},onDiscarded:noop,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:R?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:R?5e3:3e3,compare:(e,t)=>stableHash(e)==stableHash(t),isPaused:()=>!1,cache:x,mutate:O,fallback:{}},{isOnline:()=>h,isVisible:()=>{let e=m&&document.visibilityState;return isUndefined(e)||"hidden"!==e}}),mergeConfigs=(e,t)=>{let n=mergeObjects(e,t);if(t){let{use:r,fallback:a}=e,{use:i,fallback:s}=t;r&&i&&(n.use=r.concat(i)),a&&s&&(n.fallback=mergeObjects(a,s))}return n},U=(0,a.createContext)({}),A=p&&window.__SWR_DEVTOOLS_USE__,V=A?window.__SWR_DEVTOOLS_USE__:[],normalize=e=>isFunction(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],useSWRConfig=()=>mergeObjects(T,(0,a.useContext)(U)),F=V.concat(e=>(t,n,r)=>{let a=n&&((...e)=>{let[r]=dist_serialize(t),[,,,a]=u.get(x),i=a[r];return isUndefined(i)?n(...e):(delete a[r],i)});return e(t,a,r)}),subscribeCallback=(e,t,n)=>{let r=t[e]||(t[e]=[]);return r.push(n),()=>{let e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}};A&&(window.__SWR_DEVTOOLS_REACT__=a);let D=a.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),j={dedupe:!0};o.defineProperty(e=>{let{value:t}=e,n=(0,a.useContext)(U),r=isFunction(t),i=(0,a.useMemo)(()=>r?t(n):t,[r,n,t]),o=(0,a.useMemo)(()=>r?i:mergeConfigs(n,i),[r,n,i]),l=i&&i.provider,c=(0,a.useRef)(s);l&&!c.current&&(c.current=initCache(l(o.cache||x),i));let u=c.current;return u&&(o.cache=u[0],o.mutate=u[1]),E(()=>{if(u)return u[2]&&u[2](),u[3]},[]),(0,a.createElement)(U.Provider,mergeObjects(e,{value:o}))},"defaultValue",{value:T});let L=(r=(e,t,n)=>{let{cache:r,compare:o,suspense:l,fallbackData:c,revalidateOnMount:d,revalidateIfStale:f,refreshInterval:g,refreshWhenHidden:p,refreshWhenOffline:m,keepPreviousData:h}=n,[y,b,v,C]=u.get(r),[R,S]=dist_serialize(e),x=(0,a.useRef)(!1),O=(0,a.useRef)(!1),T=(0,a.useRef)(R),U=(0,a.useRef)(t),A=(0,a.useRef)(n),getConfig=()=>A.current,isActive=()=>getConfig().isVisible()&&getConfig().isOnline(),[V,F,L,I]=createCacheHelper(r,R),M=(0,a.useRef)({}).current,N=isUndefined(c)?n.fallback[R]:c,isEqual=(e,t)=>{for(let n in M)if("data"===n){if(!o(e[n],t[n])&&(!isUndefined(e[n])||!o(K,t[n])))return!1}else if(t[n]!==e[n])return!1;return!0},P=(0,a.useMemo)(()=>{let e=!!R&&!!t&&(isUndefined(d)?!getConfig().isPaused()&&!l&&(!!isUndefined(f)||f):d),getSelectedCache=t=>{let n=mergeObjects(t);return(delete n._k,e)?{isValidating:!0,isLoading:!0,...n}:n},n=V(),r=I(),a=getSelectedCache(n),i=n===r?a:getSelectedCache(r),s=a;return[()=>{let e=getSelectedCache(V()),t=isEqual(e,s);return t?(s.data=e.data,s.isLoading=e.isLoading,s.isValidating=e.isValidating,s.error=e.error,s):(s=e,e)},()=>i]},[r,R]),q=(0,i.useSyncExternalStore)((0,a.useCallback)(e=>L(R,(t,n)=>{isEqual(n,t)||e()}),[r,R]),P[0],P[1]),z=!x.current,H=y[R]&&y[R].length>0,W=q.data,Z=isUndefined(W)?N:W,B=q.error,J=(0,a.useRef)(Z),K=h?isUndefined(W)?J.current:W:Z,X=(!H||!!isUndefined(B))&&(z&&!isUndefined(d)?d:!getConfig().isPaused()&&(l?!isUndefined(Z)&&f:isUndefined(Z)||f)),$=!!(R&&t&&z&&X),G=isUndefined(q.isValidating)?$:q.isValidating,Q=isUndefined(q.isLoading)?$:q.isLoading,Y=(0,a.useCallback)(async e=>{let t,r;let a=U.current;if(!R||!a||O.current||getConfig().isPaused())return!1;let i=!0,l=e||{},c=!v[R]||!l.dedupe,callbackSafeguard=()=>w?!O.current&&R===T.current&&x.current:R===T.current,u={isValidating:!1,isLoading:!1},finishRequestAndUpdateState=()=>{F(u)},cleanupState=()=>{let e=v[R];e&&e[1]===r&&delete v[R]},d={isValidating:!0};isUndefined(V().data)&&(d.isLoading=!0);try{if(c&&(F(d),n.loadingTimeout&&isUndefined(V().data)&&setTimeout(()=>{i&&callbackSafeguard()&&getConfig().onLoadingSlow(R,n)},n.loadingTimeout),v[R]=[a(S),getTimestamp()]),[t,r]=v[R],t=await t,c&&setTimeout(cleanupState,n.dedupingInterval),!v[R]||v[R][1]!==r)return c&&callbackSafeguard()&&getConfig().onDiscarded(R),!1;u.error=s;let e=b[R];if(!isUndefined(e)&&(r<=e[0]||r<=e[1]||0===e[1]))return finishRequestAndUpdateState(),c&&callbackSafeguard()&&getConfig().onDiscarded(R),!1;let l=V().data;u.data=o(l,t)?l:t,c&&callbackSafeguard()&&getConfig().onSuccess(t,R,n)}catch(n){cleanupState();let e=getConfig(),{shouldRetryOnError:t}=e;!e.isPaused()&&(u.error=n,c&&callbackSafeguard()&&(e.onError(n,R,e),(!0===t||isFunction(t)&&t(n))&&isActive()&&e.onErrorRetry(n,R,e,e=>{let t=y[R];t&&t[0]&&t[0](k.ERROR_REVALIDATE_EVENT,e)},{retryCount:(l.retryCount||0)+1,dedupe:!0})))}return i=!1,finishRequestAndUpdateState(),!0},[R,r]),ee=(0,a.useCallback)((...e)=>internalMutate(r,T.current,...e),[]);if(E(()=>{U.current=t,A.current=n,isUndefined(W)||(J.current=W)}),E(()=>{if(!R)return;let e=Y.bind(s,j),t=0,n=subscribeCallback(R,y,(n,r={})=>{if(n==k.FOCUS_EVENT){let n=Date.now();getConfig().revalidateOnFocus&&n>t&&isActive()&&(t=n+getConfig().focusThrottleInterval,e())}else if(n==k.RECONNECT_EVENT)getConfig().revalidateOnReconnect&&isActive()&&e();else if(n==k.MUTATE_EVENT)return Y();else if(n==k.ERROR_REVALIDATE_EVENT)return Y(r)});return O.current=!1,T.current=R,x.current=!0,F({_k:S}),X&&(isUndefined(Z)||_?e():rAF(e)),()=>{O.current=!0,n()}},[R]),E(()=>{let e;function next(){let t=isFunction(g)?g(V().data):g;t&&-1!==e&&(e=setTimeout(execute,t))}function execute(){!V().error&&(p||getConfig().isVisible())&&(m||getConfig().isOnline())?Y(j).then(next):next()}return next(),()=>{e&&(clearTimeout(e),e=-1)}},[g,p,m,R]),(0,a.useDebugValue)(K),l&&isUndefined(Z)&&R){if(!w&&_)throw Error("Fallback data is required when using suspense in SSR.");U.current=t,A.current=n,O.current=!1;let e=C[R];if(!isUndefined(e)){let t=ee(e);D(t)}if(isUndefined(B)){let e=Y(j);isUndefined(K)||(e.status="fulfilled",e.value=!0),D(e)}else throw B}return{mutate:ee,get data(){return M.data=!0,K},get error(){return M.error=!0,B},get isValidating(){return M.isValidating=!0,G},get isLoading(){return M.isLoading=!0,Q}}},function(...e){let t=useSWRConfig(),[n,a,i]=normalize(e),s=mergeConfigs(t,i),o=r,{use:l}=s,c=(l||[]).concat(F);for(let e=c.length;e--;)o=c[e](o);return o(n,a||s.fetcher||null,s)});var I={code:"0",name:"text",parse:e=>{if("string"!=typeof e)throw Error('"text" parts expect a string value.');return{type:"text",value:e}}},M={code:"1",name:"function_call",parse:e=>{if(null==e||"object"!=typeof e||!("function_call"in e)||"object"!=typeof e.function_call||null==e.function_call||!("name"in e.function_call)||!("arguments"in e.function_call)||"string"!=typeof e.function_call.name||"string"!=typeof e.function_call.arguments)throw Error('"function_call" parts expect an object with a "function_call" property.');return{type:"function_call",value:e}}},N={code:"2",name:"data",parse:e=>{if(!Array.isArray(e))throw Error('"data" parts expect an array value.');return{type:"data",value:e}}},P={code:"3",name:"error",parse:e=>{if("string"!=typeof e)throw Error('"error" parts expect a string value.');return{type:"error",value:e}}},q={code:"4",name:"assistant_message",parse:e=>{if(null==e||"object"!=typeof e||!("id"in e)||!("role"in e)||!("content"in e)||"string"!=typeof e.id||"string"!=typeof e.role||"assistant"!==e.role||!Array.isArray(e.content)||!e.content.every(e=>null!=e&&"object"==typeof e&&"type"in e&&"text"===e.type&&"text"in e&&null!=e.text&&"object"==typeof e.text&&"value"in e.text&&"string"==typeof e.text.value))throw Error('"assistant_message" parts expect an object with an "id", "role", and "content" property.');return{type:"assistant_message",value:e}}},z={code:"5",name:"assistant_control_data",parse:e=>{if(null==e||"object"!=typeof e||!("threadId"in e)||!("messageId"in e)||"string"!=typeof e.threadId||"string"!=typeof e.messageId)throw Error('"assistant_control_data" parts expect an object with a "threadId" and "messageId" property.');return{type:"assistant_control_data",value:{threadId:e.threadId,messageId:e.messageId}}}},H={code:"6",name:"data_message",parse:e=>{if(null==e||"object"!=typeof e||!("role"in e)||!("data"in e)||"string"!=typeof e.role||"data"!==e.role)throw Error('"data_message" parts expect an object with a "role" and "data" property.');return{type:"data_message",value:e}}},W={[I.code]:I,[M.code]:M,[N.code]:N,[P.code]:P,[q.code]:q,[z.code]:z,[H.code]:H};I.name,I.code,M.name,M.code,N.name,N.code,P.name,P.code,q.name,q.code,z.name,z.code,H.name,H.code;var Z=[I,M,N,P,q,z,H].map(e=>e.code),parseStreamPart=e=>{let t=e.indexOf(":");if(-1===t)throw Error("Failed to parse stream string. No separator found.");let n=e.slice(0,t);if(!Z.includes(n))throw Error(`Failed to parse stream string. Invalid code ${n}.`);let r=e.slice(t+1),a=JSON.parse(r);return W[n].parse(a)};async function*readDataStream(e,{isAborted:t}={}){let n=new TextDecoder,r=[],a=0;for(;;){let{value:i}=await e.read();if(i&&(r.push(i),a+=i.length,10!==i[i.length-1]))continue;if(0===r.length)break;let s=function(e,t){let n=new Uint8Array(t),r=0;for(let t of e)n.set(t,r),r+=t.length;return e.length=0,n}(r,a);a=0;let o=n.decode(s,{stream:!0}).split("\n").filter(e=>""!==e).map(parseStreamPart);for(let e of o)yield e;if(null==t?void 0:t()){e.cancel();break}}}var B=((e,t=21)=>(n=t)=>{let r="",a=n;for(;a--;)r+=e[Math.random()*e.length|0];return r})("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",7);async function parseComplexResponse({reader:e,abortControllerRef:t,update:n,onFinish:r,generateId:a=B,getCurrentDate:i=()=>new Date}){let s=i(),o={data:[]};for await(let{type:r,value:i}of readDataStream(e,{isAborted:()=>(null==t?void 0:t.current)===null})){"text"===r&&(o.text?o.text={...o.text,content:(o.text.content||"")+i}:o.text={id:a(),role:"assistant",content:i,createdAt:s});let e=null;"function_call"===r&&(o.function_call={id:a(),role:"assistant",content:"",function_call:i.function_call,name:i.function_call.name,createdAt:s},e=o.function_call),"data"===r&&o.data.push(...i);let t=o.text,l=[e,t].filter(Boolean);n(l,[...o.data])}return null==r||r(o),{messages:[o.text,o.function_call].filter(Boolean),data:o.data}}async function callChatApi({api:e,messages:t,body:n,credentials:r,headers:a,abortController:i,appendMessage:s,restoreMessagesOnFailure:o,onResponse:l,onUpdate:c,onFinish:u,generateId:d}){var f;let g=await fetch(e,{method:"POST",body:JSON.stringify({messages:t,...n}),headers:{"Content-Type":"application/json",...a},signal:null==(f=null==i?void 0:i())?void 0:f.signal,credentials:r}).catch(e=>{throw o(),e});if(l)try{await l(g)}catch(e){throw e}if(!g.ok)throw o(),Error(await g.text()||"Failed to fetch the chat response.");if(!g.body)throw Error("The response body is empty.");let p=g.body.getReader(),m="true"===g.headers.get("X-Experimental-Stream-Data");if(m)return await parseComplexResponse({reader:p,abortControllerRef:null!=i?{current:i()}:void 0,update:c,onFinish(e){u&&null!=e.text&&u(e.text)},generateId:d});{let e=new Date,t=function(e){let t=new TextDecoder;return e?function(e){let n=t.decode(e,{stream:!0}).split("\n").filter(e=>""!==e);return n.map(parseStreamPart).filter(Boolean)}:function(e){return e?t.decode(e,{stream:!0}):""}}(!1),n="",r=d(),a={id:r,createdAt:e,content:"",role:"assistant"};for(;;){let{done:e,value:r}=await p.read();if(e)break;if((n+=t(r)).startsWith('{"function_call":')?a.function_call=n:a.content=n,s({...a}),(null==i?void 0:i())===null){p.cancel();break}}if(n.startsWith('{"function_call":')){let e=JSON.parse(n).function_call;a.function_call=e,s({...a})}return u&&u(a),a}}async function processChatStream({getStreamedResponse:e,experimental_onFunctionCall:t,updateChatRequest:n,getCurrentMessages:r}){for(;;){let a=await e();if("messages"in a){let e=!1;for(let i of a.messages)if(void 0!==i.function_call&&"string"!=typeof i.function_call&&(e=!0,t)){let a=i.function_call,s=await t(r(),a);if(void 0===s){e=!1;break}n(s)}if(!e)break}else{if(void 0===a.function_call||"string"==typeof a.function_call)break;if(t){let e=a.function_call,i=await t(r(),e);if(void 0===i)break;n(i)}}}}var getStreamedResponse=async(e,t,n,r,a,i,s,o,l,c,u,d)=>{var f,g;let p=s.current;n(t.messages,!1);let m=d?t.messages:t.messages.map(({role:e,content:t,name:n,function_call:r})=>({role:e,content:t,...void 0!==n&&{name:n},...void 0!==r&&{function_call:r}}));if("string"!=typeof e){let r=l(),a=new Date,i={id:r,createdAt:a,content:"",role:"assistant"};async function readRow(e){let{content:r,ui:a,next:s}=await e;i.content=r,i.ui=await a,n([...t.messages,{...i}],!1),s&&await readRow(s)}try{let n=e({messages:m,data:t.data});await readRow(n)}catch(e){throw n(p,!1),e}return c&&c(i),i}return await callChatApi({api:e,messages:m,body:{data:t.data,...i.current.body,...null==(f=t.options)?void 0:f.body,...void 0!==t.functions&&{functions:t.functions},...void 0!==t.function_call&&{function_call:t.function_call}},credentials:i.current.credentials,headers:{...i.current.headers,...null==(g=t.options)?void 0:g.headers},abortController:()=>o.current,appendMessage(e){n([...t.messages,e],!1)},restoreMessagesOnFailure(){n(p,!1)},onResponse:u,onUpdate(e,i){n([...t.messages,...e],!1),r([...a||[],...i||[]],!1)},onFinish:c,generateId:l})};function useChat({api:e="/api/chat",id:t,initialMessages:n,initialInput:r="",sendExtraMessageFields:i,experimental_onFunctionCall:s,onResponse:o,onFinish:l,onError:c,credentials:u,headers:d,body:f,generateId:g=B}={}){let p=(0,a.useId)(),m=null!=t?t:p,h="string"==typeof e?[e,m]:m,[y]=(0,a.useState)([]),{data:b,mutate:v}=L([h,"messages"],null,{fallbackData:null!=n?n:y}),{data:w=!1,mutate:_}=L([h,"loading"],null),{data:E,mutate:C}=L([h,"streamData"],null),{data:R,mutate:S}=L([h,"error"],null),k=(0,a.useRef)(b||[]);(0,a.useEffect)(()=>{k.current=b||[]},[b]);let x=(0,a.useRef)(null),O=(0,a.useRef)({credentials:u,headers:d,body:f});(0,a.useEffect)(()=>{O.current={credentials:u,headers:d,body:f}},[u,d,f]);let T=(0,a.useCallback)(async t=>{try{_(!0),S(void 0);let n=new AbortController;x.current=n,await processChatStream({getStreamedResponse:()=>getStreamedResponse(e,t,v,C,E,O,k,x,g,l,o,i),experimental_onFunctionCall:s,updateChatRequest:e=>{t=e},getCurrentMessages:()=>k.current}),x.current=null}catch(e){if("AbortError"===e.name)return x.current=null,null;c&&e instanceof Error&&c(e),S(e)}finally{_(!1)}},[v,_,e,O,o,l,c,S,C,E,i,s,k,x,g]),U=(0,a.useCallback)(async(e,{options:t,functions:n,function_call:r,data:a}={})=>{e.id||(e.id=g());let i={messages:k.current.concat(e),options:t,data:a,...void 0!==n&&{functions:n},...void 0!==r&&{function_call:r}};return T(i)},[T,g]),A=(0,a.useCallback)(async({options:e,functions:t,function_call:n}={})=>{if(0===k.current.length)return null;let r=k.current[k.current.length-1];if("assistant"===r.role){let r={messages:k.current.slice(0,-1),options:e,...void 0!==t&&{functions:t},...void 0!==n&&{function_call:n}};return T(r)}let a={messages:k.current,options:e,...void 0!==t&&{functions:t},...void 0!==n&&{function_call:n}};return T(a)},[T]),V=(0,a.useCallback)(()=>{x.current&&(x.current.abort(),x.current=null)},[]),F=(0,a.useCallback)(e=>{v(e,!1),k.current=e},[v]),[D,j]=(0,a.useState)(r),I=(0,a.useCallback)((e,t={},n)=>{n&&(O.current={...O.current,...n}),e.preventDefault(),D&&(U({content:D,role:"user",createdAt:new Date},t),j(""))},[D,U]);return{messages:b||[],error:R,append:U,reload:A,stop:V,setMessages:F,input:D,setInput:j,handleInputChange:e=>{j(e.target.value)},handleSubmit:I,isLoading:w,data:E}}}}]);