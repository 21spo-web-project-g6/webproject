import { chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";
import { useEffect, useState } from "react";

const URL = "http://localhost:3001/";

function App() {
  
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(URL).then((response) => {
      console.log(response.data);
      setTasks(response.data);
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
          xAxisKey: "Year",
          yAxisKey: "Annualy",
        },
        pointRadius: 1,
      },
      {
        label: "Lowest temperature",
        data: tasks,
        borderColor: "#ff00ff",
        backgroundColor: "rgba(255, 99, 132, 0.5",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Lowtemp",
        },
        pointRadius: 1,
      },
      {
        label: "Highest temperature",
        data: tasks,
        borderColor: "#00ffff",
        backgroundColor: "rgba(255, 99, 132, 0.5",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "Hightemp",
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
    <div className="App">
      <div style={{ width: "1000px" }}>
        <Line options={options} data={data} />

        {tasks.map((task) => (
          <p>
            {task.Year} {task.Annualy} {task.Hightemp} {task.Lowtemp}
          </p>
        ))}
      </div>
    </div>
  );
}

export default App;
