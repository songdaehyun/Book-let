import React from "react";
import { Container } from "../../../styles/common/ContainingsStyle";
import ProfileWithFollow from "../../molecules/Sentence/ProfileWithFollow";
import UserProfile from "../../molecules/UserProfile";

function MyFollowList({ users, type }) {
	return (
		<Container marginTop="24">
			{users.map((user) =>
				type === "following" ? (
					<ProfileWithFollow
						uId={user.username}
						nickname={user.nickname}
						profileImg={user.userImg}
						isFollowed={true}
					/>
				) : (
					<UserProfile nickname={user.nickname} profileImg={user.userImage} />
				)
			)}
		</Container>
	);
}

export default MyFollowList;
