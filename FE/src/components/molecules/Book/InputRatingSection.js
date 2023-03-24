import React, { useState } from "react";
import { InputRatingSectionBox } from "../../../styles/Book/BookDetailStyle";
import { Text } from "../../../styles/common/TextsStyle";
import RatingText from "../../atoms/RatingText";
import RatingSelect from "./RatingSelect";

function InputRatingSection(props) {
	const [selectedRating, setSelectedRating] = useState(0);

	return (
		<InputRatingSectionBox>
			<Text size="14" color="var(--gray-500)" marginBottom="8">
				이 책이 어떠셨나요?
			</Text>
			<RatingSelect selectedRating={selectedRating} setSelectedRating={setSelectedRating} />
			<RatingText selectedRating={selectedRating} />
		</InputRatingSectionBox>
	);
}

export default InputRatingSection;
