(this.webpackJsonp4digits=this.webpackJsonp4digits||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(1),o=n.n(c),i=n(4),r=n.n(i),u=(n(10),n(2));n(11);var l=function(){var e=Object(c.useState)(1234),t=Object(u.a)(e,2),n=t[0],o=t[1],i=Object(c.useState)([]),r=Object(u.a)(i,2),l=r[0],a=r[1],j=Object(c.useState)(""),b=Object(u.a)(j,2),d=b[0],f=b[1],h=Object(c.useState)(8),O=Object(u.a)(h,2),g=O[0],v=O[1],x=Object(c.useState)("Game over, you lost"),p=Object(u.a)(x,2),m=p[0],S=p[1];function C(e){var t=function(e){if(l.includes(e))return!1;var t=new Set(["0","1","2","3","4","5","6","7","8","9"]),n=new Set;if(4!=e.length)return!1;for(var s=0;s<e.length;s++){if(!t.has(e[s])||n.has(e[s]))return!1;n.add(e[s])}return!0}(d);if(f(""),t){var s=l.concat(d);console.log("ng",s),a(s),function(e){e==n?(S("You Won!"),v(0)):v(g-1)}(d)}else console.log("invalid guess"),alert("Guesses must be composed of 4 unigue digits and be unique from previous guesses.")}function G(){k(),a([]),v(8),S("Game over, you lost")}function k(){for(var e="",t=new Set;e.length<4;){var n=Math.floor(10*Math.random());t.has(n)||(t.add(n),e+=n)}o(e),console.log(e)}function w(e){var t,s=e.split(""),c=n.split(""),o=0,i=0;for(t=0;t<4;t++)s[t]==c[t]?i+=1:c.includes(s[t])&&(console.log("in else"),console.log(s[t]),console.log(c),o+=1);return i+" bulls; "+o+" cows"}function y(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("p",{children:m}),Object(s.jsx)("button",{onClick:G,children:"Reset Game"})]})}Object(c.useEffect)((function(){k()}),[]);var F=null;return F=g>0?Object(s.jsxs)("div",{children:[Object(s.jsxs)("h2",{children:[g," Lives left!"]}),Object(s.jsx)("input",{type:"text",onKeyPress:function(e){"Enter"==e.key&&C()},onChange:function(e){f(e.target.value),console.log(d)},value:d}),Object(s.jsx)("button",{className:"guess-button",onClick:C,children:"Guess"}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("button",{onClick:G,children:"Reset Game"}),Object(s.jsx)("p",{children:"Guesses"}),Object(s.jsx)("ol",{children:l.map((function(e,t){return Object(s.jsx)("li",{children:e+" "+w(e)},t)}))})]}):Object(s.jsx)("div",{children:Object(s.jsx)(y,{})}),Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("h1",{children:"4 digits"}),F]})},a=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),s(e),c(e),o(e),i(e)}))};r.a.render(Object(s.jsx)(o.a.StrictMode,{children:Object(s.jsx)(l,{})}),document.getElementById("root")),a()}},[[12,1,2]]]);
//# sourceMappingURL=main.2638d6dd.chunk.js.map