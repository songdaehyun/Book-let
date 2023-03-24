import React from "react";
import { Text } from "../../styles/common/TextsStyle";

function RatingText({ selectedRating }) {
	const ratingTextList = ["별로예요", "아쉬워요", "보통이에요", "좋아요", "최고예요"];

	return (
		<Text size="14" color="var(--yellow)" weight="bold" marginTop="8">
			{ratingTextList[selectedRating - 1]}
		</Text>
	);
}

export default RatingText;
