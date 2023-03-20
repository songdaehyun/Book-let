import styled from "styled-components";

export const PreviewSwiperBookBox = styled.div`
	display: flex;

	column-gap: 16px;
	margin-top: 24px;

	align-items: flex-end;
`;

export const PreviewBookOverviewBox = styled.div`
	width: 30%;

	img {
		width: 100%;
		height: auto;

		margin-bottom: 16px;

		filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));
		border-radius: 0px 5px 5px 0px;
	}
`;

export const BookCoverMoreBox = styled.div`
	box-sizing: border-box;

	font-weight: bold;
	color: var(--primary-600);
	background-color: 1px solid var(--secondary-100);
	border: 1px solid var(--primary-600);
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

	text-align: center;
`;
