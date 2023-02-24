import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, serKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => serKeyword(event.target.value);
  console.log("I run all the time");
  const iRunOnlyOnce = () => {
    console.log("I run only once");
  };
  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("Search for", keyword);
    }
  }, [keyword]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type={"text"}
        placeholder="Search hear..."
      />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

export default App;
