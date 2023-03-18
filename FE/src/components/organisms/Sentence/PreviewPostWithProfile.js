import React from "react";
import SentenceProfile from "../../molecules/Sentence/SentenceProfile";
import PreviewPost from "./PreviewPost";

function PreviewPostWithProfile({ post }) {
	return (
		<>
			<SentenceProfile nickname={post.nickname} profileImg={post.profileImg} />
			<PreviewPost key={post.id} post={post} isMy={false} />
		</>
	);
}

export default PreviewPostWithProfile;
