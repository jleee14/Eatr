import React, { useState } from "react";
import {
	Chart as ChartJS,
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
	RadialLinearScale,
	PointElement,
	LineElement,
	Filler,
	Tooltip,
	Legend
);

export default function Graph({ recipeArr }) {
	// function createRatingArr()
	// function createNewDataset()
	const data = {
		labels: ["Sweet", "Salty", "Rich/Umami", "Spicy", "Sour/Bitter"],
		datasets: [
			{
				label: "",
				data: [10, 0, 0, 0, 0],
				backgroundColor: "rgba(0, 0, 0, 0)",
				borderColor: "rgba(0, 0, 0, 0)",
				borderWidth: 1,
			},
			{
				label: "",
				data: [2, 6, 3, 5, 2],
				backgroundColor: "rgba(255, 99, 132, 0.2)",
				borderColor: "rgba(255, 99, 132, 1)",
				borderWidth: 1,
			},
			{
				label: "",
				data: [],
				backgroundColor: "rgba(55, 99, 2, 0.2)",
				borderColor: "rgba(55, 99, 2, 1)",
				borderWidth: 1,
			},
		],
	};
	const [ratings, setRatings] = useState();
	const [graphData, setGraphData] = useState(data);
	return <Radar data={data} />;
}

// data.datasets

// recipeArr[i].ratings

// filter, get accurate array.

// for in Loops ==> get ratings
