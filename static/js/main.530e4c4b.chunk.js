(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,a,t){},104:function(e,a,t){},243:function(e,a,t){},245:function(e,a,t){},247:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(94),l=t.n(s),o=(t(102),t(2)),c=t(3),i=t(5),d=t(4),u=t(6),h=(t(104),t(41)),m=t(39),p=t(45),y=t.n(p),f=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props.freePass,t=this.getClasses(a);return r.a.createElement("div",{onClick:function(){return e.props.onToggleFreePass(!a)},className:t},r.a.createElement("span",{className:"display-4"},"Free Pass"))}},{key:"getClasses",value:function(e){var a="white mb-1 ";return a+=e?y.a.btn:y.a.btn_secondary}}]),a}(n.Component),_=t(46),g=t.n(_),b=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props.sick,t=this.getClasses(a);return r.a.createElement("div",{onClick:function(){return e.props.onToggleSick(!a)},className:t},r.a.createElement("span",{className:"display-4"},"Sick leave"))}},{key:"getClasses",value:function(e){var a="white mb-1 ";return a+=e?g.a.btn:g.a.btn_secondary}}]),a}(n.Component),v=t(47),C=t.n(v),k=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props.extraChallenge,t=this.getClasses(a);return r.a.createElement("div",{onClick:function(){return e.props.onToggleExtraChallenge(!a)},className:t},r.a.createElement("span",{className:"display-4"},"Xtra"))}},{key:"getClasses",value:function(e){var a="white mb-1 ";return a+=e?C.a.btn:C.a.btn_secondary}}]),a}(n.Component),O=t(48),S=t.n(O),E=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props.mandatoryChallenge,t=this.getClasses(a);return r.a.createElement("div",{onClick:function(){return e.props.onToggleMandatoryChallenge(!a)},className:t},r.a.createElement("span",{className:"display-4"},"30'"))}},{key:"getClasses",value:function(e){var a="white mb-1 ";return a+=e?S.a.btn:S.a.btn_secondary}}]),a}(n.Component),j=t(49),w=t.n(j),N=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props.recalledChallenge,t=this.getClasses(a);return r.a.createElement("div",{onClick:function(){return e.props.onToggleRecalledChallenge(!a)},className:t},r.a.createElement("span",{className:"display-4"},"60'"))}},{key:"getClasses",value:function(e){var a="white mb-1 ";return a+=e?w.a.btn:w.a.btn_secondary}}]),a}(n.Component),D=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"badge badge-secondary"},this.props.scoreLabel," ",r.a.createElement("span",{className:"badge badge-light"},this.props.score))}}]),a}(n.Component),T=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).HandleToggleFreePass=function(e){console.log("new Free Pass State: ",e);var a=Object(m.a)({},t.props.day);a.freePass=e,e&&(a.mandatoryChallenge=!1,a.sick=!1,a.extraChallenge=!1,a.recalledChallenge=!1),t.UpdateState(a)},t.HandleToggleMandatoryChallenge=function(e){console.log("new MandatoryChallenge State: ",e);var a=Object(m.a)({},t.props.day);a.mandatoryChallenge=e,e?(a.sick=!1,a.freePass=!1):a.recalledChallenge=!1,t.UpdateState(a)},t.HandleToggleSick=function(e){console.log("new Sick State: ",e);var a=Object(m.a)({},t.props.day);a.sick=e,e&&(a.mandatoryChallenge=!1,a.freePass=!1,a.extraChallenge=!1,a.recalledChallenge=!1),t.UpdateState(a)},t.HandleToggleExtraChallenge=function(e){console.log("new ExtraChallenge State: ",e);var a=Object(m.a)({},t.props.day);a.extraChallenge=e,e?(a.sick=!1,a.freePass=!1):a.recalledChallenge=!1,t.UpdateState(a)},t.HandleToggleRecalledChallenge=function(e){console.log("new RecalledChallenge State: ",e);var a=Object(m.a)({},t.props.day);t.props.day.mandatoryChallenge&&t.props.day.extraChallenge&&t.props.redStrokesExist||(e=!1),a.recalledChallenge=e,e&&(a.sick=!1,a.freePass=!1),t.UpdateState(a)},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"UpdateState",value:function(e){var a=this.ComputedDailyScore(e);e.dailyScore=a,this.props.OnDayUpdate(e)}},{key:"ComputedDailyScore",value:function(e){var a=0;return e.sick?2:e.freePass?2:(e.mandatoryChallenge&&(a+=1),e.extraChallenge&&(a+=1),e.recalledChallenge&&(a+=1),a)}},{key:"render",value:function(){return r.a.createElement("span",null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col d-flex justify-content-center"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row mb-3"},r.a.createElement("div",{className:"col"},r.a.createElement("span",{className:"display-4"},this.props.day.date))),r.a.createElement("div",{className:"row mb-3"},r.a.createElement("div",{className:"col-sm "},r.a.createElement(E,{onToggleMandatoryChallenge:this.HandleToggleMandatoryChallenge,mandatoryChallenge:this.props.day.mandatoryChallenge})),r.a.createElement("div",{className:"col-sm"},r.a.createElement(k,{onToggleExtraChallenge:this.HandleToggleExtraChallenge,extraChallenge:this.props.day.extraChallenge})),r.a.createElement("div",{className:"col-sm"},r.a.createElement(N,{onToggleRecalledChallenge:this.HandleToggleRecalledChallenge,recalledChallenge:this.props.day.recalledChallenge}))),r.a.createElement("div",{className:"row mb-3"},r.a.createElement("div",{className:"col-sm"},r.a.createElement(b,{onToggleSick:this.HandleToggleSick,sick:this.props.day.sick}))),r.a.createElement("div",{className:"row mb-3"},r.a.createElement("div",{className:"col-sm"},r.a.createElement(f,{onToggleFreePass:this.HandleToggleFreePass,freePass:this.props.day.freePass})))),r.a.createElement("div",{className:"row mb-3"},r.a.createElement("div",{className:"col"},r.a.createElement(D,{scoreLabel:"Daily score",score:this.props.day.dailyScore})))))))}}]),a}(n.Component),x=t(36),M=t.n(x),R=t(37),P=t.n(R),U=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={currentMonth:new Date,selectedDate:new Date},t.onDateClick=function(e){t.setState({selectedDate:e}),t.props.onNavigateTo(e)},t.nextMonth=function(){t.setState({currentMonth:P.a.addMonths(t.state.currentMonth,1)})},t.prevMonth=function(){t.setState({currentMonth:P.a.subMonths(t.state.currentMonth,1)})},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"renderHeader",value:function(){return r.a.createElement("div",{className:[M.a.header,M.a.row,M.a["flex-middle"]].join(" ")},r.a.createElement("div",{className:[M.a.col,M.a["col-start"]].join(" ")},r.a.createElement("div",{className:M.a.icon,onClick:this.prevMonth},"chevron_left")),r.a.createElement("div",{className:[M.a.col,M.a["col-center"]].join(" ")},r.a.createElement("span",null,P.a.format(this.state.currentMonth,"MMMM YYYY"))),r.a.createElement("div",{className:[M.a.col,M.a["col-end"]].join(" ")},r.a.createElement("div",{className:M.a.icon,onClick:this.nextMonth},"chevron_right")))}},{key:"renderDays",value:function(){for(var e=[],a=P.a.startOfISOWeek(this.state.currentMonth),t=0;t<7;t++)e.push(r.a.createElement("div",{className:[M.a.col,M.a["col-center"]].join(" "),key:t},P.a.format(P.a.addDays(a,t),"dddd")));return r.a.createElement("div",{className:[M.a.days,M.a.row].join(" ")},e)}},{key:"getCellClasses",value:function(e,a,t){var n=[M.a.col,M.a.cell].join(" "),r=this.getClassFromScoreType(e);return!P.a.isSameMonth(e,a)||P.a.isAfter(e,new Date)||P.a.isBefore(e,P.a.format(this.props.startDate))||P.a.isAfter(e,P.a.format(this.props.endDate))?[n,M.a.disabled].join(" "):P.a.isSameDay(e,t)&&(n=[n,M.a.selected].join(" "),null==r)?[n,M.a.calendar_empty].join(" "):[n,this.getClassFromScoreType(e)].join(" ")}},{key:"getClassFromScoreType",value:function(e){var a=this.GetDateString(e),t=this.props.days.filter(function(e){return e.date===a});if(1===t.length){var n=t[0];if(n.freePass)return M.a.calender_freePass;if(n.sick)return M.a.calender_sick;if(n.recalledChallenge)return M.a.calender_recalledChallenge;if(n.mandatoryChallenge&&n.extraChallenge)return M.a.calender_mandatoryXtraChallenge;if(n.mandatoryChallenge||n.extraChallenge)return M.a.calender_failedChallenge}return null}},{key:"GetDateString",value:function(e){var a=new Date(e);return new Date(a.getTime()-6e4*a.getTimezoneOffset()).toISOString().split("T")[0]}},{key:"renderCells",value:function(){for(var e=this,a=this.state,t=a.currentMonth,n=a.selectedDate,s=P.a.startOfMonth(t),l=P.a.endOfMonth(s),o=P.a.startOfISOWeek(s),c=P.a.endOfISOWeek(l),i=[],d=[],u=o,h="";u<=c;){for(var m=function(a){h=P.a.format(u,"D");var t=u;d.push(r.a.createElement("div",{className:e.getCellClasses(u,s,n),key:u,onClick:function(){return e.onDateClick(P.a.parse(t))}},r.a.createElement("span",{className:M.a.number},h),r.a.createElement("span",{className:M.a.bg},h))),u=P.a.addDays(u,1)},p=0;p<7;p++)m();i.push(r.a.createElement("div",{className:M.a.row,key:u},d)),d=[]}return r.a.createElement("div",{className:M.a.body},i)}},{key:"render",value:function(){return r.a.createElement("div",{className:M.a.calendar},this.renderHeader(),this.renderDays(),this.renderCells())}}]),a}(n.Component),H=t(42),B=t.n(H),G=function(e){function a(){var e;Object(o.a)(this,a),(e=Object(i.a)(this,Object(d.a)(a).call(this))).HandleDailyScoreUpdate=function(e){},e.HandleDayUpdate=function(a){if(e.setState({dateToDisplay:a}),e.state.user.days.some(function(e){return e.date===a.date})){var t=Object(m.a)({},e.state.user);B.a.post("https://stark-woodland-24163.herokuapp.com/user/update/"+t._id+"/day/"+a._id,a).then(function(n){var r=Object(h.a)(e.state.user.days);r[e.state.user.days.findIndex(function(e){return e.date===a.date})]=a,t.days=r,e.setState({user:t},function(){e.CalculateTotalScore()})})}else{var n=Object(m.a)({},e.state.user);B.a.post("https://stark-woodland-24163.herokuapp.com/user/"+n._id+"/day/add",a).then(function(t){a._id=t.data._id;var r=[].concat(Object(h.a)(e.state.user.days),[a]);n.days=r,e.setState({user:n},function(){e.CalculateTotalScore()})})}},e.HandleNavigateTo=function(a){var t=e.GetDay(a);e.setState({dateToDisplay:t})},e.HandleCalendarClassnames=function(a){if("month"===a.view){var t=e.GetDay(a.date);return t.freePass?"freePassTile":t.sick?"sickTile":t.recalledChallenge?"recalledChallengeTile":t.mandatoryChallenge&&t.extraChallenge?"regularTile":"redDayTile"}return null},e.state={user:{name:"",days:[]}};var t=e.GetToday();return e.state.user.days.push(t),e.state.dateToDisplay=t,e}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;if(!this.state.user._id){var a=this.props.userName;B.a.get("https://stark-woodland-24163.herokuapp.com/user/name/"+a).then(function(a){var t=a.data;e.setState({user:t},function(){var a=e.GetToday();e.setState({dateToDisplay:a})})}).catch(function(t){var n=Object(m.a)({},e.state.user);n.name=a,B.a.post("https://stark-woodland-24163.herokuapp.com/user/add/",n).then(function(a){n._id=a.data._id,n.days[0]._id=a.data.day_id,e.setState({user:n})}).catch(function(e){})})}}},{key:"CountFreePassUsed",value:function(){return this.state.user&&this.state.user.days?Object(h.a)(this.state.user.days).filter(function(e){return!0===e.freePass}).length:0}},{key:"CountSickDays",value:function(){return this.state.user&&this.state.user.days?Object(h.a)(this.state.user.days).filter(function(e){return!0===e.sick}).length:0}},{key:"countMaxNumberOfRedStrokesUntilYesterday",value:function(){if(!this.state.user||!this.state.user.days)return 0;var e=0,a=new Date("2020-01-13"),t=new Date(this.state.dateToDisplay.date)-a;return t>0&&(e=t/864e5*2),console.log(e),e}},{key:"CountRedStrokesUntilYesterday",value:function(){if(!this.state.user||!this.state.user.days)return 0;var e=Object(h.a)(this.state.user.days),a=this.countMaxNumberOfRedStrokesUntilYesterday(),t=!0,n=!1,r=void 0;try{for(var s,l=e[Symbol.iterator]();!(t=(s=l.next()).done);t=!0){var o=s.value;o.date<this.state.dateToDisplay.date&&((o.sick||o.freePass)&&(a-=2),o.mandatoryChallenge&&(a-=1),o.extraChallenge&&(a-=1),o.recalledChallenge&&(a-=1))}}catch(c){n=!0,r=c}finally{try{t||null==l.return||l.return()}finally{if(n)throw r}}return a}},{key:"CalculateTotalScore",value:function(){if(!this.state.user||!this.state.user.days)return 0;return Object(h.a)(this.state.user.days).reduce(function(e,a){return e+a.dailyScore},0)}},{key:"GetToday",value:function(){var e=new Date;return this.GetDay(e)}},{key:"GetDay",value:function(e){var a=this.GetDateString(e),t=[];return null!=this.state&&null!=this.state.user&&null!=this.state.user.days&&(t=this.state.user.days.filter(function(e){return e.date===a})),0===t.length?{date:a,dailyScore:0,freePass:!1,mandatoryChallenge:!1,extraChallenge:!1,recalledChallenge:!1}:Object(m.a)({},t[0])}},{key:"GetDateString",value:function(e){var a=new Date(e);return new Date(a.getTime()-6e4*a.getTimezoneOffset()).toISOString().split("T")[0]}},{key:"render",value:function(){return console.log("state at render: ",this.state),r.a.createElement("span",null,r.a.createElement("a",{href:"/"},r.a.createElement("button",{type:"button",className:"btn btn-primary",style:{width:"75%"}},r.a.createElement("span",{className:"display-5"},"Home"))),r.a.createElement("h2",null,this.props.userName),r.a.createElement(T,{OnDailyScoreUpdate:this.HandleDailyScoreUpdate,OnDayUpdate:this.HandleDayUpdate,day:this.state.dateToDisplay,redStrokesExist:this.CountRedStrokesUntilYesterday()>0}),r.a.createElement(D,{scoreLabel:"Total score ",score:this.CalculateTotalScore()}),r.a.createElement(D,{scoreLabel:"Free pass used ",score:this.CountFreePassUsed()}),r.a.createElement(D,{scoreLabel:"Sick days ",score:this.CountSickDays()}),r.a.createElement(D,{scoreLabel:"Red strokes ",score:this.CountRedStrokesUntilYesterday()}),r.a.createElement(U,{onNavigateTo:this.HandleNavigateTo,days:this.state.user&&this.state.user.days?this.state.user.days:[],startDate:"2020-01-13",endDate:"2020-02-16"}))}}]),a}(n.Component),A=t(35),F=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(i.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={users:[],inputValue:""},t.handleChange=function(e){t.setState({inputValue:e.target.value})},t.handleSubmit=function(e){console.log("new user: ",t.state.inputValue),e.preventDefault(),t.props.history.push("/"+t.state.inputValue)},t.handleUserClicked=function(e,a){a.preventDefault(),console.log("handleUserClicked: ",e),t.props.history.push("/"+e)},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;B.a.get("https://stark-woodland-24163.herokuapp.com/user").then(function(a){var t=a.data,n=[];console.log(t),t.map(function(a){return n.push({name:a.name,totalScore:e.CalculateTotalScore(a),redStrokes:e.CountRedStrokesUntilYesterday(a)})}),n.sort(function(e,a){return e.redStrokes>a.redStrokes?1:-1}),e.setState({users:n},function(){console.log("state: ",e.state)})}).catch(function(e){console.log("error while fetching users. ",e)})}},{key:"CalculateTotalScore",value:function(e){if(null==e||null==e.days)return 0;return Object(h.a)(e.days).reduce(function(e,a){return e+a.dailyScore},0)}},{key:"countMaxNumberOfRedStrokesUntilYesterday",value:function(){var e=0,a=new Date("2020-01-13"),t=new Date(this.GetTodayAsString())-a;return t>0&&(e=t/864e5*2),console.log("MaxNumberOfRedStrokes: ",e),e}},{key:"CountRedStrokesUntilYesterday",value:function(e){if(null==e||null==e.days)return 0;var a=this.GetTodayAsString(),t=Object(h.a)(e.days),n=this.countMaxNumberOfRedStrokesUntilYesterday(),r=!0,s=!1,l=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done);r=!0){var i=o.value;i.date<a&&((i.sick||i.freePass)&&(n-=2),i.mandatoryChallenge&&(n-=1),i.extraChallenge&&(n-=1),i.recalledChallenge&&(n-=1))}}catch(d){s=!0,l=d}finally{try{r||null==c.return||c.return()}finally{if(s)throw l}}return n}},{key:"GetTodayAsString",value:function(){var e=new Date;return new Date(e.getTime()-6e4*e.getTimezoneOffset()).toISOString().split("T")[0]}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.users.map(function(a){return r.a.createElement("div",{className:"row mt-2",key:a.name},r.a.createElement("div",{className:"col"},r.a.createElement("button",{type:"button",onClick:function(t){return e.handleUserClicked(a.name,t)},className:"btn btn-primary p-3",style:{width:"75%"}},r.a.createElement("span",{className:"display-5"},a.name," ",r.a.createElement("span",{className:"badge badge-light pull-right"},a.redStrokes)))))}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"row mt-5"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange,style:{width:"75%"}}))),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("div",{className:"col"},r.a.createElement("input",{type:"submit",className:"btn btn-primary p-3",value:"add new user",style:{width:"75%"}})))))}}]),a}(n.Component),Y=Object(A.e)(F),L=t(44),W=function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(t=Object(i.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(s)))).specificUser=function(e){return r.a.createElement(G,{userName:e.match.params.name})},t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"Container"},r.a.createElement(L.a,null,r.a.createElement(A.a,{path:"/",exact:!0,component:Y}),r.a.createElement(A.a,{path:"/:name",component:this.specificUser}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(239),t(241),t(243),t(245);l.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},36:function(e,a,t){e.exports={icon:"calendar_icon__2LDXf",logo:"calendar_logo__33a--",row:"calendar_row__3NEkV","row-middle":"calendar_row-middle__b96lq",col:"calendar_col__ohCqP","col-start":"calendar_col-start__1Nc2N","col-center":"calendar_col-center__1Dvzu","col-end":"calendar_col-end__10MF1",calendar:"calendar_calendar__2kUVQ",header:"calendar_header__3jCPC",days:"calendar_days__2AxkR",body:"calendar_body__2d2eL",cell:"calendar_cell__ftrco",calendar_empty:"calendar_calendar_empty__2qepA",calender_sick:"calendar_calender_sick__21ZXR",calender_freePass:"calendar_calender_freePass__2XF_b",calender_mandatoryXtraChallenge:"calendar_calender_mandatoryXtraChallenge__2jdCy",calender_recalledChallenge:"calendar_calender_recalledChallenge__Sgzro",calender_failedChallenge:"calendar_calender_failedChallenge__gxeSh",number:"calendar_number__Se6uO",disabled:"calendar_disabled__30mt4",bg:"calendar_bg__rX64K",selected:"calendar_selected__2D4su"}},45:function(e,a,t){e.exports={btn:"freePassButton_btn__1C2EQ bootstrap_btn__2_xRl",btn_secondary:"freePassButton_btn_secondary__2ATLS bootstrap_btn__2_xRl undefined undefined bootstrap_btn-secondary__1BWRM"}},46:function(e,a,t){e.exports={btn:"sickButton_btn__3LaGH bootstrap_btn__2_xRl",btn_secondary:"sickButton_btn_secondary__2YbkM bootstrap_btn__2_xRl undefined undefined bootstrap_btn-secondary__1BWRM"}},47:function(e,a,t){e.exports={btn:"extraChallengeButton_btn__3GbQ3 bootstrap_btn__2_xRl",btn_secondary:"extraChallengeButton_btn_secondary__25YEF bootstrap_btn__2_xRl undefined undefined bootstrap_btn-secondary__1BWRM"}},48:function(e,a,t){e.exports={btn:"mandatoryChallengeButton_btn__1M1z3 bootstrap_btn__2_xRl",btn_secondary:"mandatoryChallengeButton_btn_secondary__Qrq6w bootstrap_btn__2_xRl undefined undefined bootstrap_btn-secondary__1BWRM"}},49:function(e,a,t){e.exports={btn:"recalledChallengeButton_btn__3AdwX bootstrap_btn__2_xRl",btn_secondary:"recalledChallengeButton_btn_secondary__A35d2 bootstrap_btn__2_xRl undefined undefined bootstrap_btn-secondary__1BWRM"}},97:function(e,a,t){e.exports=t(247)}},[[97,2,1]]]);
//# sourceMappingURL=main.530e4c4b.chunk.js.map