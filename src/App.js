import React, { useEffect, useState } from "react";
import axios from "axios";
import NasaInfo from "./components/NasaInfo";
import "./App.css";

const nasaKey = "g0skeNkpcDgjCeQob8TmhszhtLkofk0HPVlQybOs";

function App() {
  const [nasaData, setNasaData] = useState({});
  const [date, setDate] = useState((new Date()).toISOString().substring(0,10)); 

  const dateChange = (e) => {
    setDate(e.target.value);
  }

  useEffect(
    () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${nasaKey}&date=${date}`)
    .then((res) => {console.log("Nasa Datası: ", res.data);
    setNasaData(res.data);
  })
    .catch((err) => {console.error("hata alındı!", err)});
    }, [date]
  );

  return (
    <div className="App">
      <label>
        Lütfen tarih seçiniz
        <input type="date" onChange={dateChange} value={date}/>
      </label>
     <NasaInfo nasaData={nasaData} date={date}/>
    </div>
  );
}

export default App;
