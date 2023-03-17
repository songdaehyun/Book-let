import React from "react";

import { TopBannerContainer } from "../../../styles/common/BannerStyle";
import { Text } from "../../../styles/common/TextsStyle";

function TopBanner({ title, subTitle, img }) {
	return (
		<TopBannerContainer>
			<div>
				<Text size="20" color="var(--primary-600)" weight="bold" marginBottom="16">
					{title}
				</Text>
				<Text size="12" color="var(--gray-500)">
					{subTitle}
				</Text>
			</div>
			<div>
				<img src={img} />
			</div>
		</TopBannerContainer>
	);
}

export default TopBanner;
