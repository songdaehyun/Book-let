import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { postReview } from "../../../apis/BookApi";
import { postComment } from "../../../apis/sentenceApi";
import useRating from "../../../hooks/useRating";
import { CommentInputBox } from "../../../styles/common/CommonStyle";

import CommentUploadButton from "../../atoms/Button/CommentUploadButton";
import WordCountText from "../../atoms/WordCountText";

function CommentInput({ type, isReviewed, getCommentApiCall, setComments }) {
	const { sId } = useParams();
	const uId = localStorage.getItem("userId");
	const { bId } = useParams();

	const [comment, setComment] = useState("");
	const [isCommentValid, setIsCommentValid] = useState(false);
	const { selectedRating } = useSelector((state) => state.book);
	const limit = 100;

	const selectRating = useRating();

	const handleChange = (e) => {
		if (e.target.value.length <= limit) {
			setComment(e.target.value);
		}
	};

	const commentSubmit = () => {
		const data = {
			paragraphId: parseInt(sId),
			userId: uId,
			commentContent: comment,
			parentCommentId: 0, // 0이면 부모댓글, 1~n : 아기 댓글이 부모댓글의 아이디를 보냄
		};

		if (comment !== "") {
			(async () => {
				await postComment(data).then((res) => {
					if (res === "success") {
						getCommentApiCall();
						setComment("");
					}
				});
			})();
		}
	};

	const reviewSubmit = () => {
		const data = {
			content: comment,
			grade: selectedRating,
			userId: uId,
			bookIsbn: bId,
		};

		if (comment !== "" && selectedRating !== 0) {
			(async () => {
				await postReview(data).then((res) => {
					if (res === "success") {
						// 리뷰 조회 api call
						getCommentApiCall(true).then((res) => {
							setComments(res);
						});
						// 댓글, 별점 초기화
						setComment("");
						selectRating(0);
					}
				});
			})();
		}
	};

	useEffect(() => {
		if (type === "댓글") {
			setIsCommentValid(comment !== "");
		} else if (type === "리뷰") {
			setIsCommentValid(comment !== "" && selectedRating !== 0);
		}
	}, [comment, selectedRating]);

	return (
		<>
			<CommentInputBox>
				<input
					disabled={isReviewed}
					value={comment}
					onChange={handleChange}
					maxLength={limit}
					placeholder={
						type === "댓글"
							? "댓글을 작성해주세요"
							: type === "리뷰" && isReviewed
							? "작성된 리뷰가 있습니다"
							: "리뷰를 작성해주세요"
					}
				></input>
				<div onClick={type === "댓글" ? commentSubmit : type === "리뷰" && reviewSubmit}>
					<CommentUploadButton isCommentValid={isCommentValid} />
				</div>
			</CommentInputBox>
			<WordCountText limit={limit} length={comment.length} />
		</>
	);
}

export default CommentInput;
