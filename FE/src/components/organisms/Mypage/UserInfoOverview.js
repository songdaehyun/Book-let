import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyInfo } from "../../../apis/userApi";

import { Container } from "../../../styles/common/ContainingsStyle";
import { Text } from "../../../styles/common/TextsStyle";
import { FollowLabelsBox } from "../../../styles/Mypage/MypageStyle";
import FollowLabel from "../../atoms/Mypage/FollowLabel";
import UserProfileImage from "../../atoms/UserProfileImage";

function UserInfoOverview(props) {
	const navigate = useNavigate();

	const [user, setUser] = useState();

	useEffect(() => {
		(async () => {
			await getMyInfo().then((res) => {
				setUser(res);
			});
		})();
	}, []);

	// const user = {
	// 	imgPath:
	// 		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShQWztVKOhIT1WX5TmfhJCviOe1QTXIj_vOA&usqp=CAU",
	// 	nickname: "만두킬러",
	// 	follower: 15,
	// 	following: 31,
	// };

	const handleClickFollowLabel = () => {
		navigate("follow");
	};

	return (
		<>
			<Container paddingTop="56" paddingBottom="32" paddingLeft="16" paddingRight="16">
				<UserProfileImage img={user.imgPath} size="lg" />
				<Text weight="bold" marginTop="24" marginBottom="16">
					{user.nickname}
				</Text>
				<FollowLabelsBox>
					<div onClick={handleClickFollowLabel}>
						<FollowLabel label="팔로잉" count={user.following} />
					</div>
					<div onClick={handleClickFollowLabel}>
						<FollowLabel label="팔로워" count={user.follower} />
					</div>
				</FollowLabelsBox>
			</Container>
		</>
	);
}

export default UserInfoOverview;
