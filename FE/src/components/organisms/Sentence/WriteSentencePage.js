import React from "react";
import { Container } from "../../../styles/common/ContainingsStyle";

import { Span, Text } from "../../../styles/common/TextsStyle";
import { SentencePageInputBox } from "../../../styles/Sentence/SentenceFormStyle";

function WriteSentencePage({ page, setPage }) {
	const handleChange = (e) => {
		const onlyNumber = e.target.value.replace(/[^0-9]/g, "");

		if (onlyNumber === "") {
			setPage(onlyNumber);
		} else {
			setPage(parseInt(onlyNumber));
		}
	};

	return (
		<Container marginBottom="32">
			<Text weight="bold" marginBottom="16">
				페이지
				<Span weight="normal" size="14" color="var(--gray-500)" marginLeft="16">
					문장의 페이지를 입력해주세요{" "}
				</Span>
			</Text>
			<SentencePageInputBox>
				<Span weight="bold" marginRight="8">
					P.
				</Span>
				<input
					value={page}
					onChange={handleChange}
					placeholder="페이지 숫자를 입력해주세요. 예) 24"
				/>
			</SentencePageInputBox>
		</Container>
	);
}

export default WriteSentencePage;
