import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { postReview } from "../../../apis/BookApi";
import { postComment } from "../../../apis/sentenceApi";
import { CommentInputBox } from "../../../styles/common/CommonStyle";

import CommentUploadButton from "../../atoms/Button/CommentUploadButton";
import WordCountText from "../../atoms/WordCountText";

function CommentInput({ type, getCommentApiCall }) {
	const { sId } = useParams();

	const uId = localStorage.getItem("userId");
	const { bId } = useParams();

	const [comment, setComment] = useState("");
	const { selectedRating } = useSelector((state) => state.book);
	const limit = 100;

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
						setComment("")
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

		(async () => {
			await postReview(data).then((res) => {
				if (res === "success") {
					getCommentApiCall();
				}
			});
		})();
	};

	return (
		<>
			<CommentInputBox>
				<input
					value={comment}
					onChange={handleChange}
					maxLength={limit}
					placeholder={
						type === "댓글"
							? "댓글을 작성해주세요"
							: type === "리뷰" && "리뷰를 작성해주세요"
					}
				></input>
				<div onClick={type === "댓글" ? commentSubmit : type === "리뷰" && reviewSubmit}>
					<CommentUploadButton isCommentValid={comment !== ""} />
				</div>
			</CommentInputBox>
			<WordCountText limit={limit} length={comment.length} />
		</>
	);
}

export default CommentInput;
