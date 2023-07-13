
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [text,setText] = useState("");

  function textRender(event){
    setText(event.target.value);
  }
  
  return (
    <div>
        {/* Do not remove the main div */}
        <div className="parent">
          <div>
            <h1>Parent Component</h1>
            </div>
            <p>{text}</p>
          <div className="child">
          <div>
            <h1>Child Component</h1>
            <input type="text" name="something" onChange={textRender} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
