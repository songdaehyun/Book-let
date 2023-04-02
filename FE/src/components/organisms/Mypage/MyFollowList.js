import React from "react";
import { Container } from "../../../styles/common/ContainingsStyle";
import ProfileWithFollow from "../../molecules/Sentence/ProfileWithFollow";
import UserProfile from "../../molecules/UserProfile";

function MyFollowList({ users, type }) {
	return (
		<Container marginTop="24">
			{users?.users?.map((user, idx) =>
				type === "following" ? (
					<ProfileWithFollow
						key={idx}
						uId={user.username}
						nickname={user.nickname}
						profileImg={user.userImg}
						isFollowed={true}
					/>
				) : (
					<UserProfile key={idx} nickname={user.nickname} profileImg={user.userImage} />
				)
			)}
		</Container>
	);
}

export default MyFollowList;
