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
	function retrieveRecipes(event) {
		for (const storedRecipe in localStorage) {
			const object = localStorage.getItem(storedRecipe);
			const newObject = JSON.parse(object);
			setRecipeArr((recipeArr) => [...recipeArr, newObject]);
		}
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
