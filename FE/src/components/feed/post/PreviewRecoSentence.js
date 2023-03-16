import React from "react";
import { Container } from "../../../styles/common/ContainingsStyle";
import { Text } from "../../../styles/common/TextsStyle";

import ArrowButton from "../../common/ArrowButton";
import PreviewSlideSentence from "./PreviewSlideSentence";

function PreviewRecoSentence(props) {
	return (
		<Container marginBottom="32">
			<Text size="14" color="var(--gray-500)" marginBottom="8">
				당신과 비슷한 감성의 문장을 추려봤어요.
			</Text>
			<ArrowButton title="이런 문장도 좋아하실거예요." path="/sentence/recommand" />
			<PreviewSlideSentence />
		</Container>
	);
}

export default PreviewRecoSentence;
