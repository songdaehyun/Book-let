import React from "react";
import { PreviewSwiperSentenceContainer } from "../../../styles/Sentence/PreviewRecoStyle";
import SmallSentence from "../../atoms/Sentence/SmallSentence";

function PreviewSwiperSentence({ sentences }) {
	return (
		<PreviewSwiperSentenceContainer>
			{sentences.map((sentence, idx) => (
				<SmallSentence sentence={sentence} />
			))}
		</PreviewSwiperSentenceContainer>
	);
}

export default PreviewSwiperSentence;
