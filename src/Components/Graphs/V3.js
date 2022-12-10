import { chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Chart } from 'chart.js';
import 'chartjs-adapter-date-fns';
import axios from "axios";
import { useEffect, useState } from "react";
import GraphCSS from './Graph.module.css'

const URL4 = "http://localhost:3001/4";
const URL5 = "http://localhost:3001/5";
const URL6 = "http://localhost:3001/6";
const URL7 = "http://localhost:3001/7";
const URL8 = "http://localhost:3001/8";

function V3() {
    const [tasks1, setTasks1] = useState([]);
    const [tasks2, setTasks2] = useState([]);
    const [tasks3, setTasks3] = useState([]);
    const [tasks4, setTasks4] = useState([]);
    const [tasks5, setTasks5] = useState([]);
   
    useEffect(() => {
      axios
        .get(URL4)
        .then((response) => {
          console.log(response.data);
          setTasks1(response.data);
        })
        .catch((error) => {
          alert(error.response.data.error);
        });
    }, []);

    useEffect(() => {
        axios
          .get(URL5)
          .then((response) => {
            console.log(response.data);
            setTasks2(response.data);
          })
          .catch((error) => {
            alert(error.response.data.error);
          });
      }, []);
    
    useEffect(() => {
        axios
          .get(URL6)
          .then((response) => {
            console.log(response.data);
            setTasks3(response.data);
          })
          .catch((error) => {
            alert(error.response.data.error);
          });
      }, []);

    useEffect(() => {
        axios
          .get(URL7)
          .then((response) => {
            console.log(response.data);
            setTasks4(response.data);
          })
          .catch((error) => {
            alert(error.response.data.error);
          });
      }, []);

    useEffect(() => {
        axios
          .get(URL8)
          .then((response) => {
            console.log(response.data);
            setTasks5(response.data);
          })
          .catch((error) => {
            alert(error.response.data.error);
          });
      }, []);
  
    const data = {
      datasets: [
        {
            label: "Annual CO2 measurements",
            data: tasks2,
            borderColor: "rgba(232, 97, 12, 0.8)",
            backgroundColor: "rgba(232, 97, 12, 0.8)",
            borderWidth: 2,
            parsing: {
              xAxisKey: "Year",
              yAxisKey: "Mean",
            },
            pointRadius: 1,
          },
        {
          label: "Monthly CO2 measurements",
          data: tasks1,
          borderColor: "rgba(191, 8, 242, 0.8)",
          backgroundColor: "rgba(191, 8, 242, 0.8)",
          borderWidth: 2,
          parsing: {
            xAxisKey: "Year",
            yAxisKey: "Average",
          },
          pointRadius: 1,
        },

        {
          label: "Ice Core DE08 Measurements",
          data: tasks3,
          borderColor: "rgba(30, 8, 242, 0.8)",
          backgroundColor: "rgba(30, 8, 242, 0.8)",
          borderWidth: 2,
          parsing: {
            xAxisKey: "Year",
            yAxisKey: "Co2",
          },
          pointRadius: 1,
        },
        {
          label: "Ice Core DE08-2 Measurements",
          data: tasks4,
          borderColor: "rgba(11, 232, 59, 0.8)",
          backgroundColor: "rgba(11, 232, 59, 0.8)",
          borderWidth: 2,
          parsing: {
            xAxisKey: "Year",
            yAxisKey: "Co2",
          },
          pointRadius: 1,
        },
        {
          label: "Ice Core DSS Measurements",
          data: tasks5,
          borderColor: "rgba(232, 11, 27, 0.8)",
          backgroundColor: "rgba(232, 11, 27, 0.8)",
          borderWidth: 2,
          parsing: {
            xAxisKey: "Year",
            yAxisKey: "Co2",
          },
          pointRadius: 1,
        },
        {
          label: "Formula for gunpowder, used for fire arrows, incendiary projectiles, smoke bombs",
          type:"line",
          data: [        
            {x: '1044-01-01', y: 271},
          ],
          borderColor: "rgba(0, 200, 0, 1)",
          backgroundColor: "rgba(0, 200, 0, 1)",
          showline: false,
          hidden: true,
          fill: false,
          pointRadius: 3,
        },
        {
          label: "Bubonic plague caused by the Black Death bacillus Yersinia pestis kills a third of the human population across much of Europe,",
          type:"line",
          data: [        
            {x: '1346-01-01', y: 271},         
          ],
          borderColor: "rgba(0, 200, 0, 1)",
          backgroundColor: "rgba(0, 200, 0, 1)",
          showline: false,
          hidden: true,
          fill: false,
          pointRadius: 3,
        },
        {
          label: "Mass production of spun textiles, mechanised by water power; coal-fired and steam-powered production of iron and steel",
          type:"line",
          data: [       
            {x: '1780-01-01', y: 271},         
          ],
          borderColor: "rgba(0, 200, 0, 1)",
          backgroundColor: "rgba(0, 200, 0, 1)",
          showline: false,
          hidden: true,
          fill: false,
          pointRadius: 3,
        },
        {
          label: "First commercially viable power stations, coal-fired",
          type:"line",
          data: [        
            {x:  '1882-01-01', y: 271},          
          ],
          borderColor: "rgba(0, 200, 0, 1)",
          backgroundColor: "rgba(0, 200, 0, 1)",
          showline: false,
          hidden: true,
          fill: false,
          pointRadius: 3,
        },
        {
          label: "First nuclear power plant",
          type:"line",
          data: [ 
            {x: '1954-01-01', y: 271},
          ],
          borderColor: "rgba(0, 200, 0, 1)",
          backgroundColor: "rgba(0, 200, 0, 1)",
          showline: false,
          hidden: true,
          fill: false,
          pointRadius: 3,
        },
      ],
    };
  
    const options = {
      
      responsive: true,
      plugins: {
        legend: {
          position: "top",

        },
        title: {
          display: true,
          text: "V3V4 Hawaii Co2 measurements + Ice Core measurements",
        },
      },
      scales: {
        yAxes: {
          type: "linear",
          title: {
            color: "white",
            display: true,
            text: "Co2 Mole Fraction (ppm)",
            position: "left",
          },
            
        },
        xAxes: {
          type: "time",
          
          title: {
            color: "white",
            display: true,
            text: "Year",
            position: "bottom",
          },
          displayFormats: {
            Year: 'Y',
            
            } ,
          position: "bottom",
        },
        
      },
    };
  
    return (
      <div className={GraphCSS.container}>
        <Line options={options} data={data} />
        <h1><a href="https://gml.noaa.gov/ccgg/trends/">Link</a> to V3 data measurement description.</h1>
        <h1><a href="https://gml.noaa.gov/ccgg/about/co2_measurements.html">Link</a> to V3 data sources.</h1>
        <h1><a href="https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html">Link</a> to V4 data measurement description.</h1>
        <h1><a href="https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat">Link</a> to V4 data source.</h1>
      </div>
    );
  }

export default V3;