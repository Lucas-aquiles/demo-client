(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(10),i=n.n(a),s=(n(35),n(36),n(1)),o=n(8),j=n(2),u=function(){var e=Object(o.c)((function(e){return e.countries}));return console.log(e),Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:" holaaaaaa"})})},l=n(28),b=n(17),O=n.n(b),d=n(42);var h=function(){var e=Object(o.b)();return Object(c.useEffect)((function(){e(function(){var e=Object(l.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.get("http://localhost:3001/countries");case 2:n=e.sent,t({type:"GET_COUNTRIES",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})),Object(j.jsx)("div",{children:"LangPage"})},f=function(){return Object(j.jsx)("div",{children:"Form"})},p=function(){return Object(j.jsx)("div",{children:"Details"})};var x=function(){return Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{path:"/",element:Object(j.jsx)(h,{})}),Object(j.jsx)(s.a,{path:"/home",element:Object(j.jsx)(u,{})}),Object(j.jsx)(s.a,{path:"/create",element:Object(j.jsx)(f,{})}),Object(j.jsx)(s.a,{path:"details/:id",element:Object(j.jsx)(p,{})})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))},g=n(15),m=n(11),T=n(29),y=n(7),C={countries:[],allCountries:[],details:[],resultPost:[],activities:[]};var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;return"GET_COUNTRIES"===t.type?Object(y.a)(Object(y.a)({},e),{},{countries:t.result}):Object(y.a)({},e)},w=n(30),F=Object(m.createStore)(E,Object(T.composeWithDevTools)(Object(m.applyMiddleware)(w.a)));i.a.render(Object(j.jsx)(o.a,{store:F,children:Object(j.jsxs)(g.a,{children:[Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(x,{})}),","]})}),document.getElementById("root")),v()}},[[61,1,2]]]);
//# sourceMappingURL=main.8fd5aa49.chunk.js.map