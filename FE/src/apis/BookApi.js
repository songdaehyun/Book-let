import api from "./index";

export const getBook = async (isbn) => {
	try {
		const res = await api({
			method: "GET",
			url: `/book/${isbn}`,
		});

		console.log(res);
		return res;
	} catch (err) {
		console.error(err);
	}
};

export const postLike = async (data) => {
	try {
		const res = await api({
			method: "POST",
			url: `/like`,
			data: data,
		});

		console.log(res);
		return res;
	} catch (err) {
		console.error(err);
	}
};

export const getBookSearch = async (title) => {
	try {
		const res = await api({
			method: "GET",
			url: `/search/${title}`,
		});

		console.log(res);
		return res;
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

		console.log(res);
		return res;
	} catch (err) {
		console.error(err);
	}
};

export const deleteReview = async (rId) => {
	try {
		const res = await api({
			method: "DELTE",
			url: `/review/${rId}`,
		});

		console.log(res);
		return res;
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

		console.log(res);
		return res;
	} catch (err) {
		console.error(err);
	}
};
