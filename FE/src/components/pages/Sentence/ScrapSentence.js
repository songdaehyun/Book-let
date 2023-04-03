import React, { useEffect, useState } from "react";

import ScrapHeading from "../../atoms/Sentence/ScrapHeading";
import ReturnNavigationBar from "../../molecules/Bar/ReturnNavigationBar";
import UserProfile from "../../molecules/UserProfile";
import PreviewPost from "../../organisms/Sentence/PreviewPost";

import { Container } from "../../../styles/common/ContainingsStyle";

// import LoopyImg from "../../../assets/images/dummy/loopy-img.png";

import { initScrappedList, initSentenceList } from "../../../apis/init/initSentence";
import { getScrappedPost } from "../../../apis/sentenceApi";
import useArr from "../../../hooks/useArr";
import Empty from "../../molecules/Empty";
import useInfiniteScroll from "../../../hooks/useInfiniteScroll";

function ScrapSentence(props) {
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
	// 	paragraphId: 2,
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

	const id = localStorage.getItem("userId");

	const isArrEmpty = useArr();

	const emptyInfo = {
		title: "스크랩한 문장이 없어요",
		subTitle: (
			<>
				다른 분들의 문장을 스크랩해서
				<br />
				수집해보세요!
			</>
		),
		buttonLabel: "추천 문장 보러 가기",
		path: "/sentence/recommand",
	};

	const { data: posts, isFetching } = useInfiniteScroll(id, getScrappedPost, 5, initSentenceList);

	return (
		<>
			<ReturnNavigationBar title="스크랩한 문장" />
			<Container paddingTop="56" paddingLeft="16" paddingRight="16">
				<ScrapHeading />
				{isArrEmpty(posts) ? (
					<Empty
						title={emptyInfo.title}
						subTitle={emptyInfo.subTitle}
						buttonLabel={emptyInfo.buttonLabel}
						path={emptyInfo.path}
					/>
				) : (
					posts?.map((post) => (
						<>
							<UserProfile
								file
								nickname={post?.nickname}
								profileImg={post?.profileImg}
							/>
							<PreviewPost key={post?.id} post={post} isMy={false} />
						</>
					))
				)}
			</Container>
		</>
	);
}

export default ScrapSentence;
