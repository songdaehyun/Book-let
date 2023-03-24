import React from "react";
import { useNavigate } from "react-router-dom";

import {
	ListBookCoverMasonryBox,
	PreviewBookMasonryOverviewBox,
} from "../../../styles/Book/BookStyle";
import { Text } from "../../../styles/common/TextsStyle";

function MasonryBookList({ books }) {
	const navigate = useNavigate();

	const handleClick = (isbn) => {
		navigate(`/book/${isbn}`);
	};

	return (
		<ListBookCoverMasonryBox>
			{books.map((book) => {
				return (
					<PreviewBookMasonryOverviewBox key={book.bookIsbn}>
						<img
							src={book.bookImgPath}
							alt="book"
							onClick={() => handleClick(book.bookIsbn)}
						/>
						<Text
							weight="600"
							marginBottom="4"
							onClick={() => handleClick(book.bookIsbn)}
						>
							{book.bookTitle}
						</Text>
						<Text size="14" color="var(--gray-500)">
							{book.authorName}
						</Text>
					</PreviewBookMasonryOverviewBox>
				);
			})}
		</ListBookCoverMasonryBox>
	);
}

export default MasonryBookList;
