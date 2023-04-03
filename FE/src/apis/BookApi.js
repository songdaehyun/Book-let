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

		console.log(res.data);
		return res.data;
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
export const getCoverBookRecom = async (uId) => {
	try {
		const res = await api({
			method: "GET",
			url: `/recom/cover/${uId}`,
		});

		console.log(res.data);
		return res.data;
	} catch (err) {
		console.error(err);
	}
};

export const getRatingBookRecom = async (uId) => {
	try {
		const res = await api({
			method: "GET",
			url: `/recom/score/${uId}`,
					});

		console.log(res.data);
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

export const getLikeBookRecom = async (uId) => {
	try {
		const res = await api({
			method: "GET",
			url: `/recom/like/${uId}`,
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

export const getGenreBookRecom = async (uId) => {
	try {
		const res = await api({
			method: "GET",
			url: `/recom/genre/${uId}`,
		});

		console.log(res.data);
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

export const getUserBookRecom = async (uId) => {
	try {
		const res = await api({
			method: "GET",
			url: `/recom/user/${uId}`,
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
