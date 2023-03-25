import React from "react";

import { useSelector } from "react-redux";

import DetailSentence from "../../molecules/Sentence/DetailSentence";
import ScrapToolbar from "../../molecules/Bar/ScrapToolbar";
import ProfileWithFollow from "../../molecules/Sentence/ProfileWithFollow";

import useDate from "../../../hooks/useDate";

import { Container } from "../../../styles/common/ContainingsStyle";
import { DetailPostDateBox } from "../../../styles/Sentence/DetailSentenceStyle";
import { Text } from "../../../styles/common/TextsStyle";

function DetailPostOverview({ isFollowed, setIsFollowed }) {
	const dateTimeSeparation = useDate();

	const user = useSelector((state) => state.sentence.post.user);
	const sentence = useSelector((state) => state.sentence.post.paragraph);

	const info = {
		nickname: user?.nickname,
		profileImg: user?.userImage,
		date: sentence?.createdDate
	};

	return (
		<>
			<DetailSentence />
			<Container marginTop="16" paddingLeft="16" paddingRight="16">
				<ScrapToolbar isMy={false} />
				<Container marginTop="24">
					<ProfileWithFollow
						nickname={info?.nickname}
						profileImg={info?.profileImg}
						isFollowed={isFollowed}
						setIsFollowed={setIsFollowed}
					/>
				</Container>
				<DetailPostDateBox>
					<Text size="14" color="var(--gray-500)">
						{dateTimeSeparation(info.date)}
					</Text>
				</DetailPostDateBox>
			</Container>
		</>
	);
}

export default DetailPostOverview;
