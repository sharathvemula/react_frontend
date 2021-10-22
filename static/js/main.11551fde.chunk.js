(this["webpackJsonpreact-frontend"]=this["webpackJsonpreact-frontend"]||[]).push([[0],{15:function(e,t,n){"use strict";n.r(t);var s=n(2),a=n.n(s),c=n(8),r=n.n(c),i=(n(9),n(1)),l=n(3),o=n(4),d=n(6),u=n(5),h=n(0),g=new Set,p=[],b="";function m(e){var t=new Date(1e3*e);return t.toLocaleDateString("en-US")+" "+t.toLocaleTimeString("en-US")}var j=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={msg:[]},s.myRef=a.a.createRef(),s}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.myRef.current.scrollIntoView({behavior:"smooth"})}},{key:"componentDidUpdate",value:function(){this.myRef.current.scrollIntoView({behavior:"smooth"})}},{key:"update_msg",value:function(){this.setState({msg:p})}},{key:"null_msg",value:function(){this.setState({msg:[]})}},{key:"render",value:function(){return Object(h.jsxs)("div",{id:"chat",children:[Object(h.jsx)("div",{children:this.state.msg&&Array.from(this.state.msg).map((function(e){return Object(h.jsx)("div",{children:e})}))}),Object(h.jsx)("div",{ref:this.myRef,children:" "})]})}}]),n}(a.a.Component),O=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={cur_users:new Set},s}return Object(o.a)(n,[{key:"update_users",value:function(){this.setState({cur_users:g})}},{key:"render",value:function(){return Object(h.jsxs)("div",{id:"user_window",children:[Object(h.jsx)("h2",{children:"Online"}),Object(h.jsx)("ul",{children:Array.from(this.state.cur_users).sort().map((function(e){return Object(h.jsx)("li",{id:"users",children:e})}))})]})}}]),n}(a.a.Component),v=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={url:"",username:"",password:"",display:!0,message_token:"",streamToken:""},s.handleChange=s.handleChange.bind(Object(i.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(i.a)(s)),s.changedis=s.changedis.bind(Object(i.a)(s)),s.startStream=s.startStream.bind(Object(i.a)(s)),s}return Object(o.a)(n,[{key:"handleChange",value:function(e){"url"===e.target.name&&this.setState({url:e.target.value}),"username"===e.target.name&&this.setState({username:e.target.value}),"password"===e.target.name&&this.setState({password:e.target.value})}},{key:"startStream",value:function(e){console.log("URL"+e.state.url),console.log("MSG Token"+e.state.message_token),console.log("STR token"+e.state.streamToken);var t=e.state.streamToken,n=e.state.message_token;b=n;var s=new EventSource(sessionStorage.getItem("url")+"/stream/"+t);s.addEventListener("open",(function(t){e.setState({display:!1}),e.props.handle_connect()})),s.addEventListener("Disconnect",(function(a){console.log("COMING HERE: 103"),console.log("CLOSING STREAM: "+t),s.close(),g=new Set,e.props.parentcall(),t=null,n=null,e.state.messageToken=null,e.state.streamToken=null,e.props.thirdcall(),p=[],console.log("Disconnect reached"),e.setState({display:!0}),e.setState({url:""}),e.setState({username:""}),e.setState({password:""}),e.props.handle_disconnect()}),!1),s.addEventListener("Join",(function(t){var n=JSON.parse(t.data);console.log("User: "+n.user),g.add(n.user),e.props.parentcall(),p.push(m(n.created)+" JOIN: "+n.user),e.props.secondcall()}),!1),s.addEventListener("Message",(function(t){var n=JSON.parse(t.data);p.push(m(n.created)+" ("+n.user+") "+n.message),e.props.secondcall()}),!1),s.addEventListener("Part",(function(t){var n=JSON.parse(t.data);console.log("DELeting User: "+n.user),g.delete(n.user),e.props.parentcall(),p.push(m(n.created)+" PART: "+n.user),e.props.secondcall()}),!1),s.addEventListener("ServerStatus",(function(t){console.log("Coming here ServerStatus line 147");var n=JSON.parse(t.data);p.push(m(n.created)+" STATUS: "+n.status),e.props.secondcall()}),!1),s.addEventListener("Users",(function(t){g=new Set(JSON.parse(t.data).users),e.props.parentcall()}),!1),s.addEventListener("error",(function(t){2==t.target.readyState?(e.state.messageToken=null,e.state.streamToken=null,console.log("Disconnect reached at error"),e.setState({display:!0}),e.setState({url:""}),e.setState({username:""}),e.setState({password:""}),g=new Set,e.props.parentcall(),e.props.handle_disconnect()):(e.props.handle_disconnect(),console.log("Disconnected, retrying"))}),!1)}},{key:"start",value:function(e){console.log("MSG token:"),console.log(e.message_token),this.setState({display:!1})}},{key:"changedis",value:function(){console.log("Sharath"),this.setState({display:!1})}},{key:"handleSubmit",value:function(e){console.log(this.state.username);var t=this,n=new XMLHttpRequest,s=new FormData;s.append("password",this.state.password),s.append("username",this.state.username),sessionStorage.setItem("url",this.state.url),console.log("TEST"),n.open("POST",sessionStorage.getItem("url")+"/login"),n.onreadystatechange=function(){if(console.log("TEST1"),4==n.readyState)if(console.log("Ready State "+this.readyState),201===n.status){console.log("TEST2"),t.changedis(),t.state.password="",t.state.password="";var e=JSON.parse(this.responseText);t.state.message_token=e.message_token,console.log(e.message_token),t.state.streamToken=e.stream_token,t.startStream(t)}else 403===n.status?alert("Invalid username or password"):409===n.status?alert(t.state.username+" is already logged in"):alert(n.status+" failure to /login");else console.log("TEST3")},n.send(s),e.preventDefault()}},{key:"render",value:function(){return Object(h.jsx)("form",{onSubmit:this.handleSubmit,children:Object(h.jsx)("div",{id:"login-modal",class:this.state.display?"login":"hide",children:Object(h.jsxs)("div",{class:"content",children:[Object(h.jsx)("h2",{children:" Login "}),Object(h.jsx)("div",{children:Object(h.jsxs)("label",{children:["URL:",Object(h.jsx)("input",{name:"url",type:"text",value:this.state.url,onChange:this.handleChange})]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("label",{children:["username:",Object(h.jsx)("input",{name:"username",type:"text",value:this.state.username,onChange:this.handleChange})]})}),Object(h.jsx)("div",{children:Object(h.jsxs)("label",{children:["Password:",Object(h.jsx)("input",{name:"password",type:"password",value:this.state.password,onChange:this.handleChange})]})}),Object(h.jsx)("div",{children:Object(h.jsx)("label",{children:Object(h.jsx)("input",{type:"submit",value:"Submit"})})})]})})})}}]),n}(a.a.Component),S=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={message:"",display:!1},s.child1=a.a.createRef(),s.child2=a.a.createRef(),s.handleChange=s.handleChange.bind(Object(i.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(i.a)(s)),s.update_usersnlists=s.update_usersnlists.bind(Object(i.a)(s)),s.updatemsg=s.updatemsg.bind(Object(i.a)(s)),s.nullmsg=s.nullmsg.bind(Object(i.a)(s)),s.connect=s.connect.bind(Object(i.a)(s)),s.disconnect=s.disconnect.bind(Object(i.a)(s)),s}return Object(o.a)(n,[{key:"connect",value:function(){this.setState({display:!0})}},{key:"disconnect",value:function(){this.setState({display:!1})}},{key:"update_usersnlists",value:function(){this.child2.current&&this.child2.current.update_users()}},{key:"updatemsg",value:function(){this.child1.current&&this.child1.current.update_msg()}},{key:"nullmsg",value:function(){this.child1.current.null_msg()}},{key:"handleChange",value:function(e){"message-id"===e.target.name&&this.setState({message:e.target.value})}},{key:"handleSubmit",value:function(e){if(console.log(this.state.message),e.preventDefault(),""!=this.state.message){var t=new XMLHttpRequest,n=new FormData;n.append("message",this.state.message),t.open("POST",sessionStorage.getItem("url")+"/message"),t.setRequestHeader("Authorization","Bearer "+b),t.onreadystatechange=function(e){console.log("Entering here"),4==t.readyState&&403!=t.status&&null!=b&&(b=t.getResponseHeader("token"),console.log("Message Token"+b))},t.send(n),this.setState({message:""})}else e.preventDefault()}},{key:"render",value:function(){return Object(h.jsxs)("section",{id:"container",children:[Object(h.jsx)("h1",{id:"title",class:this.state.display?"connected":"disconnected",children:"CS291 Chat"}),Object(h.jsxs)("div",{id:"window",children:[Object(h.jsx)(j,{ref:this.child1}),Object(h.jsx)(O,{ref:this.child2})]}),Object(h.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(h.jsx)("div",{id:"message",children:Object(h.jsx)("label",{children:Object(h.jsx)("input",{name:"message-id",size:"175",type:"text",value:this.state.message,onChange:this.handleChange})})}),Object(h.jsx)("div",{children:Object(h.jsx)("label",{children:Object(h.jsx)("input",{type:"submit",value:"Submit"})})})]})]})}}]),n}(a.a.Component),f=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).handleCallback=function(){s.child.current&&s.child.current.update_usersnlists()},s.messageupdate=function(){s.child.current&&s.child.current.updatemsg()},s.messagenull=function(){s.child.current&&s.child.current.nullmsg()},s.handleconnect=function(){s.child.current&&s.child.current.connect()},s.handledisconnect=function(){s.child.current&&s.child.current.disconnect()},s.child=a.a.createRef(),s.handleCallback=s.handleCallback.bind(Object(i.a)(s)),s.messageupdate=s.messageupdate.bind(Object(i.a)(s)),s.messagenull=s.messagenull.bind(Object(i.a)(s)),s.handleconnect=s.handleconnect.bind(Object(i.a)(s)),s.handledisconnect=s.handledisconnect.bind(Object(i.a)(s)),s}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("section",{id:"container",children:Object(h.jsx)(S,{ref:this.child})}),Object(h.jsx)("div",{children:Object(h.jsx)(v,{parentcall:this.handleCallback,secondcall:this.messageupdate,thirdcall:this.messagenull,handle_connect:this.handleconnect,handle_disconnect:this.handledisconnect})})]})}}]),n}(a.a.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),s(e),a(e),c(e),r(e)}))};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(f,{})}),document.getElementById("root")),y()},9:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.11551fde.chunk.js.map