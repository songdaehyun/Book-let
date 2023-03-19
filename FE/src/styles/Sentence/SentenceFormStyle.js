import styled from "styled-components";

export const SentenceTextareaBox = styled.div`
	width: 100%;

	position: relative;

	background-color: ${(props) => props.color};
	border-radius: 8px;

	::after {
		display: block;
		content: "";
		padding-bottom: 100%;
	}

	textarea {
		width: 100%;
		height: 100%;

		padding: 24px;

		position: absolute;

		border: none;
		resize: none;
		outline: none;

		background-color: transparent;

		color: ${(props) => props.color !== "#FEEB60" && "white"};

		::placeholder {
			color: ${(props) => (props.color !== "#FEEB60" ? "white" : "var(--gray-600)")};
		}
	}
`;

export const SentenceColorRadioButtonGroupBox = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const WordCountTextBox = styled.div`
	display: flex;
	justify-content: flex-end;
`;

export const PageInputBox = styled.div`
	display: flex;
	align-items: center;
`;
