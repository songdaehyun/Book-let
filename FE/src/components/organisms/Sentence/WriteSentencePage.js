import React from "react";
import { Container } from "../../../styles/common/ContainingsStyle";

import { DefaultInput } from "../../../styles/common/InputsStyle";
import { Span, Text } from "../../../styles/common/TextsStyle";
import { PageInputBox } from "../../../styles/Sentence/SentenceFormStyle";

function WriteSentencePage({ page, setPage }) {
	const handleChange = (e) => {
		const onlyNumber = e.target.value.replace(/[^0-9]/g, "");
		setPage(onlyNumber);
	};

	return (
		<Container marginBottom="32">
			<Text weight="bold" marginBottom="16">
				페이지
				<Span weight="normal" size="14" color="var(--gray-500)" marginLeft="16">
					문장의 페이지를 입력해주세요{" "}
				</Span>
			</Text>
			<PageInputBox>
				<Span weight="bold" marginRight="16">
					P.{" "}
				</Span>
				<DefaultInput
					value={page}
					onChange={handleChange}
					placeholder="페이지 숫자를 입력해주세요. 예) 24"
				/>
			</PageInputBox>
		</Container>
	);
}

export default WriteSentencePage;
