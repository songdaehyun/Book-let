import React from "react";
import useDate from "../../../hooks/useDate";
import { Hr } from "../../../styles/common/CommonStyle";
import { Text } from "../../../styles/common/TextsStyle";
import {
	MyReviewPreviewBookInfoBox,
	MyReviewPreviewCardBox,
	MyReviewPreviewReviewInfoBox,
} from "../../../styles/Mypage/MypageStyle";
import RatingLabel from "../../atoms/RatingLabel";

function MyReviewPreviewCard({ review }) {
	const dateTimeSeparation = useDate();

	return (
		<MyReviewPreviewCardBox>
			<MyReviewPreviewBookInfoBox>
				<img src={review.bookImgPath} />
				<div>
					<Text size="14" weight="600" marginBottom="4">
						{review.bookTitle}
					</Text>
					<Text size="12">{review.authorName}</Text>
					<Text size="12" color="var(--gray-500)">
						{review.bookPublisher}
					</Text>
				</div>
			</MyReviewPreviewBookInfoBox>
			<Hr top="8" bottom="8" />
			<MyReviewPreviewReviewInfoBox>
				<div>
					<RatingLabel rating={parseInt(review.reviewGrade)} />
					<Text size="14" marginTop="8" marginBottom="8">
						{review.reviewContent}
					</Text>
				</div>
				<Text size="12" color="var(--gray-500)">
					{dateTimeSeparation(review.createdDate)}
				</Text>
			</MyReviewPreviewReviewInfoBox>
		</MyReviewPreviewCardBox>
	);
}

export default MyReviewPreviewCard;
