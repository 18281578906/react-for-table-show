(this["webpackJsonppay-helper"]=this["webpackJsonppay-helper"]||[]).push([[0],{213:function(e,t,a){e.exports=a(385)},218:function(e,t,a){},359:function(e,t,a){},382:function(e,t,a){},384:function(e,t,a){},385:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),c=a.n(r),o=(a(218),function(e,t){return{num:e.num,tabStatus:e.tabStatus,info:e.info,isPc:e.isPc}}),i=function(e,t){return{add:function(){e({type:"ADD"})},getInfo:function(t){e({type:"INFO",data:t})},getIsPc:function(t){e({type:"ISPC",bool:t})},activeTab:function(t){e({type:"TAB",index:t})}}},s=a(93),m=a(135),u=a(39),d=a(122),h=a(137),p=a.n(h),b=a(175),E=a(48),w=a(393),f=a(44),g=a(105),j=a(391),v=a(190),y=a(390),O=a(392),_=a(209),N=a(104),I=a(394),k=a(395),x=a(388),S=a(205),C=a(389),Y=a(176),q=a.n(Y),D=Object(N.b)(S.a),P="DragableBodyRow",J=function(e){var t=e.index,a=e.moveRow,n=e.className,r=e.style,c=Object(_.a)(e,["index","moveRow","className","style"]),o=l.a.useRef(),i=Object(I.a)({accept:P,collect:function(e){var a=(e.getItem()||{}).index;return a===t?{}:{isOver:e.isOver(),dropClassName:a<t?" drop-over-downward":" drop-over-upward"}},drop:function(e){a(e.index,t)}}),s=Object(E.a)(i,2),m=s[0],u=m.isOver,h=m.dropClassName,p=s[1],b=Object(k.a)({item:{type:P,index:t},collect:function(e){return{isDragging:e.isDragging()}}});return p((0,Object(E.a)(b,2)[1])(o)),l.a.createElement("tr",Object.assign({ref:o,className:"".concat(n).concat(u?h:""),style:Object(d.a)({cursor:"move"},r)},c))},R=function(e){var t=e.columns,a=Object(n.useState)(e.data),r=Object(E.a)(a,2),c=r[0],o=r[1],i={body:{row:J}},s=Object(n.useCallback)((function(e,t){var a=c[e];o(q()(c,{$splice:[[e,1],[t,0,a]]}))}),[c]),m=Object(n.useRef)(D);return l.a.createElement(x.a,{manager:m.current.dragDropManager},l.a.createElement(C.a,{columns:t,dataSource:c,components:i,onRow:function(e,t){return{index:t,moveRow:s}},showHeader:e.showHeader,pagination:e.pagination,rowSelection:e.rowSelection,scroll:{y:"170px"}}))},M=a(140),T=a.n(M),B=[];function F(e){var t=T.a.create({baseURL:"http://119.27.178.70:9501",timeout:1e4,headers:{"Cache-Control":"no-cache",Accept:"application/json","Content-Type":"application/json; charset=UTF-8",Token:JSON.parse(localStorage.getItem("loginInfo"))&&JSON.parse(localStorage.getItem("loginInfo")).token}});return t.interceptors.response.use((function(e){return e.data.result})),t.interceptors.request.use((function(t){return function(e){for(var t in B)B[t].url===T.a.defaults.baseURL+e.url&&(console.log("\u53d6\u6d88\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014-"),B[t].f(),console.log(B[t].url))}(e),t}),(function(e){return Promise.reject(e)})),new Promise((function(a,n){t(e).then((function(e){a(e)})).catch((function(e){e.response}))}))}var L=a(66),H=a.n(L),z=(a(359),w.a.Search),A=function(e){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)(!1),i=Object(E.a)(o,2),s=i[0],m=i[1],u=Object(n.useState)(!1),h=Object(E.a)(u,2),_=h[0],N=h[1],I=Object(n.useState)(!1),k=Object(E.a)(I,2),x=k[0],S=k[1],C=Object(n.useState)(null),Y=Object(E.a)(C,2),q=Y[0],D=Y[1],P=Object(n.useState)({}),J=Object(E.a)(P,2),M=J[0],T=J[1],B=Object(n.useState)(null),L=Object(E.a)(B,2),A=L[0],U=L[1],W=Object(n.useState)(null),K=Object(E.a)(W,2),Q=K[0],V=K[1],$=[{title:"\u5e8f\u53f7",dataIndex:"1",key:"1",width:200},{title:"\u9500\u552e\u8ba2\u5355",dataIndex:"order_id",key:"order_id",width:200},{title:"\u8d2d\u8d27\u5355\u4f4d",dataIndex:"customer_name",key:"customer_name",width:200},{title:"\u89c4\u683c\u578b\u53f7",dataIndex:"customer_model",key:"customer_model",width:200},{title:"\u4ea7\u54c1\u89c4\u683c(\u539a*\u5bbd*\u957f*\u53ea)",dataIndex:"product_model",key:"product_model",width:200},{title:"\u4ea4\u8d27\u65e5\u671f",dataIndex:"customer_require_date",key:"customer_require_date",width:200},{title:"\u5f00\u59cb\u65f6\u95f4",dataIndex:"start",key:"start",width:200},{title:"\u9884\u8ba1\u5b8c\u6210\u65f6\u95f4",dataIndex:"pre_date",key:"pre_date",width:200},{title:"\u5b8c\u6210\u65f6\u95f4",dataIndex:"complete_date",key:"complete_date",width:200},{title:"\u6295\u6599\u5355\u5355\u53f7",dataIndex:"feed_id",key:"feed_id",width:200},{title:"\u603b\u5e73\u65b9\u6570",dataIndex:"square",key:"square",width:200},{title:"\u63d0\u4f9b\u751f\u4ea7\u6279\u53f7",dataIndex:"support_create_number",key:"support_create_number",width:200},{title:"\u662f\u5426\u53ef\u63a5\u819c",dataIndex:"is_add_membran",key:"13",width:200},{title:"\u662f\u5426\u53ef\u591a\u7c73",dataIndex:"14",key:"14",width:200},{title:"\u662f\u5426\u53ef\u5c11\u7c73",dataIndex:"15",key:"15",width:200},{title:"\u662f\u5426\u53ef\u5f69\u7eb9\u5370",dataIndex:"16",key:"16",width:200},{title:"\u662f\u5426\u53ef\u6362\u89c4\u683c",dataIndex:"17",key:"17",width:200},{title:"\u5907\u6ce8",dataIndex:"18",key:"18",width:200},{title:"\u5f02\u5e38\u5907\u6ce8",dataIndex:"19",key:"19",width:200},{title:"\u64cd\u4f5c",dataIndex:"19",key:"19",width:200,fixed:"right",render:function(e){return l.a.createElement("div",null,l.a.createElement(f.a,{size:"small",type:"primary",onClick:function(){return m(!0)}},"QC"),l.a.createElement(f.a,{size:"small",type:"primary"},"\u5b8c\u6210"),l.a.createElement(f.a,{size:"small",danger:!0},"\u5f02\u5e38"),l.a.createElement(f.a,{size:"small",danger:!0},"\u4e8c\u7ef4\u7801"))}}],G=function(){var e=Object(b.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F({method:"get",url:"",params:t});case 2:a=e.sent,T(a),D(a.shift),V(a.date);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){c(!1),G({page:1,pageSize:10})}),[]);var X=[{key:"1",1:"John Brown",2:32,3:"New York ",4:"hhh",5:2122,6:"hjhj",7:"www",8:12,9:"hjuhju",10:"jweiwj",11:"John Brown",12:32,13:"New Yo",14:"hhh",15:2122,16:"hjhj",17:"www",18:12,19:"hjuhju"},{key:"2",1:"John Brown",2:32,3:"New York ",4:"hhh",5:2122,6:"hjhj",7:"www",8:12,9:"hjuhju",10:"jweiwj",11:"John Brown",12:32,13:"New Yo",14:"hhh",15:2122,16:"hjhj",17:"www",18:12,19:"hjuhju"},{key:"3",1:"John Brown",2:32,3:"New York ",4:"hhh",5:2122,6:"hjhj",7:"www",8:12,9:"hjuhju",10:"jweiwj",11:"John Brown",12:32,13:"New Yo",14:"hhh",15:2122,16:"hjhj",17:"www",18:12,19:"hjuhju"}],Z=g.a.Option;function ee(e){console.log("search:",e)}var te=j.a.useForm(),ae=Object(E.a)(te,1)[0],ne={onChange:function(e,t){console.log("selectedRowKeys: ".concat(e),"selectedRows: ",t)},getCheckboxProps:function(e){return{disabled:"Disabled User"===e.name,name:e.name}}};return l.a.createElement(v.a,{spinning:r},l.a.createElement("div",{className:"together2"},l.a.createElement("div",{className:"menu-header"},l.a.createElement("div",{className:"header-top"},l.a.createElement("div",{className:"top-time"},Q&&l.a.createElement(y.a,{style:{width:"160px"},onChange:function(e){var t=e.format("YYYY-MM-DD");console.log(t);var a=new Date(t).getTime(t),n=function(e){var t=new Date(1e3*e);return t.getFullYear()+"-"+((t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-")+(t.getDate()+" ")+(t.getHours()+":")+(t.getMinutes()+":")+t.getSeconds()}(a);console.log(n),G({page:1,pageSize:10,date:a})},defaultValue:H()("2020\u5e74"+Q,"YYYY\u5e74MM\u6708DD\u65e5"),format:"YYYY\u5e74MM\u6708DD\u65e5"}),"            "),l.a.createElement("div",{className:"top-time"},M.week),l.a.createElement("div",{className:"top-time"},l.a.createElement(g.a,{className:"pic",showSearch:!0,style:{width:90,height:32,borderRadius:3,backgroundColor:"rgba(255, 255, 255, 1) ",marginRight:15},placeholder:"\u8bf7\u9009\u62e9\u73ed\u6b21",optionFilterProp:"children",onChange:function(e){console.log("selected ".concat(e)),G({page:1,pageSize:10,day_shift:e})},onSearch:ee,filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},value:q},M.shifts&&M.shifts.map((function(e){return l.a.createElement(Z,{key:e.value,value:e.key},e.value)}))))),l.a.createElement("div",{className:"header_center"},l.a.createElement("div",{className:"center_select line"},l.a.createElement(g.a,{showSearch:!0,style:{width:160,marginRight:15},placeholder:"\u8bf7\u9009\u62e9",optionFilterProp:"children",onChange:function(e){console.log("selected ".concat(e)),U(e)},onSearch:ee,filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},value:A},console.log(M.complete_rate),M.complete_rate&&M.complete_rate.map((function(e,t){return l.a.createElement(Z,{key:e.equipment_type_message,value:e.equipment_type_message},e.equipment_type_message)})))),l.a.createElement("div",{className:"center_number line"}," \u5b8c\u6210\u7387(","\u65e7\u7ebf"===A?M.complete_rate&&M.complete_rate[0].rate:M.complete_rate&&M.complete_rate[1].rate,")",l.a.createElement(f.a,{type:"primary",className:"btn",onClick:function(){return S(!0)}},"\u5bfc\u51fa\u4e3aExcel")))),l.a.createElement("div",{className:"pan"},l.a.createElement("div",{className:"search"},l.a.createElement("div",{className:"line"},l.a.createElement("p",{className:"pic"},"\u751f\u4ea7\u7ebf"),l.a.createElement("div",{className:"input_wrap"},l.a.createElement(g.a,{className:"pic",showSearch:!0,style:{width:300,height:32,borderRadius:3,backgroundColor:"rgba(255, 255, 255, 1) ",marginRight:15},placeholder:"\u8bf7\u9009\u62e9\u751f\u4ea7\u7ebf",optionFilterProp:"children",onChange:function(e){console.log("selected ".concat(e))},onSearch:ee,filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0}},M.equipment&&M.equipment.map((function(e){return l.a.createElement(Z,{key:e.name,value:e.name},e.name)}))),l.a.createElement(z,{placeholder:"\u8bf7\u8f93\u5165\u5ba2\u6237\u540d\u6216\u89c4\u683c\u578b\u53f7"}))))),l.a.createElement("div",{className:"together-content"},l.a.createElement("div",{className:"showTable_mobile"},l.a.createElement("div",{className:"table"},l.a.createElement("div",{className:"table_left"},l.a.createElement(y.a,{className:"line_input",placeholder:"\u8bf7\u8f93\u5165\u7ef4\u62a4\u65f6\u95f4",format:"YYYY\u5e74MM\u6708DD\u65e5"}),l.a.createElement(y.a,{className:"line_input",placeholder:"\u8bf7\u8f93\u5165\u5f02\u5e38\u505c\u673a\u65f6\u95f4",format:"YYYY\u5e74MM\u6708DD\u65e5"}),l.a.createElement("div",{className:"product_name line_input"},"C09"),l.a.createElement("div",{className:"success_percent line_input"},"\u5b8c\u6210\u7387(",l.a.createElement("span",null,"10"),"%)")),l.a.createElement("div",{className:"table_right"},l.a.createElement("div",{className:"table_container"},l.a.createElement("div",{className:"table_line"},l.a.createElement("div",{className:"tabel_type"},l.a.createElement("p",null,"\u6b63\u5728\u751f\u4ea7")),l.a.createElement("div",{className:"type_table"}," ",l.a.createElement(R,{showHeader:!0,data:[{key:"1",1:"John Brown",2:32,3:"New York ",4:"hhh",5:2122,6:"hjhj",7:"www",8:12,9:"hjuhju",10:"jweiwj",11:"John Brown",12:32,13:"New Yo",14:"hhh",15:2122,16:"hjhj",17:"www",18:12,19:"hjuhju"}],columns:$,pagination:!1}))),l.a.createElement("div",{className:"table_line"},l.a.createElement("div",{className:"tabel_type"},l.a.createElement("p",null,"\u5c06\u8981\u751f\u4ea7")),l.a.createElement("div",{className:"type_table"}," ",l.a.createElement(R,{showHeader:!1,data:X,columns:$,pagination:!1}))),l.a.createElement("div",{className:"table_line"},l.a.createElement("div",{className:"tabel_type"},l.a.createElement("p",null,"\u5df2\u5b8c\u6210\u751f\u4ea7")),l.a.createElement("div",{className:"type_table"}," ",l.a.createElement(R,{showHeader:!1,data:X,columns:$,pagination:!1}))),l.a.createElement("div",{className:"table_line"},l.a.createElement("div",{className:"tabel_type"},l.a.createElement("p",null,"\u751f\u4ea7\u5f02\u5e38")),l.a.createElement("div",{className:"type_table"}," ",l.a.createElement(R,{showHeader:!1,data:X,columns:$})))))))),l.a.createElement(O.a,{title:"qc\u6570\u636e\u663e\u793a",visible:s,okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return m(!1)},onCancel:function(){return m(!1)}},l.a.createElement(j.a,Object.assign({},{labelCol:{span:6},wrapperCol:{span:16}},{form:ae,name:"control-hooks",onFinish:function(e){console.log(e)}}),l.a.createElement(j.a.Item,{name:"\u751f\u4ea7\u6279\u53f7",label:"\u751f\u4ea7\u6279\u53f7",rules:[{required:!0}]},l.a.createElement(w.a,null)),l.a.createElement(j.a.Item,{name:"\u8981\u6c42\u79bb\u578b\u529b",label:"\u5ba2\u6237\u7c7b\u578b",rules:[{required:!0}]},l.a.createElement(w.a,null)),l.a.createElement(j.a.Item,{name:"\u539a\u5ea6",label:"\u539a\u5ea6",rules:[{required:!0}]},l.a.createElement(w.a,null)),l.a.createElement(j.a.Item,{name:"\u5bbd\u5ea6",label:"\u5bbd\u5ea6",rules:[{required:!0}]},l.a.createElement(w.a,null)),l.a.createElement(j.a.Item,{name:"\u957f\u5ea6",label:"\u957f\u5ea6",rules:[{required:!0}]},l.a.createElement(w.a,null)),l.a.createElement(j.a.Item,{name:"\u5b9e\u6d4b\u79bb\u578b\u529b",label:"\u5b9e\u6d4b\u79bb\u578b\u529b",rules:[{required:!0}]},l.a.createElement(w.a,null)),l.a.createElement(j.a.Item,{name:"\u6d82\u5e03\u79bb\u578b\u529b",label:"\u6d82\u5e03\u79bb\u578b\u529b",rules:[{required:!0}]},l.a.createElement(w.a,null)),l.a.createElement(j.a.Item,{name:"\u5185\u7ba1",label:"\u5185\u7ba1",rules:[{required:!0}]},l.a.createElement(w.a,null)),l.a.createElement(j.a.Item,{name:"\u6536\u5377 \u4e0d\u826f",label:"\u6536\u5377 \u4e0d\u826f",rules:[{required:!0}]},l.a.createElement(w.a,null)),l.a.createElement(j.a.Item,{name:"\u64e6\u82b1",label:"\u64e6\u82b1",rules:[{required:!0}]},l.a.createElement(w.a,null)),l.a.createElement(j.a.Item,{name:"\u538b\u75d5/\u8936\u76b1",label:"\u538b\u75d5/\u8936\u76b1",rules:[{required:!0}]},l.a.createElement(w.a,null)),l.a.createElement(j.a.Item,{name:"\u810f\u6c61/\u767d\u5370",label:"\u810f\u6c61/\u767d\u5370",rules:[{required:!0}]},l.a.createElement(w.a,null)),l.a.createElement(j.a.Item,{name:"\u63a5\u5934/\u6279\u53f7\u8bf4\u660e",label:"\u63a5\u5934/\u6279\u53f7\u8bf4\u660e",rules:[{required:!0}]},l.a.createElement(w.a,null)),l.a.createElement(j.a.Item,{name:"\u751f\u4ea7\u5377\u6570",label:"\u751f\u4ea7\u5377\u6570",rules:[{required:!0}]},l.a.createElement(w.a,null)),l.a.createElement(j.a.Item,{name:"\u5224\u5b9a",label:"\u5224\u5b9a",rules:[{required:!0}]},l.a.createElement(w.a,null)),l.a.createElement(j.a.Item,{name:"\u68c0\u9a8c\u5458",label:"\u68c0\u9a8c\u5458",rules:[{required:!0}]},l.a.createElement(w.a,null)),l.a.createElement(j.a.Item,{name:"\u5907\u6ce8",label:"\u5907\u6ce8",rules:[{required:!0}]},l.a.createElement(w.a,null)))),l.a.createElement(O.a,{title:"\u4e0b\u4e00\u73ed\u5c06\u8981\u751f\u4ea7",visible:_,okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return N(!1)},onCancel:function(){return N(!1)},width:1080},l.a.createElement(R,{showHeader:!0,columns:$,data:X,rowSelection:Object(d.a)({},ne)})),l.a.createElement(O.a,{title:"\u8bf7\u9009\u62e9\u65e5\u671f",visible:x,okText:"\u4e0b\u8f7d\u5f02\u5e38\u6e05\u5355",cancelText:"\u4e0b\u8f7d\u5df2\u5b8c\u6210\u6e05\u5355",onOk:function(){return S(!1)},onCancel:function(){return S(!1)},width:400},l.a.createElement(y.a,{placeholder:"\u8bf7\u9009\u62e9\u65f6\u95f4",style:{marginLeft:15,width:300}}))))},U=(a(382),{});var W=Object(s.b)(o,i)((function(e){var t=Object(u.g)();return e.info||(console.log(t,e),t.push("/login")),l.a.createElement("div",null,Object.values(U).map((function(e){return l.a.createElement(u.b,{path:e.url,exact:!0,component:e.page,key:e.url})})),l.a.createElement("div",null,console.log(e.isPc),"init"!==e.isPc?l.a.createElement(l.a.Fragment,null,(e.isPc,l.a.createElement(A,null))):null))}));a(384);var K=Object(s.b)(o,i)((function(e){return Object(n.useEffect)((function(){e.getIsPc(function(){var e=navigator.userAgent;console.log(e);for(var t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],a=!0,n=0;n<t.length;n++)if(e.indexOf(t[n])>0){a=!1;break}return a}()),localStorage.getItem("loginInfo")?Object.keys(JSON.parse(localStorage.getItem("loginInfo")))[0]&&e.getInfo(JSON.parse(localStorage.getItem("loginInfo"))):e.getInfo({})}),[e.IsPC]),l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,null,l.a.createElement(u.d,null,l.a.createElement(u.b,{path:"/",exact:!0,component:W}),l.a.createElement(u.a,{to:"/404"}))))})),Q=a(81),V=a(201),$={num:0,tabStatus:0,info:{},isPc:"init"},G=Object(Q.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":e.num++;break;case"TAB":e.tabStatus=t.index;break;case"INFO":e.info=t.data;break;case"ISPC":e.isPc=t.bool;break;default:return e}return JSON.parse(JSON.stringify(e))}),Object(V.composeWithDevTools)());c.a.render(l.a.createElement(s.a,{store:G},l.a.createElement(K,null)),document.getElementById("root"))}},[[213,1,2]]]);
//# sourceMappingURL=main.4426bb35.chunk.js.map