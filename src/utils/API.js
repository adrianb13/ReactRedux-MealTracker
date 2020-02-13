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
  deleteTracker: (trackerId) => {
    return axios.delete("http://localhost:8080/api/trackers/" + trackerId);
  },

  //Meal API calls
  getMeals: (trackerId) => {
    return axios.get("http://localhost:8080/api/meals/" + trackerId);
  },
  saveMeal: (trackerId, meal) => {
    return axios.post("http://localhost:8080/api/meals/" + trackerId, meal);
  },
  updateMeal: (trackerId, meal) => {
    return axios.put("http://localhost:8080/api/meals/" + trackerId + "/" + meal.id, meal);
  },
  deleteMeal: (mealId) => {
    return axios.delete("http://localhost:8080/api/meals/" + mealId);
  },

  //Food API calls
  getFoods: (mealId) => {
    return axios.get("http://localhost:8080/api/food/" + mealId);
  },
  saveFood: (mealId, food) => {
    return axios.post("http://localhost:8080/api/food/" + mealId, food);
  },
  updateFood: (mealId, food) => {
    return axios.put("http://localhost:8080/api/food/" + mealId+ "/" + food.id, food);
  },
  deleteFood: (foodId) => {
    return axios.delete("http://localhost:8080/api/food/" + foodId);
  }
}