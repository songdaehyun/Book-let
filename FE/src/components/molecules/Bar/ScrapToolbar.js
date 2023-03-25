import React from "react";

import { useSelector } from "react-redux";

import ScrapButton from "../../atoms/Button/ScrapButton";
import ReactionInfo from "../ReactionInfo";

import { Text } from "../../../styles/common/TextsStyle";
import { ReactionInfoContainer } from "../../../styles/Sentence/PostPreviewStyle";

function ScrapToolbar({ isMy }) {
	const scrap = useSelector((state) => state.sentence.post.scrapInfo);
	const paragraph = useSelector((state) => state.sentence.post.paragraph);

	const info = {
		date: paragraph?.createdDate,
		isScraped: scrap?.userScrape
	};

	return (
		<ReactionInfoContainer>
			<ReactionInfo type="scrap" />
			{isMy ? (
				<Text size="14" color="var(--gray-500)">
					{info.date}
				</Text>
			) : (
				<ScrapButton isScraped={info.isScraped} />
			)}
		</ReactionInfoContainer>
	);
}

export default ScrapToolbar;
