import React, { useEffect } from "react";

import BookListTemplates from "../../templates/Book/BookListTemplates";

import { useParams } from "react-router-dom";
import { Span } from "../../../styles/common/TextsStyle";

import BannerImg from "../../../assets/images/Banner/author-book-banner.png";
import { getAuthorBooks } from "../../../apis/BookApi";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";
import { initAuthorBooks } from "../../../apis/init/initBook";

function AuthorBook(props) {
	const { aId } = useParams();

	const { data: books, isFetching } = useInfiniteScroll(aId, getAuthorBooks, 9, initAuthorBooks);
	
	// const books = {
	// 	authorName: "정지음",
	// 	authorId: "111",
	// 	books: [
	// 		{
	// 			bookImgPath: "http://image.yes24.com/goods/117317122/FRONT/XL",
	// 			bookTitle: "별의 커비 디스커버리 2",
	// 			authorName: "가리노 타우",
	// 			bookIsbn: 9791164798957,
	// 		},
	// 		{
	// 			bookImgPath: "http://image.yes24.com/goods/117327161/FRONT/XL",
	// 			bookTitle: "별의 커비 디스커버리 2",
	// 			authorName: "가리노 타우",
	// 			bookIsbn: 9791164798957,
	// 		},
	// 		{
	// 			bookImgPath: "http://image.yes24.com/goods/117327161/FRONT/XL",
	// 			bookTitle: "별의 커비 디스커버리 2",
	// 			authorName: "가리노 타우",
	// 			bookIsbn: 9791164798957,
	// 		},
	// 		{
	// 			bookImgPath: "http://image.yes24.com/goods/117327161/FRONT/XL",
	// 			bookTitle: "별의 커비 디스커버리 2",
	// 			authorName: "가리노 타우",
	// 			bookIsbn: 9791164798957,
	// 		},
	// 		{
	// 			bookImgPath: "http://image.yes24.com/goods/117327161/FRONT/XL",
	// 			bookTitle: "별의 커비 디스커버리 2",
	// 			authorName: "가리노 타우",
	// 			bookIsbn: 9791164798957,
	// 		},
	// 	],
	// };

	const bannerInfo = {
		title: (
			<>
				<Span size="19" weight="bold" color="var(--primary-600)">
					{books[0]?.author}&nbsp;
				</Span>
				작가의
				<br />
				책이에요
			</>
		),
		subTitle: <>작가님은 어떤 책을 쓰셨을까요?</>,
		img: BannerImg,
	};

	return (
		<BookListTemplates
			title={bannerInfo.title}
			subTitle={bannerInfo.subTitle}
			img={bannerInfo.img}
			books={books}
		/>
	);
}

export default AuthorBook;
