(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[639],{52709:function(O,j,s){"use strict";s.r(j);var M=s(71194),m=s(48889),P=s(43358),E=s(34041),Be=s(9715),D=s(903),me=s(47673),v=s(29730),xe=s(13062),k=s(71230),je=s(89032),C=s(15746),ve=s(22385),Z=s(45777),Ce=s(58024),l=s(91894),pe=s(57663),g=s(71577),Oe=s(34669),x=s(54458),a=s(11849),Me=s(74379),V=s(38648),A=s(86582),d=s(2824),u=s(63804),Pe=s.n(u),$=s(49101),N=s(86333),e=s(85893),z=[{id:1,name:"\u9700\u6C42\u5206\u6790",assignedTo:"Alice",startDate:"2025-01-05",endDate:"2025-01-10",status:"\u8FDB\u884C\u4E2D",progress:50,risk:"\u4E2D"},{id:2,name:"\u8BBE\u8BA1\u9636\u6BB5",assignedTo:"Bob",startDate:"2025-01-11",endDate:"2025-01-20",status:"\u672A\u5F00\u59CB",progress:0,risk:"\u9AD8"},{id:3,name:"\u5F00\u53D1\u9636\u6BB5",assignedTo:"Charlie",startDate:"2025-01-21",endDate:"2025-02-15",status:"\u672A\u5F00\u59CB",progress:0,risk:"\u9AD8"},{id:4,name:"\u6D4B\u8BD5\u9636\u6BB5",assignedTo:"Dave",startDate:"2025-02-16",endDate:"2025-02-28",status:"\u672A\u5F00\u59CB",progress:0,risk:"\u9AD8"}],G={totalBudget:1e5,spent:35e3,remaining:65e3},H=[{id:1,description:"\u9700\u6C42\u4E0D\u660E\u786E",severity:"\u9AD8",mitigation:"\u8BE6\u7EC6\u9700\u6C42\u6587\u6863",status:"\u672A\u5904\u7406"},{id:2,description:"\u4EBA\u5458\u6D41\u5931",severity:"\u4E2D",mitigation:"\u589E\u52A0\u56E2\u961F\u5EFA\u8BBE\u6D3B\u52A8",status:"\u5DF2\u5904\u7406"},{id:3,description:"\u9884\u7B97\u8D85\u652F",severity:"\u9AD8",mitigation:"\u8C03\u6574\u9884\u7B97\u6216\u524A\u51CF\u6210\u672C",status:"\u672A\u5904\u7406"}],J=[{title:"\u9879\u76EE\u8FDB\u5EA6",chartData:[10,20,30,50,60,70,80],description:"\u9879\u76EE\u8FDB\u5EA6\u5C55\u793A\u3002"},{title:"\u9884\u7B97\u6D88\u8017",chartData:[10,25,35,45,60],description:"\u5C55\u793A\u9884\u7B97\u6D88\u8017\u60C5\u51B5\u3002"},{title:"\u98CE\u9669\u72B6\u51B5",chartData:[15,30,50,65,80],description:"\u5C55\u793A\u9879\u76EE\u98CE\u9669\u72B6\u6001\u7684\u53D8\u5316\u3002"}],Q=function(){var X=(0,u.useState)(z),T=(0,d.Z)(X,2),h=T[0],f=T[1],Y=(0,u.useState)(G),y=(0,d.Z)(Y,2),i=y[0],w=y[1],q=(0,u.useState)(H),R=(0,d.Z)(q,2),ee=R[0],F=R[1],te=(0,u.useState)(J),U=(0,d.Z)(te,2),se=U[0],Ae=U[1],ne=(0,u.useState)(!1),I=(0,d.Z)(ne,2),ae=I[0],p=I[1],re=(0,u.useState)({name:"",assignedTo:"",startDate:"",endDate:""}),K=(0,d.Z)(re,2),r=K[0],B=K[1],ue=(0,u.useState)(null),L=(0,d.Z)(ue,2),o=L[0],ie=L[1],le=(0,u.useState)(!1),W=(0,d.Z)(le,2),de=W[0],S=W[1],oe=function(){var n={id:h.length+1,name:r.name,assignedTo:r.assignedTo,startDate:r.startDate,endDate:r.endDate,status:"\u672A\u5F00\u59CB",progress:0,risk:"\u9AD8"};f([].concat((0,A.Z)(h),[n])),p(!1),B({name:"",assignedTo:"",startDate:"",endDate:""}),V.Z.success({message:"\u65B0\u589E\u4EFB\u52A1\u6210\u529F"})},_e=function(n){var c=h.map(function(_){return _.id===n.id?(0,a.Z)((0,a.Z)({},_),{},{progress:n.progress,risk:b(n.progress)}):_});f(c),ce(c)},b=function(n){return n<30?"\u9AD8":n<70?"\u4E2D":"\u4F4E"},Ee=function(n){w((0,a.Z)((0,a.Z)({},i),{},{spent:n,remaining:i.totalBudget-n})),De(n)},ce=function(n){var c=n.map(function(_){var he=b(_.progress);return(0,a.Z)((0,a.Z)({},_),{},{risk:he})});F(c)},De=function(n){n>i.totalBudget*.9&&F(function(c){return[].concat((0,A.Z)(c),[{id:4,description:"\u9884\u7B97\u8D85\u652F",severity:"\u9AD8",mitigation:"\u8C03\u6574\u9884\u7B97\u6216\u524A\u51CF\u6210\u672C",status:"\u672A\u5904\u7406"}])})},ge=function(n){ie(n),S(!0)};return(0,e.jsxs)("div",{style:{padding:"20px"},children:[(0,e.jsxs)(k.Z,{gutter:16,children:[(0,e.jsxs)(C.Z,{xs:24,sm:12,md:8,lg:8,xl:6,children:[(0,e.jsx)(l.Z,{title:"\u9879\u76EE\u8BA1\u5212\u4E0E\u8C03\u5EA6",bordered:!1,style:{marginBottom:16},children:(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"\u4EFB\u52A1\u8FDB\u5EA6\u4E0E\u7518\u7279\u56FE\uFF08\u7B80\u5316\u7248\uFF09"}),h.map(function(t){return(0,e.jsxs)("div",{style:{marginBottom:10},children:[(0,e.jsx)("div",{children:t.name}),(0,e.jsx)(x.Z,{percent:t.progress}),(0,e.jsx)(g.Z,{style:{marginTop:"10px"},onClick:function(){return _e((0,a.Z)((0,a.Z)({},t),{},{progress:t.progress+10}))},children:"\u589E\u52A0\u8FDB\u5EA6"}),(0,e.jsxs)("p",{children:["\u98CE\u9669: ",t.risk]})]},t.id)})]})}),(0,e.jsxs)(l.Z,{title:"\u4EFB\u52A1\u5206\u914D\u4E0E\u8FFD\u8E2A",bordered:!1,style:{marginBottom:16},children:[(0,e.jsx)(g.Z,{type:"primary",icon:(0,e.jsx)($.Z,{}),onClick:function(){return p(!0)},style:{marginBottom:16},children:"\u65B0\u589E\u4EFB\u52A1"}),h.map(function(t){return(0,e.jsxs)(l.Z,{title:t.name,extra:(0,e.jsx)(Z.Z,{title:"\u67E5\u770B\u8BE6\u60C5",children:(0,e.jsx)(g.Z,{onClick:function(){return ge(t)},type:"link",children:"\u8BE6\u60C5"})}),style:{marginBottom:16},children:[(0,e.jsxs)("p",{children:[(0,e.jsx)("strong",{children:"\u8D23\u4EFB\u4EBA:"})," ",t.assignedTo]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("strong",{children:"\u72B6\u6001:"})," ",t.status]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("strong",{children:"\u8FDB\u5EA6:"})," ",t.progress,"%"]}),(0,e.jsx)(x.Z,{percent:t.progress}),(0,e.jsxs)("p",{children:[(0,e.jsx)("strong",{children:"\u98CE\u9669:"})," ",t.risk]})]},t.id)})]})]}),(0,e.jsxs)(C.Z,{xs:24,sm:12,md:8,lg:8,xl:6,children:[(0,e.jsxs)(l.Z,{title:"\u9884\u7B97\u4E0E\u6210\u672C\u7BA1\u7406",bordered:!1,style:{marginBottom:16},children:[(0,e.jsxs)("p",{children:[(0,e.jsx)("strong",{children:"\u603B\u9884\u7B97:"})," $",i.totalBudget]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("strong",{children:"\u5DF2\u7528\u9884\u7B97:"})," $",i.spent]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("strong",{children:"\u5269\u4F59\u9884\u7B97:"})," $",i.remaining]}),(0,e.jsx)(x.Z,{percent:i.spent/i.totalBudget*100}),(0,e.jsx)(g.Z,{onClick:function(){return Ee(i.spent+5e3)},type:"primary",style:{marginTop:16},children:"\u589E\u52A0\u652F\u51FA"})]}),(0,e.jsx)(l.Z,{title:"\u98CE\u9669\u7BA1\u7406",bordered:!1,style:{marginBottom:16},children:ee.map(function(t){return(0,e.jsxs)(l.Z,{title:"\u98CE\u9669: ".concat(t.description),extra:(0,e.jsx)(Z.Z,{title:"\u5904\u7406\u98CE\u9669",children:(0,e.jsx)(g.Z,{type:"link",children:"\u5904\u7406"})}),style:{marginBottom:16},children:[(0,e.jsxs)("p",{children:[(0,e.jsx)("strong",{children:"\u4E25\u91CD\u6027:"})," ",t.severity]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("strong",{children:"\u5E94\u5BF9\u63AA\u65BD:"})," ",t.mitigation]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("strong",{children:"\u72B6\u6001:"})," ",t.status]})]},t.id)})})]}),(0,e.jsx)(C.Z,{xs:24,sm:12,md:8,lg:8,xl:12,children:(0,e.jsx)(l.Z,{title:"\u9879\u76EE\u62A5\u544A\u4E0E\u5206\u6790",bordered:!1,style:{marginBottom:16},children:se.map(function(t,n){return(0,e.jsx)(l.Z,{title:t.title,bordered:!1,style:{marginBottom:16},children:(0,e.jsx)(N.x,{data:{labels:Array.from({length:7},function(c,_){return"\u7B2C".concat(_+1,"\u5468")}),datasets:[{label:t.title,data:t.chartData,fill:!1,borderColor:"rgb(75, 192, 192)",tension:.1}]}})},n)})})})]}),(0,e.jsx)(m.Z,{title:"\u65B0\u589E\u4EFB\u52A1",visible:ae,onOk:oe,onCancel:function(){return p(!1)},children:(0,e.jsxs)(D.Z,{layout:"vertical",children:[(0,e.jsx)(D.Z.Item,{label:"\u4EFB\u52A1\u540D\u79F0",children:(0,e.jsx)(v.Z,{value:r.name,onChange:function(n){return B((0,a.Z)((0,a.Z)({},r),{},{name:n.target.value}))}})}),(0,e.jsx)(D.Z.Item,{label:"\u8D23\u4EFB\u4EBA",children:(0,e.jsxs)(E.Z,{value:r.assignedTo,onChange:function(n){return B((0,a.Z)((0,a.Z)({},r),{},{assignedTo:n}))},children:[(0,e.jsx)(E.Z.Option,{value:"Alice",children:"Alice"}),(0,e.jsx)(E.Z.Option,{value:"Bob",children:"Bob"}),(0,e.jsx)(E.Z.Option,{value:"Charlie",children:"Charlie"}),(0,e.jsx)(E.Z.Option,{value:"Dave",children:"Dave"})]})}),(0,e.jsx)(D.Z.Item,{label:"\u5F00\u59CB\u65E5\u671F",children:(0,e.jsx)(v.Z,{type:"date",value:r.startDate,onChange:function(n){return B((0,a.Z)((0,a.Z)({},r),{},{startDate:n.target.value}))}})}),(0,e.jsx)(D.Z.Item,{label:"\u7ED3\u675F\u65E5\u671F",children:(0,e.jsx)(v.Z,{type:"date",value:r.endDate,onChange:function(n){return B((0,a.Z)((0,a.Z)({},r),{},{endDate:n.target.value}))}})})]})}),(0,e.jsx)(m.Z,{title:"\u4EFB\u52A1\u8BE6\u60C5",visible:de,onCancel:function(){return S(!1)},footer:null,children:o&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("p",{children:[(0,e.jsx)("strong",{children:"\u4EFB\u52A1\u540D\u79F0:"})," ",o.name]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("strong",{children:"\u8D23\u4EFB\u4EBA:"})," ",o.assignedTo]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("strong",{children:"\u5F00\u59CB\u65E5\u671F:"})," ",o.startDate]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("strong",{children:"\u7ED3\u675F\u65E5\u671F:"})," ",o.endDate]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("strong",{children:"\u72B6\u6001:"})," ",o.status]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("strong",{children:"\u8FDB\u5EA6:"})," ",o.progress,"%"]}),(0,e.jsx)(x.Z,{percent:o.progress})]})})]})};j.default=Q},60442:function(O,j,s){var M=s(90939);function m(P,E){return M(P,E)}O.exports=m}}]);
