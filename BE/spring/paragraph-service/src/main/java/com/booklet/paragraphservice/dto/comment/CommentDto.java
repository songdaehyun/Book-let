package com.booklet.paragraphservice.dto.comment;

import com.booklet.paragraphservice.entity.Comment;
import com.booklet.paragraphservice.entity.Paragraph;
import com.booklet.paragraphservice.entity.User;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CommentDto {
    private Long commentGroup;
    private int commentDepth;
    private String commentContent;
    private Paragraph paragraph;
    private User user;

    public CommentDto(CommentCreateReq commentCreateReq){
        if(commentCreateReq.getParentCommentId()>0){ // 아기 댓글
            this.commentGroup = commentCreateReq.getParentCommentId();
            this.commentDepth = 1;
        }else{
            this.commentGroup = 0L;
            this.commentDepth = 0;
        }
        this.commentContent = commentCreateReq.getCommentContent();
    }

}
