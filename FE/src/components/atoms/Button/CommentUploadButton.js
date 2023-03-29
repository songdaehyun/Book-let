import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { postReview } from "../../../apis/BookApi";

import { CommentUploadBtn } from "../../../styles/common/ButtonsStyle";

import UploadArrow from "../../atoms/Icon/UploadArrow";

function CommentUploadButton({ content, getReviewApiCall }) {
	const uId = localStorage.getItem("userId");
	const { bId } = useParams();

	const { selectedRating } = useSelector((state) => state.book);

	const commentSubmit = () => {
		const data = {
			content: content,
			grade: selectedRating,
			userId: uId,
			bookIsbn: bId,
		};

		(async () => {
			await postReview(data).then((res) => {
				if (res === "success") {
					getReviewApiCall();
				}
			});
		})();
	};

	return (
		<CommentUploadBtn onClick={commentSubmit}>
			<UploadArrow />
		</CommentUploadBtn>
	);
}

export default CommentUploadButton;
