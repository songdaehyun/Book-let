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

export const ReturnNavigationBarContainer = styled.div`
	width: 100%;

	display: flex;

	// align-items: center;
	// justify-content: center;

	padding: 16px;

	display: flex;
	position: fixed;
	// justify-content: center;
	// text-align: center;

	background-color: white;

	z-index: 50;

	> div:first-child {
		width: auto;
		height: 16px;
	}

	img {
		width: 100%;
		height: 100%;
	}

	> div:last-child {
		margin: auto;
		padding-right: 10px;
	}
`;

export const SeparationBar = styled.div`
	width: 100%;
	height: 8px;

	margin-top: ${(props) => props.top}px;
	margin-bottom: ${(props) => props.bottom}px;

	background-color: var(--gray-100);
`;

export const TabBarBox = styled.div`
	padding-top: 12px;
	padding-bottom: 8px;

	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;

	border-top: 0.5px solid var(--gray-300);
	background-color: white;

	> div {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
`;

export const TabBarItemBox = styled.div`
	svg {
		fill: ${(props) => (props.isSelected ? "var(--primary-600)" : "var(--gray-500)")};
	}

	div:last-child {
		color: ${(props) => (props.isSelected ? "var(--primary-600)" : "var(--gray-500)")};
	}
`;
