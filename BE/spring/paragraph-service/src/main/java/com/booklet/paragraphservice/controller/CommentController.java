package com.booklet.paragraphservice.controller;

import com.booklet.paragraphservice.dto.comment.CommentCreateReq;
import com.booklet.paragraphservice.dto.comment.CommentDto;
import com.booklet.paragraphservice.entity.Paragraph;
import com.booklet.paragraphservice.service.CommentService;
import com.booklet.paragraphservice.service.ParagraphService;
import com.booklet.paragraphservice.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("api/v1/comment")
@RequiredArgsConstructor
@Component
public class CommentController {
    private final CommentService commentService;
    private final UserService userService;
    private final ParagraphService paragraphService;

    /**
     * 댓글 작성 -
     * @param request
     * @return
     * @throws Exception
     */
    @PostMapping 
    public ResponseEntity createComment(@RequestBody CommentCreateReq request) throws Exception {
        CommentDto commentDto = new CommentDto(request);
        log.info("HEEEEEEEERRRRRR : {}", commentDto.getCommentContent());
        commentDto.setUser(userService.getUser(request.getUserId()));
        commentDto.setParagraph(paragraphService.findParagraphEntity(request.getParagraphId()));
        Long commentId = commentService.saveComment(commentDto);
        if(commentId>0L)   return new ResponseEntity("success", HttpStatus.ACCEPTED);
        return new ResponseEntity("fail", HttpStatus.BAD_REQUEST);
    }
    
    
}
