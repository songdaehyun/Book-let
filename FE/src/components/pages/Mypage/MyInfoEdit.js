import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateMyInfo } from "../../../apis/authApi";
import { setEmail, setId, setNickname } from "../../../reducer/join";
import { Container } from "../../../styles/common/ContainingsStyle";
import UploadProfileImage from "../../atoms/Mypage/UploadProfileImage";
import ActionsNavigationBar from "../../molecules/Bar/ActionsNavigationBar";
import JoinBasicForm from "../../organisms/Join/JoinBasicForm";

function MyInfoEdit(props) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const allValidRef = useRef();

	const uId = localStorage.getItem("userId");

	useEffect(() => {
		dispatch(setId(uId));
		(async () => {
			await updateMyInfo(uId).then((res) => {
				dispatch(setNickname(res.nickname));
				dispatch(setEmail(res.email));
			});
		})();
	}, []);

	const handleClickPre = () => {
		navigate("/mypage");
	};

	const handleClickNext = () => {
		if (allValidRef.current.allConfirmTest()) {
			navigate("/mypage");
		}
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
				<JoinBasicForm ref={allValidRef} />
			</Container>
		</>
	);
}

export default MyInfoEdit;
