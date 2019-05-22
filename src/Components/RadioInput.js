import React from 'react';
import '../App.css'

function RadioInput() {
  const component = new React.Component();
  component.state = {
    radio: ""
  }
  
  function handleChange(event) {
    component.setState({"radio": event.target.value});
  }
  
//   function handleSubmit(event) {
//     //logic for handling submit here
//   }
//   component.componentDidMount = function() {
//     //some lifecycle action here
//   }

  component.render = function() {
    return (
      <li class="cards-item">
        <div class="card">
          <div class="card-content">
            <div class="card-title">Radio</div>
            <p class="card-text">
              <div className="input">
                <input type="radio" name="radioInput" value="1" onChange={handleChange} className="checkboxInput" />
                <input type="radio" name="radioInput" value="2" onChange={handleChange} className="checkboxInput" />
                <input type="radio" name="radioInput" value="3" onChange={handleChange} className="checkboxInput" />
                <input type="radio" name="radioInput" value="4" onChange={handleChange} className="checkboxInput" />
                <input type="radio" name="radioInput" value="5" onChange={handleChange} className="checkboxInput" />
              </div>
              <div className="output">
                <label for="radioOutput">State: </label>
                <span name="radioOutput">{component.state.radio}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    )
  }
  return component;
}

export default RadioInput