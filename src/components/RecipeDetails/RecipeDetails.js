import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./RecipeDetails.css";

function RecipeDetails(props) {
	const initialRating = {
		sweet: 0,
		salty: 0,
		rich: 0,
		spicy: 0,
		sour: 0,
		isRated: false,
	};
	const [recipe, setRecipe] = useState();
	const [instructions, setInstructions] = useState([]);
	const [ingredientSections, setIngredientSections] = useState([]);
	const [rating, setRating] = useState(initialRating);
	const { id } = useParams();
	function ratingSubmit(event) {
		event.preventDefault();
	}
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
			<button id="add-myrecipes">Add to MyRecipes</button>
			<div className="modal-container" id="modal">
				<div className="modal-form-container">
					<form className="rating-container">
						<h3 id="rating-form-name">Rate this dish!</h3>
						<div className="rating-label-container">
							<div className="taste-category">
								<label htmlFor="sweet">Sweetness: </label>
								<input
									type="number"
									min="0"
									max="10"
									className="rating-input"
									id="sweet"
								/>
							</div>
							<div className="taste-category">
								<label htmlFor="salty">Saltiness: </label>
								<input
									type="number"
									min="0"
									max="10"
									className="rating-input"
									id="salty"
								/>
							</div>
							<div className="taste-category">
								<label htmlFor="rich">Richness/Umami: </label>
								<input
									type="number"
									min="0"
									max="10"
									className="rating-input"
									id="rich"
								/>
							</div>
							<div className="taste-category">
								<label htmlFor="spicy">Spiciness: </label>
								<input
									type="number"
									min="0"
									max="10"
									className="rating-input"
									id="spicy"
								/>
							</div>
							<div className="taste-category">
								<label htmlFor="sour">Sour/Bitterness: </label>
								<input
									type="number"
									min="0"
									max="10"
									className="rating-input"
									id="sour"
								/>
							</div>
						</div>
						<button id="rating-save-button">Save your ratings!</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default RecipeDetails;
