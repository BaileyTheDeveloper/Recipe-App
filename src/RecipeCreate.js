import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
	// TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
	// TODO: Add the required input and textarea form elements.
	// TODO: Add the required submit and change handlers

	const [name, setName] = useState("");
	const [cuisine, setCuisine] = useState("");
	const [photo, setPhoto] = useState("");
	const [rating, setRating] = useState("");
	const [ingredients, setIngredients] = useState("");
	const [preparation, setPreparation] = useState("");
	
	// submit handler that creates new recipe and clears form.
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("Submitted:", name, cuisine, photo, ingredients, preparation);
		const newRecipe = {
			name,
			cuisine,
			photo,
			ingredients,
			preparation,
		};
		createRecipe(newRecipe);
		setName("");
		setCuisine("");
		setPhoto("");
		setIngredients("");
		setPreparation("");
	};
	const handleNameChange = (event) => setName(event.target.value);
	const handleCuisineChange = (event) => setCuisine(event.target.value);
	const handlePhotoChange = (event) => setPhoto(event.target.value);
	const handleIngredientsChange = (event) => setIngredients(event.target.value);
	const handlePreparationChange = (event) => setPreparation(event.target.value);
	return (
		<form name="create" onSubmit={handleSubmit}>
			<table>
				<tbody>
					<tr>
						<td>
							<label htmlFor="name">
								<input
									name="name"
									id="name"
									type="text"
									placeholder="Name"
									onChange={handleNameChange}
									value={name}
								></input>
							</label>
						</td>
						<td>
							<input
								name="cuisine"
								id="cuisine"
								type="text"
								placeholder="Cuisine"
								onChange={handleCuisineChange}
								value={cuisine}
							></input>
						</td>
						<td>
							<input
								name="photo"
								id="photo"
								type="text"
								placeholder="URL"
								onChange={handlePhotoChange}
								value={photo}
							></input>
						</td>
						<td>
							<textarea
								name="ingredients"
								id="ingredients"
								placeholder="Ingredients"
								onChange={handleIngredientsChange}
								value={ingredients}
							></textarea>
						</td>
						<td>
							<textarea
								name="preparation"
								id="preperation"
								placeholder="Preparation"
								onChange={handlePreparationChange}
								value={preparation}
							></textarea>
						</td>
						<td>
							<button type="submit">Create</button>
						</td>
					</tr>
				</tbody>
			</table>
		</form>
	);
}

export default RecipeCreate;
