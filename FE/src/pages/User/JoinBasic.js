import React, { useState } from "react";

import CricleCheck from "../../components/common/CricleCheck";

import { ValidLabel } from "../../styles/common/CommonStyle";
import { Container, ValidLabelContainer } from "../../styles/common/ContainingsStyle";
import { ActionsNavigationBar } from "../../styles/common/BarsStyle";
import { Text, Label } from "../../styles/common/TextsStyle";
import { DefaultInput } from "../../styles/common/InputsStyle";

function JoinBasic() {
	// 아이디
	const [id, setId] = useState("");
	const [idCntValid, setIdCntValid] = useState("default");
	const [idIncludeValid, setIdIncludeValid] = useState("default");
	const [idDuplicationValid, setIdDuplicationValid] = useState("default");

	// 닉네임
	const [nickname, setNickname] = useState("");
	const [nicknameCntValid, setNicknameCntValid] = useState("default");
	const [nicknameDuplicationValid, setNicknameDuplicationValid] = useState("default");

	// 이메일
	const [email, setEmail] = useState("");
	const [emailFormValid, setEmailFormValid] = useState("default");
	const [emailDuplicationValid, setEmailDuplicationValid] = useState("default");

	// 비밀번호
	const [pw, setPw] = useState("");
	const [pwCntValid, setPwCntValid] = useState("default");
	const [pwIncludeValid, setPwIncludeValid] = useState("default");

	// 비밀번호 확인
	const [pwConfirm, setPwConfirm] = useState("");
	const [pwSameValid, setPwSameValid] = useState("default");

	const hadleChangeId = (e) => {
		setId(e.target.value);
	};
	const hadleChangeNickname = (e) => {
		setNickname(e.target.value);
	};
	const hadleChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const hadleChangePw = (e) => {
		setPw(e.target.value);
	};
	const hadleChangePwConfirm = (e) => {
		setPwConfirm(e.target.value);
	};

	// 유효성 검사
	const idValidTest = (e) => {
		var regId = /[a-zA-Z]/g;

		if (0 < id.length && id.length <= 12) {
			console.log(id.length);
			setIdCntValid("success");
		} else {
			setIdCntValid("fail");
		}
		if (regId.test(id)) {
			setIdIncludeValid("success");
		} else {
			setIdIncludeValid("fail");
		}

		if (true) {
			setIdDuplicationValid("success");
		}
	};

	const nicknameValidTest = (e) => {
		if (0 < nickname.length && nickname.length <= 12) {
			setNicknameCntValid("success");
		} else {
			setNicknameCntValid("fail");
		}

		if (true) {
			setNicknameDuplicationValid("success");
		}
	};

	const emailValidTest = (e) => {
		var regEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

		if (regEmail.test(email)) {
			setEmailFormValid("success");
		} else {
			setEmailFormValid("fail");
		}

		if (true) {
			setEmailDuplicationValid("success");
		}
	};

	const pwValidTest = (e) => {
		var regPw = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

		if (8 <= pw.length && pw.length <= 16) {
			setPwCntValid("success");
		} else {
			setPwCntValid("fail");
		}

		if (regPw.test(pw)) {
			setPwIncludeValid("success");
		} else {
			setPwIncludeValid("fail");
		}
	};

	const pwConfirmValidTest = (e) => {
		if (pw === pwConfirm) {
			setPwSameValid("success");
		} else {
			setPwSameValid("fail");
		}
	};

	return (
		<>
			<ActionsNavigationBar>
				<button>취소</button>
				<span>회원가입</span>
				<button>다음</button>
			</ActionsNavigationBar>
			<Container paddingTop="56" paddingLeft="16" paddingRight="16">
				<Text size="20" weight="bold">
					기본 정보를 입력해주세요
				</Text>
				<div>
					<Container marginTop="32" marginBottom="24">
						<Label size="14" weight="600">
							아이디
							<DefaultInput
								placeholder="아이디를 입력해주세요"
								value={id}
								onChange={hadleChangeId}
								onBlur={idValidTest}
								marginTop="8"
								marginBottom="8"
							></DefaultInput>
						</Label>
						<ValidLabelContainer>
							<ValidLabel state={idCntValid}>
								<CricleCheck />
								<span>12자 이내</span>
							</ValidLabel>
							<ValidLabel state={idIncludeValid}>
								<CricleCheck />
								<span>영문 포함</span>
							</ValidLabel>
							<ValidLabel state={idDuplicationValid}>
								<CricleCheck />
								<span>중복 확인</span>
							</ValidLabel>
						</ValidLabelContainer>
					</Container>

					<Container marginTop="32" marginBottom="24">
						<Label size="14" weight="600">
							닉네임
							<DefaultInput
								placeholder="닉네임을 입력해주세요"
								value={nickname}
								onChange={hadleChangeNickname}
								onBlur={nicknameValidTest}
								marginTop="8"
								marginBottom="8"
							></DefaultInput>
						</Label>
						<ValidLabelContainer>
							<ValidLabel state={nicknameCntValid}>
								<CricleCheck />
								<span>12자 이내</span>
							</ValidLabel>
							<ValidLabel state={nicknameDuplicationValid}>
								<CricleCheck />
								<span>중복 확인</span>
							</ValidLabel>
						</ValidLabelContainer>
					</Container>

					<Container marginTop="32" marginBottom="24">
						<Label size="14" weight="600">
							이메일
							<DefaultInput
								placeholder="이메일을 입력해주세요"
								value={email}
								onChange={hadleChangeEmail}
								onBlur={emailValidTest}
								marginTop="8"
								marginBottom="8"
							></DefaultInput>
						</Label>
						<ValidLabelContainer>
							<ValidLabel state={emailFormValid}>
								<CricleCheck />
								<span>이메일 형식</span>
							</ValidLabel>
							<ValidLabel state={emailDuplicationValid}>
								<CricleCheck />
								<span>중복 확인</span>
							</ValidLabel>
						</ValidLabelContainer>
					</Container>

					<Container marginTop="32" marginBottom="24">
						<Label size="14" weight="600">
							비밀번호
							<DefaultInput
								type="password"
								placeholder="비밀번호를 입력해주세요"
								value={pw}
								onChange={hadleChangePw}
								onBlur={pwValidTest}
								marginTop="8"
								marginBottom="8"
							></DefaultInput>
						</Label>
						<ValidLabelContainer>
							<ValidLabel state={pwCntValid}>
								<CricleCheck />
								<span>8-16자 이내</span>
							</ValidLabel>
							<ValidLabel state={pwIncludeValid}>
								<CricleCheck />
								<span>특수문자 포함</span>
							</ValidLabel>
						</ValidLabelContainer>
					</Container>

					<Container marginTop="32" marginBottom="24">
						<Label size="14" weight="600">
							비밀번호 확인
							<DefaultInput
								placeholder="비밀번호를 재입력해주세요"
								value={pwConfirm}
								onChange={hadleChangePwConfirm}
								onBlur={pwConfirmValidTest}
								marginTop="8"
								marginBottom="8"
							></DefaultInput>
						</Label>
						<ValidLabelContainer>
							<ValidLabel state={pwSameValid}>
								<CricleCheck />
								<span>비밀번호 일치</span>
							</ValidLabel>
						</ValidLabelContainer>
					</Container>
				</div>
			</Container>
		</>
	);
}

export default JoinBasic;
