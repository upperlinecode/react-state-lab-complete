import React from 'react';
import '../App.css'

function DateInput() {
  const component = new React.Component();
  component.state = {
    date: null
  }
  
  function handleChange(event) {
    component.setState({"date": event.target.value});
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
            <div class="card-title">Date</div>
            <p class="card-text">
              <div className="input btn-block">
                <input type="date" onChange={handleChange} className="textInput" />
              </div>
              <div className="output">
                <label for="dateOutput">State: </label>
                <span name="dateOutput">{component.state.date}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    )
  }
  return component;
}

export default DateInput