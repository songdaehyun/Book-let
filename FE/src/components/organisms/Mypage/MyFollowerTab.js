import React from "react";

import MyFollowList from "./MyFollowList";

function MyFollowerTab(props) {
	const users = [
		{
			userId: 1,
			nickname: "뚱이",
			userImage: "https://avatars.githubusercontent.com/u/51085309?v=4",
		},
		{
			userId: 2,
			nickname: "뚱이",
			userImage: "https://avatars.githubusercontent.com/u/51085309?v=4",
		},
		{
			userId: 3,
			nickname: "뚱이",
			userImage: "https://avatars.githubusercontent.com/u/51085309?v=4",
		},
	];

	return (
		<div>
			<MyFollowList users={users} type="follower"/>
		</div>
	);
}

export default MyFollowerTab;
