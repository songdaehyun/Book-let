import React from "react";

import { Container } from "../../styles/common/CommonStyle";
import { DefaultInput } from "../../styles/common/InputsStyle";
import { PrimaryLargeBtn, TextBtn } from "../../styles/common/ButtonsStyle";
import { ImgWrapper, TextBtnWrapper } from "../../styles/common/User/LoginStyle";

import loginImg from "../../assets/images/login-img.svg";

function Login(props) {
	return (
		<Container paddingLeft="24" paddingRight="24">
			<ImgWrapper>
				<img src={loginImg} alt="이미지" />
			</ImgWrapper>

			<DefaultInput
				marginTop="56"
				marginBottom="8"
				placeholder="아이디를 입력해주세요."
			></DefaultInput>
			<DefaultInput placeholder="비밀번호를 입력해주세요."></DefaultInput>
			<PrimaryLargeBtn marginTop="16" marginBottom="16">
				로그인
			</PrimaryLargeBtn>
			<TextBtnWrapper>
				<TextBtn size="14">회원가입</TextBtn>
			</TextBtnWrapper>
		</Container>
	);
}

export default Login;
