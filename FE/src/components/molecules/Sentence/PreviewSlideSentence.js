import React from "react";
import { PreviewSlideSentenceContainer } from "../../../styles/Sentence/PreviewRecoStyle";
import SmallSentence from "../../atoms/Sentence/SmallSentence";

function PreviewSlideSentence({ sentences }) {
	return (
		<PreviewSlideSentenceContainer>
			{sentences.map((sentence, idx) => (
				<SmallSentence sentence={sentence} />
			))}
		</PreviewSlideSentenceContainer>
	);
}

export default PreviewSlideSentence;
