import React from "react";

import ScrapButton from "../../atoms/Button/ScrapButton";
import ReactionInfo from "../ReactionInfo";

import { Text } from "../../../styles/common/TextsStyle";
import { ReactionInfoContainer } from "../../../styles/Sentence/PostPreviewStyle";

function ScrapToolbar({ isScraped, scrapImgs, scrapCount, date, isMy }) {
	return (
		<ReactionInfoContainer>
			<ReactionInfo img={scrapImgs} count={scrapCount} type="scrap" />
			{isMy ? (
				<Text size="14" color="var(--gray-500)">
					{date}
				</Text>
			) : (
				<ScrapButton isScraped={isScraped} />
			)}
		</ReactionInfoContainer>
	);
}

export default ScrapToolbar;
