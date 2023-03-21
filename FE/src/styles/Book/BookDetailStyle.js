import styled from "styled-components";

export const BookDetailOverviewBox = styled.div`
	padding-top: 51px;

	display: flex;
	flex-direction: column;

	> img {
		width: 40%;
		align-self: center;

		margin-top: 16px;
		margin-bottom: 40px;

		filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.25));
		border-radius: 0px;
	}
`;

export const InputRatingSectionBox = styled.div`
	margin-top: 8px;
	margin-bottom: 24px;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const RatingBox = styled.div`
	column-gap: ${props => props.gap};
	display: flex;
`;
