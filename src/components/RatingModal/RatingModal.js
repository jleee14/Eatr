import React, { useState, useEffect } from "react";
import "./RatingModal.css";

function RatingModal({ recipe, modalVisible, modalToggle }) {
	const initialRating = {
		sweet: 0,
		salty: 0,
		rich: 0,
		spicy: 0,
		sour: 0,
	};
	const [rating, setRating] = useState(initialRating);
	const [localRecipe, setLocalRecipe] = useState(recipe);

	function handleChange(event) {
		setRating({ ...rating, [event.target.id]: event.target.value });
	}
	function combineRating(event) {
		setLocalRecipe({
			...localRecipe,
			ratings: rating,
			ratingsArr: [],
		});
	}

	function sendRecipe(event) {
		event.preventDefault();
		combineRating();
		window.localStorage.setItem(localRecipe.id, JSON.stringify(localRecipe));
	}

	useEffect(() => {
		combineRating();
	}, [rating]);
	return (
		<div className="modal-container" id="modal">
			<div className="modal-form-container">
				<form className="rating-container" onSubmit={sendRecipe}>
					<button onClick={modalVisible} id="close-modal">
						X
					</button>
					<h3 id="rating-form-name">Rate this dish!</h3>
					<div className="rating-label-container">
						<div className="taste-category">
							<label htmlFor="sweet">Sweetness: </label>
							<input
								type="number"
								min="0"
								max="10"
								className="rating-input"
								id="sweet"
								value={rating.sweet}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="taste-category">
							<label htmlFor="salty">Saltiness: </label>
							<input
								type="number"
								min="0"
								max="10"
								className="rating-input"
								id="salty"
								value={rating.salty}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="taste-category">
							<label htmlFor="rich">Richness/Umami: </label>
							<input
								type="number"
								min="0"
								max="10"
								className="rating-input"
								id="rich"
								value={rating.rich}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="taste-category">
							<label htmlFor="spicy">Spiciness: </label>
							<input
								type="number"
								min="0"
								max="10"
								className="rating-input"
								id="spicy"
								value={rating.spicy}
								onChange={handleChange}
								required
							/>
						</div>
						<div className="taste-category">
							<label htmlFor="sour">Sour/Bitterness: </label>
							<input
								type="number"
								min="0"
								max="10"
								className="rating-input"
								id="sour"
								value={rating.sour}
								onChange={handleChange}
								required
							/>
						</div>
					</div>
					<button id="rating-save-button">Save your ratings!</button>
				</form>
			</div>
		</div>
	);
}

export default RatingModal;
