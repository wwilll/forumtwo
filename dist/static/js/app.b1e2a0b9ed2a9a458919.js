webpackJsonp([1],{EEX6:function(t,s){},FOoj:function(t,s){},LO6r:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("7+uW"),i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"footer"}},[s("router-link",{staticClass:"f-btn",attrs:{to:"/",exact:""}},[s("svg",{attrs:{width:"50",height:"50",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{stroke:"#000",id:"svg_1",d:"m311.5,199.94814l-5.5734,-5.0415l0,-12.04066l-4.77798,0l0,7.71867l-11.14862,-10.08465l-21.5,19.44814l5.11835,-0.11031l0,19.66218l32.53577,0l0,-19.55187l5.34588,0zm-21.5,16.73969l-10.61713,0l0,-11.52531l10.61713,0l0,11.52531zm10.31498,-4.93942l-6.97676,0l0,-6.65504l6.97676,0l0,6.65504z","stroke-width":"1.5",fill:"#fff"}}),this._v(" "),s("path",{attrs:{id:"svg_2",d:"m128.1335,32.10165l-7.38799,-6.98054l0,-16.67168l-6.3336,0l0,10.68738l-14.7784,-13.96336l-28.5,26.92819l6.78479,-0.15274l0,27.22455l43.1288,0l0,-27.07181l7.08639,0zm-28.5,23.17803l-14.07386,0l0,-15.95812l14.07386,0l0,15.95812zm13.67334,-6.83919l-9.24826,0l0,-9.21467l9.24826,0l0,9.21467z","fill-opacity":"null","stroke-opacity":"null","stroke-width":"1.5",stroke:"#000",fill:"#fff"}}),this._v(" "),s("path",{attrs:{stroke:"#000",id:"svg_3",d:"m50.37843,24.91094l-6.4807,-6.07565l0,-14.51053l-5.55579,0l0,9.30198l-12.96351,-12.15329l-25,23.4375l5.95157,-0.13294l0,23.69545l37.83229,0l0,-23.5625l6.21614,0zm-25,20.17347l-12.3455,0l0,-13.88948l12.3455,0l0,13.88948zm11.99416,-5.95263l-8.11251,0l0,-8.02018l8.11251,0l0,8.02018z","fill-opacity":"null","stroke-opacity":"null","stroke-width":"1.5",fill:"#fff"}})])]),this._v(" "),s("router-link",{staticClass:"f-btn",attrs:{to:"/writepost"}},[s("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}}),this._v(" "),s("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])]),this._v(" "),s("router-link",{staticClass:"f-btn",attrs:{to:"/info"}},[s("svg",{attrs:{width:"50",height:"50",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{stroke:"#000",id:"svg_2",d:"m34.47605,19.22479c0,0 1.41757,-6.73411 0,-9.01527c-1.41924,-2.28116 -1.98527,-3.80065 -5.10592,-4.88847s-1.9836,-0.87102 -4.25271,-0.75975c-2.26911,0.10936 -4.16088,1.51949 -4.16088,2.27924c0,0 -1.41757,0.10936 -1.9836,0.76166c-0.5677,0.65231 -1.51274,3.69129 -1.51274,4.45296s0.47252,5.86693 0.94505,6.95283l-0.56269,0.2168c-0.47252,6.2986 1.89009,7.06027 1.89009,7.06027c0.84987,5.86693 1.70142,3.36897 1.70142,4.88847s-0.85154,0.97846 -0.85154,0.97846s-0.7547,2.3886 -2.64479,3.2577c-1.89009,0.86718 -12.38244,5.53694 -13.23566,6.5154c-0.85321,0.98038 -0.75637,5.54077 -0.75637,5.54077l44.99322,0c0,0 0.09851,-4.56039 -0.7547,-5.54077c-0.85488,-0.98038 -11.34723,-5.64821 -13.23733,-6.5154c-1.89009,-0.8691 -2.64479,-3.2577 -2.64479,-3.2577s-0.85154,0.54103 -0.85154,-0.97846s0.85154,0.97846 1.70309,-4.88847c0,0 2.36095,-0.76166 1.89009,-7.06027l-0.5677,0z","fill-opacity":"null","stroke-opacity":"null","stroke-width":"1.5",fill:"#fff"}})])])],1)},staticRenderFns:[]};var o={name:"App",components:{Footbar:e("VU/8")(null,i,!1,function(t){e("WA1D")},null,null).exports}},n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view"),this._v(" "),s("Footbar")],1)},staticRenderFns:[]};var r=e("VU/8")(o,n,!1,function(t){e("FOoj")},null,null).exports,l=e("/ocq"),c={data:function(){return{result:null,testInfo:[],allowdelete:!1,currentrole:null,currentid:null,content:"",isPinglun:!1,scrollReview:!0}},props:["posttype"],watch:{},mounted:function(){var t=this,s=this.$myhost+"allpostings";this.$ajax.get(s).then(function(s){0===s.data.status?t.result="暂无消息数据":(s.data.forEach(function(t,s,e){e[s].focus={zk:!1,pl:!1}}),t.testInfo=s.data)}).catch(function(s){t.result="找不到服务器或服务器未启动",console.log(s)});var e=JSON.parse(window.localStorage.getItem("userinfo"));null!=e?(this.currentrole=e[0].role,this.currentid=e[0].id,"root"===this.currentrole||"manager"===this.currentrole?this.allowdelete=!0:this.allowdelete=!1):this.currentrole=null},computed:{filterInfo:function(){var t=this;return this.testInfo.filter(function(s){return 1===t.posttype?s:2===t.posttype?!0===s.postprop.impost:3===t.posttype?!0===s.postprop.graduation:void 0})}},methods:{checkdel:function(t){return"root"===this.currentrole||"manager"===this.currentrole&&"general"===t},gopinglun:function(t){this.currentid?t.focus.pl=!t.focus.pl:alert("请登录")},gosubmit:function(t,s){var e=this;if(0!==this.content.trim().length){var a=this.$myhost+"addreview";this.$ajax.post(a,{timepoint:t,userid:this.currentid,reviewcontent:this.content,comment:s}).then(function(t){1===t.data.status?(alert("评论成功"),location.reload()):e.postres="评论失败"}).catch(function(t){alert("找不到服务器或服务器未启动"),console.log(t)})}else alert("输入为空或全为空格")},unfold:function(t){t.focus.zk=!t.focus.zk},zan:function(t,s){var e=this;if(this.currentid){var a=this.$myhost+"addzan";this.$ajax.post(a,{timepoint:t,zan:s}).then(function(t){1===t.data.status?(alert("点赞成功"),location.reload()):e.postres="点赞失败"}).catch(function(t){alert("找不到服务器或服务器未启动"),console.log(t)})}else alert("请登录")},deletepost:function(t){var s=this;if(confirm("确定删除此帖吗？")){var e=this.$myhost+"deletepost";this.$ajax.post(e,{timepoint:t}).then(function(t){1===t.data.status?(s.postres=":删除成功",location.reload(),s.postList=null):s.postres="删除失败"}).catch(function(t){s.postres="找不到服务器或服务器未启动",console.log(t)})}}}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"postinfo"}},[e("div",[t._v(t._s(t.result))]),t._v(" "),t._l(t.filterInfo,function(s,a){return e("div",{key:a,staticClass:"infolist"},[e("div",{staticClass:"p-head cf"},[e("div",{staticClass:"p-h-icon fl"},[e("img",{attrs:{src:s.avatar,alt:"#"}})]),t._v(" "),e("div",{staticClass:"p-h-user fl"},[e("div",{staticClass:"p-h-id"},[t._v(t._s(s.account))]),t._v(" "),e("div",{staticClass:"p-h-time"},[t._v(t._s(s.time&&s.time[1]))])]),t._v(" "),t.checkdel(s.userrole)?e("div",{staticClass:"p-h-delbtn fr",on:{click:function(e){t.deletepost(s.timepoint)}}},[t._v("删除")]):t._e()]),t._v(" "),e("div",{staticClass:"p-body"},[e("div",{staticClass:"p-b-title"},[t._v(t._s(s.title))]),t._v(" "),e("div",{staticClass:"p-b-subtitle"},[t._v(t._s(s.subtitle))]),t._v(" "),e("div",{staticClass:"p-b-content"},[e("pre",[t._v(t._s(s.content))])])]),t._v(" "),e("div",{staticClass:"p-foot"},[e("ul",{staticClass:"cf"},[e("li",[e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.gopinglun(s)}}},[t._v("评论"+t._s(s.comment))])]),t._v(" "),e("li",[e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.zan(s.timepoint,s.zan)}}},[t._v("赞"+t._s(s.zan))])]),t._v(" "),e("li",[e("a",{attrs:{href:"javascript:void(0)"},on:{click:function(e){t.unfold(s)}}},[t._v("展开评论")])])]),t._v(" "),s.focus.pl?e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"p-f-content",attrs:{rows:"5",cols:"27",placeholder:"你的看法",onpropertychange:"this.style.posHeight=this.scrollHeight"},domProps:{value:t.content},on:{input:function(s){s.target.composing||(t.content=s.target.value)}}}):t._e(),t._v(" "),s.focus.pl?e("div",{staticClass:"cf"},[e("button",{staticClass:"submit fr",on:{click:function(e){t.gosubmit(s.timepoint,s.comment)}}},[t._v("提交")])]):t._e()]),t._v(" "),s.focus.zk?e("div",{staticClass:"p-review"},t._l(s.review,function(s,a){return e("div",{key:a,staticClass:"p-r-list cf"},[e("div",{staticClass:"p-r-user fl"},[t._v(t._s(s.id+" :"))]),t._v(" "),e("p",{staticClass:"p-r-c fl"},[t._v(t._s(s.rew))])])})):t._e()])})],2)},staticRenderFns:[]};var p={data:function(){return{showSidebar:!1,username:null,msg:"系统通知",scType:1}},components:{PostInfo:e("VU/8")(c,u,!1,function(t){e("qgen")},null,null).exports},methods:{changeType:function(t){this.scType=t}}},d={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"index"}},[e("div",{staticClass:"notice"},[e("ul",[e("li",{class:{sc:1==t.scType},on:{click:function(s){t.changeType(1)}}},[e("span",[t._v("全部")])]),t._v(" "),e("li",{class:{sc:2==t.scType},on:{click:function(s){t.changeType(2)}}},[e("span",[t._v("重要通知")])]),t._v(" "),e("li",{class:{sc:3==t.scType},on:{click:function(s){t.changeType(3)}}},[e("span",[t._v("学生区")])])])]),t._v(" "),e("PostInfo",{attrs:{posttype:t.scType}})],1)},staticRenderFns:[]};var v=e("VU/8")(p,d,!1,function(t){e("LO6r")},null,null).exports,h=function(t){var s,e=new Date,a=e.getTime(),i=e.getFullYear(),o=e.getMonth()+1,n=e.getDate(),r=e.getHours(),l=e.getMinutes(),c=e.getSeconds();o=p(o),n=p(n),l=p(l),c=p(c),0===e.getDay()&&(s="周日"),1===e.getDay()&&(s="周一"),2===e.getDay()&&(s="周二"),3===e.getDay()&&(s="周三"),4===e.getDay()&&(s="周四"),5===e.getDay()&&(s="周五"),6===e.getDay()&&(s="周六");var u=i+"-"+o+"-"+n+" "+r+":"+l+":"+c+" "+s;function p(t){return t<10&&(t="0"+t),t}return"tls"===t&&(u=e.toLocaleString()),"tlds"===t&&(u=e.toLocaleDateString()),"tlts"===t&&(u=e.toLocaleTimeString()),[a,u,i,o,n,r,l,c,s]},m={data:function(){return{userId:null,userrole:null,timepoint:null,time:null,title:"",subtitle:"",content:null,postprop:{normalpost:!0,impost:!1,graduation:!1},avatar:"",result:""}},mounted:function(){var t=this,s=JSON.parse(window.localStorage.getItem("userinfo"));setTimeout(function(){s?(t.userId=s[0].id,t.avatar=s[0].avatar,t.userrole=s[0].role):(t.userId=null,confirm("当前无用户，去登录？")&&t.$router.push({path:"/info"}))},100)},methods:{ft:function(){var t=this;if(this.userId)if(this.time=h(null),this.timepoint=this.time[0],null==this.content||this.content.length<10)alert("正文为空或少于10字符，无法发布");else{var s=this.$myhost+"posting";this.$ajax.post(s,{account:this.userId,userrole:this.userrole,time:this.time,timepoint:this.timepoint,title:this.title,subtitle:this.subtitle,content:this.content,postprop:{normalpost:this.postprop.normalpost,impost:this.postprop.impost,graduation:this.postprop.graduation},avatar:this.avatar,comment:0,zan:0,review:[]}).then(function(s){1===s.data.status&&(t.result="发布成功",t.$router.push({path:"/"}))}).catch(function(s){t.result="发布失败，请求不到服务器",console.log(s)})}else alert("游客无法发布信息")}}},f={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"writepost"}},[e("div",{staticClass:"title"},[t._v("发话题")]),t._v(" "),e("div",{staticClass:"infolist"},[e("div",{staticClass:"i-body"},[e("div",{staticClass:"i-b-title"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"ibi ib-title",attrs:{type:"text",placeholder:"标题，可不填"},domProps:{value:t.title},on:{input:function(s){s.target.composing||(t.title=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"i-b-subtitle"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.subtitle,expression:"subtitle"}],staticClass:"ibi ib-subtitle",attrs:{type:"text",placeholder:"副标题，也可不填"},domProps:{value:t.subtitle},on:{input:function(s){s.target.composing||(t.subtitle=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"i-b-content"},[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],staticClass:"ib-content",attrs:{rows:"8",cols:"27",placeholder:"正文",onpropertychange:"this.style.posHeight=this.scrollHeight"},domProps:{value:t.content},on:{input:function(s){s.target.composing||(t.content=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"i-b-prop cf"},[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.postprop.normalpost,expression:"postprop.normalpost"}],attrs:{type:"checkbox",id:"jack",value:"普通"},domProps:{checked:Array.isArray(t.postprop.normalpost)?t._i(t.postprop.normalpost,"普通")>-1:t.postprop.normalpost},on:{change:function(s){var e=t.postprop.normalpost,a=s.target,i=!!a.checked;if(Array.isArray(e)){var o=t._i(e,"普通");a.checked?o<0&&t.$set(t.postprop,"normalpost",e.concat(["普通"])):o>-1&&t.$set(t.postprop,"normalpost",e.slice(0,o).concat(e.slice(o+1)))}else t.$set(t.postprop,"normalpost",i)}}}),e("label",{attrs:{for:"jack"}},[t._v("普通")])]),t._v(" "),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.postprop.impost,expression:"postprop.impost"}],attrs:{type:"checkbox",id:"john",value:"重要"},domProps:{checked:Array.isArray(t.postprop.impost)?t._i(t.postprop.impost,"重要")>-1:t.postprop.impost},on:{change:function(s){var e=t.postprop.impost,a=s.target,i=!!a.checked;if(Array.isArray(e)){var o=t._i(e,"重要");a.checked?o<0&&t.$set(t.postprop,"impost",e.concat(["重要"])):o>-1&&t.$set(t.postprop,"impost",e.slice(0,o).concat(e.slice(o+1)))}else t.$set(t.postprop,"impost",i)}}}),e("label",{attrs:{for:"john"}},[t._v("重要")])]),t._v(" "),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.postprop.graduation,expression:"postprop.graduation"}],attrs:{type:"checkbox",id:"mike",value:"毕业"},domProps:{checked:Array.isArray(t.postprop.graduation)?t._i(t.postprop.graduation,"毕业")>-1:t.postprop.graduation},on:{change:function(s){var e=t.postprop.graduation,a=s.target,i=!!a.checked;if(Array.isArray(e)){var o=t._i(e,"毕业");a.checked?o<0&&t.$set(t.postprop,"graduation",e.concat(["毕业"])):o>-1&&t.$set(t.postprop,"graduation",e.slice(0,o).concat(e.slice(o+1)))}else t.$set(t.postprop,"graduation",i)}}}),e("label",{attrs:{for:"mike"}},[t._v("毕业")])])])])]),t._v(" "),e("div",{staticClass:"foot"},[e("p",{staticClass:"f-info"},[t._v(t._s(t.result))]),t._v(" "),e("button",{staticClass:"postbtn",on:{click:t.ft}},[t._v("发布")])])])},staticRenderFns:[]};var g=e("VU/8")(m,f,!1,function(t){e("llGz")},null,null).exports,_=e("mvHQ"),w=e.n(_),y={data:function(){return{account:"",password:"",cpassword:"",avatar:"/static/images/1.jpg",result:null,role:null,hasUser:!1,useritems:[],loginbtn:!0}},watch:{useritems:{handler:function(t){alert("change locals"+t)},deep:!0}},mounted:function(){},methods:{losefocus:function(t){var s=this;if(t){var e=this.$myhost+"checkid",a={account:this.account};this.$ajax.get(e,{params:a}).then(function(t){1===t.data.status?s.loginbtn?(s.result="此用户存在",s.role="类型:"+t.data.role):(s.result="此用户已存在,不可注册",s.role=""):0===t.data.status&&(s.loginbtn?s.result="此用户不存在":s.result="此用户不存在,可注册")}).catch(function(t){s.result="找不到服务器或服务器未启动",console.log(t)})}},login:function(){var t=this;if(!this.loginbtn)return this.loginbtn=!0,this.account="",this.password="",this.cpassword="",void(this.result="");if("此用户不存在"!==this.result){var s=this.account&&!/^\s+$/.test(this.account),e=this.password&&!/^\s+$/.test(this.password);if(s&&e){var a=this.$myhost+"login",i={account:this.account,password:this.password};this.$ajax.get(a,{params:i}).then(function(s){if(1===s.data.status){t.result="登录成功";var e={id:s.data.account,des:s.data.dec,role:s.data.role,avatar:s.data.avatar};t.useritems.push(e),window.localStorage.setItem("userinfo",w()(t.useritems)),t.$emit("isUser",s.data.account)}else 0===s.data.status&&(t.result="用户名密码不匹配")}).catch(function(s){t.result="找不到服务器或服务器未启动",console.log(s)})}else this.result="用户名或密码不能为空"}},reg:function(){var t=this;if(this.loginbtn)return this.loginbtn=!1,this.account="",this.password="",this.cpassword="",void(this.result="");if("此用户已存在,不可注册"!==this.result){var s=this.account&&!/^\s+$/.test(this.account),e=this.password&&!/^\s+$/.test(this.password),a=this.cpassword&&!/^\s+$/.test(this.cpassword),i=this.password===this.cpassword;if(i)if(s&&e&&a&&i){var o=this.$myhost+"register";this.$ajax.post(o,{account:this.account,password:this.password,role:null,avatar:this.avatar}).then(function(s){if(1===s.data.status){t.result="注册成功:";var e={id:s.data.account,des:s.data.dec,role:s.data.role,avatar:s.data.avatar};t.useritems.push(e),window.localStorage.setItem("userinfo",w()(t.useritems)),t.$emit("isUser",s.data.account)}else 0===s.data.status&&(t.result="注册失败:该用户已存在",t.account="",t.password="",t.cpassword="")}).catch(function(s){t.result="找不到服务器或服务器未启动",console.log(s)})}else this.result="请将信息填写完整";else this.result="两次输入密码不一致"}}}},b={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"logreg"}},[e("div",{staticClass:"login"},[e("div",{staticClass:"input"},[e("div",{staticClass:"info uname"},[e("label",{attrs:{for:"username"}},[t._v("用户名")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text"},domProps:{value:t.account},on:{blur:function(s){t.losefocus(t.account)},input:function(s){s.target.composing||(t.account=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"info upwd"},[e("label",{attrs:{for:"upwd"}},[t._v("密    码")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),t._v(" "),t.loginbtn?t._e():e("div",{staticClass:"info cpwd"},[e("label",{attrs:{for:"cpwd"}},[t._v("重    输")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.cpassword,expression:"cpassword"}],attrs:{type:"password"},domProps:{value:t.cpassword},on:{input:function(s){s.target.composing||(t.cpassword=s.target.value)}}})]),t._v(" "),t.loginbtn?t._e():e("div",{staticClass:"avt cf"},[e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.avatar,expression:"avatar"}],attrs:{type:"radio",id:"one",value:"/static/images/1.jpg"},domProps:{checked:t._q(t.avatar,"/static/images/1.jpg")},on:{change:function(s){t.avatar="/static/images/1.jpg"}}}),e("img",{attrs:{src:"/static/images/1.jpg",alt:"#"}})]),t._v(" "),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.avatar,expression:"avatar"}],attrs:{type:"radio",id:"two",value:"/static/images/2.jpg"},domProps:{checked:t._q(t.avatar,"/static/images/2.jpg")},on:{change:function(s){t.avatar="/static/images/2.jpg"}}}),e("img",{attrs:{src:"/static/images/2.jpg",alt:"#"}})]),t._v(" "),e("div",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.avatar,expression:"avatar"}],attrs:{type:"radio",id:"three",value:"/static/images/3.jpg"},domProps:{checked:t._q(t.avatar,"/static/images/3.jpg")},on:{change:function(s){t.avatar="/static/images/3.jpg"}}}),e("img",{attrs:{src:"/static/images/3.jpg",alt:"#"}})])])]),t._v(" "),e("div",{staticClass:"prompt"},[e("span",[t._v(t._s(t.result))]),t._v(" "),e("span",[t._v(t._s(t.role))])]),t._v(" "),e("div",{staticClass:"btn"},[e("button",{class:{sc:!t.loginbtn},on:{click:t.reg}},[t._v("注册")]),t._v("    "),e("button",{class:{sc:t.loginbtn},on:{click:t.login}},[t._v("登录")])])])])},staticRenderFns:[]};var k={data:function(){return{userid:null,userrole:null,inOut:!0,inOutDes:null,userList:null,postList:null,um:!1,pm:!1,result:null,postres:null,isManage:!1}},watch:{},mounted:function(){var t=JSON.parse(window.localStorage.getItem("userinfo"));null!=t?(this.userid=t[0].id,this.userrole=t[0].role,this.inOut=!0,"root"===this.userrole||"manager"===this.userrole?this.isManage=!0:this.isManage=!1,this.inOutDes="退出",this.userList=null):(this.userid=null,this.userrole=null,this.inOut=!1,this.inOutDes="已登录")},components:{LogReg:e("VU/8")(y,b,!1,function(t){e("c9G8")},null,null).exports},methods:{logout:function(){confirm("确认退出吗？")&&(window.localStorage.removeItem("userinfo"),this.userid=null,this.userrole=null,this.inOut=!1,this.isManage=!1,this.userList=null,this.result=null,this.postres=null)},changeUser:function(t){var s=JSON.parse(window.localStorage.getItem("userinfo"));null!=s?(this.userid=s[0].id,this.userrole=s[0].role,"root"===this.userrole||"manager"===this.userrole?this.isManage=!0:this.isManage=!1,this.inOut=!0,this.inOutDes="退出"):(this.userid=null,this.userrole=null,this.inOut=!1,this.inOutDes="已登录")},userManage:function(){var t=this;if(this.um=!this.um,this.um){if("root"===this.userrole||"manager"===this.userrole){var s=this.$myhost+"checkuser";this.$ajax.get(s).then(function(s){1===s.data.status?(t.result="：系统用户如下",t.userList=s.data.result):0===s.data.status&&(t.result="无用户")}).catch(function(s){t.result="找不到服务器或服务器未启动",console.log(s)})}}else this.result=null},deleteuser:function(t){var s=this;if("root"===t)alert("超级管理员不允许删除");else if(this.userid===t)alert("不能删除自己");else{if(!confirm("确定删除此用户吗？"))return;var e=this.$myhost+"deleteuser";this.$ajax.post(e,{id:t}).then(function(t){1===t.data.status?(s.result=":删除成功",e=s.$myhost+"checkuser",s.$ajax.get(e).then(function(t){1===t.data.status?(s.result="：系统用户如下",s.userList=t.data.result):0===t.data.status&&(s.result="无用户")}).catch(function(t){s.result="找不到服务器或服务器未启动",console.log(t)})):0===t.data.status&&(s.result="无用户")}).catch(function(t){s.result="找不到服务器或服务器未启动",console.log(t)})}},saverole:function(t,s){var e=this;if("root"===t||"root"===s)alert("不允许修改或添加超级管理员权限");else{var a=this.$myhost+"changerole";this.$ajax.post(a,{id:t,role:s}).then(function(t){1===t.data.status?e.result="修改成功":0===t.data.status&&(e.result="无用户")}).catch(function(t){e.result="找不到服务器或服务器未启动",console.log(t)})}},postManage:function(){var t=this;if(this.pm=!this.pm,this.pm||(this.postres=null),this.pm){var s=this.$myhost+"getposts",e={account:this.userid};this.$ajax.get(s,{params:e}).then(function(s){1===s.data.status?(t.postres="：个人帖子如下",t.postList=s.data.result):0===s.data.status&&(t.postres="：无帖子")}).catch(function(s){t.postres="找不到服务器或服务器未启动",console.log(s)})}},deletepost:function(t){var s=this;if(confirm("确定删除此帖吗？")){var e=this.$myhost+"deletepost";this.$ajax.post(e,{timepoint:t}).then(function(t){if(1===t.data.status){s.postres=":删除成功",s.postList=null,e=s.$myhost+"getposts";var a={account:s.userid};s.$ajax.get(e,{params:a}).then(function(t){1===t.data.status?(s.postres="：个人帖子如下",s.postList=t.data.result):0===t.data.status&&(s.postres="：无帖子")}).catch(function(t){s.postres="找不到服务器或服务器未启动",console.log(t)})}else s.postres="删除失败"}).catch(function(t){s.postres="找不到服务器或服务器未启动",console.log(t)})}}}},C={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"info"}},[e("div",{staticClass:"loginfo cf"},[e("div",{staticClass:"u-info"},[e("span",{staticClass:"u-id"},[t._v(t._s(t.userid))]),t._v(" "),e("span",{staticClass:"u-role"},[t._v(t._s(t.userrole))])]),t._v(" "),t.inOut?e("button",{staticClass:"fr",on:{click:t.logout}},[t._v(t._s(t.inOutDes))]):t._e()]),t._v(" "),t.isManage?e("div",{staticClass:"manager"},[e("button",{staticClass:"umbtn",on:{click:t.userManage}},[t._v("用户管理"+t._s(t.result))]),t._v(" "),t.um?e("div",{staticClass:"usermg"},t._l(t.userList,function(s,a){return e("div",{key:a,staticClass:"user"},[e("span",[t._v(t._s(s.id))]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:s.role,expression:"item.role"}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(s,"role",e.target.multiple?a:a[0])}}},[e("option",{attrs:{disabled:"",value:""}},[t._v("请选择")]),t._v(" "),e("option",[t._v("root")]),t._v(" "),e("option",[t._v("manager")]),t._v(" "),e("option",[t._v("general")])]),t._v(" "),e("button",{on:{click:function(e){t.saverole(s.id,s.role)}}},[t._v("保存")]),t._v(" "),e("button",{staticClass:"delbtn",on:{click:function(e){t.deleteuser(s.id)}}},[t._v("delete")])])})):t._e()]):t._e(),t._v(" "),t.inOut?e("div",{staticClass:"postmanager"},[e("button",{staticClass:"umbtn",on:{click:t.postManage}},[t._v("个人帖子"+t._s(t.postres))]),t._v(" "),t.pm?e("div",{staticClass:"postmg"},t._l(t.postList,function(s,a){return e("div",{key:a,staticClass:"post"},[e("span",[t._v(t._s(s.title))]),e("button",{staticClass:"delbtn",on:{click:function(e){t.deletepost(s.timepoint)}}},[t._v("删除")]),t._v(" "),e("p",[t._v(t._s(s.content))])])})):t._e()]):t._e(),t._v(" "),t.inOut?t._e():e("LogReg",{on:{isUser:t.changeUser}})],1)},staticRenderFns:[]};var $=e("VU/8")(k,C,!1,function(t){e("EEX6")},null,null).exports;a.a.use(l.a);var x=new l.a({routes:[{path:"/",name:"Index",component:v},{path:"/writepost",name:"WritePost",component:g},{path:"/info",name:"Info",component:$}]}),j=e("mtWM"),z=e.n(j);a.a.prototype.$ajax=z.a,a.a.prototype.$myhost="/",a.a.config.productionTip=!1,new a.a({el:"#app",router:x,components:{App:r},template:"<App/>"})},WA1D:function(t,s){},c9G8:function(t,s){},llGz:function(t,s){},qgen:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.b1e2a0b9ed2a9a458919.js.map