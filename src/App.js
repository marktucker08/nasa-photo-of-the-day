import React, {useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Body from './body';

function App() {

  const [nasaData, setNasaData] = useState("");

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        console.log(res.data);
        setNasaData(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <div className="App">
      <h1>Nasa Photo of the Day for {nasaData.date}!</h1>
        <img src={nasaData.url} />
        <h2>{nasaData.title}</h2>
        {/* <p>
        <span role="img" aria-label='go!'>🚀</span> {nasaData.explanation} <span role="img" aria-label='go!'>🚀</span>
        </p> */}
        <Body body={nasaData} />
      <footer>
          <h3>Copyright: {nasaData.copyright}</h3>
      </footer>

    </div>
  );
}


export default App;
