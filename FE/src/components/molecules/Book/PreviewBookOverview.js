import React from "react";
import { useNavigate } from "react-router-dom";
import { PreviewBookOverviewBox } from "../../../styles/Book/PreviewBookRecomStyle";
import { Text } from "../../../styles/common/TextsStyle";

function PreviewBookOverview({ book }) {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/book/${book.bookIsbn}`);
	};

	return (
		<PreviewBookOverviewBox>
			<img src={book.bookImgPath} alt="book" onClick={handleClick} />
			<Text weight="600" marginBottom="4" onClick={handleClick}>
				{book.bookTitle}
			</Text>
			<Text size="14" color="var(--gray-500)">
				{book.authorNames}
			</Text>
		</PreviewBookOverviewBox>
	);
}

export default PreviewBookOverview;
