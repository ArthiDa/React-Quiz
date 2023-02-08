import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quiz = ({ ques, correctAns, option }) => {
  // console.log(correctAns);
  const selectOption = (select) => {
    if (correctAns === select) {
      toast.success("Wow! Correct Answer. Good Job", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Alas! Wrong Answer. Try Again", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="border rounded md:p-10 p-5 border-black my-10">
      <h1 className="mb-5 font-bold text-lg text-red-600">{ques}</h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-3">
        <div
          onClick={() => selectOption(option[0])}
          className="border-2 p-5 font-bold text-md border-indigo-600 rounded-md hover:bg-yellow-400 cursor-pointer"
        >
          {option[0]}
        </div>
        <div
          onClick={() => selectOption(option[1])}
          className="border-2 p-5 font-bold text-md border-indigo-600 rounded-md hover:bg-yellow-400 cursor-pointer"
        >
          {option[1]}
        </div>
        <div
          onClick={() => selectOption(option[2])}
          className="border-2 p-5 font-bold text-md border-indigo-600 rounded-md hover:bg-yellow-400 cursor-pointer"
        >
          {option[2]}
        </div>
        <div
          onClick={() => selectOption(option[3])}
          className="border-2 p-5 font-bold text-md border-indigo-600 rounded-md hover:bg-yellow-400 cursor-pointer"
        >
          {option[3]}
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        ></ToastContainer>
      </div>
    </div>
  );
};

export default Quiz;
