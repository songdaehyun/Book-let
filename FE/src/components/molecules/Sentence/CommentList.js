import React from "react";
import { Container } from "../../../styles/common/ContainingsStyle";
import Comment from "../Comment";

function CommentList({ comments }) {
	return (
		<Container marginTop="16">
			{comments.map((comment) => (
				<Comment key={comment.commentId} comment={comment} />
			))}
		</Container>
	);
}

export default CommentList;
