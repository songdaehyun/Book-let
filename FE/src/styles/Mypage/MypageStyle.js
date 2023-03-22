import styled from "styled-components";

export const FollowLabelsBox = styled.div`
	display: flex;
	gap: 16px;
`;

export const FollowLabelBox = styled.div`
	width: fit-content;

	padding: 4px 8px;

	display: flex;
	justify-content: space-between;

	background: #dcfddc;
	border-radius: 4px;
`;

export const MyReviewPreveiwCardGroupBox = styled.div`
	display: flex;
	gap: 24px;
`;

export const MyReviewPreviewCardBox = styled.div`
	width: 80%;
	height: 240px;

	padding: 16px;
	padding-bottom: 8px;

	display: flex;
	flex-direction: column;

	background: #ffffff;
	box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.15);
	border-radius: 8px;

	img {
		width: auto;
		height: 64px;

		margin-right: 16px;

		filter: drop-shadow(0px 0px 8px rgba(0, 0, 0, 0.15));
		border-radius: 0px 5px 5px 0px;
	}
`;

export const MyReviewPreviewBookInfoBox = styled.div`
	display: flex;

	> div {
		display: flex;
		flex-direction: column;
	}

	> div > div:last-child {
		margin-top: auto;
	}
`;

export const MyReviewPreviewReviewInfoBox = styled.div`
	display: flex;
    flex: 1;
	flex-direction: column;
	justify-content: space-between;

	> div:last-child {
		margin-top: auto;

		display: flex;
		float: right;
		justify-content: flex-end;
		align-items: flex-end;
	}
`;
