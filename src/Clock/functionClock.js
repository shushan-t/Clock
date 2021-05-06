import {useState} from "react";
import '../ClockCss/fClockCss.css';

function Fclock(){
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");



  const changeHours = (e)=>{
          setHours(e.target.value);
       };
  const changeMinutes = (e)=>{
          setMinutes(e.target.value);
       };
  const changeSeconds = (e)=>{
          setSeconds(e.target.value);
       };

  return(
    
     <form onSubmit={(e)=>{
         e.preventDefault();
         setHours("");
         setMinutes("");
         setSeconds("");
     }}>



        <input
          type="text"
          className="input"
          placeholder="set hours"
          value={hours}
          onChange={changeHours}
        />
        <input
          type="text"
          className="input"
          placeholder="set minutes"
          value={minutes}
          onChange={changeMinutes}
        />
        <input
          type="text"
          className="input"
          placeholder="set seconds"
          value={seconds}
          onChange={changeSeconds}
        />
         
         <button>Clear</button>
        
         <div className="clockF">
        <div
          className="hourIndex"
          style={{
            transform: `rotateZ(${hours * 30}deg)`,
            transitionDuration: "3s",
          }}
        />
        <div
          className="minIndex"
          style={{
            transform: `rotateZ(${minutes * 6}deg)`,
            transitionDuration: "3s",
          }}
        />
        <div
          className="secIndex"
          style={{
            transform: `rotateZ(${seconds * 6}deg)`,
            transitionDuration: "3s",
          }}
        /></div>
     </form>
  )
  
}


export default  Fclock;