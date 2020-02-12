import * as types from "../actions/types";

const initialState = {
  trackers: [],
  meals: []
}

const rootReducer = ( state = initialState, action ) => {
  switch(action.type){
    case types.GET_TRACKERS_SUCCESS:
      return Object.assign({}, state, {
				trackers: state.trackers.concat(action.trackers)
			});
    case types.SAVE_TRACKER_SUCCESS:
      return Object.assign({}, state, {
        trackers: state.trackers.concat(action.tracker)
      });
    case types.GET_MEAL_SUCCESS:
      return Object.assign({}, state, {
        meals: state.meals.concat(action.meals)
      });
    case types.SAVE_MEAL_SUCCESS:
      return Object.assign({}, state, {
        meals: state.meals.concat(action.meals)
      });
    default :
      return state; 
  }
};

export default rootReducer;