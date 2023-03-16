import styled from "styled-components";

export const PreviewSlideSentenceContainer = styled.div`
	display: inline-flex;
	column-gap: 16px;
`;

export const SmallSentenceContainer = styled.div`
	width: 160px;
	height: 160px;

	padding: 12px;
	border-radius: 8px;

	background-color: ${(props) => props.color};

	> div {
		overflow: hidden;
        height: 100%;
	}
`;
