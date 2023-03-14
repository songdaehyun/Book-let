import React from "react";

import ActionsNavigationBar from "../../components/common/ActionsNavigationBar";

import { Text } from "../../styles/common/TextsStyle";
import {
	JoinAgeContainer,
	GendersContainer,
	GenderContainer,
	GenderImgWrapper,
} from "../../styles/User/JoinStyle";

import maleImg from "../../assets/images/gender_male_img.svg";
import femaleImg from "../../assets/images/gender_female_img.svg";

function JoinAge(props) {
	return (
		<>
			<ActionsNavigationBar pre="취소" title="회원가입" next="다음" />
			<JoinAgeContainer paddingTop="56" paddingLeft="16" paddingRight="16">
				<Text size="20" weight="bold" marginBottom="16">
					성별을 선택해주세요
				</Text>
				<Text size="14" color="var(--gray-500)">
					도서와 문장 추천에 사용될거예요.
				</Text>
				<GendersContainer>
					<GenderContainer>
						<GenderImgWrapper>
							<img src={maleImg} alt="male image" />
						</GenderImgWrapper>
						<Text marginTop="16">남성</Text>
					</GenderContainer>
					<GenderContainer>
						<GenderImgWrapper>
							<img src={femaleImg} alt="female image" />
						</GenderImgWrapper>
						<Text marginTop="16">여성</Text>
					</GenderContainer>
				</GendersContainer>
			</JoinAgeContainer>
		</>
	);
}

export default JoinAge;
