import React, { useState } from "react";
import { Text } from "../../../styles/common/TextsStyle";
import {
	SentenceBookAutoSearchBox,
	SentenceBookSearchBarBox,
	SentenceBookSearchBox
} from "../../../styles/Sentence/SentenceFormStyle";
import searchIcon from "../../../assets/icons/search-icon.png";

function SentenceBookSearch(props) {
	const [isOpen, setIsOpen] = useState();

	const openAutoSearch = () => {
		setIsOpen(true);
	};

	const closeAutoSearch = () => {
		setIsOpen(false);
	};

	return (
		<SentenceBookSearchBox>
			<SentenceBookSearchBarBox>
				<img src={searchIcon} alt="search icon" />
				<div>
					<input
						placeholder="책을 선택해주세요"
						onFocus={openAutoSearch}
						onBlur={closeAutoSearch}
					/>
					<Text size="14" color="var(--gray-500)">
						어떤 책을 읽으셨어요?
					</Text>
				</div>
			</SentenceBookSearchBarBox>
			<SentenceBookAutoSearchBox isOpen={isOpen}>
				<Text color="var(--gray-500)">검색 결과가 없습니다.</Text>
			</SentenceBookAutoSearchBox>
		</SentenceBookSearchBox>
	);
}

export default SentenceBookSearch;
