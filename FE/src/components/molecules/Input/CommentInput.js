import React from "react";
import { CommentInputBox } from "../../../styles/common/CommonStyle";

import { RoundedInput, RoundedInputBox } from "../../../styles/common/InputsStyle";
import CommentUploadButton from "../../atoms/Button/CommentUploadButton";

function CommentInput(props) {
	return (
		<CommentInputBox>
			<input placeholder="댓글을 작성해주세요"></input>
			<CommentUploadButton />
		</CommentInputBox>
	);
}

export default CommentInput;
