import * as types from "../actions/types";

const initialState = {
  trackers: []
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
      });;
    default :
      return state; 
  }
};

export default rootReducer;