import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";
import RecipeView from "./RecipeView";

function App() {
	const [recipes, setRecipes] = useState(RecipeData);

	// function to delete existing recipe
	const deleteRecipe = (indexToDelete) =>
		setRecipes((recipes) =>
			recipes.filter((post, index) => index !== indexToDelete)
		);

	// function to add a new recipe
	const createRecipe = (newRecipe) =>
		setRecipes((recipes) => [...recipes, newRecipe]);

	return (
		<div className="App">
			<header>
				<h1>Delicious Food Recipes</h1>
			</header>
			<RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
			<RecipeCreate createRecipe={createRecipe} />
		</div>
	);
}

export default App;
