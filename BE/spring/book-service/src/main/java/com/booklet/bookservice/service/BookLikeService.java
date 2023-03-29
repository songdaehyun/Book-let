package com.booklet.bookservice.service;

import com.booklet.bookservice.dto.LikeReq;
import com.booklet.bookservice.entity.Book;

public interface BookLikeService {
    public boolean findLike(LikeReq req);
    public boolean doLike(LikeReq req, String cmd);
    public int countLike(Book book);
}
