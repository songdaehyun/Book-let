import React, {useState, useEffect} from "react";

import BookListTemplates from "../../templates/Book/BookListTemplates";

import BannerImg from "../../../assets/images/Banner/cover-recom-book-banner.png";
import { getCoverBookRecom } from "../../../apis/BookApi";
import { initBookRecom } from "../../../apis/init/initBook";

function CoverRecomBook(props) {
	// const books = {
	// 	recommendType: "bookCover",
	// 	recommend: [
	// 		{
	// 			bookImgPath: "http://image.yes24.com/goods/117317122/FRONT/XL",
	// 			bookTitle: "별의 커비 디스커버리 2",
	// 			authorName: "가리노 타우",
	// 			bookIsbn: 9791164798957,
	// 		},
	// 		{
	// 			bookImgPath: "http://image.yes24.com/goods/117417122/FRONT/XL",
	// 			bookTitle: "별의 커비 디스커버리 2",
	// 			authorName: "가리노 타우",
	// 			bookIsbn: 9791164798957,
	// 		},
	// 		{
	// 			bookImgPath: "http://image.yes24.com/goods/117327164/FRONT/XL",
	// 			bookTitle: "별의 커비 디스커버리 2",
	// 			authorName: "가리노 타우",
	// 			bookIsbn: 9791164798957,
	// 		},
	// 		{
	// 			bookImgPath: "http://image.yes24.com/goods/117337122/FRONT/XL",
	// 			bookTitle: "별의 커비 디스커버리 2",
	// 			authorName: "가리노 타우",
	// 			bookIsbn: 9791164798957,
	// 		},
	// 		{
	// 			bookImgPath: "http://image.yes24.com/goods/117327961/FRONT/XL",
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
			await getCoverBookRecom(uId)
				.then(initBookRecom)
				.then((res) => setRecom(res));
		})();
	}, []);

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
			type={recom.type}
			books={recom.books}
		/>
	);
}

export default CoverRecomBook;
