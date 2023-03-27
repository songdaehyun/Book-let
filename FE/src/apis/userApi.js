import api from "./index";

export const postTaste = async (data) => {
	try {
		const res = await api({
			method: "POST",
			url: `/user/taste`,
			data: data,
		});

		console.log(res);
		return res;
	} catch (err) {
		console.log(err);
	}
};

export const getMyInfo = async () => {
	try {
		const res = await api({
			method: "GET",
			url: `/user/`,
		});

		console.log(res);
		return res;
	} catch (err) {
		console.log(err);
	}
};

export const getMyReview = async () => {
	try {
		const res = await api.get("/user/review");

		console.log(res);
		return res;
	} catch (err) {
		console.log(err);
	}
};

export const getMyLike = async () => {
	try {
		const res = await api.get("/user/like/book");

		console.log(res);
		return res;
	} catch (err) {
		console.log(err);
	}
};

export const postFollow = async (uId) => {
	try {
		const res = await api.get(`/user/follow/${uId}`);

		console.log(res);
		return res;
	} catch (err) {
		console.log(err);
	}
};

export const getTagExample = async () => {
	try {
		const res = await api.get("/user/prefer/hashtag");

		console.log(res.data);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export const getCoverExample = async () => {
	try {
		const res = await api.get("/user/prefer/cover");

		console.log(res.data);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};
