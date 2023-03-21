import React from "react";
import { Container } from "../../../styles/common/ContainingsStyle";
import { Span, Text } from "../../../styles/common/TextsStyle";
import InputRatingSection from "../../molecules/Book/InputRatingSection";

function BookReview({ isbn }) {
	const review = [
		{
			nickname: "책 좋아하는 루피",
			reviewContent: "왕좌의게임 본사람 여기 모여라",
			reviewGrade: 5,
			createdDate: "2023.01.29T20:07:20",
		},
		{
			nickname: "책 좋아하는 루피",
			reviewContent: "왕좌의게임 본사람 여기 모여라",
			reviewGrade: 5,
			createdDate: "2023.01.29T20:07:20",
		},
	];

	return (
		<Container marginTop="24">
			<Text size="19">
				<Span weight="bold">리뷰</Span>
				<Span marginLeft="8" marginRight="8" color="var(--gray-300)">
					|
				</Span>
				<Span>{review.length}</Span>
			</Text>
			<InputRatingSection />
		</Container>
	);
}

export default BookReview;
