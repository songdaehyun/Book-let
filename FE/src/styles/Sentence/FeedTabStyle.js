import styled from "styled-components";

export const TabWrapper = styled.div`
	display: flex;
`;

export const TabItem = styled.div`
	margin-right: 42px;
	padding-bottom: 8px;

	font-weight: ${(props) => props.isSelected && "bold"};

	border-bottom: 2px solid ${(props) => (props.isSelected ? "#000000" : "none")};
`;
