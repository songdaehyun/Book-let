import React from "react";
import { Container } from "../../../styles/common/ContainingsStyle";

import MoreBar from "../../molecules/Bar/MoreBar";
import MyReviewPreveiwCardGroup from "../../molecules/Mypage/MyReviewPreveiwCardGroup";

function MyReviewPreviewSection(props) {
	const reviews = [
		{
			bookImgPath: "http://image.yes24.com/goods/117222565/BACK/XL",
			bookTitle: "목련 만두",
			authorName: "백유연",
			bookPublisher: "웅진주니어",
			bookIsbn: 9788901269061,
			reviewGrade: 4.5,
			reviewContent: "꽃과 만두라니 너무 아름답지 않나요??",
			createdDate: "2023-03-9T11:11:11",
		},
		{
			bookImgPath: "http://image.yes24.com/goods/117222565/BACK/XL",
			bookTitle: "목련 만두",
			authorName: "백유연",
			bookPublisher: "웅진주니어",
			bookIsbn: 9788901269061,
			reviewGrade: 4.5,
			reviewContent: "꽃과 만두라니 너무 아름답지 않나요??",
			createdDate: "2023-03-9T11:11:11",
		},
	];

	return (
		<Container marginTop="36" paddingLeft="16" paddingRight="16">
			<MoreBar title="내가 쓴 리뷰" path="review" />
			<MyReviewPreveiwCardGroup reviews={reviews} />
		</Container>
	);
}

export default MyReviewPreviewSection;
