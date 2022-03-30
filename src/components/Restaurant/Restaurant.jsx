import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";

const Restaurant = () => {
  const [input, setInput] = useState("");
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [input]);
  return (
    <div className="xl:container mx-auto">
      {/* input value grap  */}
      <div className=" mx-auto text-center mt-10">
        <input
          className="w-1/2 mx-auto p-2 border border-pink-200 outline-0 rounded focus:shadow-lg"
          type="text"
          placeholder="Search For A Meal"
          onInput={(e) => setInput(e.target.value)}
        />
      </div>
      {/* pass meal a component */}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-10">
        {meals
          ? meals.map((meal) => <Meal meal={meal} key={meal.idMeal}></Meal>)
          : "not found"}
      </div>
    </div>
  );
};

export default Restaurant;
