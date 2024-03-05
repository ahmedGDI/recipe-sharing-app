import React from "react";
import axios from "axios";

const AllRecipe = ({ items, onDelete }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/recipe/${id}`); 
      onDelete(id);
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  return (
    <div>
      <h2>All Recipes</h2>
      <ul>
        {items.map((recipe, index) => (
          <li key={index}>
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
            <button onClick={() => handleDelete(recipe.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllRecipe;
