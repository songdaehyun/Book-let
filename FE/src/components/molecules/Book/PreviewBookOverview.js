import React from "react";
import { PreviewBookOverviewBox } from "../../../styles/Book/PreviewBookRecomStyle";
import { Text } from "../../../styles/common/TextsStyle";

function PreviewBookOverview({ book }) {
	const handleClick = () => {
		window.location.href = `/book/${book.bookIsbn}`;
	};

	return (
		<PreviewBookOverviewBox>
			<img src={book.bookImgPath || book.bookImage} alt="book" onClick={handleClick} />
			<Text weight="600" marginBottom="4" onClick={handleClick}>
				{book.bookTitle}
			</Text>
			<Text size="14" color="var(--gray-500)">
				{book.authorName}
			</Text>
		</PreviewBookOverviewBox>
	);
}

export default PreviewBookOverview;
