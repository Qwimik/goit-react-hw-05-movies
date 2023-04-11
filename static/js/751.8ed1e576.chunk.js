"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[751],{8751:function(n,e,r){r.r(e),r.d(e,{default:function(){return G}});var t,a,s,o,i,c,u,p,d=r(5861),x=r(9439),l=r(7757),f=r.n(l),h=r(2791),v=r(7689),g=r(6856),m=r(9126),j=r(4169),w=r(1375),Z=r(168),b=r(6444),k=r(1087),y=(0,b.ZP)(k.rU)(t||(t=(0,Z.Z)(["\n  display: inline-block;\n  position: relative;\n  text-decoration: none;\n  padding: 5px 10px 5px 30px;\n  margin: 15px 0;\n  background-color: #f8f8f8;\n  border-radius: 10px;\n  color: #242424;\n  box-shadow: 0px 0px 3px #242424;\n  transition: color 250ms ease-in-out, box-shadow 250ms ease-in-out;\n  &:hover {\n    box-shadow: 0px 0px 4px #242424, inset 0px 0px 15px 5px #fff;\n    color: orangered;\n  }\n"]))),_=b.ZP.span(a||(a=(0,Z.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: translate(50%, 35%);\n"]))),P=b.ZP.div(s||(s=(0,Z.Z)(["\n  display: flex;\n  gap: 50px;\n"]))),U=b.ZP.div(o||(o=(0,Z.Z)(["\n  border-radius: 10px;\n  overflow: hidden;\n  flex: 0 0 300px;\n  box-shadow: 0px 0px 4px #242424;\n  & img {\n    width: 100%;\n  }\n"]))),S=b.ZP.h2(i||(i=(0,Z.Z)(["\n  margin: 0;\n  font-size: 36px;\n  text-align: center;\n"]))),R=b.ZP.div(c||(c=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 40px;\n  padding: 30px 0;\n"]))),z=(0,b.ZP)(k.rU)(u||(u=(0,Z.Z)(["\n  position: relative;\n  text-decoration: none;\n  font-size: 16px;\n  padding: 5px 10px 5px 30px;\n  background-color: #f8f8f8;\n  border-radius: 10px;\n  color: #242424;\n  box-shadow: 0px 0px 3px #242424;\n  transition: color 250ms ease-in-out, box-shadow 250ms ease-in-out;\n  &:hover {\n    box-shadow: 0px 0px 4px #242424, inset 0px 0px 15px 5px #fff;\n    color: orangered;\n  }\n"]))),C=b.ZP.p(p||(p=(0,Z.Z)(["\n  font-size: 18px;\n  font-weight: 300;\n  text-align: center;\n"]))),M=r(184);function O(n){var e,r,t,a,s=n.data;if(s)return(0,M.jsxs)(P,{children:[(0,M.jsx)(U,{children:(0,M.jsx)("img",{src:s.poster_path?"https://image.tmdb.org/t/p/original".concat(s.poster_path):"https://picsum.photos/300/450?random=1",alt:s.title,width:"300",height:"450",loading:"lazy"})}),(0,M.jsxs)("div",{children:[(0,M.jsx)(S,{children:null!==(e=s.title)&&void 0!==e?e:"Name"}),(0,M.jsxs)("p",{children:["Release date ",s.release_date]}),(0,M.jsxs)("p",{children:["User Score: ",null!==(r=Math.round(10*s.vote_average))&&void 0!==r?r:0,"%"]}),(0,M.jsx)("h3",{children:"Overview"}),(0,M.jsx)("p",{children:null!==(t=s.overview)&&void 0!==t?t:"Overview"}),(0,M.jsx)("h3",{children:"Genres"}),(0,M.jsx)("p",{children:null!==(a=s.genres.map((function(n){return n.name})).join(" "))&&void 0!==a?a:"Genres"})]})]})}var F=r(4390);function G(){var n,e,r=(0,h.useState)(null),t=(0,x.Z)(r,2),a=t[0],s=t[1],o=(0,h.useState)(""),i=(0,x.Z)(o,2),c=i[0],u=i[1],p=(0,v.UO)().id,l=null!==(n=null===(e=(0,v.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/";return(0,h.useMemo)((function(){var n=function(){var n=(0,d.Z)(f().mark((function n(){var e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,F.rc(p);case 3:return e=n.sent,s(e),u(e.status),n.abrupt("return");case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[p]),(0,M.jsx)("main",{children:(0,M.jsxs)(j.W,{children:[(0,M.jsxs)(y,{to:l,children:[(0,M.jsx)(_,{children:(0,M.jsx)(g.aQX,{})}),(0,M.jsx)("span",{children:"Back to Movies"})]}),"Released"===c?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(O,{data:a}),(0,M.jsx)("hr",{}),(0,M.jsxs)(R,{children:[(0,M.jsxs)(z,{to:"cast",state:{from:l},children:[(0,M.jsx)(_,{children:(0,M.jsx)(m.rVC,{})}),"Cast"]}),(0,M.jsxs)(z,{to:"reviews",state:{from:l},children:[(0,M.jsx)(_,{children:(0,M.jsx)(g.b12,{})}),"Reviews"]})]}),(0,M.jsx)(h.Suspense,{fallback:(0,M.jsx)(w.Z,{}),children:(0,M.jsx)(v.j3,{})})]}):(0,M.jsx)(C,{children:"Oops, page Not Found :( Please go back and try again later..."})]})})}},4390:function(n,e,r){r.d(e,{Mu:function(){return p},fT:function(){return d},hR:function(){return c},rc:function(){return u},yJ:function(){return x}});var t=r(5861),a=r(7757),s=r.n(a),o=r(1243),i="3217ae06898d6f0a1d4d89e84bb85582";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var n=(0,t.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/all/week?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(s().mark((function n(e){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"?api_key=").concat(i));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(s().mark((function n(e){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(s().mark((function n(e){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,t.Z)(s().mark((function n(e){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=751.8ed1e576.chunk.js.map