export const initTag = (raw) => {
	return raw.map(({ hashtag_id, hashtag_name }) => {
		return {
			id: hashtag_id,
			title: hashtag_name,
		};
	});
};

export const initCover = (raw) => {
	return raw.map(({ book_isbn, book_img }) => {
		return {
			id: book_isbn,
			img: book_img,
		};
	});
};
