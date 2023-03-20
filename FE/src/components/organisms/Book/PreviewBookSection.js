import React from "react";
import { Container } from "../../../styles/common/ContainingsStyle";

import MoreBar from "../../molecules/Bar/MoreBar";
import PreviewBookCoverList from "../../molecules/Book/PreviewBookCoverList";
import PreviewSwiperBook from "../../molecules/Book/PreviewSwiperBook";

function PreviewBookSection({ title, books, path }) {
	return (
		<Container marginTop="40" marginBottom="48">
			<MoreBar title={title} path={path} />
			{books.recommendType !== "bookCover" ? (
				<PreviewSwiperBook books={books.recommend} />
			) : (
				<PreviewBookCoverList books={books.recommend}></PreviewBookCoverList>
			)}
		</Container>
	);
}

export default PreviewBookSection;
