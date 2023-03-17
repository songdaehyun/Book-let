import React from "react";
import { Span, Text } from "../../../styles/common/TextsStyle";
import {
	DetailSentenceBottomInfo,
	DetailSentenceContainer,
} from "../../../styles/Sentence/DetailSentenceStyle";

function DetailSentence({ title, author, content, page, color }) {
	return (
		<DetailSentenceContainer color={color}>
			<Text font="jeju" size="18" height="32">
				{content}
			</Text>
			<DetailSentenceBottomInfo>
				<hr />
				<div>
					<div>
						<div>
							<img />
						</div>
						<Text marginBottom="8">
							<Span font="jeju">『 </Span>
							{title}
							<Span font="jeju"> 』</Span>
						</Text>
						<Text>{author}</Text>
					</div>
					<Text>P. {page}</Text>
				</div>
			</DetailSentenceBottomInfo>
		</DetailSentenceContainer>
	);
}

export default DetailSentence;
