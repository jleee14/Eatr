import React from "react";
import catData from "./data/cat-search.json";
import mealData from "./data/meal-search.json";
import { Link } from "react-router-dom";

function Home(props) {
	return (
		<div className="home-container">
			<div className="category-container">
				{catData.map((category) => {
					return (
						<Link to={`/search/${category.search}`} key={category.category}>
							<div>{category.category}</div>
						</Link>
					);
				})}
			</div>
			<div className="meal-container">
				{mealData.map((meal) => {
					return (
						<Link to={`/search/${meal.meal}`} key={meal.meal}>
							<div>{meal.meal}</div>
						</Link>
					);
				})}
			</div>
		</div>
	);
}

export default Home;
