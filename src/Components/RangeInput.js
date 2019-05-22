import React from 'react';
import '../App.css'

function RangeInput() {
  const component = new React.Component();
  component.state = {
    range: null
  }
  
  function handleChange(event) {
    component.setState({"range": event.target.value});
  }
  
//   function handleSubmit(event) {
//     //logic for handling submit here
//   }
//   component.componentDidMount = function() {
//     //some lifecycle action here
//   }

  component.render = function() {
    let rangeStyle = {
      backgroundColor: "white",
      color: "black"
    }
    let a = (component.state.range == null) ? 100 : component.state.range/100;
    rangeStyle = {
      backgroundColor: `rgb(${255*a},${255*a},${255*a})`,
      color: `rgb(${255-(255*a)},${255-(255*a)},${255-(255*a)})`,
    }
    return (
      <li class="cards-item">
        <div class="card">
          <div class="card-content">
            <div class="card-image" style={rangeStyle}></div>
            <div class="card-title">Range Slider</div>
            <p class="card-text">
              <div className="input">
                <input type="range" onChange={handleChange} className="rangeInput" />
              </div>
              <div className="output">
                <label for="rangeOutput">State: </label>
                <span name="rangeOutput">{component.state.range}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    )
  }
  return component;
}

export default RangeInput