import React from "react";

function RecipeCard({ recipe, removeRecipe, index }) {
  return (
    <>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo === "" ? null : recipe.photo} alt={"Photo Not Found"} style={{ maxWidth:"50px" }}></img>
      </td>
      <td>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>
      <td>
        <button name="delete" onClick={() => removeRecipe(index)}>Delete</button>
      </td>
    </>
  )
}

export default RecipeCard;