(this["webpackJsonpopp-rec"]=this["webpackJsonpopp-rec"]||[]).push([[0],{12:function(e,t,a){e.exports=a(21)},17:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(6),s=a.n(o),c=(a(17),a(4)),i=a.n(c),l=a(7),m=a(3),u=a(2),d=a(8),h=a(9),p=a(1),b=a(11),f=a(10),v=(a(19),a(20)),g=function(e){Object(b.a)(a,e);var t=Object(f.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={form:{epId:{value:""}},response:""},n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n.handleChange=n.handleChange.bind(Object(p.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(e){var t=e.target.name,a=e.target.value;this.setState({form:Object(u.a)(Object(u.a)({},this.state.form),{},Object(m.a)({},t,Object(u.a)(Object(u.a)({},this.state.form[t]),{},{value:a})))})}},{key:"handleSubmit",value:function(){var e=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(),e.next=4,v("https://opp-rec.herokuapp.com/getPerson",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify({PersonID:this.state.form.epId.value})});case 4:return a=e.sent,e.next=7,a.json();case 7:a=e.sent,this.setState({response:JSON.stringify(a)});case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"OPP Recommender ",r.a.createElement("span",{className:"badge badge-success"},"By In-House Dev Team")),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"EPID"},"EP Code"),r.a.createElement("input",{onChange:this.handleChange,name:"epId",type:"number",className:"form-control",id:"epId"}),r.a.createElement("small",{id:"letrapeque",className:"form-text text-muted"},"Needed to load info")),r.a.createElement("button",{type:"submit",className:"btn btn-primary"}," Submit ")),r.a.createElement("div",{className:"container",style:{padding:"5%"}},r.a.createElement("p",null,this.state.response)))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.10cbcbdf.chunk.js.map