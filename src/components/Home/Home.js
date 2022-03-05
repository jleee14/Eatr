import React, { useState } from "react";
import "./Home.css";
import catData from "./data/cat-search.json";
import mealData from "./data/meal-search.json";
import { Link, useLinkClickHandler } from "react-router-dom";

function Home(props) {
	const [searchTerm, setSearchTerm] = useState();
	function handleChange(event) {
		setSearchTerm(event.target.value);
	}
	return (
		<div className="home-container">
			<div className="quick-search-container">
				<p>Try these categories:</p>
				<div className="circles-container">
					{catData.map((category) => {
						return (
							<Link to={`/search/${category.search}`} key={category.category}>
								<div className="circle-category-container">
									<img src={category.url} alt={category.category} />
									<div className="hover-container">{category.category}</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
			<div className="quick-search-container">
				<p>Meal search:</p>
				<div className="circles-container" id="meal-container">
					{mealData.map((meal) => {
						return (
							<Link to={`/search/${meal.meal}`} key={meal.meal}>
								<div className="circle-category-container">
									<img src={meal.url} alt={meal.meal} />
									<div className="hover-container">{meal.meal}</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
			<div className="search-container">
				{/* separate searchForm component not used b/c of label for UI/UX. Label would not make sense on the "search" page, did not want to add extra props/usecontext for one label*/}
				<label htmlFor="recipe-search">
					Already know what you want? Search for it below!
				</label>
				<div className="search-bar">
					<input type="text" id="recipe-search" onChange={handleChange} />
					<Link to={`/search/${searchTerm}`}>
						<button>Search</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Home;
