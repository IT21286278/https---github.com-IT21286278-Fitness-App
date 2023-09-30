import React, { createContext, useState } from 'react';

const FinessItems = createContext();

const FitnessProvider = ({ children }) => {
  const [completedWorkouts, setCompletedWorkouts] = useState([]);
  const [Workout, setWorkout] = useState(0);
  const [caloriesBurnt, setCaloriesBurnt] = useState(0);
  const [minutesWorkedOut, setMinutesWorkedOut] = useState(0);

  return (
    <FinessItems.Provider
      value={{
        completedWorkouts,
        setCompletedWorkouts,
        Workout,
        setWorkout,
        caloriesBurnt,
        setCaloriesBurnt,
        minutesWorkedOut,
        setMinutesWorkedOut,
      }}
    >
      {children}
    </FinessItems.Provider>
  );
};

export { FitnessProvider, FinessItems };
