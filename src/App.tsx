import { Button, TextField } from '@mui/material';
import React from 'react';
import './App.css';
import sound from "./assets/soundOfMetronome.mp3";


function App() {
  const [tempo,setTempo]=React.useState("");

  const changeTempo=(e:any)=>{
    setTempo(e.target.value);
  }

  
      const startTempo=()=>{
        const calcTempo:number=(80/60)*1000;
        setInterval(()=>{
       
        const audio =new Audio(sound);
        audio.play();
      },calcTempo)
      }
   

  return (
    <div className="App">
      <h1>My Metronome</h1>
     <TextField id="outlined-basic" label="tempo" variant="outlined" onChange={changeTempo} value={tempo}/>
    <Button onClick={startTempo}>start</Button> 
    </div>
  );
}

export default App;
