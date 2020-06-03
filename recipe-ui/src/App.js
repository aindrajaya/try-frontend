import React from 'react';
import {RandomMeal, Meal} from "./components";

function App() {
  return (
    <div className="App"> 
      <input type="text" />
        <RandomMeal />

        <Meal />
        <Meal />
    </div>
  );
}

export default App;

//TODOS
// 1. Search for Meals
// 2. Display the Result
// 3. Featured Meals
// 4. Favorite recipe