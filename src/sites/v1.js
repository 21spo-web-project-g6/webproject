import { chart} from "chart.js/auto";
import { Line } from "react-chartjs-2";
import GlobalTemperaturedata from "./data/GlobalTemperature.json";
import axios from 'axios';
import { useEffect, useState } from 'react';

const URL = 'http://localhost:3001/'

function App() {

  const [Year, setYear] = useState('')
  const [Annually, setAnnually] = useState('')
  const [Hightemp, setHightemp] = useState('')
  const [lowtemp, setLowtemp] = useState('')

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        console.log(response.data)
        setYear(response.data.drinks[0].Year);
        setAnnually(response.data.drinks[0].strAnnually);
        setHightemp(response.data.drinks[0].strHightemp);
        setLowtemp(response.data.drinks[0].strLowtemp);
      })

  }, [])
  

  const data = {
    datasets: [
      {
        label: "Annually temperature",
        data: [URL],
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
        data: [URL],
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
        data: [URL],
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
