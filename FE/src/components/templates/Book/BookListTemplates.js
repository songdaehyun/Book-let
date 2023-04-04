import React from "react";

import TopBanner from "../../molecules/Banner/TopBanner";
import ReturnNavigationBar from "../../molecules/Bar/ReturnNavigationBar";
import BookList from "../../organisms/Book/BookList";
import MasonryBookList from "../../organisms/Book/MasonryBookList";

import { Container } from "../../../styles/common/ContainingsStyle";

function BookListTemplates({ title, subTitle, img, books, type }) {
	console.log(books)
	return (
		<div>
			<ReturnNavigationBar />
			<Container paddingTop="48">
				<TopBanner title={title} subTitle={subTitle} img={img} />
			</Container>
			{type !== "bookCover" ? <BookList books={books} /> : <MasonryBookList books={books} />}
		</div>
		
	);
}

export default BookListTemplates;
