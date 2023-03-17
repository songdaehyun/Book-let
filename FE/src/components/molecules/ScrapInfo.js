import React from "react";
import { Span } from "../../styles/common/TextsStyle";
import {
	ScrapContainer,
	ScrapImgContainer,
	ScrapImgWrapper,
} from "../../styles/Sentence/PostPreviewStyle";

function ScrapInfo({ post }) {
	return (
		<>
			<ScrapImgContainer>
				{post.scrapUserImgs.map((img, idx) => (
					<ScrapImgWrapper key={idx}>
						<img src={img} />
					</ScrapImgWrapper>
				))}
			</ScrapImgContainer>
			<ScrapContainer>
				{/* <div> */}
				<Span weight="bold" color="var(--primary-600)">
					{post.scrapCnt}
				</Span>
				명이 스크랩했어요
				{/* </div> */}
			</ScrapContainer>
		</>
	);
}

export default ScrapInfo;
