import React from "react";

import {
	ReactionContainer,
	ReactionImgContainer,
	ReactionImgWrapper
} from "../../styles/common/CommonStyle";
import { Span } from "../../styles/common/TextsStyle";

function ReactionInfo({ imgs, count, type }) {
	const isImageEmpty = count === 0 ? true : false;

	const info = null;

	return (
		<>
			{!isImageEmpty && (
				<ReactionImgContainer>
					{(imgs || info?.likesProfileImg)?.map((img, idx) => (
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
							{count || info?.likesNumber || "0"}
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
