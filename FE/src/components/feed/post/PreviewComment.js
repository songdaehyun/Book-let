import React from "react";
import { Span, Text } from "../../../styles/common/TextsStyle";
import { PreviewCommentContainer } from "../../../styles/feed/PostPreviewStyle";

import commentIcon from "../../../assets/icons/comment-icon.svg";

function PreviewComment({ post, isMy }) {
	return (
		<PreviewCommentContainer>
			<div>
				<img src={commentIcon} />
				<Text size="14" color="var(--gray-500)">
					<Span size="14" weight="bold">
						{post.commentCnt}
					</Span>
					개의 댓글
				</Text>
			</div>
			{!isMy && (
				<Text size="14" color="var(--gray-500)">
					{post.createdDate}
				</Text>
			)}
		</PreviewCommentContainer>
	);
}

export default PreviewComment;
