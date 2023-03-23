import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../../../styles/common/ContainingsStyle";
import UploadProfileImage from "../../atoms/Mypage/UploadProfileImage";
import ActionsNavigationBar from "../../molecules/Bar/ActionsNavigationBar";
import JoinBasicForm from "../../organisms/Join/JoinBasicForm";

function MyInfoEdit(props) {
	const navigate = useNavigate();

	const handleClickPre = () => {
		navigate("/mypage");
	};

	const handleClickNext = () => {
		// if (
		// 	idValidTest() &&
		// 	nicknameValidTest() &&
		// 	emailValidTest() &&
		// 	pwValidTest() &&
		// 	pwConfirmValidTest()
		// ) {
		navigate("/mypage");
		// }
	};

	return (
		<>
			<ActionsNavigationBar
				pre="취소"
				title="회원 정보 수정"
				next="확인"
				handleClickPre={handleClickPre}
				handleClickNext={handleClickNext}
			/>
			<Container paddingTop="86" paddingLeft="16" paddingRight="16">
				<UploadProfileImage />
				<JoinBasicForm />
			</Container>
		</>
	);
}

export default MyInfoEdit;
