import React from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "../../../styles/common/TextsStyle";
import {
	SmallSentenceContainer,
	SmallSentenceContent,
} from "../../../styles/Sentence/SmallSentenceStyle";

function SmallSentence({ sentence }) {
	const navigate = useNavigate();

	const handleClickSentence = () => {
		navigate(`/sentence/${sentence.sId}`);
	};

	return (
		<SmallSentenceContainer onClick={handleClickSentence} color={sentence.color}>
			<SmallSentenceContent>
				<Text font="jeju" height="22">
					{sentence.content}
				</Text>
			</SmallSentenceContent>
		</SmallSentenceContainer>
	);
}

export default SmallSentence;
