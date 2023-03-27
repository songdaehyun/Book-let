import React from "react";

import { Container } from "../../../styles/common/ContainingsStyle";
import MyLikeHeading from "../../atoms/Mypage/MyLikeHeading";

import ReturnNavigationBar from "../../molecules/Bar/ReturnNavigationBar";
import BookList from "../../organisms/Book/BookList";

import useArr from "../../../hooks/useArr";
import Empty from "../../molecules/Empty";

function MyLike(props) {
	const count = 15;
	// const books = [
	// {
	// 	bookIsbn: 9788901269061,
	// 	bookImgPath: "http://image.yes24.com/goods/117222565/BACK/XL",
	// 	bookTitle: "목련 만두",
	// 	authorName: "배고픈 사자",
	// },
	// {
	// 	bookIsbn: 9788901269061,
	// 	bookImgPath: "http://image.yes24.com/goods/117222565/BACK/XL",
	// 	bookTitle: "목련 만두",
	// 	authorName: "배고픈 사자",
	// },
	// {
	// 	bookIsbn: 9788901269061,
	// 	bookImgPath: "http://image.yes24.com/goods/117222565/BACK/XL",
	// 	bookTitle: "목련 만두",
	// 	authorName: "배고픈 사자",
	// },
	// {
	// 	bookIsbn: 9788901269061,
	// 	bookImgPath: "http://image.yes24.com/goods/117222565/BACK/XL",
	// 	bookTitle: "목련 만두",
	// 	authorName: "배고픈 사자",
	// },
	// ];

	const [books, setBooks] = useState();

	useEffect(() => {
		(async () => {
			await getMyLike().then((res) => {
				setBooks(res);
			});
		})();
	}, []);

	const isArrEmpty = useArr();

	const emptyInfo = {
		title: "좋아하는 도서가 없어요",
		subTitle: (
			<>
				관심 있거나 읽으신 도서에
				<br />
				좋아요를 남겨주세요!
			</>
		),
		buttonLabel: "도서 탐색하러 가기",
		path: "/book",
	};

	return (
		<div>
			<ReturnNavigationBar title="좋아하는 도서" />
			<Container paddingTop="56" paddingLeft="16" paddingRight="16">
				<MyLikeHeading count={count} />
			</Container>
			{isArrEmpty(books) ? (
				<Empty
					title={emptyInfo.title}
					subTitle={emptyInfo.subTitle}
					buttonLabel={emptyInfo.buttonLabel}
					path={emptyInfo.path}
				/>
			) : (
				<BookList books={books} />
			)}
		</div>
	);
}

export default MyLike;
