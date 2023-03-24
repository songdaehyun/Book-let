import React from "react";

import { PreviewSwiperBookBox } from "../../../styles/Book/PreviewBookRecomStyle";
import PreviewBookOverview from "./PreviewBookOverview";

function PreviewSwiperBook({ books }) {
	return (
		<PreviewSwiperBookBox>
			{books.map((book, idx) => (
				<PreviewBookOverview key={idx} book={book} />
			))}
		</PreviewSwiperBookBox>
	);
}

export default PreviewSwiperBook;
