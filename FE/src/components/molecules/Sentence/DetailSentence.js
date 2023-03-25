import React from "react";

import { useSelector } from "react-redux";

import { Span, Text } from "../../../styles/common/TextsStyle";
import {
	DetailSentenceBottomInfo,
	DetailSentenceBottomInfoContainer,
	DetailSentenceContainer,
	SentenceContentBox
} from "../../../styles/Sentence/DetailSentenceStyle";

function DetailSentence() {
	const book = useSelector((state) => state.sentence.post.book);
	const paragraph = useSelector((state) => state.sentence.post.paragraph);

	const info = {
		author: book?.bookAuthor,
		cover: book?.bookImage,
		isbn: book?.bookIsbn,
		title: book?.bookTitle,
		color: paragraph?.paragraphColor,
		content: paragraph?.paragraphContent,
		page: paragraph?.paragraphPage
	};

	return (
		<DetailSentenceContainer color={info.color}>
			<SentenceContentBox>
				<Text font="jeju" size="18" height="32">
					{info.content}
				</Text>
			</SentenceContentBox>
			<DetailSentenceBottomInfo>
				<hr />
				<DetailSentenceBottomInfoContainer>
					<div>
						<img src={info.cover} alt="book cover" />
						<div>
							<Text marginBottom="8">
								<Span font="jeju">『 </Span>
								{info.title}
								<Span font="jeju"> 』</Span>
							</Text>
							<Text>{info.author}</Text>
						</div>
					</div>
					<Text>P. {info.page}</Text>
				</DetailSentenceBottomInfoContainer>
			</DetailSentenceBottomInfo>
		</DetailSentenceContainer>
	);
}

export default DetailSentence;
