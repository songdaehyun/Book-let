import styled from "styled-components";

export const PreviewSentenceContainer = styled.div`
	width: 100%;

	position: relative;

	margin-bottom: 16px;

	background-color: ${(props) => props.color};
	color: ${(props) => props.color !== "#FEEB60" && "white"};

	border-radius: 10px;

	&::after {
		content: "";
		display: block;
		padding-bottom: 100%;
	}
`;

export const PreviewSentenceContent = styled.div`
	height: 100%;

	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	padding: 24px;

	// 문장 내용
	> div:nth-child(1) {
		overflow: hidden;
	}
`;

export const PreviewSentenceBottonContent = styled.div`
	display: flex;

	justify-content: space-between;
	margin-top: 32px;

	// 페이지 수
	> div:nth-child(2) {
		display: flex;
		align-items: flex-end;
	}
`;

export const ScrapContainer = styled.div`
	// display: flex;
	align-items: center;

	> div:last-child {
		// position: absolute;
	}
`;

export const ScrapImgContainer = styled.div`
	display: flex;
	margin-right: 8px;
	position: relative;

	>div: nth-child(1) {
		left: 16;
	}

	// 두번째 프사 이미지
	> div:nth-child(2) {
		left: 38px;
	}

	// 세번째 프사 이미지
	> div:nth-child(3) {
		left: 60px;
	}
`;

export const ScrapImgWrapper = styled.div`
	padding: 2px;

	display: flex;
	position: absolute;

	background-color: white;
	box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.15);
	border-radius: 50%;

	transform: translate(-60%, -50%);
	left: 16px;

	> img {
		width: 24px;
		height: 24px;
	}
`;

export const PreviewPostInfo = styled.div`
	display: flex;
	align-items: center;
	// justify-content: space-around;
	justify-content: space-between;
	margin-bottom: 12px;
`;

export const PreviewCommentContainer = styled.div`
	display: flex;

	> img {
		margin-right: 8px;
	}
`;
