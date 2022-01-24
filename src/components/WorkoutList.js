import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import Trashcan from "../assets/trashcan.svg";
import { projectFirestore } from "../firebase/config";

// Styles
import "./WorkoutList.css";

export default function WorkoutList({ workouts }) {
  const { mode } = useTheme();

  if (workouts.length == 0) {
    return <div className="error">No workouts to load...</div>;
  }

  const deleteItem = (id) => {
    projectFirestore.collection("workouts").doc(id).delete();
  };

  return (
    <div className="workout-list">
      {workouts.map((workout) => (
        <div key={workout.id} className={`card ${mode}`}>
          <h3>{workout.title}</h3>
          <p>Difficulty level: {workout.experience}</p>
          <div>{workout.about.substring(0, 100)}...</div>
          <Link to={`/Total_Titans/workouts/${workout.id}`}>Read More</Link>
          <img
            className="delete"
            src={Trashcan}
            onClick={() => deleteItem(workout.id)}
          />
        </div>
      ))}
    </div>
  );
}
