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
  getMeals: () => {
    return axios.get("http://localhost:8080/api/meals/");
  },
  saveMeal: (meal) => {
    return axios.post("http://localhost:8080/api/meals/", meal);
  },
  updateMeal: (meal) => {
    return axios.put("http://localhost:8080/api/meals/" + meal.id, meal);
  },
  deleteMeal: (meal) => {
    return axios.delete("http://localhost:8080/api/meals/" + meal.id);
  },

  //Food API calls
  getFoods: () => {
    return axios.get("http://localhost:8080/api/food/");
  },
  saveFood: (food) => {
    return axios.post("http://localhost:8080/api/food/", food);
  },
  updateFood: (food) => {
    return axios.put("http://localhost:8080/api/food/" + food.id, food);
  },
  deleteFood: (food) => {
    return axios.delete("http://localhost:8080/api/food/" + food.id);
  }
}