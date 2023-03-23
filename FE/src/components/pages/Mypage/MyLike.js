import React from "react";

import { Container } from "../../../styles/common/ContainingsStyle";
import MyLikeHeading from "../../atoms/Mypage/MyLikeHeading";

import ReturnNavigationBar from "../../molecules/Bar/ReturnNavigationBar";
import BookList from "../../organisms/Book/BookList";

function MyLike(props) {
	const count = 15;
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
		<div>
			<ReturnNavigationBar title="좋아하는 도서" />
			<Container paddingTop="56" paddingLeft="16" paddingRight="16">
				<MyLikeHeading count={count} />
			</Container>
			<BookList books={books} />
		</div>
	);
}

export default MyLike;
