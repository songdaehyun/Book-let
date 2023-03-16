import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 로그인 / 회원가입
import Login from "./pages/User/Login";
import JoinBasic from "./pages/User/JoinBasic";
import JoinGender from "./pages/User/JoinGender";
import JoinAge from "./pages/User/JoinAge";
import JoinCover from "./pages/User/JoinCover";
import JoinTag from "./pages/User/JoinTag";

// 피드
import Feed from "./pages/Feed";
import Scrap from "./pages/sentence/Scrap";
import Reco from "./pages/sentence/Reco";

function AppRouter(props) {
	return (
		<BrowserRouter>
			<Routes>
				{/* 로그인 / 회원가입 */}
				<Route path="/login" element={<Login />} />
				<Route path="/join/1" element={<JoinBasic />} />
				<Route path="/join/2" element={<JoinGender />} />
				<Route path="/join/3" element={<JoinAge />} />
				<Route path="/join/4" element={<JoinCover />} />
				<Route path="/join/5" element={<JoinTag />} />
				{/* 피드 */}
				<Route path="/" element={<Feed />} />
				<Route path="/sentence/scrap" element={<Scrap />} />
				<Route path="/sentence/recommand" element={<Reco />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter;
