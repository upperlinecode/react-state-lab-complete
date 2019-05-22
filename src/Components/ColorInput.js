import React from 'react';
import '../App.css'

function ColorInput() {
  const component = new React.Component();
  component.state = {
    color: null
  }
  
  function handleChange(event) {
    component.setState({"color": event.target.value});
  }
  
//   function handleSubmit(event) {
//     //logic for handling submit here
//   }
//   component.componentDidMount = function() {
//     //some lifecycle action here
//   }

  component.render = function() {
    let outputStyle = {
      backgroundColor: component.state.color
    }
    return (
      <li class="cards-item">
        <div class="card">
          <div class="card-content">
            <div class="card-image" style={outputStyle}></div>
            <div class="card-title">Color</div>
            <p class="card-text">
              <div className="input btn-block">
                <input type="color" onChange={handleChange} className="colorButton"/>
              </div>
              <div className="output" >
                <label for="colorOutput">State: </label>
                <span name="colorOutput">{component.state.color}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    )
  }
  return component;
}

export default ColorInput