import React from "react";
import "./recipeCard.css";

export default function RecipeCard({ recipe }) {
  return (
    <div className="recipeCard">
      <a href={recipe["recipe"]["url"]}>
        <p className="recipe-card-label">{recipe["recipe"]["label"]}</p>

        <img className="recipe-card-image" src={recipe["recipe"]["image"]} />

        <p className="recipe-card-time">Cook Time: {recipe["recipe"]["totalTime"]} Mins</p>
      </a>
    </div>
  );
}
