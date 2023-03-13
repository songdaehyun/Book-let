import styled from "styled-components";

export const ValidLabel = styled.div`
	margin-right: 12px;

	display: flex;
	align-items: center;

	img {
		width: 12px;
		height: 12px;

		margin-right: 4px;
	}

	span {
		font-size: 12px;
		color: ${(props) =>
			props.state === "success"
				? "var(--primary-600)"
				: props.state === "fail"
				? "var(--red)"
				: "var(--gray-500)"};
	}
`;
