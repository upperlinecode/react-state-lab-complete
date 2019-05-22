import React from 'react';
import './App.css';
import TextInput from './Components/TextInput.js'
import DateInput from './Components/DateInput.js'
import NumberInput from './Components/NumberInput.js'
import RadioInput from './Components/RadioInput.js'
import ButtonInput from './Components/ButtonInput.js'
import ColorInput from './Components/ColorInput.js'
import CheckboxInput from './Components/CheckboxInput.js'
import RangeInput from './Components/RangeInput.js'
import SelectInput from './Components/SelectInput.js'
import UrlInput from './Components/UrlInput.js'
import Unlock from './Components/Unlock.js'


function App() {
  return (
    <div class="container">
      <ul class="cards">
        <TextInput />
        {/* <div>
          <div className="input">
            <label for="textInput">Text Input: </label>
            <input type="text" name="textInput" placeholder="Write here!" />
          </div>
          <div className="output">
            <label for="textOutput">Text State: </label>
            <span name="textOutput"></span>
          </div>
        </div> */}
        
        <DateInput />
        {/* <div>
          <div className="input">
            <label for="dateInput">Date Input: </label>
            <input type="date" name="dateInput" />
          </div>
          <div className="output">
            <label for="dateOutput">Date State: </label>
            <span name="dateOutput"></span>
          </div>
        </div> */}
        
        <NumberInput />
        {/* <div>
          <div className="input">
            <label for="numberInput">Number Input: </label>
            <input type="number" name="numberInput" />
          </div>
          <div className="output">
            <label for="numberOutput">Number State: </label>
            <span name="numberOutput"></span>
          </div>
        </div> */}
        
        <ButtonInput />
        {/* <div>
          <div className="input">
            <label for="buttonInput">Button Input: </label>
            <input type="button" name="buttonInput" value="Click me!" onClick={handleChange}/>
          </div>
          <div className="output">
            <label for="buttonOutput">Button State: </label>
            <span name="buttonOutput">{component.state.clicked ? "True" : "False"}</span>
          </div>
        </div> */}
        
        <RadioInput />
        {/* <div>
          <div className="input">
            <label for="radioInput">Radio Input: </label>
            <input type="radio" name="radioInput" value="1" />
            <input type="radio" name="radioInput" value="2" />
            <input type="radio" name="radioInput" value="3" />
            <input type="radio" name="radioInput" value="4" />
            <input type="radio" name="radioInput" value="5" />
          </div>
          <div className="output">
            <label for="radioOutput">Radio State: </label>
            <span name="radioOutput"></span>
          </div>
        </div> */}
        
        <ColorInput />
        {/* <div>
          <div className="input">
            <label for="colorInput">Color Input: </label>
            <input type="color" name="colorInput" />
          </div>
          <div className="output">
            <label for="colorOutput">Color State: </label>
            <span name="colorOutput"></span>
          </div>
        </div> */}
        
        <CheckboxInput />
        {/* <div>
          <div className="input">
            <label for="checkboxInput">Checkbox Input: </label>
            <input type="checkbox" name="checkboxInput" value="1" />
            <input type="checkbox" name="checkboxInput" value="2" />
            <input type="checkbox" name="checkboxInput" value="3" />
            <input type="checkbox" name="checkboxInput" value="4" />
            <input type="checkbox" name="checkboxInput" value="5" />
          </div>
          <div className="output">
            <label for="checkboxOutput">Checkbox State: </label>
            <span name="checkboxOutput"></span>
          </div>
        </div> */}
  
        <RangeInput />
        {/* <div>
          <div className="input">
            <label for="rangeInput">Slider Range Input: </label>
            <input type="range" name="rangeInput" />
          </div>
          <div className="output">
            <label for="rangeOutput">Range State: </label>
            <span name="rangeOutput"></span>
          </div>
        </div> */}
        
        <SelectInput />
        {/* <div>
          <div className="input">
            <label for="selectInput">Select Input: </label>
            <select name="selectInput">
              <option value="first">First</option>
              <option value="second">Second</option>
              <option value="third">Third</option>
              <option value="fourth">Fourth</option>
              <option value="fifth">Fifth</option>
            </select>
          </div>
          <div className="output">
            <label for="selectOutput">Select State: </label>
            <span name="selectOutput"></span>
          </div>
        </div> */}
        
        <UrlInput />
        {/* <div>
          <div className="input">
            <label for="urlInput">URL Input: </label>
            <input type="url" name="urlInput" placeholder="URL here!" />
          </div>
          <div className="output">
            <label for="urlOutput">URL State: </label>
            <span name="urlOutput"></span>
          </div>
        </div> */}
        
        <Unlock />
        
      </ul>
    </div>
  );
}

export default App;
