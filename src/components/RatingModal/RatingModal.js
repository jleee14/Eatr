import React, { useState } from "react";
import "./RatingModal.css";

function RatingModal({ recipe }) {
	const initialRating = {
		sweet: 0,
		salty: 0,
		rich: 0,
		spicy: 0,
		sour: 0,
		isRated: false,
	};
	return (
		<div className="modal-container" id="modal">
			<div className="modal-form-container">
				<form className="rating-container">
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
