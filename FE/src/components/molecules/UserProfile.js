import React from "react";

import { Span } from "../../styles/common/TextsStyle";
import { ProfileContainer } from "../../styles/Sentence/PostPreviewStyle";

function UserProfile({ nickname, profileImg }) {
	return (
		<ProfileContainer>
			<img src={profileImg} />
			<Span weight="600" marginLeft="16">
				{nickname}
			</Span>
		</ProfileContainer>
	);
}

export default UserProfile;
