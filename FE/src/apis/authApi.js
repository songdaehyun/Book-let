import api from "./index";

export const join = async (data) => {
	try {
		const res = await api({
			method: "POST",
			url: `/auth/signup`,
			data: data,
		});

		console.log(res.data);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export const login = async (data) => {
	try {
		const res = await api({
			method: "POST",
			url: `/auth/login`,
			data: data,
		});

		console.log(res.data);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export const logout = async () => {
	try {
		const res = await api({
			method: "POST",
			url: `/auth/logout`,
		});

		console.log(res);
		return res;
	} catch (err) {
		console.log(err);
	}
};

export const updateMyInfo = async (data) => {
	try {
		const res = await api({
			method: "PUT",
			url: `/auth/update`,
			data: data,
		});

		console.log(res.data);
		return res.data;
	} catch (err) {
		console.log(err);
	}
};

export const deleteMyAccount = async (uId) => {
	try {
		const res = await api({
			method: "DELETE",
			url: `/auth/delete`,
		});

		console.log(res);
		return res;
	} catch (err) {
		console.log(err);
	}
};

export const updateMyPw = async (data) => {
	try {
		const res = await api({
			method: "POST",
			url: `/auth/setpw`,
			data: data,
		});

		console.log(res);
		return res;
	} catch (err) {
		console.log(err);
	}
};

export const checkId = async (data) => {
	try {
		const res = await api({
			method: "GET",
			url: `/auth/check/username/${data}`,
		});

		console.log(res.data.message);
		return res.data.message;
	} catch (err) {
		console.log(err);
	}
};

export const checkNickname = async (data) => {
	try {
		const res = await api({
			method: "GET",
			url: `/auth/check/nickname/${data}`,
		});

		console.log(res.data.message);
		return res.data.message;
	} catch (err) {
		console.log(err);
	}
};

export const checkEmail = async (data) => {
	try {
		const res = await api({
			method: "GET",
			url: `/auth/check/email/${data}`,
		});

		console.log(res.data.message);
		return res.data.message;
	} catch (err) {
		console.log(err);
	}
};
