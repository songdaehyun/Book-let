import React, { useEffect, useRef, useState } from "react";
import { getBookSearch } from "../../../apis/BookApi";
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
	const [isInputInvisible, setIsInputInvisible] = useState(true);
	const [searchWord, setSearchWord] = useState("");
	const [searchBooks, setSearchBooks] = useState([]);
	const [selectedBook, setSelectedBook] = useState();

	const closeAutoSearch = () => {
		setTimeout(() => {
			setIsOpen(false);
		}, 100);
	};

	const handleClickSearchBox = () => {
		setIsOpen(true);

		setTimeout(() => {
			inputRef.current?.focus();
		}, 100);
	};

	const searchApiCall = (word) => {
		(async () => {
			await getBookSearch(word, 5, 0).then((res) => setSearchBooks(res));
		})();

		// 더미
		// setSearchBooks([
		// 	{ bId: 1, title: "제목1", author: "나1" },
		// 	{ bId: 2, title: "제목2", author: "나2" },
		// ]);
	};

	const handleChangeSearchWord = (e) => {
		setSearchWord(e.target.value);

		searchApiCall(e.target.value);
	};

	const handleClickBook = (book) => {
		setSelectedBook({ bId: book?.bId, title: book?.title, author: book.author });
	};

	useEffect(() => {
		setIsInputInvisible(!isOpen && selectedBook);
	}, [isOpen, selectedBook]);

	return (
		<SentenceBookSearchBox>
			<SentenceBookSearchBarBox onClick={handleClickSearchBox}>
				{isInputInvisible ? (
					<>
						<Text weight="bold" marginBottom="4">
							{selectedBook?.title}
						</Text>
						<Text>{selectedBook?.author}</Text>
					</>
				) : (
					<>
						<img src={searchIcon} alt="search icon" />
						<div>
							<input
								ref={inputRef}
								value={searchWord}
								placeholder="책을 선택해주세요"
								onBlur={closeAutoSearch}
								onChange={handleChangeSearchWord}
							/>
							<Text size="14" color="var(--gray-500)">
								어떤 책을 읽으셨어요?
							</Text>
						</div>
					</>
				)}
			</SentenceBookSearchBarBox>
			<SentenceBookAutoSearchBox isOpen={isOpen}>
				{searchBooks?.length === 0 ? (
					<Text color="var(--gray-500)">검색 결과가 없습니다.</Text>
				) : (
					<div>
						{searchBooks?.map((book) => (
							<div key={book.bid} onClick={() => handleClickBook(book)}>
								<Text weight="bold" marginBottom="4">
									{book?.title}
								</Text>
								<Text>{book?.author}</Text>
							</div>
						))}
					</div>
				)}
			</SentenceBookAutoSearchBox>
		</SentenceBookSearchBox>
	);
}

export default SentenceBookSearch;
