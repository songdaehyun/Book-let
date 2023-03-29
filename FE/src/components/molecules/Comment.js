import React from "react";
import { deleteReview } from "../../apis/BookApi";
import useDate from "../../hooks/useDate";
import { CommentDateBox, CommentHeadingBox } from "../../styles/Book/BookDetailStyle";
import { TextBtn } from "../../styles/common/ButtonsStyle";
import { CommentBox } from "../../styles/common/CommonStyle";
import { Text } from "../../styles/common/TextsStyle";
import ReplyTextButton from "../atoms/Button/ReplyTextButton";
import RatingLabel from "../atoms/RatingLabel";

function Comment({ comment, type, getReviewApiCall }) {
	const dateTimeSeparation = useDate();

	const deleteReviewApiCall = () => {
		(async () => {
			await deleteReview(comment.commentId).then((res) => {
				if (res === "success") {
					getReviewApiCall();
				}
			});
		})();
	};

	return (
		<CommentBox>
			<img src={comment?.img} alt="Profile of the user who commented" />
			<div>
				<CommentHeadingBox>
					<Text weight="600">{comment?.nickname}</Text>
					{type === "review" ? (
						<RatingLabel rating={parseInt(comment?.rating)} />
					) : (
						<CommentDateBox>
							<Text size="14" color="var(--gray-500)">
								{comment?.date}
							</Text>
						</CommentDateBox>
					)}
				</CommentHeadingBox>
				<Text marginBottom="12">{comment?.commentContent || comment?.content}</Text>
				{type === "review" ? (
					<CommentDateBox>
						<Text size="14" color="var(--gray-500)">
							{dateTimeSeparation(comment?.date)}
						</Text>
					</CommentDateBox>
				) : (
					<div>
						<ReplyTextButton label="답글쓰기" />
						<TextBtn onClick={deleteReviewApiCall}>삭제</TextBtn>
					</div>
				)}
			</div>
		</CommentBox>
	);
}

export default Comment;
