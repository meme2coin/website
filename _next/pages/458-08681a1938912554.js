(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[458],{55287:function(e,t){"use strict";t.Z={src:"/_next/static/media/shooting.9382dc0f.gif",height:110,width:440,blurWidth:0,blurHeight:0}},35007:function(e,t){"use strict";t.Z={src:"/_next/static/media/star_1.00d4e681.png",height:35,width:35,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEUAbsUJfs8Qg9IAeMsAdscrmOMrl+Gsoc1JAAAAB3RSTlMBoxdsY+fjrQYiFQAAAAlwSFlzAAA3XQAAN10BGYBGXQAAAC1JREFUeJxjYGBgYGRkgAAmJiiDmRlEMjIxs7KyMDEyMDKxsLKBGHApZMVg7QAKXQBJo3uhHQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},11525:function(e,t){"use strict";t.Z={src:"/_next/static/media/star_2.f45b48ce.png",height:55,width:55,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEUAj+kFfc4NgtMAbK8Ifc1MaXEKfs48nuARhts7nd+aANmcAAAACnRSTlMCNYcDQgBJ9Hz0VP68tQAAAAlwSFlzAAA3XQAAN10BGYBGXQAAADRJREFUeJxFy7ENwEAMw0DJMu3P/gsHnybtERRiGiGFNokQda6Ma7c8atc+5f5Tgk105dtfIH0A5PRld1oAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},3675:function(e,t,n){"use strict";n.d(t,{w:function(){return H}});var r=n(52322),s=n(2784),i=n(96577),o=n.n(i),l=n(11919),c=n(53738),a=n(21687),u=n(65239),d=n(74045),h=n(85535),f=n(55287),m=n(35007),A=n(11525),g=n(66390),p=n(64435),x=n(72474),v=n(27730),w=n(56781),y=n(52354),E=n.n(y);let b=e=>Math.floor(Math.random()*e),R=(e,t,n)=>{let r="";for(let s=0;s<e;s++)r+="\n".concat(b(1.3*t),"px\n").concat(b(1.3*n),"px #FFF5, ");return r.slice(0,-2)},C=()=>[-1,1][2*Math.random()|0],M=(e,t,n)=>{let r=(Math.random()*(t-e)+e).toFixed(n);return parseFloat(r)},j=()=>{let[e,t]=(0,s.useState)(Date.now());return(0,s.useEffect)(()=>{let e=0,n=setTimeout(()=>{e=setInterval(()=>t(Date.now()),1e3)},1e3*Math.random());return()=>{n&&clearInterval(n),e&&clearInterval(e)}},[]),(0,r.jsxs)(l.k,{position:"relative",justifyContent:"center",alignItems:"center",width:"50px",height:"50px",top:"50%",left:"50%",style:{pointerEvents:"none",userSelect:"none"},children:[(0,r.jsx)(o(),{className:E().noAntialias,style:{display:e%2==0?"none":"block"},src:m.Z.src,width:11,height:11,alt:""}),(0,r.jsx)(o(),{className:E().noAntialias,style:{display:e%2==0?"block":"none"},src:A.Z.src,width:7,height:7,alt:""})]})},k=(e,t,n)=>{let s=[];for(let i=0;i<e;i++){let e=50*Math.random()*C(),o=50*Math.random()*C();s.push((0,r.jsx)(p.Z,{position:"absolute",style:{opacity:M(.8,1,1),scale:M(1,2.5,1),x:t/140*e,y:n/100*o},children:(0,r.jsx)(j,{})},i))}return s},T=!1,Y=(e,t,n,r)=>{var s;let i=document.querySelector("#mv-stars");i&&(null===(s=i.parentElement)||void 0===s||s.removeChild(i));let o=R(n?250:700,e,t),l=R(n?120:350,e,t),c=R(n?75:150,e,t),a=document.createElement("style");document.head.appendChild(a);let u="\n@keyframes stars-drift {\n  from {\n    transform: translate(0px, 0px);\n  }\n  to {\n    transform: translate(".concat(e/2,"px, -").concat(t/2,"px);\n  }\n}\n\n.mv-stars {\n  position: absolute;\n  top: 0;\n  left: -40%;\n  background: transparent;\n  user-select: none;\n  pointer-events: none;\n}\n.mv-stars-small {\n  width: 1px;\n  height: 1px;\n  box-shadow: ").concat(o,";\n  animation: ").concat(r?"none":"stars-drift 50s linear infinite",";\n}\n.mv-stars-medium {\n  width: 2px;\n  height: 2px;\n  box-shadow: ").concat(l,";\n  animation: ").concat(r?"none":"stars-drift 100s linear infinite",";\n}\n.mv-stars-large {\n  width: 3px;\n  height: 3px;\n  box-shadow: ").concat(c,";\n  animation: ").concat(r?"none":"stars-drift 150s linear infinite",";\n}\n\n    ");a.type="text/css",a.appendChild(document.createTextNode(u)),a.id="mv-stars"},H=s.memo(e=>{let{shootingOpacity1:t,shootingOpacity2:n,shootingOpacity3:i,shootingMotion:l,withShootingStars:m=!0,showBlinkingStars:A=!0,reduceStar:y=!1,position:E}=e,b=null!=t?t:(0,a.c)(1),R=null!=n?n:(0,a.c)(1),C=null!=i?i:(0,a.c)(1),M=null!=l?l:(0,a.c)(0),j=(0,h.q0)(e=>e.vh),H=(0,h.q0)(e=>e.vw),S=100*Math.max(j,7.68),L=140*Math.max(H,12.8);T||(Y(L,S,y),T=!0);let[I,N]=(0,s.useState)(()=>k(20,L,S)),Z=(0,v.y)(()=>{N(k(20,L,S)),Y(L,S,y)},500);(0,w.A)(()=>{Z()},[j,H]);let[B,U]=(0,s.useState)(0);return(0,x.Y)(()=>{U(e=>e+1)},3e4),(0,r.jsxs)(p.Z,{position:null!=E?E:"absolute",display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%",overflow:"hidden",pointerEvents:"none",children:[(0,r.jsxs)(u.M,{children:[(0,r.jsx)(p.Z,{className:"mv-stars mv-stars-small",...(0,g.p)({duration:5})},"a".concat(B)),(0,r.jsx)(p.Z,{className:"mv-stars mv-stars-medium",...(0,g.p)({duration:5})},"b".concat(B)),(0,r.jsx)(p.Z,{className:"mv-stars mv-stars-large",...(0,g.p)({duration:5})},"c".concat(B))]}),A&&I,(0,r.jsx)(p.Z,{hidden:!m,position:"absolute",style:{opacity:b,x:(0,d.H)(M,e=>30*j-e*j*7),y:(0,d.H)(M,e=>-30*j+e*j*3)},width:"96px",height:"24px",zIndex:1,children:(0,r.jsx)(c.xu,{width:"100%",height:"100%",transform:"rotate(330deg)",children:(0,r.jsx)(o(),{src:f.Z.src,fill:!0,alt:"Shooting Meme",style:{pointerEvents:"none",userSelect:"none"}})})}),(0,r.jsx)(p.Z,{hidden:!m,position:"absolute",style:{opacity:R,x:(0,d.H)(M,e=>30*j-e*j*14),y:(0,d.H)(M,e=>-10*j+e*j*6)},width:"96px",height:"24px",zIndex:1,children:(0,r.jsx)(c.xu,{width:"100%",height:"100%",transform:"rotate(330deg)",children:(0,r.jsx)(o(),{src:f.Z.src,fill:!0,alt:"Shooting Meme",style:{pointerEvents:"none",userSelect:"none"}})})}),(0,r.jsx)(p.Z,{hidden:!m,position:"absolute",style:{opacity:C,x:(0,d.H)(M,e=>-25*j-e*j*18),y:(0,d.H)(M,e=>-22*j+e*j*5)},width:"96px",height:"24px",zIndex:1,children:(0,r.jsx)(c.xu,{width:"100%",height:"100%",transform:"rotate(330deg)",children:(0,r.jsx)(o(),{src:f.Z.src,fill:!0,alt:"Shooting Meme",style:{pointerEvents:"none",userSelect:"none"}})})})]})},()=>!0)},72474:function(e,t,n){"use strict";n.d(t,{Y:function(){return i}});var r=n(2784),s=n(62615);function i(e,t){let n=(0,r.useRef)(e);(0,s.L)(()=>{n.current=e},[e]),(0,r.useEffect)(()=>{if(!t&&0!==t)return;let e=setInterval(()=>n.current(),t);return()=>clearInterval(e)},[t])}},62615:function(e,t,n){"use strict";n.d(t,{L:function(){return s}});var r=n(2784);let s=r.useLayoutEffect},66567:function(e,t,n){"use strict";n.d(t,{hH:function(){return w},kk:function(){return g},c8:function(){return y}});var r=n(52322),s=n(2784),i=n(21687),o=n(54179),l=n(52749),c=n(40226);function a(e,t){if(!t){let t={x:e.clientX,y:e.clientY},n={left:0,top:0,width:window.innerWidth,height:window.innerHeight};return{x:t.x-n.left,y:t.y-n.top,width:n.width,height:n.height,relativeToCenterX:(t.x-n.left-n.width/2)/(n.width/2),relativeToCenterY:(t.y-n.top-n.height/2)/(n.height/2)}}let n={x:e.pageX,y:e.pageY},r={left:t.offsetLeft,top:t.offsetTop,width:t.clientWidth,height:t.clientHeight},s=t.offsetParent;for(;s;)r.left+=s.offsetLeft,r.top+=s.offsetTop,s=s.offsetParent;return{x:n.x-r.left,y:n.y-r.top,width:r.width,height:r.height,relativeToCenterX:(n.x-r.left-r.width/2)/(r.width/2),relativeToCenterY:(n.y-r.top-r.height/2)/(r.height/2)}}var u=n(75526),d=n(62615);let h=e=>{let t=s.useRef(e);return s.useEffect(()=>{t.current=e}),t},f="undefined"!=typeof performance?performance:Date,m=()=>f.now();function A(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=h(e),i=1e3/t,o=s.useRef(0),l=s.useRef(),c=()=>l.current&&clearTimeout(l.current),a=[t,n,r];return s.useEffect(()=>()=>{o.current=0,c()},a),s.useCallback(function(){let e=arguments,t=m(),s=()=>{o.current=t,c(),r.current.apply(null,e)},a=o.current;if(n&&0===a)return s();if(t-a>i){if(a>0)return s();o.current=t}c(),l.current=setTimeout(()=>{s(),o.current=0},i)},a)}let g=function(){let{useBody:e=!1,throttle:t=0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[n,r]=(0,s.useState)({x:0,y:0,width:0,height:0,relativeToCenterX:0,relativeToCenterY:0}),i=(0,s.useRef)(),o=(0,s.useRef)(),l=A(e=>{o.current=e,r(a(e,null==i?void 0:i.current))},t||99999),c=(0,s.useCallback)(()=>{o.current&&r(a(o.current,null==i?void 0:i.current))},[r]),u=(0,s.useRef)(l),h=(0,s.useRef)(c);if((0,d.L)(()=>{u.current=l},[l]),e){let e=e=>{u.current(e)},t=()=>{h.current()};(0,s.useEffect)(()=>(document.addEventListener("mousemove",e),document.addEventListener("scroll",t),()=>{document.removeEventListener("mousemove",e),document.removeEventListener("scroll",t)}))}return{mousePosition:n,containerRef:i,events:{onMouseMove:l}}},p=function(){let{useBody:e=!1,throttle:t=0,callback:n,spingOptions:r={stiffness:100,damping:30,restDelta:.001}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=(0,s.useRef)(),h=(0,s.useRef)(),f=(0,s.useRef)(n),m=(0,i.c)(0),g=(0,i.c)(0),p=(0,i.c)(0),x=(0,o.q)(m,r),v=(0,o.q)(g,r),w=(0,o.q)(p,r),y=(0,s.useCallback)(()=>{var e;null===(e=f.current)||void 0===e||e.call(f,{relativeToCenterX:x.get(),relativeToCenterY:v.get(),scrollY:w.get()})},[]);(0,l.W)(x,"change",y),(0,l.W)(v,"change",y),(0,l.W)(w,"change",y);let E=A(e=>{h.current=e;let{relativeToCenterX:t,relativeToCenterY:n}=a(e,null==c?void 0:c.current);m.set(t),g.set(n)},t||99999),b=(0,s.useCallback)(e=>{if(!h.current)return;let{relativeToCenterX:t,relativeToCenterY:n}=a(h.current,null==c?void 0:c.current);m.set(t),g.set(n),p.set(document.documentElement.scrollTop)},[]),R=(0,s.useRef)(E),C=(0,s.useRef)(b);return(0,d.L)(()=>{R.current=E},[E]),(0,d.L)(()=>{f.current=n},[n]),e&&(0,u.q)(()=>{let e=e=>{R.current(e)},t=e=>{C.current(e)};return document.addEventListener("mousemove",e),document.addEventListener("scroll",t),()=>{document.removeEventListener("mousemove",e),document.removeEventListener("scroll",t)}}),{containerRef:c,events:{onMouseMove:E},relX:x,relY:v,scrollY:w}},x=s.createContext({register:()=>{},motionValues:{relX:new c.H,relY:new c.H,scrollY:new c.H}}),v=0,w=s.memo(e=>{let{children:t}=e,n=(0,s.useRef)({}),i=p({useBody:!0,throttle:30,callback:(0,s.useCallback)(e=>Object.values(n.current).forEach(t=>t(e)),[])}),o=(0,s.useCallback)(e=>{let[t]=(0,s.useState)(()=>v++);(0,d.L)(()=>{n.current[t]=e},[e]),(0,u.q)(()=>()=>{delete n.current[t]})},[]);return(0,r.jsx)(x.Provider,{value:{register:o,motionValues:i},children:t})}),y=(e,t)=>{let{register:n,motionValues:r}=(0,s.useContext)(x);return e&&n((0,s.useCallback)(e,t||[])),r}},10301:function(e,t,n){"use strict";n.d(t,{K4:function(){return c},VC:function(){return u}});var r=n(52322),s=n(99426),i=n(40226),o=n(21687),l=n(2784);let c=()=>{let{scrollY:e}=(0,l.useContext)(a);return e},a=l.createContext({scrollY:new i.H}),u=l.memo(e=>{let{children:t}=e,n=(0,o.c)(document.documentElement.scrollTop);return(0,s.Y)(()=>{let e=document.documentElement.scrollTop,t=n.get();t!==e&&n.set(480>Math.abs(t-e)?e:t+(t>e?-480:480))},30),(0,r.jsx)(a.Provider,{value:{scrollY:n},children:t})})},27730:function(e,t,n){"use strict";n.d(t,{y:function(){return s}});var r=n(2784);function s(e,t){let n=(0,r.useRef)(),s=(0,r.useRef)(),i=(0,r.useRef)();function o(){i.current&&clearTimeout(i.current)}return n.current=e,(0,r.useEffect)(()=>o,[]),function(){for(var n=arguments.length,r=Array(n),l=0;l<n;l++)r[l]=arguments[l];s.current=r,o(),i.current=setTimeout(()=>{s.current&&e(...s.current)},t)}}},52354:function(e){e.exports={noAntialias:"styles_noAntialias__ljST1"}}}]);