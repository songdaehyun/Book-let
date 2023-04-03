import React from "react";
import useArr from "../../../hooks/useArr";
import { Container } from "../../../styles/common/ContainingsStyle";

import MoreBar from "../../molecules/Bar/MoreBar";
import PreviewBookCoverList from "../../molecules/Book/PreviewBookCoverList";
import PreviewSwiperBook from "../../molecules/Book/PreviewSwiperBook";
import Empty from "../../molecules/Empty";

function PreviewBookSection({ title, books, path, emptyInfo, loading, error }) {
	const isArrEmpty = useArr();

	console.log(books);

	return (
		<Container marginTop="40" marginBottom="48">
			<MoreBar title={title} path={path} />
			{loading && <>로딩 중</>}
			{error && (
				<Empty
					title={emptyInfo?.title}
					subTitle={emptyInfo?.subTitle}
					buttonLabel={emptyInfo?.buttonLabel}
					path={emptyInfo?.path}
				/>
			)}
			{!isArrEmpty(books) &&
				(books?.recommendType !== "bookCover" ? (
					<PreviewSwiperBook books={books?.recommend || books} emptyInfo={emptyInfo} />
				) : (
					<PreviewBookCoverList books={books?.recommend}></PreviewBookCoverList>
				))}
		</Container>
	);
}

export default PreviewBookSection;
