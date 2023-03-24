export default function useJoinBasic() {
	// const idValidTest = (id) => {
	// 	var regId = /[a-zA-Z]/g;

	// 	// 아이디 유효성 패스 여부
	// 	let isValidConfirm = true;

	// 	if (0 < id.length && id.length <= 12) {
	// 		setIdCntValid("success");
	// 	} else {
	// 		setIdCntValid("fail");
	// 		isValidConfirm = false;
	// 	}
	// 	if (regId.test(id)) {
	// 		setIdIncludeValid("success");
	// 	} else {
	// 		setIdIncludeValid("fail");
	// 		isValidConfirm = false;
	// 	}

	// 	if (true) {
	// 		setIdDuplicationValid("success");
	// 	}

	// 	return isValidConfirm;
	// };

	// const nicknameValidTest = (e) => {
	// 	// 닉네임 유효성 패스 여부
	// 	let isValidConfirm = true;

	// 	if (0 < nickname.length && nickname.length <= 12) {
	// 		setNicknameCntValid("success");
	// 	} else {
	// 		setNicknameCntValid("fail");
	// 		isValidConfirm = false;
	// 	}

	// 	if (true) {
	// 		setNicknameDuplicationValid("success");
	// 	}

	// 	return isValidConfirm;
	// };

	// const emailValidTest = (e) => {
	// 	var regEmail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

	// 	// 이메일 유효성 패스 여부
	// 	let isValidConfirm = true;

	// 	if (regEmail.test(email)) {
	// 		setEmailFormValid("success");
	// 	} else {
	// 		setEmailFormValid("fail");
	// 		isValidConfirm = false;
	// 	}

	// 	if (true) {
	// 		setEmailDuplicationValid("success");
	// 	}

	// 	return isValidConfirm;
	// };

	// const pwValidTest = (e) => {
	// 	var regPw = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

	// 	// 비밀번호 유효성 패스 여부
	// 	let isValidConfirm = true;

	// 	if (8 <= pw.length && pw.length <= 16) {
	// 		setPwCntValid("success");
	// 	} else {
	// 		setPwCntValid("fail");
	// 		isValidConfirm = false;
	// 	}

	// 	if (regPw.test(pw)) {
	// 		setPwIncludeValid("success");
	// 	} else {
	// 		setPwIncludeValid("fail");
	// 		isValidConfirm = false;
	// 	}

	// 	return isValidConfirm;
	// };

	// const pwConfirmValidTest = (e) => {
	// 	// 비밀번호 확인 유효성 패스 여부
	// 	let isValidConfirm = true;

	// 	if (pw === pwConfirm) {
	// 		setPwSameValid("success");
	// 	} else {
	// 		setPwSameValid("fail");
	// 		isValidConfirm = false;
	// 	}

	// 	return isValidConfirm;
	// };

	// return [idValidTest, nicknameValidTest, emailValidTest, pwValidTest, pwConfirmValidTest];
}
