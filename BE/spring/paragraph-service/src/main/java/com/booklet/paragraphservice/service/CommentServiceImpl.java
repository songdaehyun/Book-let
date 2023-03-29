package com.booklet.paragraphservice.service;

import com.booklet.paragraphservice.dto.comment.CommentDto;
import com.booklet.paragraphservice.dto.comment.CommentListDto;
import com.booklet.paragraphservice.dto.paragraph.ParagraphDto;
import com.booklet.paragraphservice.entity.Comment;
import com.booklet.paragraphservice.entity.Paragraph;
import com.booklet.paragraphservice.entity.User;
import com.booklet.paragraphservice.repository.CommentRepository;
import com.booklet.paragraphservice.repository.UserImageRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class CommentServiceImpl implements CommentService{
    private final CommentRepository commentRepository;
    private final UserImageRepository userImageRepository;

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

    @Override
    public List<CommentListDto> findComments(Paragraph paragraph) {
        List<Comment> commentList = commentRepository.findCommentsByParagraph(paragraph);
        List<CommentListDto> comments = new ArrayList<>();
        for(Comment c : commentList){
            User u = c.getUser();
            String userImage = userImageRepository.findUserImageByUser(u);
            CommentListDto commentListDto = new CommentListDto(c.getCommentId(),c.getCommentContent(),c.getCommentGroup(), c.getCommentDepth(), c.getCreatedDate(),c.getModifiedDate(),u.getUserId(),u.getNickname(),userImage);
            comments.add(commentListDto);
        }
        return comments;
    }


}
