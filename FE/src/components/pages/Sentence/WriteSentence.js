import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ActionsNavigationBar from "../../molecules/Bar/ActionsNavigationBar";
import SentenceForm from "../../organisms/Sentence/SentenceForm";

import useSentence from "../../../hooks/api/useSentenceApi";

function WriteSentence(props) {
	const navigate = useNavigate();

	const { post } = useSentence();

	const [bookId, setBookId] = useState("");
	const [content, setContent] = useState("");
	const [background, setBackground] = useState("#FEEB60");
	const [page, setPage] = useState("");

	const handleClickPre = () => {
		navigate("/");
	};

	const handleClickNext = () => {
		const data = {
			bookIsbn: "2090000063035",
			paragraphContent: content,
			paragraphPage: page,
			paragraphColor: background,
			userId: 1,
		};
		post(data);
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
			<SentenceForm
				setBookId={setBookId}
				content={content}
				setContent={setContent}
				background={background}
				setBackground={setBackground}
				page={page}
				setPage={setPage}
			/>
		</>
	);
}

export default WriteSentence;
