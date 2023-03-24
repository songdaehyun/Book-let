import React from "react";

import { TopBannerContainer } from "../../../styles/common/BannerStyle";
import { Text } from "../../../styles/common/TextsStyle";

function TopBanner({ title, subTitle, img }) {
	return (
		<TopBannerContainer>
			<div>
				<Text size="20" weight="bold" marginBottom="16" height="28">
					{title}
				</Text>
				<Text size="14" color="var(--gray-500)" height="20">
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
