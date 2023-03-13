import React, { useState } from "react";

import { ValidLabel } from "../../styles/common/CommonStyle";
import { Container, ValidLabelContainer } from "../../styles/common/ContainingsStyle";
import { ActionsNavigationBar } from "../../styles/common/BarsStyle";
import { Text, Label } from "../../styles/common/TextsStyle";
import { DefaultInput } from "../../styles/common/InputsStyle";

import checkIcon from "../../assets/icons/check-circle-icon.svg";

function JoinBasic() {
	// 아이디
	const [idCntValid, setIdCntValid] = useState("default");

	// 비밀번호 확인
	const [pwSameValid, setPwSameValid] = useState("default");

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
								marginTop="8"
								marginBottom="8"
							></DefaultInput>
						</Label>
						<ValidLabelContainer>
							<ValidLabel state={idCntValid}>
								<img src={checkIcon} />
								<span>12자 이내</span>
							</ValidLabel>
							<ValidLabel state={idCntValid}>
								<img src={checkIcon} />
								<span>영문 포함</span>
							</ValidLabel>
							<ValidLabel state={idCntValid}>
								<img src={checkIcon} />
								<span>중복 확인</span>
							</ValidLabel>
						</ValidLabelContainer>
					</Container>

					<Container marginTop="32" marginBottom="24">
						<Label size="14" weight="600">
							닉네임
							<DefaultInput
								placeholder="닉네임을 입력해주세요"
								marginTop="8"
								marginBottom="8"
							></DefaultInput>
						</Label>
						<ValidLabelContainer>
							<ValidLabel state={idCntValid}>
								<img src={checkIcon} />
								<span>12자 이내</span>
							</ValidLabel>
							<ValidLabel state={idCntValid}>
								<img src={checkIcon} />
								<span>중복 확인</span>
							</ValidLabel>
						</ValidLabelContainer>
					</Container>

					<Container marginTop="32" marginBottom="24">
						<Label size="14" weight="600">
							이메일
							<DefaultInput
								placeholder="이메일을 입력해주세요"
								marginTop="8"
								marginBottom="8"
							></DefaultInput>
						</Label>
						<ValidLabelContainer>
							<ValidLabel state={idCntValid}>
								<img src={checkIcon} />
								<span>이메일 형식</span>
							</ValidLabel>
							<ValidLabel state={idCntValid}>
								<img src={checkIcon} />
								<span>중복 확인</span>
							</ValidLabel>
						</ValidLabelContainer>
					</Container>

					<Container marginTop="32" marginBottom="24">
						<Label size="14" weight="600">
							비밀번호
							<DefaultInput
								placeholder="비밀번호를 입력해주세요"
								marginTop="8"
								marginBottom="8"
							></DefaultInput>
						</Label>
						<ValidLabelContainer>
							<ValidLabel state={idCntValid}>
								<img src={checkIcon} />
								<span>8-16자 이내</span>
							</ValidLabel>
							<ValidLabel state={idCntValid}>
								<img src={checkIcon} />
								<span>특수문자 포함</span>
							</ValidLabel>
						</ValidLabelContainer>
					</Container>

					<Container marginTop="32" marginBottom="24">
						<Label size="14" weight="600">
							비밀번호 확인
							<DefaultInput
								placeholder="비밀번호를 재입력해주세요"
								marginTop="8"
								marginBottom="8"
							></DefaultInput>
						</Label>
						<ValidLabelContainer>
							<ValidLabel state={idCntValid}>
								<img src={checkIcon} />
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
