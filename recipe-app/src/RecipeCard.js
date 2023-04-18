import React from "react";
import { useState, useEffect } from "react";
import "./recipeCard.css";
import heartEmpty from "./heart-empty.png";
import heartFull from "./heart-full.png";

export default function RecipeCard({ recipe, toggleHeart, heart }) {
//   const [fav, setFav] = useState([]);
//   const [heart, setHeart] = useState(true);
// console.log(recipe)

//   function toggleHeart(recipe) {
//     console.log("clicked", recipe);
//     // setFav((recipe[recipe]))
//     // console.log(fav)
//     setHeart(!heart);
//     if(heart === true){
//         setFav(recipe["recipe"])
//         console.log("heart is true", fav)
//     }
//   }
  return (
    <>
    <div className="recipeCard">
      <a href={recipe["recipe"]["url"]}>
        <p className="recipe-card-label">{recipe["recipe"]["label"]}</p>

        <img className="recipe-card-image" src={recipe["recipe"]["image"]} />
      </a>
      <p className="recipe-card-time">
        Cook Time: {recipe["recipe"]["totalTime"]} Mins
        <img
          className="heart-icon"
          onClick={toggleHeart}
          src={heart ? heartEmpty : heartFull}
        />
      </p>
      
    </div>
    </>
  );
}
