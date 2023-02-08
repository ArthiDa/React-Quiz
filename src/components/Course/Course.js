import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { id, name, logo, total } = course;
  return (
    <div className="border rounded-md w-3/4 bg-white drop-shadow-md">
      <img className="w-full mx-auto" src={logo} alt="" />
      <h3 className="font-bold text-xl text-blue-500 p-2">{name}</h3>
      <p className="font-bold p-2">Total Quiz: {total}</p>
      <Link to={`/quiz/${id}`}>
        <button className="w-full p-2 bg-orange-300 border rounded-md font-bold text-white text-2xl hover:bg-orange-600">
          Start
        </button>
      </Link>
    </div>
  );
};

export default Course;
