import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import EmotionTag from "../../../components/atoms/Join/EmotionTag";
import ActionsNavigationBar from "../../molecules/Bar/ActionsNavigationBar";
import JoinProgressBar from "../../molecules/Bar/JoinProgressBar";

import { Container } from "../../../styles/common/ContainingsStyle";
import { Span, Text } from "../../../styles/common/TextsStyle";
import { TagsContainer } from "../../../styles/User/JoinStyle";
import { join } from "../../../apis/authApi";

function JoinTag(props) {
	// 더미 데이터
	const tags = [
		{ id: 1, title: "공격적" },
		{ id: 2, title: "낙천적" },
		{ id: 3, title: "대담한" },
		{ id: 4, title: "조심스러운" },
		{ id: 5, title: "호기심 많은" },
		{ id: 6, title: "용감한" }
	];

	const navagate = useNavigate();

	const { id, nickname, email, pw, age, gender } = useSelector((state) => state.join);

	const [selectedTag, setSelectedTag] = useState([]);
	const [isTargetValidConfirmed, setIsTargetValidConfirmed] = useState(false);
	const [next, setNext] = useState("");

	const handleClickTag = (id) => {
		if (!selectedTag.includes(id)) {
			// 선택되지 않은 태그라면 선택
			setSelectedTag([...selectedTag, id]);
		} else {
			// 선택된 태그라면 해제
			setSelectedTag(selectedTag.filter((tagId) => tagId !== id));
		}
	};

	const tagValidTest = () => {
		if (5 <= selectedTag.length) {
			setIsTargetValidConfirmed(true);
			setNext("다음");
		} else {
			setIsTargetValidConfirmed(false);
			setNext(`${selectedTag.length} / 5개`);
		}
	};

	const nextColor = () => {
		if (!isTargetValidConfirmed) {
			return `var(--gray-500)`;
		}
	};

	const handleClickPre = () => {
		navagate("/join/4");
	};

	const handleClickNext = () => {
		if (isTargetValidConfirmed) {
			const data = {
				username: id,
				nickname: nickname,
				password: pw,
				email: email,
				age: age,
				sex: gender
			};

			(async () => {
				await join(data).then((res) => {
					if (res?.status === 201) {
						// 회원가입 완료
						navagate("/");
					}
				});
			})();
		}
	};

	useEffect(() => {
		tagValidTest();
		console.log(selectedTag);
	}, [selectedTag]);

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
				<JoinProgressBar step="5" />
				<Container marginBottom="24">
					<Text size="20" weight="bold" marginBottom="16" height="32">
						당신을 표현할 수 있는
						<br /> 감성 태그를 선택해주세요
					</Text>
					<Text size="14" color="var(--gray-500)" marginBottom="4">
						<Span size="14" weight="bold" color="var(--primary-600)">
							5개&nbsp;
						</Span>
						이상 선택해주세요. 도서와 문장 추천에 사용될거예요.
					</Text>
				</Container>
				<TagsContainer>
					{tags.map((tag) => (
						<div onClick={() => handleClickTag(tag.id)}>
							<EmotionTag
								onClick={() => handleClickTag(tag.id)}
								id={tag.id}
								title={tag.title}
								isSelected={selectedTag.includes(tag.id) ? true : false}
							/>
						</div>
					))}
				</TagsContainer>
			</Container>
		</>
	);
}

export default JoinTag;
