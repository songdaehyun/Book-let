import React from "react";
import { Container } from "../../../styles/common/ContainingsStyle";
import { Text } from "../../../styles/common/TextsStyle";

import MoreBar from "../../molecules/Bar/MoreBar";

function MyAccountSetSection(props) {
	return (
		<Container marginTop="56" paddingLeft="16" paddingRight="16">
			<Text size="14" weight="600" marginBottom="16" color="var(--gray-500)">
				계정 관리
			</Text>
			<MoreBar title="로그아웃" />
			<MoreBar title="탈퇴" path="delete-account" />
		</Container>
	);
}

export default MyAccountSetSection;
