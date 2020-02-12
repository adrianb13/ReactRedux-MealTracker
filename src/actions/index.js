import API from "../utils/API";
import * as types from "./types.js";

export const getTrackers = () => {
  return (dispatch) => {
    return API.getTrackers()
      .then(res => {
        console.log("API")
        dispatch(getTrackerSuccess(res.data))
      })
      .catch(err => console.log(err));
  };
};

const getTrackerSuccess = (trackers) => {
  return {type: types.GET_TRACKERS_SUCCESS, trackers};
};

export const saveTracker = (tracker) => {
  return (dispatch) => {
    return API.saveTracker(tracker)
      .then(res => {
        dispatch(saveTrackerSuccess(res.data))
      })
      .catch(err => console.log(err));
  };
};

const saveTrackerSuccess = (tracker) => {
  return { type: types.SAVE_TRACKER_SUCCESS, tracker};
};


export const getMeal = (trackerId) => {
  return (dispatch) => {
    return API.getMeals(trackerId)
      .then(res => {
        dispatch(getMealSuccess(res.data))
      })
      .catch(err => console.log(err));
  };
};

const getMealSuccess = (meals) => {
  return { type: types.GET_MEAL_SUCCESS, meals};
};

export const saveMeal = (trackerId, meal) => {
  return (dispatch) => {
    return API.saveMeal(trackerId, meal)
      .then(res => {
        dispatch(saveMealSuccess(res.data))
      })
      .catch(err => console.log(err));
  };
};

const saveMealSuccess = (meal) => {
  return { type: types.SAVE_MEAL_SUCCESS, meal};
};