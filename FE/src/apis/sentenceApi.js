import api from "./index";

export const createPost = async (data) => {
	try {
		const res = await api({
			method: "POST",
			url: "/sns/paragraph",
			data: data
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
			url: `/sns/paragraph/${sId}`
		});

		console.log(res.data);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export const getMyPost = async (sId) => {
	try {
		const res = await api({
			method: "GET",
			url: `/sns/paragraph/mylist/${sId}`
		});

		console.log(res.data);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export const getFollowingPost = async (sId) => {
	try {
		const res = await api({
			method: "GET",
			url: `/sns/paragraph/following/${sId}`
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
			url: `/sns/paragraph/${sId}`
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
			url: `/prgscrap`,
			data: data
		});

		console.log(res);
	} catch (err) {
		console.log(err);
	}
};
