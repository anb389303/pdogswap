(this["webpackJsonpinterface-v2"]=this["webpackJsonpinterface-v2"]||[]).push([[9],{2697:function(e,t,n){"use strict";var a=n(1),c=n.n(a),r=n(2614),i=n(138),s=n(111),o=n(2657),l=n(2617),u=n(2731),d=n(110),b=n.n(d),p=n(30),j=n(16),f=n(2),h=n.n(f),O=n(396),m=n(64),x=n(65),y=n(4),v=n(26),k=n(248),g=n(3),w=n(44),C=n(0),T=Object(r.a)((function(e){var t=e.palette;return{searchInput:{display:"flex",alignItems:"center",padding:"0 16px",background:t.grey.A700,height:46,borderRadius:10,margin:"12px 0","& input":{background:"transparent",border:"none",outline:"none",fontSize:15,fontWeight:500,minWidth:240,color:t.text.primary}},searchContent:{position:"absolute",width:"100%",background:t.grey.A700,borderRadius:10,padding:12,zIndex:2,height:300,overflowY:"auto"}}})),I=function(){var e=T(),t=Object(s.f)(),n=Object(a.useState)(""),c=Object(j.a)(n,2),r=c[0],i=c[1],u=Object(a.useState)(!1),d=Object(j.a)(u,2),b=d[0],f=d[1],I=Object(a.useRef)(null),A=Object(a.useRef)(null),S=Object(a.useState)([]),E=Object(j.a)(S,2),R=E[0],L=E[1],N=Object(a.useState)([]),M=Object(j.a)(N,2),q=M[0],z=M[1],P=Object(a.useState)(3),U=Object(j.a)(P,2),B=U[0],F=U[1],K=Object(a.useState)(3),W=Object(j.a)(K,2),J=W[0],Y=W[1],$=Object(a.useState)([]),_=Object(j.a)($,2),D=_[0],Q=_[1],G=Object(a.useState)([]),H=Object(j.a)(G,2),V=H[0],X=H[1],Z=function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},ee=Object(a.useMemo)((function(){var e=D.concat(R.filter((function(e){var t=!1;return D.map((function(n){return n.id===e.id&&(t=!0),!0})),!t})));return e?e.filter((function(e){return!v.a.blacklists.TOKEN_BLACKLIST.includes(e.id)&&Object.keys(e).map((function(t){var n="0x"===r.slice(0,2);return"id"===t&&n?e[t].match(new RegExp(Z(r),"i")):"symbol"!==t||n?"name"===t&&!n&&e[t].match(new RegExp(Z(r),"i")):e[t].match(new RegExp(Z(r),"i"))})).some((function(e){return e}))})):[]}),[D,R,r]),te=Object(a.useMemo)((function(){var e=V.concat(q.filter((function(e){var t=!1;return V.map((function(n){return n.id===e.id&&(t=!0),!0})),!t})));return e?e.filter((function(e){if(v.a.blacklists.PAIR_BLACKLIST.includes(e.id))return!1;if(r&&r.includes(" ")){var t,n,a=null===(t=r.split(" ")[0])||void 0===t?void 0:t.toUpperCase(),c=null===(n=r.split(" ")[1])||void 0===n?void 0:n.toUpperCase();return(e.token0.symbol.includes(a)||e.token0.symbol.includes(c))&&(e.token1.symbol.includes(a)||e.token1.symbol.includes(c))}if(r&&r.includes("-")){var i,s,o=null===(i=r.split("-")[0])||void 0===i?void 0:i.toUpperCase(),l=null===(s=r.split("-")[1])||void 0===s?void 0:s.toUpperCase();return(e.token0.symbol.includes(o)||e.token0.symbol.includes(l))&&(e.token1.symbol.includes(o)||e.token1.symbol.includes(l))}return Object.keys(e).map((function(t){var n="0x"===r.slice(0,2);return"id"===t&&n?e[t].match(new RegExp(Z(r),"i")):("token0"===t||"token1"===t)&&(e[t].symbol.match(new RegExp(Z(r),"i"))||e[t].name.match(new RegExp(Z(r),"i")))})).some((function(e){return e}))})):[]}),[V,q,r]);Object(a.useEffect)((function(){function e(){return(e=Object(p.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.p)();case 2:return t=e.sent,e.next=5,Object(y.o)();case 5:n=e.sent,t&&Q(t),n&&X(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.useEffect)((function(){function e(){return(e=Object(p.a)(h.a.mark((function e(){var t,n,a,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(r.length>0)){e.next=11;break}return e.next=4,m.b.query({query:x.B,variables:{value:r?r.toUpperCase():"",id:r}});case 4:return n=e.sent,e.next=7,m.b.query({query:x.q,variables:{tokens:null===(t=n.data.asSymbol)||void 0===t?void 0:t.map((function(e){return e.id})),id:r}});case 7:a=e.sent,z(a.data.as0.concat(a.data.as1).concat(a.data.asAddress)),c=n.data.asSymbol.concat(n.data.asAddress).concat(n.data.asName),L(c);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r]);var ne=function(e){I.current&&I.current.contains(e.target)||A.current&&A.current.contains(e.target)||(Y(3),F(3),f(!1))};return Object(a.useEffect)((function(){return document.addEventListener("click",ne),function(){document.removeEventListener("click",ne)}})),Object(C.jsxs)(o.a,{position:"relative",children:[Object(C.jsxs)(o.a,{className:e.searchInput,children:[Object(C.jsx)("input",{placeholder:"Search for tokens, pairs, etc\u2026",value:r,ref:I,onFocus:function(){return f(!0)},onChange:function(e){return i(e.target.value)}}),Object(C.jsx)(o.a,{display:"flex",children:Object(C.jsx)(O.a,{})})]}),b&&Object(C.jsxs)("div",{ref:A,className:e.searchContent,children:[Object(C.jsx)(l.a,{variant:"body1",children:"Pairs"}),te.slice(0,J).map((function(e,n){var a=new g.Token(g.ChainId.MATIC,Object(w.getAddress)(e.token0.id),e.token0.decimals),c=new g.Token(g.ChainId.MATIC,Object(w.getAddress)(e.token1.id),e.token1.decimals);return Object(C.jsxs)(o.a,{mt:1,display:"flex",alignItems:"center",style:{cursor:"pointer"},onClick:function(){return t.push("/analytics/pair/".concat(e.id))},children:[Object(C.jsx)(k.v,{currency0:a,currency1:c,size:28}),Object(C.jsxs)(l.a,{variant:"body2",style:{marginLeft:8},children:[e.token0.symbol," - ",e.token1.symbol," Pair"]})]},n)})),Object(C.jsx)(l.a,{variant:"body2",style:{cursor:"pointer",margin:"8px 0"},onClick:function(){return Y(J+5)},children:"Show More"}),Object(C.jsx)(l.a,{variant:"body1",children:"Tokens"}),ee.slice(0,B).map((function(e,n){var a=new g.Token(g.ChainId.MATIC,Object(w.getAddress)(e.id),e.decimals);return Object(C.jsxs)(o.a,{mt:1,display:"flex",alignItems:"center",style:{cursor:"pointer"},onClick:function(){return t.push("/analytics/token/".concat(e.id))},children:[Object(C.jsx)(k.n,{currency:a,size:"28px"}),Object(C.jsxs)(l.a,{variant:"body2",style:{marginLeft:8},children:[e.name," ",e.symbol]})]},n)})),Object(C.jsx)(l.a,{variant:"body2",style:{cursor:"pointer",marginTop:8},onClick:function(){return F(B+5)},children:"Show More"})]})]})},A=c.a.memo(I),S=Object(r.a)((function(e){var t=e.palette;return{topTab:{height:46,padding:"0 24px",borderRadius:10,display:"flex",alignItems:"center",cursor:"pointer","& p":{color:t.text.disabled}},selectedTab:{background:t.secondary.light,"& p":{color:t.text.primary}},link:{cursor:"pointer",color:t.text.secondary,"&:hover":{textDecoration:"underline"}}}}));t.a=function(e){var t=e.data,n=e.type,a=S(),c=Object(i.a)().palette,r=Object(s.f)(),d=Object(s.g)().pathname;return Object(C.jsxs)(o.a,{width:"100%",mb:3,children:[Object(C.jsx)(o.a,{mb:4,children:Object(C.jsx)(l.a,{variant:"h4",children:"Quickswap Analytics"})}),Object(C.jsxs)(o.a,{mb:4,position:"relative",display:"flex",justifyContent:"space-between",flexWrap:"wrap",children:[Object(C.jsxs)(o.a,{marginY:1.5,display:"flex",alignItems:"center",children:[n&&t&&Object(C.jsxs)(o.a,{display:"flex",alignItems:"center",color:c.text.hint,children:[Object(C.jsx)(l.a,{variant:"caption",className:a.link,onClick:function(){r.push("/analytics")},children:"Analytics"}),Object(C.jsx)(u.a,{style:{width:16}}),Object(C.jsx)(l.a,{variant:"caption",className:a.link,onClick:function(){r.push("/analytics/".concat(n,"s"))},children:"token"===n?"Tokens":"Pairs"}),Object(C.jsx)(u.a,{style:{width:16}}),Object(C.jsxs)(l.a,{variant:"caption",children:[Object(C.jsx)("span",{style:{color:"#b6b9cc"},children:"token"===n?t.symbol:"".concat(t.token0.symbol,"/").concat(t.token1.symbol)}),"(",Object(y.sb)(t.id),")"]})]}),!n&&Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(o.a,{className:b()(a.topTab,-1===d.indexOf("pair")&&-1===d.indexOf("token")&&a.selectedTab),onClick:function(){return r.push("/analytics")},children:Object(C.jsx)(l.a,{variant:"body1",children:"Overview"})}),Object(C.jsx)(o.a,{className:b()(a.topTab,d.indexOf("token")>-1&&a.selectedTab),onClick:function(){return r.push("/analytics/tokens")},children:Object(C.jsx)(l.a,{variant:"body1",children:"Tokens"})}),Object(C.jsx)(o.a,{className:b()(a.topTab,d.indexOf("pair")>-1&&a.selectedTab),onClick:function(){return r.push("/analytics/pairs")},children:Object(C.jsx)(l.a,{variant:"body1",children:"Pairs"})})]})]}),Object(C.jsx)(A,{})]})]})}},2731:function(e,t,n){"use strict";var a=n(1),c=n(139);t.a=Object(c.a)(a.createElement("path",{d:"M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"}),"ArrowForwardIos")},2917:function(e,t,n){"use strict";n.r(t);var a=n(2697);n.d(t,"default",(function(){return a.a}))}}]);
//# sourceMappingURL=9.d874baeb.chunk.js.map