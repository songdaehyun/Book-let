import React from "react";
import { Container } from "../../../styles/common/ContainingsStyle";
import Comment from "../Comment";

function CommentList({ comments, type, getReviewApiCall }) {
	return (
		<Container marginTop="16">
			{comments?.map((comment) => (
				<Comment
					key={comment?.commentId}
					comment={comment}
					type={type}
					getReviewApiCall={getReviewApiCall}
				/>
			))}
		</Container>
	);
}

export default CommentList;
