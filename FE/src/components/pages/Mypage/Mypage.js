import React from "react";
import { SeparationBar } from "../../../styles/common/BarsStyle";
import MyAccountSetSection from "../../organisms/Mypage/MyAccountSetSection";
import MyInfoSetSection from "../../organisms/Mypage/MyInfoSetSection";
import MyLikePreviewSection from "../../organisms/Mypage/MyLikePreviewSection";
import MypageFooter from "../../organisms/Mypage/MypageFooter";
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
			<MyAccountSetSection />
            <MypageFooter />
		</div>
	);
}

export default Mypage;
