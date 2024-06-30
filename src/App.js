// src/App.js
import React, { useState, useEffect } from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import './App.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [editRecipe, setEditRecipe] = useState(null);

  useEffect(() => {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setRecipes(savedRecipes);
  }, []);

  useEffect(() => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]);
  };

  const updateRecipe = (updatedRecipe) => {
    setRecipes(
      recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      )
    );
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <div className="App">
      <header>
        <h1>Recipe App</h1>
      </header>
      <main>
        <RecipeForm
          addRecipe={addRecipe}
          updateRecipe={updateRecipe}
          editRecipe={editRecipe}
          setEditRecipe={setEditRecipe}
        />
        <RecipeList
          recipes={recipes}
          deleteRecipe={deleteRecipe}
          setEditRecipe={setEditRecipe}
        />
      </main>
    </div>
  );
};

export default App;
