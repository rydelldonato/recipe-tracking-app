import React from "react";
import RecipeItem from "./RecipeItem";

function RecipeList({ recipes, deleteRecipe }) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
//   console.log(recipes);

  return (
    <div className="recipe-list">
      <table className="table table-striped table-sm table-responsive">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Cusine</th>
            <th scope="col">Photos</th>
            <th scope="col">Ingredients</th>
            <th scope="col">Preparation</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((item, i) => (
              <RecipeItem key={i} item={item} deleteRecipe={deleteRecipe} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
