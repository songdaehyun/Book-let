export const initBook = (raw) => {
	return {
		cover: raw.bookImgPath,
		title: raw.bookTitle,
		aId: "",
		author: raw.authorName,
		publisher: raw.bookPublisher,
		genres: raw.genreNames,
		description: raw.description,
		isbn: raw.bookIsbn,
		authorOtherBooks: raw.authorOtherBooks,
		isLiked: raw.bookLike,
		likeCnt: raw.likesNumber,
		likeProfileImg: raw.liikesProfileImg,
		rating: raw.bookScore,
	};
};

export const initBookRecom = (raw) => {
	return {
		type: book?.recommendType,
		books: raw?.map((book) => {
			return {
				cover: book?.recommend?.bookImgPath,
				title: book?.recommend?.bookTitle,
				author: book?.recommend?.authorName,
				isbn: book?.recommend?.bookIsbn,
			};
		}),
	};
};
