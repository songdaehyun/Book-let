import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { deleteReview, getReview } from "../../apis/BookApi";
import { initReview } from "../../apis/init/initBook";
import { deleteComment } from "../../apis/sentenceApi";
import defaultImg from "../../assets/images/user-default-img.png";
import useDate from "../../hooks/useDate";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";
import {
	CommentBtnBox,
	CommentDateBox,
	CommentHeadingBox,
	ReplyBox,
} from "../../styles/Book/BookDetailStyle";
import { TextBtn } from "../../styles/common/ButtonsStyle";
import { CommentBox } from "../../styles/common/CommonStyle";
import { Text } from "../../styles/common/TextsStyle";
import ReplyTextButton from "../atoms/Button/ReplyTextButton";
import RatingLabel from "../atoms/RatingLabel";
import CommentInput from "../molecules/Input/CommentInput";
import ModalLayer from "../organisms/ModalLayer";

function Comment({ comment, type, setComments, getCommentApiCall }) {
	const { sId } = useParams();
	const { bId } = useParams();

	const dateTimeSeparation = useDate();
	const [isOpen, setIsOpen] = useState(false);
	const [isReplyWriting, setIsReplyWriting] = useState(false);

	const openPopup = () => {
		setIsOpen(true);
	};

	const handleClickDelete = () => {
		setIsOpen(false);

		type === "댓글" ? deleteCommentApiCall() : type === "리뷰" && deleteReviewApiCall();
	};

	const handleClickReplyWritingOrCancel = () => {
		setIsReplyWriting(!isReplyWriting);
	};

	const isMy = () => {
		if (comment?.uId === parseInt(localStorage.getItem("userId"))) {
			return true;
		}

		return false;
	};

	const deleteCommentApiCall = () => {
		(async () => {
			await deleteComment(comment?.cId).then((res) => {
				if (res === "success") {
					getCommentApiCall();
				}
			});
		})();
	};

	const { apiCall: reviewApiCall } = useInfiniteScroll(bId, getReview, 5, initReview);

	const deleteReviewApiCall = () => {
		(async () => {
			await deleteReview(comment?.commentId).then((res) => {
				if (res === "success") {
					// 댓글 조회 api call
					reviewApiCall().then((res) => {
						console.log(res);
						setComments(res);
					});
				}
			});
		})();
	};

	return (
		<>
			<CommentBox depth={comment?.depth}>
				<img
					src={comment?.img ? comment?.img : defaultImg}
					alt="Profile of the user who commented"
				/>

				<div>
					<CommentHeadingBox>
						<Text weight="600">{comment?.nickname}</Text>

						{type === "리뷰" ? (
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

					{type === "리뷰" ? (
						<>
							{isMy() && <TextBtn onClick={openPopup}>삭제</TextBtn>}
							<CommentDateBox>
								<Text size="14" color="var(--gray-500)">
									{dateTimeSeparation(comment?.date)}
								</Text>
							</CommentDateBox>
						</>
					) : (
						<div>
							{isReplyWriting ? (
								// 대댓글 작성바
								<ReplyBox>
									<div>
										<CommentInput
											type="댓글"
											getCommentApiCall={getCommentApiCall}
											reply={{
												isReply: true,
												cId: comment?.cId,
												setIsReplyWriting: setIsReplyWriting,
											}}
										/>
									</div>
									<TextBtn onClick={handleClickReplyWritingOrCancel}>
										취소
									</TextBtn>
								</ReplyBox>
							) : (
								<>
									<CommentBtnBox>
										{comment?.depth == 0 && (
											<div onClick={handleClickReplyWritingOrCancel}>
												<ReplyTextButton label="답글쓰기" />
											</div>
										)}

										{isMy() && <TextBtn onClick={openPopup}>삭제</TextBtn>}
									</CommentBtnBox>
								</>
							)}
						</div>
					)}
				</div>
			</CommentBox>
			<ModalLayer
				isOpen={isOpen}
				setIsOpen={setIsOpen}
				title="삭제하시겠습니까?"
				leftLabel="취소"
				rightLabel="삭제"
				action={handleClickDelete}
			/>
		</>
	);
}

export default Comment;
