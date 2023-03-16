import React from "react";
import { Text } from "../../../styles/common/TextsStyle";
import {
	SmallSentenceContainer,
	SmallSentenceContent,
} from "../../../styles/feed/post/SmallSentenceStyle";

function SmallSentence({ sentence }) {
	return (
		<SmallSentenceContainer color={sentence.paragraphColor}>
			<SmallSentenceContent>
				<Text font="jeju" height="22">
					{sentence.content}
				</Text>
			</SmallSentenceContent>
		</SmallSentenceContainer>
	);
}

export default SmallSentence;
