import api from "./index";

export const getBook = async (bId, uId) => {
	try {
		const res = await api({
			method: "GET",
			url: `/book/${bId}?userId=${uId}`,
		});

		console.log(res.data);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

export const postLike = async (data) => {
	try {
		const res = await api({
			method: "POST",
			url: `/book/like`,
			data: data,
		});

		console.log(res);
		return res;
	} catch (err) {
		console.error(err);
	}
};

export const getAuthorBooks = async (aId, size, page) => {
	try {
		const res = await api({
			method: "GET",
			url: `/book/author/${aId}?size=${size}&page=${page}`,
		});

		console.log(res.data);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

// 도서 추천
export const getCoverBookRecomPre = async (uId) => {
	// try {
	const res = await api({
		method: "GET",
		url: `/recom/cover/pre/${uId}`,
	});

	console.log(res.data);
	return res.data;
	// } catch (err) {
	// 	console.error(err);
	// }
};

export const getCoverBookRecom = async (uId) => {
	try {
		const res = await api({
			method: "GET",
			url: `/recom/cover/all/${uId}`,
		});

		console.log(res.data);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

export const getRatingBookRecomPre = async (uId) => {
	// try {
	const res = await api({
		method: "GET",
		url: `/recom/score/pre/${uId}`,
	});

	console.log(res.data);
	return res.data;
	// } catch (err) {
	// 	console.error(err);
	// }
};

export const getRatingBookRecom = async (uId) => {
	try {
		const res = await api({
			method: "GET",
			url: `/recom/score/all/${uId}`,
		});

		console.log(res);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

export const getBookSearch = async (title, size, page) => {
	// const titleParam = decodeURI(decodeURIComponent(title));
	const titleParam = encodeURIComponent(title);

	try {
		const res = await api({
			method: "GET",
			url: `/book/search?bookTitle=${titleParam}&size=${size}&page=${page}`,
		});

		console.log(res.data);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

export const getLikeBookRecomPre = async (uId) => {
	// try {
	const res = await api({
		method: "GET",
		url: `/recom/like/pre/${uId}`,
	});

	console.log(res.data);
	return res.data;
	// } catch (err) {
	// 	console.error(err);
	// }
};

export const getLikeBookRecom = async (uId) => {
	try {
		const res = await api({
			method: "GET",
			url: `/recom/like/all/${uId}`,
		});

		console.log(res.data);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

// 리뷰 api
export const getReview = async (isbn, size, page) => {
	try {
		const res = await api({
			method: "GET",
			url: `/review/${isbn}?size=${size}&page=${page}`,
		});

		console.log(res.data);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

export const getGenreBookRecomPre = async (uId) => {
	// try {
	const res = await api({
		method: "GET",
		url: `/recom/genre/pre/${uId}`,
	});

	console.log(res.data);
	return res.data;
	// } catch (err) {
	// 	console.error(err);
	// }
};

export const getGenreBookRecom = async (uId) => {
	try {
		const res = await api({
			method: "GET",
			url: `/recom/genre/all/${uId}`,
		});

		console.log(res);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

export const deleteReview = async (rId) => {
	try {
		const res = await api({
			method: "DELETE",
			url: `/review/${rId}`,
		});

		console.log(res.data);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

export const getUserBookRecomPre = async (uId) => {
	// try {
	const res = await api({
		method: "GET",
		url: `/recom/user/pre/${uId}`,
	});

	console.log(res.data);
	return res.data;
	// } catch (err) {
	// 	console.error(err);
	// }
};

export const getUserBookRecom = async (uId) => {
	try {
		const res = await api({
			method: "GET",
			url: `/recom/user/all/${uId}`,
		});

		console.log(res.data);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

export const postReview = async (data) => {
	try {
		const res = await api({
			method: "POST",
			url: `/review`,
			data: data,
		});

		console.log(res.data.message);
		return res.data.message;
	} catch (err) {
		console.error(err);
	}
};
