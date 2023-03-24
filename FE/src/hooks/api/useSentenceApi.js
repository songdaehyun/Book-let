import { useNavigate } from "react-router-dom";

import api from "../../utils/api";

import { useDispatch } from "react-redux";
import { setPost } from "../../reducer/sentence";

export default function useSentence() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const post = async (data) => {
		try {
			// await axios({
			// 	method: "POST",
			// 	// url: "/api/v1/sns/paragraph",
			// 	url: "http://j8b306.p.ssafy.io:8000/api/v1/sns/paragraph",
			// 	data: data,
			// }).then((res) => {
			// 	console.log(res);
			// 	navigate(`/sentece/${res.data.id}`);
			// });
			await api({
				method: "POST",
				url: "/sns/paragraph",
				data: data,
			}).then((res) => {
				console.log(res);
				navigate(`/sentence/${res.data.id}`);
			});
		} catch (err) {
			console.error(err);
		}
	};

	const getSentence = async (sId) => {
		try {
			await api({
				method: "GET",
				url: `/sns/paragraph/${sId}`,
			}).then((res) => {
				console.log(res.data);

				dispatch(setPost(res.data));
			});
		} catch (err) {
			console.log(err);
		}
	};

	return { post, getSentence };
}
