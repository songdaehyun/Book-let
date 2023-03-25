import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import api from "../../utils/api";

import { setPost } from "../../reducer/sentence";

export default function useSentence() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const post = async (data) => {
		try {
			await api({
				method: "POST",
				url: "/sns/paragraph",
				data: data
			}).then((res) => {
				console.log(res);
				navigate(`/sentence/${res.data.id}`);
			});
		} catch (err) {
			console.error(err);
		}
	};

	const getPost = async (sId) => {
		try {
			await api({
				method: "GET",
				url: `/sns/paragraph/${sId}`
			}).then((res) => {
				console.log(res.data);

				dispatch(setPost(res.data));
			});
		} catch (err) {
			console.log(err);
		}
	};

	return { post, getPost };
}
