import { chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { useEffect, useState } from "react";

const URL = "http://localhost:3001/";

function V1() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(URL).then((response) => {
      console.log(response.data);
      setTasks(response.data);
    })
    .catch((error) => {
      alert(error.response.data.error);
    });
    
  }, []);

  const data = {
    datasets: [
      {
        label: "Annual Global",
        data: tasks,
        borderColor: "rgb(255, 99, 132",
        backgroundColor: "rgba(255, 99, 132, 0.5",
        
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "AnomalyGlobalAnnually",
        },
        pointRadius: 1 ,
      },
      {
        label: "Annual Northern",
        data: tasks,
        borderColor: "#ff00ff",
        backgroundColor: "rgba(255, 99, 132, 0.5",
        
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "AnomalyNorthernAnnually",
        },
        pointRadius: 1,
      },
      {
        label: "Annual Southern",
        data: tasks,
        borderColor: "#00ffff",
        backgroundColor: "rgba(255, 99, 132, 0.5",
        
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "AnomalySouthernAnnually",
        },
        pointRadius: 2,
      },
      // {
      //   label: "Monthly Global",
      //   data: tasks,
      //   borderColor: "#00ffff",
      //   backgroundColor: "rgba(255, 99, 132, 0.5",
        
      //   parsing: {
      //     xAxisKey: " YearMonthly",
      //     yAxisKey: "AnonmalyGlobal",
      //   },
      //   pointRadius: 2,
      // },
      // {
      //   label: "Anomaly Southern",
      //   data: tasks,
      //   borderColor: "#00ffff",
      //   backgroundColor: "rgba(255, 99, 132, 0.5",
        
      //   parsing: {
      //     xAxisKey: " YearMonthly",
      //     yAxisKey: "AnonmalyNorthern",
      //   },
      //   pointRadius: 2,
      // },
      // {
      //   label: "AnomalySouthern",
      //   data: tasks,
      //   borderColor: "#00ffff",
      //   backgroundColor: "rgba(255, 99, 132, 0.5",
        
      //   parsing: {
      //     xAxisKey: "YearMonthly",
      //     yAxisKey: "AnomalySouthern",
      //   },
      //   pointRadius: 1,
      // },
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
      x: {
        type: "linear",
        display: true,
        position: "right",
      },
    },
  };

  return (
    <div className="V1">
      <div style={{ width: "1500px" }}>
        <Line options={options} data={data} />

        {tasks.map((task) => (
          <p>
            {task.Id} {task.YearMonthly} {task.AnomalySouthern}
          </p>
        ))}
      </div>
    </div>
  );
}

export default V1;
