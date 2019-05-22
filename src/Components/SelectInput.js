import React from 'react';
import '../App.css'

function TextInput() {
  const component = new React.Component();
  component.state = {
    select: null
  }
  
  function handleChange(event) {
    component.setState({"select": event.target.value});
  }
  
//   function handleSubmit(event) {
//     //logic for handling submit here
//   }
//   component.componentDidMount = function() {
//     //some lifecycle action here
//   }

  component.render = function() {
    let src = "";
    if(component.state.select === "Dog"){src = "https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
    if(component.state.select === "Cat"){src = "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}
    if(component.state.select === "Rabbit"){src = "https://images.pexels.com/photos/148125/pexels-photo-148125.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
    if(component.state.select === "Fish"){src = "https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
    if(component.state.select === "Horse"){src = "https://images.pexels.com/photos/1327107/pexels-photo-1327107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
    let backgroundStyle = {
      backgroundImage: `url(${src})`
    };
    let outputText = "";
    if(component.state.select){
      outputText = `That's a ${component.state.select.toLowerCase()}!`;
    }
    return (
      <li class="cards-item">
        <div class="card">
          <div class="card-content">
            <div class="card-image" style={backgroundStyle}></div>
            <div class="card-title">Select</div>
            <p class="card-text">
              <div className="input">
                <select onChange={handleChange} className="selectInput">
                  <option value="">Choose one:</option>
                  <option value="Dog">Dog</option>
                  <option value="Cat">Cat</option>
                  <option value="Rabbit">Rabbit</option>
                  <option value="Fish">Fish</option>
                  <option value="Horse">Horse</option>
                </select>
              </div>
              <div className="output">
                <label for="selectOutput">Image: </label>
                <span name="selectOutput">{outputText}</span>
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