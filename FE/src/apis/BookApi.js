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