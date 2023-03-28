import React from "react";
import useDate from "../../hooks/useDate";
import { CommentDateBox, CommentHeadingBox } from "../../styles/Book/BookDetailStyle";
import { CommentBox } from "../../styles/common/CommonStyle";
import { Text } from "../../styles/common/TextsStyle";
import ReplyTextButton from "../atoms/Button/ReplyTextButton";
import RatingLabel from "../atoms/RatingLabel";

function Comment({ comment, type }) {
	const dateTimeSeparation = useDate();

	return (
		<CommentBox>
			<img src={comment?.img} alt="Profile of the user who commented" />
			<div>
				<CommentHeadingBox>
					<Text weight="600">{comment?.nickname}</Text>
					{type === "review" ? (
						<RatingLabel rating={parseInt(comment?.reviewGrade)} />
					) : (
						<CommentDateBox>
							<Text size="14" color="var(--gray-500)">
								{comment?.date}
							</Text>
						</CommentDateBox>
					)}
				</CommentHeadingBox>
				<Text marginBottom="12">{comment?.content || comment?.reviewContent}</Text>
				{type === "review" ? (
					<CommentDateBox>
						<Text size="14" color="var(--gray-500)">
							{dateTimeSeparation(comment?.date)}
						</Text>
					</CommentDateBox>
				) : (
					<div>
						<ReplyTextButton label="답글쓰기" />
					</div>
				)}
			</div>
		</CommentBox>
	);
}

export default Comment;
