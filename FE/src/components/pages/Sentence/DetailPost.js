import React, { useState } from "react";

import ReturnNavigationBar from "../../molecules/Bar/ReturnNavigationBar";
import DetailPostOverview from "../../organisms/Sentence/DetailPostOverview";

import { SeparationBar } from "../../../styles/common/BarsStyle";

import cover from "../../../assets/images/dummy/cover/cover-img (1).png";
import LoopyImg from "../../../assets/images/dummy/loopy-img.png";
import DetailComment from "../../organisms/Sentence/DetailComment";

function DetailPost(props) {
	// 더미
	const post = {
		paragraphId: 1,
		content:
			"이제는 안다. 우리가 계속 지는 한이 있더라도 선택해야만 하는 건 이토록 평범한 미래라는 것을. 그리고 포기하지 않는 한 그 미래가 다가올 확률은 100퍼센트에 수렴한다는 것을.",
		paragraphColor: "#B88962",
		paragraphPage: 145,
		createdDate: "2023.03.18",
		bookTitle: "이토록 평범한 미래",
		bookAuthor: "김연수",
		userId: 1,
		nickname: "루피는 행복해",
		commentCnt: 10,
		scrapUserImgs: [LoopyImg, LoopyImg, LoopyImg],
		scrapCnt: 10,
		userScrapted: 1, // 1 이면 스크랩 함. 0이면 안 함.
		cover: cover,
		userImg: LoopyImg
	};

	const comment = [
		{
			commentId : 1,
			nickname : "루피는 행복해",
			commentContent : "좋은 문장 감사합니다.",
			createdDate: "",
			updatedDate: "",
			commentDepth : 0, 
			commentGroup : 1,
		},
		{
			commentId : 4,
			nickname : "루피는 책이 좋습니다요",
			commentContent : "좋은 문장 감사합니다.",
			createdDate: "",
			updatedDate: "",
			commentDepth : 1, 
			commentGroup : 1,
		},
		{
			commentId: 2,
			nickname : "안녕 나는 루피야",
			commentContent : "",
			createdDate: "",
			updatedDate: "",
			commentDepth : 0,
			commentGroup : 2,
		},
		{
			commentId: 3,
			nickname : "루피는 책이 좋습니다요",
			commentContent : "좋은 문장 감사합니다.",
			createdDate: "",
			updatedDate: "",
			commentDepth : 1,
			commentGroup : 2,
		},
	]

	const [isFollowed, setIsFollowed] = useState(false);

	return (
		<>
			<ReturnNavigationBar title={post.bookTitle} />
			<DetailPostOverview post={post} isFollowed={isFollowed} setIsFollowed={setIsFollowed} />
			<SeparationBar />
			<DetailComment comment={comment} />
		</>
	);
}

export default DetailPost;
