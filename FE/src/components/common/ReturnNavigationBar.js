import React from "react";

import { ReturnNavigationBarContainer } from "../../styles/common/BarsStyle";
import { Text } from "../../styles/common/TextsStyle";

import ArrowIcon from "../../assets/icons/left-arrow-icon.png";

function ReturnNavigationBar({ title }) {
	return (
		<ReturnNavigationBarContainer>
			<div>
				<img src={ArrowIcon} />
			</div>
			<Text>{title}</Text>
		</ReturnNavigationBarContainer>
	);
}

export default ReturnNavigationBar;
