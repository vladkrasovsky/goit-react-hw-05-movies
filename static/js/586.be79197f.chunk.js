"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[586],{2586:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r.r(t),r.d(t,{default:function(){return D}});var s,c,o,u,l=r(5861),p=r(9439),f=r(7757),d=r.n(f),h=r(4834),v=r(2791),x=r(7689),g=r(7782),m=r(168),b=r(6444),j=b.ZP.img(s||(s=(0,m.Z)(["\n  background-color: #eee;\n  flex-basis: 250px;\n  flex-shrink: 0;\n  min-height: 340px;\n"]))),w=r(184),y=function(e){var t=e.src,r=e.width,n=e.alt;return(0,w.jsx)(j,{src:t,width:r,alt:n})},Z=b.ZP.ul(c||(c=(0,m.Z)(["\n  display: flex;\n  list-style: none;\n"]))),k=b.ZP.li(o||(o=(0,m.Z)(["\n  margin-right: 16px;\n"]))),O=function(e){var t=e.genres;return(0,w.jsx)(Z,{children:t.map((function(e){var t=e.id,r=e.name;return(0,w.jsx)(k,{children:r},t)}))})},_=r(1087),P=b.ZP.ul(u||(u=(0,m.Z)(["\n  padding: 10px 30px;\n"]))),S=function(e){var t=e.movieId;return(0,w.jsxs)(P,{children:[(0,w.jsx)("li",{children:(0,w.jsx)(_.rU,{to:"/movies/".concat(t,"/cast"),children:"Cast"})}),(0,w.jsx)("li",{children:(0,w.jsx)(_.rU,{to:"/movies/".concat(t,"/reviews"),children:"Reviews"})})]})},D=function(){var e=(0,x.s0)(),t=(0,x.UO)().movieId,r=(0,v.useState)(),n=(0,p.Z)(r,2),a=n[0],s=n[1],c=(0,v.useRef)(),o=(0,x.TH)();(0,v.useEffect)((function(){function e(){return(e=(0,l.Z)(d().mark((function e(){var r;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.Z.getMovieDetails(Number(t));case 3:if(r=e.sent){e.next=7;break}return console.log("Oooh oh, there are no results."),e.abrupt("return");case 7:s(i({},r)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]);if(!a)return null;var u=a.original_title,f=a.overview,m=a.vote_average,b=a.genres,j=a.poster_path;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)("button",{onClick:function(){var t="default"!==o.key?-1:"/";e(t)},children:"\u2190 Go back"}),(0,w.jsxs)(h.x,{display:"flex",mt:3,alignItems:"flex-start",children:[(0,w.jsx)(y,{src:j,width:250,alt:u}),(0,w.jsxs)(h.x,{p:4,children:[(0,w.jsx)("h2",{children:u}),(0,w.jsxs)(h.x,{as:"p",mt:3,children:["User Score: ",m]}),(0,w.jsx)(h.x,{as:"p",mt:3,children:(0,w.jsx)("b",{children:"Overview"})}),(0,w.jsx)("p",{children:f}),(0,w.jsx)(h.x,{as:"p",mt:3,children:(0,w.jsx)("b",{children:"Genres"})}),b.length>0&&(0,w.jsx)(O,{genres:b})]})]}),(0,w.jsxs)(h.x,{as:"footer",ref:c,mt:3,borderTop:"2px solid",borderBottom:"2px solid",children:[(0,w.jsx)(h.x,{as:"p",children:"Additional information"}),(0,w.jsx)(S,{movieId:t})]}),(0,w.jsx)(v.Suspense,{fallback:(0,w.jsx)("div",{children:"Loading subpage..."}),children:(0,w.jsx)(x.j3,{context:{executeScroll:function(){return c.current.scrollIntoView()}}})})]})}},7782:function(e,t,r){r.d(t,{Z:function(){return j}});var n=r(5861),a=r(7757),i=r.n(a),s=r(3263),c="https://api.themoviedb.org/3/",o="https://image.tmdb.org/t/p/w500/",u="https://placehold.co/500x750?text=No+Image",l="68fa3d310c9d2cffbb85ba21d660e67a",p="en-US",f=!1;s.Z.defaults.baseURL=c;var d={params:{api_key:l,language:p,include_adult:f}};function h(){return h=(0,n.Z)(i().mark((function e(){var t,r,n,a,c,o=arguments;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:1,r="trending/movie/day?page=".concat(t),e.next=4,s.Z.get(r,d);case 4:return n=e.sent,a=n.data,c=a.results.map((function(e){return{id:e.id,title:e.title}})),a.results=c,e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)}))),h.apply(this,arguments)}function v(){return(v=(0,n.Z)(i().mark((function e(t){var r,n,a,c,l,p,f,h;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="movie/".concat(t),e.next=3,s.Z.get(r,d);case 3:return n=e.sent,a=n.data,c=a.original_title,l=a.overview,p=a.vote_average,f=a.genres,h=a.poster_path,e.abrupt("return",{original_title:c,overview:l,vote_average:p.toFixed(1),genres:f,poster_path:h?o+h:u});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=(0,n.Z)(i().mark((function e(t){var r,n,a,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="movie/".concat(t,"/credits"),e.next=3,s.Z.get(r,d);case 3:return n=e.sent,a=n.data,c=a.cast.map((function(e){var t=e.character,r=e.original_name,n=e.profile_path;return{character:t,original_name:r,profile_path:n?o+n:u}})),a.cast=c,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(){return(g=(0,n.Z)(i().mark((function e(t){var r,n,a,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="movie/".concat(t,"/reviews"),e.next=3,s.Z.get(r,d);case 3:return n=e.sent,a=n.data,c=a.results.map((function(e){return{id:e.id,author:e.author,content:e.content}})),a.results=c,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=(0,n.Z)(i().mark((function e(t){var r,n,a,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="search/movie?query=".concat(t),e.next=3,s.Z.get(r,d);case 3:return n=e.sent,a=n.data,c=a.results.map((function(e){return{id:e.id,title:e.title}})),a.results=c,e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b={getTrendings:function(){return h.apply(this,arguments)},getMovieDetails:function(e){return v.apply(this,arguments)},getCredits:function(e){return x.apply(this,arguments)},getReviews:function(e){return g.apply(this,arguments)},searchMovies:function(e){return m.apply(this,arguments)}},j=b}}]);
//# sourceMappingURL=586.be79197f.chunk.js.map