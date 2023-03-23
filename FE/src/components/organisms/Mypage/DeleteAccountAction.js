import React, { useState } from "react";
import { DeleteAccountBtn } from "../../../styles/common/ButtonsStyle";
import { Text } from "../../../styles/common/TextsStyle";
import { DeleteAccounBottomBox, DeleteAccountCheckBox } from "../../../styles/Mypage/MypageStyle";
import Check from "../../atoms/Icon/CricleCheck";

function DeleteAccountAction(props) {
	const [isChecked, setIsChecked] = useState(false);

	const handleClickCheck = () => {
		setIsChecked(!isChecked);
	};

	const handleClickButton = () => {
		if (isChecked) {
			//
		}
	};

	return (
		<DeleteAccounBottomBox>
			<DeleteAccountCheckBox isChecked={isChecked}>
				<div onClick={handleClickCheck}>
					<Check />
				</div>
				<Text onClick={handleClickCheck}>
					유의사항을 모두 확인했으며, 이에 동의합니다.{" "}
				</Text>
			</DeleteAccountCheckBox>
			<DeleteAccountBtn onClick={handleClickButton} isChecked={isChecked}>
				탈퇴하기
			</DeleteAccountBtn>
		</DeleteAccounBottomBox>
	);
}

export default DeleteAccountAction;
