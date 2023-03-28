// {
//     "paragraph": {
//         "createdDate": "2023-03-24T03:57:46.839169",
//         "modifiedDate": "2023-03-24T03:57:46.839169",
//         "paragraphId": 6,
//         "paragraphContent": "asdf",
//         "paragraphColor": "#769676",
//         "paragraphPage": 1,
//         "userId": 1,
//         "bookIsbn": "2090000063035"
//     },
//     "scrapInfo": {
//         "scrapUserImages": [],
//         "scrapCount": 0,
//         "userScrape": 0
//     },
//     "book": {
//         "bookIsbn": "2090000063035",
//         "bookTitle": "2019 인생일력",
//         "bookAuthor": null,
//         "bookImage": "https://image.aladin.co.kr/product/17308/13/cover/k032534291_1.jpg"
//     },
//     "message": "success",
//     "user": {
//         "userId": 1,
//         "nickname": "북렛",
//         "userImage": null
//     },
//     "commentCnt": 0
// }

export const initSentence = (raw) => {
	return {
		uId: raw?.user?.userId,
		nickname: raw?.user.nickname,
		profileImg: raw?.user?.userImage,

		isbn: raw?.book?.bookIsbn,
		title: raw?.book?.bookTitle,
		author: raw?.book?.bookAuthor,
		cover: raw?.book?.bookImage,

		sId: raw?.paragraph?.paragraphId,
		content: raw?.paragraph?.paragraphContent,
		page: raw?.paragraph?.paragraphPage,
		color: raw?.paragraph?.paragraphColor,
		date: raw?.paragraph?.createdDate,

		isScraped: raw?.scrapInfo?.userScrape,
		scrapImgs: raw?.scrapInfo?.scrapUserImages,
		scrapCount: raw?.scrapInfo?.scrapCount,
	};
};

export const initSentenceList = (raw) => {
	return raw?.map((sentence) => {
		return {
			nickname: sentence?.user?.nickname,
			profileImg: sentence?.user?.userImage,

			isbn: sentence?.book?.bookIsbn,
			title: sentence?.book?.bookTitle,
			author: sentence?.book?.bookAuthor,
			cover: sentence?.book?.bookImage,

			sId: sentence?.paragraph?.paragraphId,
			content: sentence?.paragraph?.paragraphContent,
			page: sentence?.paragraph?.paragraphPage,
			color: sentence?.paragraph?.paragraphColor,
			date: sentence?.paragraph?.createdDate,

			isScraped: sentence?.scrapInfo?.userScrape,
			scrapImgs: sentence?.scrapInfo?.scrapUserImages,
			scrapCount: sentence?.scrapInfo?.scrapCount,

			commentCnt: sentence?.paragraphId?.commentCnt,
		};
	});
};

export const initMyPost = (raw) => {
	return raw?.map((sentence) => {
		return {
			nickname: sentence?.userInfo?.nickname,
			profileImg: sentence?.userInfo?.userImage,

			isbn: sentence?.book?.bookIsbn,
			title: sentence?.book?.bookTitle,
			author: sentence?.book?.bookAuthor,
			cover: sentence?.book?.bookImage,

			sId: sentence?.paragraphId,
			content: sentence?.paragraphContent,
			page: sentence?.paragraphPage,
			color: sentence?.paragraphColor,
			date: sentence?.createdDate,

			isScraped: sentence?.paragraphScrapDto?.userScrape,
			scrapImgs: sentence?.paragraphScrapDto?.scrapUserImages,
			scrapCount: sentence?.paragraphScrapDto?.scrapCount,

			commentCnt: sentence?.commentCnt,
		};
	});
};

export const initScrappedList = (raw) => {
	return raw?.map((sentence) => {
		return {
			nickname: sentence?.userInfo?.nickname,
			profileImg: sentence?.userInfo?.userImage,

			sId: sentence?.paragraphId,
			content: sentence?.paragraphContent,
			page: sentence?.paragraphPage,
			color: sentence?.paragraphColor,
			date: sentence?.createdDate,

			isScraped: sentence?.scrapInfo?.userScrape,
			scrapImgs: sentence?.scrapInfo?.scrapUserImages,
			scrapCount: sentence?.scrapInfo?.scrapCount,

			commentCnt: sentence?.commentCnt,
		};
	});
};
