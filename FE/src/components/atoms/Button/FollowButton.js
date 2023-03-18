import React from "react";
import { FollowBtn } from "../../../styles/common/ButtonsStyle";

function FollowButton({ isFollowed, setIsFollowed }) {
	const handleClickFollow = () => {
        setIsFollowed(!isFollowed);
	};

	return (
		<FollowBtn onClick={handleClickFollow} isFollowed={isFollowed}>
			{isFollowed ? <>언팔로우</> : <>팔로우</>}
		</FollowBtn>
	);
}

export default FollowButton;
