import React from "react";

import { CommentUploadBtn } from "../../../styles/common/ButtonsStyle";

import UploadArrow from "../../atoms/Icon/UploadArrow";

function CommentUploadButton() {
	return (
		<CommentUploadBtn>
			<UploadArrow />
		</CommentUploadBtn>
	);
}

export default CommentUploadButton;
