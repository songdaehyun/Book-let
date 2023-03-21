import React from "react";
import { InputRatingSectionBox } from "../../../styles/Book/BookDetailStyle";
import { Text } from "../../../styles/common/TextsStyle";
import Rating from "./RatingSelect";

function InputRatingSection(props) {
	return (
		<InputRatingSectionBox>
			<Text size="14" color="var(--gray-500)" marginBottom="12">
				이 책이 어떠셨나요?
			</Text>
			<Rating />
		</InputRatingSectionBox>
	);
}

export default InputRatingSection;
