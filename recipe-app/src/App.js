import "./App.css";
import Axios from "axios";
import { useState } from "react";
import RecipeCard from "./RecipeCard";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([])

  const { REACT_APP_ID, REACT_APP_KEY } = process.env;
  let url = `https://api.edamam.com/search?q=${query}&app_id=${REACT_APP_ID}&app_key=${REACT_APP_KEY}&&health=alcohol-free`;

  async function getRecipies() {
    // installed axios, must be imported to use
    
    let result = await Axios.get(url);
    setRecipes(result.data.hits)
    console.log(result.data);
  }

  const submit = (e) => {
    e.preventDefault();
    getRecipies();
  };
  return (
    <div className="App">
      <h1>Recipe App</h1>
      <form className="app-search-form" onSubmit={submit}>
        <input
          type="text"
          className="app-search-input"
          placeholder="enter ingredient"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <input className="app-search-button" type="submit" value="Search" />
      </form>
      <div className="app-recipes">
        {recipes.map(recipe =>{
          return <RecipeCard recipe={recipe}/>
        })}
      </div>
    </div>
  );
}

export default App;
