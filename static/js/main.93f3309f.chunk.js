(this.webpackJsonpquizzical=this.webpackJsonpquizzical||[]).push([[0],{41:function(e,t,n){e.exports=n(52)},52:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(33),c=n.n(o),i=n(19),l=n(16),s=n(57);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u=n(25),m=n(58),f=n(59),d=n(54),h=n(61),E=n(62),p=n(56),g=n(34),b=n(11),y=n(60),x=["easy","medium","hard"],v=[{category:"Science & Nature",type:"boolean",difficulty:"hard",question:"It was once believed that injecting shark cartilage into people would prevent them from contracting cancer.",correct_answer:"True",incorrect_answers:["False"]},{category:"Entertainment: Video Games",type:"boolean",difficulty:"hard",question:"The first &quot;Metal Gear&quot; game was released for the PlayStation 1.",correct_answer:"False",incorrect_answers:["True"]},{category:"Entertainment: Video Games",type:"boolean",difficulty:"hard",question:"In &quot;Portal 2&quot;, Cave Johnson started out Aperture Science as a shower curtain company.",correct_answer:"True",incorrect_answers:["False"]},{category:"Entertainment: Video Games",type:"boolean",difficulty:"hard",question:"In &quot;Metal Gear Solid 2&quot;, you will see through the eyes of Psycho Mantis if you go first person during his boss fight.",correct_answer:"True",incorrect_answers:["False"]},{category:"Science & Nature",type:"boolean",difficulty:"hard",question:"The value of one Calorie is different than the value of one calorie.",correct_answer:"True",incorrect_answers:["False"]},{category:"General Knowledge",type:"boolean",difficulty:"hard",question:"Stagecoach owned &quot;South West Trains&quot; before losing the rights to FirstGroup and MTR in March of 2017.",correct_answer:"True",incorrect_answers:["False"]},{category:"Science: Mathematics",type:"boolean",difficulty:"hard",question:"L&#039;H&ocirc;pital was the mathematician who created the homonymous rule that uses derivatives to evaluate limits with indeterminations.",correct_answer:"False",incorrect_answers:["True"]},{category:"Politics",type:"boolean",difficulty:"hard",question:"George Clinton, Vice President of the United States (1805-1812), is an ancestor of President Bill Clinton.",correct_answer:"False",incorrect_answers:["True"]},{category:"Mythology",type:"boolean",difficulty:"hard",question:"Janus was the Roman god of doorways and passageways.",correct_answer:"True",incorrect_answers:["False"]},{category:"Entertainment: Music",type:"boolean",difficulty:"hard",question:"The singer Billie Holiday was also known as &quot;Lady Day&quot;.",correct_answer:"True",incorrect_answers:["False"]}],C={error:null,isLoading:!1,answers:[],questions:[],currentQuestion:0},w={error:null,isLoading:!1,answers:Object(y.a)("False",10),questions:v,currentQuestion:v.length-1},S={difficulty:"medium",questionCount:10,previousQuestionCount:10},T=Object(b.a)(Object(b.a)({},C),S),O=Object(b.a)(Object(b.a)({},w),S),k=Object(m.a)(f.a),_=function(e){return x.indexOf(e)},j=function(e,t){var n=Object(u.a)(t,2),r=n[0],a=n[1],o={RESET_QUIZ_STATE:k(C),ANSWER_QUESTION:Object(d.a)({answers:Object(h.a)(a),currentQuestion:E.a}),INCREASE_DIFFICULTY:k({difficulty:x[_(e.difficulty)+1<x.length?_(e.difficulty)+1:0]}),DECREASE_DIFFICULTY:k({difficulty:x[(_(e.difficulty)>0?_(e.difficulty):x.length)-1]}),INCREASE_QUESTION_COUNT:k({questionCount:Math.min(e.questionCount+5,50),previousQuestionCount:e.questionCount}),DECREASE_QUESTION_COUNT:k({questionCount:Math.max(e.questionCount-5,5),previousQuestionCount:e.questionCount}),UPDATE_SETTINGS:Object(d.a)({settings:k(a)}),FETCH_QUESTIONS:k({isLoading:!0}),FETCH_QUESTIONS_ERROR:k({isLoading:!1,error:a}),FETCH_QUESTIONS_SUCCESS:k({isLoading:!1,error:null,questions:a})};return Object(p.a)(g.a,r,o)(e)},I=Object(r.createContext)({state:T,dispatch:function(){}}),q=function(e){var t=e.useMocks,n=void 0!==t&&t,o=e.children,c=Object(r.useReducer)(j,n?O:T),i=Object(u.a)(c,2),l=i[0],s=i[1];return a.a.createElement(I.Provider,{value:{state:l,dispatch:s}},o)},F={background:"#2c7ef8",primary:"#f3f9ff",secondary:"#3b4660",faded:"#92bbf8",grey:"#54565a",correct:"#0e8729",incorrect:"#bf0000"},L="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",U={fonts:{body:"'Rubik', ".concat(L),heading:"'Rubik', ".concat(L),monospace:"Menlo, monospace"},fontSizes:[12,14,16,20,24,32,42,56,72,96],fontWeights:{body:400,heading:500,light:300,regular:400,semi:500,bold:700}},z={buttons:{primary:{borderColor:"primary",borderStyle:"solid",borderWidth:3,backgroundColor:"primary",borderRadius:9001,boxShadow:"default",color:"background",cursor:"pointer",fontFamily:"body",fontSize:3,fontWeight:"semi",p:[3,5],transition:"background-color .4s, color .2s",width:"100%","&:hover":{backgroundColor:"background",color:"primary"}},questionCount:{cursor:"pointer",backgroundColor:"background",position:"relative",zIndex:1},transparent:{backgroundColor:"transparent",cursor:"pointer",m:0,p:0}},wrapper:{alignItems:"center",flex:1,flexDirection:"column",maxHeight:"100vh"}},N=Object(b.a)(Object(b.a)({breakpoints:["40em","52em","64em"],colors:F,shadows:{default:"0px 1px 1px rgba(0,0,0,0.2)",hover:"inset 0px 20px 20px rgba(0,0,0,0.1)"},space:[0,4,8,12,16,24,32,48,64]},U),z),R=n(40),W=n(1),A=function(e){var t=e.children,n=Object(R.a)(e,["children"]);return a.a.createElement(W.c,Object.assign({as:"footer",p:[3,3,5]},n,{sx:{borderColor:"faded",borderStyle:"solid",borderWidth:0,borderTopWidth:[0,0,2]}}),a.a.createElement(W.a,{sx:{alignSelf:"flex-end",flex:1,margin:"0 auto",maxWidth:["initial",420],position:"relative"}},t))},Q=function(e){var t=e.title,n=e.button,r=e.children;return a.a.createElement(W.c,{as:"header",sx:{alignItems:"stretch",borderColor:"faded",borderStyle:"solid",borderWidth:0,borderBottomWidth:[0,0,2],flexDirection:"column",justifyContent:"center",p:[3,3,5],position:"relative",textAlign:"center"}},a.a.createElement(W.c,{flex:1},a.a.createElement(W.a,{width:80}),a.a.createElement(W.a,{flex:4},a.a.createElement(W.d,{sx:{color:"primary",fontSize:[2,3],mb:2,textAlign:"center",textTransform:"uppercase"}},t)),a.a.createElement(W.a,{width:80},n)),a.a.createElement(W.a,{flex:1},r))},M=function(e){var t=e.html;return a.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})},D={"aria-hidden":!0,focusable:!1,"data-prefix":"fas","data-icon":"home",role:"img",xmlns:"http://www.w3.org/2000/svg"},B={home:a.a.createElement("svg",Object.assign({},D,{viewBox:"0 0 576 512"}),a.a.createElement("path",{fill:"currentColor",d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"})),settings:a.a.createElement("svg",Object.assign({},D,{viewBox:"0 0 640 512"}),a.a.createElement("path",{fill:"currentColor",d:"M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"}))},G=function(e){var t=e.icon,n=e.onClick;return a.a.createElement(W.b,{variant:"transparent",onClick:n,height:[18,24],width:[18,24]},B[t])},H=function(e){var t=e.children,n=e.current,r=e.total;return a.a.createElement(W.c,{flexDirection:"column",px:2},a.a.createElement(W.c,{sx:{backgroundColor:"faded",height:4,width:"100%"}},a.a.createElement(W.a,{sx:{height:4,backgroundColor:"primary"},width:n/r})),a.a.createElement(W.e,{alignSelf:"center",fontFamily:"body",fontSize:0,fontWeight:"semi",mt:2,textAlign:"right",color:"primary"},t))},P=function(e){var t=e.color,n=void 0===t?F.primary:t;return a.a.createElement("path",{d:"M60.2849 27.0451L34.6712 52.9548L23.7151 42.0523",stroke:n,strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})},Y=function(e){var t=e.color,n=void 0===t?F.primary:t;return a.a.createElement(a.a.Fragment,null,a.a.createElement("path",{d:"M26.2461 24.4783L57.7537 55.5214",stroke:n,strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),a.a.createElement("path",{d:"M26.2461 55.5215L57.7537 24.4783",stroke:n,strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}))},V=n(22),Z=n(5),J=n(17);function K(){var e=Object(V.a)(["\n      stroke: ",";\n      stroke-dasharray: "," ",";\n      stroke-dashoffset: ",";\n      animation: "," 0.25s ease-in-out;\n      stroke-width: ",";\n      fill: transparent;\n    "]);return K=function(){return e},e}function X(){var e=Object(V.a)(["\n    from {\n      stroke-dashoffset: ",";\n    }\n    to {\n      stroke-dashoffset: ",";\n    }\n  "]);return X=function(){return e},e}var $=a.a.memo((function(e){var t=e.count,n=void 0===t?10:t,r=e.previousCount,o=void 0===r?10:r,c=e.total,i=void 0===c?10:c,l=e.thickness,s=void 0===l?4:l,u=e.spinner,m=void 0!==u&&u,f=n/i,d=o/i,h=50-2*s,E=2*h*Math.PI,p=E-f*E,g=E-d*E,b=Object(Z.d)(X(),g,p),y=Object(J.default)("circle")(K(),F.primary,E,E,p,b,s);return a.a.createElement("svg",{viewBox:"0 0 ".concat(100," ").concat(100),style:{transform:"rotate(-180deg)"}},a.a.createElement("defs",null,a.a.createElement("linearGradient",{id:"spinner",x1:"0%",y1:"0%",x2:"0%",y2:"100%"},a.a.createElement("stop",{offset:"0%",stopColor:"rgba(255,255,255,0)"}),a.a.createElement("stop",{offset:"100%",stopColor:"rgba(255,255,255,1)"}))),a.a.createElement("circle",{stroke:m?"url(#spinner)":F.faded,strokeDasharray:"".concat(E," ").concat(E),strokeWidth:s,fill:"transparent",r:h,cx:"50%",cy:"50%"}),!m&&a.a.createElement(y,{r:h,cx:"50%",cy:"50%"}))})),ee=function(e){var t=e.children;return a.a.createElement(W.c,{sx:{alignItems:"center",bottom:0,flex:1,justifyContent:"center",left:0,maxHeight:"100vh",position:"absolute",right:0,top:0}},a.a.createElement(W.c,{sx:{borderColor:"faded",borderStyle:"solid",borderWidth:[0,0,3],flex:1,flexDirection:"column",height:"100%",m:"auto",mx:[0,0,2],maxHeight:1024,maxWidth:960,minHeight:568,minWidth:320,position:"relative"}},t))};function te(){var e=Object(V.a)(["\n  100% {\n    transform: rotate(360deg);\n   }\n"]);return te=function(){return e},e}function ne(){var e=Object(V.a)(["\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n   }\n"]);return ne=function(){return e},e}var re=Object(Z.d)(ne()),ae=Object(Z.d)(te()),oe=function(){return a.a.createElement(W.c,{sx:{position:"absolute",top:0,bottom:0,left:0,right:0,alignItems:"center",justifyContent:"center",zIndex:99,animation:"".concat(re," 0.25s ease-in-out")}},a.a.createElement(W.a,{sx:{height:140,width:140,animation:"".concat(ae," 1s infinite linear"),position:"relative"}},a.a.createElement($,{spinner:!0})))},ce={cursor:"pointer",mx:2,p:0,position:"relative",top:"-2%"},ie=function(){var e=Object(r.useContext)(I),t=e.state,n=e.dispatch,o=t.difficulty;return a.a.createElement(W.c,{alignItems:"center",justifyContent:"center"},a.a.createElement(W.b,{onClick:function(){return n(["DECREASE_DIFFICULTY"])},sx:ce,variant:"transparent"},a.a.createElement(W.e,{fontSize:0},"\u25c0")),a.a.createElement(W.e,{sx:{color:"primary",fontFamily:"body",fontSize:3,fontWeight:"bold",m:0,p:0,textAlign:"center",textTransform:"uppercase",width:"5rem"}},o),a.a.createElement(W.b,{onClick:function(){return n(["INCREASE_DIFFICULTY"])},sx:ce,variant:"transparent"},a.a.createElement(W.e,{fontSize:0},"\u25b6")))},le=function(){var e=Object(r.useContext)(I),t=e.state,n=e.dispatch,o=t.questionCount,c=t.previousQuestionCount;return a.a.createElement(W.c,{justifyContent:"center",alignItems:"center",my:2},a.a.createElement(W.b,{variant:"questionCount",onClick:function(){return n(["DECREASE_QUESTION_COUNT"])},sx:{height:40,width:40,right:-140/4.5}},a.a.createElement(W.e,{fontWeight:"bold",fontSize:3},"-")),a.a.createElement(W.a,{sx:{position:"relative",height:140,width:140}},a.a.createElement(W.a,{flex:1},a.a.createElement($,{count:o,previousCount:c,total:50})),a.a.createElement(W.c,{sx:{alignItems:"center",bottom:0,flex:1,justifyContent:"center",left:0,position:"absolute",right:0,top:0}},a.a.createElement(W.e,{fontFamily:"body",fontSize:6,color:"primary"},o))),a.a.createElement(W.b,{onClick:function(){return n(["INCREASE_QUESTION_COUNT"])},variant:"questionCount",sx:{height:40,width:40,left:-140/4.5}},a.a.createElement(W.e,{fontWeight:"bold",fontSize:3},"+")))},se={color:"primary",fontWeight:"bold",mb:-2,textAlign:"center",textShadow:"default"},ue=function(){var e=Object(r.useContext)(I),t=e.state,n=e.dispatch;t.questions.length&&n(["RESET_QUIZ_STATE"]);var o=t.questionCount,c=t.difficulty;return a.a.createElement(a.a.Fragment,null,a.a.createElement(W.c,{height:150,justifyContent:"center"},a.a.createElement(W.a,{sx:{alignSelf:"flex-end",position:"relative",top:["initial","50%"],zoom:[1,1.4,1.8]}},a.a.createElement(W.d,{sx:se,fontSize:5},"LET'S GET"),a.a.createElement(W.d,{sx:se,fontSize:6},"QUiZZ!CAL"))),a.a.createElement(W.c,{sx:{alignItems:"center",flex:1,flexDirection:"column",justifyContent:"center",zoom:[1,1.25,1.5]}},a.a.createElement(W.c,{flex:1,alignItems:"flex-end"},a.a.createElement(W.e,{color:"primary",fontFamily:"body",fontWeight:"bold"},"QUESTION SETTINGS")),a.a.createElement(le,null),a.a.createElement(W.a,{flex:1},a.a.createElement(ie,null)),a.a.createElement(W.e,{sx:{fontFamily:"body",margin:"auto",fontSize:2,position:"absolute",bottom:"25%",textAlign:"center",color:"primary"}},"You will be presented with ",o,a.a.createElement("br",null),c.toUpperCase()," True or False questions")),a.a.createElement(A,{height:150},a.a.createElement(i.b,{to:"/quiz"},a.a.createElement(W.b,{alignSelf:"flex-end"},"PLAY!"))))},me=function(e){var t=e.children;return a.a.createElement("svg",{viewBox:"0 0 84 84",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.a.createElement("g",{filter:"url(#filter0_d)"},a.a.createElement("circle",{cx:"42",cy:"40",r:"38",stroke:F.primary,strokeWidth:"4"})),t,a.a.createElement("defs",null,a.a.createElement("filter",{id:"filter0_d",x:"0",y:"0",width:"84",height:"84",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB"},a.a.createElement("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),a.a.createElement("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),a.a.createElement("feOffset",{dy:"2"}),a.a.createElement("feGaussianBlur",{stdDeviation:"1"}),a.a.createElement("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"}),a.a.createElement("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),a.a.createElement("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"}))))},fe=function(){return a.a.createElement(me,null,a.a.createElement(P,null))},de=function(){return a.a.createElement(me,null,a.a.createElement(Y,null))},he=function(){var e=Object(r.useContext)(I),t=e.state,n=e.dispatch,o=t.currentQuestion,c=t.questions,i=c[o],s=i.category,u=i.question,m=c.length,f=Object(l.f)();return a.a.createElement(W.c,{flexDirection:"column",flex:1},a.a.createElement(Q,{title:s,button:a.a.createElement(G,{icon:"home",onClick:function(){return f.push("/")}})},a.a.createElement(H,{current:o,total:m,children:"".concat(o,"/").concat(m)})),a.a.createElement(W.a,{flex:1,p:[2,8]},a.a.createElement(W.c,{flex:1,m:4},a.a.createElement(W.e,{sx:{fontFamily:"body",color:"primary",fontSize:[4,5,6],hyphens:"auto",lineHeight:"130%",overflowWrap:"break-word"}},a.a.createElement(M,{html:u})))),a.a.createElement(A,null,a.a.createElement(W.c,{justifyContent:"space-between"},a.a.createElement(W.b,{variant:"transparent",onClick:function(){return n(["ANSWER_QUESTION","True"])}},a.a.createElement(W.a,{width:[48,80]},a.a.createElement(fe,null))),a.a.createElement(W.b,{variant:"transparent",onClick:function(){return n(["ANSWER_QUESTION","False"])}},a.a.createElement(W.a,{width:[48,80]},a.a.createElement(de,null))))))},Ee=n(38),pe=function(e){var t=e.question,n=e.is_correct,r=e.given_answer,o=e.correct_answer;return a.a.createElement(W.c,{p:3,m:"auto",width:"100%"},a.a.createElement(W.a,{width:32,mr:3,alignSelf:"center"},n?a.a.createElement(fe,null):a.a.createElement(de,null)),a.a.createElement(W.c,{flex:1,flexDirection:"column",justifyContent:"space-between",my:3},a.a.createElement(W.a,{flex:1},a.a.createElement(W.e,{fontSize:4,fontFamily:"body",color:"primary"},a.a.createElement(M,{html:t}))),a.a.createElement(W.a,{mt:1},a.a.createElement(W.e,{sx:{color:"primary",fontFamily:"body",fontSize:0,textTransform:"uppercase"}},n?"Your":"Correct"," Answer:"," ",a.a.createElement("strong",null,n?r:o)))))},ge=n(55),be=function(e,t){return Object(b.a)(Object(b.a)({},e),{},{given_answer:t,is_correct:e.correct_answer===t})},ye=function(){var e=Object(r.useContext)(I),t=e.state,n=t.questions,o=t.answers,c=e.dispatch,i=function(e,t){return Object(ge.a)(be,e,t)}(n,o),s=i.filter((function(e){return e.is_correct})).length,u=n.length,m=Object(l.f)();return a.a.createElement(a.a.Fragment,null,a.a.createElement(Q,{title:s/u>=.5?"WELL DONE!":"BETTER LUCK NEXT TIME!",button:a.a.createElement(G,{icon:"home",onClick:function(){return m.push("/")}})},a.a.createElement(H,{current:s,total:u},a.a.createElement(a.a.Fragment,null,"YOU ANSWERED"," ",a.a.createElement("strong",null,s,"/",u)," ","QUESTIONS CORRECTLY"))),a.a.createElement(W.c,{flexDirection:"column",overflowY:"scroll",px:[4,4,8],sx:{position:"relative"}},a.a.createElement(ve,null),a.a.createElement(W.c,{flexDirection:"column",overflowY:"scroll",py:[2,2,6]},i.map((function(e,t){return a.a.createElement(pe,Object.assign({key:t},e))}))),a.a.createElement(ve,{flip:!0})),a.a.createElement(A,null,a.a.createElement(W.b,{onClick:function(){return c(["RESET_QUIZ_STATE"])}},"Play Again?")))},xe=function(e,t){var n=Object(u.a)(Ee(e).rgb,3),r=n[0],a=n[1],o=n[2];return"rgba(".concat(r,",").concat(a,",").concat(o,",").concat(t,")")},ve=function(e){var t=e.flip;return a.a.createElement(W.a,{sx:{background:"linear-gradient(".concat(t?180:0,"deg, ").concat(xe(F.background,0)," 0%, ").concat(xe(F.background,1)," 100%)"),top:t?"initial":0,bottom:t?0:"initial",left:0,right:0,height:[48,48,80],position:"absolute",flex:1,width:"100%"}})},Ce=function(){var e=Object(r.useContext)(I),t=e.state,n=e.dispatch,o=t.questionCount,c=t.difficulty,i=t.currentQuestion,l=t.questions;return Object(r.useEffect)((function(){l.length||fetch("https://opentdb.com/api.php?amount=".concat(o,"&difficulty=").concat(c,"&type=boolean")).then((function(e){return e.json()})).then((function(e){return n(["FETCH_QUESTIONS_SUCCESS",e.results])})).catch((function(e){return n(["FETCH_QUESTIONS_ERROR",e])}))})),l.length?i===l.length?a.a.createElement(ye,null):a.a.createElement(he,null):a.a.createElement(oe,null)};c.a.render(a.a.createElement(s.a,{theme:N},a.a.createElement(q,null,a.a.createElement(ee,null,a.a.createElement(i.a,null,a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/quiz"},a.a.createElement(Ce,null)),a.a.createElement(l.a,{path:"/"},a.a.createElement(ue,null))))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.93f3309f.chunk.js.map