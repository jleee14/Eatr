import React, { useState } from "react";
import "./Home.css";
import catData from "./data/cat-search.json";
import mealData from "./data/meal-search.json";
import healthyData from "./data/healthy-search.json";
import { Link, Navigate } from "react-router-dom";

function Home(props) {
	const [searchTerm, setSearchTerm] = useState();
	function handleChange(event) {
		setSearchTerm(event.target.value);
	}
	return (
		<div className="home-container">
			<div className="quick-search-container">
				<p className="search-blurb">Try these categories:</p>
				<div className="circles-container">
					{catData.map((meal) => {
						return (
							<Link to={`/search/${meal.search}`} key={meal.category}>
								<div className="circle-category-container">
									<img src={meal.url} alt={meal.category} />
									<div className="hover-container">{meal.category}</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
			<div className="quick-search-container">
				<p className="search-blurb">Meal search:</p>
				<div className="circles-container" id="meal-container">
					{mealData.map((meal) => {
						return (
							<Link to={`/search/${meal.category}`} key={meal.category}>
								<div className="circle-category-container">
									<img src={meal.url} alt={meal.category} />
									<div className="hover-container">{meal.category}</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
			<div className="quick-search-container">
				<p className="search-blurb">Feeling healthy? Try these categories:</p>
				<div className="circles-container" id="meal-container">
					{healthyData.map((meal) => {
						return (
							<Link to={`/search/${meal.category}`} key={meal.category}>
								<div className="circle-category-container">
									<img src={meal.url} alt={meal.category} />
									<div className="hover-container">{meal.category}</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Home;
