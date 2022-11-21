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
        label: "Annually temperature",
        data: tasks,
        borderColor: "rgb(255, 99, 132",
        backgroundColor: "rgba(255, 99, 132, 0.5",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "annualy",
        },
        pointRadius: 1,
      },
      {
        label: "Lowest temperature",
        data: tasks,
        borderColor: "#ff00ff",
        backgroundColor: "rgba(255, 99, 132, 0.5",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "lowtemp",
        },
        pointRadius: 1,
      },
      {
        label: "Highest temperature",
        data: tasks,
        borderColor: "#00ffff",
        backgroundColor: "rgba(255, 99, 132, 0.5",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "hightemp",
        },
        pointRadius: 2,
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
        text: "demo Global temperature",
      },
    },
    scales: {
      Year: {
        type: "linear",
        display: true,
        position: "right",
      },
    },
  };

  return (
    <div className="V1">
      <div style={{ width: "1000px" }}>
        <Line options={options} data={data} />

        {tasks.map((task) => (
          <p>
            Id:{task.id} Year:{task.year} Annually:{task.annualy} High:
            {task.hightemp} Low:{task.lowtemp}
          </p>
        ))}
      </div>
    </div>
  );
}

export default V1;
