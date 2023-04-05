import React, { useEffect, useState } from "react";

import BookListTemplates from "../../templates/Book/BookListTemplates";

import { Span } from "../../../styles/common/TextsStyle";

import { getRatingBookRecom } from "../../../apis/BookApi";
import { initBookRecom, initBookRecomOther } from "../../../apis/init/initBook";
import BannerImg from "../../../assets/images/Banner/rating-recom-book-banner.png";
import useAsync from "../../../hooks/useAsync";

function RatingRecomBook(props) {
	const nickname = "루피는 좋아";

	// const books = {
	// 	recommendType: "score",
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

	// const [books, setBooks] = useState();

	// useEffect(() => {
	// 	(async () => {
	// 		await getRatingBookRecom(uName)
	// 			.then(initBookRecomOther)
	// 			.then((res) => setBooks(res));
	// 	})();
	// }, []);

	const [state] = useAsync(getRatingBookRecom, uName, initBookRecom, []);
	const { loading, data: recom, error } = state;

	const bannerInfo = {
		title: (
			<>
				<Span size="19" weight="bold" color="var(--primary-600)">
					{nickname}
				</Span>
				님이 <br />
				높은 평점을 주실 책이에요
			</>
		),
		subTitle: (
			<>
				아직 읽지 않으신 것 중에서
				<br />
				예상 평점이 높은 도서를 추천해드려요
			</>
		),
		img: BannerImg,
	};

	const emptyInfo = {
		title: `아직 관련 내역이 없어요`,
		subTitle: (
			<>
				좋아요와 리뷰를 남겨주시면
				<br /> 마음에 들 추천을 해드릴게요
			</>
		),
		buttonLabel: "책 탐색하러 가기",
		path: "/book/search",
	};

	return (
		<BookListTemplates
			title={bannerInfo.title}
			subTitle={bannerInfo.subTitle}
			img={bannerInfo.img}
			type={recom?.type}
			books={recom?.books}
			emptyInfo={emptyInfo}
			loading={loading}
			error={error}
		/>
	);
}

export default RatingRecomBook;
