import React from "react";
import { SeparationBar } from "../../../styles/common/BarsStyle";
import MyReviewPreviewSection from "../../organisms/Mypage/MyReviewPreviewSection";
import UserInfoOverview from "../../organisms/Mypage/UserInfoOverview";

function Mypage(props) {
	return (
		<div>
			<UserInfoOverview />
			<SeparationBar />
			<MyReviewPreviewSection />
		</div>
	);
}

export default Mypage;
