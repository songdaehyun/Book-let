import React from "react";
import ReturnNavigationBar from "../../molecules/Bar/ReturnNavigationBar";
import DetailSentence from "../../molecules/Sentence/DetailSentence";

import cover from "../../../assets/images/dummy/cover/cover-img (1).png";
import Scrap from "../../molecules/Sentence/Scrap";

import LoopyImg from "../../../assets/images/dummy/loopy-img.png";
import { Container } from "../../../styles/common/ContainingsStyle";

function DetailPost(props) {
	// 더미
	const post = {
		paragraphId: 1,
		content:
			"이제는 안다. 우리가 계속 지는 한이 있더라도 선택해야만 하는 건 이토록 평범한 미래라는 것을. 그리고 포기하지 않는 한 그 미래가 다가올 확률은 100퍼센트에 수렴한다는 것을.",
		paragraphColor: "#B88962",
		paragraphPage: 145,
		createdDate: "",
		bookTitle: "이토록 평범한 미래",
		bookAuthor: "김연수",
		userId: 1,
		nickname: "루피는 행복해",
		commentCnt: 10,
		scrapUserImgs: [LoopyImg, LoopyImg, LoopyImg],
		scrapCnt: 10,
		userScrapted: 1, // 1 이면 스크랩 함. 0이면 안 함.
		cover: cover
	};

	return (
		<div>
			<ReturnNavigationBar title={post.bookTitle} />
			<DetailSentence
				title={post.bookTitle}
				author={post.bookAuthor}
				content={post.content}
				page={post.paragraphPage}
				color={post.paragraphColor}
				cover={post.cover}
			/>
			<Container marginTop="16" paddingLeft="16" paddingRight="16">
				<Scrap post={post} isMy={false} />
			</Container>
		</div>
	);
}

export default DetailPost;
