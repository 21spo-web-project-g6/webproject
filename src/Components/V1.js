import { chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { useEffect, useState } from "react";

const URL1 = "http://localhost:3001/1";
const URL2 = "http://localhost:3001/2";

function V1() {
  const [tasks1, setTasks1] = useState([]);
  const [tasks2, setTasks2] = useState([]);

  useEffect(() => {
    axios.get(URL1).then((response) => {
      console.log(response.data);
      setTasks1(response.data);
    })
    .catch((error) => {
      alert(error.response.data.error);
    });
    
  }, []);

  useEffect(() => {
    axios.get(URL2).then((response) => {
      console.log(response.data);
      setTasks2(response.data);
    })
    .catch((error) => {
      alert(error.response.data.error);
    });
    
  }, []);

  const data = {
    datasets: [
      {
        label: "Annual Global",
        data: tasks2,
        borderColor: "rgba(191, 8, 242, 0.8)",
        backgroundColor: "rgba(191, 8, 242, 0.8)",
        xAxisID: 'x',
        
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "AnomalyGlobalAnnually",
        },
        pointRadius: 1 ,
      },
      {
        label: "Annual Northern",
        data: tasks2,
        borderColor: "rgba(232, 97, 12, 0.8)",
        backgroundColor: "rgba(232, 97, 12, 0.8)",
        xAxisID: 'x',
        
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "AnomalyNorthernAnnually",
        },
        pointRadius: 1,
      },
      {
        label: "Annual Southern",
        data: tasks2,
        borderColor: "rgba(30, 8, 242, 0.8)",
        backgroundColor: "rgba(30, 8, 242, 0.8)",
        xAxisID: 'x',
        
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "AnomalySouthernAnnually",
        },
        pointRadius: 1,
      },
      {
        label: "Monthly Global",
        data: tasks1,
        borderColor: "rgba(11, 232, 59, 0.8)",
        backgroundColor: "rgba(11, 232, 59, 0.8)",
        
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "AnomalyGlobalMonthly",
        },
        pointRadius: 1,
      },
      {
        label: "Monthly Northern",
        data: tasks1,
        borderColor: "rgba(232, 11, 27, 0.8)",
        backgroundColor: "rgba(232, 11, 27, 0.8)",
        
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "AnomalyNorthernMonthly",
        },
        pointRadius: 1,
      },
      {
        label: "Monthly Southern",
        data: tasks1,
        borderColor: "rgba(232, 211, 11, 0.8)",
        backgroundColor: "rgba(232, 211, 11, 0.8)",
        
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "AnomalySouthernMonthly",
        },
        pointRadius: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    Plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "V1",
      },
    },
    
    scales: {
      Year : {
        type: "linear",
        display: true,
        position: "right",
      },
    },
  };

  return (
    <div className="V1">
      <div style={{ width: "2000px" }}>
        <Line options={options} data={data} />

        {tasks1.map((task) => (
          <p>
            {task.Id} {task.Year} {task.AnomalyGlobalMonthly} {task.AnomalyNorthernMonthly} {task.AnomalySouthernMonthly}     
          </p>
        ))}

        {tasks2.map((task2) => (
          <p>
            {task2.Id} {task2.Year} {task2.AnomalyGlobalMonthly} {task2.AnomalyNorthernMonthly} {task2.AnomalySouthernMonthly}     
          </p>
        ))}
      </div>
    </div>
  );
}

export default V1;
