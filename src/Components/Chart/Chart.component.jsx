import React,{useState, useEffect} from 'react'
import { fetchDailyData } from "../../API";
import {Line, Bar} from "react-chartjs-2";

import styles from "./Chart.module.css";


const Carts = ({data : {confirmed, recovered, deaths}, country}) => {

const [dailyData, setDailyData] = useState([]);

useEffect(() => {
const fetchApi = async ()=>{
  setDailyData(await fetchDailyData())
}


  fetchApi()
},[]);

const lineChart = dailyData.length ? (
  <Line
    data={{
      labels: dailyData.map(({ date }) => date),
      datasets: [
        {
          data: dailyData.map(({ confirmed }) => confirmed),
          label: "Infected",
          borderColor: "#3333ff",
          fill: true,
        },
        {
          data: dailyData.map(({deaths }) => deaths),
          label: "Deaths",
          borderColor: "red",
          backgroundColor: "rgb(225,0,0,0.5)",
          fill: true,
        },
      ],
    }}
  />
) : null;

const barChart = confirmed ? (
  <Bar
    data={{
      labels: ["infected", "recovered", "deaths"],
      datasets: [
        {
          label: "People",
          backgroundColor: [
            "rgb(0, 0, 225, 0.5)",
            "rgb(0, 225, 0, 0.5)",
            "rgb(225,0,0,0.5)",
          ],
          data: [confirmed.value, recovered.value, deaths.value]
        },
      ],
    }}
    options={{
      legend: {
        display: false,
        tittle: { display: true, text: `Current State in ${country}` },
      },
    }}
  />
) : null;

  return (
    <div className={styles.container}>
    {
      country? barChart : lineChart
    }
    </div>
  )
}

export default Carts
