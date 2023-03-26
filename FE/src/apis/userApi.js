import api from "./index";

export const postTaste = async (data) => {
	try {
		const res = await api({
			method: "POST",
			url: `/user/taste`,
			data: data
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
			url: `/user/`
		});

		console.log(res);
		return res;
	} catch (err) {
		console.log(err);
	}
};

export const getMyReview = async (data) => {
	try {
		const res = await api.get("/user/review");

		console.log(res);
		return res;
	} catch (err) {
		console.log(err);
	}
};

export const getMyLike = async (data) => {
	try {
		const res = await api.get("/user/like/book");

		console.log(res);
		return res;
	} catch (err) {
		console.log(err);
	}
};

