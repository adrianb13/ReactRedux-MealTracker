import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
//import * as actions from "../../actions/index";

class Home extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      trackers: [],
      meals: []
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
    if(this.props.trackers){
      this.setState({
        trackers: this.props.trackers
      }, () => {
        console.log(this.state.trackers);
      })
    }
    console.log(this.props.trackers[0])
    if(this.props.trackers.meals){
      this.setState({
        meals: this.props.trackers.meals
      }, () => {
        console.log(this.state.meals);
      })
    }
  };

  render () {
    return (
      <div>
        <h1>Meal Tracker</h1>
        <div>
          <div>
            {this.state.trackers.map( tracker => (
              <div key={tracker.id}>
                <h3>Tracker</h3> 
                <div>{tracker.trackerName}</div>

                <div>
                  {tracker.meals ? (
                    <div>
                      <h3>Meals</h3> 
                      {tracker.meals.map( meal => (
                        <div key={meal.id}>
                          <div>{meal.mealName}</div>

                          <div>
                            {meal.food ? (
                              <div>
                                <h3>Meal Item</h3>
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
          <div>
            {this.state.meals.map( meal => (
              <div key={meal.id}>
                <div>{meal.mealName}</div>
              </div>
            ))}
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