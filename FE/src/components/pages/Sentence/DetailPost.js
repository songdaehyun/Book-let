import React from "react";
import ReturnNavigationBar from "../../molecules/Bar/ReturnNavigationBar";

function DetailPost(props) {
	// 더미
	const post = {
		paragraphId: 1,
		content:
			"이제는 안다. 우리가 계속 지는 한이 있더라도 선택해야만 하는 건 이토록 평범한 미래라는 것을. 그리고 포기하지 않는 한 그 미래가 다가올 확률은 100퍼센트에 수렴한다는 것을.",
		paragraphColor: "000000",
		paragraphPage: 145,
		createdDate: "",
		bookTitle: "이토록 평범한 미래",
		bookAuthor: "김연수",
		userId: 1,
		nickname: "루피는 행복해",
		commentCnt: 10,
		scrapUserImgs: ["imagePath1", "imagePath2", "imagePath3"],
		scrapCnt: 10,
		userScrapted: 1, // 1 이면 스크랩 함. 0이면 안 함.
	};

	return (
		<div>
			<ReturnNavigationBar title={post.bookTitle} />  
		</div>
	);
}

export default DetailPost;
