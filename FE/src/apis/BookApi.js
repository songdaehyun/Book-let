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

export const postLike = async (isbn) => {
	try {
		const res = await api({
			method: "POST",
			url: `/like/${isbn}`,
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
