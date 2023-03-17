import React from "react";

import TopBanner from "../../molecules/Banner/TopBanner";

import BannerImg from "../../../assets/images/Banner/reco-sentence-banner.png";
import LoopyImg from "../../../assets/images/dummy/loopy-img.png";
import { Container } from "../../../styles/common/ContainingsStyle";
import PreviewPostWithProfile from "../../organisms/Sentence/PreviewPostWithProfile";

function Reco(props) {
	const bannerInfo = {
		title: "추천 문장",
		subTitle: (
			<>
				올리신 문장과 스크랩한 문장을 기반으로
				<br /> 문장을 추천해드려요.
			</>
		),
		img: BannerImg,
	};

	// 더미 데이터
	const posts = [
		{
			paragraphId: 1,
			profileImg: LoopyImg,
			nickname: "루피는 행복해",
			content:
				"이제는 안다. 우리가 계속 지는 한이 있더라도 선택해야만 하는 건 이토록 평범한 미래라는 것을. 그리고 포기하지 않는 한 그 미래가 다가올 확률은 100퍼센트에 수렴한다는 것을.",
			bookTitle: "이토록 평범한 미래",
			bookAuthor: "김연수",
			createdDate: "2023.03.01",
			commentCnt: 10,
			scrapUserImgs: [LoopyImg, LoopyImg, LoopyImg],
			scrapCnt: 10,
			userScrapted: 1, // 1 이면 스크랩 함. 0이면 안 함.
			paragraphColor: "#B88962",
			paragraphPage: 145,
		},
		{
			id: 2,
			profileImg: LoopyImg,
			nickname: "루피는 책이 좋아",
			content:
				"이제는 안다. 우리가 계속 지는 한이 있더라도 선택해야만 하는 건 이토록 평범한 미래라는 것을. 그리고 포기하지 않는 한 그 미래가 다가올 확률은 100퍼센트에 수렴한다는 것을.",
			bookTitle: "이토록 평범한 미래",
			bookAuthor: "김연수",
			createdDate: "2023.03.01",
			commentCnt: 10,
			scrapUserImgs: [LoopyImg, LoopyImg, LoopyImg],
			scrapCnt: 10,
			userScrapted: 0, // 1 이면 스크랩 함. 0이면 안 함.
			paragraphColor: "#769676",
			paragraphPage: 145,
		},
	];

	return (
		<div>
			<TopBanner
				title={bannerInfo.title}
				subTitle={bannerInfo.subTitle}
				img={bannerInfo.img}
			/>
			<Container marginTop="24" marginLeft="16" marginRight="16">
				{posts.map((post, idx) => (
					<PreviewPostWithProfile key={idx} post={post} />
				))}
			</Container>
		</div>
	);
}

export default Reco;
