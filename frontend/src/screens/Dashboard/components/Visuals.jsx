import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Chart from "react-apexcharts";
import { getCustomerOrderStats } from "../../../Features";
import { useSelector, useDispatch } from "react-redux";

export default function Visuals() {
  const dispatch = useDispatch();
  const { orderStats, isStatLoading } = useSelector((store) => store.order);

  console.log(orderStats);
  const OrderStatdate = orderStats?.map((stats) => {
    const { date, totalQuantity, averageOrderQuantity } = stats;
    return date;
  });

  const OrderStatQuantity = orderStats?.map((stats) => {
    const { date, totalQuantity, averageOrderQuantity } = stats;
    return totalQuantity;
  });
  const OrderStatAQuantity = orderStats?.map((stats) => {
    const { date, totalQuantity, averageOrderQuantity } = stats;
    return averageOrderQuantity;
  });

  // const [data, setData] = useState({
  //   series: [
  //     {
  //       name: "Net Profit",
  //       data: OrderStatQuantity,
  //     },
  //   ],
  //   options: {
  //     chart: {
  //       type: "bar",
  //       height: 450,
  // fontFamily: "Montserrat",
  // foreColor: "#081b36",
  // fontSize: "20px",
  //     },
  //     plotOptions: {
  //       bar: {
  //         horizontal: false,
  //         columnWidth: "55%",
  //         endingShape: "rounded",
  //       },
  //     },
  //     dataLabels: {
  //       enabled: false,
  //     },
  //     stroke: {
  //       show: true,
  //       width: 2,
  //       colors: ["transparent"],
  //     },
  //     xaxis: {
  //       categories: OrderStatdate,
  //     },
  //     yaxis: {
  //       title: {
  //         text: "Total Order",
  //       },
  //     },
  //     fill: {
  //       opacity: 1,
  //     },
  //     tooltip: {
  //       y: {
  //         formatter: function(val) {
  //           return "$" + val;
  //         },
  //       },
  //     },
  //   },
  // });
  const [data, setData] = useState({
    series: [
      {
        name: "Cars",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        fontFamily: "Barlow",
        foreColor: "#081b36",
        fontSize: "30px",
        textTransform: "capitalize",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      // title: {
      //   text: "Product Trends by Month",
      //   align: "left",
      // },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
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
          type="line"
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
