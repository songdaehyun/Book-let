import React from "react";

import ReactionInfo from "../ReactionInfo";

import { ReactionInfoContainer } from "../../../styles/Sentence/PostPreviewStyle";
import LikeButton from "../../atoms/Button/LikeButton";

function LikeToolbar({ info }) {
	return (
		<ReactionInfoContainer>
			<ReactionInfo info={info} type="like" />
			<LikeButton isLiked={info.bookLike} />
		</ReactionInfoContainer>
	);
}

export default LikeToolbar;
