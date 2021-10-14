(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1695ebce"],{"0418":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container px-5 pt-24 pb-1 mx-auto"},[n("div",{staticClass:"flex flex-col w-full mb-20 text-center"},[n("h1",{staticClass:"mb-4 text-6xl font-bold text-white sm:text-6xl title-font"},[t._v(t._s(t.title))]),n("p",{staticClass:"mx-auto mt-2 text-lg leading-relaxed text-gray-400 lg:w-2/3"},[t._v(t._s(t.description))])])])},r=[],s={props:{title:{type:String,required:!0,default:"Page Title"},description:{type:String,required:!0,default:"Page Description"}}},a=s,u=n("2877"),o=Object(u["a"])(a,i,r,!1,null,null,null);e["a"]=o.exports},"0bd2":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header",{attrs:{title:"Über mich",description:"Ich stelle mich vor..."}}),n("Vorstellung"),n("Skills")],1)},r=[],s=n("0418"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"text-gray-400 bg-black body-font"},[n("div",{staticClass:"container flex flex-col items-center mx-auto md:flex-row"},[n("div",{staticClass:"flex flex-col items-center m-4 mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0"},[n("p",{staticClass:"mb-8 leading-relaxed"},[t._v(" Hallo! Ich bin "),n("b",[t._v("Yao Kaiser")]),t._v(", "+t._s(t.age)+" Jahre alt und mache gerade eine Ausbildung zum Software-Entwickler. Ich interessiere mich für jegliche Art von Frontend-Anwendungen, aber auch serverseitige Applikationen. Ich bin neugierig und offen neues zu lernen. Parallel dazu absolviere ich die Berufsmatura an der BBW Winterthur. "),n("br"),t._v("Aufgewachsen bin ich in Oberglatt ZH, heute lebe ich mit meiner Familie in Bülach. Ich bin mir noch unsicher, was ich hier noch dazu schreiben kann. Wenn Du Ideen hast, kannst Du mich gerne kontaktieren. "),n("br"),t._v("Sonst wünsche ich Dir noch viel Spass auf meiner Website."),n("br")])]),t._m(0)])])},u=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"w-5/6 lg:max-w-lg lg:w-full md:w-1/2"},[i("img",{staticClass:"object-cover object-center rounded",attrs:{alt:"hero",src:n("5900")}})])}],o=n("5a0c"),l=n.n(o),c=l()("6 June 2004"),f=Math.abs(new Date(Date.now()-c.toDate().getTime()).getUTCFullYear()-1970),h={name:"Vorstellung",created:function(){this.age=f}},d=h,m=n("2877"),g=Object(m["a"])(d,a,u,!1,null,null,null),$=g.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"text-gray-400 bg-black body-font"},[n("div",{staticClass:"container px-5 py-24 mx-auto"},[n("div",{staticClass:"mb-20 text-center"},[n("h1",{staticClass:"mb-4 text-2xl font-medium text-center text-white sm:text-3xl title-font"},[t._v(" 💻Erfahrungen ")]),n("p",{staticClass:"mx-auto text-base leading-relaxed xl:w-2/4 lg:w-3/4"},[t._v(" Ich benutze vielfältige Tools für meine Projekte, hier habe ich einige davon aufgelistet. ")]),n("br"),t._l(t.skills,(function(t){return n("div",{key:t.id,staticClass:"flex flex-wrap -mx-2 lg:w-4/5 sm:mx-auto sm:mb-2"},[n("SkillCard",{attrs:{name:t.name,icon:t.icon,stars:t.stars,starsArray:t.starsArray}})],1)})),n("router-link",{staticClass:"flex px-8 py-2 mx-auto mt-16 text-lg text-white bg-purple-500 border-0 rounded focus:outline-none hover:bg-purple-600",attrs:{to:"/github",tag:"button"}},[t._v(" Mein CV herunterladen ")])],2)])])},p=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full p-2 px-2 my-2 overflow-hidden border border-gray-800 rounded-lg hover:bg-indigo-500 hover:bg-opacity-10 hover:shadow-lg hover:border-indigo-500"},[n("h2",{staticClass:"font-medium text-white title-font"},[n("i",{class:t.icon}),t._v(" "+t._s(t.name)+" ")])])},x=[],w={props:{name:{type:String,required:!0},icon:{type:String,required:!0,default:"fas fa-code"}}},y=w,_=Object(m["a"])(y,v,x,!1,null,null,null),S=_.exports,M=n("f5cb"),D=n.n(M),k=[{id:D()("skill-"),name:"Vue.js",icon:"fab fa-vuejs",stars:4},{id:D()("skill-"),name:"JavaScript",icon:"fab fa-js",stars:4},{id:D()("skill-"),name:"React.js",icon:"fab fa-react",stars:2},{id:D()("skill-"),name:"NPM",icon:"fab fa-npm",stars:4},{id:D()("skill-"),name:"Java",icon:"fab fa-java",stars:2},{id:D()("skill-"),name:"Bootstrap",icon:"fab fa-bootstrap",stars:3},{id:D()("skill-"),name:"Tailwind CSS",stars:3},{id:D()("skill-"),name:"Python",icon:"fab fa-python",stars:4},{id:D()("skill-"),name:"HTML 5",icon:"fab fa-html5",stars:5}],C=k,O={name:"Skills",data:function(){return{skills:C}},components:{SkillCard:S}},j=O,T=Object(m["a"])(j,b,p,!1,null,null,null),H=T.exports,Y={name:"About",title:"Über mich",components:{Header:s["a"],Vorstellung:$,Skills:H}},A=Y,I=Object(m["a"])(A,i,r,!1,null,"4f66930f",null);e["default"]=I.exports},5900:function(t,e,n){t.exports=n.p+"img/Yao_Full.5c96f6bb.jpg"},"5a0c":function(t,e,n){!function(e,n){t.exports=n()}(0,(function(){"use strict";var t=1e3,e=6e4,n=36e5,i="millisecond",r="second",s="minute",a="hour",u="day",o="week",l="month",c="quarter",f="year",h="date",d="Invalid Date",m=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,g=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},b=function(t,e,n){var i=String(t);return!i||i.length>=e?t:""+Array(e+1-i.length).join(n)+t},p={s:b,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),i=Math.floor(n/60),r=n%60;return(e<=0?"+":"-")+b(i,2,"0")+":"+b(r,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var i=12*(n.year()-e.year())+(n.month()-e.month()),r=e.clone().add(i,l),s=n-r<0,a=e.clone().add(i+(s?-1:1),l);return+(-(i+(n-r)/(s?r-a:a-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:f,w:o,d:u,D:h,h:a,m:s,s:r,ms:i,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},v="en",x={};x[v]=$;var w=function(t){return t instanceof M},y=function(t,e,n){var i;if(!t)return v;if("string"==typeof t)x[t]&&(i=t),e&&(x[t]=e,i=t);else{var r=t.name;x[r]=t,i=r}return!n&&i&&(v=i),i||!n&&v},_=function(t,e){if(w(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new M(n)},S=p;S.l=y,S.i=w,S.w=function(t,e){return _(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var M=function(){function $(t){this.$L=y(t.locale,null,!0),this.parse(t)}var b=$.prototype;return b.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(S.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var i=e.match(m);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},b.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},b.$utils=function(){return S},b.isValid=function(){return!(this.$d.toString()===d)},b.isSame=function(t,e){var n=_(t);return this.startOf(e)<=n&&n<=this.endOf(e)},b.isAfter=function(t,e){return _(t)<this.startOf(e)},b.isBefore=function(t,e){return this.endOf(e)<_(t)},b.$g=function(t,e,n){return S.u(t)?this[e]:this.set(n,t)},b.unix=function(){return Math.floor(this.valueOf()/1e3)},b.valueOf=function(){return this.$d.getTime()},b.startOf=function(t,e){var n=this,i=!!S.u(e)||e,c=S.p(t),d=function(t,e){var r=S.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return i?r:r.endOf(u)},m=function(t,e){return S.w(n.toDate()[t].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},g=this.$W,$=this.$M,b=this.$D,p="set"+(this.$u?"UTC":"");switch(c){case f:return i?d(1,0):d(31,11);case l:return i?d(1,$):d(0,$+1);case o:var v=this.$locale().weekStart||0,x=(g<v?g+7:g)-v;return d(i?b-x:b+(6-x),$);case u:case h:return m(p+"Hours",0);case a:return m(p+"Minutes",1);case s:return m(p+"Seconds",2);case r:return m(p+"Milliseconds",3);default:return this.clone()}},b.endOf=function(t){return this.startOf(t,!1)},b.$set=function(t,e){var n,o=S.p(t),c="set"+(this.$u?"UTC":""),d=(n={},n[u]=c+"Date",n[h]=c+"Date",n[l]=c+"Month",n[f]=c+"FullYear",n[a]=c+"Hours",n[s]=c+"Minutes",n[r]=c+"Seconds",n[i]=c+"Milliseconds",n)[o],m=o===u?this.$D+(e-this.$W):e;if(o===l||o===f){var g=this.clone().set(h,1);g.$d[d](m),g.init(),this.$d=g.set(h,Math.min(this.$D,g.daysInMonth())).$d}else d&&this.$d[d](m);return this.init(),this},b.set=function(t,e){return this.clone().$set(t,e)},b.get=function(t){return this[S.p(t)]()},b.add=function(i,c){var h,d=this;i=Number(i);var m=S.p(c),g=function(t){var e=_(d);return S.w(e.date(e.date()+Math.round(t*i)),d)};if(m===l)return this.set(l,this.$M+i);if(m===f)return this.set(f,this.$y+i);if(m===u)return g(1);if(m===o)return g(7);var $=(h={},h[s]=e,h[a]=n,h[r]=t,h)[m]||1,b=this.$d.getTime()+i*$;return S.w(b,this)},b.subtract=function(t,e){return this.add(-1*t,e)},b.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var i=t||"YYYY-MM-DDTHH:mm:ssZ",r=S.z(this),s=this.$H,a=this.$m,u=this.$M,o=n.weekdays,l=n.months,c=function(t,n,r,s){return t&&(t[n]||t(e,i))||r[n].substr(0,s)},f=function(t){return S.s(s%12||12,t,"0")},h=n.meridiem||function(t,e,n){var i=t<12?"AM":"PM";return n?i.toLowerCase():i},m={YY:String(this.$y).slice(-2),YYYY:this.$y,M:u+1,MM:S.s(u+1,2,"0"),MMM:c(n.monthsShort,u,l,3),MMMM:c(l,u),D:this.$D,DD:S.s(this.$D,2,"0"),d:String(this.$W),dd:c(n.weekdaysMin,this.$W,o,2),ddd:c(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:S.s(s,2,"0"),h:f(1),hh:f(2),a:h(s,a,!0),A:h(s,a,!1),m:String(a),mm:S.s(a,2,"0"),s:String(this.$s),ss:S.s(this.$s,2,"0"),SSS:S.s(this.$ms,3,"0"),Z:r};return i.replace(g,(function(t,e){return e||m[t]||r.replace(":","")}))},b.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},b.diff=function(i,h,d){var m,g=S.p(h),$=_(i),b=($.utcOffset()-this.utcOffset())*e,p=this-$,v=S.m(this,$);return v=(m={},m[f]=v/12,m[l]=v,m[c]=v/3,m[o]=(p-b)/6048e5,m[u]=(p-b)/864e5,m[a]=p/n,m[s]=p/e,m[r]=p/t,m)[g]||p,d?v:S.a(v)},b.daysInMonth=function(){return this.endOf(l).$D},b.$locale=function(){return x[this.$L]},b.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),i=y(t,e,!0);return i&&(n.$L=i),n},b.clone=function(){return S.w(this.$d,this)},b.toDate=function(){return new Date(this.valueOf())},b.toJSON=function(){return this.isValid()?this.toISOString():null},b.toISOString=function(){return this.$d.toISOString()},b.toString=function(){return this.$d.toUTCString()},$}(),D=M.prototype;return _.prototype=D,[["$ms",i],["$s",r],["$m",s],["$H",a],["$W",u],["$M",l],["$y",f],["$D",h]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),_.extend=function(t,e){return t.$i||(t(e,M,_),t.$i=!0),_},_.locale=y,_.isDayjs=w,_.unix=function(t){return _(1e3*t)},_.en=x[v],_.Ls=x,_.p={},_}))}}]);
//# sourceMappingURL=chunk-1695ebce.9fc997fb.js.map