import React from "react";
import useArr from "../../../hooks/useArr";
import { Container } from "../../../styles/common/ContainingsStyle";

import MoreBar from "../../molecules/Bar/MoreBar";
import MoreBarSkeleton from "../../molecules/Bar/MoreBarSkeleton";
import PreviewBookCoverList from "../../molecules/Book/PreviewBookCoverList";
import PreviewBookSkeleton from "../../molecules/Book/PreviewBookSkeleton";
import PreviewSwiperBook from "../../molecules/Book/PreviewSwiperBook";
import Empty from "../../molecules/Empty";

function PreviewBookSection({ title, errTitle, books, path, emptyInfo, loading, error }) {
	const isArrEmpty = useArr();

	console.log(books);

	return (
		<Container marginTop="40" marginBottom="48">
			{loading && (
				<>
					<MoreBarSkeleton />
					<PreviewBookSkeleton />
				</>
			)}
			{error && (
				<>
					<MoreBar title={errTitle ? errTitle : title} path={path} />
					<Empty
						top={36}
						title={emptyInfo?.title}
						subTitle={emptyInfo?.subTitle}
						buttonLabel={emptyInfo?.buttonLabel}
						path={emptyInfo?.path}
					/>
				</>
			)}
			{!isArrEmpty(books) && <MoreBar title={title} path={path} /> &&
				(books?.recommendType !== "bookCover" ? (
					<PreviewSwiperBook books={books?.recommend || books} emptyInfo={emptyInfo} />
				) : (
					<PreviewBookCoverList books={books?.recommend}></PreviewBookCoverList>
				))}
		</Container>
	);
}

export default PreviewBookSection;
