import React from "react";

import { TabItem, TabWrapper } from "../../../styles/Sentence/FeedTabStyle";

function FollowTab({ selectedItem, setSelectedItem }) {
	const handleClickItem = (item) => {
		setSelectedItem(item);
	};

	const followingCount = 10;
	const followerCount = 15;

	return (
		<TabWrapper>
			<TabItem
				onClick={() => handleClickItem(1)}
				isSelected={selectedItem === 1 ? true : false}
			>
				팔로잉 {followingCount}
			</TabItem>
			<TabItem
				onClick={() => handleClickItem(2)}
				isSelected={selectedItem === 2 ? true : false}
			>
				팔로워 {followerCount}
			</TabItem>
		</TabWrapper>
	);
}

export default FollowTab;
