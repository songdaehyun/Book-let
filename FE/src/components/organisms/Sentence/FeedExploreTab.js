import React, { useEffect, useState } from "react";

import PreviewRecoSentence from "./PreviewRecoSentence";
import PreviewScrapSentence from "./PreviewScrapSentence";

import { Container } from "../../../styles/common/ContainingsStyle";

import PreviewPostWithProfile from "./PreviewPostWithProfile";

import useArr from "../../../hooks/useArr";
import Empty from "../../molecules/Empty";
import { getFollowingPost } from "../../../apis/sentenceApi";
import { initSentenceList } from "../../../apis/init/initSentence";

function FeedExploreTab(props) {
	// 더미 데이터
	// const posts = [
	// {
	// 	paragraphId: 1,
	// 	profileImg: LoopyImg,
	// 	nickname: "루피는 행복해",
	// 	content:
	// 		"이제는 안다. 우리가 계속 지는 한이 있더라도 선택해야만 하는 건 이토록 평범한 미래라는 것을. 그리고 포기하지 않는 한 그 미래가 다가올 확률은 100퍼센트에 수렴한다는 것을.",
	// 	bookTitle: "이토록 평범한 미래",
	// 	bookAuthor: "김연수",
	// 	createdDate: "2023.03.01",
	// 	commentCnt: 10,
	// 	scrapUserImgs: [LoopyImg, LoopyImg, LoopyImg],
	// 	scrapCnt: 10,
	// 	userScrapted: 1, // 1 이면 스크랩 함. 0이면 안 함.
	// 	paragraphColor: "#B88962",
	// 	paragraphPage: 145,
	// },
	// {
	// 	id: 2,
	// 	profileImg: LoopyImg,
	// 	nickname: "루피는 책이 좋아",
	// 	content:
	// 		"이제는 안다. 우리가 계속 지는 한이 있더라도 선택해야만 하는 건 이토록 평범한 미래라는 것을. 그리고 포기하지 않는 한 그 미래가 다가올 확률은 100퍼센트에 수렴한다는 것을.",
	// 	bookTitle: "이토록 평범한 미래",
	// 	bookAuthor: "김연수",
	// 	createdDate: "2023.03.01",
	// 	commentCnt: 10,
	// 	scrapUserImgs: [LoopyImg, LoopyImg, LoopyImg],
	// 	scrapCnt: 10,
	// 	userScrapted: 0, // 1 이면 스크랩 함. 0이면 안 함.
	// 	paragraphColor: "#769676",
	// 	paragraphPage: 145,
	// },
	// ];

	const [posts, setPosts] = useState([]);

	const isArrEmpty = useArr();

	const id = localStorage.getItem("userId");

	const emptyInfo = {
		title: "팔로우가 올린 문장이 없어요",
		subTitle: (
			<>
				더 많은 분들을 팔로우해서
				<br />
				문장을 공유해보세요!
			</>
		),
		buttonLabel: "추천 문장 보러 가기",
		path: "/sentence/recommand",
	};

	useEffect(() => {
		(async () => {
			await getFollowingPost(id, 5, 0)
				.then(initSentenceList)
				.then((res) => setPosts(res));
		})();
	}, []);

	return (
		<Container paddingTop="32">
			<PreviewRecoSentence />
			<PreviewScrapSentence />
			{isArrEmpty(posts) ? (
				<Empty
					title={emptyInfo.title}
					subTitle={emptyInfo.subTitle}
					buttonLabel={emptyInfo.buttonLabel}
					path={emptyInfo.path}
				/>
			) : (
				posts?.map((post, idx) => <PreviewPostWithProfile key={idx} post={post} />)
			)}
		</Container>
	);
}

export default FeedExploreTab;
