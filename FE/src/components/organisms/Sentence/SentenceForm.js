import React, { useState } from "react";

import SentenceTextarea from "../../molecules/Input/SentenceTextarea";
import SentenceColorSelect from "./SentenceColorSelect";
import WriteSentencePage from "./WriteSentencePage";

import { Container } from "../../../styles/common/ContainingsStyle";

function SentenceForm(props) {
	const [content, setContent] = useState("");
	const [background, setBackground] = useState("#FEEB60");
	const [page, setPage] = useState("");

	return (
		<Container paddingTop="80" paddingLeft="16" paddingRight="16">
			<SentenceTextarea content={content} setContent={setContent} background={background} />
			<SentenceColorSelect setBackground={setBackground} />
			<WriteSentencePage page={page} setPage={setPage} />
		</Container>
	);
}

export default SentenceForm;
