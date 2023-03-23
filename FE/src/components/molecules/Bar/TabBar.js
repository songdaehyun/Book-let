import React from "react";
import { TabBarBox, TabBarItemBox } from "../../../styles/common/BarsStyle";

import { Text } from "../../../styles/common/TextsStyle";
import BookIcon from "../../atoms/Icon/TabBar/TabbarBook";
import FeedIcon from "../../atoms/Icon/TabBar/TabbarFeed";
import MyIcon from "../../atoms/Icon/TabBar/TabbarMy";

function TabBar({ selected }) {
	const feedItems = [
		{
			icon: <FeedIcon />,
			label: "피드",
		},
		{
			icon: <BookIcon />,
			label: "도서",
		},
		{
			icon: <MyIcon />,
			label: "My",
		},
	];

	return (
		<TabBarBox>
			{feedItems.map((feedItem, idx) => (
				<TabBarItemBox isSelected={selected === idx + 1 ? true : false}>
					{feedItem.icon}
					<Text size="12" color={selected === idx + 1 ? true : false}>
						{feedItem.label}
					</Text>
				</TabBarItemBox>
			))}
			{/* <div>
				<FeedIcon />
				<Text size="12">피드</Text>
			</div>
			<div>
				<BookIcon />
				<Text size="12">도서</Text>
			</div>
			<div>
				<MyIcon />
				<Text size="12">My</Text>
			</div> */}
		</TabBarBox>
	);
}

export default TabBar;
