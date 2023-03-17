import React from "react";
import PreviewProfile from "../../molecules/Sentence/PreviewProfile";
import PreviewPost from "./PreviewPost";

function PreviewPostWithProfile({ post }) {
	return (
		<>
			<PreviewProfile nickname={post.nickname} profileImg={post.profileImg} />
			<PreviewPost key={post.id} post={post} isMy={false} />
		</>
	);
}

export default PreviewPostWithProfile;
