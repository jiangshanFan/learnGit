webpackJsonp([42],{"/0sF":function(e,t){},"a/rw":function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("lC5x"),o=l.n(a),r=l("J0Oq"),n=l.n(r),i=(l("glag"),l("c2Ch")),s={name:"unqualifiedPart",created:function(){this.getInfo()},methods:{checkReport:function(e){this.$store.dispatch("itemCheck_report",e),this.$router.push("/report")},getInfo:function(){var e=this;return n()(o.a.mark(function t(){var l,a;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return l={page:e.currentPage,size:e.size,num:e.source},e.value&&(l.mouldCode=e.value),e.value1&&(l.materialNo=e.value1),e.value2&&(l.materialBane=e.value2),t.next=6,Object(i._6)(l);case 6:1===(a=t.sent).status&&(e.table=a.msg);case 8:case"end":return t.stop()}},t,e)}))()},searchCheck:function(){this.currentPage=1,this.getInfo()},handleCurrentChange:function(e){var t=this;return n()(o.a.mark(function l(){return o.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:t.currentPage=e,t.getInfo(),console.log("当前页: "+e);case 3:case"end":return l.stop()}},l,t)}))()}},data:function(){return{options:{source:[{label:"全部",id:0},{label:"制程",id:1},{label:"采购",id:2}]},source:0,value:"",value1:"",value2:"",table:{content:[]},currentPage:1,size:10}}},c={render:function(){var e=this,t=this,l=t.$createElement,a=t._self._c||l;return a("div",{attrs:{id:"unqualifiedPart"}},[a("div",{staticClass:"section-search mb20 mt20"},[a("el-row",[a("div",{staticClass:"fl mr20 mb20"},[a("span",[t._v("模具编号：")]),t._v(" "),a("el-input",{staticStyle:{width:"calc(100% - 100px)"},attrs:{clearable:"",size:"mini"},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),t._v(" "),a("div",{staticClass:"fl mr20 mb20"},[a("span",[t._v("来源：")]),t._v(" "),a("el-select",{attrs:{placeholder:"请选择",size:"mini"},model:{value:t.source,callback:function(e){t.source=e},expression:"source"}},t._l(t.options.source,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.id}})}),1)],1),t._v(" "),a("div",{staticClass:"fl mr20 mb20"},[a("span",[t._v("物料编号：")]),t._v(" "),a("el-input",{staticStyle:{width:"calc(100% - 100px)"},attrs:{clearable:"",size:"mini"},model:{value:t.value1,callback:function(e){t.value1=e},expression:"value1"}})],1),t._v(" "),a("div",{staticClass:"fl mr20 mb20"},[a("span",[t._v("物料名称：")]),t._v(" "),a("el-input",{staticStyle:{width:"calc(100% - 100px)"},attrs:{clearable:"",size:"mini"},model:{value:t.value2,callback:function(e){t.value2=e},expression:"value2"}})],1),t._v(" "),a("el-button",{staticClass:"fl",attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:t.searchCheck}})],1),t._v(" "),a("hr")],1),t._v(" "),a("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:t.table.content,border:"","max-height":"800",size:"small","header-cell-class-name":"header_cell table_header_shadow","tooltip-effect":"light"}},[a("el-table-column",{attrs:{fixed:"",type:"index",label:"序号",width:"60",align:"center",index:function(l){return e.$indexS(l,t.currentPage,t.size)}}}),t._v(" "),a("el-table-column",{attrs:{prop:"",label:"物料编码",width:"150","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.materialNo))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"noAdd",label:"报告ID",width:"180","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"projectName",label:"项目名称",width:"120","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"mouldCode",label:"模具编号",width:"120","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"materialBane",label:"物料名称",width:"180","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"materialCategory",label:"物料类别",width:"100","show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s("0"===e.row.materialCategory?"模胚":"1"===e.row.materialCategory?"前(上)模":"2"===e.row.materialCategory?"后(下)模":"标准件"))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"unqualifiledSources",label:"来源",width:"80","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"specModel",label:"规格型号",width:"100","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"checkNumber",label:"数量",width:"80","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"companyName",label:"公司名称","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"appliDate",label:"申请日期","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"appliMan",label:"申请人","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"checkMan",label:"检查人员","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"abnormalGrade",label:"异常等级",width:"100","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"badType",label:"不良类型",width:"120","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{prop:"unqualfiedDesc",label:"不合格规格描述",width:"180","show-overflow-tooltip":""}}),t._v(" "),a("el-table-column",{attrs:{label:"不合格报告",width:"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(l){return t.checkReport(e.row)}}},[t._v("查看")])]}}])})],1),t._v(" "),a("div",{staticClass:"pagination fr ovw-h mt20"},[t.table.totalCount?a("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":t.size,layout:"total, prev, pager, next",total:t.table.totalCount},on:{"current-change":t.handleCurrentChange}}):t._e()],1)],1)},staticRenderFns:[]};var u=l("C7Lr")(s,c,!1,function(e){l("/0sF")},"data-v-1851ec9a",null);t.default=u.exports}});