(this["webpackJsonppay-helper"]=this["webpackJsonppay-helper"]||[]).push([[0],{219:function(e,t,a){e.exports=a(396)},224:function(e,t,a){},360:function(e,t,a){},393:function(e,t,a){},395:function(e,t,a){},396:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(30),l=a.n(c),i=(a(224),function(e,t){return{num:e.num,tabStatus:e.tabStatus,info:e.info,isPc:e.isPc}}),o=function(e,t){return{add:function(){e({type:"ADD"})},getInfo:function(t){e({type:"INFO",data:t})},getIsPc:function(t){e({type:"ISPC",bool:t})},activeTab:function(t){e({type:"TAB",index:t})}}},s=a(96),m=a(144),u=a(37),d=a(100),p=a(38),f=a.n(p),b=a(60),h=a(35),_=a(404),g=a(401),E=a(405),v=a(109),y=a(402),w=a(45),O=a(195),k=a(403),j=a(215),x=a(108),S=a(406),I=a(407),N=a(399),q=a(208),C=a(400),Y=a(183),D=a.n(Y),P=Object(x.b)(q.a),T="DragableBodyRow",M=function(e){var t=e.index,a=e.moveRow,n=e.className,c=e.style,l=Object(j.a)(e,["index","moveRow","className","style"]),i=r.a.useRef(),o=Object(S.a)({accept:T,collect:function(e){var a=(e.getItem()||{}).index;return a===t?{}:{isOver:e.isOver(),dropClassName:a<t?" drop-over-downward":" drop-over-upward"}},drop:function(e){a(e.index,t)}}),s=Object(h.a)(o,2),m=s[0],u=m.isOver,p=m.dropClassName,f=s[1],b=Object(I.a)({item:{type:T,index:t},collect:function(e){return{isDragging:e.isDragging()}}});return f((0,Object(h.a)(b,2)[1])(i)),r.a.createElement("tr",Object.assign({ref:i,className:"".concat(n).concat(u?p:""),style:Object(d.a)({cursor:"move"},c)},l))},z=function(e){var t=e.columns,a=Object(n.useState)(e.data),c=Object(h.a)(a,2),l=c[0],i=c[1],o={body:{row:M}},s=Object(n.useCallback)((function(e,t){var a=l[e];console.log(e,t),i(D()(l,{$splice:[[e,1],[t,0,a]]}))}),[l]),m=Object(n.useRef)(P);return console.log(e.data),r.a.createElement(N.a,{manager:m.current.dragDropManager},r.a.createElement(C.a,{columns:t,dataSource:e.data,components:o,onRow:function(e,t){return{index:t,moveRow:s}},showHeader:e.showHeader,pagination:e.pagination,rowSelection:e.rowSelection,scroll:{y:"170px"},rowKey:function(e){return e.order_id}}))},R=a(148),F=a.n(R),H=[];function L(e){var t=F.a.create({baseURL:"http://119.27.178.70:9501",timeout:1e4,headers:{"Cache-Control":"no-cache",Accept:"application/json","Content-Type":"application/json; charset=UTF-8",Token:JSON.parse(localStorage.getItem("loginInfo"))&&JSON.parse(localStorage.getItem("loginInfo")).token}});return t.interceptors.response.use((function(e){return e.data.result})),t.interceptors.request.use((function(t){return function(e){for(var t in H)H[t].url===F.a.defaults.baseURL+e.url&&(console.log("\u53d6\u6d88\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014-"),H[t].f(),console.log(H[t].url))}(e),t}),(function(e){return Promise.reject(e)})),new Promise((function(a,n){t(e).then((function(e){a(e)})).catch((function(e){e.response}))}))}var A=a(68),J=a.n(A),B=(a(360),a(361)),U=_.a.Search,K=g.a.RangePicker,V=function(e){var t=Object(n.useState)(!1),a=Object(h.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(!1),o=Object(h.a)(i,2),s=o[0],m=o[1],u=Object(n.useState)(!1),p=Object(h.a)(u,2),j=p[0],x=p[1],S=Object(n.useState)(!1),I=Object(h.a)(S,2),N=I[0],q=I[1],C=Object(n.useState)(null),Y=Object(h.a)(C,2),D=Y[0],P=Y[1],T=Object(n.useState)(null),M=Object(h.a)(T,2),R=M[0],F=M[1],H=Object(n.useState)({}),A=Object(h.a)(H,2),V=A[0],W=A[1],Q=Object(n.useState)(null),$=Object(h.a)(Q,2),G=$[0],X=$[1],Z=Object(n.useState)(null),ee=Object(h.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(n.useState)([]),re=Object(h.a)(ne,2),ce=re[0],le=re[1],ie=Object(n.useState)(null),oe=Object(h.a)(ie,2),se=oe[0],me=oe[1],ue=Object(n.useState)(null),de=Object(h.a)(ue,2),pe=de[0],fe=de[1],be=Object(n.useState)(null),he=Object(h.a)(be,2),_e=he[0],ge=he[1],Ee=Object(n.useState)(null),ve=Object(h.a)(Ee,2),ye=ve[0],we=ve[1],Oe=Object(n.useState)(null),ke=Object(h.a)(Oe,2),je=ke[0],xe=ke[1],Se=Object(n.useState)(null),Ie=Object(h.a)(Se,2),Ne=Ie[0],qe=Ie[1],Ce=Object(n.useState)(null),Ye=Object(h.a)(Ce,2),De=Ye[0],Pe=Ye[1],Te=Object(n.useState)(!1),Me=Object(h.a)(Te,2),ze=Me[0],Re=Me[1],Fe=Object(n.useState)(null),He=Object(h.a)(Fe,2),Le=He[0],Ae=He[1],Je=function(){var e=Object(b.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return q(!0),e.next=3,Be(t);case 3:a=e.sent,W(a),F("\u767d\u73ed"===a.shift?1:2),xe(a.date),n=a.list&&a.list.list[0]&&a.list.list[0].task,le(a.list&&a.list.list[0]&&a.list.list[0]),n?n.forEach((function(e){1===Number(e.status)&&me(e.item),2===Number(e.status)&&fe(e.item),3===Number(e.status)&&ge(e.item),4===Number(e.status)&&we(e.item)})):(me(null),fe(null),ge(null),we(null)),q(!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Be=function(e){return L({method:"get",url:"",params:e})},Ue=function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L({method:"get",url:"/task/complete",params:t});case 2:E.b.success("\u72b6\u6001\u66f4\u65b0\u6210\u529f\uff01"),Je({page:1,pageSize:10,day_shift:R,date:D,equipment_id:te});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ke=function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L({method:"get",url:"/task/anomaly",params:t});case 2:E.b.success("\u72b6\u6001\u66f4\u65b0\u6210\u529f\uff01"),Je({page:1,pageSize:10,day_shift:R,date:D,equipment_id:te});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ve=function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L({method:"get",url:"/task/start",params:t});case 2:E.b.success("\u72b6\u6001\u66f4\u65b0\u6210\u529f\uff01"),Je({page:1,pageSize:10,day_shift:R,date:D,equipment_id:te});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),We=function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L({method:"get",url:"/task/renew",params:t});case 2:E.b.success("\u72b6\u6001\u66f4\u65b0\u6210\u529f\uff01"),Je({page:1,pageSize:10,day_shift:R,date:D,equipment_id:te});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Qe=function(){var e=Object(b.a)(f.a.mark((function e(t){var a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L({method:"get",url:"/task/qc",params:t});case 2:(a=e.sent)&&nt.setFieldsValue({create_number:a.qc.create_number,order_id:t.order_id,request_release_force:a.qc.request_release_force,ply:a.qc.ply,width:a.qc.width,length:a.qc.length,release_force:a.qc.release_force,coat_release_force:a.qc.coat_release_force,pipe:a.qc.pipe,winding_bad:a.qc.winding_bad,scratch:a.qc.scratch,wrinkled:a.qc.wrinkled,dirty:a.qc.dirty,batch_number:a.qc.batch_number,create_roll_number:a.qc.create_roll_number,judgment:a.qc.judgment,user:a.qc.user,comment:a.qc.comment,customer_name:a.info.customer_name,equipment_name:a.info.equipment_name,product_model:a.info.product_model});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$e=function(){var e=Object(b.a)(f.a.mark((function e(t){var a,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L({method:"get",url:"/task/export/complete",params:t});case 2:a=e.sent,Object.keys(a).length>0?(q(!0),(n=document.createElement("a")).download="\u5df2\u5b8c\u6210\u6e05\u5355",n.href=a.file,r=new MouseEvent("click"),n.dispatchEvent(r),q(!1)):E.b.error("\u5f53\u524d\u65f6\u95f4\u6682\u65e0\u6570\u636e");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ge=function(){var e=Object(b.a)(f.a.mark((function e(t){var a,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L({method:"get",url:"/task/export/anomaly",params:t});case 2:a=e.sent,Object.keys(a).length>0?(q(!0),(n=document.createElement("a")).download="\u5f02\u5e38\u6e05\u5355",n.href=a.file,r=new MouseEvent("click"),n.dispatchEvent(r),q(!1)):E.b.error("\u5f53\u524d\u65f6\u95f4\u6682\u65e0\u6570\u636e");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Xe=function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L({method:"get",url:"/task/export/anomaly",params:t});case 2:Je({page:1,pageSize:10,day_shift:R,date:D,equipment_id:te});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ze=function(){var e=Object(b.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L({method:"post",url:"/task/qc/update",params:t});case 2:Je({page:1,pageSize:10,day_shift:R,date:D,equipment_id:te}),E.b.success("\u66f4\u65b0\u6210\u529f\uff01");case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){Je({page:1,pageSize:10,day_shift:R,date:D,equipment_id:te})}),[]);var et=v.a.Option;function tt(e){console.log("search:",e)}var at=y.a.useForm(),nt=Object(h.a)(at,1)[0],rt={onChange:function(e,t){console.log("selectedRowKeys: ".concat(e),"selectedRows: ",t)},getCheckboxProps:function(e){return{disabled:"Disabled User"===e.name,name:e.name}}},ct=function(e,t){var a=t.status;return r.a.createElement("div",null,3===a?r.a.createElement(w.a,{size:"small",type:"primary",onClick:function(){return function(e){l(!0),Qe({order_id:e.order_id}),Ae(e.order_id)}(t)}},"QC"):"",4===a?r.a.createElement(w.a,{size:"small",type:"primary",onClick:function(){return function(e){We({order_id:e.order_id})}(t)}},"\u6062\u590d"):"",1===a?r.a.createElement(w.a,{size:"small",type:"primary",onClick:function(){return function(e){Ve({order_id:e.order_id})}(t)}},"\u5f00\u59cb"):"",2===a?r.a.createElement(w.a,{size:"small",type:"primary",onClick:function(){return function(e){Ue({order_id:e.order_id})}(t)}},"\u5b8c\u6210"):"",2===a?r.a.createElement(w.a,{size:"small",danger:!0,onClick:function(){return function(e){Ke({order_id:e.order_id,abnormal_comment:e.abnormal_comment})}(t)}},"\u5f02\u5e38"):"",1===a||2===a||3===a?r.a.createElement(w.a,{size:"small",danger:!0,onClick:function(){return function(e){console.log(e),Pe(e.feed_id),Re(!0)}(t)}},"\u4e8c\u7ef4\u7801"):"")},lt=[{title:"\u5e8f\u53f7",width:200,render:function(e,t,a){return r.a.createElement("span",null,a+1)}},{title:"\u9500\u552e\u8ba2\u5355",dataIndex:"order_id",key:"order_id",width:200},{title:"\u8d2d\u8d27\u5355\u4f4d",dataIndex:"customer_name",key:"customer_name",width:200},{title:"\u89c4\u683c\u578b\u53f7",dataIndex:"customer_model",key:"customer_model",width:200},{title:"\u4ea7\u54c1\u89c4\u683c(\u539a*\u5bbd*\u957f*\u53ea)",dataIndex:"product_model",key:"product_model",width:200},{title:"\u4ea4\u8d27\u65e5\u671f",dataIndex:"customer_require_date",key:"customer_require_date",width:200},{title:"\u5f00\u59cb\u65f6\u95f4",dataIndex:"start",key:"start",width:200},{title:"\u9884\u8ba1\u5b8c\u6210\u65f6\u95f4",dataIndex:"pre_date",key:"pre_date",width:200},{title:"\u5b8c\u6210\u65f6\u95f4",dataIndex:"complete_date",key:"complete_date",width:200},{title:"\u6295\u6599\u5355\u5355\u53f7",dataIndex:"feed_id",key:"feed_id",width:200},{title:"\u603b\u5e73\u65b9\u6570",dataIndex:"square",key:"square",width:200},{title:"\u63d0\u4f9b\u751f\u4ea7\u6279\u53f7",dataIndex:"support_create_number",key:"support_create_number",width:200},{title:"\u662f\u5426\u53ef\u63a5\u819c",dataIndex:"is_add_membrane",key:"is_add_membrane",width:200},{title:"\u662f\u5426\u53ef\u591a\u7c73",dataIndex:"is_more_mi",key:"is_more_mi",width:200},{title:"\u662f\u5426\u53ef\u5c11\u7c73",dataIndex:"is_less_mi",key:"is_less_mi",width:200},{title:"\u662f\u5426\u53ef\u5f69\u7eb9\u5370",dataIndex:"is_color_printing",key:"is_color_printing",width:200},{title:"\u662f\u5426\u53ef\u6362\u89c4\u683c",dataIndex:"is_change_specification",key:"is_change_specification",width:200},{title:"\u5907\u6ce8",dataIndex:"comment26",key:"comment26",width:200},{title:"\u5f02\u5e38\u5907\u6ce8",dataIndex:"abnormal_comment",key:"abnormal_comment",width:200},{title:"\u64cd\u4f5c",width:300,fixed:"right",render:function(e,t){return ct(0,t)}}];return r.a.createElement(O.a,{spinning:N},r.a.createElement("div",{className:"together2"},r.a.createElement("div",{className:"menu-header"},r.a.createElement("div",{className:"header-top"},r.a.createElement("div",{className:"top-time"},je&&r.a.createElement(g.a,{style:{width:"160px"},onChange:function(e){var t=e.format("YYYY-MM-DD"),a=new Date(t).getTime()/1e3;P(a),Je({page:1,pageSize:10,day_shift:R,date:a,equipment_id:te})},defaultValue:J()("2020\u5e74"+je,"YYYY\u5e74MM\u6708DD\u65e5"),format:"YYYY\u5e74MM\u6708DD\u65e5"}),"            "),r.a.createElement("div",{className:"top-time"},V.week),r.a.createElement("div",{className:"top-time"},r.a.createElement(v.a,{className:"pic",showSearch:!0,style:{width:90,height:32,borderRadius:3,backgroundColor:"rgba(255, 255, 255, 1) ",marginRight:15},placeholder:"\u8bf7\u9009\u62e9\u73ed\u6b21",optionFilterProp:"children",onChange:function(e){console.log("selected ".concat(e)),F(e),Je({page:1,pageSize:10,day_shift:e,date:D,equipment_id:te})},onSearch:tt,filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},value:R},V.shifts&&V.shifts.map((function(e){return r.a.createElement(et,{key:e.value,value:e.key},e.value)}))))),r.a.createElement("div",{className:"header_center"},r.a.createElement("div",{className:"center_select line"},r.a.createElement(v.a,{showSearch:!0,style:{width:100,marginRight:15},placeholder:"\u8bf7\u9009\u62e9",optionFilterProp:"children",onChange:function(e){console.log("selected ".concat(e)),X(e)},onSearch:tt,filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},value:G},V.complete_rate&&V.complete_rate.map((function(e,t){return r.a.createElement(et,{key:e.equipment_type_message,value:e.equipment_type_message},e.equipment_type_message)})))),r.a.createElement("div",{className:"center_number line"}," \u5b8c\u6210\u7387(","\u65e7\u7ebf"===G?V.complete_rate&&V.complete_rate[0].rate:V.complete_rate&&V.complete_rate[1].rate,")",r.a.createElement(w.a,{type:"primary",className:"btn",onClick:function(){return x(!0)}},"\u5bfc\u51fa\u4e3aExcel")))),r.a.createElement("div",{className:"pan"},r.a.createElement("div",{className:"search"},r.a.createElement("div",{className:"line"},r.a.createElement("p",{className:"pic"},"\u751f\u4ea7\u7ebf"),r.a.createElement("div",{className:"input_wrap"},r.a.createElement(v.a,{className:"pic",showSearch:!0,style:{width:300,height:32,borderRadius:3,backgroundColor:"rgba(255, 255, 255, 1) ",marginRight:15},placeholder:"\u8bf7\u9009\u62e9\u751f\u4ea7\u7ebf",optionFilterProp:"children",onChange:function(e){console.log("selected ".concat(e)),ae(e),Je({page:1,pageSize:10,day_shift:e,date:D,equipment_id:e})},onSearch:tt,filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},value:te},V.equipment&&V.equipment.map((function(e){return r.a.createElement(et,{key:e.name,value:e.id},e.name)}))),r.a.createElement(U,{placeholder:"\u8bf7\u8f93\u5165\u5ba2\u6237\u540d\u6216\u89c4\u683c\u578b\u53f7",onChange:function(e){var t=e.target.value;Je({page:1,pageSize:10,day_shift:R,date:D,equipment_id:te,search:t})},onSearch:function(e){Je({page:1,pageSize:10,day_shift:R,date:D,equipment_id:te,search:e})}}))))),r.a.createElement("div",{className:"together-content"},r.a.createElement("div",{className:"showTable_mobile"},r.a.createElement("div",{className:"table"},r.a.createElement("div",{className:"table_left"},r.a.createElement("p",{style:{margin:"0",position:"absolute",marginLeft:"10px",color:"#4e4b4b"}},"\u8bf7\u8f93\u5165\u7ef4\u62a4\u65f6\u95f4:"),r.a.createElement(K,{showTime:!0,className:"line_input",onChange:function(e){var t=e[0].format("YYYY-MM-DD H:m"),a=e[1].format("YYYY-MM-DD H:m");Xe({equipment_id:te,start:t,end:a})},style:{marginTop:"30px"}}),r.a.createElement("p",{style:{margin:"0",position:"absolute",marginLeft:"10px",color:"#4e4b4b"}},"\u8bf7\u8f93\u5165\u5f02\u5e38\u505c\u673a\u65f6\u95f4:"),r.a.createElement(K,{showTime:!0,className:"line_input",nChange:function(e){var t=e[0].format("YYYY-MM-DD H:m"),a=e[1].format("YYYY-MM-DD H:m");console.log(t,a)},style:{marginTop:"30px"}}),r.a.createElement("div",{className:"product_name line_input"},ce&&ce.name),ce&&r.a.createElement("div",{className:"success_percent line_input"},"\u5b8c\u6210\u7387(",ce.rate,")"),"              "),r.a.createElement("div",{className:"table_right"},r.a.createElement("div",{className:"table_container"},r.a.createElement("div",{className:"table_line"},r.a.createElement("div",{className:"tabel_type"},r.a.createElement("p",null,"\u6b63\u5728\u751f\u4ea7")),r.a.createElement("div",{className:"type_table"}," ",r.a.createElement(z,{showHeader:!0,data:pe,columns:lt,pagination:!1}))),r.a.createElement("div",{className:"table_line"},r.a.createElement("div",{className:"tabel_type"},r.a.createElement("p",null,"\u5c06\u8981\u751f\u4ea7")),r.a.createElement("div",{className:"type_table"}," ",r.a.createElement(z,{showHeader:!1,data:se,columns:lt,pagination:!1}))),r.a.createElement("div",{className:"table_line"},r.a.createElement("div",{className:"tabel_type"},r.a.createElement("p",null,"\u5df2\u5b8c\u6210\u751f\u4ea7")),r.a.createElement("div",{className:"type_table"}," ",r.a.createElement(z,{showHeader:!1,data:_e,columns:lt,pagination:!1}))),r.a.createElement("div",{className:"table_line"},r.a.createElement("div",{className:"tabel_type"},r.a.createElement("p",null,"\u751f\u4ea7\u5f02\u5e38")),r.a.createElement("div",{className:"type_table"}," ",r.a.createElement(z,{showHeader:!1,data:ye,columns:lt})))))))),r.a.createElement(k.a,{title:"qc\u6570\u636e",visible:c,okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){l(!1),nt.submit()},onCancel:function(){return l(!1)},bodyStyle:{height:"500px",overflowY:"scroll"}},r.a.createElement(y.a,Object.assign({},{labelCol:{span:6},wrapperCol:{span:16}},{form:nt,name:"control-hooks",onFinish:function(e){delete e.customer_name,delete e.equipment_name,delete e.product_model,Ze(Object(d.a)(Object(d.a)({},e),{},{order_id:Le}))}}),r.a.createElement(y.a.Item,{name:"customer_name",label:"\u8d2d\u8d27\u5355\u4f4d"},r.a.createElement(_.a,{disabled:!0})),r.a.createElement(y.a.Item,{name:"equipment_name",label:"\u8bbe\u5907\u540d\u79f0"},r.a.createElement(_.a,{disabled:!0})),r.a.createElement(y.a.Item,{name:"product_model",label:"\u4ea7\u54c1\u89c4\u683c(\u539a*\u5bbd*\u957f*\u53ea)"},r.a.createElement(_.a,{disabled:!0})),r.a.createElement(y.a.Item,{name:"create_number",label:"\u751f\u4ea7\u6279\u53f7"},r.a.createElement(_.a,null)),r.a.createElement(y.a.Item,{name:"request_release_force",label:"\u8981\u6c42\u79bb\u578b\u529b"},r.a.createElement(_.a,null)),r.a.createElement(y.a.Item,{name:"ply",label:"\u539a\u5ea6"},r.a.createElement(_.a,null)),r.a.createElement(y.a.Item,{name:"width",label:"\u5bbd\u5ea6"},r.a.createElement(_.a,null)),r.a.createElement(y.a.Item,{name:"length",label:"\u957f\u5ea6"},r.a.createElement(_.a,null)),r.a.createElement(y.a.Item,{name:"release_force",label:"\u5b9e\u6d4b\u79bb\u578b\u529b"},r.a.createElement(_.a,null)),r.a.createElement(y.a.Item,{name:"coat_release_force",label:"\u6d82\u5e03\u79bb\u578b\u529b"},r.a.createElement(_.a,null)),r.a.createElement(y.a.Item,{name:"pipe",label:"\u5185\u7ba1"},r.a.createElement(_.a,null)),r.a.createElement(y.a.Item,{name:"winding_bad",label:"\u6536\u5377 \u4e0d\u826f"},r.a.createElement(_.a,null)),r.a.createElement(y.a.Item,{name:"scratch",label:"\u64e6\u82b1"},r.a.createElement(_.a,null)),r.a.createElement(y.a.Item,{name:"wrinkled",label:"\u538b\u75d5/\u8936\u76b1"},r.a.createElement(_.a,null)),r.a.createElement(y.a.Item,{name:"dirty",label:"\u810f\u6c61/\u767d\u5370"},r.a.createElement(_.a,null)),r.a.createElement(y.a.Item,{name:"batch_number",label:"\u63a5\u5934/\u6279\u53f7\u8bf4\u660e"},r.a.createElement(_.a,null)),r.a.createElement(y.a.Item,{name:"create_roll_number",label:"\u751f\u4ea7\u5377\u6570"},r.a.createElement(_.a,null)),r.a.createElement(y.a.Item,{name:"judgmen",label:"\u5224\u5b9a"},r.a.createElement(_.a,null)),r.a.createElement(y.a.Item,{name:"user",label:"\u68c0\u9a8c\u5458"},r.a.createElement(_.a,null)),r.a.createElement(y.a.Item,{name:"comment",label:"\u5907\u6ce8"},r.a.createElement(_.a,null)))),r.a.createElement(k.a,{title:"\u4e0b\u4e00\u73ed\u5c06\u8981\u751f\u4ea7",visible:s,okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){return m(!1)},onCancel:function(){return m(!1)},width:1080},r.a.createElement(z,{showHeader:!0,columns:lt,data:se,rowSelection:Object(d.a)({},rt)})),r.a.createElement(k.a,{title:"\u8bf7\u9009\u62e9\u65e5\u671f",visible:j,okText:"\u4e0b\u8f7d\u5f02\u5e38\u6e05\u5355",cancelText:"\u4e0b\u8f7d\u5df2\u5b8c\u6210\u6e05\u5355",onOk:function(){x(!1),Ge({date:Ne})},onCancel:function(){x(!1),$e({date:Ne})},width:400},r.a.createElement(g.a,{placeholder:"\u8bf7\u9009\u62e9\u65f6\u95f4",style:{marginLeft:15,width:300},onChange:function(e){console.log(e);var t=e.format("YYYY-MM-DD"),a=new Date(t).getTime()/1e3;qe(a)},format:"YYYY\u5e74MM\u6708DD\u65e5"})),r.a.createElement(k.a,{title:"\u4e8c\u7ef4\u7801",visible:ze,okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",onOk:function(){return Re(!1)},onCancel:function(){return Re(!1)},width:300,bodyStyle:{textAlign:"center"},footer:null},r.a.createElement(B,{value:De,size:200,onClick:function(){return Re(!0)}}))))},W=(a(393),{});var Q=Object(s.b)(i,o)((function(e){var t=Object(u.g)();return e.info||(console.log(t,e),t.push("/login")),r.a.createElement("div",null,Object.values(W).map((function(e){return r.a.createElement(u.b,{path:e.url,exact:!0,component:e.page,key:e.url})})),r.a.createElement("div",null,console.log(e.isPc),"init"!==e.isPc?r.a.createElement(r.a.Fragment,null,(e.isPc,r.a.createElement(V,null))):null))}));a(395);var $=Object(s.b)(i,o)((function(e){return Object(n.useEffect)((function(){e.getIsPc(function(){var e=navigator.userAgent;console.log(e);for(var t=["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod"],a=!0,n=0;n<t.length;n++)if(e.indexOf(t[n])>0){a=!1;break}return a}()),localStorage.getItem("loginInfo")?Object.keys(JSON.parse(localStorage.getItem("loginInfo")))[0]&&e.getInfo(JSON.parse(localStorage.getItem("loginInfo"))):e.getInfo({})}),[e.IsPC]),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(u.d,null,r.a.createElement(u.b,{path:"/",exact:!0,component:Q}),r.a.createElement(u.a,{to:"/404"}))))})),G=a(82),X=a(206),Z={num:0,tabStatus:0,info:{},isPc:"init"},ee=Object(G.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":e.num++;break;case"TAB":e.tabStatus=t.index;break;case"INFO":e.info=t.data;break;case"ISPC":e.isPc=t.bool;break;default:return e}return JSON.parse(JSON.stringify(e))}),Object(X.composeWithDevTools)());l.a.render(r.a.createElement(s.a,{store:ee},r.a.createElement($,null)),document.getElementById("root"))}},[[219,1,2]]]);
//# sourceMappingURL=main.00016cd4.chunk.js.map