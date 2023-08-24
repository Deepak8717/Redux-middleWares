import { useState } from "react";
import "./App.css";
import Countries from "./countries";
import RecipeList from "./RecipeList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Fetch countries</h1>
      <Countries />
      <RecipeList />
    </>
  );
}

export default App;
