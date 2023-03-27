import React from "react";

import SentenceTextarea from "../../molecules/Input/SentenceTextarea";
import SentenceBookSearch from "../../molecules/Sentence/SentenceBookSearch";
import SentenceColorSelect from "./SentenceColorSelect";
import WriteSentencePage from "./WriteSentencePage";

import { Container } from "../../../styles/common/ContainingsStyle";

function SentenceForm({content, setContent, background, setBackground, page, setPage}) {
	return (
		<Container paddingTop="80" paddingLeft="16" paddingRight="16">
			<SentenceBookSearch />
			<SentenceTextarea content={content} setContent={setContent} background={background} />
			<SentenceColorSelect setBackground={setBackground} />
			<WriteSentencePage page={page} setPage={setPage} />
		</Container>
	);
}

export default SentenceForm;
