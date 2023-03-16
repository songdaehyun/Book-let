import React from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "../../../styles/common/TextsStyle";
import {
	SmallSentenceContainer,
	SmallSentenceContent,
} from "../../../styles/feed/post/SmallSentenceStyle";

function SmallSentence({ sentence }) {
	const navigate = useNavigate();

	const handleClickSentence = () => {
		navigate(`/sentence/${sentence.paragraphId}`);
	};

	return (
		<SmallSentenceContainer onClick={handleClickSentence} color={sentence.paragraphColor}>
			<SmallSentenceContent>
				<Text font="jeju" height="22">
					{sentence.content}
				</Text>
			</SmallSentenceContent>
		</SmallSentenceContainer>
	);
}

export default SmallSentence;
