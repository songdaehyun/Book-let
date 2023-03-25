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
