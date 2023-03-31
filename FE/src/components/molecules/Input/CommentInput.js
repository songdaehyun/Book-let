import React, { useState } from "react";
import { CommentInputBox } from "../../../styles/common/CommonStyle";

import CommentUploadButton from "../../atoms/Button/CommentUploadButton";
import WordCountText from "../../atoms/WordCountText";

function CommentInput({ type, getReviewApiCall }) {
	const [comment, setComment] = useState("");
	const limit = 100;

	const handleChange = (e) => {
		if (e.target.value.length <= limit) {
			setComment(e.target.value);
		}
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
				<CommentUploadButton content={comment} getReviewApiCall={getReviewApiCall}/>
			</CommentInputBox>
			<WordCountText limit={limit} length={comment.length} />
		</>
	);
}

export default CommentInput;
