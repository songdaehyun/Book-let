import React from "react";
import { useParams } from "react-router-dom";
import { deleteReview } from "../../apis/BookApi";
import { deleteComment } from "../../apis/sentenceApi";
import defaultImg from "../../assets/images/user-default-img.png";
import useDate from "../../hooks/useDate";
import {
	CommentBtnBox,
	CommentDateBox,
	CommentHeadingBox,
} from "../../styles/Book/BookDetailStyle";
import { TextBtn } from "../../styles/common/ButtonsStyle";
import { CommentBox } from "../../styles/common/CommonStyle";
import { Text } from "../../styles/common/TextsStyle";
import ReplyTextButton from "../atoms/Button/ReplyTextButton";
import RatingLabel from "../atoms/RatingLabel";

function Comment({ comment, type, getCommentApiCall }) {
	const { sId } = useParams();

	const dateTimeSeparation = useDate();

	const isMy = () => {
		if (comment.uId === localStorage.getItem("userId")) {
			return true;
		}

		return false;
	};

	const deleteCommentApiCall = () => {
		(async () => {
			await deleteComment(sId).then((res) => {
				if (res === "success") {
					getCommentApiCall();
				}
			});
		})();
	};

	const deleteReviewApiCall = () => {
		(async () => {
			await deleteReview(comment.commentId).then((res) => {
				if (res === "success") {
					getCommentApiCall();
				}
			});
		})();
	};

	return (
		<CommentBox>
			<img
				src={comment.img ? comment.img : defaultImg}
				alt="Profile of the user who commented"
			/>

			<div>
				<CommentHeadingBox>
					<Text weight="600">{comment?.nickname}</Text>
					{type === "review" ? (
						<RatingLabel rating={parseInt(comment?.rating)} />
					) : (
						<CommentDateBox>
							<Text size="14" color="var(--gray-500)">
								{dateTimeSeparation(comment?.date)}
							</Text>
						</CommentDateBox>
					)}
				</CommentHeadingBox>
				<Text marginBottom="12">{comment?.content}</Text>
				{type === "review" ? (
					<CommentDateBox>
						<Text size="14" color="var(--gray-500)">
							{dateTimeSeparation(comment?.date)}
						</Text>
					</CommentDateBox>
				) : (
					<div>
						<CommentBtnBox>
							<ReplyTextButton label="답글쓰기" />
							{isMy && (
								<TextBtn
									onClick={
										type === "댓글"
											? deleteCommentApiCall
											: type === "리뷰" && deleteReviewApiCall
									}
								>
									삭제
								</TextBtn>
							)}
						</CommentBtnBox>
					</div>
				)}
			</div>
		</CommentBox>
	);
}

export default Comment;
