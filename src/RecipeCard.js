import React from "react";

function RecipeCard({ recipe, removeRecipe, index }) {
  return (
    <>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>
        <img src={recipe.photo === "" ? null : recipe.photo} alt={"Photo Not Found"} ></img>
      </td>
      <td className="content_td"><p>{recipe.ingredients}</p></td>
      <td className="content_td"><p>{recipe.preparation}</p></td>
      <td>
        <button name="delete" onClick={() => removeRecipe(index)}>Delete</button>
      </td>
    </>
  )
}

export default RecipeCard;