import React from "react";
import { Text } from "../../../styles/common/TextsStyle";
import { SentenceBookAutoSearchBox, SentenceBookSearchBarBox, SentenceBookSearchBox } from "../../../styles/Sentence/SentenceFormStyle";
import searchIcon from "../../../assets/icons/search-icon.png";

function SentenceBookSearch(props) {
	return (
		<SentenceBookSearchBox>
			<SentenceBookSearchBarBox>
				<img src={searchIcon} alt="search icon" />
				<div>
					<input weight="bold" marginBottom="8" placeholder="책을 선택해주세요" />
					{/* <Text weight="bold" color="var(--gray-500)" marginBottom="8">
					책을 선택해주세요
				</Text> */}
					<Text size="14" color="var(--gray-500)">
						어떤 책을 읽으셨어요?
					</Text>
				</div>
			</SentenceBookSearchBarBox>
            <SentenceBookAutoSearchBox>

            </SentenceBookAutoSearchBox>
		</SentenceBookSearchBox>
	);
}

export default SentenceBookSearch;
