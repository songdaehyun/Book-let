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

export const BookListBox = styled.div`
	display: grid;

	margin: 24px 0;
	padding: 0 16px;

	grid-template-columns: 1fr 1fr 1fr;
	column-gap: 16px;
	row-gap: 24px;
`;
