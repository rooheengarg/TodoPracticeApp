(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(0),i=c(1),r=c(8),o=c.n(r),u=c(9),s=c(7),a=c(6),j=(c(15),c(5)),l=c.n(j),d=function(e){var t=e.item,c=e.isChecked,i=e.onDelete,r=e.index,o=e.onComplete;return Object(n.jsxs)("div",{className:l.a.item,children:[Object(n.jsx)("input",{type:"checkbox",checked:c,onChange:function(){return o(r)}}),Object(n.jsx)("div",{className:l.a.chip,children:t}),Object(n.jsx)("button",{onClick:function(){i(r)},children:"Delete"})]})},b=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),c=t[0],r=t[1],o=Object(i.useState)(null),j=Object(a.a)(o,2),l=j[0],b=j[1],h=Object(i.useRef)(null),p=function(e){var t=c.filter((function(t,c){return e!=c}));r(t)},O=function(e){var t=c.map((function(t,c){return e===c?Object(s.a)(Object(s.a)({},t),{},{isChecked:!t.isChecked}):t}));r(t)};Object(i.useEffect)((function(){var e=c.map((function(e,t){return Object(n.jsx)(d,{index:t,item:e.value,isChecked:e.isChecked,onDelete:p,onComplete:O},t)}));b(e)}),[c]);return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"It's a Todo list :D"}),Object(n.jsx)("input",{ref:h,className:"",type:"text",placeholder:"Enter todo item"}),Object(n.jsx)("button",{onClick:function(){if(h.current.value.trim()){var e=[].concat(Object(u.a)(c),[{value:h.current.value.trim(),isChecked:!1}]);r(e)}h.current.value=""},children:"Submit"}),l&&Object(n.jsx)("div",{children:l})]})},h=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("div",{children:"======Create React app ===="}),Object(n.jsx)(b,{})]})};o.a.render(Object(n.jsx)(h,{}),document.getElementById("root"))},5:function(e,t,c){e.exports={chip:"TodoItem_chip__3mXYI",item:"TodoItem_item__2olry"}}},[[16,1,2]]]);
//# sourceMappingURL=main.28648797.chunk.js.map