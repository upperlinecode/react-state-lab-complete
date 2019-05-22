import React from 'react';
import '../App.css'

function ButtonInput() {
  const component = new React.Component();
  component.state = {
    clicked: false
  }
  
  function handleChange(event) {
    component.setState({"clicked": !component.state.clicked});
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
            <div class="card-title">Button</div>
            <p class="card-text">
              <div className="input btn-block">
                <input type="button" value="Click me!" onClick={handleChange} className="btn"/>
              </div>
              <div className="output">
                <label for="buttonOutput">State: </label>
                <span name="buttonOutput">{component.state.clicked ? "true" : "false"}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    )
  }
  return component;
}

export default ButtonInput