(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),o=n(3),i=n.n(o),s=(n(13),n(4)),a=n(5),h=n(7),u=n(6),l=(n(14),function(e){var t=e.name,n=e.id,c=e.email;return Object(r.jsxs)("div",{className:"shadow-5 dib br-2 grow ma2 pa3 tc pointer bg",children:[Object(r.jsx)("img",{src:"https://robohash.org/".concat(n),alt:"robots"}),Object(r.jsx)("h2",{children:t}),Object(r.jsx)("p",{children:c})]})}),d=function(e){var t=e.robots,n=t.map((function(e,n){return Object(r.jsx)(l,{id:t[n].id,name:t[n].name,email:t[n].email},n)}));return Object(r.jsx)("div",{children:n})},b=function(e){var t=e.onSearchChange;return Object(r.jsx)("div",{children:Object(r.jsx)("input",{type:"text",placeholder:"Search Robots",onChange:t})})},j=function(e){return Object(r.jsx)("div",{style:{overflow:"scroll",height:"500px",border:"2px solid white"},children:e.children})},f=(n(15),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{children:"RoboFriends"}),Object(r.jsx)(b,{onSearchChange:this.onSearchChange}),Object(r.jsx)(j,{children:Object(r.jsx)(d,{robots:c})})]}):Object(r.jsx)("h1",{children:"Loading...Please Have Patience"})}}]),n}(c.Component)),p=(n(16),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),o(e),i(e)}))});i.a.render(Object(r.jsx)(f,{}),document.getElementById("root")),p()}},[[17,1,2]]]);
//# sourceMappingURL=main.0d0d0827.chunk.js.map