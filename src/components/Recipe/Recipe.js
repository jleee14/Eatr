import React from "react";
import "./Recipe.css";

function Recipe({ recipe, graphData, setGraphData, count, setCount }) {
	function clickSet(event) {
		event.preventDefault();
		setGraphData({
			...graphData,
			recipeName: recipe.name,
			ratings: recipe.ratings,
		});
		increaseCounter();
	}
	function increaseCounter(event) {
		if (count === 1) {
			setCount(1);
		} else {
			setCount(count + 1);
		}
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
