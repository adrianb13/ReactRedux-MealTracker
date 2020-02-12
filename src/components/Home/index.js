import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
//import * as actions from "../../actions/index";
import "./home.css";

import DisplayList from "../DisplayList";

class Home extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      trackers: [],
      meals: [],
      foods: [],
      selFood: [],
      trackerId: 0,
      trackerName: "",
      mealId: 0,
      mealName: "",
      displayT: true,
      displayM: false,
      displayF: false,
      showTracker: false,
      showMeal: false,
      showFood: false,
      showNutrition: false
    }
  };

  componentDidMount = () => {
    this.dataLoad();
  };

  componentDidUpdate(nextProps){
		if(this.props.trackers !== nextProps.trackers){
      console.log("!")
			this.dataLoad();
		}
	};

  dataLoad = () => {
    if(this.props.trackers.length !== 0){
      this.setState({
        trackers: this.props.trackers,
        showTracker: true
      }, () => {
      })
    }
  };

  selected = (header, id) => {
    if(header === "Trackers"){
      this.listMeals(id);
    } else if (header === "Meals") {
      this.listFood(id);
    } else if (header === "Meal Items") {
      this.nutrition(id);
    }
  }

  //Fix this to use API call in actions instead
  listMeals = (trackerId) => {
    let tracker = this.state.trackers.filter(tracker => tracker.id === trackerId);
    console.log("tracker:" + tracker[0].id)
    this.setState({
      trackerId: parseInt(tracker[0].id),
      trackerName: "for " + tracker[0].name,
      displayT: false,
      displayM: true
    })

    if(tracker[0].meals.length !== 0){
      this.setState({
        meals: tracker[0].meals.reverse(),
        showMeal: true,
      }, () => {})
    }
  }

  listFood = (mealId) => {
    let meal = this.state.meals.filter(meal => meal.id === mealId);
    this.setState({
      mealId: parseInt(meal[0].id),
      mealName: "for " + meal[0].name,
      displayM: false,
      displayF: true
    })

    if(meal[0].food.length !== 0){
      this.setState({
        foods: meal[0].food.reverse(),
        showFood: true        
      }, () => {})
    }
  }

  nutrition = (foodId) => {
    let item = this.state.foods.filter(item => item.id === foodId);
    this.setState({
      selFood: item[0],
      showNutrition: true
    }, ()=> {
      console.log(this.state.selFood)
    })
  }

  backButton = () => {
    if(this.state.displayM){
      this.setState({
        displayM: false,
        displayT: true
      })
    } else if (this.state.displayF){
      this.setState({
        displayF: false,
        displayM: true
      })
    }
  }

  render () {
    return (
      <div className="back">
        <div className="banner">
          <div className="banImg">
            <div className="banTxt">Meal Tracker</div>
          </div>
        </div>

        <div className="container">
          <div>

            <div> 
              <div>
                {this.state.displayT ? (
                  <div>
                    <DisplayList
                      show = {this.state.showTracker}
                      header = "Trackers"
                      add = "Tracker"
                      url = "/tracker"
                      list = {this.state.trackers}
                      selected = {this.selected}
                    ></DisplayList>
                  </div>
                ):(null)}
              </div>
              <div>
                {this.state.displayM ? (
                  <div>
                    <div className="backDisplay" onClick={this.backButton}><i className="arrow left"></i> Back</div>
                    <DisplayList
                      show = {this.state.showMeal}
                      header = "Meals"
                      group = {this.state.trackerName}
                      add = "Meal"
                      url = {"/tracker/" + this.state.trackerId + "/meal/"}
                      list = {this.state.meals}
                      trackerId = {this.state.trackerId}
                      selected = {this.selected}
                    ></DisplayList>
                  </div>
                ) : (null)}    
              </div>
              <div>
                {this.state.displayF ? (
                  <div>
                    <div className="backDisplay" onClick={this.backButton}><i className="arrow left"></i> Back</div>
                    <DisplayList
                      show = {this.state.showFood}
                      header = "Meal Items"
                      group = {this.state.mealName}
                      add = "Meal Item"
                      url = {"/tracker/" + this.state.trackerId + "/meal/" + this.state.mealId + "/food"}
                      list = {this.state.foods}
                      trackerId = {this.state.trackerId}
                      mealId = {this.state.mealId}
                      selected = {this.selected}
                    ></DisplayList>
                  </div>
                ) : (null)}    
              </div>
            </div>

            <div>
              {this.state.showNutrition ? (
              <table className="table">
                <thead>
                  <tr>
                    <th>Name:</th>
                    <th>Calories (cal):</th>
                    <th>Fat: (g)</th>
                    <th>Carbs: (g)</th>
                    <th>Protein: (g)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={this.state.selFood.id}>
                    <td>{this.state.selFood.name}</td>
                    <td>{this.state.selFood.calories}</td>
                    <td>{this.state.selFood.fat}</td>
                    <td>{this.state.selFood.carbs}</td>
                    <td>{this.state.selFood.protein}</td>
                  </tr>
                </tbody>
              </table>
              ):(null)}
            </div>
          </div>
          <br></br>
        </div>
        <br></br>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return { trackers : state.trackers}
}

export default withRouter(connect(mapStateToProps)(Home));