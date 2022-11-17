import { chart} from "chart.js/auto";
import { Line } from "react-chartjs-2";
import GlobalTemperaturedata from "./data/GlobalTemperature.json";
import axios from 'axios';
import { useEffect, useState } from 'react';

const URL = 'http://localhost:3001/'

function App() {

  const [Year, setYear] = useState('')
  const [Annualy, setAnnualy] = useState('')
  const [Hightemp, setHightemp] = useState('')
  const [Lowtemp, setLowtemp] = useState('')
  const [v1, setv1] = useState('')

  useEffect(() => {
    axios.get(URL)
      .then((response) => {
        console.log(response.data)
        setYear(response.data[0].Year);
        setAnnualy(response.data[0].Annualy);
        setHightemp(response.data[0].Hightemp);
        setLowtemp(response.data[0].Lowtemp);
        setv1(response.data[0].v1);

      })

  }, [])

  const data = {
    datasets: [
      {
        label: "Annually temperature",
        data: [{Annualy}],
        borderColor: "rgb(255, 99, 132",
        backgroundColor: "rgba(255, 99, 132, 0.5",
        parsing: {
          xAxisKey: Year,
          yAxisKey: Annualy, 
        },
        pointRadius: 1,
      },
      {
        label: "Lowest temperature",
        data: [{Lowtemp}],
        borderColor: "#ff00ff",
        backgroundColor: "rgba(255, 99, 132, 0.5",
        parsing: {
          xAxisKey: Year,
          yAxisKey: Lowtemp, 
        },
        pointRadius: 1,
      },
      {
        label: "Highest temperature",
        data: [Hightemp],
        borderColor: "#00ffff",
        backgroundColor: "rgba(255, 99, 132, 0.5",
        parsing: {
          xAxisKey: Year,
          yAxisKey: Hightemp, 
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
        <p>Year {Year}</p>
        <p>Annualy {Annualy}</p>
        <p>Hightemp {Hightemp}</p>
        <p>Lowtemp {Lowtemp}</p>
        <p></p>
      </div>
    </div>
  );
}

export default App;
