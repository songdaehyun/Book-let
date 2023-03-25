import { useNavigate } from "react-router-dom";

import api from "../../apis";

export default function useSentence() {
	const navigate = useNavigate();

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

	return { post };
}
