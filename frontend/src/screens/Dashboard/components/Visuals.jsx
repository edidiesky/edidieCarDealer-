import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";
import { getCustomerOrderStats } from "../../../Features";
import { useSelector, useDispatch } from "react-redux";

export default function Visuals() {
  // const { orderStats, isStatLoading } = useSelector((store) => store.order);

  // console.log(orderStats);
  // const OrderStatdate = orderStats?.map((stats) => {
  //   const { date, totalQuantity, averageOrderQuantity } = stats;
  //   return date;
  // });

  // const OrderStatQuantity = orderStats?.map((stats) => {
  //   const { date, totalQuantity, averageOrderQuantity } = stats;
  //   return totalQuantity;
  // });
  // const OrderStatAQuantity = orderStats?.map((stats) => {
  //   const { date, totalQuantity, averageOrderQuantity } = stats;
  //   return averageOrderQuantity;
  // });
  const dispatch = useDispatch();

  const { counts, dates, isLoading } = useSelector((store) => store.product);
  const [data, setData] = useState({
    series: [{ data: counts, name: "Cars" }],
    options: {
      chart: {
        height: 350,
        type: "line",
        fontFamily: "Barlow",
        foreColor: "var(--blue-1)",
        fontSize: "30px",
        textTransform: "capitalize",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["var(--blue-1)"],
      stroke: {
        curve: "straight",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: dates,
      },
    },
  });
 

  return (
    <>
      <VisualsWrapper>
        <h3>Product Trends by Month</h3>
        <Chart
          options={data.options}
          series={data.series}
          type="bar"
          width={"100%"}
          height={450}
        />
      </VisualsWrapper>
    </>
  );
}

const VisualsWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  background: var(--white);
  display: flex;
  border-radius: 6px;
  flex-direction: column;
  h3 {
    font-size: 2rem;
    color: var(--text-color);
    font-weight: 600;
    text-transform: capitalize;
    font-family: "Barlow", sans-serif;
  }
`;
