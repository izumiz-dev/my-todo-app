(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){e.exports=a(206)},119:function(e,t,a){},120:function(e,t,a){},206:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(9),l=a.n(o),r=(a(119),a(66)),s=a(83),c=a(84),d=a(18),u=a(101),m=a(99),p=(a(120),new(a(85).a)("TodoLists"));p.version(1).stores({newLists:"++id, isDone"});var h=p,g=a(236),f=a(239),k=a(241),b=a(242),E=a(243),v=a(244),y=a(245),C=a(246),w=a(247),D=a(260),O=a(258),I=a(248),j=a(249),T=a(92),L=a.n(T),x=a(91),S=a.n(x),N=a(86),B=a.n(N),A=Object(g.a)(function(e){return{root:{display:"flex",alignItems:"center",width:"85%",flexGrow:1,overflow:"hidden",margin:"".concat(e.spacing(1),"px auto"),padding:e.spacing(1)},card:{width:"100%",paddingTop:e.spacing(1),paddingBottom:e.spacing(0),paddingLeft:e.spacing(1),paddingRight:e.spacing(1)},toolButtons:{paddingBottom:e.spacing(1),marginLeft:"auto"},content:{paddingTop:e.spacing(1),paddingBottom:e.spacing(1),paddingLeft:e.spacing(2),paddingRight:e.spacing(2)}}}),H=function(e){var t=e.taskString,a=e.editDueTime,n=e.taskId,o=e.handleDoneClick,l=e.handleEditClick,r=(e.handleSetDueTime,e.handleEditDueTime);console.log(a,n,"a");var s=A();return i.a.createElement("div",{className:s.root},i.a.createElement(f.a,{className:s.card},i.a.createElement(k.a,{className:s.content},i.a.createElement("div",{style:{wordWrap:"break-word"}},i.a.createElement(B.a,{source:t}))),i.a.createElement(b.a,null,i.a.createElement(E.a,{disableSpacing:!0,style:{padding:"0px"}},i.a.createElement("div",{className:s.toolButtons},i.a.createElement(v.a,{id:"editButton","aria-label":"Edit",onClick:l},i.a.createElement(S.a,{fontSize:"small"})),a===n?i.a.createElement(y.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,open:!0,onClose:r},i.a.createElement(C.a,null,"Select DueTime"),i.a.createElement(w.a,null,i.a.createElement(D.a,{className:s.formControl},i.a.createElement("form",{className:s.container},i.a.createElement(O.a,{id:"datetime-local",type:"datetime-local",className:s.textField,InputLabelProps:{shrink:!0}})))),i.a.createElement(I.a,null,i.a.createElement(j.a,{onClick:function(){r("close")},color:"primary"},"Cancel"),i.a.createElement(j.a,{onClick:function(){return 1},color:"primary"},"Ok"))):null,i.a.createElement(v.a,{"aria-label":"todo done",onClick:o},i.a.createElement(L.a,{fontSize:"small"})))))))},R=a(65),z=a(100),M=a(31),F=a(250),K=a(106),G=a(251),W=a(252),J=a(253),U=a(254),P=a(10),q=a(93),Q=a.n(q),V=Object(g.a)(function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(M.a)({flexGrow:1},e.breakpoints.up("sm"),{display:"block"}),search:Object(M.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(P.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(P.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(M.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:120,"&:focus":{width:200}}),list:{width:250},fullList:{width:"auto"}}}),X=function(){var e,t=V(),a=i.a.useState({top:!1,left:!1,bottom:!1,right:!1}),n=Object(z.a)(a,2),o=n[0],l=n[1],r=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&l(Object(R.a)(Object(R.a)({},o),{},Object(M.a)({},e,t)))}};return i.a.createElement("div",{className:t.root,style:{paddingTop:56}},i.a.createElement(W.a,{position:"static",style:{position:"fixed",top:0}},i.a.createElement(J.a,null,i.a.createElement(v.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer",onClick:r("left",!0)},i.a.createElement(Q.a,null)),i.a.createElement(K.a,{className:t.title,variant:"h6"},"Todo Memo"),i.a.createElement(U.a,{open:o.left,onClose:r("left",!1)},(e="left",i.a.createElement("div",{className:t.list,role:"presentation",onClick:r(e,!1),onKeyDown:r(e,!1)},i.a.createElement(F.a,null),i.a.createElement(K.a,{variant:"body2",display:"block",style:{margin:0,top:"auto",left:60,bottom:30,right:"auto",position:"fixed"}},"DevelopedBy",i.a.createElement(G.a,{href:"https://twitter.com/izumizme"},"@izumizme"))))))))},Y=a(255),Z=a(94),$=a.n(Z),_=Object(g.a)(function(e){return{fab:{margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"fixed"},DoneIcon:{marginRight:e.spacing(1),marginBottom:e.spacing(1)},grid:{alignItems:"flex-end",justifyContent:"flex-end"}}}),ee=function(e){var t=e.handleDialogOpen,a=_();return i.a.createElement(b.a,{container:!0,className:a.grid},i.a.createElement(Y.a,{color:"secondary","aria-label":"add",className:a.fab,onClick:t},i.a.createElement($.a,null)))},te=a(96),ae=a.n(te),ne=a(95),ie=a.n(ne),oe=a(207),le=Object(g.a)(function(e){return{appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},textField:{display:"flex",alignItems:"center",width:"90%",margin:"".concat(e.spacing(2),"px auto"),padding:e.spacing(2)}}}),re=i.a.forwardRef(function(e,t){return i.a.createElement(oe.a,Object.assign({direction:"up",ref:t},e))}),se=function(e){var t=e.onSaveClick,a=e.isOpen,n=e.handleClose,o=e.onInputChange,l=e.textInput,r=le();return i.a.createElement("div",null,i.a.createElement(y.a,{fullScreen:!0,open:a,onClose:n,TransitionComponent:re},i.a.createElement(W.a,{className:r.appBar},i.a.createElement(J.a,null,i.a.createElement(v.a,{edge:"start",color:"inherit",onClick:n,"aria-label":"close"},i.a.createElement(ie.a,null)),i.a.createElement(K.a,{variant:"h6",className:r.title},"Edit Memo"),i.a.createElement(v.a,{color:"inherit",onClick:t},i.a.createElement(ae.a,null)))),i.a.createElement(O.a,{variant:"outlined",multiline:!0,rows:"10",rowsMax:"40",id:"todoInputBox",placeholder:"Markdown is supported.",className:r.textField,onChange:o,value:l,fullWidth:!0,margin:"normal"})))},ce=a(56),de=a(259),ue=a(97),me=a.n(ue),pe=Object(g.a)(function(e){return{root:{display:"flex",alignItems:"center",margin:"".concat(e.spacing(4),"px auto"),width:"85%",padding:e.spacing(1)},input:{marginLeft:8,flex:1},iconButton:{padding:10},divider:{width:1,height:28,margin:4}}}),he=function(e){var t=e.onAddClick,a=e.onInputChange,n=e.textInput,o=pe();return i.a.createElement(ce.a,{className:o.root},i.a.createElement(de.a,{id:"taskInputBox",multiline:!0,className:o.input,placeholder:"Ctrl(Cmd)+Enter \u3067\u30e1\u30e2\u306e\u4f5c\u6210",onChange:a,value:n}),i.a.createElement(F.a,{className:o.divider}),i.a.createElement(v.a,{color:"inherit",className:o.iconButton,"aria-label":"Directions",onClick:t},i.a.createElement(me.a,null)))},ge=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={input:"",todoLists:[],dialogOpen:!1,editId:!1,theme:"light",editDueTime:!1},n.keydownHandler=n.keydownHandler.bind(Object(d.a)(n)),n.onEditDueDate=n.onEditDueDate.bind(Object(d.a)(n)),n.onSetDueTime=n.onSetDueTime.bind(Object(d.a)(n)),n.onAddClick=n.onAddClick.bind(Object(d.a)(n)),n.onInputChange=n.onInputChange.bind(Object(d.a)(n)),n.onDeleteTask=n.onDeleteTask.bind(Object(d.a)(n)),n.onEditTask=n.onEditTask.bind(Object(d.a)(n)),n.onHandleDialog=n.onHandleDialog.bind(Object(d.a)(n)),n.onChangeTheme=n.onChangeTheme.bind(Object(d.a)(n)),n}return Object(c.a)(a,[{key:"keydownHandler",value:function(e){13===e.keyCode&&(e.metaKey&&this.onAddClick(),e.ctrlKey&&this.onAddClick())}},{key:"componentDidMount",value:function(){var e=this;h.table("newLists").where({isDone:0}).toArray().then(function(t){e.setState({todoLists:t})}),document.addEventListener("keydown",this.keydownHandler)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.keydownHandler)}},{key:"componentDidUpdate",value:function(e,t){var a=this;this.state.editId!==t.editId&&h.table("newLists").where({isDone:0}).toArray().then(function(e){a.setState({todoLists:e})})}},{key:"onAddClick",value:function(){var e=this;if(this.state.input&&!this.state.editId){var t={title:this.state.input};h.table("newLists").add({todo:t,isDone:0}).then(function(a){var n=[].concat(Object(r.a)(e.state.todoLists),[Object.assign({},{todo:t},{id:a})]);e.setState({todoLists:n,input:"",dialogOpen:!1})})}if(this.state.editId){var a={title:this.state.input};h.table("newLists").update(this.state.editId,{todo:a});var n=Object(r.a)(this.state.todoLists);this.setState({todoLists:n,input:"",dialogOpen:!1,editId:!1})}}},{key:"onEditTask",value:function(e){var t=this;h.table("newLists").where({id:e}).toArray().then(function(a){var n=a[0].todo.title;t.setState({dialogOpen:!0,input:n,editId:e})})}},{key:"onInputChange",value:function(e){this.setState({input:e.target.value})}},{key:"onDeleteTask",value:function(e){var t=this;this.setState({tasks:this.state.todoLists.splice(e,1)}),h.table("newLists").update(e,{isDone:1}).then(function(){var a=t.state.todoLists.filter(function(t){return t.id!==e});t.setState({todoLists:a})})}},{key:"onHandleDialog",value:function(){this.setState({dialogOpen:!this.state.dialogOpen,input:"",editId:!1})}},{key:"onChangeTheme",value:function(){var e;e="light"===this.state.theme?"dark":"light",this.setState({theme:e})}},{key:"onSetDueTime",value:function(e){console.log(e)}},{key:"onEditDueDate",value:function(e){this.setState({editDueTime:e})}},{key:"render",value:function(){var e=this,t=this.state,a=t.todoLists,n=t.input,o=t.editDueTime;return i.a.createElement(i.a.Fragment,null,i.a.createElement(X,null),i.a.createElement(he,{onAddClick:this.onAddClick,onInputChange:this.onInputChange,textInput:n}),a.map(function(t){return i.a.createElement(H,{key:t.id,taskId:t.id,taskString:t.todo.title,editDueTime:o,handleDoneClick:function(){e.onDeleteTask(t.id)},handleEditClick:function(){e.onEditTask(t.id)},handleDateTime:function(){e.onSetDueTime(t.id)},handleEditDueTime:function(){e.onEditDueDate(t.id)}})}),i.a.createElement(ee,{handleDialogOpen:this.onHandleDialog}),i.a.createElement(se,{handleClose:this.onHandleDialog,isOpen:this.state.dialogOpen,onSaveClick:this.onAddClick,onInputChange:this.onInputChange,textInput:n}))}}]),a}(n.Component),fe=a(257),ke=a(98),be=function(e){return Object(ke.a)({palette:{primary:{main:"#01579b"},secondary:{main:"#880e4f"},type:e}})},Ee=a(256);l.a.render(i.a.createElement(Ee.a,{theme:be("dark")},i.a.createElement(fe.a,null,i.a.createElement(ge,null))),document.getElementById("root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.ca22730f.chunk.js.map