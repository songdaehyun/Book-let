import React, { useState } from "react";

import ReturnNavigationBar from "../../molecules/Bar/ReturnNavigationBar";
import FollowTab from "../../molecules/Tab/FollowTab";

import { Container } from "../../../styles/common/ContainingsStyle";
import MyFollowingTab from "../../organisms/Mypage/MyFollowingTab";
import MyFollowerTab from "../../organisms/Mypage/MyFollowerTab";

function MyFollow(props) {
	const [selectedItem, setSelectedItem] = useState(1);

	return (
		<div>
			<ReturnNavigationBar title={selectedItem === 1 ? "팔로잉 목록" : "팔로워 목록"} />
			<Container paddingTop="75" paddingLeft="16" paddingRight="16">
				<FollowTab selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
				{selectedItem === 1 ? <MyFollowingTab /> : <MyFollowerTab />}
			</Container>
		</div>
	);
}

export default MyFollow;
