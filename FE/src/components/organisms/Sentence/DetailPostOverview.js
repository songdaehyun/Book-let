import React from "react";

import ScrapToolbar from "../../molecules/Bar/ScrapToolbar";
import DetailSentence from "../../molecules/Sentence/DetailSentence";
import ProfileWithFollow from "../../molecules/Sentence/ProfileWithFollow";

import useDate from "../../../hooks/useDate";

import { deletePost } from "../../../apis/sentenceApi";
import { Container } from "../../../styles/common/ContainingsStyle";
import { Span, Text } from "../../../styles/common/TextsStyle";
import { DetailPostDateBox } from "../../../styles/Sentence/DetailSentenceStyle";

function DetailPostOverview({
	nickname,
	profileImg,
	date,
	isScraped,
	scrapImgs,
	scrapCount,
	isFollowed,
	setIsFollowed,
	title,
	author,
	cover,
	sId,
	content,
	page,
	color,
}) {
	const dateTimeSeparation = useDate();

	const handleClickDelete = () => {
		(async () => {
			await deletePost(sId).then((res) => {
				console.log(res);
			});
		})();
	};

	return (
		<>
			<DetailSentence
				author={author}
				cover={cover}
				title={title}
				color={color}
				content={content}
				page={page}
			/>
			<Container marginTop="16" paddingLeft="16" paddingRight="16">
				<ScrapToolbar
					isScraped={isScraped}
					scrapImgs={scrapImgs}
					scrapCount={scrapCount}
					isMy={false}
				/>
				<Container marginTop="24">
					<ProfileWithFollow
						nickname={nickname}
						profileImg={profileImg}
						isFollowed={isFollowed}
						setIsFollowed={setIsFollowed}
					/>
				</Container>
				<DetailPostDateBox>
					<Text size="14" color="var(--gray-500)">
						<Span onClick={handleClickDelete}>삭제</Span>
						{dateTimeSeparation(date)}
					</Text>
				</DetailPostDateBox>
			</Container>
		</>
	);
}

export default DetailPostOverview;
