(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6cdc"],{"+Lc1":function(t,e,n){"use strict";n.d(e,"c",function(){return a}),n.d(e,"g",function(){return o}),n.d(e,"n",function(){return i}),n.d(e,"f",function(){return u}),n.d(e,"a",function(){return s}),n.d(e,"d",function(){return c}),n.d(e,"h",function(){return l}),n.d(e,"e",function(){return d}),n.d(e,"i",function(){return f}),n.d(e,"m",function(){return p}),n.d(e,"j",function(){return m}),n.d(e,"k",function(){return h}),n.d(e,"r",function(){return b}),n.d(e,"b",function(){return v}),n.d(e,"t",function(){return y}),n.d(e,"o",function(){return _}),n.d(e,"p",function(){return w}),n.d(e,"q",function(){return j}),n.d(e,"l",function(){return g}),n.d(e,"s",function(){return O});var r=n("t3Un");function a(t){return Object(r.a)({url:"/api/order/"+t+"/count",method:"post"})}function o(t){return Object(r.a)({url:"/api/order/list",method:"post",params:t})}function i(t,e){return Object(r.a)({url:"/api/order/"+t+"/update_status",method:"put",data:e})}function u(t,e){if("paid"===t)return function(t){return Object(r.a)({url:"/api/order/handle/paid_offline",method:"put",data:t})}(e);if("confirm"===t)return s(e);if("delivery"===t)return c(e);if("receipt"===t)return l(e);throw new Error("无效类型")}function s(t){return Object(r.a)({url:"/api/order/handle/confirm",method:"put",data:t})}function c(t){return Object(r.a)({url:"/api/order/handle/delivery",method:"put",data:t})}function l(t){return Object(r.a)({url:"/api/order/handle/receipt",method:"put",data:t})}function d(t,e){return Object(r.a)({url:"/api/order/detail/"+e+"/"+t,method:"get"})}function f(t){return Object(r.a)({url:"/api/order/records/"+t,method:"get"})}function p(t){return Object(r.a)({url:"/api/order/traces/"+t,method:"get"})}function m(t){return Object(r.a)({url:"/api/order/refund/list",method:"post",params:t})}function h(t){return Object(r.a)({url:"/api/order/refund/record/"+t,method:"get"})}function b(t){return Object(r.a)({url:"/api/order/refund/update_status",method:"put",data:t})}function v(t){return Object(r.a)({url:"/api/order/refund/confirm",method:"put",data:t})}function y(t){return Object(r.a)({url:"/api/order/wx/list",method:"post",params:t})}function _(t){return Object(r.a)({url:"/api/order/wx/payment_logs/"+t,method:"get"})}function w(t){return Object(r.a)({url:"/api/order/wx/refund_logs/"+t,method:"get"})}function j(t,e){return Object(r.a)({url:"/api/order/wx/sync_order",method:"put",params:{orderNo:t,transactionId:e}})}function g(t){return Object(r.a)({url:"/api/order/settle/list",method:"post",params:t})}function O(t){return Object(r.a)({url:"/api/order/settle/update",method:"put",data:t})}},"10Bi":function(t,e,n){},Njf7:function(t,e,n){},Y5bG:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),Math.easeInOutQuad=function(t,e,n,r){return(t/=r/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e};var r=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)};function a(t,e,n){var a=document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop,o=t-a,i=0;e=void 0===e?500:e;!function t(){i+=20,function(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}(Math.easeInOutQuad(i,a,o,e)),i<e?r(t):n&&"function"==typeof n&&n()}()}},ZySA:function(t,e,n){"use strict";var r=n("P2sY"),a=n.n(r),o=(n("jUE0"),{bind:function(t,e){t.addEventListener("click",function(n){var r=a()({},e.value),o=a()({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},r),i=o.ele;if(i){i.style.position="relative",i.style.overflow="hidden";var u=i.getBoundingClientRect(),s=i.querySelector(".waves-ripple");switch(s?s.className="waves-ripple":((s=document.createElement("span")).className="waves-ripple",s.style.height=s.style.width=Math.max(u.width,u.height)+"px",i.appendChild(s)),o.type){case"center":s.style.top=u.height/2-s.offsetHeight/2+"px",s.style.left=u.width/2-s.offsetWidth/2+"px";break;default:s.style.top=(n.pageY-u.top-s.offsetHeight/2-document.documentElement.scrollTop||document.body.scrollTop)+"px",s.style.left=(n.pageX-u.left-s.offsetWidth/2-document.documentElement.scrollLeft||document.body.scrollLeft)+"px"}return s.style.backgroundColor=o.color,s.className="waves-ripple z-active",!1}},!1)}}),i=function(t){t.directive("waves",o)};window.Vue&&(window.waves=o,Vue.use(i)),o.install=i;e.a=o},a0Nf:function(t,e,n){"use strict";n.d(e,"a",function(){return u}),n.d(e,"b",function(){return s});var r=n("4d7F"),a=n.n(r),o=n("Kw5r"),i=n("hZMg");function u(t,e){return new a.a(function(n,r){Object(i.g)({typeCodes:e}).then(function(e){o.default.set(t,"codes",e);var r={},a={};for(var i in e){var u=e[i].__default__,s={};for(var c in u){var l=u[c].valCode;s[l]=u[c].valName,a[l]=u[c].valName}r[i]=s}r.__default__=a,o.default.set(t,"statusMap",r),n(1)})})}function s(t,e,n){return new a.a(function(r,a){Object(i.F)(e,n).then(function(e){var n={};for(var a in e){for(var i={},u=0;u<e[a].length;u++)i[e[a][u].value]=e[a][u].label;n[a]=i}o.default.set(t,"options",n),r(1)})})}},hZMg:function(t,e,n){"use strict";n.d(e,"z",function(){return a}),n.d(e,"y",function(){return o}),n.d(e,"x",function(){return i}),n.d(e,"A",function(){return u}),n.d(e,"B",function(){return s}),n.d(e,"l",function(){return c}),n.d(e,"E",function(){return l}),n.d(e,"F",function(){return d}),n.d(e,"db",function(){return f}),n.d(e,"fb",function(){return p}),n.d(e,"eb",function(){return m}),n.d(e,"gb",function(){return h}),n.d(e,"X",function(){return b}),n.d(e,"Z",function(){return v}),n.d(e,"Y",function(){return y}),n.d(e,"K",function(){return _}),n.d(e,"L",function(){return w}),n.d(e,"N",function(){return j}),n.d(e,"M",function(){return g}),n.d(e,"H",function(){return O}),n.d(e,"J",function(){return x}),n.d(e,"I",function(){return k}),n.d(e,"T",function(){return N}),n.d(e,"W",function(){return T}),n.d(e,"V",function(){return S}),n.d(e,"U",function(){return Q}),n.d(e,"S",function(){return C}),n.d(e,"k",function(){return F}),n.d(e,"j",function(){return L}),n.d(e,"R",function(){return I}),n.d(e,"e",function(){return E}),n.d(e,"c",function(){return D}),n.d(e,"d",function(){return M}),n.d(e,"b",function(){return z}),n.d(e,"f",function(){return $}),n.d(e,"g",function(){return R}),n.d(e,"ab",function(){return B}),n.d(e,"cb",function(){return q}),n.d(e,"bb",function(){return V}),n.d(e,"O",function(){return U}),n.d(e,"Q",function(){return A}),n.d(e,"P",function(){return W}),n.d(e,"i",function(){return Y}),n.d(e,"h",function(){return Z}),n.d(e,"m",function(){return J}),n.d(e,"o",function(){return K}),n.d(e,"n",function(){return H}),n.d(e,"s",function(){return X}),n.d(e,"u",function(){return P}),n.d(e,"t",function(){return G}),n.d(e,"p",function(){return tt}),n.d(e,"D",function(){return et}),n.d(e,"G",function(){return nt}),n.d(e,"w",function(){return rt}),n.d(e,"C",function(){return at}),n.d(e,"q",function(){return ot}),n.d(e,"r",function(){return it}),n.d(e,"a",function(){return ut}),n.d(e,"v",function(){return st}),n.d(e,"hb",function(){return ct});var r=n("t3Un");function a(t){return Object(r.a)({url:"/api/sys/region/child/"+t,method:"get"})}function o(t){return Object(r.a)({url:"/api/sys/region/depth/"+t,method:"get"})}function i(){return Object(r.a)({url:"/api/sys/region/all",method:"get"})}function u(t){return Object(r.a)({url:"/api/sys/region/list",method:"post",params:t})}function s(t){return Object(r.a)({url:"/api/sys/region/save",method:"post",data:t})}function c(t,e){return Object(r.a)({url:"/api/sys/region/init/"+t,method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:e})}function l(t,e){return Object(r.a)({url:"/api/sys/select/"+t,method:"post",params:e})}function d(t,e){return Object(r.a)({url:"/api/sys/selects/"+t,method:"post",params:e})}function f(t){return Object(r.a)({url:"/api/sys/user/list",method:"post",params:t})}function p(t){return Object(r.a)({url:"/api/sys/user/save",method:"post",data:t})}function m(t){return Object(r.a)({url:"/api/sys/user/remove/"+t,method:"delete"})}function h(t,e){return Object(r.a)({url:"/api/sys/user/status/"+t+"/"+e,method:"put"})}function b(t){return Object(r.a)({url:"/api/sys/role/list",method:"post",params:t})}function v(t){return Object(r.a)({url:"/api/sys/role/save",method:"post",data:t})}function y(t){return Object(r.a)({url:"/api/sys/role/remove/"+t,method:"delete"})}function _(t){return Object(r.a)({url:"/api/sys/authority/list",method:"post",params:t})}function w(t){return Object(r.a)({url:"/api/sys/authority/_list",method:"post",params:t})}function j(t){return Object(r.a)({url:"/api/sys/authority/save",method:"post",data:t})}function g(t){return Object(r.a)({url:"/api/sys/authority/remove/"+t,method:"delete"})}function O(t){return Object(r.a)({url:"/api/sys/apiList/list",method:"post",params:t})}function x(t){return Object(r.a)({url:"/api/sys/apiList/save",method:"post",data:t})}function k(t){return Object(r.a)({url:"/api/sys/apiList/remove/"+t,method:"delete"})}function N(t){return Object(r.a)({url:"/api/sys/menu/list",method:"post",params:t})}function T(t){return Object(r.a)({url:"/api/sys/menu/tree_list",method:"post",params:t})}function S(t){return Object(r.a)({url:"/api/sys/menu/save",method:"post",data:t})}function Q(t){return Object(r.a)({url:"/api/sys/menu/remove/"+t,method:"delete"})}function C(t){return Object(r.a)({url:"/api/sys/menu/detail/"+t,method:"get"})}function F(t){return Object(r.a)({url:"/api/sys/role/menu/"+t,method:"get"})}function L(t){return Object(r.a)({url:"/api/sys/role/authorities/"+t,method:"get"})}function I(t){return Object(r.a)({url:"/api/sys/menu/authorities/"+t,method:"get"})}function E(t){return Object(r.a)({url:"/api/sys/grant/user_roles",method:"post",data:t})}function D(t){return Object(r.a)({url:"/api/sys/grant/role_menu",method:"post",data:t})}function M(t){return Object(r.a)({url:"/api/sys/grant/role_authorities",method:"post",data:t})}function z(t){return Object(r.a)({url:"/api/sys/grant/menu_authorities",method:"post",data:t})}function $(t){return Object(r.a)({url:"/api/sys/code/cache",method:"get",params:t})}function R(t){return Object(r.a)({url:"/api/sys/code/caches",method:"post",params:t})}function B(t){return Object(r.a)({url:"/api/sys/code/type/list",method:"post",params:t})}function q(t){return Object(r.a)({url:"/api/sys/code/type/save",method:"post",data:t})}function V(t){return Object(r.a)({url:"/api/sys/code/type/remove/"+t,method:"delete"})}function U(t){return Object(r.a)({url:"/api/sys/code/list",method:"post",params:t})}function A(t){return Object(r.a)({url:"/api/sys/code/save",method:"post",data:t})}function W(t){return Object(r.a)({url:"/api/sys/code/remove/"+t,method:"delete"})}function Y(){return Object(r.a)({url:"/api/sys/code/type/last_code",method:"get"})}function Z(t){return Object(r.a)({url:"/api/sys/code/"+t+"/last_code",method:"get"})}function J(t){return Object(r.a)({url:"/api/sys/jobs/details/list",method:"post",params:t})}function K(t){return Object(r.a)({url:"/api/sys/jobs/details/save",method:"post",data:t})}function H(t){return Object(r.a)({url:"/api/sys/jobs/details/remove/"+t,method:"delete"})}function X(t){return Object(r.a)({url:"/api/sys/jobs/trigger/list",method:"post",params:t})}function P(t){return Object(r.a)({url:"/api/sys/jobs/trigger/save",method:"post",data:t})}function G(t){return Object(r.a)({url:"/api/sys/jobs/trigger/remove/"+t,method:"delete"})}function tt(t){return Object(r.a)({url:"/api/sys/jobs/instance/list",method:"post",params:t})}function et(t){return Object(r.a)({url:"/api/sys/jobs/instance/save",method:"post",data:t})}function nt(t){return Object(r.a)({url:"/api/sys/jobs/instance/start/"+t,method:"post"})}function rt(t){return Object(r.a)({url:"/api/sys/jobs/instance/pause/"+t,method:"post"})}function at(t){return Object(r.a)({url:"/api/sys/jobs/instance/remove/"+t,method:"post"})}function ot(t){return Object(r.a)({url:"/api/sys/jobs/instance/logs/list",method:"post",params:t})}function it(t){return Object(r.a)({url:"/api/sys/jobs/instance/logs/statistics",method:"post",params:t})}function ut(t){return Object(r.a)({url:"/api/sys/metadata/table/all_list",method:"post",params:t})}function st(t){return Object(r.a)({url:"/api/sys/metadata/details/"+t,method:"get"})}function ct(){return Object(r.a)({url:"/api/sys/metadata/sync",method:"post"})}},jUE0:function(t,e,n){},or3M:function(t,e,n){"use strict";var r=n("10Bi");n.n(r).a},"p/df":function(t,e,n){"use strict";n.r(e);var r=n("+Lc1"),a=n("ZySA"),o=n("Mz3J"),i=n("ZfUE"),u=n("gJ+i"),s=n("bY1+"),c=n("BEYb"),l=n("a0Nf"),d={name:"wxOrderManager",components:{Pagination:o.a,SysCode:i.a,FormDialog:c.a,DyFilterInput:u.a,DySelect:s.a},directives:{waves:a.a},filters:{},data:function(){return{cacheData:{},tableKey:0,list:null,total:0,listLoading:!0,listQuery:{pageNum:0,pageSize:10,orderBy:"createdTime",outTradeNo:"",transactionId:""},logsList:[],formVisible:!1,formData:{id:null,nextStatusId:"",remark:""},rules:{}}},created:function(){},mounted:function(){var t=this;Object(l.a)(this.cacheData,"1011").then(function(){t.handleQueryList()})},methods:{cellStyle:function(){return"padding: 5px 0px;"},handleFilter:function(){this.listQuery.pageNum=0,this.handleQueryList()},handleReset:function(){this.listQuery.pageNum=0,this.listQuery.outTradeNo="",this.listQuery.transactionId="",this.handleQueryList()},handleQueryList:function(){var t=this;this.listLoading=!0;var e={pageSize:this.listQuery.pageSize,pageNum:this.listQuery.pageNum,orderBy:"created_time desc","params[outTradeNo]":this.listQuery.outTradeNo,"params[transactionId]":this.listQuery.transactionId};Object(r.t)(e).then(function(e){t.list=e.list,t.total=e.total}).catch(function(t){console.log(t)}).finally(function(){t.listLoading=!1})},formOpen:function(t,e){var n=this;this.formVisible=!0,"payment"==e?Object(r.o)(t.outTradeNo).then(function(t){n.logsList=t}):"refund"==e&&Object(r.p)(t.outTradeNo).then(function(t){n.logsList=t})},formClose:function(){this.formVisible=!1,this.logsList=[]},handleSyncWxOrder:function(t){var e=this;this.$confirm("确认同步微信订单数据？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(r.q)(t.outTradeNo,t.transactionId).then(function(t){e.handleFilter()})})},handleFormSave:function(){this.$refs.formData.validate(function(t){})}}},f=(n("uXjD"),n("or3M"),n("KHd+")),p=Object(f.a)(d,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-input",{staticClass:"filter-item",staticStyle:{width:"250px"},attrs:{placeholder:"订单编号"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleFilter(e):null}},model:{value:t.listQuery.outTradeNo,callback:function(e){t.$set(t.listQuery,"outTradeNo",e)},expression:"listQuery.outTradeNo"}}),t._v(" "),n("el-input",{staticClass:"filter-item",staticStyle:{width:"250px"},attrs:{placeholder:"微信订单编号"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.handleFilter(e):null}},model:{value:t.listQuery.transactionId,callback:function(e){t.$set(t.listQuery,"transactionId",e)},expression:"listQuery.transactionId"}})],1),t._v(" "),n("div",{staticClass:"actions-container"},[n("el-row",[n("el-col",{attrs:{span:20}},[n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"action-item",attrs:{size:"small",icon:"el-icon-refresh"},on:{click:function(e){t.handleSyncWxOrder({outTradeNo:t.listQuery.outTradeNo,transactionId:t.listQuery.transactionId})}}},[t._v("同步微信数据")])],1),t._v(" "),n("el-col",{attrs:{span:4}},[n("div",{staticClass:"right-actions"},[n("el-button",{staticClass:"action-item",attrs:{size:"small",icon:"el-icon-circle-close-outline"},on:{click:t.handleReset}},[t._v(t._s(t.$t("table.reset")))]),t._v(" "),n("el-button",{staticClass:"action-item",attrs:{size:"small",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v(t._s(t.$t("table.query")))])],1)])],1)],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[n("el-form-item",{attrs:{label:"商家数据包"}},[n("span",[t._v(t._s(e.row.attach))])]),t._v(" "),n("el-form-item",{attrs:{label:"付款银行"}},[n("span",[t._v(t._s(e.row.bankType))])]),t._v(" "),n("el-form-item",{attrs:{label:"现金支付金额"}},[n("span",[t._v(t._s(e.row.cashFee))])]),t._v(" "),n("el-form-item",{attrs:{label:"现金支付货币类型"}},[n("span",[t._v(t._s(e.row.cashFeeType))])]),t._v(" "),n("el-form-item",{attrs:{label:"现金退款金额"}},[n("span",[t._v(t._s(e.row.cashRefundFee))])]),t._v(" "),n("el-form-item",{attrs:{label:"代金券使用数量"}},[n("span",[t._v(t._s(e.row.couponCount))])]),t._v(" "),n("el-form-item",{attrs:{label:"总代金券金额"}},[n("span",[t._v(t._s(e.row.couponFee))])]),t._v(" "),n("el-form-item",{attrs:{label:"退款代金券使用数量"}},[n("span",[t._v(t._s(e.row.couponRefundCount))])]),t._v(" "),n("el-form-item",{attrs:{label:"代金券退款总金额"}},[n("span",[t._v(t._s(e.row.couponRefundFee))])]),t._v(" "),n("el-form-item",{attrs:{label:"设备号"}},[n("span",[t._v(t._s(e.row.deviceInfo))])]),t._v(" "),n("el-form-item",{attrs:{label:"是否关注公众账号"}},[n("span",[t._v(t._s(e.row.isSubscribe))])]),t._v(" "),n("el-form-item",{attrs:{label:"微信退款单号"}},[n("span",[t._v(t._s(e.row.refundId))])]),t._v(" "),n("el-form-item",{attrs:{label:"退款金额"}},[n("span",[t._v(t._s(e.row.refundFee))])]),t._v(" "),n("el-form-item",{attrs:{label:"应结退款金额"}},[n("span",[t._v(t._s(e.row.settlementRefundFee))])]),t._v(" "),n("el-form-item",{attrs:{label:"应结订单金额"}},[n("span",[t._v(t._s(e.row.settlementTotalFee))])]),t._v(" "),n("el-form-item",{attrs:{label:"营销详情"}},[n("span",[t._v(t._s(e.row.promotionDetail))])])],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"订单编号",align:"center",width:"230px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text"}},[n("router-link",{attrs:{to:"/order/order_detail/no/"+e.row.outTradeNo}},[t._v(t._s(e.row.outTradeNo))])],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"微信订单号",width:"250px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.transactionId))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"支付完成时间",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.timeEnd))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"订单金额(分)",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.totalFee))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"交易类型",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.tradeType))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"交易状态",width:"150px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.tradeStateDesc))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"createdTime",sortable:"",label:t.$t("table.createdTime"),width:"200px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("parseTime")(e.row.createdTime)))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:t.$t("table.actions"),align:"center",width:"150","class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"action-item",attrs:{type:"text"},on:{click:function(n){t.formOpen(e.row,"payment")}}},[t._v("支付日志")]),t._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"action-item",attrs:{type:"text"},on:{click:function(n){t.formOpen(e.row,"refund")}}},[t._v("退款日志")]),t._v(" "),n("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"action-item",attrs:{type:"text"},on:{click:function(n){t.handleSyncWxOrder(e.row)}}},[t._v("同步微信数据")])]}}])})],1),t._v(" "),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.pageNum,limit:t.listQuery.pageSize},on:{"update:page":function(e){t.$set(t.listQuery,"pageNum",e)},"update:limit":function(e){t.$set(t.listQuery,"pageSize",e)},pagination:t.handleQueryList}}),t._v(" "),n("el-dialog",{attrs:{title:"日志",width:"80%",visible:t.formVisible},on:{"update:visible":function(e){t.formVisible=e}}},[n("div",{staticClass:"block"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.logsList,border:"",fit:""}},[n("el-table-column",{attrs:{label:"订单编号",align:"center",width:"230px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.orderNo))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"渠道",width:"250px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("statusFilter")(e.row.channel,t.cacheData.statusMap[1011])))])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"请求报文",width:"450px",align:"center","show-overflow-tooltip":!0},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.payLoad))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"createdTime",sortable:"",label:t.$t("table.createdTime"),width:"200px",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(t._f("parseTime")(e.row.createdTime)))])]}}])})],1)],1)])],1)},[],!1,null,"e3aeaa4a",null);p.options.__file="wxOrderManager.vue";e.default=p.exports},uXjD:function(t,e,n){"use strict";var r=n("Njf7");n.n(r).a}}]);