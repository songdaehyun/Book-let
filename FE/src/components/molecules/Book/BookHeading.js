import React from "react";

import { BookHeadingBox } from "../../../styles/Book/BookStyle";
import { Text } from "../../../styles/common/TextsStyle";

import SearchIcon from "../../../assets/icons/search-icon.png";

function BookHeading(props) {
	return (
		<BookHeadingBox>
			<Text size="24" weight="bold">
				도서
			</Text>
			<img src={SearchIcon} />
		</BookHeadingBox>
	);
}

export default BookHeading;
