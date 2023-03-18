import styled from "styled-components";

export const PrimaryLargeBtn = styled.button`
	width: 100%;

	margin-top: ${(props) => props.marginTop}px;
	margin-bottom: ${(props) => props.marginBottom}px;
	padding: 12px 24px;

	justify-content: center;
	align-items: center;

	background-color: var(--primary-600);
	color: white;
	font-weight: bold;

	border-radius: 4px;
	border: none;

	:active {
		background-color: var(--primary-700);
	}
`;

export const PrimarySmBtn = styled.button`
	height: fit-content;

	margin-top: ${(props) => props.marginTop}px;
	margin-bottom: ${(props) => props.marginBottom}px;
	padding: 8px 16px;

	justify-content: center;
	align-items: center;

	background-color: var(--primary-600);
	color: white;
	font-weight: bold;

	border-radius: 4px;
	border: none;

	:active {
		background-color: var(--primary-700);
	}
`;

export const TextBtn = styled.button`
	font-size: ${(props) => props.size}px;
	color: var(--gray-500);

	border: none;
	background: none;
`;

export const ScrapBtn = styled.svg`
	fill: ${(props) => (props.isScraped ? "var(--primary-600)" : "var(--gray-400)")};
`;

export const FollowBtn = styled(PrimarySmBtn)`
	background-color: ${(props) => (props.isFollowed ? "var(--gray-100)" : "var(--secondary-200)")};
	color: ${(props) => (props.isFollowed ? "black" : "var(--primary-700)")};

	:active {
		background-color: ${(props) =>
			props.isFollowed ? "var(--gray-200)" : "var(--secondary-300)"};
	}
`;

export const CommentUploadBtn = styled.button`
	width: 32px;
	height: 32px;

	margin-left: 16px;

	border: 0.8px solid var(--gray-300);

	display: flex;
	border-radius: 50%;

	justify-content: center;
	align-items: center;

	background-color: white;

	:active {
		background-color: var(--gray-50);
	}
`;
