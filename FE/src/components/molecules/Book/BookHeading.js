import React from "react";

import { Text } from "../../../styles/common/TextsStyle";

import SearchIcon from "../../../assets/icons/search-icon.png";
import { BookHeadingBox } from "../../../styles/Book/BookStyle";

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
