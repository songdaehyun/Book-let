import React from "react";

import {
	ReactionContainer,
	ReactionImgContainer,
	ReactionImgWrapper,
} from "../../styles/common/CommonStyle";
import { Span } from "../../styles/common/TextsStyle";

import defaultImg from "../../assets/images/user-default-img.png";

function ReactionInfo({ imgs, count, type }) {
	const isImageEmpty = count === 0 ? true : false;

	return (
		<>
			{!isImageEmpty && (
				<ReactionImgContainer>
					{imgs?.map((img, idx) => (
						<ReactionImgWrapper key={idx}>
							<img src={img ? img : defaultImg} alt="user profile" />
						</ReactionImgWrapper>
					))}
				</ReactionImgContainer>
			)}
			<ReactionContainer>
				{isImageEmpty ? (
					type === "scrap" ? (
						<>아직 스크랩한 사용자가 없어요</>
					) : (
						type === "like" && <>아직 좋아하는 사용자가 없어요</>
					)
				) : (
					<>
						<Span weight="bold" color="var(--primary-600)">
							{count || "0"}
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
