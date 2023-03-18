import React from "react";
import { Span, Text } from "../../../styles/common/TextsStyle";
import {
	DetailSentenceBottomInfo,
	DetailSentenceBottomInfoContainer,
	DetailSentenceContainer
} from "../../../styles/Sentence/DetailSentenceStyle";

function DetailSentence({ title, author, content, page, color, cover }) {
	return (
		<DetailSentenceContainer color={color}>
			<Text font="jeju" size="18" height="32">
				{content}
			</Text>
			<DetailSentenceBottomInfo>
				<hr />
				<DetailSentenceBottomInfoContainer>
					<div>
						<img src={cover} alt="book cover" />
						<div>
							<Text marginBottom="8">
								<Span font="jeju">『 </Span>
								{title}
								<Span font="jeju"> 』</Span>
							</Text>
							<Text>{author}</Text>
						</div>
					</div>
					<Text>P. {page}</Text>
				</DetailSentenceBottomInfoContainer>
			</DetailSentenceBottomInfo>
		</DetailSentenceContainer>
	);
}

export default DetailSentence;
