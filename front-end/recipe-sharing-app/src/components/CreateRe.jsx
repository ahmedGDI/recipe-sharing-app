import React, { useState } from "react";

const CreateRe = ({ create, func2 }) => {
  const [recipeName, setRecipeName] = useState("");
  const [ImgeName, setRecipeImg] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");

  const handleCreate = () => {
    if (recipeName.length !== 0) {
      create({ name: recipeName,  img :ImgeName, description: recipeDescription });
      setRecipeName("");
      setRecipeImg(" ")
      setRecipeDescription("");
      func2("allRecipe");
    }
  };

  return (
    <div>
      <h2>Create New Recipe</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleCreate(); }}>
        <input
          type="text"
          value={recipeName}
          onChange={(e) => setRecipeName(e.target.value)}
          placeholder="Enter recipe name"
          required
        />
        <textarea
          value={recipeDescription}
          onChange={(e) => setRecipeDescription(e.target.value)}
          placeholder="Enter recipe description"
          required
        />
        <button type="submit">Create Recipe</button>
      </form>
    </div>
  );
};

export default CreateRe;
