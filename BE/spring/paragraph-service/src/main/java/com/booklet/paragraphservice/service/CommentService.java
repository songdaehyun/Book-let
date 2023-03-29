package com.booklet.paragraphservice.service;

import com.booklet.paragraphservice.dto.comment.CommentDto;

public interface CommentService {
    public Long saveComment(CommentDto commentDto); // 댓글 등록

}
