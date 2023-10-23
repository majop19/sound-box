import { useState } from 'react';

const AudioButton = ({name, letter,sound, onClick}) => {
  
  const playSound = () => {
    const sound = document.getElementById(letter)
    sound.play();
    if (onClick) {
      onClick(name)
    }}
  
  return (<> 
          <button className="drum-pad" id={name} Name={name}onClick={playSound}>
          <audio className="clip" id={letter} src={sound}></audio>
          {letter}
          </button>
          </>)
}






function App() {
  const [nameSong, setNameSong] = useState("")
  
  const handleKeyDown = (event)  => {switch(event.key.toLowerCase())
    {case "q":
     let q = document.getElementById("Heater 1");
     q.click()
     break;
     case "w":
      let w = document.getElementById("Heater 2");
      w.click();
     break;
     case "e":
      let e = document.getElementById("Heater 3");
      e.click();
     break;
     case "a":
      let a = document.getElementById("Heater 4");
      a.click();
     break;
     case "s":
      let s = document.getElementById("Heater 6");
      s.click();
     break;
     case "d":
      let d = document.getElementById("OpenHH");
      d.click();
     break;
     case "z":
      let z = document.getElementById("Kick'n Hat");
      z.click();
     break;
     case "x":
      let x = document.getElementById("Kick");
      x.click();
     break;
     case "c":
      let c = document.getElementById("Closed HH");
      c.click();
     break;}}
  
  const setSongName = (name) => {
    
      setNameSong(name)
  }
  
  return (<>
          <h3>Click on the touch !</h3>
          <div id="drum-machine" onKeyDown={handleKeyDown}>
            <AudioButton name="Heater 1" letter="Q" sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" onClick={setSongName}/>
            <AudioButton name="Heater 2" letter="W" sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" onClick={setSongName}/>
            <AudioButton name="Heater 3" letter="E" sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" onClick={setSongName}/>
            <AudioButton name="Heater 4" letter="A" sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" onClick={setSongName}/>
            <AudioButton name="Heater 6" letter="S" sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" onClick={setSongName}/>
            <AudioButton name="OpenHH" letter="D" sound="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" onClick={setSongName}/>
            <AudioButton name="Kick'n Hat" letter="Z" sound="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" onClick={setSongName}/>
            <AudioButton name="Kick" letter="X" sound="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" onClick={setSongName}/>
            <AudioButton name="Closed HH" letter="C" sound="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" onClick={setSongName}/>
            <div id="display-container">
              <p id="display">{nameSong}</p>
            </div>
          </div>
          </>)
    
}

export default App;
