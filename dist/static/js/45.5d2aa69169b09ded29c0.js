webpackJsonp([45],{"82eJ":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("IHPB"),i=s.n(a),n=s("HzJ8"),r=s.n(n),c=s("lC5x"),l=s.n(c),h=s("J0Oq"),o=s.n(h),u=s("glag"),d=s("c2Ch"),v=s("bBgq"),p=s.n(v),f={inject:["reload"],name:"newRemind",created:function(){var t=o()(l.a.mark(function t(){var e,s,a,i;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.T)({mark:1});case 2:return 1===(e=t.sent).status&&(this.warnList=e.msg),0!==this.warnList.length&&(s=this.warnList[0],this.getList(s)),a={},t.next=8,Object(d.U)(a);case 8:1===(i=t.sent).status&&(this.allWarnList=i.msg);case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{initial:function(){this.checkList=[],this.checkList1=[],this.checkList2=[],this.createdInfo={warnNodeList:[],id:""},this.defaults=!1,this.title="",this.warnListType=""},getList:function(t){var e=this;return o()(l.a.mark(function s(){var a,i,n,c,h,o,u,v,p,f,L,k,x,w,b,g,m,_,y;return l.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return e.checkList=[],e.checkList1=[],e.checkList2=[],e.warnListType=t.id,e.createdInfo.id=t.id,e.title=t.warnName,e.defaults=!!t.isDefaults,s.next=9,Object(d.V)({id:t.id});case 9:if(1!==(a=s.sent).status){s.next=76;break}if(e.hasCheckList=a.msg,!e.hasCheckList){s.next=76;break}if(!e.hasCheckList.event){s.next=33;break}for(i=!0,n=!1,c=void 0,s.prev=17,h=r()(e.hasCheckList.event);!(i=(o=h.next()).done);i=!0)u=o.value,e.checkList.push(u.warnNode);s.next=25;break;case 21:s.prev=21,s.t0=s.catch(17),n=!0,c=s.t0;case 25:s.prev=25,s.prev=26,!i&&h.return&&h.return();case 28:if(s.prev=28,!n){s.next=31;break}throw c;case 31:return s.finish(28);case 32:return s.finish(25);case 33:if(!e.hasCheckList.node){s.next=53;break}for(v=!0,p=!1,f=void 0,s.prev=37,L=r()(e.hasCheckList.node);!(v=(k=L.next()).done);v=!0)x=k.value,e.checkList1.push(x.warnNode);s.next=45;break;case 41:s.prev=41,s.t1=s.catch(37),p=!0,f=s.t1;case 45:s.prev=45,s.prev=46,!v&&L.return&&L.return();case 48:if(s.prev=48,!p){s.next=51;break}throw f;case 51:return s.finish(48);case 52:return s.finish(45);case 53:if(!e.hasCheckList.reject){s.next=73;break}for(w=!0,b=!1,g=void 0,s.prev=57,m=r()(e.hasCheckList.reject);!(w=(_=m.next()).done);w=!0)y=_.value,e.checkList2.push(y.warnNode);s.next=65;break;case 61:s.prev=61,s.t2=s.catch(57),b=!0,g=s.t2;case 65:s.prev=65,s.prev=66,!w&&m.return&&m.return();case 68:if(s.prev=68,!b){s.next=71;break}throw g;case 71:return s.finish(68);case 72:return s.finish(65);case 73:e.changeLabelToId(0,e.checkList),e.changeLabelToId(1,e.checkList1),e.changeLabelToId(2,e.checkList2);case 76:case"end":return s.stop()}},s,e,[[17,21,25,33],[26,,28,32],[37,41,45,53],[46,,48,52],[57,61,65,73],[66,,68,72]])}))()},changeLabelToId:function(t,e){var s=[],a=[];a[t]=[],s=0===t?this.allWarnList.event:1===t?this.allWarnList.node:this.allWarnList.reject;for(var n=0;n<e.length;n++){var c=!0,l=!1,h=void 0;try{for(var o,u=r()(s);!(c=(o=u.next()).done);c=!0){var d=o.value;e[n]===d.warnNode&&(a[t][n]={id:d.id})}}catch(t){l=!0,h=t}finally{try{!c&&u.return&&u.return()}finally{if(l)throw h}}}0===t?this.list0=[].concat(i()(a[0])):1===t?this.list1=[].concat(i()(a[1])):this.list2=[].concat(i()(a[2])),this.createdInfo.warnNodeList=[].concat(i()(this.list0),i()(this.list1),i()(this.list2))},newWarn:p()(o()(l.a.mark(function t(){var e,s;return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.title){t.next=17;break}return this.changeLabelToId(0,this.checkList),this.changeLabelToId(1,this.checkList1),this.changeLabelToId(2,this.checkList2),e=this.createdInfo,!0===this.defaults?e.isDefaults=1:e.isDefaults=0,e.warnName=this.title,t.next=9,Object(d.l)(e);case 9:return 1===t.sent.status&&this.$message({showClose:!0,type:"success",message:"创建或修改成功！"}),t.next=13,Object(d.T)({mark:1});case 13:1===(s=t.sent).status&&(this.warnList=s.msg,1===e.isDefaults?this.getList(this.warnList[0]):this.getList(this.warnList[1])),t.next=18;break;case 17:Object(u.Message)({showClose:"true",type:"error",message:"提醒名称是必填项！"});case 18:case"end":return t.stop()}},t,this)})),2e3,{maxWait:500,leading:!0,trailing:!1})},data:function(){return{warnList:[],warnListType:"",title:"",defaults:!1,radio:"1",allWarnList:{event:[],node:[],reject:[]},newWarnList:[],cascaderValue:[],hasCheckList:{event:[],node:[],reject:[]},checkList:[],checkList1:[],checkList2:[],createdInfo:{warnNodeList:[]},list0:[],list1:[],list2:[],dialogFormVisible:!1,form:{},formLabelWidth:"120px"}}},L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"newRemind"}},[t.warnList.length?s("div",{staticClass:"ovw-h mt20 mb20"},[s("span",[t._v("项目提醒设置：")]),t._v(" "),s("el-button",{attrs:{type:"primary",plain:"",round:"",size:"mini",disabled:6===t.warnList.length,title:6===t.warnList.length?"已达最大新增数，谢谢！":""},on:{click:t.initial}},[t._v("+ 新增提醒")]),t._v(" "),s("el-row",{staticClass:"mt20",attrs:{gutter:60}},t._l(t.warnList,function(e){return s("el-button",{key:e.id,class:{active:t.warnListType===e.id},staticStyle:{"margin-left":"30px"},attrs:{type:"primary",plain:"",round:"",size:"mini"},on:{click:function(s){return t.getList(e)}}},[t._v(t._s(e.warnName))])}),1),t._v(" "),s("hr")],1):t._e(),t._v(" "),s("div",{staticClass:"mt20",staticStyle:{width:"50%",margin:"0 auto","min-width":"960px"}},[s("div",{staticClass:"ovw-h",staticStyle:{"font-size":"16px","font-weight":"bold","margin-left":"-30px"}},[s("span",[t._v("提醒设置名称：")]),t._v(" "),s("el-input",{staticClass:"require",staticStyle:{width:"200px","margin-right":"20px"},attrs:{type:"text",maxlength:"20",clearable:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),s("el-checkbox",{attrs:{label:"设为默认提醒"},model:{value:t.defaults,callback:function(e){t.defaults=e},expression:"defaults"}})],1),t._v(" "),s("div",{staticClass:"system"},[s("el-tag",{staticStyle:{margin:"20px 20px 20px -10px"}},[t._v("事件触发提醒")]),t._v(" "),s("el-row",{staticStyle:{"line-height":"32px"}},[s("el-col",{attrs:{span:8}},[t._v("节点种类：")]),t._v(" "),s("el-col",{attrs:{span:16}},[t._v("说明：")]),t._v(" "),s("el-checkbox-group",{model:{value:t.checkList,callback:function(e){t.checkList=e},expression:"checkList"}},t._l(t.allWarnList.event,function(e){return s("el-row",{key:e.id,staticClass:"dashed"},[s("el-col",{attrs:{span:8}},[s("el-checkbox",{attrs:{label:e.warnNode}})],1),t._v(" "),s("el-col",{attrs:{span:16}},[t._v(t._s(e.detail))])],1)}),1)],1)],1),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"self"},[s("el-tag",{staticStyle:{margin:"20px 20px 20px -10px"}},[t._v("节点触发提醒")]),t._v(" "),s("el-checkbox-group",{model:{value:t.checkList1,callback:function(e){t.checkList1=e},expression:"checkList1"}},[s("el-row",{staticClass:"dashed",staticStyle:{"line-height":"32px"},attrs:{gutter:20}},t._l(t.allWarnList.node,function(t){return s("el-col",{key:t.id,attrs:{span:6}},[s("el-checkbox",{attrs:{label:t.warnNode,title:t.warnNode}})],1)}),1)],1)],1),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"self"},[s("el-tag",{staticStyle:{margin:"20px 20px 20px -10px"}},[t._v("不合格零件提醒")]),t._v(" "),s("el-checkbox-group",{model:{value:t.checkList2,callback:function(e){t.checkList2=e},expression:"checkList2"}},[s("el-row",{staticClass:"dashed",staticStyle:{"line-height":"32px"},attrs:{gutter:20}},t._l(t.allWarnList.reject,function(t){return s("el-col",{key:t.id,attrs:{span:6}},[s("el-checkbox",{attrs:{label:t.warnNode,title:t.warnNode}})],1)}),1)],1)],1),t._v(" "),s("el-row",{staticClass:"mt40",attrs:{gutter:10,type:"flex",justify:"center"}},[s("el-col",{attrs:{span:3}},[s("el-button",{attrs:{type:"primary",round:""},on:{click:t.newWarn}},[t._v(t._s(0===t.warnList.length?"新增":"保存"))])],1)],1)],1)])},staticRenderFns:[]};var k=s("C7Lr")(f,L,!1,function(t){s("zDUL")},"data-v-0eb7f164",null);e.default=k.exports},zDUL:function(t,e){}});