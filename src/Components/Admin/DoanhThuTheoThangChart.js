import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Spin } from 'antd';
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

function DoanhThuTheoThangChart(props) {
  const [labels, setLables] = useState(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December",]);
  const [data, setData] = useState([]);
  const [price, setPrice] = useState([]);

  useEffect(() => {
    setData(props.bookings)

    let priceMonth = []
    props.bookings.forEach((booking) => {
      const [year, month, day] = booking.booking_date.split('-')
      if (year == props.year) {
        if (priceMonth[month - 1]) {
          priceMonth[month - 1] += parseFloat(booking.total_price)
        } else {
          priceMonth[month - 1] = parseFloat(booking.total_price)
        }
      }
    })
    setPrice(priceMonth)
  }, [props.year, props.bookings])

  return (
    <Bar
      data={{
        labels: labels,

        datasets: [
          {
            label: "Revenue by year " + props.year,
            backgroundColor: [
              "#3e95cd",
              "#8e5ea2",
              "#3cba9f",
              "#c45850",
              "#e8c3b9",
            ],
            data: price
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