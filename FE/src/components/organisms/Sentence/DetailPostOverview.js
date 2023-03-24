import React from "react";

import DetailSentence from "../../molecules/Sentence/DetailSentence";
import ScrapToolbar from "../../molecules/Bar/ScrapToolbar";
import ProfileWithFollow from "../../molecules/Sentence/ProfileWithFollow";

import { Container } from "../../../styles/common/ContainingsStyle";
import { DetailPostDateBox } from "../../../styles/Sentence/DetailSentenceStyle";
import { Text } from "../../../styles/common/TextsStyle";

function DetailPostOverview({ post, isFollowed, setIsFollowed }) {
	return (
		<>
			<DetailSentence
				title={post?.book.bookTitle}
				author={post?.book.bookAuthor}
				content={post?.paragraph.paragraphContent}
				page={post?.paragraph.paragraphPage}
				color={post?.paragraph.paragraphColor}
				cover={post?.book.bookImage}
			/>
			<Container marginTop="16" paddingLeft="16" paddingRight="16">
				<ScrapToolbar post={post} isMy={false} />
				<Container marginTop="24">
					<ProfileWithFollow
						nickname={post?.user.nickname}
						profileImg={post?.user.userImg}
						isFollowed={isFollowed}
						setIsFollowed={setIsFollowed}
					/>
				</Container>
				<DetailPostDateBox>
					<Text size="14" color="var(--gray-500)">
						{post?.paragraph.createdDate}
					</Text>
				</DetailPostDateBox>
			</Container>
		</>
	);
}

export default DetailPostOverview;
