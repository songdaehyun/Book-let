import React from "react";

import RightArrow from "./RightArrow";

import { ArrowButtonContainer } from "../../styles/common/CommonStyle";
import { Text } from "../../styles/common/TextsStyle";
import { useNavigate } from "react-router-dom";

function ArrowButton({ title, path }) {
	const navigate = useNavigate();

	const handleClickButton = () => {
		navigate(path);
	};

	return (
		<ArrowButtonContainer onClick={handleClickButton} bottom="16">
			<Text size="19" weight="bold">
				{title}
			</Text>
			<RightArrow />
		</ArrowButtonContainer>
	);
}

export default ArrowButton;
