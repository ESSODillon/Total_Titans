import React, { useEffect, useRef, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useHistory } from "react-router-dom";
import { useTheme } from "../../hooks/useTheme";

// Styles
import "./Create.css";

export default function Create() {
  const [title, setTitle] = useState("");
  const [rest, setRest] = useState("");
  const [reps, setReps] = useState("");
  const [about, setAbout] = useState("");
  const [experience, setExperience] = useState("");

  // Equipment state
  const [newEquipment, setNewEquipment] = useState("");
  const [equipment, setEquipment] = useState([]);
  const equipmentInput = useRef(null);

  // Exercises state
  const [newExercises, setNewExercises] = useState("");
  const [exercises, setExercises] = useState([]);
  const exerciseInput = useRef(null);

  const { color } = useTheme();
  const { mode } = useTheme();

  const { postData, data, error } = useFetch(
    "http://localhost:3000/workouts",
    "POST"
  );

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    postData({ title, exercises, rest, reps, experience, equipment, about });
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const target = e.target.className;

    if (target == "btn-equipment") {
      const equip = newEquipment.trim();

      if (equip && !equipment.includes(equip)) {
        setEquipment((prevEquipment) => [...prevEquipment, equip]);
      }

      setNewEquipment("");
      equipmentInput.current.focus();
    }

    if (target == "btn-exercises") {
      const exc = newExercises.trim();

      if (exc && !exercises.includes(exc)) {
        setExercises((prevExercises) => [...prevExercises, exc]);
      }

      setNewExercises("");
      exerciseInput.current.focus();
    }
  };

  // Redirect the user when we get a data response

  useEffect(() => {
    if (data) {
      history.push("/Total_Titans/");
    }
  }, [data]);

  return (
    <div className={`create ${mode}`}>
      <h2 className="page-title">Add a New Workout</h2>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="column">
            <label className="workout-input">
              <span>Workout title:</span>
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                required
              />
            </label>

            {/* Equipment go here */}

            <label>
              <span>Workout equipment:</span>
              <div className="equipment">
                <input
                  type="text"
                  name="equipment"
                  onChange={(e) => setNewEquipment(e.target.value)}
                  value={newEquipment}
                  ref={equipmentInput}
                />
                <button
                  onClick={handleAdd}
                  className="btn-equipment"
                  style={{ background: color }}
                >
                  add
                </button>
              </div>
            </label>
            <p>
              Current equipment:{" "}
              {equipment.map((i) => (
                <em key={i}>{i}, </em>
              ))}
            </p>

            <label>
              <span>Reps:</span>
              <input
                type="text"
                onChange={(e) => setReps(e.target.value)}
                value={reps}
                required
              />
            </label>
          </div>
          <div className="column">
            <label>
              <span>Rest between sets:</span>
              <input
                type="text"
                onChange={(e) => setRest(e.target.value)}
                value={rest}
                required
              />
            </label>
            {/* Exercises go here */}

            <label>
              <span>Workout exercises:</span>
              <div className="exercises">
                <input
                  type="text"
                  name="equipment"
                  onChange={(e) => setNewExercises(e.target.value)}
                  value={newExercises}
                  ref={exerciseInput}
                />
                <button
                  onClick={handleAdd}
                  className="btn-exercises"
                  style={{ background: color }}
                >
                  add
                </button>
              </div>
            </label>
            <p>
              Current exercises:{" "}
              {exercises.map((i) => (
                <em key={i}>{i}, </em>
              ))}
            </p>

            <label>
              <span>Difficulty:</span>
              <input
                type="text"
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                required
              />
            </label>
          </div>
        </div>

        <label>
          <span>Description:</span>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            required
          />
        </label>

        <br />

        <button className="btn" style={{ background: color }}>
          submit
        </button>
      </form>
    </div>
  );
}
