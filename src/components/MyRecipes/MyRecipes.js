import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./MyRecipes.css";
import Recipe from "../Recipe/Recipe";
import Graph from "../Graph/Graph";

function MyRecipes(props) {
	const initialGraphData = {
		recipeName: "",
		ratings: "",
	};
	const [recipeArr, setRecipeArr] = useState([]);
	const [graphData, setGraphData] = useState(initialGraphData);
	const [dataCounter, setDataCounter] = useState(-1);
	const [helpToggle, setHelpToggle] = useState(false);
	function retrieveRecipes(event) {
		for (const storedRecipe in localStorage) {
			const object = localStorage.getItem(storedRecipe);
			const newObject = JSON.parse(object);
			setRecipeArr((recipeArr) => [...recipeArr, newObject]);
		}
	}
	function showHelp(event) {
		setHelpToggle(!helpToggle);
	}
	useEffect(() => {
		retrieveRecipes();
	}, []);
	return (
		<div className="myrecipes-container">
			<div className="link-container">
				{/* for loop returns null values into state, filter necessary to filter them out */}
				{recipeArr
					.filter((fullRecipe) => fullRecipe)
					.map((recipe) => {
						return (
							<>
								<Link to={`../recipe/${recipe.id}`} key={recipe.id}>
									<Recipe
										recipe={recipe}
										key={recipe.id}
										graphData={graphData}
										setGraphData={setGraphData}
										setCount={setDataCounter}
										count={dataCounter}
									/>
								</Link>
							</>
						);
					})}
			</div>
			<div className="graph-compare-container">
				{helpToggle && (
					<div className="modal-container" id="modal">
						<div className="modal-form-container" id="myrecipes-help">
							<h3>How to use the Recipe Comparer</h3>
							<p className="modal-help">
								The recipe comparer is a chart you can use to compare the
								recipes that you've already rated! This tool will help you plan
								meals that are balanced in taste! In order to add a recipe to
								the recipe comparer, double click the red plus on the recipe you
								want to add. You can add up to 2 recipes at a time to the chart.
								In order to clear the recipes, click the "Clear all recipes"
								button on the bottom of the chart! Enjoy!
							</p>
							<button onClick={showHelp}>Ok!</button>
						</div>
					</div>
				)}
				<button id="help-button" onClick={showHelp}>
					?
				</button>
				<h2>Recipe Comparer</h2>
				<Graph
					tasteData={graphData}
					index={dataCounter}
					setCount={setDataCounter}
				/>
			</div>
		</div>
	);
}

export default MyRecipes;
