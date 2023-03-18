import styled from "styled-components";

export const DetailSentenceContainer = styled.div`
	min-height: 500px;

	display: flex;
	flex-direction: column;

	padding: 0 40px;
	padding-top: 75px;
	padding-bottom: 16px;

	justify-content: space-between;

	background-color: ${(props) => props.color};
	color: ${(props) => props.color !== "#FEEB60" && "white"};
`;

export const DetailSentenceBottomInfo = styled.div`
	hr {
		margin: 16px 0;
		border: 0;
		height: 0.5px;
		background-color: ${(props) => props.color !== "#FEEB60" && "white"};
	}

	img {
		height: 58px;
		margin-right: 16px;
	}
`;

export const DetailSentenceBottomInfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;

	> div:first-child {
		display: flex;
	}

	> div:last-child {
		margin-top: auto;
	}
`;
