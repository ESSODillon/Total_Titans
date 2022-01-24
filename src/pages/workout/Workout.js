import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { projectFirestore } from "../../firebase/config";

// Styles
import "./Workout.css";

export default function Workout() {
  const { id } = useParams();
  const { mode } = useTheme();

  const [workout, setWorkout] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore
      .collection("workouts")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setWorkout(doc.data());
        } else {
          setIsPending(false);
          setError("Could not find that workout");
        }
      });

    return () => unsub();
  }, [id]);

  // Update functionality
  const handleClick = () => {
    projectFirestore.collection("workouts").doc(id).update({});
  };

  return (
    <div className={`workout ${mode}`}>
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
          {/* Update button */}
          {/* <button onClick={handleClick}>Update me</button> */}
        </>
      )}
    </div>
  );
}
