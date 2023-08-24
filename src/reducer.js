import { combineReducers } from "redux";
import countriesReducer from "./countriesSlice";
import recipesReducer from "./recipeSlice";

const rootReducer = combineReducers({
  countries: countriesReducer,
  recipes: recipesReducer,
});

export default rootReducer;
