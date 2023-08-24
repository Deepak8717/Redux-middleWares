// RecipeList.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addRecipe, removeRecipe } from "./recipeSlice";
import { fetchRecipes } from "./recipeActions";

function RecipeList() {
  const recipes = useSelector((state) => state.recipes);
  console.log(recipes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <h3>{recipe.name}</h3>
            <p>{recipe.ingredients}</p>
            <button onClick={() => dispatch(removeRecipe(recipe.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;
