import React, { useEffect, useState } from "react";

import BookListTemplates from "../../templates/Book/BookListTemplates";

import { getLikeBookRecom } from "../../../apis/BookApi";
import { initBookRecom } from "../../../apis/init/initBook";
import BannerImg from "../../../assets/images/Banner/like-recom-book-banner.png";

function LikeRecomBook(props) {
	// const books = {
	// 	recommendType: "like",
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

	const uName = localStorage.getItem("userName");

	const [recom, setRecom] = useState();

	useEffect(() => {
		(async () => {
			await getLikeBookRecom(uName)
				.then(initBookRecom)
				.then((res) => setRecom(res));
		})();
	}, []);

	const bannerInfo = {
		title: (
			<>
				이것들 또한
				<br /> 좋아하게 될거예요
			</>
		),
		subTitle: (
			<>
				좋아요를 누르신 도서와
				<br />
				유사한 도서를 추천해드려요.
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

export default LikeRecomBook;
