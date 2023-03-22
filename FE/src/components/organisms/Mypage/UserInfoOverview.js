import React from "react";

import { Container } from "../../../styles/common/ContainingsStyle";
import { Text } from "../../../styles/common/TextsStyle";
import { FollowLabelsBox } from "../../../styles/Mypage/MypageStyle";
import FollowLabel from "../../atoms/Mypage/FollowLabel";

function UserInfoOverview(props) {
	const user = {
		img_path:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShQWztVKOhIT1WX5TmfhJCviOe1QTXIj_vOA&usqp=CAU",
		nickname: "만두킬러",
		follower: 15,
		following: 31,
	};

	return (
		<>
			<Container paddingTop="56" paddingBottom="32" paddingLeft="16" paddingRight="16">
				<Text weight="bold" marginBottom="16">{user.nickname}</Text>
				<FollowLabelsBox>
					<FollowLabel label="팔로잉" count={user.following} />
					<FollowLabel label="팔로워" count={user.follower} />
				</FollowLabelsBox>
			</Container>
		</>
	);
}

export default UserInfoOverview;
