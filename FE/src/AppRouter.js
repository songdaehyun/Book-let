import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 로그인 / 회원가입
import Login from "./pages/User/Login";

function AppRouter(props) {
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인 / 회원가입 */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
