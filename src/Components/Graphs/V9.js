import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { useEffect, useState } from "react";

import GraphCSS from './Graph.module.css'

const URL13 = "http://localhost:3001/13";
const URL14 = "http://localhost:3001/14";
const URL15 = "http://localhost:3001/15";

function V9() {
  const [tasks1, setTasks] = useState([]);
  const [tasks2, setTasks2] = useState([]);
  const [tasks3, setTasks3] = useState([]);

  useEffect(() => {
    axios
      .get(URL13)
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
      .get(URL14)
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
      .get(URL15)
      .then((response) => {
        console.log(response.data);
        setTasks3(response.data);
      })
      .catch((error) => {
        alert(error.response.data.error);
      });
  }, []);


  const options = {
    responsive: true,
    radius: "70%",
    maintainAspectRatio: true,
    animation: false,

    legend: {
      display: false,
      circumference: "80%",
    },

    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          label: (tooltipItem) => {
            var dataIndex = tooltipItem.dataIndex;
            return (tooltipItem.dataset.labels[dataIndex] + ": " + tooltipItem.dataset.data[dataIndex]
            );
          }
        }
      }

    }
  };

  const data = {
    type: "doughnut",
    labels: ["Energy (73,3%)", "Industrial Processes (5,2%)", "Agriculture, Forestry & Land Use (18,4%)", "Waste (3,2%"],
    datasets: [
      {
        labels: ["Energy", "Industrial Processes", "Agriculture, Forestry & Land Use (AFOLU)", "Waste"],
        label: "D1",
        data: [73.2, 5.2, 18.4, 3.2],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", 'rgb(102, 255, 102)', 'rgb(255, 255, 0)'],
      },
      {
        label: "D2",
        labels: ["Transport", "Energy in buildings (elec and heat)", "Energy in industry", "Energy in Agri & Fishing", "Unallocated fuel combustion", "Fugitive emissions from energy", "Cement", "Chemical & petrochemical (industrial)", "Livestock & Manure", "Rice Cultivation", "Agricultural Soils", "Crop Burning", "Forest Land", "Cropland", "Grassland", "Landfills", "Wastewater"],
        data: [16.1, 17.5, 24.2, 1.7, 7.8, 5.8, 3.0, 2.2, 5.8, 1.3, 4.1, 3.5, 2.2, 1.4, 0.1, 1.9, 1.3],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(54, 162, 235)", 'rgb(102, 255, 102)', 'rgb(102, 255, 102)', 'rgb(102, 255, 102)', 'rgb(102, 255, 102)', 'rgb(102, 255, 102)', 'rgb(102, 255, 102)', 'rgb(255, 255, 0)', 'rgb(255, 255, 0)', 'rgb(255, 255, 0)'],
      },
      {
        label: "D2",
        labels: ["Road", "Aviation", "Rail", "Pipeline", "Ship", "Residential", "Commercial", "Iron and Steel", "Non-ferous metals", "Machinery", "Food and Tobacco", "Paper, pulp & printing", "Chemical & petrochemical (energy)", "Other industry", "Energy in Agri & Fishing", "Unallocated fuel combustion", "Coal", "Oil & Natural Gas", "Cement", "Chemical & petrochemical (industrial)", "Livestock & Manure", "Rice Cultivation", "Agricultural Soils", "Crop Burning", "Forest Land", "Cropland", "Grassland", "Landfills", "Wastewater"],
        data: [11.9, 1.9, 0.4, 0.3, 1.7, 10.9, 6.6, 7.2, 0.7, 0.5, 1.0, 0.6, 3.6, 10.6, 1.7, 7.8, 1.9, 3.9, 3.0, 2.2, 5.8, 1.3, 4.1, 3.5, 2.2, 1.4, 0.1, 1.9, 1.3],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(54, 162, 235)", 'rgb(102, 255, 102)', 'rgb(102, 255, 102)', 'rgb(102, 255, 102)', 'rgb(102, 255, 102)', 'rgb(102, 255, 102)', 'rgb(102, 255, 102)', 'rgb(102, 255, 102)', "rgb(255, 255, 0)", "rgb(255, 255, 0)"],
      }

    ],
  };

  return (
    <div className={GraphCSS.container} id={GraphCSS.v9}>
      <Doughnut options={options} data={data} />
      <div className={GraphCSS.sourceData}>
        <p>
          CO2 emission percentages by sectors.
        </p>
        <h1><a href="https://ourworldindata.org/uploads/2020/09/Global-GHG-Emissions-by-sector-based-on-WRI-2020.xlsx">Link</a> to data sources.</h1>
        <h1><a href="https://ourworldindata.org/emissions-by-sector#co2-emissions-by-sector">Full details.</a></h1>
      </div>
    </div>
  );
};

export default V9;

// style={{ position: "relative", margin: "auto", width: "80%" }}