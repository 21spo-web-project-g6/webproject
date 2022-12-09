import { chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import "chartjs-adapter-date-fns";
import axios from "axios";
import { useEffect, useState } from "react";
import GraphCSS from './Graph.module.css'
import ChartDataLabels from 'chartjs-plugin-datalabels';

const URL = "http://localhost:3001/11";
const URL2 = "http://localhost:3001/16";

function V7() {
  const [tasks, setTasks] = useState([]);
  const [tasks2, setTasks2] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        setTasks(response.data);
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(URL2)
      .then((response) => {
        console.log(response.data);
        setTasks2(response.data);
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  }, []);
  
  
  const data = {
  type:'Line',
    datasets: [
      {
        label: "Change in Global Average Surface Temperature (GAST) from present (0-5ka average)",
        data: tasks,
        borderColor: "rgba(255, 141, 96, 0.8)",
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        borderWidth: 1,
        yAxisID: 'y1',
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Carbon dioxide (ppm) 0-800k BP",
        data: tasks,
        borderColor: "rgba(15, 44, 233, 0.8)",
        backgroundColor: "rgba(15, 44, 233, 0.8)",
        borderWidth: 1,
        yAxisID: 'y2',
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Co2",
        },
        pointRadius: 1,
      },
      {
        label: "Early Homo erectus, direct ancestor of modern humans",
        type:"scatter",
        data: [
          {x: -2000000, y: -7}, 
        ],
        borderColor: "rgba(0, 200, 0, 1)",
        backgroundColor: "rgba(0, 200, 0, 1)",
        display: false,
        hidden: true,
        showline: false,
        fill: false,
        pointRadius: 3,
        
      },     
      {
        label: "Earliest control of fire, by Homo erectus ",
        type:"scatter",
        data: [
          {x: -1500000, y: -7}, 
        ],
        borderColor: "rgba(0, 200, 0, 1)",
        backgroundColor: "rgba(0, 200, 0, 1)",
        display: false,
        hidden: true,
        showline: false,
        fill: false,
        pointRadius: 3,
      },
      {
        label: "rise of Homo heidelbergensis in Africa and Europe",
        type:"scatter",
        data: [
          {x: -700000, y: -7}, 
        ],
        borderColor: "rgba(0, 200, 0, 1)",
        backgroundColor: "rgba(0, 200, 0, 1)",
        display: false,
        hidden: true,
        showline: false,
        fill: false,
        pointRadius: 3,
      },
      {
        label: "rise of Neanderthals Homo neanderthalensis across Europe",
        data: [{x: -450000, y: -7},],
        borderColor: "rgba(0, 200, 0, 1)",
        backgroundColor: "rgba(0, 200, 0, 1)",
        showline: false,
        hidden: true,
        fill: false,
        pointRadius: 3,
      },
      {
        label: "Prelude to Earth’s Last Glacial Period",
        type:"scatter",
        data: [{x: -122500, y: -7},],
        borderColor: "rgba(0, 200, 0, 1)",
        backgroundColor: "rgba(0, 200, 0, 1)",
        showline: false,
        hidden: true,
        fill: false,
        pointRadius: 3,
      },
      {
        label: "Most recent reversal of Earth’s magnetic poles",
        type:"scatter",
        data: [{x: -39500, y: -7},],
        borderColor: "rgba(0, 200, 0, 1)",
        backgroundColor: "rgba(0, 200, 0, 1)",
        showline: false,
        hidden: true,
        fill: false,
        pointRadius: 3,
      },
      {
        label: "Climate shift contributing to megafaunal extinctions and human cultural changes ",
        type:"scatter",
        data: [        
          {x: -10800, y: -6.8},         
        ],
        borderColor: "rgba(0, 200, 0, 1)",
        backgroundColor: "rgba(0, 200, 0, 1)",
        showline: false,
        hidden: true,
        fill: false,
        pointRadius: 3,
      },
      {
        label: "Earliest use of coal as fuel ",
        type:"scatter",
        data: [      
          {x: -2000, y: -6.6},         
        ],
        borderColor: "rgba(0, 200, 0, 1)",
        backgroundColor: "rgba(0, 200, 0, 1)",
        showline: false,
        hidden: true,
        fill: false,
        pointRadius: 3,
      },
      {
        label: "Firing of natural gas in southwest China",
        type:"scatter",
        data: [        
          {x:  290, y: -6.4},        
        ],
        borderColor: "rgba(0, 200, 0, 1)",
        backgroundColor: "rgba(0, 200, 0, 1)",
        showline: false,
        hidden: true,
        fill: false,
        pointRadius: 3,
      },
      {
        label: "Crop failures across the northern hemisphere caused by volcanic eruptions in Iceland",
        type:"scatter",
        data: [        
          {x: 536, y: -6.2},        
        ],
        borderColor: "rgba(0, 200, 0, 1)",
        backgroundColor: "rgba(0, 200, 0, 1)",
        showline: false,
        hidden: true,
        fill: false,
        pointRadius: 3,
      },
      {
        label: "Formula for gunpowder, used for fire arrows, incendiary projectiles, smoke bombs",
        type:"scatter",
        data: [        
          {x: 1044, y: -6},
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
        type:"scatter",
        data: [        
          {x: 1346, y: -5.8},         
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
        type:"scatter",
        data: [       
          {x: 1780, y: -5.6},         
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
        type:"scatter",
        data: [        
          {x:  1882, y: -5.4},          
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
        type:"scatter",
        data: [ 
          {x: 1954, y: -5.2},
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
      tooltip: {
        callbacks: {
          
        }
      },
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "V7+V10",
      },
      
      tooltips:{
      }
    },

    scales: {
      y1: {
        type: "linear",
        position: "left",
        min: -7.5,
        max: 2.5,
        title: {
            display: true,
            color: "red",
            text: 'Temperature change'
          }
      },
      y2: {
        type: "linear",
        position: "right",
        min:140,
        max:300,
        title: {
            display: true,
            color: "red",
            text: 'Carbon dioxide (ppm)'
          },   
      },
      
      x: {
        type: "linear",
        position: "bottom",
        min:-2010000,
        max:10000,
        
        title: {
            display: true,
            color: "red",
            text: 'Year'
          },
      },
    },
  };

  return (
    <div className={GraphCSS.container}>
      <Line options={options} data={data} />
      <p>
      V7 Evolution of global temperature over the past two million years + V10 Human Evolution and Activities
     </p>
      <h1><a href="http://carolynsnyder.com/papers/Snyder_Data_Figures.zip">Link</a> to data sources.</h1>
      <h1>Full <a href="https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf">details.</a></h1>
    </div>
  );
}

export default V7;

//DATAN TESTAUKSEEN
// {tasks.map((task) => (
//     <p>
//       {task.Id} {task.Year} {task.TempChange} {task.Co2}
//     </p>
//   ))}