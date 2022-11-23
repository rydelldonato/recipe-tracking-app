import React from "react";

export default function RecipeItem({ item, deleteRecipe }) {
  return (
    //   <table>
    //     <thead>
    //       <tr>
    //         <th>Name</th>
    //         <th>Cusine</th>
    //         <th>Photos</th>
    //         <th>Ingredients</th>
    //         <th>Preparation</th>
    //         <th>Actions</th>
    //       </tr>
    //     </thead>
    <tr>
      <td>{item.name}</td>
      <td>{item.cuisine}</td>
      <td>
        <img src={item.photo} alt={item.name} />
      </td>
      <td>{item.ingredients}</td>
      <td>{item.preparation}</td>
      <td><button name="delete" onClick={()=>deleteRecipe(item.name)}>Delete</button></td>
    </tr>
    //   </table>
  );
}