import React from "react";
import Course from "../Course/Course";

const Courses = (props) => {
  const courses = props.courses.data;

  return (
    <div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5 md:mx-auto justify-items-center my-5">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
