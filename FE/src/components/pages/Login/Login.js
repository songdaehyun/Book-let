import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { PrimaryLargeBtn, TextBtn } from "../../../styles/common/ButtonsStyle";
import { Container, ValidWrapper } from "../../../styles/common/ContainingsStyle";
import { DefaultInput } from "../../../styles/common/InputsStyle";
import { ValidFailText } from "../../../styles/common/TextsStyle";
import { ImgWrapper, TextBtnWrapper } from "../../../styles/User/LoginStyle";

import { login } from "../../../apis/authApi";
import loginImg from "../../../assets/images/login-img.svg";

function Login() {
	const navigate = useNavigate();

	const [id, setId] = useState("");
	const [pw, setPw] = useState("");

	const [isIdConfirm, setIsIdConfirm] = useState(true);
	const [isPwConfirm, setIsPwConfirm] = useState(true);

	const hadleChangeId = (e) => {
		setId(e.target.value);
	};

	const hadleChangePw = (e) => {
		setPw(e.target.value);
	};

	const idValidTest = (e) => {
		if (id === "") {
			setIsIdConfirm(false);
		} else {
			setIsIdConfirm(true);
		}
	};

	const pwValidTest = (e) => {
		if (pw === "") {
			setIsPwConfirm(false);
		} else {
			setIsPwConfirm(true);
		}
	};

	const handleClickLogin = () => {
		console.log(id, pw);

		if (id !== "" && pw !== "") {
			(async () => {
				await login({
					username: id,
					password: pw,
				}).then((res) => {
					if (res.status === 201) {
						// 로그인 토큰 저장 
						// localStorage.setItem('refresh-token', res.data['refresh-token']);
						// setCookie('access-token', res.data['access-token']);
						// setCookie('uId', res.data.username);
						// setCookie('nickname', res.data.nickname);
						navigate("/");
					}
				});
			})();
		} else {
			idValidTest();
			pwValidTest();
		}
	};

	const handleClickJoin = () => {
		navigate("/join/1");
	};

	return (
		<Container paddingLeft="24" paddingRight="24">
			<ImgWrapper>
				<img src={loginImg} alt="이미지" />
			</ImgWrapper>

			<DefaultInput
				placeholder="아이디를 입력해주세요."
				value={id}
				onChange={hadleChangeId}
				onBlur={idValidTest}
				marginTop="56"
			></DefaultInput>
			<>
				{!isIdConfirm && (
					<ValidWrapper>
						<ValidFailText>아이디를 입력해주세요</ValidFailText>
					</ValidWrapper>
				)}
			</>
			<DefaultInput
				placeholder="비밀번호를 입력해주세요."
				value={pw}
				onChange={hadleChangePw}
				onBlur={pwValidTest}
				marginTop="8"
			></DefaultInput>
			<>
				{!isPwConfirm && (
					<ValidWrapper>
						<ValidFailText>비밀번호를 입력해주세요</ValidFailText>
					</ValidWrapper>
				)}
			</>
			<PrimaryLargeBtn onClick={handleClickLogin} marginTop="16" marginBottom="16">
				로그인
			</PrimaryLargeBtn>
			<TextBtnWrapper>
				<TextBtn onClick={handleClickJoin} size="14">
					회원가입
				</TextBtn>
			</TextBtnWrapper>
		</Container>
	);
}

export default Login;
