import React, {useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Body from './body';
import styled from "styled-components";

const BlueH1 = styled.h1`
  color: #7F7FFF;
`;

const StyledDiv = styled.div`
width: 60%;
display: flex;
justify-content: space-between;
padding: 8px;
border-bottom: 2px solid white;
color: white};

transition: all 0.2s ease-in-out;
&:hover {
  transition: all 0.2s ease-in-out;
  background-color: purple;
}
`
// background-color: ${pr => pr.theme.primaryColor};

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
      <BlueH1>Nasa Photo of the Day for {nasaData.date}!</BlueH1>
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
