import styled from "styled-components";

export const JoinFullHeightContainer = styled.div`
	height: 100vh;

	display: flex;
	flex-direction: column;

	padding: 0 16px;

	padding-top: 56px;
`;

export const JoinCenterContainer = styled.div`
	display: flex;

	flex: 1;
	flex-direction: column;
	justify-content: center;
	align-self: center;
`;
export const GenderContainer = styled.div`
	text-align: center;

	margin-bottom: 42px;
`;

export const GenderImgWrapper = styled.div`
	width: 120px;
	height: 120px;

	margin: auto;
	padding: 16px;

	display: flex;
	justify-content: center;

	background: ${(props) => (props.isSelected ? " var(--primary-500)" : "var(--gray-50)")};

	border: ${(props) => (props.isSelected ? "3" : "0.8")}px solid
		${(props) => (props.isSelected ? " var(--primary-700)" : "var(--gray-300)")};
	border-radius: 50%;

	:active {
		background: var(--gray-100);
	}
`;

export const AgeInput = styled.input`
	padding: 8px 24px;

	text-align: center;

	font-size: 40px;

	border: none;
	border-bottom: 1px solid var(--gray-400);

	outline: none;

	:focus {
		border-bottom: 1px solid black;
	}

	::placeholder {
		color: var(--gray-400);
	}
`;
