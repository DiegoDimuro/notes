(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{40:function(e,t,n){e.exports=n(50)},50:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(5),c=n.n(r),o=n(36),u=n(21);var i=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"Notas"))},m=(new Date).getFullYear();var E=function(){return l.a.createElement("footer",null,l.a.createElement("p",null,"Diego Dimuro \xa9 ",m))},f=n(33),s=n.n(f);var p=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(t){e.onDelete(e.id)}},l.a.createElement(s.a,null)))},v=n(25),d=n(28),b=n(35),h=n.n(b),j=n(68),O=n(67);var k=function(e){var t=l.a.useState(!1),n=Object(u.a)(t,2),a=n[0],r=n[1],c=l.a.useState({title:"",content:""}),o=Object(u.a)(c,2),i=o[0],m=o[1];function E(e){var t=e.target,n=t.name,a=t.value;m((function(e){return Object(d.a)(Object(d.a)({},e),{},Object(v.a)({},n,a))}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},a&&l.a.createElement("input",{name:"title",onChange:E,value:i.title,placeholder:"Title"}),l.a.createElement("textarea",{name:"content",onClick:function(){r(!0)},onChange:E,value:i.content,placeholder:"Take a note...",rows:a?3:1}),l.a.createElement(O.a,{in:a},l.a.createElement(j.a,{onClick:function(t){e.onAdd(i),m({title:"",content:""}),t.preventDefault()}},l.a.createElement(h.a,null)))))};var g=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],r=t[1];function c(e){r((function(t){return t.filter((function(t,n){return e!==n}))}))}return l.a.createElement("div",null,l.a.createElement(i,null),l.a.createElement(k,{onAdd:function(e){r((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(p,{key:t,id:t,title:e.title,content:e.content,onDelete:c})})),l.a.createElement(E,null))};c.a.render(l.a.createElement(g,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.2ca8dca9.chunk.js.map