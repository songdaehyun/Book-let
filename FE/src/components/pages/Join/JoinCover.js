import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import CricleCheck from "../../atoms/Icon/CricleCheck";
import ActionsNavigationBar from "../../molecules/Bar/ActionsNavigationBar";
import JoinProgressBar from "../../molecules/Bar/JoinProgressBar";

import { Container } from "../../../styles/common/ContainingsStyle";
import { Span, Text } from "../../../styles/common/TextsStyle";
import { CoversContainer, CoverWrapper, CricleCheckWrapper } from "../../../styles/User/JoinStyle";

import { useDispatch, useSelector } from "react-redux";
import { initCover } from "../../../apis/init/initUser";
import { getCoverExample } from "../../../apis/userApi";
import { addSelectedCover, deleteSelectedCover } from "../../../reducer/user";

// import cover1 from "../../../assets/images/dummy/cover/cover-img (1).png";
// import cover10 from "../../../assets/images/dummy/cover/cover-img (10).png";
// import cover2 from "../../../assets/images/dummy/cover/cover-img (2).png";
// import cover3 from "../../../assets/images/dummy/cover/cover-img (3).png";
// import cover4 from "../../../assets/images/dummy/cover/cover-img (4).png";
// import cover5 from "../../../assets/images/dummy/cover/cover-img (5).png";
// import cover6 from "../../../assets/images/dummy/cover/cover-img (6).png";
// import cover7 from "../../../assets/images/dummy/cover/cover-img (7).png";
// import cover8 from "../../../assets/images/dummy/cover/cover-img (8).png";
// import cover9 from "../../../assets/images/dummy/cover/cover-img (9).png";

function JoinCover(props) {
	// 더미 데이터
	// const dummy = [
	// 	{
	// 		id: 1,
	// 		img: cover1,
	// 	},
	// 	{
	// 		id: 2,
	// 		img: cover2,
	// 	},
	// 	{
	// 		id: 3,
	// 		img: cover3,
	// 	},
	// 	{
	// 		id: 4,
	// 		img: cover4,
	// 	},
	// 	{
	// 		id: 5,
	// 		img: cover5,
	// 	},
	// 	{
	// 		id: 6,
	// 		img: cover6,
	// 	},
	// 	{
	// 		id: 7,
	// 		img: cover7,
	// 	},
	// 	{
	// 		id: 8,
	// 		img: cover8,
	// 	},
	// 	{
	// 		id: 9,
	// 		img: cover9,
	// 	},
	// 	{
	// 		id: 10,
	// 		img: cover10,
	// 	},
	// ];

	const navagate = useNavigate();
	const dispatch = useDispatch();

	// 도서 커버 보기들
	const [covers, setCovers] = useState([]);
	// 선택한 도서 커버들
	const { selectedCover } = useSelector((state) => state.user);
	// const [selectedCover, setSelectedCover] = useState([]);
	const [isCoverValidConfirmed, setIsCoverValidConfirmed] = useState(false);
	const [next, setNext] = useState("");

	useEffect(() => {
		// setCovers(dummy);
		(async () => {
			await getCoverExample()
				.then(initCover)
				.then((res) => {
					setCovers(res);
				});
		})();
	}, []);

	const handleClickCover = (id) => {
		if (!selectedCover.includes(id)) {
			// 선택 안 했으면 선택, 배열에 추가
			// setSelectedCover([...selectedCover, id]);
			dispatch(addSelectedCover(id));
		} else {
			// 선택되어있으면 선택 해제, 배열에서 삭제

			// cover.id와 id가 일치하지 않는 원소만 추출해서 새로운 배열을 반환
			// cover.id === id인 원소만 제거함.
			// setSelectedCover(selectedCover.filter((coverId) => coverId !== id));
			dispatch(deleteSelectedCover(id));
		}
	};

	const nextColor = () => {
		if (!isCoverValidConfirmed) {
			return `var(--gray-500)`;
		}
	};

	const coverValidTest = () => {
		if (5 <= selectedCover.length) {
			setIsCoverValidConfirmed(true);
			setNext("다음");
		} else {
			setIsCoverValidConfirmed(false);
			setNext(`${selectedCover.length} / 5개`);
		}
	};

	const handleClickNext = () => {
		if (isCoverValidConfirmed) {
			navagate("/join/5");
		}
	};

	const handleClickPre = () => {
		navagate("/join/3");
	};

	useEffect(() => {
		(async () => {
			await getCoverExample()
				.then(initCover)
				.then((res) => setCovers(res));
		})();
	}, []);

	useEffect(() => {
		coverValidTest();
		console.log(selectedCover);
	}, [selectedCover]);

	return (
		<>
			<ActionsNavigationBar
				pre="이전"
				title="회원가입"
				next={next}
				handleClickPre={handleClickPre}
				handleClickNext={handleClickNext}
				nextColor={nextColor()}
			/>
			<Container paddingTop="56" paddingLeft="16" paddingRight="16">
				<JoinProgressBar step="4" />
				<Container marginBottom="24">
					<Text size="20" weight="bold" marginBottom="16" height="32">
						좋아하는 책이나
						<br /> 마음에 드는 표지를 선택해주세요
					</Text>
					<Text size="14" color="var(--gray-500)" marginBottom="4">
						<Span size="14" weight="bold" color="var(--primary-600)">
							5개&nbsp;
						</Span>
						이상 선택해주세요. 도서와 문장 추천에 사용될거예요.
					</Text>
				</Container>
				<CoversContainer>
					{covers?.map((cover) => {
						return (
							<CoverWrapper
								key={cover.id}
								onClick={() => handleClickCover(cover.id)}
								isSelected={selectedCover.includes(cover.id) ? true : false}
							>
								<img src={cover.img} />
								{selectedCover.includes(cover.id) && (
									<CricleCheckWrapper>
										<CricleCheck />
									</CricleCheckWrapper>
								)}
							</CoverWrapper>
						);
					})}
				</CoversContainer>
			</Container>
		</>
	);
}

export default JoinCover;
