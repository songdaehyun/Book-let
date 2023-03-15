import React from "react";

import PreviewSentence from "./PreviewSentence";
import PreviewComment from "./PreviewComment";
import PreivewScrap from "./PreivewScrap";

import { Container } from "../../../styles/common/ContainingsStyle";

function PostPreview({ post, isMy }) {
	return (
		<Container marginBottom="40">
			<PreviewSentence post={post} />
			<PreivewScrap post={post} isMy={isMy} />
			<PreviewComment post={post} isMy={isMy} />
		</Container>
	);
}

export default PostPreview;
