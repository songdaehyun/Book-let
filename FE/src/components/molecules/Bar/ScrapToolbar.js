import React from 'react';

import ScrapButton from '../../atoms/Button/ScrapButton';
import ScrapInfo from '../ScrapInfo';

import { Text } from '../../../styles/common/TextsStyle';
import { PreviewPostInfoContainer } from '../../../styles/Sentence/PostPreviewStyle';

function ScrapToolbar({ post, isMy }) {
	return (
		<PreviewPostInfoContainer>
			<ScrapInfo post={post} />
			{isMy ? (
				<Text size="14" color="var(--gray-500)">
					{post.createdDate}
				</Text>
			) : (
				<ScrapButton isScraped={post.userScrapted} />
			)}
		</PreviewPostInfoContainer>
	);
}

export default ScrapToolbar;
