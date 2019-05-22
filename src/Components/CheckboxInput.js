import React from 'react';
import '../App.css'

function CheckboxInput() {
  const component = new React.Component();
  component.state = {
    "checked":[false, false, false, false, false]
  }
  
  function handleChange(event) {
    var state = component.state;
    state.checked[event.target.value-1] = !component.state.checked[event.target.value-1];
    component.setState(state);
  }
  
//   function handleSubmit(event) {
//     //logic for handling submit here
//   }
//   component.componentDidMount = function() {
//     //some lifecycle action here
//   }

  component.render = function() {
    var count = component.state.checked.filter(val => val === true)
    return (
      <li class="cards-item">
        <div class="card">
          <div class="card-content">
            <div class="card-title">Checkbox</div>
            <p class="card-text">
              <div className="input">
                <input type="checkbox" name="checkboxInput" value="1" onChange={handleChange} className="checkboxInput" />
                <input type="checkbox" name="checkboxInput" value="2" onChange={handleChange} className="checkboxInput" />
                <input type="checkbox" name="checkboxInput" value="3" onChange={handleChange} className="checkboxInput" />
                <input type="checkbox" name="checkboxInput" value="4" onChange={handleChange} className="checkboxInput" />
                <input type="checkbox" name="checkboxInput" value="5" onChange={handleChange} className="checkboxInput" />
              </div>
              <div className="output">
                <label for="checkboxOutput">Count: </label>
                <span name="checkboxOutput">{count.length}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    )
  }
  return component;
}

export default CheckboxInput