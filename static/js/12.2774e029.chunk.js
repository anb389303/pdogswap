(this["webpackJsonpinterface-v2"]=this["webpackJsonpinterface-v2"]||[]).push([[12],{2769:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(1);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}var c=function(e){var t=Object(n.useRef)(e);return t.current=e,t},i=function(e){var t=function(e){var t=void 0===e?{}:e,r=t.root,i=t.rootMargin,o=t.threshold,s=void 0===o?0:o,l=t.trackVisibility,d=t.delay,b=t.unobserveOnEnter,u=t.onChange,j=t.onEnter,h=t.onLeave,O=Object(n.useState)({inView:!1,scrollDirection:{}}),x=O[0],p=O[1],f=Object(n.useRef)(!1),y=Object(n.useRef)({}),g=Object(n.useRef)(),m=Object(n.useRef)(!1),v=c(u),w=c(j),k=c(h),C=Object(n.useRef)(),S=Object(n.useCallback)((function(){g.current&&(g.current.disconnect(),y.current={})}),[]),I=Object(n.useCallback)((function(e){e&&e!==C.current&&(S(),C.current=e),g.current&&C.current&&g.current.observe(C.current)}),[S]),E=Object(n.useCallback)((function(){if(C.current){var e=C.current.getBoundingClientRect(),t=e.x,r=e.y;y.current={x:t,y:r}}}),[C]);return Object(n.useEffect)((function(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window?(g.current=new IntersectionObserver((function(e){var t=e[0],r=t.intersectionRatio,n=t.isIntersecting,c=t.boundingClientRect,i=c.x,o=c.y,d=t.isVisible,u={},j=Array.isArray(s)?Math.min.apply(Math,s):s,h=void 0!==n?n:r>0;h=j>0?r>=j:h,i<y.current.x&&(u.horizontal="left"),i>y.current.x&&(u.horizontal="right"),y.current.x=i,o<y.current.y&&(u.vertical="up"),o>y.current.y&&(u.vertical="down"),y.current.y=o;var O={entry:t,scrollDirection:u,observe:I,unobserve:S};l&&(void 0!==d||m.current||(console.warn("\ud83d\udca1 react-cool-inview: the browser doesn't support Intersection Observer v2, fallback to v1 behavior"),m.current=!0),void 0!==d&&(h=d)),h&&!f.current&&(b&&S(),w.current&&w.current(O)),!h&&f.current&&k.current&&k.current(O),v.current&&v.current(a({},O,{inView:h})),p({inView:h,scrollDirection:u,entry:t}),f.current=h}),{root:r,rootMargin:i,threshold:s,trackVisibility:l,delay:d}),I(),function(){return S()}):(console.error("\ud83d\udca1 react-cool-inview: the browser doesn't support Intersection Observer, please install polyfill: https://github.com/wellyshen/react-cool-inview#intersection-observer-polyfill"),function(){return null})}),[b,r,i,JSON.stringify(s),l,d,I,S]),a({},x,{observe:I,unobserve:S,updatePosition:E})}({onChange:function(){e()},rootMargin:"100px 0px"});return{loadMoreRef:t.observe}}},2808:function(e,t,r){"use strict";var n=r(1),a=r.n(n),c=r(17),i=r.n(c);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=Object(n.forwardRef)((function(e,t){var r=e.color,n=void 0===r?"currentColor":r,c=e.size,i=void 0===c?24:c,l=s(e,["color","size"]);return a.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),a.a.createElement("line",{x1:"12",y1:"19",x2:"12",y2:"5"}),a.a.createElement("polyline",{points:"5 12 12 5 19 12"}))}));l.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},l.displayName="ArrowUp",t.a=l},2923:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return K}));var n=r(22),a=r(1),c=r(2614),i=r(138),o=r(2616),s=r(2657),l=r(2638),d=r(2617),b=r.p+"static/media/DragonBg1.42b94cd0.svg",u=r.p+"static/media/DragonBg2.8432d4f2.svg",j=r.p+"static/media/DragonLairMask.09eec828.svg",h=r(16),O=["title","titleId"];function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},x.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function f(e,t){var r=e.title,n=e.titleId,c=p(e,O);return a.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",width:40,height:40,viewBox:"0 0 40 40",ref:t,"aria-labelledby":n},c),r?a.createElement("title",{id:n},r):null,a.createElement("g",{"data-name":"Group 20695",transform:"translate(-169 -121)"},a.createElement("circle",{"data-name":"Ellipse 920",cx:20,cy:20,r:20,transform:"translate(169 121)",style:{fill:"#282d3d"}}),a.createElement("g",{"data-name":"Layer 2"},a.createElement("g",{"data-name":"invisible box"},a.createElement("path",{"data-name":"Rectangle 20003",style:{fill:"none"},d:"M0 0h24v24H0z",transform:"translate(177 129)"})),a.createElement("g",{"data-name":"Layer 6"},a.createElement("g",{"data-name":"Group 20376"},a.createElement("path",{"data-name":"Path 11781",d:"M18 6h-.3l-15 4.4a1 1 0 0 0-.7 1v4.5a1.1 1.1 0 0 0 .7 1l2.35.65.8 5.15A1.45 1.45 0 0 0 7.3 24h2.25a1.6 1.6 0 0 0 1.1-.5 1.65 1.65 0 0 0 .3-1.3l-.55-3.05 7.3 2.15h.3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zM8.9 22H7.749l-.6-3.8 1.05.3zm8.1-3L4 15.15v-3l13-3.8z",transform:"translate(176.001 126)",style:{fill:"#fdd835"}}),a.createElement("path",{"data-name":"Path 11782",d:"M38.992 12.294a.75.75 0 0 0 .45-.1l2-1a1.006 1.006 0 1 0-.9-1.8l-2 1a1 1 0 0 0-.45 1.35 1.05 1.05 0 0 0 .9.55z",transform:"translate(158.008 124.356)",style:{fill:"#fdd835"}}),a.createElement("path",{"data-name":"Path 11783",d:"m41.442 28.5-2-1a1.05 1.05 0 0 0-1.35.4 1 1 0 0 0 .45 1.35l2 1a.75.75 0 0 0 .45.1 1.05 1.05 0 0 0 .9-.55.95.95 0 0 0-.45-1.3z",transform:"translate(158.008 115.303)",style:{fill:"#fdd835"}}),a.createElement("path",{"data-name":"Path 11784",d:"M39 21.3h2a1 1 0 0 0 0-2h-2a1 1 0 0 0 0 2z",transform:"translate(158 119.35)",style:{fill:"#fdd835"}}))))))}var y=a.forwardRef(f),g=(r.p,r(90)),m=r(0),v=function(){var e=Object(i.a)().palette,t=Object(a.useState)(!0),r=Object(h.a)(t,2),n=r[0],c=r[1];return Object(m.jsx)(m.Fragment,{children:n&&Object(m.jsxs)(s.a,{mb:3,display:"flex",alignItems:"center",width:"100%",bgcolor:e.secondary.dark,padding:"16px 24px 16px 12px",borderRadius:12,children:[Object(m.jsx)(y,{}),Object(m.jsx)(s.a,{mx:2,width:"calc(100% - 96px)",children:Object(m.jsx)(d.a,{children:"As of May 2022, you can stake QUICK(NEW) in Syrup Pools. Note that there are some Syrup Pools that will still accept QUICK(OLD) for staking, until they run out of rewards"})}),Object(m.jsx)(g.a,{onClick:function(){return c(!1)},style:{cursor:"pointer"}})]})})},w=r(116),k=r(248),C=r(941),S=r(4),I=r(92),E=Object(c.a)((function(e){var t=e.palette;return{stakeButton:{width:"100%",height:48,borderRadius:10,border:"1px solid ".concat(t.primary.main),display:"flex",justifyContent:"center",alignItems:"center",marginTop:24,cursor:"pointer","& p":{fontWeight:600,color:"#ebecf2"}}}})),R=function(){var e=E(),t=Object(i.a)().palette,r=Object(I.b)(Object(S.rb)("QUICK")),n=Object(I.b)(Object(S.rb)("DQUICK")),c=n/r,o=r/n,l=Object(a.useState)(!1),b=Object(h.a)(l,2),u=b[0],j=b[1],O=Object(a.useState)(!1),x=Object(h.a)(O,2),p=x[0],f=x[1],y=Object(a.useState)(!1),g=Object(h.a)(y,2),v=g[0],R=g[1],D=Object(w.g)(),U=Object(S.ub)(D);return Object(m.jsxs)(s.a,{position:"relative",zIndex:3,children:[p&&Object(m.jsx)(k.P,{open:p,onClose:function(){return f(!1)}}),v&&Object(m.jsx)(k.ab,{open:v,onClose:function(){return R(!1)}}),Object(m.jsxs)(s.a,{display:"flex",children:[Object(m.jsx)(k.n,{currency:Object(S.rb)("QUICK"),size:"32px"}),Object(m.jsxs)(s.a,{ml:1.5,children:[Object(m.jsx)(d.a,{variant:"body2",style:{color:t.text.primary,lineHeight:1},children:"QUICK"}),Object(m.jsx)(d.a,{variant:"caption",style:{color:t.text.hint},children:"Single Stake \u2014 Auto compounding"})]})]}),Object(m.jsxs)(s.a,{display:"flex",justifyContent:"space-between",mt:1.5,children:[Object(m.jsx)(d.a,{variant:"body2",children:"Total QUICK"}),Object(m.jsx)(d.a,{variant:"body2",children:D?D.totalQuickBalance.toFixed(2,{groupSeparator:","}):0})]}),Object(m.jsxs)(s.a,{display:"flex",justifyContent:"space-between",mt:1.5,children:[Object(m.jsx)(d.a,{variant:"body2",children:"TVL:"}),Object(m.jsxs)(d.a,{variant:"body2",children:["$",(Number(D.totalQuickBalance.toExact())*r).toLocaleString()]})]}),Object(m.jsxs)(s.a,{display:"flex",justifyContent:"space-between",mt:1.5,children:[Object(m.jsx)(d.a,{variant:"body2",children:"APY"}),Object(m.jsxs)(d.a,{variant:"body2",style:{color:t.success.main},children:[U,"%"]})]}),Object(m.jsxs)(s.a,{display:"flex",justifyContent:"space-between",mt:1.5,children:[Object(m.jsx)(d.a,{variant:"body2",children:"Your Deposits"}),Object(m.jsx)(d.a,{variant:"body2",children:Object(S.m)(D.QUICKBalance)})]}),Object(m.jsxs)(s.a,{mt:2.5,width:1,height:"40px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:10,border:"1px solid ".concat(t.secondary.light),children:[Object(m.jsx)(k.n,{currency:Object(S.rb)("QUICK")}),Object(m.jsxs)(d.a,{variant:"body2",style:{margin:"0 8px"},children:[u?1:c.toLocaleString()," QUICK ="]}),Object(m.jsx)(k.n,{currency:Object(S.rb)("QUICK")}),Object(m.jsxs)(d.a,{variant:"body2",style:{margin:"0 8px"},children:[u?o.toLocaleString():1," dQUICK"]}),Object(m.jsx)(C.a,{style:{cursor:"pointer"},onClick:function(){return j(!u)}})]}),Object(m.jsx)(s.a,{className:e.stakeButton,bgcolor:t.primary.main,onClick:function(){return f(!0)},children:Object(m.jsx)(d.a,{variant:"body2",children:"Stake"})}),Object(m.jsx)(s.a,{className:e.stakeButton,bgcolor:"transparent",onClick:function(){return R(!0)},children:Object(m.jsx)(d.a,{variant:"body2",children:"Unstake"})}),Object(m.jsx)(s.a,{mt:3,textAlign:"center",children:Object(m.jsx)(d.a,{variant:"caption",style:{color:t.text.secondary,fontWeight:500},children:"\u2b50\ufe0f When you unstake, the contract will automatically claim QUICK on your behalf."})})]})},D=r(31),U=r(2644),P=r(2808),A=r(2630),B=r(445),L=r(2769),M=r(2652),Q=function(){var e=Object(i.a)(),t=e.palette,r=e.breakpoints,n=Object(o.a)(r.down("xs")),c=Object(a.useState)(!1),l=Object(h.a)(c,2),b=l[0],u=l[1],j=Object(a.useState)(0),O=Object(h.a)(j,2),x=O[0],p=O[1],f=Object(a.useState)(0),y=Object(h.a)(f,2),g=y[0],v=y[1],C=Object(a.useState)(!1),I=Object(h.a)(C,2),E=I[0],R=I[1],Q=Object(a.useState)(!1),z=Object(h.a)(Q,2),K=z[0],T=z[1],W=Object(a.useState)(""),N=Object(h.a)(W,2),V=N[0],F=N[1],H=Object(B.a)(V,F),J=Object(h.a)(H,2),Y=J[0],G=J[1],X=Object(w.g)(),$=Object(S.ub)(X),q=Object(w.k)(null,b?0:void 0,b?0:void 0,{search:V,isStaked:K}),Z=Object(w.i)(null,b?void 0:0,b?void 0:0,{search:V,isStaked:K}),_=b?Z:q,ee=E?1:-1,te=Object(a.useCallback)((function(e,t){var r,n;return((null!==(r=e.token.symbol)&&void 0!==r?r:"")>(null!==(n=t.token.symbol)&&void 0!==n?n:"")?-1:1)*ee}),[ee]),re=Object(a.useCallback)((function(e,t){var r,n;return((null!==(r=e.valueOfTotalStakedAmountInUSDC)&&void 0!==r?r:Object(S.D)(e.totalStakedAmount))>(null!==(n=t.valueOfTotalStakedAmountInUSDC)&&void 0!==n?n:Object(S.D)(t.totalStakedAmount))?-1:1)*ee}),[ee]),ne=Object(a.useCallback)((function(e,t){return(Object(S.V)(e)>Object(S.V)(t)?-1:1)*ee}),[ee]),ae=Object(a.useCallback)((function(e,t){var r,n;return(Object(S.D)(e.earnedAmount)*(null!==(r=e.rewardTokenPriceinUSD)&&void 0!==r?r:0)>Object(S.D)(t.earnedAmount)*(null!==(n=t.rewardTokenPriceinUSD)&&void 0!==n?n:0)?-1:1)*ee}),[ee]),ce=Object(a.useMemo)((function(){return _.sort((function(e,t){return 1===g?te(e,t):2===g?re(e,t):3===g?ne(e,t):4===g?ae(e,t):1}))}),[_,g,te,re,ne,ae]),ie=Object(a.useMemo)((function(){return ce.map((function(e){return e.stakingRewardAddress.toLowerCase()})).reduce((function(e,t){return e+t}),"")}),[ce]);Object(a.useEffect)((function(){p(0)}),[ie]);var oe=Object(a.useMemo)((function(){return ce?ce.slice(0,Object(S.L)(x,10)):null}),[ce,x]),se=Object(L.a)((function(){p(x+1)})).loadMoreRef,le=function(){return Object(m.jsxs)(s.a,{display:"flex",alignItems:"center",children:[Object(m.jsx)(d.a,{variant:"body2",style:{color:t.text.disabled,marginRight:8},children:"Staked Only"}),Object(m.jsx)(k.U,{toggled:K,onToggle:function(){return T(!K)}})]})},de=[{text:"Active",onClick:function(){return u(!1)},condition:!b},{text:"Ended",onClick:function(){return u(!0)},condition:b}],be=[{text:"Earn",index:1,width:.3},{text:"Deposits",index:2,width:.3},{text:"APR",index:3,width:.2},{text:"Earned",index:4,width:.2,justify:"flex-end"}],ue=be.map((function(e){return Object(D.a)(Object(D.a)({},e),{},{onClick:function(){g===e.index?R(!E):(v(e.index),R(!1))}})})),je=be.map((function(e){return{text:e.text,onClick:function(){return v(e.index)}}}));return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(s.a,{display:"flex",flexWrap:"wrap",alignItems:"center",mb:3.5,children:[Object(m.jsxs)(s.a,{display:"flex",justifyContent:"space-between",width:Object(S.ob)(n),flex:n?"unset":1,children:[Object(m.jsx)(s.a,{width:n?"calc(100% - 150px)":1,mr:2,my:2,children:Object(m.jsx)(k.N,{placeholder:n?"Search":"Search name, symbol or paste address",value:Y,setValue:G})}),n&&le()]}),Object(m.jsxs)(s.a,{width:Object(S.ob)(n),display:"flex",flexWrap:"wrap",alignItems:"center",children:[Object(m.jsx)(s.a,{mr:2,children:Object(m.jsx)(k.r,{width:160,height:40,items:de})}),n?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(s.a,{height:40,flex:1,children:Object(m.jsx)(k.p,{title:"Sort By",menuItems:je})}),Object(m.jsxs)(s.a,{mt:2,width:1,display:"flex",alignItems:"center",children:[Object(m.jsxs)(d.a,{variant:"body2",style:{color:t.text.disabled,marginRight:8},children:["Sort ",E?"Desc":"Asc"]}),Object(m.jsx)(k.U,{toggled:E,onToggle:function(){return R(!E)}})]})]}):le()]})]}),Object(m.jsx)(A.a,{}),!n&&Object(m.jsx)(s.a,{mt:2.5,display:"flex",paddingX:2,children:ue.map((function(e){return Object(m.jsxs)(s.a,{display:"flex",alignItems:"center",width:e.width,style:{cursor:"pointer"},justifyContent:e.justify,onClick:e.onClick,color:g===e.index?t.text.primary:t.text.secondary,children:[Object(m.jsx)(d.a,{variant:"body2",children:e.text}),Object(m.jsx)(s.a,{display:"flex",ml:.5,children:g===e.index&&E?Object(m.jsx)(U.a,{size:20}):Object(m.jsx)(P.a,{size:20})})]},e.index)}))}),oe?oe.map((function(e,t){return Object(m.jsx)(k.T,{syrup:e,dQUICKAPY:$},t)})):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(M.a,{width:"100%",height:120}),Object(m.jsx)(M.a,{width:"100%",height:120}),Object(m.jsx)(M.a,{width:"100%",height:120}),Object(m.jsx)(M.a,{width:"100%",height:120}),Object(m.jsx)(M.a,{width:"100%",height:120})]}),Object(m.jsx)("div",{ref:se})]})},z=Object(c.a)((function(e){var t=e.palette,r=e.breakpoints;return{helpWrapper:{display:"flex",alignItems:"center",padding:"8px 12px",border:"1px solid ".concat(t.secondary.light),borderRadius:10,"& p":{color:t.text.hint},"& svg":{marginLeft:8}},dragonWrapper:Object(n.a)({backgroundColor:t.background.paper,borderRadius:20,padding:32,position:"relative",overflow:"hidden"},r.down("xs"),{padding:"24px 16px"}),dragonBg:{width:"100%",position:"absolute",top:0,left:0,background:"rgb(225, 190, 231, 0.1)",maxHeight:138,overflow:"hidden","& img":{width:"100%"}},dragonTitle:{marginBottom:64,"& h5":{marginBottom:16,color:t.text.primary},"& p":{maxWidth:280,color:t.text.primary}},stakeButton:{width:"100%",height:48,borderRadius:10,display:"flex",justifyContent:"center",alignItems:"center",marginTop:24,cursor:"pointer"},searchInput:Object(n.a)({height:40,border:"1px solid ".concat(t.secondary.dark),borderRadius:10,minWidth:250,display:"flex",alignItems:"center",padding:"0 10px",flex:1,"& input":{background:"transparent",border:"none",boxShadow:"none",outline:"none",marginLeft:8,fontSize:14,fontWeight:500,color:t.text.primary,flex:1}},r.down("xs"),{width:"100%",minWidth:"unset",marginRight:0,flex:"none"}),syrupSwitch:{width:"50%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",background:t.background.paper,border:"1px solid ".concat(t.secondary.dark),"& p":{color:t.text.secondary}},activeSyrupSwitch:{background:t.secondary.dark,"& p":{color:t.text.primary}}}})),K=function(){var e=z(),t=Object(i.a)().breakpoints,r=Object(o.a)(t.down("xs"));return Object(m.jsxs)(s.a,{width:"100%",mb:3,children:[Object(m.jsx)(v,{}),Object(m.jsxs)(l.a,{container:!0,spacing:4,children:[Object(m.jsx)(l.a,{item:!0,xs:12,sm:12,md:4,children:Object(m.jsxs)(s.a,{className:e.dragonWrapper,children:[Object(m.jsx)(s.a,{className:e.dragonBg,children:Object(m.jsx)("img",{src:u,alt:"Dragon Lair"})}),Object(m.jsx)("img",{src:j,alt:"Dragon Mask",style:{width:"100%",position:"absolute",top:207}}),Object(m.jsxs)(s.a,{className:e.dragonTitle,children:[Object(m.jsx)(d.a,{variant:"h5",children:"Dragon\u2019s Lair"}),Object(m.jsx)(d.a,{variant:"body2",children:"Stake QUICK to earn QUICK"})]}),Object(m.jsx)(R,{})]})}),Object(m.jsx)(l.a,{item:!0,xs:12,sm:12,md:8,children:Object(m.jsxs)(s.a,{className:e.dragonWrapper,children:[Object(m.jsx)(s.a,{className:e.dragonBg,children:Object(m.jsx)("img",{src:r?u:b,alt:"Dragon Syrup"})}),Object(m.jsxs)(s.a,{className:e.dragonTitle,children:[Object(m.jsx)(d.a,{variant:"h5",children:"Dragon\u2019s Syrup"}),Object(m.jsx)(d.a,{variant:"body2",children:"Earn tokens of your choice over time"})]}),Object(m.jsx)(Q,{})]})})]})]})}}}]);
//# sourceMappingURL=12.2774e029.chunk.js.map