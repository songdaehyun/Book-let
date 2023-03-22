import React from "react";
import { Container } from "../../../styles/common/ContainingsStyle";
import PreviewBookSection from "../Book/PreviewBookSection";

function MyLikePreviewSection(props) {
	const books = [
		{
			bookIsbn: 9788901269061,
			bookImgPath: "http://image.yes24.com/goods/117222565/BACK/XL",
			bookTitle: "목련 만두",
			authorName: "배고픈 사자",
		},
		{
			bookIsbn: 9788901269061,
			bookImgPath: "http://image.yes24.com/goods/117222565/BACK/XL",
			bookTitle: "목련 만두",
			authorName: "배고픈 사자",
		},
	];

	return (
		<Container marginTop="56" paddingLeft="16" paddingRight="16">
			<PreviewBookSection title="좋아하는 도서" path="like" books={books} />
		</Container>
	);
}

export default MyLikePreviewSection;
