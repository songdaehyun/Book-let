import React from "react";

import BookListTemplates from "../../templates/Book/BookListTemplates";

import BannerImg from "../../../assets/images/Banner/cover-recom-book-banner.png";

function CoverRecomBook(props) {
	const books = {
		recommendType: "bookCover",
		recommend: [
			{
				bookImgPath: "http://image.yes24.com/goods/117317122/FRONT/XL",
				bookTitle: "별의 커비 디스커버리 2",
				authorName: "가리노 타우",
				bookIsbn: 9791164798957,
			},
			{
				bookImgPath: "http://image.yes24.com/goods/117417122/FRONT/XL",
				bookTitle: "별의 커비 디스커버리 2",
				authorName: "가리노 타우",
				bookIsbn: 9791164798957,
			},
			{
				bookImgPath: "http://image.yes24.com/goods/117327164/FRONT/XL",
				bookTitle: "별의 커비 디스커버리 2",
				authorName: "가리노 타우",
				bookIsbn: 9791164798957,
			},
			{
				bookImgPath: "http://image.yes24.com/goods/117337122/FRONT/XL",
				bookTitle: "별의 커비 디스커버리 2",
				authorName: "가리노 타우",
				bookIsbn: 9791164798957,
			},
			{
				bookImgPath: "http://image.yes24.com/goods/117327961/FRONT/XL",
				bookTitle: "별의 커비 디스커버리 2",
				authorName: "가리노 타우",
				bookIsbn: 9791164798957,
			},
		],
	};

	const bannerInfo = {
		title: (
			<>
				좋아하실만한 표지의
				<br /> 책이에요
			</>
		),
		subTitle: (
			<>
				선호하시는 스타일의 표지를 위주로
				<br />
				도서를 추천해드려요.
			</>
		),
		img: BannerImg,
	};

	return (
		<BookListTemplates
			title={bannerInfo.title}
			subTitle={bannerInfo.subTitle}
			img={bannerInfo.img}
			books={books.recommend}
			type={books.recommendType}
		/>
	);
}

export default CoverRecomBook;
