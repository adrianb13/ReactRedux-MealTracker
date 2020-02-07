import API from "../utils/API";
import * as types from "./types.js";

export const getTrackers = () => {
  return (dispatch) => {
    return API.getTrackers()
      .then(res => {
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