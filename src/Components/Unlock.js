import React from 'react';
import '../App.css'

function Unlock() {
  const component = new React.Component();
  component.state = {
    numbers: [0,0,0,0]
  }
  
  function handleChange1(event) {
    var numbers = component.state.numbers;
    numbers[0] = event.target.value;
    component.setState({"numbers": numbers});
  }
  
  function handleChange2(event) {
    var numbers = component.state.numbers;
    numbers[1] = event.target.value;
    component.setState({"numbers": numbers});
  }
  
  function handleChange3(event) {
    var numbers = component.state.numbers;
    numbers[2] = event.target.value;
    component.setState({"numbers": numbers});
  }
  
  function handleChange4(event) {
    var numbers = component.state.numbers;
    numbers[3] = event.target.value;
    component.setState({"numbers": numbers});
  }
  
//   function handleSubmit(event) {
//     //logic for handling submit here
//   }
  component.componentDidMount = function() {
    //some lifecycle action here
    var a = Math.floor(10*Math.random())
    var b = Math.floor(10*Math.random())
    var c = Math.floor(10*Math.random())
    var d = Math.floor(10*Math.random())
    document.getElementById("numberInput1").setAttribute("value", a);
    document.getElementById("numberInput2").setAttribute("value", b);
    document.getElementById("numberInput3").setAttribute("value", c);
    document.getElementById("numberInput4").setAttribute("value", d);
    component.setState({"numbers": [a,b,c,d]});
  }

  component.render = function() {
    var number = parseInt(component.state.numbers.join(""));
    var success = (number === 3304) ? "SUCCESS!" : "FAIL.";
    return (
      <li class="cards-item">
        <div class="card">
          <div class="card-content">
            <div class="card-title">Unlock Me</div>
            <p class="card-text">
              <div className="input">
                <input type="number" id="numberInput1" onChange={handleChange1} className="unlockNumber" min="0" max="9" />
                <input type="number" id="numberInput2" onChange={handleChange2} className="unlockNumber" min="0" max="9" />
                <input type="number" id="numberInput3" onChange={handleChange3} className="unlockNumber" min="0" max="9" />
                <input type="number" id="numberInput4" onChange={handleChange4} className="unlockNumber" min="0" max="9" />
              </div>
              <div className="output">
                <label for="numberOutput">You tried: </label>
                <span name="numberOutput">{number} - {success}</span>
              </div>
            </p>
          </div>
        </div>
      </li>
    )
  }
  return component;
}

export default Unlock