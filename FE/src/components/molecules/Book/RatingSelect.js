import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { setSelectedRating } from "../../../reducer/book";

import { RatingBox } from "../../../styles/Book/BookDetailStyle";
import RatingStar from "../../atoms/Icon/RatingStar";

function RatingSelect() {
	const dispatch = useDispatch();

	const [isSelected, setIsSelected] = useState([false, false, false, false, false]);

	const selecteRating = (rating) => {
		let stars = [...isSelected];
		for (let i = 0; i < 5; i++) {
			if (i <= rating - 1) {
				stars[i] = true;
			} else {
				stars[i] = false;
			}
		}

		dispatch(setSelectedRating(rating));
		setIsSelected(stars);
	};

	return (
		<RatingBox gap="8">
			{[1, 2, 3, 4, 5].map((rating, idx) => (
				<div onClick={() => selecteRating(rating)}>
					<RatingStar key={idx} isSelected={isSelected[idx]} height="32" type="button" />
				</div>
			))}
		</RatingBox>
	);
}

export default RatingSelect;
