import React from "react";
import { postFollow } from "../../../apis/userApi";
import { FollowBtn } from "../../../styles/common/ButtonsStyle";

function FollowButton({ nickname, isFollowed, setIsFollowed }) {
	const uName = localStorage.getItem("userName");

	const handleClickFollow = () => {
		const data = {
			username: uName,
			followingUsername: nickname,
		};

		(async () => {
			await postFollow(data).then((res) => {
				if (res === "success") {
					setIsFollowed(!isFollowed);
				}
			});
		})();
	};

	return (
		<FollowBtn onClick={handleClickFollow} isFollowed={isFollowed}>
			{isFollowed ? <>언팔로우</> : <>팔로우</>}
		</FollowBtn>
	);
}

export default FollowButton;
