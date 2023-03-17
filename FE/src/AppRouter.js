import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 로그인 / 회원가입
import Login from "./components/pages/Login/Login";
import JoinBasic from "./components/pages/Join/JoinBasic";
import JoinGender from "./components/pages/Join/JoinGender";
import JoinAge from "./components/pages/Join/JoinAge";
import JoinCover from "./components/pages/Join/JoinCover";
import JoinTag from "./components/pages/Join/JoinTag";

// 피드
import Feed from './components/pages/Sentence/Feed'
import Scrap from "./components/pages/Sentence/Scrap";
import Reco from "./components/pages/Sentence/Reco";

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
