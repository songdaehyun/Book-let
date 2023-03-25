import React from "react";

import { useSelector } from "react-redux";

import {
	ReactionContainer,
	ReactionImgContainer,
	ReactionImgWrapper
} from "../../styles/common/CommonStyle";
import { Span } from "../../styles/common/TextsStyle";

function ReactionInfo({ type }) {
	const scrap = useSelector((state) => state.sentence.post.scrapInfo);

	const info = {
		imgs: scrap?.scrapUserImages,
		count: scrap?.scrapCount
	};

	const isImageEmpty = info.count === 0 ? true : false;

	return (
		<>
			{!isImageEmpty && (
				<ReactionImgContainer>
					{(info?.imgs || info?.likesProfileImg)?.map((img, idx) => (
						<ReactionImgWrapper key={idx}>
							<img src={img} alt="user profile" />
						</ReactionImgWrapper>
					))}
				</ReactionImgContainer>
			)}
			<ReactionContainer>
				{isImageEmpty ? (
					<>아직 스크랩한 사용자가 없어요</>
				) : (
					<>
						<Span weight="bold" color="var(--primary-600)">
							{info?.count || info?.likesNumber || "0"}
						</Span>
						{type === "scrap" ? (
							<>명이 스크랩했어요</>
						) : (
							type === "like" && <>명이 좋아해요</>
						)}
					</>
				)}
			</ReactionContainer>
		</>
	);
}

export default ReactionInfo;
