import React from "react";
import { useParams } from "react-router-dom";

import ReturnNavigationBar from "../../molecules/Bar/ReturnNavigationBar";
import BookDetailOverview from "../../molecules/Book/BookDetailOverview";

import { SeparationBar } from "../../../styles/common/BarsStyle";
import { Container } from "../../../styles/common/ContainingsStyle";
import BookBuyButton from "../../atoms/Button/BookBuyButton";
import LikeToolbar from "../../molecules/Bar/LikeToolbar";
import AuthorOthreBookPreview from "../../organisms/Book/AuthorOtherBookPreview";
import BookDescription from "../../organisms/Book/BookDescription";
import BookRatingInfo from "../../organisms/Book/BookRatingInfo";
import BookReview from "../../organisms/Book/BookReview";

function BookDetail(props) {
	const { bId } = useParams();

	// 더미
	const book = {
		bookImgPath: "http://image.yes24.com/goods/74589337/XL",
		bookTitle: "얼음과 불의 세계",
		bookAuthor: "조지 R. R. 마틴",
		bookAuthorId: 111,
		bookPublisher: "메롱 출판사",
		genreNames: ["판타지", "테마소설", "영미 장편소설"],
		description:
			"시타델의 한 젊은 마에스터는 웨스테로스 역사상 처음으로 거대한 프로젝트에 착수한다. 바로 웨스테로스는 물론 ‘알려진 세계’ 전체에 대한 모든 것을 담은 책을 펴내는 것이다. 여러 해에 걸쳐 자료를 모으고 집필하는 동안 왕이 두 번 바뀌었다. 왕좌를 두고 일어난 거대한 전쟁은 시타델 밖의 세계를 혼돈 속으로 몰아넣었다. 그러나 빛나는 지식과 지식의 수호자는 세상의 흐름에도 지지 않는 법. 여기 그의 정열과 땀의 결정체가 있으니, 이름하여 「얼음과 불의 세계」라 하노라.",
		bookIsbn: 9791160859232,
		authorId: 1234,
		authorOtherBooks: [
			{
				bookImgPath: "http://image.yes24.com/goods/103190141/XL",
				bookTitle: "와일드카드 1",
				bookAuthor: "조지 R. R. 마틴",
			},
			{
				bookImgPath: "http://image.yes24.com/goods/103190141/XL",
				bookTitle: "와일드카드 1",
				bookAuthor: "조지 R. R. 마틴",
			},
			{
				bookImgPath: "http://image.yes24.com/goods/103190141/XL",
				bookTitle: "와일드카드 1",
				bookAuthor: "조지 R. R. 마틴",
			},
			{
				bookImgPath: "http://image.yes24.com/goods/103190141/XL",
				bookTitle: "와일드카드 1",
				bookAuthor: "조지 R. R. 마틴",
			},
			{
				bookImgPath: "http://image.yes24.com/goods/103190141/XL",
				bookTitle: "와일드카드 1",
				bookAuthor: "조지 R. R. 마틴",
			},
		],
		bookLike: true,
		likesNumber: 30,
		liikesProfileImg: [
			"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcTHA8sTYngrF9FsGFcsv_vq3_ULeEG7DvrsIJLohckJnRPw4XBAx-Z9wQ6XOhMc-pzpaijFkpUWC86SKqE",
			"https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg",
			"https://image.edaily.co.kr/images/Photo/files/NP/S/2022/06/PS22061500966.jpg",
		],
		bookScore: 3.0,
	};

	console.log(bId);
	return (
		<>
			<ReturnNavigationBar title={book.bookTitle} />
			<Container paddingLeft="16" paddingRight="16">
				<BookDetailOverview
					cover={book.bookImgPath}
					title={book.bookTitle}
					author={book.bookAuthor}
					publisher={book.bookPublisher}
					genres={book.genreNames}
				/>
				<Container marginTop="24" marginBottom="24">
					<LikeToolbar info={book} type="like" />
				</Container>
				<BookBuyButton isbn={book.bookIsbn} />
				<BookDescription book={book} />
				<AuthorOthreBookPreview book={book} />
			</Container>
			<SeparationBar top="40" bottom="40" />

			<Container paddingLeft="16" paddingRight="16">
				<BookRatingInfo rating={parseInt(book.bookScore)} />
				<BookReview isbn={book.isbn} />
			</Container>
		</>
	);
}

export default BookDetail;
