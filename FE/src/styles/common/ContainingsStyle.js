import styled from "styled-components";

export const Container = styled.div`
	padding-top: ${(props) => props.paddingTop}px;
	padding-bottom: ${(props) => props.paddingBottom}px;
	padding-left: ${(props) => props.paddingLeft}px;
	padding-right: ${(props) => props.paddingRight}px;
`;

export const ValidWrapper = styled.div`
	margin-top: 4px;
`;
