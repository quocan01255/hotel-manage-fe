import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Spin } from 'antd';
ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,LinearScale,BarElement);
function DoanhThuTheoThangChart(props) {
    const [labels,setLables] =useState(["Tháng 1","Tháng 2","Tháng 3","Tháng 4","Tháng 5","Tháng 6","Tháng 7","Tháng 8","Tháng 9","Tháng 10","Tháng 11","Tháng 12",]);
    const [data,setData] =useState([]);
    

    useEffect(() => {       
      fetch('http://localhost:3001/bookings')
        .then((response) => response.json())
        .then((accounts) => {      
          setData(accounts)
        })
      
        .catch((error) => {
        });
    }, [])
  
    return (
   

<Bar 
    data={{
      labels: labels,
      datasets: [
        {
          label: "Doanh thu theo tháng năm "+props.year,
          backgroundColor: [
            "#3e95cd",
            "#8e5ea2",
            "#3cba9f",
            "#c45850",
            "#e8c3b9",
          ],
          data: [65, 59, 80, 81, 56, 55, 40,80, 81, 56, 55, 100],
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
  
  )
}

export default DoanhThuTheoThangChart