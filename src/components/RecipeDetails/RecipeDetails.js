import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function RecipeDetails(props) {
	const [recipe, setRecipe] = useState();
	const [instructions, setInstructions] = useState();
	const [ingredientSections, setIngredientSections] = useState([]);
	const [ingredients, setIngredients] = useState();
	const { id } = useParams();
	useEffect(() => {
		fetch(`https://tasty.p.rapidapi.com/recipes/detail?id=${id}`, {
			method: "GET",
			headers: {
				"x-rapidapi-host": "tasty.p.rapidapi.com",
				"x-rapidapi-key": "d34b45871dmsh64380ae6d020ad2p1e7538jsn90311ac48c8c",
			},
		})
			.then((res) => {
				console.log(res);
				return res.json();
			})
			.then((data) => {
				setRecipe(data);
				setIngredientSections(data.sections);
				setInstructions(data.instructions);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);
	if (!recipe) {
		return <p>loading recipe data...</p>;
	}
	return (
		<div className="recipe-details-container">
			<h4>{recipe.name}</h4>
			<div className="image-container">
				<img src={recipe.thumbnail_url} alt={recipe.name} />
			</div>
			<div className="description-container">
				<p>{recipe.description}</p>
			</div>
			<div className="ingredients-container">
				{ingredientSections.map((ingredient) => {
					return (
						<ul key={ingredient.name}>
							{ingredient.name}

							{ingredient.components.map((item) => {
								return <li key={item.id}>{item.raw_text}</li>;
							})}
						</ul>
					);
				})}
			</div>
			<div className="instructions-container">
				<ol>
					{instructions.map((step) => {
						return <li key={step.id}>{step.display_text}</li>;
					})}
				</ol>
			</div>
		</div>
	);
}

export default RecipeDetails;
