import "./App.css";
import Axios from "axios";
import { useState, useEffect } from "react";
import RecipeCard from "./RecipeCard";
import plate from "./plate-logo.png";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [health, setHealth] = useState("vegan");

  useEffect(() => {
    console.log("render");
  }, [query]);

  const { REACT_APP_ID, REACT_APP_KEY } = process.env;
  let url = `https://api.edamam.com/search?q=${query}&app_id=${REACT_APP_ID}&app_key=${REACT_APP_KEY}&health=${health}`;

  async function getRecipies() {
    // installed axios, must be imported to use

    let result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  }

  const submit = (e) => {
    e.preventDefault();
    getRecipies();
  };
  return (
    <div className="App">
      <header>
        <h1>What2Cook</h1>
        <p>
          <img className="plate-logo" src={plate}></img>
        </p>
        <p>Find your new go-to meal</p>
      </header>

      <form className="app-search-form" onSubmit={submit}>
        <input
          required
          type="text"
          className="app-search-input"
          placeholder="enter ingredient"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className="app-search-button" type="submit" value="Search" />
        <select className="app-healthLables">
          <option onClick={() => setHealth("")}>none</option>
          <option onClick={() => setHealth("vegetarian")}>Vegan</option>
          <option onClick={() => setHealth("vegan")}>Vegetarian</option>
          <option onClick={() => setHealth("paleo")}>Paleo</option>
          <option onClick={() => setHealth("dairy-free")}>Dairy-free</option>
          <option onClick={() => setHealth("gluten-free")}>Gluten-free</option>
          <option onClick={() => setHealth("wheat-free")}>Wheat-free</option>
          <option onClick={() => setHealth("low-sugar")}>Low-sugar</option>
          <option onClick={() => setHealth("egg-free")}>Egg-free</option>
          <option onClick={() => setHealth("fish-free")}>Fish-free</option>
        </select>
      </form>

      <div className="app-recipes">
        {recipes.map((recipe) => {
          return <RecipeCard recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
