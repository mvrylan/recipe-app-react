import React from "react";

function RecipeCard({ recipe, removeRecipe }) {
  return (
    <>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo === "" ? null : recipe.photo} alt={"Photo Not Found"} style={{ maxWidth:"50px" }}></img>
      </td>
      <td>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>
    </>
  )
}

export default RecipeCard;