(this["webpackJsonpnested-comments-react"]=this["webpackJsonpnested-comments-react"]||[]).push([[0],{20:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),s=n(9),a=(n(20),n(2)),i=n(11),r=n(10),l=n(0),m=o.a.createContext();function d(){return Object(c.useContext)(m)}function j(e){var t=e.children,n=Object(c.useState)([]),o=Object(a.a)(n,2),s=o[0],d=o[1],j=Object(c.useMemo)((function(){var e={};return console.log("updatr",s),s.forEach((function(t){var n;e[n=t.parentNodeId]||(e[n]=[]),e[t.parentNodeId].push(t)})),console.log({group:e}),e}),[s]);return Object(l.jsx)(m.Provider,{value:{rootComments:j.null,getReplies:function(e){return j[e]},comments:s,createComment:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;console.log("createComment",e);var c={id:Object(r.uuid)(),commentText:e,childCommments:[],isRootNode:t,parentNodeId:n,createdAt:(new Date).toISOString()};d((function(e){return[].concat(Object(i.a)(e),[c])}))},updateComment:function(e,t){console.log(e,t);var n=s.map((function(n){return n.id===e&&(n.commentText=t),n}));console.log(n),d(n)},deleteComment:function(e){console.log("Delete called",e);var t=s.forEach((function(t){if(t.id===e)return t.childCommments}));console.log("Child",t);var n=s.filter((function(t){return console.log("filter",t.id,e),t.id!==e}));console.log({filteredComments:n}),d(n)}},children:t})}var u=n(4),b=n(12),O=["Icon","isActive","color","children"];var h=function(e){var t=e.Icon,n=e.isActive,c=e.color,o=e.children,s=Object(b.a)(e,O);return Object(l.jsxs)("button",Object(u.a)(Object(u.a)({className:"btn icon-btn ".concat(n?"icon-btn-active":""," ").concat(c||"")},s),{},{children:[Object(l.jsx)("span",{className:"".concat(null!=o?"mr-1":""),children:Object(l.jsx)(t,{})}),o]}))},v=n(6),x=new Intl.DateTimeFormat(void 0,{dateStyle:"medium",timeStyle:"short"});function f(e){var t=e.id,n=e.commentText,o=e.createdAt,s=Object(c.useState)(!1),i=Object(a.a)(s,2),r=i[0],m=i[1],j=Object(c.useState)(!1),u=Object(a.a)(j,2),b=u[0],O=u[1],f=Object(c.useState)(!1),C=Object(a.a)(f,2),N=C[0],S=C[1],A=d(),I=A.getReplies,R=A.createComment,k=A.updateComment,y=A.deleteComment,F=I(t);return console.log("Comment component"),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"comment",children:[Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("span",{className:"name",children:"Prameet"}),Object(l.jsx)("span",{className:"date",children:x.format(Date.parse(o))})]}),N?Object(l.jsx)(g,{autoFocus:!0,editOrReplyActive:N,initialValue:n,onSubmit:function(e){k(t,e),S(!1)}}):Object(l.jsx)("div",{className:"message",children:n}),Object(l.jsxs)("div",{className:"footer",children:[Object(l.jsx)(h,{onClick:function(){return O((function(e){return!e}))},isActive:b,Icon:v.b,"aria-label":b?"Cancel Reply":"Reply"}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(h,{onClick:function(){return S((function(e){return!e}))},isActive:N,Icon:v.a,"aria-label":N?"Cancel Edit":"Edit"}),Object(l.jsx)(h,{onClick:function(e){y(t)},Icon:v.c,"aria-label":"Delete",color:"danger"})]})]})]}),b&&Object(l.jsx)("div",{className:"mt-1 ml-3",children:Object(l.jsx)(g,{autoFocus:!0,editOrReplyActive:b,onSubmit:function(e){R(e,!1,t),O(!1)}})}),(null===F||void 0===F?void 0:F.length)>0&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"nested-comments-stack ".concat(r?"hide":""),children:[Object(l.jsx)("button",{className:"collapse-line","aria-label":"Hide Replies",onClick:function(){return m(!0)}}),Object(l.jsx)("div",{className:"nested-comments",children:Object(l.jsx)(p,{comments:F})})]}),Object(l.jsx)("button",{className:"btn mt-1 ".concat(r?"":"hide"),onClick:function(){return m(!1)},children:"Show Replies"})]})]})}var p=function(e){var t=e.comments;return console.log("CommentList component"),t.map((function(e){return Object(l.jsx)("div",{className:"comment-stack",children:Object(l.jsx)(f,Object(u.a)({},e))},e.id)}))};function g(e){var t=e.editOrReplyActive,n=void 0!==t&&t,o=e.onSubmit,s=void 0===o?void 0:o,i=e.autoFocus,r=void 0!==i&&i,m=e.initialValue,j=void 0===m?"":m;console.log("Comment form");var u=Object(c.useState)(j),b=Object(a.a)(u,2),O=b[0],h=b[1],v=d(),x=v.rootComments,f=v.createComment;return console.log("Message",O,x),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),O.length>0&&(s?s(O):f(O),h(""))},children:Object(l.jsxs)("div",{className:"comment-form-row",children:[Object(l.jsx)("textarea",{autoFocus:r,value:O,onChange:function(e){return h(e.target.value)},className:"message-input"}),Object(l.jsx)("button",{className:"btn",type:"submit",children:"Post"})]})}),!n&&null!=x&&x.length>0&&Object(l.jsx)("div",{className:"mt-4",children:Object(l.jsx)(p,{comments:x})})]})}function C(){return console.log("App Comp"),Object(l.jsx)(j,{children:Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Hello CodeSandbox"}),Object(l.jsx)("h2",{children:"Start editing to see some magic happen!"}),Object(l.jsx)(g,{})]})})}var N=document.getElementById("root");Object(s.createRoot)(N).render(Object(l.jsx)(c.StrictMode,{children:Object(l.jsx)(C,{})}))}},[[26,1,2]]]);
//# sourceMappingURL=main.98fb71bf.chunk.js.map