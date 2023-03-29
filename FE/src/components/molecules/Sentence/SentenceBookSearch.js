import React, { useRef, useState } from "react";
import searchIcon from "../../../assets/icons/search-icon.png";
import { Text } from "../../../styles/common/TextsStyle";
import {
	SentenceBookAutoSearchBox,
	SentenceBookSearchBarBox,
	SentenceBookSearchBox,
} from "../../../styles/Sentence/SentenceFormStyle";

function SentenceBookSearch(props) {
	const inputRef = useRef();
	const [isOpen, setIsOpen] = useState();

	const openAutoSearch = () => {
		setIsOpen(true);
	};

	const closeAutoSearch = () => {
		setIsOpen(false);
	};

	const handleClickSearchBox = () => {
		inputRef.current.focus();
	};

	return (
		<SentenceBookSearchBox>
			<SentenceBookSearchBarBox onClick={handleClickSearchBox}>
				<img src={searchIcon} alt="search icon" />
				<div>
					<input
						ref={inputRef}
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
