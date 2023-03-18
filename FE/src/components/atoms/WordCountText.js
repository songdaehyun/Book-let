import React from "react";
import { Text } from "../../styles/common/TextsStyle";

function WordCountText({ limit, length }) {
	return (
		<Text marginTop="8" color="var(--gray-500)">
			{length} / {limit}자
		</Text>
	);
}

export default WordCountText;
