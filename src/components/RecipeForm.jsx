// src/components/RecipeForm.js
import React, { useState, useEffect } from 'react';

const RecipeForm = ({ addRecipe, updateRecipe, editRecipe, setEditRecipe }) => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (editRecipe) {
      setTitle(editRecipe.title);
      setIngredients(editRecipe.ingredients);
      setImage(editRecipe.image);
    } else {
      setTitle('');
      setIngredients('');
      setImage('');
    }
  }, [editRecipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editRecipe) {
      updateRecipe({ id: editRecipe.id, title, ingredients, image });
    } else {
      addRecipe({ id: Date.now(), title, ingredients, image });
    }
    setTitle('');
    setIngredients('');
    setImage('');
    setEditRecipe(null);
  };

  return (
    <section id="add-recipe">
      <h2>{editRecipe ? 'Edit Recipe' : 'Add a New Recipe'}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea
          id="ingredients"
          name="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
        <label htmlFor="image">Image URL:</label>
        <input
          type="url"
          id="image"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">{editRecipe ? 'Save Changes' : 'Add Recipe'}</button>
      </form>
    </section>
  );
};

export default RecipeForm;
