import React from "react";
import { Container } from "../../../styles/common/ContainingsStyle";
import { Span, Text } from "../../../styles/common/TextsStyle";
import InputRatingSection from "../../molecules/Book/InputRatingSection";
import CommentInput from "../../molecules/Input/CommentInput";
import CommentList from "../../molecules/Sentence/CommentList";

function BookReview({ isbn }) {
	const reviews = [
		{
			nickname: "책 좋아하는 루피",
			reviewContent: "왕좌의게임 본사람 여기 모여라",
			reviewGrade: 2,
			createdDate: "2023.03.22T20:07:20",
		},
		{
			nickname: "책 좋아하는 루피",
			reviewContent: "왕좌의게임 본사람 여기 모여라",
			reviewGrade: 4,
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
				<Span>{reviews.length}</Span>
			</Text>
			<InputRatingSection />
			<CommentInput type="리뷰" />
			<CommentList comments={reviews} type="review"/>
		</Container>
	);
}

export default BookReview;
