import React from "react";

import PreviewSentence from "./post/PreviewSentence";
import PreviewComment from "./post/PreviewComment";
import PreivewScrap from "./post/PreivewScrap";

import { Container } from "../../styles/common/ContainingsStyle";

function PostPreview({ post }) {
	return (
		<Container marginBottom="40">
			<PreviewSentence post={post} />
			<PreivewScrap post={post} />
			<PreviewComment post={post} />
		</Container>
	);
}

export default PostPreview;
