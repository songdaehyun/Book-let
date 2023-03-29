package com.booklet.bookservice.service;

import com.booklet.bookservice.dto.LikeReq;
import com.booklet.bookservice.entity.Book;

public interface BookLikeService {
    public boolean findLike(LikeReq req);
    public boolean createLike(LikeReq req);
    public boolean deleteLike(LikeReq req);
    public int countLike(Book book);
}
