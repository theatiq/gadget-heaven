import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Statistics = () => {
  const data = useLoaderData();

  return (
    <div>
      <h1 className="text-xl text-center mb-5">Title vs. Price</h1>
      <BarChart
        width={1200}
        height={400}
        data={data}
        barSize={20}
        margin={{
          top: 0,
          right: 30,
          left: 20,
          bottom: 180,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="product_title"
          angle={-90}
          dx={-5}
          dy={10}
          textAnchor="end"
        />{" "}
        {/* Use the product name key */}
        <YAxis />
        <Tooltip />
        <Legend layout="horizontal" verticalAlign="top" align="center" />
        <Bar
          dataKey="price"
          fill="#9538E2"
          name="Price"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
      </BarChart>
    </div>
  );
};

export default Statistics;
