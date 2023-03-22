import React from "react";
import { SeparationBar } from "../../../styles/common/BarsStyle";
import MyInfoSetSection from "../../organisms/Mypage/MyInfoSetSection";
import MyLikePreviewSection from "../../organisms/Mypage/MyLikePreviewSection";
import MyReviewPreviewSection from "../../organisms/Mypage/MyReviewPreviewSection";
import UserInfoOverview from "../../organisms/Mypage/UserInfoOverview";

function Mypage(props) {
	return (
		<div>
			<UserInfoOverview />
			<SeparationBar />
			<MyReviewPreviewSection />
            <MyLikePreviewSection />
            <MyInfoSetSection />
		</div>
	);
}

export default Mypage;
