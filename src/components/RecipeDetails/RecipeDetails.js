import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function RecipeDetails(props) {
	const [recipe, setRecipe] = useState();
	const [instructions, setInstructions] = useState([]);
	const [ingredientSections, setIngredientSections] = useState([]);
	const [ingredients, setIngredients] = useState();
	const { id } = useParams();
	useEffect(() => {
		fetch(`https://tasty.p.rapidapi.com/recipes/detail?id=${id}`, {
			method: "GET",
			headers: {
				"x-rapidapi-host": "tasty.p.rapidapi.com",
				"x-rapidapi-key": process.env.REACT_APP_TASTY_KEY,
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
				<p>Time to prepare: {recipe.total_time_minutes} minutes</p>
			</div>
			<div className="ingredients-container">
				<p>{recipe.yields}</p>
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
