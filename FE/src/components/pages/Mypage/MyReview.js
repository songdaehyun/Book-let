import React from "react";

import { Container } from "../../../styles/common/ContainingsStyle";
import ReturnNavigationBar from "../../molecules/Bar/ReturnNavigationBar";
import MyReviewList from "../../organisms/Mypage/MyReviewList";

import useArr from "../../../hooks/useArr";
import Empty from "../../molecules/Empty";
import { getMyReview } from "../../../apis/userApi";

function MyReview(props) {
	const [reviews, setReviews] = useState([]);

	// const reviews = [
	// {
	// 	bookImgPath: "http://image.yes24.com/goods/117222565/BACK/XL",
	// 	bookTitle: "목련 만두",
	// 	authorName: "백유연",
	// 	bookPublisher: "웅진주니어",
	// 	bookIsbn: 9788901269061,
	// 	reviewGrade: 4.5,
	// 	reviewContent: "꽃과 만두라니 너무 아름답지 않나요??",
	// 	createdDate: "2023-03-9T11:11:11",
	// },
	// {
	// 	bookImgPath: "http://image.yes24.com/goods/117222565/BACK/XL",
	// 	bookTitle: "목련 만두",
	// 	authorName: "백유연",
	// 	bookPublisher: "웅진주니어",
	// 	bookIsbn: 9788901269061,
	// 	reviewGrade: 4.5,
	// 	reviewContent: "꽃과 만두라니 너무 아름답지 않나요??",
	// 	createdDate: "2023-03-9T11:11:11",
	// },
	// ];

	useEffect(() => {
		(async () => {
			await getMyReview().then((res) => {
				setReviews(res);
			});
		})();
	}, []);

	const isArrEmpty = useArr();

	const emptyInfo = {
		title: "작성한 리뷰가 없어요",
		subTitle: (
			<>
				평점과 리뷰가 있으면
				<br />
				더욱 알맞는 도서 추천을 해드릴 수 있어요!
			</>
		),
		buttonLabel: "도서 탐색하러 가기",
		path: "/book",
	};

	return (
		<div>
			<ReturnNavigationBar title="내가 쓴 리뷰" />
			<Container paddingTop="75" paddingLeft="16" paddingRight="16">
				{isArrEmpty(reviews) ? (
					<Empty
						title={emptyInfo.title}
						subTitle={emptyInfo.subTitle}
						buttonLabel={emptyInfo.buttonLabel}
						path={emptyInfo.path}
					/>
				) : (
					<MyReviewList reviews={reviews} />
				)}
			</Container>
		</div>
	);
}

export default MyReview;
