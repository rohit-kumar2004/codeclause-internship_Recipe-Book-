// src/components/RecipeList.js
import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes, deleteRecipe, setEditRecipe }) => {
  return (
    <section id="recipes">
      <h2>Recipes</h2>
      <div id="recipe-list">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            deleteRecipe={deleteRecipe}
            setEditRecipe={setEditRecipe}
          />
        ))}
      </div>
    </section>
  );
};

export default RecipeList;
