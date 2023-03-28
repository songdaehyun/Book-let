import React, { useEffect, useState } from "react";

import PreviewPost from "./PreviewPost";

import { Container } from "../../../styles/common/ContainingsStyle";

import useArr from "../../../hooks/useArr";
import Empty from "../../molecules/Empty";

// import LoopyImg from "../../../assets/images/dummy/loopy-img.png";

import { initMyPost } from "../../../apis/init/initSentence";
import { getMyPost } from "../../../apis/sentenceApi";

function FeedMyTab(props) {
	// 더미 데이터
	// const posts = [
	// 	{
	// 		paragraphId: 1,
	// 		content:
	// 			"이제는 안다. 우리가 계속 지는 한이 있더라도 선택해야만 하는 건 이토록 평범한 미래라는 것을. 그리고 포기하지 않는 한 그 미래가 다가올 확률은 100퍼센트에 수렴한다는 것을.",
	// 		paragraphColor: "#B88962",
	// 		paragraphPage: 145,
	// 		createdDate: "2023.03.01",
	// 		bookTitle: "이토록 평범한 미래",
	// 		bookAuthor: "김연수",
	// 		// userId: 1,
	// 		// nickname: "루피는 행복해",
	// 		commentCnt: 10,
	// 		scrapUserImgs: [LoopyImg, LoopyImg, LoopyImg],
	// 		scrapCnt: 10
	// 		// userScrapted: 1, // 1 이면 스크랩 함. 0이면 안 함.
	// 	},
	// 	{
	// 		paragraphId: 2,
	// 		content:
	// 			"가시적 결과를 외부에서 찾지 말고 내부에서 찾아라. 당신 자신의 노력을 인정해 주고 칭찬하여야 할 주체는 타인이나 직장이나 사회가 아니다.왜 상을 누군가로부터 받으려고 하는가. 상은 당신이 자기 자신에게 주는 것이 진짜이다. 새겨들어라. 훌륭한 화가는 자기 그림이 마음에 들 때까지 붓을 놓지 않는 법이다. 당신 역시 자신이 알고 있는 지식수준에 스스로 흡족할때까",
	// 		paragraphColor: "#769676",
	// 		paragraphPage: 145,
	// 		createdDate: "2023.03.01",
	// 		bookTitle: "이토록 평범한 미래",
	// 		bookAuthor: "김연수",
	// 		// userId: 1,
	// 		// nickname: "루피는 행복해",
	// 		commentCnt: 10,
	// 		scrapUserImgs: [LoopyImg, LoopyImg, LoopyImg],
	// 		scrapCnt: 10
	// 		// userScrapted: 1, // 1 이면 스크랩 함. 0이면 안 함.
	// 	}
	// ];

	const [posts, setPosts] = useState([]);

	const id = localStorage.getItem("userId");

	const isArrEmpty = useArr();

	const emptyInfo = {
		title: "올리신 문장이 없어요",
		subTitle: (
			<>
				좋은 문장을 올려서 수집하고, <br />
				다른 분들과 공유해보세요!
			</>
		),
		buttonLabel: "문장 쓰러 가기",
		path: "/sentence/write",
	};

	useEffect(() => {
		(async () => {
			await getMyPost(id, 5, 0)
				.then(initMyPost)
				.then((res) => setPosts(res));
		})();
	}, []);

	return (
		<Container paddingTop="32">
			{isArrEmpty(posts) ? (
				<Empty
					title={emptyInfo.title}
					subTitle={emptyInfo.subTitle}
					buttonLabel={emptyInfo.buttonLabel}
					path={emptyInfo.path}
				/>
			) : (
				posts?.map((post) => <PreviewPost key={post.id} post={post} isMy={true} />)
			)}
		</Container>
	);
}

export default FeedMyTab;
