import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ActionsNavigationBar from "../../components/common/ActionsNavigationBar";
import JoinProgressBar from "../../components/user/JoinProgressBar";

import { Text, ValidFailText } from "../../styles/common/TextsStyle";
import {
	JoinFullHeightContainer,
	JoinCenterContainer,
	AgeInput,
} from "../../styles/User/JoinStyle";

function JoinAge(props) {
	const navigate = useNavigate();

	const [age, setAge] = useState("");
	const [isAgeValidConfirmed, setIsAgeValidConfirmed] = useState(true);

	const handleChangeAge = (e) => {
		const onlyNumber = e.target.value.replace(/[^0-9]/g, "");
		setAge(onlyNumber);
	};

	const ageValidTest = () => {
		if (age === "") {
			setIsAgeValidConfirmed(false);

			return false;
		} else {
			setIsAgeValidConfirmed(true);

			return true;
		}
	};

	const handleClickPre = () => {
		navigate("/join/2");
	};

	const handleClickNext = () => {
		if (ageValidTest()) {
			navigate("/join/4");
		}
	};

	return (
		<>
			<ActionsNavigationBar
				pre="취소"
				title="회원가입"
				next="다음"
				handleClickPre={handleClickPre}
				handleClickNext={handleClickNext}
			/>
			<JoinFullHeightContainer>
				<JoinProgressBar step="3" />
				<Text size="20" weight="bold" marginBottom="16">
					나이를 입력해주세요
				</Text>
				<Text size="14" color="var(--gray-500)" marginBottom="4">
					도서와 문장 추천에 사용될거예요.
				</Text>
				{!isAgeValidConfirmed && <ValidFailText>나이를 입력해주세요</ValidFailText>}
				<JoinCenterContainer>
					<AgeInput
						placeholder="나이"
						value={age}
						onChange={handleChangeAge}
						size="1"
						maxLength={3}
					/>
				</JoinCenterContainer>
			</JoinFullHeightContainer>
		</>
	);
}

export default JoinAge;
