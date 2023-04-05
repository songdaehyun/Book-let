import React, { useCallback, useEffect, useRef, useState } from "react";
import {
	ImageInput,
	PicturePreview,
	PictureSection,
	UploadButton,
	UploadPictureBox,
	UploadPictureEmptyBox,
	UploadPictureSection,
} from "../../../styles/Mypage/MypageStyle";

import pictureIcon from "../../../assets/icons/picture-icon.png";

function UploadProfileImage({ imageFile, setImageFile }) {
	// const [imageFile, setImageFile] = useState("");
	const [imagePreview, setImagePreview] = useState(null);
	// const [imageFile, setImageFile] = useRecoilState(storeImageFileState);
	// const [imagePreview, setImagePreview] = useRecoilState(storeImagePreviewState);
	const imageRef = useRef();

	// // 기존 이미지 삽입
	// if (!imagePreview && img && img.img?.split("-")[10] !== "null.png") {
	// 	setImagePreview(img?.img);
	// }

	useEffect(() => {
		setImagePreview(imageFile);
	}, [imageFile]);

	const onUploadImage = useCallback(() => {
		const file = imageRef.current.files[0];
		const reader = new FileReader();
		setImageFile(file);
		reader.readAsDataURL(file);
		reader.onloadend = () => {
			setImagePreview(reader.result);
		};
	}, []);

	const onUploadImageButtonClick = useCallback(() => {
		imageRef.current.click();
	}, []);

	return (
		<UploadPictureSection>
			<ImageInput type="file" accept="image/*" ref={imageRef} onChange={onUploadImage} />
			<PictureSection onClick={onUploadImageButtonClick}>
				{/* <PicturePreview src={imagePreview} alt="photoPreview" /> */}
				<UploadPictureBox>
					{imagePreview ? (
						<PicturePreview src={imagePreview} alt="photoPreview" />
					) : (
						<UploadPictureEmptyBox>
							<img src={pictureIcon} alt="photo icon" />
						</UploadPictureEmptyBox>
					)}
					<UploadButton>+</UploadButton>
				</UploadPictureBox>
			</PictureSection>
		</UploadPictureSection>
	);
}

export default UploadProfileImage;
