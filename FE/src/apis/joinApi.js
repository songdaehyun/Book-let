import api from "./index";

export const join = async (data) => {
	try {
		const res = await api({
			method: "POST",
			url: `/auth/signup`,
			data: data
		});

		console.log(res);
		return res;
	} catch (err) {
		console.log(err);
	}
};
