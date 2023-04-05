import React, { useState, useEffect } from "react";

import BookListTemplates from "../../templates/Book/BookListTemplates";

import { Span } from "../../../styles/common/TextsStyle";

import { getUserBookRecom } from "../../../apis/BookApi";
import { initBookRecom } from "../../../apis/init/initBook";
import BannerImg from "../../../assets/images/Banner/user-recom-book-banner.png";
import useAsync from "../../../hooks/useAsync";

function UserRecomBook(props) {
	// const books = {
	// 	recommendType: "user",
	// 	// 1: 남, 2: 여
	// 	sex: 1,
	// 	age: 20,
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
	const uName = localStorage.getItem("userName");

	const [userState] = useAsync(getUserBookRecom, uName, initBookRecom, []);
	const { loading, data: recom, error } = userState;
	// const { loading: userLoading, data: recom, error: userError } = userState;


	// useEffect(() => {
	// 	(async () => {
	// 		await getUserBookRecom(uName)
	// 			.then(initBookRecom)
	// 			.then((res) => setRecom(res));
	// 	})();
	// }, []);

	// useEffect(() => {
	// 	console.log(loading);
	// }, [loading]);

	const bannerInfo = {
		title: (
			<>
				<Span size="20" color="var(--primary-600)">
					{recom?.age}세 {recom?.gender}
				</Span>
				이<br /> 많이 읽고 있어요
			</>
		),
		subTitle: (
			<>
				등록해주신 연령과 성별을 기반으로
				<br /> 도서를 추천해드려요
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

export default UserRecomBook;
