import ReactAudioPlayer from 'react-audio-player';
import './App.css';
import axios from "axios"
import { useEffect, useState } from 'react';
//import Download from './componrnts/pdf';

import {  } from "./audio/personnes.json";

function App() {

const [audio, setAudio]= useState([]);

useEffect(()=> {
  axios.get("./personnes.json").then((res)=>setAudio(res.data))
  .catch(err=> console.log(err))
},[]);

console.log("tessssssssssssssst",audio)
  return (
    <div className="App">
      {/* {audio && audio.map((el,key)=>(
        <>
        <h1 key={key}>{el.nom}</h1>
      <p>{el.sujets.sujet1.sujet1_1}</p>
        <ReactAudioPlayer
        src={el.sujets.sujet1.sujet1_1}
         autoPlay
         controls
       />
       </>
      )
        )} */}
       <ReactAudioPlayer
 src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
  autoPlay
  controls
/>
      <h1>audio play
      </h1>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
       
      {/* <audio control> ines </audio> */}

      
    </div>
  );
}

export default App;
