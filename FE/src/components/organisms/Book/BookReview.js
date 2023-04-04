import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReview } from "../../../apis/BookApi";
import { initReview } from "../../../apis/init/initBook";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";
import { Container } from "../../../styles/common/ContainingsStyle";
import { Span, Text } from "../../../styles/common/TextsStyle";
import InputRatingSection from "../../molecules/Book/InputRatingSection";
import CommentInput from "../../molecules/Input/CommentInput";
import CommentList from "../../molecules/Sentence/CommentList";

function BookReview({ isReviewed }) {
	const { bId } = useParams();
	const uId = localStorage.getItem("userId");

	const [reviews, setReviews] = useState();
	// const reviews = [
	// 	{
	// 		nickname: "책 좋아하는 루피",
	// 		reviewContent: "왕좌의게임 본사람 여기 모여라",
	// 		reviewGrade: 2,
	// 		createdDate: "2023.03.22T20:07:20",
	// 	},
	// 	{
	// 		nickname: "책 좋아하는 루피",
	// 		reviewContent: "왕좌의게임 본사람 여기 모여라",
	// 		reviewGrade: 4,
	// 		createdDate: "2023.01.29T20:07:20",
	// 	},
	// ];

	// const getReviewApiCall = () => {
	// 	(async () => {
	// 		await getReview(bId, 5, 0)
	// 			.then((res) => initReview(res))
	// 			.then((res) => {
	// 				setReviews(res);
	// 			});
	// 	})();
	// };

	const {
		data,
		apiCall: reviewApiCall,
		isFetching,
	} = useInfiniteScroll({ bId, uId }, getReview, 5, initReview);

	useEffect(() => {
		setReviews(data);
	}, [data]);

	return (
		<Container marginTop="24">
			<Text size="19">
				<Span weight="bold">리뷰</Span>
				<Span marginLeft="8" marginRight="8" color="var(--gray-300)">
					|
				</Span>
				<Span>{reviews?.length || 0}</Span>
			</Text>
			<InputRatingSection />
			<CommentInput
				type="리뷰"
				isReviewed={isReviewed}
				setComments={setReviews}
				getCommentApiCall={reviewApiCall}
			/>
			<CommentList
				comments={reviews}
				type="리뷰"
				setComments={setReviews}
				getCommentApiCall={reviewApiCall}
			/>
		</Container>
	);
}

export default BookReview;
