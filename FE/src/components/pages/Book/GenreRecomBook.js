import React, { useEffect, useState } from "react";

import BookListTemplates from "../../templates/Book/BookListTemplates";

import { Span } from "../../../styles/common/TextsStyle";

import { getGenreBookRecom } from "../../../apis/BookApi";
import { initBookRecom } from "../../../apis/init/initBook";
import BannerImg from "../../../assets/images/Banner/genre-recom-book-banner.png";

function GenreRecomBook(props) {
	// const books = {
	// 	recommendType: "genre",
	// 	genreName: "창작동화",
	// 	recommend: [
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
	// 	],
	// };

	const uId = localStorage.getItem("userId");

	const [recom, setRecom] = useState();

	useEffect(() => {
		(async () => {
			await getGenreBookRecom(uId)
				.then(initBookRecom)
				.then((res) => setRecom(res));
		})();
	}, []);

	const bannerInfo = {
		title: (
			<>
				오늘&nbsp;
				<Span size="19" weight="bold" color="var(--primary-600)">
					{recom?.genre}
				</Span>
				는 어때요?
			</>
		),
		subTitle: (
			<>
				이 장르에서 좋아하실만한
				<br />
				도서를 추천해드려요
			</>
		),
		img: BannerImg,
	};

	return (
		<BookListTemplates
			title={bannerInfo.title}
			subTitle={bannerInfo.subTitle}
			img={bannerInfo.img}
			type={recom.type}
			books={recom.books}
		/>
	);
}

export default GenreRecomBook;
