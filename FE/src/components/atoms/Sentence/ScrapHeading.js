import React from "react";

import { Span, Text } from "../../../styles/common/TextsStyle";

function ScrapHeading({ posts }) {
	return (
		<Text color="var(--gray-500)" marginBottom="24">
			<Span weight="bold" color="var(--primary-600)">
				{posts.length}
			</Span>
			개의 문장을 스크랩했어요
		</Text>
	);
}

export default ScrapHeading;
