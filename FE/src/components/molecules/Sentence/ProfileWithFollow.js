import React from "react";
import { SentenceProfileBox } from "../../../styles/Sentence/DetailSentenceStyle";
import FollowButton from "../../atoms/Button/FollowButton";

import SentenceProfile from "./SentenceProfile";

function ProfileWithFollow({ nickname, profileImg, isFollowed, setIsFollowed }) {
	return (
		<SentenceProfileBox>
			<SentenceProfile nickname={nickname} profileImg={profileImg} />
			<FollowButton isFollowed={isFollowed} setIsFollowed={setIsFollowed} />
		</SentenceProfileBox>
	);
}

export default ProfileWithFollow;
