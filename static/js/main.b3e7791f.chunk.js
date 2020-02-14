(this["webpackJsonpmealtracker-react"]=this["webpackJsonpmealtracker-react"]||[]).push([[0],{39:function(e,t,a){},44:function(e,t,a){e.exports=a(80)},53:function(e,t,a){},54:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var r={};a.r(r),a.d(r,"getTrackers",(function(){return F})),a.d(r,"saveTracker",(function(){return U})),a.d(r,"updateTracker",(function(){return w})),a.d(r,"deleteTracker",(function(){return L})),a.d(r,"getMeals",(function(){return R})),a.d(r,"saveMeal",(function(){return H})),a.d(r,"updateMeal",(function(){return G})),a.d(r,"deleteMeal",(function(){return V})),a.d(r,"getFoods",(function(){return Y})),a.d(r,"saveFood",(function(){return Q})),a.d(r,"updateFood",(function(){return X})),a.d(r,"deleteFood",(function(){return $}));var n=a(0),s=a.n(n),c=a(22),o=a.n(c),l=a(17),i=(a(53),a(6)),d=a(7),m=a(9),u=a(8),p=a(10),f=a(18),h=(a(54),a(42)),E=a.n(h),k=a(5),v=a.n(k),b=function(){return v.a.get("https://mealtracker-java.herokuapp.com/api/trackers/")},S=function(e){return v.a.post("https://mealtracker-java.herokuapp.com/api/trackers/",e)},I=function(e){return v.a.put("https://mealtracker-java.herokuapp.com/api/trackers/"+e.id,e)},g=function(e){return v.a.delete("https://mealtracker-java.herokuapp.com/api/trackers/"+e)},O=function(e){return v.a.get("https://mealtracker-java.herokuapp.com/api/meals/"+e)},y=function(e,t){return v.a.post("https://mealtracker-java.herokuapp.com/api/meals/"+e,t)},C=function(e,t){return v.a.put("https://mealtracker-java.herokuapp.com/api/meals/"+e+"/"+t.id,t)},N=function(e){return v.a.delete("https://mealtracker-java.herokuapp.com/api/meals/"+e)},j=function(e){return v.a.get("https://mealtracker-java.herokuapp.com/api/food/"+e)},T=function(e,t){return v.a.post("https://mealtracker-java.herokuapp.com/api/food/"+e,t)},A=function(e,t){return v.a.put("https://mealtracker-java.herokuapp.com/api/food/"+e+"/"+t.id,t)},_=function(e){return v.a.delete("https://mealtracker-java.herokuapp.com/api/food/"+e)},F=function(){return function(e){return b().then((function(t){e(M(t.data))})).catch((function(e){return console.log(e)}))}},M=function(e){return{type:"GET_TRACKERS_SUCCESS",trackers:e}},U=function(e){return function(t){return S(e).then((function(e){t(D(e.data))})).catch((function(e){return console.log(e)}))}},D=function(e){return{type:"SAVE_TRACKER_SUCCESS",tracker:e}},w=function(e){return function(t){return I(e).then((function(e){t(x(e.data))})).catch((function(e){return console.log(e)}))}},x=function(e){return{type:"UPDATE_TRACKER_SUCCESS",tracker:e}},L=function(e){return function(t){return g(e).then((function(e){t(B(e.data))})).catch((function(e){return console.log(e)}))}},B=function(e){return{type:"DELETE_TRACKER_SUCCESS",tracker:e}},R=function(e){return function(t){return O(e).then((function(e){t(P(e.data))})).catch((function(e){return console.log(e)}))}},P=function(e){return{type:"GET_MEAL_SUCCESS",meals:e}},H=function(e,t){return function(a){return y(e,t).then((function(e){a(K(e.data))})).catch((function(e){return console.log(e)}))}},K=function(e){return{type:"SAVE_MEAL_SUCCESS",meal:e}},G=function(e,t){return function(a){return C(e,t).then((function(e){a(q(e.data))})).catch((function(e){return console.log(e)}))}},q=function(e){return{type:"UPDATE_MEAL_SUCCESS",meal:e}},V=function(e){return function(t){return N(e).then((function(e){t(J(e.data))})).catch((function(e){return console.log(e)}))}},J=function(e){return{type:"DELETE_MEAL_SUCCESS",meal:e}},Y=function(e){return function(t){return j(e).then((function(e){t(z(e.data))})).catch((function(e){return console.log(e)}))}},z=function(e){return{type:"GET_FOOD_SUCCESS",foods:e}},Q=function(e,t){return function(a){return T(e,t).then((function(e){a(W(e.data))})).catch((function(e){return console.log(e)}))}},W=function(e){return{type:"SAVE_FOOD_SUCCESS",food:e}},X=function(e,t){return function(a){return A(e,t).then((function(e){a(Z(e.data))})).catch((function(e){return console.log(e)}))}},Z=function(e){return{type:"UPDATE_FOOD_SUCCESS",food:e}},$=function(e){return function(t){return _(e).then((function(e){t(ee(e.data))})).catch((function(e){return console.log(e)}))}},ee=function(e){return{type:"DELETE_FOOD_SUCCESS",food:e}},te=a(13),ae=(a(72),a(14)),re=(a(73),function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).format=function(e){return new Date(e).toLocaleDateString()},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"header"},this.props.header," ",this.props.group),this.props.show?s.a.createElement("div",null,s.a.createElement("div",{className:"listGuide"},"(Select a ",this.props.add," to view)"),this.props.list.map((function(t){return s.a.createElement("div",{key:t.id,onClick:function(){return e.props.selected(e.props.header,t)}},"Meals"===e.props.header?s.a.createElement("div",{className:"itemBox"},s.a.createElement("div",{className:"listItem listFlex"},s.a.createElement("div",{className:"listMeal"},t.name),s.a.createElement("div",{className:"date"},e.format(t.createdAt))),s.a.createElement(ae.a,{to:e.props.urlUD+"/"+t.id,className:"listUpd"},s.a.createElement("div",null,"Update"))):s.a.createElement("div",{className:"itemBox"},s.a.createElement("div",{className:"listItem"},t.name),s.a.createElement(ae.a,{to:e.props.urlUD+"/"+t.id,className:"listUpd"},s.a.createElement("div",null,"Update"))))})),s.a.createElement("br",null),s.a.createElement(ae.a,{to:this.props.urlAdd},s.a.createElement("div",{className:"addItem"},"Add a ",this.props.add)),s.a.createElement("br",null)):s.a.createElement("div",null,s.a.createElement("div",null,"Not Available"),s.a.createElement("br",null),s.a.createElement(ae.a,{to:this.props.urlAdd},s.a.createElement("div",{className:"addItem"},"Add a ",this.props.add)),s.a.createElement("br",null)))}}]),t}(s.a.Component)),ne=Object(f.f)(re),se=(a(75),Object(f.f)((function(e){return s.a.createElement("div",null,e.showNutrition?s.a.createElement("div",null,s.a.createElement("hr",null),s.a.createElement("div",{className:"tableTitle"},'"',e.selFood.name,'" Details'),s.a.createElement("table",{className:"table"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",null,"Calories (cal):"),s.a.createElement("th",null,"Fat: (g)"),s.a.createElement("th",null,"Carbs: (g)"),s.a.createElement("th",null,"Protein: (g)"))),s.a.createElement("tbody",null,s.a.createElement("tr",{key:e.selFood.id},s.a.createElement("td",null,e.selFood.calories),s.a.createElement("td",null,e.selFood.fat),s.a.createElement("td",null,e.selFood.carbs),s.a.createElement("td",null,e.selFood.protein))))):null)}))),ce=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).componentDidMount=function(){a.dataLoad()},a.dataLoad=function(){0!==a.props.trackers.length&&a.setState({trackers:a.props.trackers,showTracker:!0},(function(){}))},a.selected=function(e,t){"Trackers"===e?a.listMeals(t):"Meals"===e?a.listFood(t):"Meal Items"===e&&a.nutrition(t)},a.listMeals=function(e){a.props.actions.getMeals(e.id).then((function(t){a.setState({trackerId:parseInt(e.id),trackerName:"for "+e.name,meals:a.props.meals.reverse(),showMeal:!1},(function(){a.setState({displayT:!1,displayM:!0})})),0!==a.props.meals.length&&a.setState({showMeal:!0},(function(){}))}))},a.listFood=function(e){a.props.actions.getFoods(e.id).then((function(t){a.setState({mealId:parseInt(e.id),mealName:"for "+e.name,foods:a.props.foods.reverse(),showFood:!1},(function(){a.setState({displayM:!1,displayF:!0})})),0!==a.props.foods.length&&a.setState({showFood:!0})})),0!==a.props.foods.length&&a.setState({foods:a.props.foods.reverse(),showFood:!0},(function(){}))},a.nutrition=function(e){var t=a.state.foods.filter((function(t){return t.id===e.id}));a.setState({selFood:t[0],showNutrition:!0})},a.backButton=function(){a.state.displayM?a.setState({displayM:!1,displayT:!0}):a.state.displayF&&a.setState({displayF:!1,displayM:!0,showNutrition:!1})},a.state={trackers:[],meals:[],foods:[],selFood:[],trackerId:0,trackerName:"",mealId:0,mealName:"",displayT:!0,displayM:!1,displayF:!1,showTracker:!1,showMeal:!1,showFood:!1,showNutrition:!1},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.trackers!==e.trackers&&this.dataLoad()}},{key:"render",value:function(){return s.a.createElement("div",{className:"back"},s.a.createElement("div",{className:"banner"},s.a.createElement("div",{className:"banImg"},s.a.createElement("div",{className:"banTxt"},"Meal Tracker"))),s.a.createElement("div",{className:"container"},s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("div",null,this.state.displayT?s.a.createElement("div",null,s.a.createElement(ne,{show:this.state.showTracker,header:"Trackers",add:"Tracker",urlAdd:"/add",urlUD:"/update",list:this.state.trackers,selected:this.selected})):null),s.a.createElement("div",null,this.state.displayM?s.a.createElement("div",null,s.a.createElement("div",{className:"backDisplay",onClick:this.backButton},s.a.createElement("i",{className:"arrow left"})," Back"),s.a.createElement(ne,{show:this.state.showMeal,header:"Meals",group:this.state.trackerName,add:"Meal",urlAdd:"/add/"+this.state.trackerId+"/meal/",urlUD:"/update/"+this.state.trackerId,list:this.state.meals,trackerId:this.state.trackerId,selected:this.selected})):null),s.a.createElement("div",null,this.state.displayF?s.a.createElement("div",null,s.a.createElement("div",{className:"backDisplay",onClick:this.backButton},s.a.createElement("i",{className:"arrow left"})," Back"),s.a.createElement(ne,{show:this.state.showFood,header:"Meal Items",group:this.state.mealName,add:"Meal Item",urlAdd:"/add/"+this.state.trackerId+"/"+this.state.mealId+"/food",urlUD:"/update/"+this.state.trackerId+"/"+this.state.mealId,list:this.state.foods,trackerId:this.state.trackerId,mealId:this.state.mealId,selected:this.selected})):null)),s.a.createElement("div",null,s.a.createElement(se,{showNutrition:this.state.showNutrition,selFood:this.state.selFood}))),s.a.createElement("br",null)),s.a.createElement("br",null))}}]),t}(s.a.Component),oe=Object(f.f)(Object(l.b)((function(e){return{trackers:e.trackers,meals:e.meals,foods:e.foods}}),(function(e){return{actions:Object(te.b)(r,e)}}))(ce)),le=a(19),ie=(a(39),function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={trackers:[],selected:"",formHeader:"Add A Tracker",placeholder:"Ex: John's Tracker",tracker:!1,meal:!1,food:!1},a.dataload=function(){0!==a.props.trackers.length&&a.setState({trackers:a.props.trackers},(function(){a.formType()}))},a.formType=function(){a.props.trackerId&&(a.setState({meal:!0,formHeader:"Add A Meal",placeholder:"Ex: Breakfast/Denny's"}),a.findList("tracker")),a.props.mealId&&(a.setState({food:!0,formHeader:"Add A Meal Item",placeholder:"Ex: Salad"}),a.findList("meal"))},a.findList=function(e){var t=a.props.trackers.filter((function(e){return e.id===a.props.trackerId}));if("tracker"===e)a.setState({selected:"Tracker: "+t[0].name});else if("meal"===e){var r=a.props.trackers.filter((function(e){return e.id===a.props.trackerId}))[0].meals.filter((function(e){return e.id===parseInt(a.props.mealId)}));a.setState({selected:"Meal: "+r[0].name})}},a.formUpdate=function(e){var t;e.preventDefault();var r=e.target,n=r.name,s=r.value;a.setState((t={},Object(le.a)(t,n,s),Object(le.a)(t,"message",""),t))},a.validated=function(){return a.setState({message:"Please Fill Out Form Completely"}),a.state.food?!!(a.state.name&&a.state.fat&&a.state.carbs&&a.state.protein&&a.state.calories)&&(a.setState({message:""}),!0):!!a.state.name&&(a.setState({message:""}),!0)},a.add=function(){if(a.validated())if(a.state.food){var e=a.props.mealId,t={name:a.state.name,fat:a.state.fat,carbs:a.state.carbs,protein:a.state.protein,calories:a.state.calories};a.props.actions.saveFood(e,t),a.props.history.push("/")}else if(a.state.meal){var r=a.props.trackerId,n={name:a.state.name};a.props.actions.saveMeal(r,n),a.props.history.push("/")}else{var s={name:a.state.name};a.props.actions.saveTracker(s),a.props.history.push("/")}},a.addAnother=function(e){if(e.preventDefault(),a.validated()&&a.state.food){var t=a.props.mealId,r={name:a.state.name,fat:a.state.fat,carbs:a.state.carbs,protein:a.state.protein,calories:a.state.calories};a.props.actions.saveFood(t,r),a.setState({message:a.state.name+" has been added!"},(function(){a.refs.name.value="",a.refs.fat.value="",a.refs.carbs.value="",a.refs.protein.value="",a.refs.calories.value=""}))}},a.cancel=function(){a.props.history.push("/")},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.dataload()}},{key:"componentDidUpdate",value:function(e){this.props.trackers!==e.trackers&&this.dataload()}},{key:"keyPressed",value:function(e){"Enter"===e.key&&this.add()}},{key:"render",value:function(){return s.a.createElement("div",{className:"back"},s.a.createElement("div",{className:"pad"},s.a.createElement("div",{className:"formHead"},s.a.createElement("div",null,this.state.selected),s.a.createElement("div",null,this.state.formHeader)),s.a.createElement("div",{className:"container"},s.a.createElement("form",{onChange:this.formUpdate,className:"addForm"},s.a.createElement("div",null,s.a.createElement("div",{className:"label"},"Name:"),s.a.createElement("input",{name:"name",placeholder:this.state.placeholder,ref:"name",required:!0})),this.state.food?s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("div",{className:"label"},"Fat: (in grams)"),s.a.createElement("input",{name:"fat",ref:"fat",required:!0})),s.a.createElement("div",null,s.a.createElement("div",{className:"label"},"Carbs: (in grams)"),s.a.createElement("input",{name:"carbs",ref:"carbs",required:!0})),s.a.createElement("div",null,s.a.createElement("div",{className:"label"},"Protein: (in grams)"),s.a.createElement("input",{name:"protein",ref:"protein",required:!0})),s.a.createElement("div",null,s.a.createElement("div",{className:"label"},"Calories: "),s.a.createElement("input",{name:"calories",ref:"calories",required:!0}))):null,s.a.createElement("div",null,s.a.createElement("div",{className:"message"},this.state.message)),s.a.createElement("div",{className:"btnBox"},s.a.createElement("div",{onClick:this.add,className:"addSub"},"Submit"),s.a.createElement("div",{onClick:this.cancel,className:"cancel"},"Back")),this.state.food?s.a.createElement("div",{onClick:this.addAnother,className:"addAnother"},"Submit & Add Another"):null,s.a.createElement("br",null)))),s.a.createElement("br",null))}}]),t}(s.a.Component)),de=Object(f.f)(Object(l.b)((function(e,t){var a=0;t.match.params.trackerId&&(a=parseInt(t.match.params.trackerId));var r=0;return t.match.params.mealId&&(r=parseInt(t.match.params.mealId)),{trackers:e.trackers,trackerId:a,mealId:r}}),(function(e){return{actions:Object(te.b)(r,e)}}))(ie)),me=(a(76),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.modal?"modal modalDisBl":"modal modalDisNone";return s.a.createElement("div",{className:e},s.a.createElement("div",{className:"modal-main"},s.a.createElement("div",{className:"modalTxt"},this.props.modalText),s.a.createElement("div",{className:"modalBtnBox"},s.a.createElement("div",{className:"modalBtn yes",onClick:this.props.delete},"Yes"),s.a.createElement("div",{className:"modalBtn no",onClick:this.props.confirm},"No"))))}}]),t}(s.a.Component)),ue=function(e){function t(){var e,a;Object(i.a)(this,t);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={trackers:[],selected:"",formHeader:"",placeholder:"",tracker:!1,meal:!1,food:!1,modal:!1},a.dataload=function(){0!==a.props.trackers.length&&0!==a.props.meals.length&&0!==a.props.foods.length?a.setState({trackers:a.props.trackers,meals:a.props.meals,foods:a.props.foods},(function(){a.formType()})):0!==a.props.trackers.length&&0!==a.props.meals.length?a.setState({trackers:a.props.trackers,meals:a.props.meals},(function(){a.formType()})):0!==a.props.trackers.length&&a.setState({trackers:a.props.trackers},(function(){a.formType()}))},a.formType=function(){a.props.foodId?(a.setState({food:!0,formHeader:"Meal Item"}),a.findList("food")):a.props.mealId?(a.setState({meal:!0,formHeader:"Meal"}),a.findList("meal")):a.props.trackerId&&(a.setState({tracker:!0,formHeader:"Tracker"}),a.findList("tracker"))},a.findList=function(e){var t=a.props.trackers.filter((function(e){return e.id===a.props.trackerId}));if("tracker"===e)a.setState({selected:t[0]});else if("meal"===e)if(0===a.props.meals.length){var r=t[0].meals.filter((function(e){return e.id===parseInt(a.props.mealId)}));a.setState({selected:r[0]})}else{var n=a.props.meals.filter((function(e){return e.id===parseInt(a.props.mealId)}));a.setState({selected:n[0]})}else if("food"===e)if(0===a.props.foods.length){var s=t[0].meals.filter((function(e){return e.id===parseInt(a.props.mealId)}))[0].foods.filter((function(e){return e.id===parseInt(a.props.foodId)}));a.setState({selected:s[0]})}else{var c=a.props.foods.filter((function(e){return e.id===parseInt(a.props.foodId)}));a.setState({selected:c[0]})}},a.formUpdate=function(e){var t;e.preventDefault();var r=e.target,n=r.name,s=r.value;a.setState((t={},Object(le.a)(t,n,s),Object(le.a)(t,"message",""),t))},a.validate=function(){a.setState({message:"***Please Enter A Name***"}),a.state.food?(a.state.fat||a.setState({fat:a.state.selected.fat}),a.state.carbs||a.setState({carbs:a.state.selected.carbs}),a.state.protein||a.setState({protein:a.state.selected.protein}),a.state.calories||a.setState({calories:a.state.selected.calories}),a.state.name&&a.setState({message:""},(function(){a.update()}))):a.state.name&&a.setState({message:""},(function(){a.update()}))},a.update=function(){if(a.state.food){var e=a.props.mealId,t={id:a.props.foodId,name:a.state.name,fat:a.state.fat,carbs:a.state.carbs,protein:a.state.protein,calories:a.state.calories,meal:{id:a.props.mealId}};a.props.actions.updateFood(e,t),a.props.history.push("/")}else if(a.state.meal){var r=a.props.trackerId,n={id:a.props.mealId,name:a.state.name,mealTracker:{id:a.props.trackerId}};a.props.actions.updateMeal(r,n),a.props.history.push("/")}else{var s={id:a.props.trackerId,name:a.state.name};a.props.actions.updateTracker(s),a.props.history.push("/")}},a.confirm=function(){a.setState({modal:!a.state.modal})},a.delete=function(){a.props.foodId?(a.props.actions.deleteFood(a.props.foodId),a.props.history.push("/")):a.props.mealId?(a.props.actions.deleteMeal(a.props.mealId),a.props.history.push("/")):a.props.trackerId&&(a.props.actions.deleteTracker(a.props.trackerId),a.props.history.push("/"))},a.cancel=function(){a.props.history.push("/")},a}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.dataload()}},{key:"componentDidUpdate",value:function(e){this.props.trackers!==e.trackers&&this.dataload()}},{key:"keyPressed",value:function(e){"Enter"===e.key&&this.validate()}},{key:"render",value:function(){return s.a.createElement("div",{className:"back"},s.a.createElement("div",{className:"pad"},s.a.createElement("div",{className:"formHead"},s.a.createElement("div",{className:"underline"},this.state.formHeader,": ",this.state.selected.name),s.a.createElement("div",null,"Update or Delete ",this.state.formHeader)),s.a.createElement("div",{className:"container"},s.a.createElement("form",{onChange:this.formUpdate,className:"addForm"},s.a.createElement("div",null,s.a.createElement("div",{className:"label"},"Name:"),s.a.createElement("input",{name:"name",placeholder:this.state.selected.name,ref:"name",required:!0})),this.state.food?s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("div",{className:"label"},"Fat: (in grams)"),s.a.createElement("input",{name:"fat",ref:"fat",placeholder:this.state.selected.fat})),s.a.createElement("div",null,s.a.createElement("div",{className:"label"},"Carbs: (in grams)"),s.a.createElement("input",{name:"carbs",ref:"carbs",placeholder:this.state.selected.carbs})),s.a.createElement("div",null,s.a.createElement("div",{className:"label"},"Protein: (in grams)"),s.a.createElement("input",{name:"protein",ref:"protein",placeholder:this.state.selected.protein})),s.a.createElement("div",null,s.a.createElement("div",{className:"label"},"Calories: "),s.a.createElement("input",{name:"calories",ref:"calories",placeholder:this.state.selected.calories}))):null,s.a.createElement("div",null,s.a.createElement("div",{className:"message"},this.state.message)),s.a.createElement("div",{className:"btnBox"},s.a.createElement("div",{onClick:this.validate,className:"addSub"},"Submit"),s.a.createElement("div",{onClick:this.cancel,className:"cancel"},"Back")),s.a.createElement("div",{onClick:this.confirm,className:"addAnother delete"},"Delete"),s.a.createElement("br",null)))),this.state.modal?s.a.createElement(me,{modalText:"Are you sure you want to delete: "+this.state.selected.name+"?",modal:this.state.modal,delete:this.delete,confirm:this.confirm}):null,s.a.createElement("br",null))}}]),t}(s.a.Component),pe=Object(f.f)(Object(l.b)((function(e,t){var a=0;t.match.params.trackerId&&(a=parseInt(t.match.params.trackerId));var r=0;t.match.params.mealId&&(r=parseInt(t.match.params.mealId));var n=0;return t.match.params.foodId&&(n=parseInt(t.match.params.foodId)),{trackers:e.trackers,meals:e.meals,foods:e.foods,trackerId:a,mealId:r,foodId:n}}),(function(e){return{actions:Object(te.b)(r,e)}}))(ue)),fe=E()({basename:"/ReactRedux-MealTracker"}),he=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return s.a.createElement(f.b,{history:fe},s.a.createElement("div",{className:"App"},s.a.createElement(f.c,null,s.a.createElement(f.a,{exact:!0,path:"/",component:oe}),s.a.createElement(f.a,{exact:!0,path:"/add",component:de}),s.a.createElement(f.a,{exact:!0,path:"/add/:trackerId/meal",component:de}),s.a.createElement(f.a,{exact:!0,path:"/add/:trackerId/:mealId/food",component:de}),s.a.createElement(f.a,{exact:!0,path:"/update/:trackerId",component:pe}),s.a.createElement(f.a,{exact:!0,path:"/update/:trackerId/:mealId",component:pe}),s.a.createElement(f.a,{exact:!0,path:"/update/:trackerId/:mealId/:foodId",component:pe}),s.a.createElement(f.a,{component:oe}))))}}]),t}(s.a.Component),Ee={trackers:[],meals:[],foods:[]},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TRACKERS_SUCCESS":return Object.assign({},e,{trackers:e.trackers.concat(t.trackers)});case"SAVE_TRACKER_SUCCESS":return Object.assign({},e,{trackers:e.trackers.concat(t.tracker)});case"UPDATE_TRACKER_SUCCESS":var a=Object.assign([],e.trackers),r=a.filter((function(e){return e.id===t.tracker.id})),n=a.indexOf(r[0]);return a.splice(n,1,t.tracker),Object.assign({},e,{trackers:a});case"DELETE_TRACKER_SUCCESS":var s=Object.assign([],e),c=s.trackers.filter((function(e){return parseInt(e.id)===parseInt(t.tracker.id)})),o=s.trackers.indexOf(c[0]);return s.trackers.splice(o,1),Object.assign({},e,{trackers:s});case"GET_MEAL_SUCCESS":return Object.assign({},e,{meals:t.meals});case"SAVE_MEAL_SUCCESS":return Object.assign({},e,{meals:e.meals.concat(t.meals)});case"UPDATE_MEAL_SUCCESS":var l=Object.assign([],e.meals),i=l.filter((function(e){return e.id===t.meal.id})),d=l.indexOf(i[0]);return l.splice(d,1,t.meal),Object.assign({},e,{meals:l});case"DELETE_MEAL_SUCCESS":console.log(t.meal);var m=Object.assign([],e),u=m.meals.filter((function(e){return parseInt(e.id)===parseInt(t.meal.id)})),p=m.meals.indexOf(u[0]);return m.meals.splice(p,1),Object.assign({},e,{meals:m});case"GET_FOOD_SUCCESS":return Object.assign({},e,{foods:t.foods});case"SAVE_FOOD_SUCCESS":return Object.assign({},e,{foods:e.foods.concat(t.foods)});case"UPDATE_FOOD_SUCCESS":var f=Object.assign([],e.foods),h=f.filter((function(e){return e.id===t.food.id})),E=f.indexOf(h[0]);return f.splice(E,1,t.food),Object.assign({},e,{foods:f});case"DELETE_FOOD_SUCCESS":var k=Object.assign([],e),v=k.foods.filter((function(e){return parseInt(e.id)===parseInt(t.food.id)})),b=k.foods.indexOf(v[0]);return k.foods.splice(b,1),Object.assign({},e,{foods:k});default:return e}},ve=a(43),be=Object(te.c)(ke,Object(te.a)(ve.a));be.dispatch(F()),o.a.render(s.a.createElement(l.a,{store:be},s.a.createElement(he,null)),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.b3e7791f.chunk.js.map