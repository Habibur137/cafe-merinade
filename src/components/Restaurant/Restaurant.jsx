import React, { useState } from "react";

const Restaurant = () => {
  const [input, setInput] = useState("");

  console.log(input);
  return (
    <div className="xl:container mx-auto">
      {/* input value grap  */}
      <div className=" mx-auto text-center">
        <input
          className="w-1/2 mx-auto p-2 border border-pink-200 outline-0 rounded focus:shadow-lg"
          type="text"
          placeholder="Search For A Meal"
          onInput={(e) => setInput(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Restaurant;
