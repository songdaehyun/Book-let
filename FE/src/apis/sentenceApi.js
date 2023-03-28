import api from "./index";

export const createPost = async (data) => {
	try {
		const res = await api({
			method: "POST",
			url: "/sns/paragraph",
			data: data,
		});

		console.log(res);
		return res;
	} catch (err) {
		console.error(err);
	}
};

export const getPost = async (sId) => {
	try {
		const res = await api({
			method: "GET",
			url: `/sns/paragraph/${sId}`,
		});

		console.log(res.data);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export const getMyPost = async (uId, size, page) => {
	try {
		const res = await api({
			method: "GET",
			url: `/sns/paragraph/mylist/${uId}?size=${size}&page=${page}`,
		});

		console.log(res.data.paragraphs);
		return res.data.paragraphs;
	} catch (err) {
		console.log(err);
	}
};

export const getFollowingPost = async (uId, size, page) => {
	try {
		const res = await api({
			method: "GET",
			url: `/sns/paragraph/following/${uId}?size=${size}&page=${page}`,
		});

		console.log(res.data);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export const deletePost = async (sId) => {
	try {
		const res = await api({
			method: "DELETE",
			url: `/sns/paragraph/${sId}`,
		});

		console.log(res.data);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export const postScrap = async (data) => {
	try {
		const res = await api({
			method: "POST",
			url: `/scrap`,
			data: data,
		});

		console.log(res);
	} catch (err) {
		console.log(err);
	}
};

export const getScrappedPost = async (uId, page, size) => {
	try {
		const res = await api({
			method: "GET",
			url: `/scrap/${uId}?page=${page}&size=${size}`,
		});

		console.log(res.data);
		return res.data?.paragraphs;
	} catch (err) {
		console.log(err);
	}
};

export const getScrapCount = async (uId) => {
	try {
		const res = await api({
			method: "GET",
			url: `/scrap/count/${uId}`,
		});

		console.log(res);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};
