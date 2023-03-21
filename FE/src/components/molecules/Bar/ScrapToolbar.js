import React from "react";

import ScrapButton from "../../atoms/Button/ScrapButton";
import ReactionInfo from "../ReactionInfo";

import { Text } from "../../../styles/common/TextsStyle";
import { ReactionInfoContainer } from "../../../styles/Sentence/PostPreviewStyle";

function ScrapToolbar({ post, isMy }) {
	return (
		<ReactionInfoContainer>
			<ReactionInfo info={post} type="scrap" />
			{isMy ? (
				<Text size="14" color="var(--gray-500)">
					{post.createdDate}
				</Text>
			) : (
				<ScrapButton isScraped={post.userScrapted} />
			)}
		</ReactionInfoContainer>
	);
}

export default ScrapToolbar;
