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
      {workout && <h1>{workout.title}</h1>}
    </div>
  );
}
