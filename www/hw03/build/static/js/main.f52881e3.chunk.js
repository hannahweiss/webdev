(this.webpackJsonp4digits=this.webpackJsonp4digits||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),o=n.n(c),i=n(4),l=n.n(i),u=(n(10),n(2));n(11);var r=function(){var e=Object(c.useState)(1234),t=Object(u.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)([]),l=Object(u.a)(i,2),r=l[0],a=l[1],j=Object(c.useState)(""),b=Object(u.a)(j,2),d=b[0],h=b[1],O=Object(c.useState)(8),f=Object(u.a)(O,2),g=f[0],v=f[1],x=Object(c.useState)("Game over, you lost"),m=Object(u.a)(x,2),p=m[0],S=m[1];function G(e){var t=function(e){if(r.includes(e))return!1;var t=new Set(["0","1","2","3","4","5","6","7","8","9"]),n=new Set;if(4!=e.length)return!1;for(var s=0;s<e.length;s++){if(!t.has(e[s])||n.has(e[s]))return!1;n.add(e[s])}return!0}(d);if(h(""),t){var s=r.concat(d);console.log("ng",s),a(s),function(e){e==n?(S("You Won!"),v(0)):v(g-1)}(d)}else console.log("invalid guess"),alert("Guesses must be composed of 4 unigue digits and be unique from previous guesses.")}function N(){w(),a([]),v(8),S("Game over, you lost")}function w(){for(var e="",t=new Set;e.length<4;){var n=Math.floor(10*Math.random());t.has(n)||(t.add(n),e+=n)}o(e),console.log(e)}function C(e){var t,s=e.split(""),c=n.split(""),o=0,i=0;for(t=0;t<4;t++)s[t]==c[t]?i+=1:c.includes(s[t])&&(console.log("in else"),console.log(s[t]),console.log(c),o+=1);return i+" bulls; "+o+" cows"}function k(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:p}),Object(s.jsx)("button",{className:"button",onClick:N,children:"Reset Game"})]})}Object(c.useEffect)((function(){w()}),[]);var y=null;return y=g>0?Object(s.jsxs)("div",{className:"row",children:[Object(s.jsxs)("div",{className:"column",children:[Object(s.jsxs)("h2",{children:[g," Lives left!"]}),Object(s.jsx)("input",{id:"input-box",type:"text",onKeyPress:function(e){"Enter"==e.key&&G()},onChange:function(e){h(e.target.value),console.log(d)},value:d}),Object(s.jsx)("button",{className:"button",onClick:G,children:"Guess"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{className:"button",onClick:N,children:"Reset Game"})]}),Object(s.jsxs)("div",{className:"column",children:[Object(s.jsx)("h2",{children:"Guesses"}),Object(s.jsx)("ol",{className:"guesses",children:r.map((function(e,t){return Object(s.jsx)("li",{children:e+" "+C(e)},t)}))})]})]}):Object(s.jsx)("div",{children:Object(s.jsx)(k,{})}),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"4 Digits Game"}),y]})},a=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),o(e),i(e)}))};l.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(r,{})}),document.getElementById("root")),a()}},[[12,1,2]]]);
//# sourceMappingURL=main.f52881e3.chunk.js.map