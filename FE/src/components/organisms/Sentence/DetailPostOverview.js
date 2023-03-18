import React from "react";

import DetailSentence from "../../molecules/Sentence/DetailSentence";
import ScrapToolbar from "../../molecules/Bar/ScrapToolbar";
import ProfileWithFollw from "../../molecules/Sentence/ProfileWithFollow";

import { Container } from "../../../styles/common/ContainingsStyle";
import { DetailPostDateBox } from "../../../styles/Sentence/DetailSentenceStyle";
import { Text } from "../../../styles/common/TextsStyle";

function DetailPostOverview({ post, isFollowed, setIsFollowed }) {
	return (
		<>
			<DetailSentence
				title={post.bookTitle}
				author={post.bookAuthor}
				content={post.content}
				page={post.paragraphPage}
				color={post.paragraphColor}
				cover={post.cover}
			/>
			<Container marginTop="16" paddingLeft="16" paddingRight="16">
				<ScrapToolbar post={post} isMy={false} />
				<Container marginTop="24">
					<ProfileWithFollw
						nickname={post.nickname}
						profileImg={post.userImg}
						isFollowed={isFollowed}
						setIsFollowed={setIsFollowed}
					/>
				</Container>
				<DetailPostDateBox>
					<Text size="14" color="var(--gray-500)">
						{post.createdDate}
					</Text>
				</DetailPostDateBox>
			</Container>
		</>
	);
}

export default DetailPostOverview;
