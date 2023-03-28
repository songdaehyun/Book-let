import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ActionsNavigationBar from "../../molecules/Bar/ActionsNavigationBar";
import SentenceForm from "../../organisms/Sentence/SentenceForm";

import { createPost } from "../../../apis/sentenceApi";

function WriteSentence() {
	const navigate = useNavigate();

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
			userId: 1
		};

		(async () => {
			await createPost(data).then((res) => {
				if (res.status === 201) {
					navigate(`/sentence/${res.data.id}`);
				}
			});
		})();
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
