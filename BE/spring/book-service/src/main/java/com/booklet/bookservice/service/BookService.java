package com.booklet.bookservice.service;

import com.booklet.bookservice.dto.BookSearchRes;
import com.booklet.bookservice.entity.Book;

import java.util.ArrayList;
import java.util.List;

public interface BookService {
    public Book findBook(String bookIsbn);
    public List<BookSearchRes> searchBooks(String title);
}
