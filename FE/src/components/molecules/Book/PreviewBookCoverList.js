import React from "react";
import { useNavigate } from "react-router-dom";
import { BookCoverMasonryBox } from "../../../styles/Book/BookStyle";
import { BookCoverMoreBox } from "../../../styles/Book/PreviewBookRecomStyle";

import { CoverWrapper } from "../../../styles/User/JoinStyle";

function PreviewBookCoverList({ books }) {
	const navagate = useNavigate();

	const handleClickCover = (isbn) => {
		navagate(`${isbn}`);
	};

	const handleClickMoreCover = () => {
		navagate("recom/cover");
	};

	return (
		<BookCoverMasonryBox>
			{books.map((book) => {
				return (
					<CoverWrapper key={book.bookIsbn}>
						<img
							src={book.bookImgPath}
							onClick={() => handleClickCover(book.bookIsbn)}
						/>
					</CoverWrapper>
				);
			})}
			<BookCoverMoreBox onClick={handleClickMoreCover}>전체 보기</BookCoverMoreBox>
		</BookCoverMasonryBox>
	);
}

export default PreviewBookCoverList;
