import React from "react";

import { ReturnNavigationBarContainer } from "../../styles/common/BarsStyle";
import { Text } from "../../styles/common/TextsStyle";

import ArrowIcon from "../../assets/icons/left-arrow-icon.png";
import { useNavigate } from "react-router-dom";

function ReturnNavigationBar({ title }) {
	const navigate = useNavigate();

	const handleClickReturn = () => {
		// 이전 페이지로 이동
		navigate(-1);
	};

	return (
		<ReturnNavigationBarContainer>
			<div onClick={handleClickReturn}>
				<img src={ArrowIcon} />
			</div>
			<Text>{title}</Text>
		</ReturnNavigationBarContainer>
	);
}

export default ReturnNavigationBar;
