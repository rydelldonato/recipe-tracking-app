import React, { useState } from "react";
import "./RecipeCreate.css";

function RecipeCreate({ addRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialFormState = {
    name:"",
    cuisine:"",
    photos:"",
    ingredients:"",
    preparation:""
  }

  const [formData, setFormData] = useState(initialFormState);
//   console.log(formData);
  function handleInputChange(event) {
    let value = event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    addRecipe(formData);
    setFormData(initialFormState)
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input placeholder="Name" id="name" name="name" type="text" value={formData.name} onChange={handleInputChange}></input>
            </td>
            <td>
              <input placeholder="Cusine" id="cuisine" name="cuisine" type="text" value={formData.cuisine} onChange={handleInputChange}></input>
            </td>
            <td>
              <input placeholder="URL" id="photo" name="photo" type="url" value={formData.photo} onChange={handleInputChange}></input>
            </td>
            <td>
              <textarea placeholder="Ingredients" id="ingredients" name="ingredients" value={formData.ingredients} onChange={handleInputChange}></textarea>
            </td>
            <td>
              <textarea placeholder="Preparation" id="preparation" name="preparation" type="text" value={formData.preparation} onChange={handleInputChange}></textarea>
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
