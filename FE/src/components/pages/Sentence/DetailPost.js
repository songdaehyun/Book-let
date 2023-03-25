import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import useSentence from "../../../hooks/apis/useSentenceApi";

import ReturnNavigationBar from "../../molecules/Bar/ReturnNavigationBar";
import DetailComment from "../../organisms/Sentence/DetailComment";
import DetailPostOverview from "../../organisms/Sentence/DetailPostOverview";

import { SeparationBar } from "../../../styles/common/BarsStyle";

import LoopyImg from "../../../assets/images/dummy/loopy-img.png";

function DetailPost() {
	const comments = [
		{
			commentId: 1,
			nickname: "루피는 행복해",
			commentContent: "좋은 문장 감사합니다.",
			createdDate: "2023.03.19",
			updatedDate: "",
			commentDepth: 0,
			commentGroup: 1,
			img: LoopyImg
		},
		{
			commentId: 4,
			nickname: "루피는 책이 좋습니다요",
			commentContent: "좋은 문장 감사합니다.",
			createdDate: "2023.03.19",
			updatedDate: "",
			commentDepth: 1,
			commentGroup: 1,
			img: LoopyImg
		},
		{
			commentId: 2,
			nickname: "안녕 나는 루피야",
			commentContent: "",
			createdDate: "2023.03.19",
			updatedDate: "",
			commentDepth: 0,
			commentGroup: 2,
			img: LoopyImg
		},
		{
			commentId: 3,
			nickname: "루피는 책이 좋습니다요",
			commentContent: "좋은 문장 감사합니다.",
			createdDate: "2023.03.19",
			updatedDate: "",
			commentDepth: 1,
			commentGroup: 2,
			img: LoopyImg
		}
	];

	const { sId } = useParams();

	const [isFollowed, setIsFollowed] = useState(false);

	const { getPost } = useSentence();

	const book = useSelector((state) => state.sentence.post.book);

	useEffect(() => {
		getPost(sId);
	}, []);

	return (
		<>
			<ReturnNavigationBar title={book?.bookTitle} />
			<DetailPostOverview isFollowed={isFollowed} setIsFollowed={setIsFollowed} />
			<SeparationBar />
			<DetailComment comments={comments} />
		</>
	);
}

export default DetailPost;
