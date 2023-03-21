import React from "react";

import MoreBar from "../../molecules/Bar/MoreBar";
import PreviewSwiperBook from "../../molecules/Book/PreviewSwiperBook";

function AuthorOtherBookPreview({ book }) {
	return (
		<div>
			<MoreBar title="이 저자의 다른 책" path={`/author/${book.authorId}`} />
			<PreviewSwiperBook books={book.authorOtherBooks} />
		</div>
	);
}

export default AuthorOtherBookPreview;
