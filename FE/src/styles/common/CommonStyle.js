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

export const CommentInputBox = styled.div`
	width: 100%;

	margin-top: ${(props) => props.marginTop}px;
	margin-bottom: ${(props) => props.marginBottom}px;
	padding: 8px 16px;

	display: flex;
	justify-content: space-between;

	background-color: var(--gray-50);

	border: 1px solid var(--gray-200);
	border-radius: 16px;

	:focus {
		outline: 1px solid var(--gray-500);
	}

	> input {
		border: none;
		background-color: transparent;
		outline: none;
		width: 100%;

		::placeholder {
			color: var(--gray-500);
		}
	}
`;

export const CommentBox = styled.div`
	display: flex;

	margin-bottom: 24px;

	img {
		width: 48px;
		height: 48px;

		margin-right: 24px;
	}

	> div:last-child {
		margin-left: auto;
	}
`;
