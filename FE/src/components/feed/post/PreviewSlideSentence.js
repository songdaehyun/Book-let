import React from "react";
import { PreviewSlideSentenceContainer } from "../../../styles/feed/PreviewRecoStyle";
import SmallSentence from "./SmallSentence";

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
