import React from "react";
import { Link } from "react-router-dom";
import "./Recipe.css";

function Recipe({ recipe }) {
	return (
		<div className="recipe-container">
			<img src={recipe.thumbnail_url} alt={recipe.name} />
			<div className="name-container">{recipe.name}</div>
			{recipe.ratings && <button>Click me</button>}
		</div>
	);
}

export default Recipe;
