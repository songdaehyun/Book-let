import React from "react";
import { CommentBox } from "../../styles/common/CommonStyle";
import { Text } from "../../styles/common/TextsStyle";
import ReplyTextButton from "../atoms/Button/ReplyTextButton";

function Comment({ comment }) {
	return (
		<CommentBox>
			<img src={comment.img} alt="Profile of the user who commented" />
			<div>
				<Text weight="600" marginBottom="4">
					{comment.nickname}
				</Text>
				<Text marginBottom="12">{comment.commentContent}</Text>
				<div>
					<ReplyTextButton label="답글쓰기" />
				</div>
			</div>
			<Text size="14" color="var(--gray-500)">
				{comment.createdDate}
			</Text>
		</CommentBox>
	);
}

export default Comment;
