import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Spin } from 'antd';
ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,LinearScale,BarElement);
function TopAccountChar(props) {
    const [loading,setLoading] =useState(true);
    const [labels,setLables] =useState([]);
    const [data,setData] =useState([]);
   
 

<Bar 
    data={{
      labels: labels,
      datasets: [
        {
          label: "Top "+props.top+" Account đặt tour nhiều nhất",
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#c45850",
            "#e8c3b9",
            
          ],
          data: data
        }
      ]
    }}
    options={{
      legend: { display: false },
      title: {
        display: true,
        text: "Predicted world population (millions) in 2050"
      }
    }}
  />
 
  
}

export default TopAccountChar