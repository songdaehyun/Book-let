import React from "react";
import { Container } from "../../../styles/common/ContainingsStyle";
import { Text } from "../../../styles/common/TextsStyle";

import MoreBar from "../../molecules/Bar/MoreBar";
import PreviewSlideSentence from "../../molecules/Sentence/PreviewSlideSentence";

function PreviewRecoSentence(props) {
	// 더미 데이터
	const sentences = [
		{
			paragraphId: 1,
			paragraphColor: "#FEEB60",
			content: "지금도 나는 내가 밑천 없는 작가라고 느끼지만 예전만큼 그것이 두렵지는 않다.",
		},
		{
			paragraphId: 2,
			paragraphColor: "#9FA3D0",
			content:
				"나를 울게 하고, 웃게 하고, 가슴 벅차게 하고, 생각에 잠기게 하는 이야기들 사이에서 ‘쓰고 싶은 나’를 새롭게 발견한다.",
		},
		{
			paragraphId: 3,
			paragraphColor: "#769676",
			content:
				"이제는 안다. 우리가 계속 지는 한이 있더라도 선택해야만 하는 건 이토록 평범한 미래라는 것을. 그리고 포기하지 않는 한 그 미래가 다가올 확률은 100퍼센트에 수렴한다는 것을.",
		},
	];

	return (
		<Container marginBottom="32">
			<Text size="14" color="var(--gray-500)" marginBottom="8">
				당신과 비슷한 감성의 문장을 추려봤어요.
			</Text>
			<MoreBar title="이런 문장도 좋아하실거예요." path="/sentence/recommand" />
			<PreviewSlideSentence sentences={sentences} />
		</Container>
	);
}

export default PreviewRecoSentence;
