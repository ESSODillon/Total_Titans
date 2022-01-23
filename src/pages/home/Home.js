import React from "react";
import { useFetch } from "../../hooks/useFetch";

// Styles
import "./Home.css";

// Components
import WorkoutList from "../../components/WorkoutList";

export default function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/workouts");

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && <WorkoutList workouts={data} />}
    </div>
  );
}
