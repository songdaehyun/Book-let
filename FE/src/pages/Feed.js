import React, { useState } from "react";
import FeedExplore from "../components/feed/FeedExploreTab";
import FeedMyTab from "../components/feed/FeedMyTab";

import FeedTab from "../components/feed/FeedTab";

import { Container } from "../styles/common/ContainingsStyle";
import { Text } from "../styles/common/TextsStyle";

function Feed(props) {
	const [selectedItem, setSelectedItem] = useState(1);
	return (
		<Container paddingTop="24" paddingLeft="16" paddingRight="16">
			<Text size="24" weight="bold" marginBottom="24">
				Feed
			</Text>
			<FeedTab selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
			{selectedItem === 1 ? <FeedMyTab /> : <FeedExplore />}
		</Container>
	);
}

export default Feed;
