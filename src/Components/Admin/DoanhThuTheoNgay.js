import React, { useEffect, useState } from 'react'
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement,Title,Tooltip,LegendElement, Legend, CategoryScale, LinearScale, BarElement,LineElement ,Point,PointElement,ChartComponent} from "chart.js";


import { Spin } from 'antd';
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function DoanhThuTheoNgay(props) {
  
    const [labels,setLables]=useState([]);
    const [data,setData] =useState([]);   
  return (
    <Line
    data={{
      labels: labels,
      datasets: [
        {
          data: data,
          label: "Doanh thu (vnd)",
          borderColor: "#8e5ea2",
          fill: false
        }
       
      ]
    }}
    options={{
      title: {
        display: true,
        text: "World population per region (in millions)"
      },
      legend: {
        display: true,
        position: "bottom"
      }
    }}
  />

  )
}

export default DoanhThuTheoNgay