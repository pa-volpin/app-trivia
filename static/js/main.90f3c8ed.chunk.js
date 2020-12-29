(this["webpackJsonptrivia-test"]=this["webpackJsonptrivia-test"]||[]).push([[0],{110:function(e,t,a){e.exports=a(216)},119:function(e,t,a){},120:function(e,t,a){},127:function(e,t){},129:function(e,t){},163:function(e,t){},164:function(e,t){},207:function(e,t,a){},208:function(e,t,a){},209:function(e,t,a){},210:function(e,t,a){},211:function(e,t,a){},212:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){},216:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(47),i=a.n(c),o=a(11),s=a(8),l=(a(119),a(5)),u=a(6),m=a(9),d=a(7),p=a(3),h=a(10),g=a(27),b=(a(120),a(14)),v=function(e){return{type:"LOGIN",name:e.name,gravatarEmail:e.gravatarEmail}},E=a(107),f=a.n(E),y=function(e){var t=f()(e);return"".concat("https://www.gravatar.com/avatar/").concat(t)},k=function(e){return{type:"ADD_TOKEN",tokenObj:e}};var O=function(){return function(e){return fetch("https://opentdb.com/api_token.php?command=request").then((function(e){return e.json()})).then((function(e){return localStorage.setItem("token",e.token),{token:e.token,date:new Date}})).catch((function(){return localStorage.setItem("token","ERROR_TOKEN"),{token:"ERROR_TOKEN",date:"ERROR_TOKEN"}})).then((function(t){return e(k(t))})).catch((function(t){return e(k(t))}))}},N=function(e){return{type:"ADD_TIMER",seconds:e}},j=function(e){return{type:"UPDATE_AUTHENTICATION",authenticationStatus:e}},S=a(33),R=a.n(S),w=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={status:"closed",selected:""},e.handleClick=e.handleClick.bind(Object(p.a)(e)),e.logout=e.logout.bind(Object(p.a)(e)),e.handleState=e.handleState.bind(Object(p.a)(e)),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.handleState()}},{key:"handleState",value:function(){var e=this.props.match.path;this.setState({selected:e})}},{key:"logout",value:function(){var e=this.props,t=e.history;(0,e.updateAuthentication)(!1),localStorage.setItem("authentified",!1),localStorage.clear("state"),t.push("/")}},{key:"handleClick",value:function(e){var t=e.target,a=t.checked,n=t.type,r=t.name;if("checkbox"===n){var c=a?"open":"closed";this.setState({status:c})}else{var i=this.props.history;"/"===r&&this.logout(),this.setState({selected:r},(function(){return i.push(r)}))}}},{key:"render",value:function(){var e=this,t=this.state,a=t.status,n=t.selected,c=[{content:"Game",path:"/game"},{content:"Ranking",path:"/ranking"},{content:"Settings",path:"/settings"},{content:"Logout",path:"/"}];return this.props.authenticationStatus||(c=[{content:"Login",path:"/"},{content:"Settings",path:"/settings"}]),r.a.createElement("section",null,r.a.createElement("nav",{role:"navigation",className:"menu ".concat(a)},r.a.createElement("div",{className:"logo-area"},r.a.createElement("img",{src:R.a,alt:"trivia logo"})),r.a.createElement("input",{type:"checkbox",id:"toggle",onClick:this.handleClick}),r.a.createElement("label",{htmlFor:"toggle",className:"menu-toggle"},"closed"===a?r.a.createElement(b.a,{className:"menu-icon"}):r.a.createElement(b.g,{className:"menu-icon"})),r.a.createElement("nav",{className:"menu-content"},c.map((function(t,a){var c=t.path===n?"link selected":"link";return r.a.createElement("button",{key:a,type:"button",className:c,onClick:e.handleClick,name:t.path},t.content)})))))}}]),t}(n.Component),A=Object(g.g)(Object(s.b)((function(e){return{authenticationStatus:e.authenticationStatus}}),(function(e){return{updateAuthentication:function(t){return e(j(t))}}}))(w)),C=(a(207),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={status:"closed"},e.handleClick=e.handleClick.bind(Object(p.a)(e)),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"handleClick",value:function(e){var t=e.target.checked;this.setState({status:t?"open":"closed"})}},{key:"render",value:function(){var e=this.props,t=e.gravatarEmail,a=e.name,n=e.score,c=this.state.status;return r.a.createElement("section",{className:"profile-bar ".concat(c)},r.a.createElement("div",{className:"user-infos"},r.a.createElement("img",{alt:"user avatar","data-testid":"header-profile-picture",src:y(t)}),r.a.createElement("p",{"data-test-id":"input-player-name",hidden:!0},t),r.a.createElement("p",{"data-testid":"header-player-name"},a)),r.a.createElement("div",{className:"score"},"Score:",r.a.createElement("span",{"data-testid":"header-score"},n)),r.a.createElement("input",{type:"checkbox",id:"toggle-profile-bar",onClick:this.handleClick}),r.a.createElement("label",{htmlFor:"toggle-profile-bar"},"closed"===c?r.a.createElement(b.c,null):r.a.createElement(b.d,null)))}}]),t}(n.Component)),D=Object(s.b)((function(e){return{gravatarEmail:e.player.gravatarEmail,name:e.player.name,score:e.player.score}}))(C),T=a(41),I=a(15),_=(a(208),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).timer=a.timer.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.timer()}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.stop,a=e.seconds;(t||0===a)&&this.timer()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"timer",value:function(){var e=this;this.interval=setInterval((function(){var t=e.props,a=t.stop,n=t.seconds;n>0&&!a?(0,e.props.addTimer)(n-1):clearInterval(e.interval)}),1e3)}},{key:"render",value:function(){var e=this.props.seconds;return r.a.createElement("div",{className:"timer"},r.a.createElement("p",{style:{background:"linear-gradient(90deg, rgb(255,38,116) ".concat(e/30*100,"%,\n              white ").concat(e/30*100,"%,\n              white ").concat(100-100*e/30,"%,\n              white ").concat(100-100*e/30,"%)")}},"Tempo restante: ".concat(e)))}}]),t}(n.Component)),x=Object(s.b)((function(e){return{stop:e.timer.stop,seconds:e.timer.seconds}}),(function(e){return{addTimer:function(t){return e(N(t))}}}))(_),q=(a(209),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={questions:[],actualQuestionIndex:0,selectedAnswer:"",selected:""},e.handleQuestion=e.handleQuestion.bind(Object(p.a)(e)),e.handleAnswers=e.handleAnswers.bind(Object(p.a)(e)),e.handleUniqueAnswer=e.handleUniqueAnswer.bind(Object(p.a)(e)),e.handleNext=e.handleNext.bind(Object(p.a)(e)),e.prepareQuestions=e.prepareQuestions.bind(Object(p.a)(e)),e.sortRandomAnswers=e.sortRandomAnswers.bind(Object(p.a)(e)),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.tokenObj.token,n=t.name,r=t.gravatarEmail,c=t.settings,i=t.seconds,o={player:{name:n,assertions:0,score:0,gravatarEmail:r}};localStorage.setItem("state",JSON.stringify(o)),0===i&&this.handleUniqueAnswer("incorrect"),function(e){var t=e.amount,a=e.category,n=e.difficulty,r=e.token,c=e.type,i=""===t||0===t||void 0===t?5:t;i>50&&(i=50);var o="".concat("https://opentdb.com/api.php?","amount=").concat(i,"&token=").concat(r);return""!==c&&"any"!==c&&(o+="&type=".concat(c)),""!==a&&"any"!==a&&(o+="&category=".concat(a)),""!==n&&"any"!==n&&(o+="&difficulty=".concat(n)),fetch(o).then((function(e){return e.json()})).then((function(e){return e.results})).catch((function(){return"ERROR_QUESTIONS"}))}(Object(I.a)({},c,{token:a})).then((function(t){return e.prepareQuestions(t)})).catch((function(t){return e.setState({questions:t})}))}},{key:"prepareQuestions",value:function(e){var t=this,a=e.map((function(e){return t.sortRandomAnswers(e)}));this.setState({questions:a})}},{key:"sortRandomAnswers",value:function(e){for(var t=e.incorrect_answers.map((function(e){return{ans:e,answerType:"incorrect"}})),a=[{ans:e.correct_answer,answerType:"correct"}].concat(Object(T.a)(t)),n=a.length,r=[],c=0;c<n;c+=1){var i=Math.round(Math.random()*(a.length-1));r[c]=a[i],a.splice(i,1)}return e.randomAnswers=r,e}},{key:"handleQuestion",value:function(e){var t=this.state,a=t.questions,n=t.selectedAnswer,c=this.props.seconds,i=a[e],o=r.a.createElement("div",{className:"button-area"},r.a.createElement("button",{className:"next-button","data-testid":"btn-next",type:"button",onClick:this.handleNext},"Next"));return r.a.createElement("article",{className:"question-container"},r.a.createElement("div",{className:"category-container"},r.a.createElement("p",{className:"category","data-testid":"question-category"},i.category)),r.a.createElement("div",{className:"question"},r.a.createElement("p",{"data-testid":"question-text"},i.question)),r.a.createElement("div",{className:"answers"},this.handleAnswers(i)),""!==n||0===c?o:"")}},{key:"handleAnswers",value:function(e){var t=this,a=e.randomAnswers,n=0;return a.map((function(e,a){var c=e.ans,i=e.answerType,o="correct"===i?"correct-answer":"wrong-answer-".concat(n);n="incorrect"===i?n+1:n;var s=t.state,l=s.selectedAnswer,u=s.selected,m=t.props.seconds,d=a===u?"selected":"",p="correct"===i?r.a.createElement(b.b,null):r.a.createElement(b.h,null);return r.a.createElement("button",{key:a,id:a,type:"button",name:i,"data-testid":o,className:""!==l||0===m?"".concat(i,"-answer ").concat(d):"",onClick:function(){return t.handleUniqueAnswer({answerType:i,index:a})},disabled:""!==l||0===m},r.a.createElement("p",null,c),r.a.createElement("div",{className:"icon"},""!==l||0===m?p:""))}))}},{key:"handleScore",value:function(e){var t=this.state;return 10+e*{easy:1,medium:2,hard:3}[t.questions[t.actualQuestionIndex].difficulty]}},{key:"handleUniqueAnswer",value:function(e){var t=e.answerType,a=e.index,n=this.props,r=n.seconds,c=n.addStop,i=n.addScore,o=n.name,s=n.gravatarEmail,l=n.score,u=n.assertions,m="correct"===t?this.handleScore(r):0,d="correct"===t?1:0,p={player:{name:o,gravatarEmail:s,score:l+m,assertions:u+d}};localStorage.setItem("state",JSON.stringify(p)),i({score:m,assertions:d}),c(!0),this.setState({selectedAnswer:t,selected:a})}},{key:"handleNext",value:function(){var e=this.props,t=e.addTimer,a=e.addStop;t(30),a(!1),this.setState((function(e){return{actualQuestionIndex:e.actualQuestionIndex+1,selectedAnswer:"",selected:""}}))}},{key:"render",value:function(){var e=this,t=this.state,a=t.questions,n=t.actualQuestionIndex,c=t.selected,i=this.props,o=i.seconds,s=i.settings.amount;return r.a.createElement("div",{className:"questions-timer-container"},"ERROR_QUESTIONS"!==a&&o>0&&""===c&&a.length>0&&r.a.createElement(x,null),"ERROR_QUESTIONS"===a&&n<s?"ERROR":"",n<s?"ERROR_QUESTIONS"!==a&&a.length>0?e.handleQuestion(n):r.a.createElement("div",{className:"loader-container"},r.a.createElement("div",{className:"loader"})):r.a.createElement(g.a,{to:"/feedback"}))}}]),t}(n.Component)),U=Object(s.b)((function(e){return{settings:e.settings,tokenObj:e.tokenObj,seconds:e.timer.seconds,name:e.player.name,gravatarEmail:e.player.gravatarEmail,score:e.player.score,assertions:e.player.assertions}}),(function(e){return{addTimer:function(t){return e(N(t))},addStop:function(t){return e({type:"ADD_STOP",stop:t})},addScore:function(t){return e({type:"ADD_SCORE",score:(a=t).score,assertions:a.assertions});var a}}}))(q),Q=(a(210),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.history;e.authenticationStatus||t.push("/")}},{key:"render",value:function(){var e=this.props.tokenObj.token;return r.a.createElement("div",{className:"game-container"},r.a.createElement(A,null),r.a.createElement(D,null),r.a.createElement("div",{className:"game-questions-container"},"ERROR_TOKEN"===e?r.a.createElement("p",null,"Falha Tempor\xe1ria"):r.a.createElement(U,null)))}}]),t}(n.Component)),P=Object(s.b)((function(e){return{tokenObj:e.tokenObj,authenticationStatus:e.authenticationStatus}}))(Q),M=a(29),F=(a(211),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).state={name:"",gravatarEmail:"",isDisabled:!0,emailValidation:""},e.handleChange=e.handleChange.bind(Object(p.a)(e)),e.toggeButton=e.toggeButton.bind(Object(p.a)(e)),e.clickButton=e.clickButton.bind(Object(p.a)(e)),e.logout=e.logout.bind(Object(p.a)(e)),e.handleState=e.handleState.bind(Object(p.a)(e)),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.handleState()}},{key:"handleState",value:function(){localStorage.getItem("authentified")&&this.setState({isDisabled:!1})}},{key:"handleChange",value:function(e){var t=this,a=e.target,n=a.name,r=a.value;this.setState(Object(M.a)({},n,r),(function(){t.toggeButton()}))}},{key:"toggeButton",value:function(){var e=this.state,t=e.gravatarEmail,a=e.name,n=/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(t),r=!n||""===a;this.setState((function(e){return""!==e.gravatarEmail?{emailValidation:n,isDisabled:r}:{emailValidation:"",isDisabled:r}}))}},{key:"clickButton",value:function(){var e=this.props,t=e.login,a=e.createToken,n=e.updateAuthentication,r=this.state;t({name:r.name,gravatarEmail:r.gravatarEmail}),localStorage.setItem("authentified",!0),n(!0),a()}},{key:"logout",value:function(){var e=this.props,t=e.history;(0,e.updateAuthentication)(!1),localStorage.setItem("authentified",!1),localStorage.clear("state"),t.push("/")}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.gravatarEmail,n=e.emailValidation,c=e.isDisabled,i=this.props,s=i.authenticationStatus,l=i.player.name,u="";""!==n&&(u=n?"valid":"invalid");var m=s?"invisible":"";return r.a.createElement("div",{className:"main-container"},r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:R.a,alt:"logo"})),r.a.createElement("form",{className:"form-container"},r.a.createElement("fieldset",{className:"header-area"},r.a.createElement(o.c,{to:"/settings"},r.a.createElement(b.e,{className:"settings-button",type:"button","data-testid":"btn-settings"}))),r.a.createElement("fieldset",{className:"inputs-container"},r.a.createElement("label",{htmlFor:"name-input",className:"input-label-container ".concat(m)},"Name",r.a.createElement("div",{className:"input-box"},r.a.createElement(b.i,{className:"icone"}),r.a.createElement("input",{type:"text",id:"name-input",onChange:this.handleChange,value:t,name:"name",placeholder:"Enter your name","data-testid":"input-player-name"}))),r.a.createElement("label",{htmlFor:"email-input",className:"input-label-container ".concat(m)},"Email",r.a.createElement("div",{className:"input-box ".concat(u)},r.a.createElement(b.f,{className:"icone ".concat(u)}),r.a.createElement("input",{id:"email-input",type:"email",onChange:this.handleChange,value:a,name:"gravatarEmail",placeholder:"Enter your email","data-testid":"input-gravatar-email"}),n&&r.a.createElement(b.b,{className:"icone valid"}),!1===n&&r.a.createElement(b.h,{className:"icone invalid"})),r.a.createElement("p",{className:"text-helper ".concat(u)},"Email should be like user@gmail.com")),s&&r.a.createElement("p",null,"Already logged as ".concat(l))),r.a.createElement("fieldset",{className:"buttons-area"},r.a.createElement(o.c,{to:"/game"},r.a.createElement("button",{className:c?"play-button-disabled":"play-button",type:"submit",disabled:c,"data-testid":"btn-play",onClick:this.clickButton},"Play Now")),s&&r.a.createElement(o.c,{to:"/"},r.a.createElement("button",{className:"change-account-button",type:"button",onClick:this.logout,"data-testid":"btn-change-account"},"Change account")))))}}]),t}(n.Component)),G=Object(s.b)((function(e){return{authenticationStatus:e.authenticationStatus,player:e.player}}),(function(e){return{updateAuthentication:function(t){return e(j(t))},login:function(t){return e(v(t))},createToken:function(){return e(O())}}}))(F),B=(a(212),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.player,a=e.ranking,n=e.addPlayerRanking,r=e.history,c=e.authenticationStatus,i=t.name,o=t.gravatarEmail;c||r.push("/"),0===a.filter((function(e){return e.name===i&&e.gravatarEmail===o})).length&&n(t)}},{key:"render",value:function(){var e="Podia ser melhor...",t="Mandou bem!",a=this.props,n=a.score,c=a.assertions;return r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement(D,null),r.a.createElement("div",{className:"feedback-container"},r.a.createElement("p",{"data-testid":"feedback-text"},c>=3?t:e),r.a.createElement("div",{className:"results-container"},r.a.createElement("div",{className:"results-header"},r.a.createElement("p",null,"RESULTS")),r.a.createElement("div",{className:"results-score"},r.a.createElement("p",null,"SCORE"),r.a.createElement("p",{"data-testid":"feedback-total-score",className:"score"},n)),r.a.createElement("div",{className:"results-score"},r.a.createElement("p",null,"ASSERTIONS"),r.a.createElement("p",{"data-testid":"feedback-total-question",className:"score"},c)),r.a.createElement("div",{className:"replay-button-area"},r.a.createElement(o.c,{to:"/"},r.a.createElement("button",{className:"replay-button",type:"button","data-testid":"btn-play-again"},"Play Again")),r.a.createElement(o.c,{to:"/ranking"},r.a.createElement("button",{className:"ranking-button",type:"button","data-testid":"btn-ranking"},"See Ranking"))))))}}]),t}(r.a.Component)),K=Object(s.b)((function(e){return{ranking:e.ranking,player:e.player,score:e.player.score,assertions:e.player.assertions,authenticationStatus:e.authenticationStatus}}),(function(e){return{addPlayerRanking:function(t){return e({type:"ADD_PLAYER_RANKING",player:t})}}}))(B),L=(a(213),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.history;e.authenticationStatus||t.push("/")}},{key:"render",value:function(){var e=this.props,t=e.ranking,a=e.authenticationStatus;return r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement("section",{className:"ranking-container"},r.a.createElement("div",{className:"ranking-header"},r.a.createElement("p",{"data-testid":"ranking-title"},"Ranking")),0===t.length&&r.a.createElement("p",null,"Play and be the first!"),r.a.createElement("div",{className:"ranking-players"},0!==t.length&&t.sort((function(e,t){return t.score-e.score})).map((function(e,t){var a=e.gravatarEmail,n=e.name,c=e.score;return r.a.createElement("div",{key:t,className:"player-container"},r.a.createElement("div",{className:"ranking-index-container"},r.a.createElement("p",{className:"ranking-index"},t+1)),r.a.createElement("div",{className:"user-infos"},r.a.createElement("img",{alt:"user avatar","data-testid":"header-profile-picture",src:y(a)}),r.a.createElement("p",{"data-testid":"player-name-".concat(t)},n)),r.a.createElement("div",{className:"score"},"Score:",r.a.createElement("span",{"data-testid":"player-score-".concat(t)},c)))}))),r.a.createElement("div",{className:"ranking-button-area"},a&&r.a.createElement(o.c,{to:"/game"},r.a.createElement("button",{type:"button"},"Play Now")),r.a.createElement(o.c,{to:"/"},r.a.createElement("button",{className:a&&"second-button",type:"button","data-testid":"btn-go-home"},"Go Home")))))}}]),t}(r.a.Component)),J=Object(s.b)((function(e){return{ranking:e.ranking,authenticationStatus:e.authenticationStatus}}))(L),H=(a(214),function(e){function t(e){var a;Object(l.a)(this,t);var n=(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).props.settings,r=n.difficulty,c=n.type,i=n.amount,o=n.category;return a.state={difficulty:r,category:o,amount:i,type:c,categories:[],isFetching:""},a.handleClick=a.handleClick.bind(Object(p.a)(a)),a.handleState=a.handleState.bind(Object(p.a)(a)),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.handleState()}},{key:"componentWillUnmount",value:function(){this.setState({isFetching:!1})}},{key:"handleState",value:function(){var e=this,t=this.state.isFetching;this.setState({isFetching:!0}),t&&fetch("https://opentdb.com/api_category.php").then((function(e){return e.json()})).then((function(e){return e.trivia_categories})).catch((function(){return"ERROR_QUESTIONS"})).then((function(t){return e.setState({categories:t,isFetching:!1})}))}},{key:"handleClick",value:function(e){var t=e.target,a=t.name,n=t.value,r=this.props.addSettings;this.setState(Object(M.a)({},a,n)),r(Object(M.a)({},a,n))}},{key:"render",value:function(){var e=this.state,t=e.difficulty,a=e.amount,n=e.category,c=e.type,i=e.categories,s=this.props.authenticationStatus;return r.a.createElement("div",null,r.a.createElement(A,null),r.a.createElement("section",{className:"settings-container"},r.a.createElement("div",{className:"settings-header"},r.a.createElement("p",{"data-testid":"settings-title"},"Settings")),r.a.createElement("form",{className:"parameters-container"},r.a.createElement("label",{htmlFor:"amount",className:"parameter"},r.a.createElement("p",{className:"parameter-title"},"Amount of Questions"),r.a.createElement("input",{min:"5",max:"50",type:"number",className:"parameter-options",name:"amount",id:"amount",placeholder:"Insert a number",onChange:this.handleClick,value:a})),r.a.createElement("label",{htmlFor:"difficulty",className:"parameter"},r.a.createElement("p",{className:"parameter-title"},"Difficulty"),r.a.createElement("select",{className:"parameter-options",name:"difficulty",id:"difficulty",onChange:this.handleClick,value:t},""===t&&r.a.createElement("option",null,"Select an option"),r.a.createElement("option",{value:"any"},"Any Difficulty"),r.a.createElement("option",{value:"easy"},"Easy"),r.a.createElement("option",{value:"medium"},"Medium"),r.a.createElement("option",{value:"hard"},"Hard"))),r.a.createElement("label",{htmlFor:"type",className:"parameter"},r.a.createElement("p",{className:"parameter-title"},"Type"),r.a.createElement("select",{className:"parameter-options",name:"type",id:"type",onChange:this.handleClick,value:c},""===c&&r.a.createElement("option",null,"Select an option"),r.a.createElement("option",{value:"any"},"Any Type"),r.a.createElement("option",{value:"boolean"},"True / False"),r.a.createElement("option",{value:"multiple"},"Multiple Choice"))),r.a.createElement("label",{htmlFor:"category",className:"parameter"},r.a.createElement("p",{className:"parameter-title"},"Category"),r.a.createElement("select",{className:"parameter-options",name:"category",id:"category",onChange:this.handleClick,value:n},""===n&&r.a.createElement("option",null,"Select an option"),r.a.createElement("option",{value:"any"},"Any Category"),(i!==[]||i.length>0)&&i.map((function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name)}))))),r.a.createElement("div",{className:"settings-button-area"},s&&r.a.createElement(o.c,{to:"/game"},r.a.createElement("button",{type:"submit"},"Play Now")),r.a.createElement(o.c,{to:"/"},r.a.createElement("button",{className:s&&"second-button",type:"button"},"Go Home")))))}}]),t}(n.Component)),V=Object(s.b)((function(e){return{settings:e.settings,authenticationStatus:e.authenticationStatus}}),(function(e){return{addSettings:function(t){return e({type:"ADD_SETTINGS",config:t})}}}))(H),W=(a(215),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"not-found-main-container"},r.a.createElement("h1",{className:"not-found-title"},"Page not found :("),r.a.createElement("div",{className:"image-container"},r.a.createElement("img",{src:R.a,alt:"logo"})),r.a.createElement(o.c,{className:"redirect",to:"/"},"Go Home"))}}]),t}(n.Component)),Y=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(d.a)(t).call(this))).saveRanking=e.saveRanking.bind(Object(p.a)(e)),e}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.recoverPlayerRanking,a=e.updateAuthentication,n=e.login,r=localStorage.getItem("ranking"),c=localStorage.getItem("authentified"),i=localStorage.getItem("state");i=null!==i&&JSON.parse(i).player,null!==r&&JSON.parse(r)!==[]&&t(JSON.parse(r)),null!==c&&a(c),null!==i&&n(i)}},{key:"componentDidUpdate",value:function(){this.saveRanking()}},{key:"componentWillUnmount",value:function(){this.saveRanking()}},{key:"saveRanking",value:function(){var e=this.props.ranking;return localStorage.setItem("ranking",JSON.stringify(e)),!0}},{key:"render",value:function(){return r.a.createElement(g.d,null,r.a.createElement(g.b,{path:"/game",component:P}),r.a.createElement(g.b,{path:"/settings",component:V}),r.a.createElement(g.b,{path:"/feedback",component:K}),r.a.createElement(g.b,{path:"/ranking",component:J}),r.a.createElement(g.b,{exact:!0,path:"/",component:G}),r.a.createElement(g.b,{component:W}))}}]),t}(r.a.Component),$=Object(s.b)((function(e){return{ranking:e.ranking}}),(function(e){return{recoverPlayerRanking:function(t){return e({type:"RECOVER_PLAYER_RANKING",ranking:t})},updateAuthentication:function(t){return e(j(t))},login:function(t){return e(v(t))}}}))(Y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(26),X=a(109),Z={name:"user",assertions:0,score:0,gravatarEmail:""},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.name,r=t.gravatarEmail,c=t.score,i=t.assertions;switch(a){case"LOGIN":return Object(I.a)({},e,{name:n,gravatarEmail:r,score:0,assertions:0});case"ADD_SCORE":return Object(I.a)({},e,{score:e.score+c,assertions:e.assertions+i});default:return e}},te={token:"",date:""},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.tokenObj;switch(a){case"ADD_TOKEN":return Object(I.a)({},n);default:return e}},ne={questions:[]},re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.questions;switch(a){case"ADD_QUESTIONS":return Object(I.a)({},n);default:return e}},ce={seconds:30,stop:!1},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.seconds,r=t.stop;switch(a){case"ADD_TIMER":return Object(I.a)({},e,{seconds:n});case"ADD_STOP":return Object(I.a)({},e,{stop:r});default:return e}},oe=[],se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.player,r=t.ranking;switch(a){case"ADD_PLAYER_RANKING":return[].concat(Object(T.a)(e),[n]);case"RECOVER_PLAYER_RANKING":return Object(T.a)(r);default:return e}},le={difficulty:"any",amount:5,type:"any",category:"any"},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.config;switch(a){case"ADD_SETTINGS":return Object(I.a)({},e,{},n);default:return e}},me=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.authenticationStatus;switch(a){case"UPDATE_AUTHENTICATION":return n;default:return e}},de=Object(z.c)({player:ee,tokenObj:ae,questions:re,timer:ie,ranking:se,settings:ue,authenticationStatus:me}),pe=Object(z.e)(de,Object(z.d)(Object(z.a)(X.a))),he=r.a.createElement(o.b,null,r.a.createElement($,null));i.a.render(r.a.createElement(s.a,{store:pe},he),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},33:function(e,t,a){e.exports=a.p+"static/media/trivia.466d153e.png"}},[[110,1,2]]]);
//# sourceMappingURL=main.90f3c8ed.chunk.js.map