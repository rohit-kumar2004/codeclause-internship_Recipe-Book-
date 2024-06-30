// src/components/RecipeCard.js
import React from 'react';

const RecipeCard = ({ recipe, deleteRecipe, setEditRecipe }) => {
  return (
    <div className="recipe">
      <img src={recipe.image} alt={recipe.title} />
      <h3>{recipe.title}</h3>
      <p>{recipe.ingredients}</p>
      <div className="recipe-buttons">
        <button onClick={() => setEditRecipe(recipe)}>Edit</button>
        <button onClick={() => deleteRecipe(recipe.id)}>Delete</button>
      </div>
    </div>
  );
};

export default RecipeCard;
