import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 로그인 / 회원가입
import Login from "./pages/User/Login";
import JoinBasic from "./pages/User/JoinBasic";
import JoinGender from "./pages/User/JoinGender";
import JoinAge from "./pages/User/JoinAge";

function AppRouter(props) {
	return (
		<BrowserRouter>
			<Routes>
				{/* 로그인 / 회원가입 */}
				<Route path="/login" element={<Login />} />
				<Route path="/join/1" element={<JoinBasic />} />
				<Route path="/join/2" element={<JoinGender />} />
				<Route path="/join/3" element={<JoinAge />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter;
