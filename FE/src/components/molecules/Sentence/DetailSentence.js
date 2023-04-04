import React from "react";
import { useNavigate } from "react-router-dom";

import { Span, Text } from "../../../styles/common/TextsStyle";
import {
	DetailSentenceBottomInfo,
	DetailSentenceBottomInfoContainer,
	DetailSentenceContainer,
	SentenceContentBox,
} from "../../../styles/Sentence/DetailSentenceStyle";

function DetailSentence({ isbn, title, author, cover, content, page, color }) {
	const navigate = useNavigate();

	const MoveToBook = () => {
		navigate(`/book/${isbn}`);
	};

	return (
		<DetailSentenceContainer color={color}>
			<SentenceContentBox>
				<Text font="jeju" size="18" height="32">
					{content?.split("\n").map((line) => {
						return (
							<span>
								{line}
								<br />
							</span>
						);
					})}
				</Text>
			</SentenceContentBox>
			<DetailSentenceBottomInfo>
				<hr />
				<DetailSentenceBottomInfoContainer>
					<div>
						<img onClick={MoveToBook} src={cover} alt="book cover" />
						<div>
							<Text marginBottom="8" onClick={MoveToBook}>
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
