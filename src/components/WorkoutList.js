import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./WorkoutList.css";

export default function WorkoutList({ workouts }) {
  if (workouts.length == 0) {
    return <div className="error">No workouts to load...</div>;
  }
  return (
    <div className="workout-list">
      {workouts.map((workout) => (
        <div key={workout.id} className="card">
          <h3>{workout.title}</h3>
          <p>Difficulty level: {workout.experience}</p>
          <div>{workout.about.substring(0, 100)}...</div>
          <Link to={`/workouts/${workout.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}
