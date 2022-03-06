import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./RecipeDetails.css";

function RecipeDetails(props) {
	const [recipe, setRecipe] = useState();
	const [instructions, setInstructions] = useState([]);
	const [ingredientSections, setIngredientSections] = useState([]);
	const [ingredients, setIngredients] = useState();
	const { id } = useParams();
	useEffect(() => {
		fetch(`https://tasty.p.rapidapi.com/recipes/get-more-info?id=${id}`, {
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
			<div className="name-details-container">
				<h2>{recipe.name}</h2>
				{recipe.total_time_minutes && (
					<p>Time to prepare: {recipe.total_time_minutes} minutes</p>
				)}
				{recipe.yields && <p>{recipe.yields}</p>}
			</div>
			<div className="media-container">
				{recipe.original_video_url ? (
					<video controls width="450">
						<source src={recipe.original_video_url} type="video/mp4"></source>
					</video>
				) : (
					<img src={recipe.thumbnail_url} alt={recipe.name} id="recipe-image" />
				)}
			</div>
			<div className="description-container">
				<p>{recipe.description}</p>
			</div>
			<div className="ingredients-container">
				<h4>Ingredients</h4>
				{ingredientSections.map((ingredient) => {
					return (
						<ul key={ingredient.name}>
							<span>{ingredient.name}</span>

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
