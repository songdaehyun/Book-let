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
import RecomSentence from "./components/pages/Sentence/RecomSentence";
import ScrapSentence from "./components/pages/Sentence/ScrapSentence";
import WriteSentence from "./components/pages/Sentence/WriteSentence";

// 책
import Book from "./components/pages/Book/Book";
import CoverRecomBook from "./components/pages/Book/CoverRecomBook";
import GenreRecomBook from "./components/pages/Book/GenreRecomBook";
import LikeRecomBook from "./components/pages/Book/LikeRecomBook";
import RatingRecomBook from "./components/pages/Book/RatingRecomBook";
import UserRecomBook from "./components/pages/Book/UserRecomBook";
import BookDetail from "./components/pages/Book/BookDetail";
import AuthorBook from "./components/pages/Book/AuthorBook";

// 마이 페이지
import Mypage from "./components/pages/Mypage/Mypage";

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
				<Route path="/sentence/scrap" element={<ScrapSentence />} />
				<Route path="/sentence/recommand" element={<RecomSentence />} />
				<Route path="/sentence/:sId" element={<DetailPost />} />
				<Route path="/sentence/write" element={<WriteSentence />} />
				{/* 도서 */}
				<Route path="/book" element={<Book />} />
				<Route path="/book/recom/user" element={<UserRecomBook />} />
				<Route path="/book/recom/rating" element={<RatingRecomBook />} />
				<Route path="/book/recom/like" element={<LikeRecomBook />} />
				<Route path="/book/recom/genre" element={<GenreRecomBook />} />
				<Route path="/book/recom/cover" element={<CoverRecomBook />} />
				<Route path="/book/:bId" element={<BookDetail />} />
				<Route path="/author/:aId" element={<AuthorBook />} />
				{/* 마이 페이지 */}
				<Route path="/mypage" element={<Mypage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default AppRouter;
