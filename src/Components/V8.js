import { chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Chart } from "chart.js";
import "chartjs-adapter-date-fns";
import axios from "axios";
import { useEffect, useState } from "react";

const URL = "http://localhost:3001/12";

function V8() {
  const [tasks, setTasks] = useState([]);

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
  
  const data = {
    labels: tasks,
    datasets: [
      {
        label: "Afganistan",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Albania",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Algeria",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Andorra",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Anguilla & Barbuda",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Argentina",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Armenia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Aruba",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Australia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Austria",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Azerbaijan",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Bahamas",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Bahrain",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Bangladesh",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Afganistan",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Barbados",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Belarus",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Belgium",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Belize",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Benin",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Bermuda",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Bhutan",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Bonaire, Saint Estatius, Saba",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Bosnia and Herzegovina",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Botswana",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Brazil",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "British Virgin Islands",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Brunei Darussalam",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Bulgaria",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Burkina Faso",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Burundi",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Cambodia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Canada",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Cape Verde",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Central African Repuplic",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Chad",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Chile",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "China",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Colombia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Comoros",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Congo",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Cook Islands",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Costa Rica",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Côte d'Ivoire",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Croatia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Cuba",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Curaçao",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Cyprus",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Czech Repuplic",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "North Korea",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Democratic Republic of the Congo",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Denmark",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Djibouti",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Dominica",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Dominican Repuplic",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Ecuador",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Egypt",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "El Salvador",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Equatorial Guinea",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Eritrea",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Estonia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Ethiopia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Faroe Islands",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Micronesia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Fiji",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Finland",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "France",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "French Guiana",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "French Polynesia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Gabon",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Gambia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Georgia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Germany",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Ghana",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Greece",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Greenland",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Grenada",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Guadeloupe",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Guatemala",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Guinea",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Guinea-Bissau",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Guyana",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Haiti",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Honduras",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Hong Kong",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Hungary",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Iceland",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "India",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Indonesia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Iraq",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Ireland",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Iran",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Israel",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Italy",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Jamaica",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Japan",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Jordan",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Kazakhstan",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Kenya",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Kiribati",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Kosovo",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Kuwait",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Kyrgyzstan",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Laos",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Latvia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Lebanon",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Lesotho",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Liberia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Libya",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Liechtenstein",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Lithuania",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Luxembourg",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Macao",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "North Macedonia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Madagascar",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Malawi",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Maldives",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Mali",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Malta",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Marshall Islands",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Martinique",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Mauritania",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Mauritius",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Mayotte",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Mexico",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Mongolia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Montenegro",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Montserrat",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Morocco",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Mozambique",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Myanmar",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Namibia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Nauru",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Nepal",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Netherlands",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "New Caledonia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "New Zealand",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Nicaragua",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Niger",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Nigeria",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Niue",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Norway",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Afganistan",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Occupied Palestinian Territory",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Oman",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Pakistan",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Palau",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Panama",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Papua New  Guinea",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Paraguay",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Peru",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Philippines",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Bolivia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Poland",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Portugal",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Qatar",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Cameroon",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "South Korea",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Moldova",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "South Sudan",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Sudan",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Réunion",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Romania",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Russian Federation",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Rwanda",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Saint Helena",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Saint Lucia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Sint Maarten (Dutch part)",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Samoa",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Sao Tome and Principe",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Saudi Arabia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Senegal",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Serbia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Seychelles",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Sierra Leone",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Singapore",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Slovakia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Slovenia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Solomon Islands",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Somalia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "South Africa",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Spain",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Sri Lanka",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Saint Kitts and Nevis",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Saint Pierre and Miquelon",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Saint Vincent and the Grenadines",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Suriname",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Swaziland",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Sweden",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Swizerland",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Syria",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Taiwan",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Tajikistan",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Thailand",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Timor-Leste",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Togo",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Tonga",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Trinidad and Tobago",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Tunisia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Turkey",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Turkmenistan",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Turks and Caicos Islands",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Tuvalu",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Uganda",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Ukraine",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "United Arab Emirates",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "United Kingdom",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Tanzania",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "USA",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Uruguay",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Uzbekistan",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Vanuatu",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Venezuela",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Viet Nam",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Wallis and Futuna Islands",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Yemen",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Zambia",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
      },
      {
        label: "Zimbabwe",
        data: tasks,
        backgroundColor: "rgba(255, 141, 96, 0.8)",
        parsing: {
          xAxisKey: "Year",
          yAxisKey: "TempChange",
        },
        pointRadius: 1,
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
        text: "V7",
      },
    },

    scales: {
      y: {
        type: "linear",
        position: "left",
        min: 0,
        max: 1800,
        title: {
            display: true,
            color: "red",
            text: 'Million tonnes of CO2'
          }
      },
     
      x: {
        type: "linear",
        position: "bottom",
        min: 1959,
        max: 2020,
        title: {
            display: true,
            color: "red",
            text: 'Year'
          },
      },
    },
  };

  return (
    <div style={{ width: "1000x" }}>
      <Line options={options} data={data} />
      <p>
      Fossil CO2 emissions by country (territorial) by 1 million tonnes of CO2 from 1959-2020
      </p>
      <h1><a href="https://data.icos-cp.eu/licence_accept?ids=%5B%22lApekzcmd4DRC34oGXQqOxbJ%22%5D">Link to data sources.</a></h1>
      <h1><a href="https://www.icos-cp.eu/science-and-impact/global-carbon-budget/2021">Full details.</a></h1>
    </div>
  );
}

export default V8;