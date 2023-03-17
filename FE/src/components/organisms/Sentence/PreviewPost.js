import React from "react";

import PreivewScrap from "../../molecules/Sentence/PreivewScrap";
import PreviewComment from "../../molecules/Sentence/PreviewComment";
import PreviewSentence from "../../molecules/Sentence/PreviewSentence";

import { Container } from "../../../styles/common/ContainingsStyle";

function PreviewPost({ post, isMy }) {
	return (
		<Container marginBottom="40">
			<PreviewSentence post={post} />
			<PreivewScrap post={post} isMy={isMy} />
			<PreviewComment post={post} isMy={isMy} />
		</Container>
	);
}

export default PreviewPost;
