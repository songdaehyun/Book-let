import React, { useState } from "react";
import { CommentInputBox } from "../../../styles/common/CommonStyle";

import CommentUploadButton from "../../atoms/Button/CommentUploadButton";
import WordCountText from "../../atoms/WordCountText";

function CommentInput(props) {
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
					placeholder="댓글을 작성해주세요"
				></input>
				<CommentUploadButton />
			</CommentInputBox>
			<WordCountText limit={limit} length={comment.length} />
		</>
	);
}

export default CommentInput;
