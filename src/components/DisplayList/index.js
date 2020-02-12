import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./displayList.css";

/* Items Needed to Pass:
  props.show: true/false,
  props.header: "Tracker", "Meal", or "Meal Items/Food",
  props.add: Add link string ("Tracker", "Meal", or "Meal Items/Food"),
  props.url: link that will be used to pass params on whether we are adding a new tracker, meal, or food
  props.list: [array of trackers, meals, food],
  props.trackerId: (if available),
  props.mealId: (if available),
  props.selected: (selection function)
*/

const DisplayList = (props) => {
  return (
    <div>
      <div className="header">{props.header} {props.group}</div>
      {props.show ? (
        <div>
          <div className="listGuide">(Select a {props.add} to view)</div>
          {props.list.map(item => (
            <div key={item.id} onClick={() => props.selected(props.header, item.id)}>
              {props.header === "Meals" ? (
                <div className="listItem">{item.name} <span className="date">{item.createdAt}</span></div>
              ):(
                <div className="listItem">{item.name}</div>
              )}
            </div>
          ))}
          <br></br>
          <Link to={props.url}>
            <div className="addItem">Add a {props.add}</div>
          </Link>
          <br></br>
        </div>
      ):(
        <div>
          <div>Not Available</div>
          <br></br>
          <Link to={props.url}>
            <div className="addItem">Add a {props.add}</div>
          </Link>
          <br></br>
        </div>
      )}
    </div>
  )
};


export default withRouter(DisplayList);