import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
//import * as actions from "../../actions/index";
import "./home.css";

class Home extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      trackers: [],
      meals: [],
      foods: []
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
        trackers: this.props.trackers
      }, () => {
        this.listMeals(1);
      })
    }
  };

  listMeals = (trackerId) => {
    let tracker = this.state.trackers.filter(tracker => tracker.id === trackerId);
    if(tracker[0].meals.length !== 0){
      this.setState({
        meals: tracker[0].meals
      }, () => {
        console.log(this.state.meals);
        this.listFood(1);
      })
    }
  }

  listFood = (mealId) => {
    let meal = this.state.meals.filter(meal => meal.id === mealId);
    if(meal[0].food.length !== 0){
      this.setState({
        foods: meal[0].food
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
              {this.state.trackers.map( tracker => (
                <div key={tracker.id}>
                  <div className="header">Tracker</div> 
                  <div>{tracker.trackerName}</div>

                  <div>
                    {tracker.meals ? (
                      <div>
                        <div className="header">Meals</div> 
                        {tracker.meals.map( meal => (
                          <div key={meal.id}>
                            <div>{meal.mealName}</div>

                            <div>
                              {meal.food ? (
                                <div>
                                  <div className="header">Meal Item</div>
                                  {meal.food.map( food => (
                                    <div key={food.id}>
                                      <div>{food.name}</div>                                
                                    </div>
                                  ))}
                                </div>
                              ) : (null)}  
                            </div>

                          </div>
                        ))}
                      </div>
                    ) : (null)}  
                  </div>

                </div>
              ))}
            </div>
            {/* <div>
              {this.state.meals.map( meal => (
                <div key={meal.id}>
                  <div>{meal.mealName}</div>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return { trackers : state.trackers}
}

export default withRouter(connect(mapStateToProps)(Home));