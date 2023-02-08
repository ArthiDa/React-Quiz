import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Quizes = () => {
  const data = useLoaderData();
  const quizes = data.data;
  const { questions, id } = quizes;
  return (
    <div className="md:w-3/4 md:m-auto m-5">
      {questions.map((question) => (
        <Quiz
          key={question.id}
          correctAns={question.correctAnswer}
          ques={question.question}
          option={question.options}
        ></Quiz>
      ))}
    </div>
  );
};

export default Quizes;
