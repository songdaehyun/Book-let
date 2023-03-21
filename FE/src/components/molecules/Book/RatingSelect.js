import React, { useState } from "react";

import { RatingBox } from "../../../styles/Book/BookDetailStyle";
import RatingButton from "../../atoms/Button/RatingButton";

function RatingSelect(props) {
	const [selected, setSelected] = useState(0);
	const [isSelected, setIsSelected] = useState([false, false, false, false, false]);

	const handleClickRating = (rating) => {
		setIsSelected(isSelected);
	};

	const selecteRating = (rating) => {
		let star = [...isSelected];
		for (let i = 0; i < 5; i++) {
			if (i <= rating - 1) {
				star[i] = true;
			} else {
				star[i] = false;
			}
			// star[i] = i <= index ? true : false;
		}
		setSelected(rating);
		setIsSelected(star);
		console.log(rating);

		// 선택된 점수보다 높은 점수라면 노란색이 됨
		if (rating >= selected) {
			return true;
		}

		return false;
	};

	return (
		<RatingBox gap="8">
			{[1, 2, 3, 4, 5].map((rating, idx) => (
				<div onClick={() => selecteRating(rating)}>
					<RatingButton key={idx} isSelected={isSelected[idx]} height="32" />
				</div>
			))}
		</RatingBox>
	);
}

export default RatingSelect;
