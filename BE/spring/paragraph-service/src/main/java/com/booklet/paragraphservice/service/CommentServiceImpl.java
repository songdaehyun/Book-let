package com.booklet.paragraphservice.service;

import com.booklet.paragraphservice.dto.comment.CommentDto;
import com.booklet.paragraphservice.dto.paragraph.ParagraphDto;
import com.booklet.paragraphservice.entity.Comment;
import com.booklet.paragraphservice.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class CommentServiceImpl implements CommentService{
    private final CommentRepository commentRepository;

    @Transactional
    @Override
    public Long saveComment(CommentDto commentDto) {
        Comment comment = Comment.builder()
                .commentContent(commentDto.getCommentContent())
                .commentGroup(commentDto.getCommentGroup())
                .commentDepth(commentDto.getCommentDepth())
                .paragraph(commentDto.getParagraph())
                .user(commentDto.getUser())
                .build();
        Long commentId = 0L;
        commentId = commentRepository.save(comment).getCommentId();
        if(comment.getCommentGroup()==0L){ // 부모댓글이면 group update
            comment.updateCommentGroup();
            commentRepository.save(comment);
        }
        return commentId;
    }

}
