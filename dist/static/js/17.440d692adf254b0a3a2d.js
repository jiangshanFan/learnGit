webpackJsonp([17],{"91ym":function(t,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=l("lC5x"),n=l.n(a),r=l("J0Oq"),o=l.n(r),i=(l("glag"),l("c2Ch")),s={name:"testMould",created:function(){var t=o()(n.a.mark(function t(){var e,l;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e={page:1,size:this.size},t.next=3,Object(i.P)(e);case 3:1===(l=t.sent).status&&(this.table=l.msg,this.table.content.length||this.$message({showClose:!0,type:"warning",message:"暂无数据！！！"}));case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{search:function(){var t=this;return o()(n.a.mark(function e(){var l,a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return l={page:1,size:t.size},t.value&&(l.mouldNo=t.value),t.value1&&(l.projectName=t.value1),e.next=5,Object(i.P)(l);case 5:1===(a=e.sent).status&&(t.table=a.msg);case 7:case"end":return e.stop()}},e,t)}))()},handleCurrentChange:function(t){var e=this;return o()(n.a.mark(function l(){var a,r;return n.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return e.currentPage=t,a={page:t,size:e.size},e.value&&(a.mouldNo=e.value),e.value1&&(a.projectName=e.value1),l.next=6,Object(i.P)(a);case 6:1===(r=l.sent).status&&(e.table=r.msg),console.log("当前页: "+t);case 9:case"end":return l.stop()}},l,e)}))()},handleClick:function(t){this.$store.dispatch("itemCheck_testMouldDetail",t),this.$router.push("/testMouldDetail")}},data:function(){return{currentPage:1,value:"",value1:"",cellStyle:{maxHeight:"50px !important"},tooltip:!0,size:10,table:{},testMould_ifAll:!0}}},c={render:function(){var t=this,e=this,l=e.$createElement,a=e._self._c||l;return a("div",{attrs:{id:"testMould"}},[a("div",{staticClass:"section-search mb20 mt20"},[a("el-row",[a("div",{staticClass:"fl mr20"},[a("span",[e._v("项目名称：")]),e._v(" "),a("el-input",{staticStyle:{width:"calc(100% - 70px)"},attrs:{size:"mini",clearable:""},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}})],1),e._v(" "),a("div",{staticClass:"fl mr20"},[a("span",[e._v("模具编号：")]),e._v(" "),a("el-input",{staticStyle:{width:"calc(100% - 70px)"},attrs:{size:"mini",clearable:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),a("el-button",{staticClass:"fl",attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:e.search}})],1)],1),e._v(" "),a("hr",{staticClass:"border_solid_bottom_c"}),e._v(" "),a("div",{staticClass:"items mt20",staticStyle:{"padding-left":"30px"}},[a("el-table",{staticStyle:{width:"100%","margin-top":"30px"},attrs:{data:e.table.content,border:"","max-height":"800",stripe:"","header-cell-class-name":"header_cell table_header_shadow","tooltip-effect":"light","cell-style":e.cellStyle}},[a("el-table-column",{attrs:{fixed:"",type:"index",label:"序号",width:"60",align:"center",index:function(l){return t.$indexS(l,e.currentPage,e.size)}}}),e._v(" "),a("el-table-column",{attrs:{prop:"testModeCause",label:"试模次数/Tn",width:"100",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"testModeTime",label:"模具到达/试模时间",width:"100",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"projectName",label:"项目名称",width:"180",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"mouldNo",label:"模具编号",width:"100",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"partName",label:"制品名称",width:"90",align:"center","show-overflow-tooltip":e.tooltip}}),e._v(" "),a("el-table-column",{attrs:{prop:"board",label:"机台",width:"70",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"material",label:"材料",width:"70",align:"center","show-overflow-tooltip":e.tooltip}}),e._v(" "),a("el-table-column",{attrs:{prop:"colour",label:"颜色",align:"center",width:"60","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"debugDuration",label:"试模时长（小时）",align:"center",width:"82"}}),e._v(" "),a("el-table-column",{attrs:{prop:"qty",label:"数量PCS/套",width:"100",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"projectManager",label:"项目负责人",align:"center",width:"91"}}),e._v(" "),a("el-table-column",{attrs:{prop:"finishQty",label:"完成数量",align:"center",width:"80","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"rejectsQty",label:"不良数量",align:"center",width:"80","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"productQty",label:"生产数量",align:"center",width:"80","show-overflow-tooltip":""}}),e._v(" "),a("el-table-column",{attrs:{prop:"taskRemark",label:"备注",align:"center","show-overflow-tooltip":e.tooltip}}),e._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"详情",width:"60",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{staticClass:"underline",attrs:{size:"small",type:"text"},on:{click:function(l){return e.handleClick(t.row)}}},[e._v("查看")])]}}])})],1)],1),e._v(" "),a("div",{staticClass:"pagination fr ovw-h mt20"},[e.table.totalCount?a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":e.size,layout:"total, prev, pager, next",total:e.table.totalCount},on:{"current-change":e.handleCurrentChange}}):e._e()],1)])},staticRenderFns:[]};var u=l("C7Lr")(s,c,!1,function(t){l("ow88")},null,null);e.default=u.exports},ow88:function(t,e){}});