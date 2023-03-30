import React, { useState, useEffect } from "react";
import {
	getCoverBookRecom,
	getGenreBookRecom,
	getLikeBookRecom,
	getRatingBookRecom,
	getUserBookRecom,
} from "../../../apis/BookApi";
import { initBookRecom } from "../../../apis/init/initBook";
import { Container } from "../../../styles/common/ContainingsStyle";
import { Span } from "../../../styles/common/TextsStyle";
import TabBar from "../../molecules/Bar/TabBar";
import BookHeading from "../../molecules/Book/BookHeading";
import PreviewBookSection from "../../organisms/Book/PreviewBookSection";

function Book(props) {
	const uName = localStorage.getItem("userName");

	const [userBooks, setUserBooks] = useState();
	const [ratingBooks, setRatingBooks] = useState();
	const [likeBooks, setLikeBooks] = useState();
	const [genreBooks, setGenreBooks] = useState();
	const [coverBooks, setCoverBooks] = useState();

	// 더미 데이터
	// const uName = "루피는 좋아";
	// const userBooks = {
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
	// 	],
	// };
	// const ratingBooks = {
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
	// 	],
	// };
	// const likeBooks = {
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
	// 	],
	// };
	// const genreBooks = {
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
	// const coverBooks = {
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

	const getUserRecomApiCall = () => {
		(async () => {
			await getUserBookRecom(uName)
				.then(initBookRecom)
				.then((res) => setUserBooks(res));
		})();
	};
	const getRatingRecomApiCall = () => {
		(async () => {
			await getRatingBookRecom(uName)
				.then(initBookRecom)
				.then((res) => setRatingBooks(res));
		})();
	};
	const getLikeRecomApiCall = () => {
		(async () => {
			await getLikeBookRecom(uName)
				.then(initBookRecom)
				.then((res) => setLikeBooks(res));
		})();
	};
	const getGenreRecomApiCall = () => {
		(async () => {
			await getGenreBookRecom(uName)
				.then(initBookRecom)
				.then((res) => setGenreBooks(res));
		})();
	};
	const getCoverRecomApiCall = () => {
		(async () => {
			await getCoverBookRecom(uName)
				.then(initBookRecom)
				.then((res) => setCoverBooks(res));
		})();
	};

	useEffect(() => {
		getUserRecomApiCall();
		getLikeRecomApiCall();
		getCoverRecomApiCall();
		getGenreRecomApiCall();
		getRatingRecomApiCall();
	}, []);

	const userRecomTitle = (
		<>
			<Span size="19" weight="bold" color="var(--primary-600)">
				{userBooks?.age}세 {userBooks?.sex === 1 ? "남성" : "여성"}
			</Span>
			이 많이 읽고 있어요
		</>
	);

	const ratingRecomTitle = (
		<>
			<Span size="19" weight="bold" color="var(--primary-600)">
				{uName}
			</Span>
			님이 <br />
			높은 평점을 주실 책이에요
		</>
	);

	const likeRecomTitle = <>이것들 또한 좋아하게 될거예요</>;

	const genreRecomTitle = (
		<>
			오늘&nbsp;
			<Span size="19" weight="bold" color="var(--primary-600)">
				{genreBooks?.genreName}
			</Span>
			는 어때요?
		</>
	);

	const coverRecomTitle = <>좋아하실만한 표지의 책이에요</>;

	return (
		<>
			<Container paddingTop="24" paddingLeft="16" paddingRight="16" paddingBottom="51">
				<BookHeading />
				<PreviewBookSection title={userRecomTitle} books={userBooks} path="recom/user" />
				<PreviewBookSection
					title={ratingRecomTitle}
					books={ratingBooks}
					path="recom/rating"
				/>
				<PreviewBookSection title={likeRecomTitle} books={likeBooks} path="recom/like" />
				<PreviewBookSection title={genreRecomTitle} books={genreBooks} path="recom/genre" />
				<PreviewBookSection title={coverRecomTitle} books={coverBooks} path="recom/cover" />
			</Container>
			<TabBar selected={2} />
		</>
	);
}

export default Book;
