(this["webpackJsonptwilio-test"]=this["webpackJsonptwilio-test"]||[]).push([[0],{12:function(e,t,a){e.exports=a(20)},17:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(4),l=a.n(s),o=(a(3),a(17),a(5)),c=a.n(o),i=a(6),m=a(7),u=a(8),d=a(10),h=a(9),p=a(1),f=a(11),b=(a(19),{send_sms:function(e){return window.fetch("/web-sms",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return 200===e.status?e.json():null})).then((function(e){if(!e||e.error)throw console.log("API Error: ",{data:e}),Error("API Error");return e}))}}),g=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(i.a)({},n,r))},a.state={disabled:!1,succeeded:!1,processing:!1,failed:!1,error:null},a.handleSubmit=a.handleSubmit.bind(Object(p.a)(a)),a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"handleSubmit",value:function(e){var t=this;return c.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:e.preventDefault(),this.setState({processing:!0}),b.send_sms({name:this.state.sender_name,number:this.state.sender_number,message:this.state.sender_message}).then((function(e){e.error?(t.setState({error:"Sending failed: ".concat(e.error.message),disabled:!1,proessing:!1}),console.log("[error",e.error)):(t.setState({processing:!1,succeeded:!0,error:""}),console.log("Success!"))})).catch((function(e){t.setState({error:e.message,failed:!0,processing:!1}),console.log(e)}));case 3:case"end":return a.stop()}}),null,this)}},{key:"renderSuccess",value:function(){return r.a.createElement("div",{className:"sr-field-success message"},r.a.createElement("h3",null,"Message sent!"),r.a.createElement("p",null,"Refresh to send another."))}},{key:"renderForm",value:function(){return r.a.createElement("div",{className:"full-container vertical-center"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Just like using your phone..."),r.a.createElement("h4",null,"...except a web app..."),r.a.createElement("h5",null,"...and also dumber."),r.a.createElement("h4",null,"Enter your details and message below."),r.a.createElement("div",{className:"sr-combo-inputs",style:{base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},r.a.createElement("div",{className:"sr-combo-inputs-row"},r.a.createElement("input",{type:"text",name:"sender_name",placeholder:"Name - This will tell Steve who's texting.",autoComplete:"cardholder",className:"sr-input",onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"sender_number",placeholder:"Your number - Format like +12244878383.",autoComplete:"cardholder",className:"sr-input",onChange:this.handleChange}),r.a.createElement("input",{type:"text",name:"sender_message",placeholder:"Your message. 140 character max.",autoComplete:"cardholder",className:"sr-input",onChange:this.handleChange}),r.a.createElement("div",{className:!0},this.state.failed?"Sending message failed. Try again.":null)),!this.state.succeeded&&r.a.createElement("button",{className:"btn",disabled:this.state.disabled},this.state.failed?"Try again.":"Send"))))}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.succeeded&&this.renderSuccess(),!this.state.succeeded&&this.renderForm())}}]),t}(n.Component),E=function(e){return r.a.createElement("span",{className:"emoji",role:"img","aria-label":e.label?e.label:"","aria-hidden":e.label?"false":"true"},e.symbol)};var v=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",null,"An app to send an ",r.a.createElement(E,{symbol:"\u260e\ufe0f"}),"SMS",r.a.createElement(E,{symbol:"\u260e\ufe0f"})," to ",r.a.createElement("a",{href:"http://www.stevehind.me",className:""},"Steve"),".")),r.a.createElement("div",{className:"App-body"},r.a.createElement(g,null)),r.a.createElement("footer",{className:"App-footer"},r.a.createElement("p",null,"\xa9Steve Hind, 2020.")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},3:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.a9eddd0e.chunk.js.map