import React from 'react';
import { PreviewBookSkeletonBox, PreviewBookSkeletonItemBox } from '../../../styles/Book/BookStyle';

function PreviewBookSkeleton(props) {
    return (
        <PreviewBookSkeletonBox>
            {[1, 2, 3].map((item) => (
                <PreviewBookSkeletonItemBox>
                    <div></div>
                    <div></div>
                </PreviewBookSkeletonItemBox>
            ))}
        </PreviewBookSkeletonBox>
    );
}

export default PreviewBookSkeleton;