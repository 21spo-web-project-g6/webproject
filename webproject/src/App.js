import { chart} from "chart.js/auto";
import { Line } from "react-chartjs-2";
import GlobalTemperaturedata from "./data/GlobalTemperature.json";

function App() {

  const data = {
    datasets: [
      {
        label: "Annually temperature",
        data: [...GlobalTemperaturedata],
        borderColor: "rgb(255, 99, 132",
        backgroundColor: "rgba(255, 99, 132, 0.5",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "Annually(DEG C)", 
        },
        pointRadius: 1,
      },
      {
        label: "Lowest temperature",
        data: [...GlobalTemperaturedata],
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
        data: [...GlobalTemperaturedata],
        borderColor: "#00ffff",
        backgroundColor: "rgba(255, 99, 132, 0.5",
        parsing: {
          xAxisKey: "year",
          yAxisKey: "hightemp", 
        },
        pointRadius: 2,
      }
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
        <Line options={options} data={data}/>
      </div>
    </div>
  );
}

export default App;
