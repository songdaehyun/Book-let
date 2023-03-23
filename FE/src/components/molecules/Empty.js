import React from "react";
import { useNavigate } from "react-router-dom";
import { PrimarySmBtn } from "../../styles/common/ButtonsStyle";
import { EmptyBox } from "../../styles/common/CommonStyle";
import { Text } from "../../styles/common/TextsStyle";

import EmptyImage from "../atoms/Image/Warning";

function Empty({ title, subTitle, buttonLabel, path }) {
	const navigate = useNavigate();

	const handleClickButton = () => {
		navigate(path);
	};

	return (
		<EmptyBox>
			<EmptyImage />
			<div>
				<Text weight="bold" color="var(--gray-600)" marginBottom="8">
					{title}
				</Text>
				<Text color="var(--gray-500)" height="22">
					{subTitle}
				</Text>
			</div>
			<PrimarySmBtn size="14" onClick={handleClickButton}>
				{buttonLabel}
			</PrimarySmBtn>
		</EmptyBox>
	);
}

export default Empty;
