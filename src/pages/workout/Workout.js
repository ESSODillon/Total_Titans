import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

// Styles
import "./Workout.css";

export default function Workout() {
  const { id } = useParams();
  const url = "http://localhost:3000/workouts/" + id;
  const { data: workout, isPending, error } = useFetch(url);

  return (
    <div className="workout">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {workout && (
        <>
          <h2 className="page-title">{workout.title}</h2>
          <p className="experience">
            Recommended for level: {workout.experience}
          </p>
          <ul className="equipment">
            <span>Equipment: </span>
            {workout.equipment.map((equip) => (
              <li key={equip}>{equip}</li>
            ))}
          </ul>
          <ul className="exercises">
            <span>Exercises: </span>
            {workout.exercises.map((exc) => (
              <li key={exc}>{exc}</li>
            ))}
          </ul>

          <p className="reps">Reps: {workout.reps}</p>
          <p className="rest">Reps: {workout.rest}</p>
          <p className="about">{workout.about}</p>
        </>
      )}
    </div>
  );
}
