(this["webpackJsonppay-helper"]=this["webpackJsonppay-helper"]||[]).push([[0],{218:function(e,a,t){e.exports=t(392)},223:function(e,a,t){},362:function(e,a,t){},388:function(e,a,t){},389:function(e,a,t){},390:function(e,a,t){},392:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(12),c=t.n(l),o=(t(223),function(e,a){return{num:e.num,tabStatus:e.tabStatus,info:e.info,isPc:e.isPc}}),i=function(e,a){return{add:function(){e({type:"ADD"})},getInfo:function(a){e({type:"INFO",data:a})},getIsPc:function(a){e({type:"ISPC",bool:a})},activeTab:function(a){e({type:"TAB",index:a})}}},s=t(76),m=t(101),u=t(39),d=t(130),h=t(65),p=t.n(h),E=t(96),b=t(54),f=t(399),w=t(45),g=t(108),v=t(398),j=t(196),y=t(400),N=t(397),O=t(147),I=t.n(O),x=[];function k(e){var a=I.a.create({baseURL:"http://120.26.58.108:9501",timeout:1e4,headers:{"Content-Type":"application/x-www-form-urlencoded",Token:JSON.parse(localStorage.getItem("loginInfo"))&&JSON.parse(localStorage.getItem("loginInfo")).token}});return a.interceptors.response.use((function(e){return e.data.result})),a.interceptors.request.use((function(a){return function(e){for(var a in x)x[a].url===I.a.defaults.baseURL+e.url&&(console.log("\u53d6\u6d88\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014-"),x[a].f(),console.log(x[a].url))}(e),a}),(function(e){return Promise.reject(e)})),new Promise((function(t,n){a(e).then((function(e){t(e)})).catch((function(e){e.response}))}))}var S=k,C=t(401),_=t(214),P=t(107),q=t(402),J=t(403),T=t(395),B=t(210),R=t(396),F=t(183),D=t.n(F),H=Object(P.b)(B.a),Y="DragableBodyRow",A=function(e){var a=e.index,t=e.moveRow,n=e.className,l=e.style,c=Object(_.a)(e,["index","moveRow","className","style"]),o=r.a.useRef(),i=Object(q.a)({accept:Y,collect:function(e){var t=(e.getItem()||{}).index;return t===a?{}:{isOver:e.isOver(),dropClassName:t<a?" drop-over-downward":" drop-over-upward"}},drop:function(e){t(e.index,a)}}),s=Object(b.a)(i,2),m=s[0],u=m.isOver,h=m.dropClassName,p=s[1],E=Object(J.a)({item:{type:Y,index:a},collect:function(e){return{isDragging:e.isDragging()}}});return p((0,Object(b.a)(E,2)[1])(o)),r.a.createElement("tr",Object.assign({ref:o,className:"".concat(n).concat(u?h:""),style:Object(d.a)({cursor:"move"},l)},c))},L=function(e){var a=e.columns,t=Object(n.useState)(e.data),l=Object(b.a)(t,2),c=l[0],o=l[1],i={body:{row:A}},s=Object(n.useCallback)((function(e,a){var t=c[e];o(D()(c,{$splice:[[e,1],[a,0,t]]}))}),[c]),m=Object(n.useRef)(H);return r.a.createElement(T.a,{manager:m.current.dragDropManager},r.a.createElement(R.a,{columns:a,dataSource:c,components:i,onRow:function(e,a){return{index:a,moveRow:s}},showHeader:e.showHeader,pagination:e.pagination,rowSelection:e.rowSelection,scroll:{y:"170px"}}))},z=(t(362),f.a.confirm,function(e){var a=Object(u.g)(),t=Object(n.useState)(!1),l=Object(b.a)(t,2),c=l[0],o=l[1],i=Object(n.useState)(!1),s=Object(b.a)(i,2),m=s[0],h=s[1],O=Object(n.useState)(!1),I=Object(b.a)(O,2),x=I[0],S=I[1],_=Object(n.useState)(!1),P=Object(b.a)(_,2),q=P[0],J=P[1],T=Object(n.useState)([{id:1,name:"\u6b63\u5728\u751f\u4ea7",mm:[1,2,3]},{id:2,name:"\u5c06\u8981\u751f\u4ea7",mm:[4,5,6]},{id:3,name:"\u5df2\u5b8c\u6210\u751f\u4ea7",mm:[7,8,9]},{id:4,name:"\u751f\u4ea7\u5f02\u5e38",mm:[10,11,12]}]),B=Object(b.a)(T,2),R=B[0],F=B[1];console.log(R);var D=function(){var e=Object(E.a)(p.a.mark((function e(a){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k({method:"post",url:"/merchant/v1/shop/shop/together/list",params:a});case 2:(t=e.sent)&&F(t.list);case 4:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),H=[{title:"\u5e8f\u53f7",dataIndex:"1",key:"1",width:200},{title:"\u9500\u552e\u8ba2\u5355",dataIndex:"2",key:"2",width:200},{title:"\u8d2d\u8d27\u5355\u4f4d",dataIndex:"3",key:"3",width:200},{title:"\u89c4\u683c\u578b\u53f7",dataIndex:"4",key:"4",width:200},{title:"\u4ea7\u54c1\u89c4\u683c(\u539a*\u5bbd*\u957f*\u53ea)",dataIndex:"5",key:"5",width:200},{title:"\u4ea4\u8d27\u65e5\u671f",dataIndex:"6",key:"6",width:200},{title:"\u5f00\u59cb\u65f6\u95f4",dataIndex:"7",key:"7",width:200},{title:"\u9884\u8ba1\u5b8c\u6210\u65f6\u95f4",dataIndex:"8",key:"8",width:200},{title:"\u5b8c\u6210\u65f6\u95f4",dataIndex:"9",key:"9",width:200},{title:"\u6295\u6599\u5355\u5355\u53f7",dataIndex:"10",key:"10",width:200},{title:"\u603b\u5e73\u65b9\u6570",dataIndex:"11",key:"11",width:200},{title:"\u63d0\u4f9b\u751f\u4ea7\u6279\u53f7",dataIndex:"12",key:"12",width:200},{title:"\u662f\u5426\u53ef\u63a5\u819c",dataIndex:"13",key:"13",width:200},{title:"\u662f\u5426\u53ef\u591a\u7c73",dataIndex:"14",key:"14",width:200},{title:"\u662f\u5426\u53ef\u5c11\u7c73",dataIndex:"15",key:"15",width:200},{title:"\u662f\u5426\u53ef\u5f69\u7eb9\u5370",dataIndex:"16",key:"16",width:200},{title:"\u662f\u5426\u53ef\u6362\u89c4\u683c",dataIndex:"17",key:"17",width:200},{title:"\u5907\u6ce8",dataIndex:"18",key:"18",width:200},{title:"\u5f02\u5e38\u5907\u6ce8",dataIndex:"19",key:"19",width:200},{title:"\u64cd\u4f5c",dataIndex:"19",key:"19",width:200,fixed:"right",render:function(e){return r.a.createElement("div",null,r.a.createElement(w.a,{size:"small",type:"primary",onClick:function(){return h(!0)}},"QC"),r.a.createElement(w.a,{size:"small",type:"primary"},"\u5b8c\u6210"),r.a.createElement(w.a,{size:"small",danger:!0},"\u5f02\u5e38"))}}],Y=function(){var e=Object(E.a)(p.a.mark((function e(){var a,t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k({method:"post",url:"/merchant/v1/shop/shop/info"});case 2:(a=e.sent)&&(t={shop_id:a.shop.shop_id},D(t));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){Y(),JSON.parse(localStorage.getItem("loginInfo"))||(C.b.error("\u8bf7\u5148\u767b\u5f55\uff01"),a.replace("/login")),o(!1)}),[]);var A=[{key:"1",1:"John Brown",2:32,3:"New York ",4:"hhh",5:2122,6:"hjhj",7:"www",8:12,9:"hjuhju",10:"jweiwj",11:"John Brown",12:32,13:"New Yo",14:"hhh",15:2122,16:"hjhj",17:"www",18:12,19:"hjuhju"},{key:"2",1:"John Brown",2:32,3:"New York ",4:"hhh",5:2122,6:"hjhj",7:"www",8:12,9:"hjuhju",10:"jweiwj",11:"John Brown",12:32,13:"New Yo",14:"hhh",15:2122,16:"hjhj",17:"www",18:12,19:"hjuhju"},{key:"3",1:"John Brown",2:32,3:"New York ",4:"hhh",5:2122,6:"hjhj",7:"www",8:12,9:"hjuhju",10:"jweiwj",11:"John Brown",12:32,13:"New Yo",14:"hhh",15:2122,16:"hjhj",17:"www",18:12,19:"hjuhju"}],z=g.a.Option;function U(e){console.log("selected ".concat(e))}function W(){console.log("blur")}function K(){console.log("focus")}function M(e){console.log("search:",e)}var Q=v.a.useForm(),$=Object(b.a)(Q,1)[0],G={onChange:function(e,a){console.log("selectedRowKeys: ".concat(e),"selectedRows: ",a)},getCheckboxProps:function(e){return{disabled:"Disabled User"===e.name,name:e.name}}};return r.a.createElement(j.a,{spinning:c},r.a.createElement("div",{className:"together2"},r.a.createElement("div",{className:"menu-header"},r.a.createElement("div",{className:"header-top"},r.a.createElement("div",{className:"top-time"},r.a.createElement("span",null,"10"),"\u6708",r.a.createElement("span",null,"5"),"\u65e5"),r.a.createElement("div",{className:"top-time"},"\u661f\u671f",r.a.createElement("span",null,"\u65e5")),r.a.createElement("div",{className:"top-time"},r.a.createElement("span",null,"\u591c\u73ed"))),r.a.createElement("div",{className:"header_center"},r.a.createElement("div",{className:"center_select line"},r.a.createElement(g.a,{showSearch:!0,style:{width:160,marginRight:15},placeholder:"\u8bf7\u9009\u62e9",optionFilterProp:"children",onChange:U,onFocus:K,onBlur:W,onSearch:M,filterOption:function(e,a){return a.children.toLowerCase().indexOf(e.toLowerCase())>=0}},r.a.createElement(z,{value:"new"},"\u65b0\u7ebf"),r.a.createElement(z,{value:"old"},"\u65e7\u7ebf"))),r.a.createElement("div",{className:"center_number line"}," \u5b8c\u6210\u7387(",r.a.createElement("span",null,"10"),"%)",r.a.createElement(w.a,{type:"primary",className:"btn",onClick:function(){return J(!0)}},"\u5bfc\u51fa\u4e3aExcel")))),r.a.createElement("div",{className:"pan"},r.a.createElement("div",{className:"search"},r.a.createElement("div",{className:"line"},r.a.createElement("p",{className:"pic"},"\u751f\u4ea7\u7ebf"),r.a.createElement("div",{className:"input_wrap"},r.a.createElement(g.a,{className:"pic",showSearch:!0,style:{width:300,height:32,borderRadius:3,backgroundColor:"rgba(255, 255, 255, 1) ",marginRight:15},placeholder:"\u8bf7\u9009\u62e9\u751f\u4ea7\u7ebf",optionFilterProp:"children",onChange:U,onFocus:K,onBlur:W,onSearch:M,filterOption:function(e,a){return a.children.toLowerCase().indexOf(e.toLowerCase())>=0}},r.a.createElement(z,{value:"C09"},"C09"),r.a.createElement(z,{value:"C10"},"C10"),r.a.createElement(z,{value:"C11"},"C11")),r.a.createElement(w.a,{className:"pic",type:"primary",htmlType:"button",style:{lineHeight:"0"},onClick:function(){return S(!0)}},"\u5207\u6362\u4e3a\u4e0b\u4e00\u73ed"))))),r.a.createElement("div",{className:"together-content"},r.a.createElement("div",{className:"showTable_mobile"},r.a.createElement("div",{className:"table"},r.a.createElement("div",{className:"table_left"},r.a.createElement(y.a,{className:"line_input",placeholder:"\u8bf7\u8f93\u5165\u7ef4\u62a4\u65f6\u95f4"}),r.a.createElement(y.a,{className:"line_input",placeholder:"\u8bf7\u8f93\u5165\u5f02\u5e38\u505c\u673a\u65f6\u95f4"}),r.a.createElement("div",{className:"product_name line_input"},"C09"),r.a.createElement("div",{className:"success_percent line_input"},"\u5b8c\u6210\u7387(",r.a.createElement("span",null,"10"),"%)")),r.a.createElement("div",{className:"table_right"},r.a.createElement("div",{className:"table_container"},r.a.createElement("div",{className:"table_line"},r.a.createElement("div",{className:"tabel_type"},r.a.createElement("p",null,"\u6b63\u5728\u751f\u4ea7")),r.a.createElement("div",{className:"type_table"}," ",r.a.createElement(L,{showHeader:!0,data:[{key:"1",1:"John Brown",2:32,3:"New York ",4:"hhh",5:2122,6:"hjhj",7:"www",8:12,9:"hjuhju",10:"jweiwj",11:"John Brown",12:32,13:"New Yo",14:"hhh",15:2122,16:"hjhj",17:"www",18:12,19:"hjuhju"}],columns:H,pagination:!1}))),r.a.createElement("div",{className:"table_line"},r.a.createElement("div",{className:"tabel_type"},r.a.createElement("p",null,"\u5c06\u8981\u751f\u4ea7")),r.a.createElement("div",{className:"type_table"}," ",r.a.createElement(L,{showHeader:!1,data:A,columns:H,pagination:!1}))),r.a.createElement("div",{className:"table_line"},r.a.createElement("div",{className:"tabel_type"},r.a.createElement("p",null,"\u5df2\u5b8c\u6210\u751f\u4ea7")),r.a.createElement("div",{className:"type_table"}," ",r.a.createElement(L,{showHeader:!1,data:A,columns:H,pagination:!1}))),r.a.createElement("div",{className:"table_line"},r.a.createElement("div",{className:"tabel_type"},r.a.createElement("p",null,"\u751f\u4ea7\u5f02\u5e38")),r.a.createElement("div",{className:"type_table"}," ",r.a.createElement(L,{showHeader:!1,data:A,columns:H})))))))),r.a.createElement(f.a,{title:"qc\u6570\u636e\u663e\u793a",visible:m,okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return h(!1)},onCancel:function(){return h(!1)}},r.a.createElement(v.a,Object.assign({},{labelCol:{span:6},wrapperCol:{span:16}},{form:$,name:"control-hooks",onFinish:function(e){console.log(e)}}),r.a.createElement(v.a.Item,{name:"\u751f\u4ea7\u6279\u53f7",label:"\u751f\u4ea7\u6279\u53f7",rules:[{required:!0}]},r.a.createElement(y.a,null)),r.a.createElement(v.a.Item,{name:"\u8981\u6c42\u79bb\u578b\u529b",label:"\u5ba2\u6237\u7c7b\u578b",rules:[{required:!0}]},r.a.createElement(y.a,null)),r.a.createElement(v.a.Item,{name:"\u539a\u5ea6",label:"\u539a\u5ea6",rules:[{required:!0}]},r.a.createElement(y.a,null)),r.a.createElement(v.a.Item,{name:"\u5bbd\u5ea6",label:"\u5bbd\u5ea6",rules:[{required:!0}]},r.a.createElement(y.a,null)),r.a.createElement(v.a.Item,{name:"\u957f\u5ea6",label:"\u957f\u5ea6",rules:[{required:!0}]},r.a.createElement(y.a,null)),r.a.createElement(v.a.Item,{name:"\u5b9e\u6d4b\u79bb\u578b\u529b",label:"\u5b9e\u6d4b\u79bb\u578b\u529b",rules:[{required:!0}]},r.a.createElement(y.a,null)),r.a.createElement(v.a.Item,{name:"\u6d82\u5e03\u79bb\u578b\u529b",label:"\u6d82\u5e03\u79bb\u578b\u529b",rules:[{required:!0}]},r.a.createElement(y.a,null)),r.a.createElement(v.a.Item,{name:"\u5185\u7ba1",label:"\u5185\u7ba1",rules:[{required:!0}]},r.a.createElement(y.a,null)),r.a.createElement(v.a.Item,{name:"\u6536\u5377 \u4e0d\u826f",label:"\u6536\u5377 \u4e0d\u826f",rules:[{required:!0}]},r.a.createElement(y.a,null)),r.a.createElement(v.a.Item,{name:"\u64e6\u82b1",label:"\u64e6\u82b1",rules:[{required:!0}]},r.a.createElement(y.a,null)),r.a.createElement(v.a.Item,{name:"\u538b\u75d5/\u8936\u76b1",label:"\u538b\u75d5/\u8936\u76b1",rules:[{required:!0}]},r.a.createElement(y.a,null)),r.a.createElement(v.a.Item,{name:"\u810f\u6c61/\u767d\u5370",label:"\u810f\u6c61/\u767d\u5370",rules:[{required:!0}]},r.a.createElement(y.a,null)),r.a.createElement(v.a.Item,{name:"\u63a5\u5934/\u6279\u53f7\u8bf4\u660e",label:"\u63a5\u5934/\u6279\u53f7\u8bf4\u660e",rules:[{required:!0}]},r.a.createElement(y.a,null)),r.a.createElement(v.a.Item,{name:"\u751f\u4ea7\u5377\u6570",label:"\u751f\u4ea7\u5377\u6570",rules:[{required:!0}]},r.a.createElement(y.a,null)),r.a.createElement(v.a.Item,{name:"\u5224\u5b9a",label:"\u5224\u5b9a",rules:[{required:!0}]},r.a.createElement(y.a,null)),r.a.createElement(v.a.Item,{name:"\u68c0\u9a8c\u5458",label:"\u68c0\u9a8c\u5458",rules:[{required:!0}]},r.a.createElement(y.a,null)),r.a.createElement(v.a.Item,{name:"\u5907\u6ce8",label:"\u5907\u6ce8",rules:[{required:!0}]},r.a.createElement(y.a,null)))),r.a.createElement(f.a,{title:"\u4e0b\u4e00\u73ed\u5c06\u8981\u751f\u4ea7",visible:x,okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return S(!1)},onCancel:function(){return S(!1)},width:1080},r.a.createElement(L,{showHeader:!0,columns:H,data:A,rowSelection:Object(d.a)({},G)})),r.a.createElement(f.a,{title:"\u8bf7\u9009\u62e9\u65e5\u671f",visible:q,okText:"\u4e0b\u8f7d\u5f02\u5e38\u6e05\u5355",cancelText:"\u4e0b\u8f7d\u5df2\u5b8c\u6210\u6e05\u5355",onOk:function(){return J(!1)},onCancel:function(){return J(!1)},width:400},r.a.createElement(N.a,{placeholder:"\u8bf7\u9009\u62e9\u65f6\u95f4",style:{marginLeft:15,width:300}}))))}),U=(t(388),{});var W=Object(s.b)(o,i)((function(e){var a=Object(u.g)();return e.info||(console.log(a,e),a.push("/login")),r.a.createElement("div",null,Object.values(U).map((function(e){return r.a.createElement(u.b,{path:e.url,exact:!0,component:e.page,key:e.url})})),r.a.createElement("div",null,console.log(e.isPc),"init"!==e.isPc?r.a.createElement(r.a.Fragment,null,(e.isPc,r.a.createElement(z,null))):null))})),K=(t(389),t(404)),M=t(405),Q=(t(390),t(391),{labelCol:{span:4},wrapperCol:{span:20},labelAlign:"left"}),$=Object(s.b)(o,i)((function(e){var a=Object(n.useState)("40%"),t=Object(b.a)(a,2),l=t[0],c=t[1],o=Object(u.g)(),i=function(){var e=Object(E.a)(p.a.mark((function e(a,t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S({method:"post",url:"/merchant/v1/login",params:{account:a,password:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}(),s=function(){var a=Object(E.a)(p.a.mark((function a(t){var n,r,l;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=t.username,r=t.password,a.next=3,i(n,r);case 3:(l=a.sent)?(o.push("/"),localStorage.setItem("loginInfo",JSON.stringify(l)),e.getInfo(l),window.location.reload("/"),C.b.success("\u767b\u5f55\u6210\u529f\uff01")):C.b.error("\u5bc6\u7801\u6216\u7528\u6237\u540d\u9519\u8bef\uff01");case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(n.useEffect)((function(){!0===e.isPc?c("400px"):c("40% ")}),[e.isPc]),r.a.createElement("div",{className:"page-login"},r.a.createElement("div",{className:"login-wrap"},r.a.createElement("div",{className:"login-box",style:{width:l}},r.a.createElement(v.a,Object.assign({className:"login-form",onFinish:s,onFinishFailed:function(e){console.log("err",e)}},Q),r.a.createElement(v.a.Item,{label:"\u8d26\u53f7",name:"username",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"}]},r.a.createElement(y.a,{prefix:r.a.createElement(K.a,{style:{color:"rgba(0,0,0,.25)"}}),placeholder:"\u7528\u6237\u540d"})),r.a.createElement(v.a.Item,{label:"\u5bc6\u7801",name:"password",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u5bc6\u7801"}]},r.a.createElement(y.a,{prefix:r.a.createElement(M.a,{style:{color:"rgba(0,0,0,.25)"}}),type:"password",placeholder:"\u5bc6\u7801"})),r.a.createElement("div",{className:"ant-row ant-form-item"},r.a.createElement(w.a,{className:"form-button",shape:"round",type:"primary",htmlType:"submit"},"\u767b\u5f55"))))))}));var G=Object(s.b)(o,i)((function(e){return Object(n.useEffect)((function(){e.getIsPc(function(){var e=navigator.userAgent;console.log(e);for(var a=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],t=!0,n=0;n<a.length;n++)if(e.indexOf(a[n])>0){t=!1;break}return t}()),localStorage.getItem("loginInfo")?Object.keys(JSON.parse(localStorage.getItem("loginInfo")))[0]&&e.getInfo(JSON.parse(localStorage.getItem("loginInfo"))):e.getInfo({})}),[e.IsPC]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/login",exact:!0,component:$}),r.a.createElement(u.b,{path:"/",exact:!0,component:W}),r.a.createElement(u.a,{to:"/404"}))))})),V=t(82),X=t(206),Z={num:0,tabStatus:0,info:{},isPc:"init"},ee=Object(V.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD":e.num++;break;case"TAB":e.tabStatus=a.index;break;case"INFO":e.info=a.data;break;case"ISPC":e.isPc=a.bool;break;default:return e}return JSON.parse(JSON.stringify(e))}),Object(X.composeWithDevTools)());c.a.render(r.a.createElement(s.a,{store:ee},r.a.createElement(G,null)),document.getElementById("root"))}},[[218,1,2]]]);
//# sourceMappingURL=main.136db0a2.chunk.js.map