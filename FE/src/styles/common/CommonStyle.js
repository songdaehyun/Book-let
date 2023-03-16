import styled from "styled-components";

export const ValidLabel = styled.div`
	margin-right: 12px;

	display: flex;
	align-items: center;

	svg {
		width: 12px;
		height: 12px;

		margin-right: 4px;

		fill: ${(props) =>
			props.state === "success"
				? "var(--primary-600)"
				: props.state === "fail"
				? "var(--red)"
				: "var(--gray-500)"};
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

export const ArrowButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-content: center;
	flex-wrap: wrap;

	margin-bottom: ${(props) => props.bottom}px;

	> svg {
		align-self: center;
	}
`;
