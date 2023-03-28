import React, { useState } from "react";
import { postComment } from "../../../apis/sentenceApi";
import { CommentInputBox } from "../../../styles/common/CommonStyle";

import CommentUploadButton from "../../atoms/Button/CommentUploadButton";
import WordCountText from "../../atoms/WordCountText";

function CommentInput({ type }) {
	const uId = localStorage.getItem("userId");

	const [comment, setComment] = useState("");
	const limit = 100;

	const handleChange = (e) => {
		if (e.target.value.length <= limit) {
			setComment(e.target.value);
		}
	};

	const commentSubmit = () => {
		const data = {
			userId: 1,
			commentContent: comment,
			parentCommentId: 0, // 0이면 부모댓글, 1~n : 아기 댓글이 부모댓글의 아이디를 보냄
		};

		(async () => {
			await postComment(data).then((res) => {
				console.log(res);
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
				<div onClick={commentSubmit}>
					<CommentUploadButton />
				</div>
			</CommentInputBox>
			<WordCountText limit={limit} length={comment.length} />
		</>
	);
}

export default CommentInput;
