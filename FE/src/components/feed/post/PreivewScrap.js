import React from "react";

import ScrapInfo from "../../common/ScrapInfo";
import ScrapButton from "../../common/ScrapButton";

import { PreviewPostInfo } from "../../../styles/feed/PostPreviewStyle";
import { Text } from "../../../styles/common/TextsStyle";

function PreivewScrap({ post, isMy }) {
	return (
		<PreviewPostInfo>
			<ScrapInfo post={post} />
			{isMy ? (
				<Text size="14" color="var(--gray-500)">
					{post.createdDate}
				</Text>
			) : (
				<ScrapButton isScraped={post.userScrapted} />
			)}
		</PreviewPostInfo>
	);
}

export default PreivewScrap;
