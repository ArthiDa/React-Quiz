import React from "react";
import { useLoaderData } from "react-router-dom";
import Courses from "../Courses/Courses";

const Home = () => {
  const courses = useLoaderData();
  return (
    <div>
      <Courses courses={courses}></Courses>
    </div>
  );
};

export default Home;
