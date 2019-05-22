import React from 'react';
import '../App.css'

function UrlInput() {
  const component = new React.Component();
  component.state = {
    url: null
  }
  
  function handleChange(event) {
    component.setState({"url": event.target.value});
  }
  
//   function handleSubmit(event) {
//     //logic for handling submit here
//   }
//   component.componentDidMount = function() {
//     //some lifecycle action here
//   }

  component.render = function() {
    if(component.state.url !== null){
      document.getElementById("url").href = component.state.url;
    }
    return (
      <li class="cards-item">
        <div class="card">
          <div class="card-content">
            <div class="card-title">URL</div>
            <p class="card-text">
              <div className="input btn-block">
                <input type="url" placeholder="Type a URL here!" onChange={handleChange} className="textInput" />
              </div>
              <div className="output">
                <label for="urlOutput">State: </label>
                <span name="urlOutput"><a href="http://" id="url" target="_blank" rel="noopener noreferrer">{component.state.url}</a></span>
              </div>
            </p>
          </div>
        </div>
      </li>
    )
  }
  return component;
}

export default UrlInput