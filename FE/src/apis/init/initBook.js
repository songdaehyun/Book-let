export const initBook = (raw) => {
	return {
		cover: raw?.bookImage,
		title: raw?.bookTitle,
		aId: "",
		author: raw?.authorName,
		publisher: raw?.bookPublisher,
		genres: raw?.genreNames,
		description: raw?.description,
		isbn: raw?.bookIsbn,
		authorOtherBooks: raw?.authorOtherBooks,
		isLiked: raw?.bookLike,
		likeCnt: raw?.likesNumber,
		likeProfileImg: raw?.likesUserImages,
		rating: raw?.bookGrade,
	};
};

export const initReview = (raw) => {
	return {
		hasNextPage: raw?.hasNextPage,
		contents: raw?.reviews?.map((review) => {
			return {
				uId: review?.userInfo?.userId,
				commentId: review?.reviewId,
				nickname: review?.userInfo?.nickname,
				img: review?.userInfo?.userImage,
				content: review?.reviewContent,
				rating: review?.reviewGrade,
				date: review?.createdDate,
			};
		}),
	};
};

export const initBookSearch = (raw) => {
	return {
		hasNextPage: raw?.hasNext,
		contents: raw?.bookList?.map((book) => {
			return {
				author: book?.authorName,
				cover: book?.bookImage,
				bId: book?.bookIsbn,
				title: book?.bookTitle,
			};
		}),
	};
};
