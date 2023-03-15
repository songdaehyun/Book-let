import React from "react";
import { ScrapBtn } from "../../styles/common/ButtonsStyle";

function ScrapButton({ isScraped }) {
	const handleClickScrap = () => {
		// 백 요청
	};

	return (
		<ScrapBtn
			onClick={handleClickScrap}
			width="19"
			height="24"
			viewBox="0 0 19 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			isScraped={isScraped}
		>
			<path d="M16 0H2.66667C1.2 0 0.0133336 1.2 0.0133336 2.66667L0 24L9.33333 20L18.6667 24V2.66667C18.6667 1.2 17.4667 0 16 0Z" />
		</ScrapBtn>
	);
}

export default ScrapButton;
