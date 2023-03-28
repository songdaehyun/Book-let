package com.booklet.bookservice.service;

import com.booklet.bookservice.entity.Book;

public interface BookService {
    public Book findBook(String bookIsbn);
}
