import styled from "styled-components";

export const BookHeadingBox = styled.div`
	display: flex;

	align-items: center;
	justify-content: space-between;

	img {
		width: 16px;
		height: 16px;
	}
`;

export const BookCoverMasonryBox = styled.div`
	column-count: 2;
	column-gap: 8px;

	> div:last-child {
		align-items: center;
		display: grid;
		min-height: 100px;
	}
`;
