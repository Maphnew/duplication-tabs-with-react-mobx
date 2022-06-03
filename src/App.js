import { useState } from "react";
import "./App.css";
import Tab from "./components/tab";

function App() {
  const [tabs, setTabs] = useState([]);
  let [count, setCount] = useState(0);
  const plusButtonClickHandler = () => {
    const num = count + 1;
    setCount(num);
    setTabs([...tabs, num])
  }
  const minusButtonClickHandler = () => {
    const num = count - 1;
    setCount(num);
    const poppedTabs = tabs.slice(0, -1);
    setTabs(poppedTabs)
  }
  return (
      <div className="App">
        <button onClick={plusButtonClickHandler}>+</button>
        <button onClick={minusButtonClickHandler}>-</button>
        <section className="tabs">
          {tabs.length > 0 && tabs.map((count) => {
            return (
              <Tab key={count} count={count} />
            )
          })}
        </section>
      </div>
  );
}

export default App;
