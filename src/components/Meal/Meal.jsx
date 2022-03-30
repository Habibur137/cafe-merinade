import React from "react";

const Meal = ({ meal }) => {
  const { strMeal, strMealThumb } = meal;
  console.log(meal);
  return (
    <div>
      <img src={strMealThumb} alt="" />
      <h4>{strMeal}</h4>
    </div>
  );
};

export default Meal;
