import React from "react";
import "./Home.css";
import catData from "./data/cat-search.json";
import mealData from "./data/meal-search.json";
import healthyData from "./data/healthy-search.json";
import { Link } from "react-router-dom";

function Home(props) {
	return (
		<div className="home-container">
			<div className="quick-search-container ">
				<p className="search-blurb">
					Looking for recipe ideas? Try these categories:
				</p>
				<div className="circles-container animate__animated animate__backInDown">
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
				<p className="search-blurb">
					Looking for a meal in specific? Try these:
				</p>
				<div
					className="circles-container animate__animated animate__backInLeft"
					id="meal-container"
				>
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
				<div
					className="circles-container animate__animated animate__backInRight"
					id="meal-container"
				>
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
