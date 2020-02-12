import axios from "axios";

export default {
  //Meal Tracker API calls
  getTrackers: () => {
    return axios.get("http://localhost:8080/api/trackers/");
  },
  saveTracker: (tracker) => {
    return axios.post("http://localhost:8080/api/trackers/", tracker);
  },
  updateTracker: (tracker) => {
    return axios.put("http://localhost:8080/api/trackers/" + tracker.id, tracker);
  },
  deleteTracker: (tracker) => {
    return axios.delete("http://localhost:8080/api/trackers/" + tracker.id);
  },

  //Meal API calls
  getMeals: (trackerId) => {
    return axios.get("http://localhost:8080/api/trackers/" + trackerId + "/meals/");
  },
  saveMeal: (trackerId, meal) => {
    return axios.post("http://localhost:8080/api/trackers/" + trackerId + "/meals/", meal);
  },
  updateMeal: (trackerId, meal) => {
    return axios.put("http://localhost:8080/api/trackers/" + trackerId + "/meals/" + meal.id, meal);
  },
  deleteMeal: (trackerId, meal) => {
    return axios.delete("http://localhost:8080/api/trackers/" + trackerId + "/meals/" + meal.id);
  },

  //Food API calls
  getFoods: (mealId) => {
    return axios.get("http://localhost:8080/api/meals/" + mealId+ "/food/");
  },
  saveFood: (mealId, food) => {
    return axios.post("http://localhost:8080/api/meals/" + mealId+ "/food/", food);
  },
  updateFood: (mealId, food) => {
    return axios.put("http://localhost:8080/api/meals/" + mealId+ "/food/" + food.id, food);
  },
  deleteFood: (mealId, food) => {
    return axios.delete("http://localhost:8080/api/meals/" + mealId+ "/food/" + food.id);
  }
}