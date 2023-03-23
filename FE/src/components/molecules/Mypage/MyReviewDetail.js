import React from "react";

import useDate from "../../../hooks/useDate";
import { TextBtn } from "../../../styles/common/ButtonsStyle";

import { Text } from "../../../styles/common/TextsStyle";
import {
	MyReviewDetailBox,
	MyReviewDetailHeadingBox,
	MyReviewPreviewBookInfoBox,
	MyReviewPreviewReviewInfoBox,
} from "../../../styles/Mypage/MypageStyle";
import RatingLabel from "../../atoms/RatingLabel";

function MyReviewDetail({ review }) {
	const dateTimeSeparation = useDate();

	return (
		<MyReviewDetailBox>
			<MyReviewPreviewBookInfoBox>
				<img src={review.bookImgPath} />
				<div>
					<MyReviewDetailHeadingBox>
						<Text size="14" weight="600" marginBottom="4">
							{review.bookTitle}
						</Text>
						<TextBtn size="14">삭제</TextBtn>
					</MyReviewDetailHeadingBox>
					<Text size="12">{review.authorName}</Text>
					<Text size="12" color="var(--gray-500)">
						{review.bookPublisher}
					</Text>
				</div>
			</MyReviewPreviewBookInfoBox>
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
		</MyReviewDetailBox>
	);
}

export default MyReviewDetail;
