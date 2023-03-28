import React from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "../../../styles/common/TextsStyle";
import {
	PreviewSentenceBottonContent,
	PreviewSentenceContainer,
	PreviewSentenceContent,
} from "../../../styles/Sentence/PostPreviewStyle";

function PreviewSentence({ post }) {
	const navigate = useNavigate();

	const handleClickSentence = () => {
		navigate(`/sentence/${post.sId}`);
	};

	return (
		<PreviewSentenceContainer onClick={handleClickSentence} color={post.color}>
			<PreviewSentenceContent>
				<Text font="jeju" height="28">
					{post.content}
				</Text>
				<PreviewSentenceBottonContent>
					<div>
						<Text size="12" weight="bold" marginBottom="4">
							{post.title}
						</Text>
						<Text size="12">{post.author}</Text>
					</div>
					<Text size="12">P. {post.page}</Text>
				</PreviewSentenceBottonContent>
			</PreviewSentenceContent>
		</PreviewSentenceContainer>
	);
}

export default PreviewSentence;
