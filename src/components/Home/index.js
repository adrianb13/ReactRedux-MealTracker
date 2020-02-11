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
      trackerId: 0,
      mealId: 0,
      showTracker: false,
      showMeal: false,
      showFood: false
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
        //this.listMeals(1);
      })
    }
  };

  selected = (header, id) => {
    if(header === "Trackers"){
      this.listMeals(id);
    } else if (header === "Meals") {
      this.listFood(id);
    }
  }

  listMeals = (trackerId) => {
    let tracker = this.state.trackers.filter(tracker => tracker.id === trackerId);
    console.log("tracker:" + tracker[0].id)
    this.setState({
      trackerId: parseInt(tracker[0].id)
    })

    if(tracker[0].meals.length !== 0){
      this.setState({
        meals: tracker[0].meals.reverse(),
        showMeal: true
      }, () => {
        console.log(this.state.meals);
      
      })
    }
  }

  listFood = (mealId) => {
    let meal = this.state.meals.filter(meal => meal.id === mealId);
    this.setState({
      mealId: parseInt(meal[0].id)
    })

    if(meal[0].food.length !== 0){
      this.setState({
        foods: meal[0].food.reverse(),
        showFood: true
      }, () => {
        console.log(this.state.foods);
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
                {this.state.showTracker ? (
                  <DisplayList
                    show = {this.state.showTracker}
                    header = "Trackers"
                    add = "Tracker"
                    url = "/tracker"
                    list = {this.state.trackers}
                    selected = {this.selected}
                  ></DisplayList>
                ):(null)}
              </div>
              
              <div>
                {this.state.trackerId !== 0 ? (
                <DisplayList
                    show = {this.state.showMeal}
                    header = "Meals"
                    add = "Meal"
                    url = {"/tracker/" + this.state.trackerId + "/meal/"}
                    list = {this.state.meals}
                    trackerId = {this.state.trackerId}
                    selected = {this.selected}
                  ></DisplayList>
                ) : (null)}    
              </div>
              <div>
                {this.state.mealId !== 0 ? (
                  <DisplayList
                    show = {this.state.showFood}
                    header = "Meal Items"
                    add = "Meal Item"
                    url = {"/tracker/" + this.state.trackerId + "/meal/" + this.state.mealId + "/food"}
                    list = {this.state.foods}
                    trackerId = {this.state.trackerId}
                    mealId = {this.state.mealId}
                    selected = {this.selected}
                  ></DisplayList>
                ) : (null)}    
              </div>
            
            </div>
          </div>
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