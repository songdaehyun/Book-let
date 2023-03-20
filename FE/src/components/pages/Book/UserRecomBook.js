import React from "react";
import { Container } from "../../../styles/common/ContainingsStyle";
import { Span } from "../../../styles/common/TextsStyle";

import TopBanner from "../../molecules/Banner/TopBanner";
import ReturnNavigationBar from "../../molecules/Bar/ReturnNavigationBar";

import BannerImg from "../../../assets/images/Banner/user-recom-book-banner.png";
import BookList from "../../organisms/Book/BookList";

function UserRecomBook(props) {
	const userBooks = {
		recommendType: "user",
		// 1: 남, 2: 여
		sex: 1,
		age: 20,
		recommend: [
			{
				bookImgPath: "http://image.yes24.com/goods/117317122/FRONT/XL",
				bookTitle: "별의 커비 디스커버리 2",
				authorNames: ["가리노 타우"],
				bookIsbn: 9791164798957,
			},
			{
				bookImgPath: "http://image.yes24.com/goods/117327161/FRONT/XL",
				bookTitle: "별의 커비 디스커버리 2",
				authorNames: ["가리노 타우"],
				bookIsbn: 9791164798957,
			},
			{
				bookImgPath: "http://image.yes24.com/goods/117327161/FRONT/XL",
				bookTitle: "별의 커비 디스커버리 2",
				authorNames: ["가리노 타우"],
				bookIsbn: 9791164798957,
			},
			{
				bookImgPath: "http://image.yes24.com/goods/117317122/FRONT/XL",
				bookTitle: "별의 커비 디스커버리 2",
				authorNames: ["가리노 타우"],
				bookIsbn: 9791164798957,
			},
			{
				bookImgPath: "http://image.yes24.com/goods/117327161/FRONT/XL",
				bookTitle: "별의 커비 디스커버리 2",
				authorNames: ["가리노 타우"],
				bookIsbn: 9791164798957,
			},
			{
				bookImgPath: "http://image.yes24.com/goods/117327161/FRONT/XL",
				bookTitle: "별의 커비 디스커버리 2",
				authorNames: ["가리노 타우"],
				bookIsbn: 9791164798957,
			},
		],
	};

	const bannerInfo = {
		title: (
			<>
				<Span size="20" color="var(--primary-600)">
					20대 여성
				</Span>
				이<br /> 많이 읽고 있어요
			</>
		),
		subTitle: (
			<>
				등록해주신 연령과 성별을 기반으로
				<br /> 도서를 추천해드려요.
			</>
		),
		img: BannerImg,
	};

	return (
		<div>
			<ReturnNavigationBar />
			<Container paddingTop="48">
				<TopBanner
					title={bannerInfo.title}
					subTitle={bannerInfo.subTitle}
					img={bannerInfo.img}
				/>
			</Container>
			{/* <Container paddingLeft="16" paddingRight="16"> */}
				<BookList books={userBooks.recommend} />
			{/* </Container> */}
		</div>
	);
}

export default UserRecomBook;
