import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  const [recipeData, setRecipeData] = useState ({ ...initialFormState });
  const handleChange = ({ target }) => {
    setRecipeData({
      ...recipeData,
      [target.name]: target.value,
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const thisRecipe = recipeData;
    addRecipe(thisRecipe);
    setRecipeData(initialFormState);
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name">
                <input id="name" type="text" name="name" onChange={handleChange} value={recipeData.name} />
              </label>
            </td>
            <td>
              <label htmlFor="cuisine">
                <input id="cuisine" type="text" name="cuisine" onChange={handleChange} value={recipeData.cuisine} />
              </label>
            </td>
            <td>
              <label htmlFor="photo">
                <input id="photo" type="text" name="photo" onChange={handleChange} value={recipeData.photo} />
              </label>
            </td>
            <td>
              <label htmlFor="ingredients">
                <input id="ingredients" type="text" name="ingredients" onChange={handleChange} value={recipeData.ingredients} />
              </label>
            </td>
            <td>
              <label htmlFor="preparation">
                <input id="preparation" type="text" name="preparation" onChange={handleChange} value={recipeData.preparation} />
              </label>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
