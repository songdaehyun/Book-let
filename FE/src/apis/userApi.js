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

export const getMyInfo = async (uName) => {
	try {
		const res = await api({
			method: "GET",
			url: `/user/${uName}`,
		});

		console.log(res.data.data);
		return res.data.data;
	} catch (err) {
		console.log(err);
	}
};

export const getMyPreviewReview = async (uName) => {
	try {
		const res = await api.get(`/user/review/pre/${uName}`);

		console.log(res.data.data);
		return res.data.data;
	} catch (err) {
		console.log(err);
	}
};

export const getMyReview = async (uName) => {
	try {
		const res = await api.get(`/user/review/all/${uName}`);

		console.log(res.data);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export const getMyPreviewLike = async (uName) => {
	try {
		const res = await api.get(`/user/like/book/${uName}`);

		console.log(res.data.data);
		return res.data.data;
	} catch (err) {
		console.log(err);
	}
};

export const getMyLike = async (uName) => {
	try {
		const res = await api.get(`/user/like/book/all/${uName}`);

		console.log(res.data.data);
		return res.data.data;
	} catch (err) {
		console.log(err);
	}
};

export const postFollow = async (data) => {
	try {
		const res = await api({
			method: "POST",
			url: `/user/follow`,
			data: data,
		});

		console.log(res);
		return res;
	} catch (err) {
		console.log(err);
	}
};

export const getTagExample = async () => {
	try {
		const res = await api.get("/user/prefer/hashtag");

		console.log(res.data.data);
		return res.data.data;
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
