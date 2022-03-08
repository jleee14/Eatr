import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Recipe.css";

function Recipe({ recipe, setGraphData }) {
	const initialGraphData = {
		recipeName: "",
		ratings: "",
	};
	function clickSet(event) {
		event.preventDefault();
		setGraphData({
			...initialGraphData,
			recipeName: recipe.name,
			ratings: recipe.ratings,
		});
	}
	return (
		<div className="recipe-container">
			<img src={recipe.thumbnail_url} alt={recipe.name} />
			<div className="name-container">{recipe.name}</div>
			{recipe.ratings && (
				<button onClick={clickSet} id="set-recipe">
					+
				</button>
			)}
		</div>
	);
}

export default Recipe;
