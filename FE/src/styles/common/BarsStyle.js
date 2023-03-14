import styled from "styled-components";

export const ActionsNavigationBarWrapper = styled.div`
	width: 100%;
	height: 56px;

	padding: 16px;

	display: flex;
	justify-content: center;
	position: fixed;
	text-align: center;

	background-color: white;

	z-index: 50;

	> button {
		border: none;
		background: none;
	}

	> button:first-child {
		margin-right: auto;
		float: left;
	}

	> span {
		line-height: 24px;
	}

	> button:last-child {
		margin-left: auto;
		float: right;

		color: ${(props) => (props.nextColor ? props.nextColor : "var(--primary-600)")};

		font-weight: bold;
	}
`;
