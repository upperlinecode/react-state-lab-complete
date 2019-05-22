import React from 'react';
import '../App.css'

function TextInput() {
  const component = new React.Component();
  component.state = {
    text: ""
  }
  
  function handleChange(event) {
    component.setState({"text": event.target.value});
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
            <div class="card-title">Text</div>
            <p class="card-text">
              <div className="input btn-block">
                <input type="text" placeholder="Write here!" onChange={handleChange} className="textInput"/>
              </div>
              <div className="output">
                <label for="textOutput">State: </label>
                <span name="textOutput">{component.state.text}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    )
  }
  return component;
}

export default TextInput