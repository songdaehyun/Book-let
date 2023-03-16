import React from "react";

import ArrowButton from "../../common/ArrowButton";
import PreviewSlideSentence from "./PreviewSlideSentence";

import { Container } from "../../../styles/common/ContainingsStyle";

function PreviewScrapSentence(props) {
	// 더미 데이터
	const sentences = [
		{
			paragraphId: 1,
			paragraphColor: "#9FA3D0",
			content:
				"이제는 안다. 우리가 계속 지는 한이 있더라도 선택해야만 하는 건 이토록 평범한 미래라는 것을. 그리고 포기하지 않는 한 그 미래가 다가올 확률은 100퍼센트에 수렴한다는 것을.",
		},
		{
			paragraphId: 2,
			paragraphColor: "#543466",
			content:
				"이제는 안다. 우리가 계속 지는 한이 있더라도 선택해야만 하는 건 이토록 평범한 미래라는 것을. 그리고 포기하지 않는 한 그 미래가 다가올 확률은 100퍼센트에 수렴한다는 것을.",
		},
		{
			paragraphId: 3,
			paragraphColor: "#B88962",
			content:
				"이제는 안다. 우리가 계속 지는 한이 있더라도 선택해야만 하는 건 이토록 평범한 미래라는 것을. 그리고 포기하지 않는 한 그 미래가 다가올 확률은 100퍼센트에 수렴한다는 것을.",
		},
	];

	return (
		<div>
			<Container marginBottom="32">
				<ArrowButton title="스크랩한 문장" path="/sentence/scrap" />
				<PreviewSlideSentence sentences={sentences} />
			</Container>
		</div>
	);
}

export default PreviewScrapSentence;
