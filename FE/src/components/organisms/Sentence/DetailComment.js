import React from "react";
import { Container } from "../../../styles/common/ContainingsStyle";
import { Span, Text } from "../../../styles/common/TextsStyle";
import CommentInput from "../../molecules/Input/CommentInput";

function DetailComment({ comment }) {
	return (
		<Container marginTop="32" paddingLeft="16" paddingRight="16">
			<Container marginBottom="24">
				<Span size="19" weight="bold">
					댓글
				</Span>
				<Span size="19" color="var(--gray-200)" marginLeft="8" marginRight="8">
					|
				</Span>
				<Span size="19">{comment.length}</Span>
			</Container>
            <CommentInput />
		</Container>
	);
}

export default DetailComment;
