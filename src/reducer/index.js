import * as types from "../actions/types";

const initialState = {
  trackers: [],
  meals: [],
  foods: []
}

const rootReducer = ( state = initialState, action ) => {
  switch(action.type){
    /* Tracker Reducers */
    case types.GET_TRACKERS_SUCCESS:
      return Object.assign({}, state, {
	trackers: state.trackers.concat(action.trackers)
      });
    case types.SAVE_TRACKER_SUCCESS:
      return Object.assign({}, state, {
        trackers: state.trackers.concat(action.tracker)
      });
    case types.UPDATE_TRACKER_SUCCESS:
      const listT = Object.assign([], state.trackers);
      const itemT = listT.filter(tracker => tracker.id === action.tracker.id);
      const indexT = listT.indexOf(itemT[0]);
      listT.splice(indexT, 1, action.tracker)
      return Object.assign({}, state, {
        trackers: listT
      });
    case types.DELETE_TRACKER_SUCCESS:
      const newStateT = Object.assign([], state.trackers);
      const removeTracker = newStateT.filter(tracker => {
        return parseInt(tracker.id) === parseInt(action.tracker)
      })
      const idT = newStateT.indexOf(removeTracker[0]);
      newStateT.splice(idT, 1);
      return Object.assign({}, state, {
        trackers: newStateT
      });
    
    /* Meal Reducers */
    case types.GET_MEAL_SUCCESS:
      return Object.assign({}, state, {
        meals: action.meals
      });
    case types.SAVE_MEAL_SUCCESS:
      return Object.assign({}, state, {
        meals: state.meals.concat(action.meals)
      });
    case types.UPDATE_MEAL_SUCCESS:
      const listM = Object.assign([], state.meals);
      const itemM = listM.filter(meal => meal.id === action.meal.id);
      const indexM = listM.indexOf(itemM[0]);
      listM.splice(indexM, 1, action.meal)
      return Object.assign({}, state, {
        meals: listM
      })
    case types.DELETE_MEAL_SUCCESS:
      const newStateM = Object.assign([], state.meals);
      const removeMeal = newStateM.filter(meal => {
        return parseInt(meal.id) === parseInt(action.meal)
      })
      const idM = newStateM.indexOf(removeMeal[0]);
      newStateM.splice(idM, 1);
      return Object.assign({}, state, {
        meals: newStateM
      });

    /* Food Reducers */
    case types.GET_FOOD_SUCCESS:
      return Object.assign({}, state, {
        foods: action.foods
      });
    case types.SAVE_FOOD_SUCCESS:
      return Object.assign({}, state, {
        foods: state.foods.concat(action.foods)
      });
    case types.UPDATE_FOOD_SUCCESS:
      const listF = Object.assign([], state.foods);
      const itemF = listF.filter(food => food.id === action.food.id);
      const indexF = listF.indexOf(itemF[0]);
      listF.splice(indexF, 1, action.food)
      return Object.assign({}, state, {
        foods: listF
      })
    case types.DELETE_FOOD_SUCCESS:
      const newStateF = Object.assign([], state.foods);
      const removeFood = newStateF.filter(food => {
        return parseInt(food.id) === parseInt(action.food)
      })
      const idF = newStateF.indexOf(removeFood[0]);
      newStateF.splice(idF, 1);
      return Object.assign({}, state, {
        foods: newStateF
      });

    default :
      return state; 
  }
};

export default rootReducer;
