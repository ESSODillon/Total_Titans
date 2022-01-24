import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

// Styles
import "./WorkoutList.css";

export default function WorkoutList({ workouts }) {
  const { mode } = useTheme();

  if (workouts.length == 0) {
    return <div className="error">No workouts to load...</div>;
  }
  return (
    <div className="workout-list">
      {workouts.map((workout) => (
        <div key={workout.id} className={`card ${mode}`}>
          <h3>{workout.title}</h3>
          <p>Difficulty level: {workout.experience}</p>
          <div>{workout.about.substring(0, 100)}...</div>
          <Link to={`/Total_Titans/workouts/${workout.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
}
