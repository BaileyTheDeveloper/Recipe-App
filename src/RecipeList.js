import React from "react";
import RecipeView from "./RecipeView";

function RecipeList({ recipes, deleteRecipe }) {
	return (
		<div className="recipe-list">
			<table>
				<thead>
					<tr>
						<th></th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{recipes.map((recipe, index) => (
						<RecipeView
							deleteRecipe={() => deleteRecipe(index)}
							index={index}
							key={index}
							recipe={recipe}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default RecipeList;
