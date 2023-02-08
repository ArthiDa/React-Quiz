import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainerm,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Bar,
  BarChart,
} from "recharts";
import Tag from "../Tag/Tag";

const Stats = () => {
  const data = useLoaderData();
  const problems = data.result;
  const tag = {};
  problems.map((problem) => {
    const { tags } = problem.problem;
    tags.map((t) => {
      if (tag[t]) {
        tag[t] += 1;
      } else {
        tag[t] = 1;
      }
    });
  });
  const TAG = [];
  for (const tg in tag) {
    let tempObj = {};
    tempObj.name = tg;
    tempObj.value = tag[tg];
    TAG.push(tempObj);
  }
  // console.log(TAG);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div>
      <h1 className="text-center font-bold text-2xl my-2">
        My Codeforces Statistics
      </h1>
      <div className="mx-5 my-5">
        <LineChart width={1200} height={400} data={TAG}>
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
      <div className="grid md:grid-cols-4 gap-3 mx-10 mb-5">
        {TAG.map((ta) => (
          <Tag title={ta.name} value={ta.value}></Tag>
        ))}
      </div>
    </div>
  );
};

export default Stats;
