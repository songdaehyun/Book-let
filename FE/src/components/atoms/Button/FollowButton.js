import React from "react";
import { postFollow } from "../../../apis/userApi";
import { FollowBtn } from "../../../styles/common/ButtonsStyle";

function FollowButton({ uId, isFollowed, setIsFollowed }) {
	const handleClickFollow = () => {
		(async () => {
			await postFollow(uId).then((res) => {
				setIsFollowed(!isFollowed);
			})();
		})();
	};

	return (
		<FollowBtn onClick={handleClickFollow} isFollowed={isFollowed}>
			{isFollowed ? <>언팔로우</> : <>팔로우</>}
		</FollowBtn>
	);
}

export default FollowButton;
