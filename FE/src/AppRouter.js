import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 로그인 / 회원가입
import JoinAge from "./components/pages/Join/JoinAge";
import JoinBasic from "./components/pages/Join/JoinBasic";
import JoinCover from "./components/pages/Join/JoinCover";
import JoinGender from "./components/pages/Join/JoinGender";
import JoinTag from "./components/pages/Join/JoinTag";
import Login from "./components/pages/Login/Login";

// 문장
import DetailPost from "./components/pages/Sentence/DetailPost";
import Feed from "./components/pages/Sentence/Feed";
import Reco from "./components/pages/Sentence/Reco";
import Scrap from "./components/pages/Sentence/Scrap";

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
				{/* 문장 */}
				<Route path="/" element={<Feed />} />
				<Route path="/sentence/scrap" element={<Scrap />} />
				<Route path="/sentence/recommand" element={<Reco />} />
				<Route path="/sentence/:sId" element={<DetailPost />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter;
