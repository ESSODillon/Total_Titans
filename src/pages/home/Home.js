import { useFetch } from "../../hooks/useFetch";

// Styles
import "./Home.css";

import React from "react";

export default function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/workouts");

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {data && data.map((workout) => <h2 key={workout.id}>{workout.title}</h2>)}
    </div>
  );
}
