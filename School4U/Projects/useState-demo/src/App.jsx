import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      Hello
      <br />
      The counter count is = {count}
      <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <Card />
    </div>
  );
};

export default App;
