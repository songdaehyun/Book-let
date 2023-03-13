import styled from "styled-components";

export const PrimaryLargeBtn = styled.button`
	width: 100%;

	margin-top: ${(props) => props.marginTop}px;
	margin-bottom: ${(props) => props.marginBottom}px;
	padding: 12px 24px;

	justify-content: center;
	align-items: center;

	background-color: var(--primary-600);
	color: white;
	font-weight: bold;

	border-radius: 4px;
	border: none;

	:active {
		background-color: var(--primary-700);
	}
`;

export const TextBtn = styled.button`
	font-size: ${(props) => props.size}px;
	color: var(--gray-500);

	border: none;
	background: none;
`;
