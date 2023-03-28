import React from "react";
import { UserProfileBox } from "../../../styles/Sentence/DetailSentenceStyle";
import FollowButton from "../../atoms/Button/FollowButton";

import UserProfile from "../UserProfile";

function ProfileWithFollow({ uId, nickname, profileImg, isFollowed, setIsFollowed }) {
	return (
		<UserProfileBox>
			<UserProfile nickname={nickname} profileImg={profileImg} />
			<FollowButton uId={uId} isFollowed={isFollowed} setIsFollowed={setIsFollowed} />
		</UserProfileBox>
	);
}

export default ProfileWithFollow;
