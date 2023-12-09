import "./App.css";
import BigTime from "./components/BigTime";
import { useState } from "react";
import ChooseTheme from "./components/ChooseTheme";

function App() {
  const [theme, setTheme] = useState("default");
  return (
    <div className="App max-h-screen overflow-hidden">
      <ChooseTheme theme={theme} setTheme={setTheme} />
      <BigTime theme={theme} />
    </div>
  );
}

export default App;
