import React from "react";
import { useNavigate } from "react-router-dom";

import ActionsNavigationBar from "../../molecules/Bar/ActionsNavigationBar";
import SentenceForm from "../../organisms/Sentence/SentenceForm";

function WriteSentence(props) {
	const navigate = useNavigate();

	const handleClickPre = () => {
		navigate("/");
	};

	const handleClickNext = () => {
		// navigate("/");
	};

	return (
		<>
			<ActionsNavigationBar
				pre="취소"
				title="문장 쓰기"
				next="확인"
				handleClickPre={handleClickPre}
				handleClickNext={handleClickNext}
			/>
			<SentenceForm />
		</>
	);
}

export default WriteSentence;
