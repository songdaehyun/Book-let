import React from "react";
import {
	ReactionContainer,
	ReactionImgContainer,
	ReactionImgWrapper,
} from "../../styles/common/CommonStyle";
import { Span } from "../../styles/common/TextsStyle";

function ReactionInfo({ info, type }) {
	return (
		<>
			<ReactionImgContainer>
				{(info.scrapUserImgs || info.liikesProfileImg).map((img, idx) => (
					<ReactionImgWrapper key={idx}>
						<img src={img} />
					</ReactionImgWrapper>
				))}
			</ReactionImgContainer>
			<ReactionContainer>
				<Span weight="bold" color="var(--primary-600)">
					{info.scrapCnt || info.likesNumber}
				</Span>
				{type === "scrap" ? <>명이 스크랩했어요</> : type === "like" && <>명이 좋아해요</>}
			</ReactionContainer>
		</>
	);
}

export default ReactionInfo;
