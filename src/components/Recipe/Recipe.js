import React from "react";
import { Link } from "react-router-dom";

function Recipe({ recipe }) {
	return (
		<div className="recipe-container">
			<h3>{recipe.name}</h3>
		</div>
	);
}

export default Recipe;
