import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
import { bindActionCreators } from "redux";
import "./form.css";

class AddForm extends React.Component {
  state = {
      trackers: [],
      selTracker: [],
      selMeal: [],
      formHeader: "Add A Tracker Form",
      tracker: false,
      meal: false,
      food: false,
  }

  componentDidUpdate(nextProps){
		if(this.props.trackers !== nextProps.trackers){
      console.log("!")
      console.log(this.props)
      this.dataload();
		}
  };
  
  dataload = () => {
    //Checks if meal trackers exist
    if(this.props.trackers.length !== 0){
      this.setState({
        trackers: this.props.trackers,
      })
    };
    //Checks if specific tracker was chosen -> form will add meal
    if(this.props.trackerId){
      this.setState({
        meal: true,
        formHeader: "Add A Meal Form"
      })
      this.findList("tracker");
    };
    //Checks if specific meal was chosen -> form will add food
    if(this.props.mealId) {
      this.setState({
        food: true,
        formHeader: "Add A Meal Item Form"
      })
      this.findList("meal");
    };
  };

  findList = (name) => {
    let chosenTracker = this.props.trackers.filter(tracker => tracker.id === parseInt(this.props.trackerId));
    if(name === "tracker"){
      this.setState({
        selTracker: chosenTracker[0]
      }, () => console.log(this.state.selTracker))
    } else if(name === "meal"){
      let chosenMeal = chosenTracker[0].meals.filter(meal => meal.id === parseInt(this.props.mealId))
      this.setState({
        selMeal: chosenMeal[0]
      }, () => console.log(this.state.selMeal)) 
    }
    
  }

  formUpdate = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render (){
    return (
      <div className="back">
        <div>
          <div>
            {this.props.trackerId !== 0 ? (
              <div>
                <div>Hello Tracker</div>
              </div>
            ):(null)}
            <div>{this.state.formHeader}</div>
          </div>
          
          <form onChange={this.formUpdate} className="container">
            <div>
              <div>Name:</div>
              <input name="name"></input>
            </div>
            { this.state.food ? (
              <div>
                <div>
                <div>Fat: (in grams)</div>
                <input name="fat"></input>
                </div>
                <div>
                  <div>Carbs: (in grams)</div>
                  <input name="fat"></input>
                </div>
                <div>
                  <div>Protein: (in grams)</div>
                  <input name="fat"></input>
                </div>
                <div>
                  <div>Calories: </div>
                  <input name="calories"></input>
                </div>
              </div>
            ):(null)}
            <br></br>
          </form>
        </div>
      </div>
    )
  };
};

const mapStateToProps = (state, ownProps) => {
  let trackerId = 0;
  if(ownProps.match.params.trackerId){
    trackerId = parseInt(ownProps.match.params.trackerId);
  }
  let mealId = 0;
  if(ownProps.match.params.mealId){
    mealId = parseInt(ownProps.match.params.mealId);
  }
  return {
    trackers: state.trackers,
    trackerId: trackerId,
    mealId: mealId
  } 
};

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch)}
};

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AddForm));
