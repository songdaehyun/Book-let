export const initBook = (raw) => {
	return {
		cover: raw?.bookImgPath,
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
		likeProfileImg: raw?.liikesProfileImg,
		rating: raw?.bookScore,
	};
};

export const initReview = (raw) => {
	return raw?.map((review) => {
		return {
			uId: review?.userInfo?.userId,
			commentId: review?.reviewId,
			nickname: review?.userInfo?.nickname,
			img: review?.userInfo?.userImage,
			content: review?.reviewContent,
			rating: review?.reviewGrade,
			date: review?.createdDate,
		};
	});
};
