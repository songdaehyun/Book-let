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

export const PreviewBookCoverMasonryBox = styled.div`
	column-count: 2;
	column-gap: 16px;

	> div:last-child {
		align-items: center;
		display: grid;
		min-height: 100px;
	}
`;

export const ListBookCoverMasonryBox = styled.div`
	column-count: 2;
	column-gap: 16px;

	margin: 24px 0;
	padding: 0 16px;
`;

export const PreviewBookMasonryOverviewBox = styled.div`
	display: inline-flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 16px;
	// overflow: hidden;

	img {
		width: 100%;
		height: 100%;

		margin-bottom: 16px;

		object-fit: cover;
		filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.2));
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
