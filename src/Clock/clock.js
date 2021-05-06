
import React, {Component } from 'react';
import '../ClockCss/clock.css';

class Clock  extends Component {
 
    state = {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
      seconds: new Date().getSeconds(),
    };
  
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div>
        <div className="inputs">
          <input
            type="text"
            className="input"
            placeholder="set hours"
            name="hours"
            value={this.state.hours}
            onChange={this.handleChange}
          />
          <input
            type="text"
            className="input"
            placeholder="set minutes"
            name="minutes"
            value={this.state.minutes}
            onChange={this.handleChange}
          />
          <input
            type="text"
            className="input"
            placeholder="set seconds"
            name="seconds"
            value={this.state.seconds}
            onChange={this.handleChange}
          />
        </div>
        <div className="clock">
          <div
            className="hourIndex"
            style={{
              transform: `rotateZ(${this.state.hours * 30}deg)`,
              transitionDuration: "3s",
            }}
          />
          <div
            className="minIndex"
            style={{
              transform: `rotateZ(${this.state.minutes * 6}deg)`,
              transitionDuration: "3s",
            }}
          />
          <div
            className="secIndex"
            style={{
              transform: `rotateZ(${this.state.seconds * 6}deg)`,
              transitionDuration: "3s",
            }}
          />
          <span className="twelve">12</span>
          <span className="one">1</span>
          <span className="two">2</span>
          <span className="three">3</span>
          <span className="four">4</span>
          <span className="five">5</span>
          <span className="six">6</span>
          <span className="seven">7</span>
          <span className="eight">8</span>
          <span className="nine">9</span>
          <span className="ten">10</span>
          <span className="eleven">11</span> 
          </div>
        
      </div>
    );
  }
}


    
export default Clock; 