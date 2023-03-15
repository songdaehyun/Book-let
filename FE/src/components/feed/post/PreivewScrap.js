import React from "react";
import { Text } from "../../../styles/common/TextsStyle";
import { PreviewPostInfo } from "../../../styles/feed/PostPreviewStyle";
import ScrapInfo from "../../common/ScrapInfo";

function PreivewScrap({ post }) {
	return (
		<PreviewPostInfo>
			<ScrapInfo post={post} />
			<Text size="14" color="var(--gray-500)">
				{post.createdDate}
			</Text>
		</PreviewPostInfo>
	);
}

export default PreivewScrap;
