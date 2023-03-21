import React from "react";
import { RatingBox } from "../../../styles/Book/BookDetailStyle";
import { Span, Text } from "../../../styles/common/TextsStyle";
import RatingButton from "../../atoms/Button/RatingButton";

function BookRatingInfo({ rating }) {
	return (
		<div>
			<Text>
				평균 평점
				<Span weight="bold" marginLeft="8">
					{rating}
				</Span>
			</Text>
			<RatingBox gap="4">
				{[1, 2, 3, 4, 5].map((num, idx) => (
					<div>
						<RatingButton
							key={idx}
							isSelected={num <= rating ? true : false}
							height="20"
						/>
					</div>
				))}
			</RatingBox>
		</div>
	);
}

export default BookRatingInfo;
