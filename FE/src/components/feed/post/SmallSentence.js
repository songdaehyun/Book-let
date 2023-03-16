import React from "react";
import { Text } from "../../../styles/common/TextsStyle";
import { SmallSentenceContainer } from "../../../styles/feed/PreviewRecoStyle";

function SmallSentence({ sentence }) {
	return (
		<SmallSentenceContainer color={sentence.paragraphColor}>
			<Text font="jeju" height="22">
				{sentence.content}
			</Text>
		</SmallSentenceContainer>
	);
}

export default SmallSentence;
