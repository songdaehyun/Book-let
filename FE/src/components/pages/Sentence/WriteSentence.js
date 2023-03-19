import React from "react";

import ActionsNavigationBar from "../../molecules/Bar/ActionsNavigationBar";
import SentenceForm from "../../organisms/Sentence/SentenceForm";

function WriteSentence(props) {
	return (
		<>
			<ActionsNavigationBar pre="취소" title="문장 쓰기" next="확인" />
			<SentenceForm />
		</>
	);
}

export default WriteSentence;
