import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./Components/List";
import "./App.css";
function App() {
  const [inputText, setInputText] = useState("");

  let inputHandler = (e) => {
    //convert input text to lower case

    var lowerCase = e.target.value.toLowerCase();

    setInputText(lowerCase);
  };

  return (
    
    <div className="App">
      <div className="main">
        <h1>Vital - Abeille</h1>

        <div className="search">
          <TextField
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Recherche"
          />
        </div>

        <List input={inputText} />
      </div>
    </div>
  );
}

export default App;
