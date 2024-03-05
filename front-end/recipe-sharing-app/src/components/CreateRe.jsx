import React, { useState } from "react";
import axios from "axios"

const CreateRe = ({  func2,fet }) => {
  const [recipeName, setRecipeName] = useState("");
  const [ImgeName, setRecipeImg] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  
  const handleCreate = async () => {
    const id = localStorage.getItem("users_id")
    if (recipeName.length !== 0) {
      const data = {
        name: recipeName,  img :'zaed', description: recipeDescription ,users_id:id
      }
      console.log(data)
      try {
        await axios.post("http://localhost:3000/api/recipe/add",{data})
    
        setRecipeName("")
        setRecipeImg(" ")
        setRecipeDescription("")
        func2("allRecipe")
        fet()
        } catch (error) {
            console.log(error);
        }
    }
  }

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
