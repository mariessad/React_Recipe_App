import React from 'react'
import "./recipeCard.css"

export default function RecipeCard({ recipe }) {
  return (
    <div className='recipeCard'>
        <p className='recipe-card-label'>{recipe["recipe"]["label"]}</p>
        <img className="recipe-card-image" src={recipe["recipe"]["image"]}/>
    </div>
  )
}
