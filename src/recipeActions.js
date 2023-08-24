import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
    );
    const data = await response.json();
    const recipes = data.meals.map((meal) => ({
      id: meal.idMeal,
      name: meal.strMeal,
      ingredients: meal.strInstructions,
    }));
    return recipes;
  }
);
