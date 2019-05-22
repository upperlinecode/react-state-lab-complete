import React from 'react';
import '../App.css'

function NumberInput() {
  const component = new React.Component();
  component.state = {
    number: ""
  }
  
  function handleChange(event) {
    component.setState({"number": event.target.value});
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
            <div class="card-title">Number</div>
            <p class="card-text">
              <div className="input btn-block">
                <input type="number" onChange={handleChange} className="textInput" />
              </div>
              <div className="output">
                <label for="numberOutput">State: </label>
                <span name="numberOutput">{component.state.number}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    )
  }
  return component;
}

export default NumberInput