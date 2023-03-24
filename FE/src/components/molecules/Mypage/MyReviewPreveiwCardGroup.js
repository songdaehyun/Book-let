import { MyReviewPreveiwCardGroupBox } from "../../../styles/Mypage/MypageStyle";
import MyReviewPreviewCard from "./MyReviewPreviewCard";

function MyReviewPreveiwCardGroup({ reviews }) {
	return (
		<MyReviewPreveiwCardGroupBox>
			{reviews.map((review, idx) => (
				<MyReviewPreviewCard key={idx} review={review} />
			))}
		</MyReviewPreveiwCardGroupBox>
	);
}

export default MyReviewPreveiwCardGroup;
