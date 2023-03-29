package com.booklet.bookservice.service;

import com.booklet.bookservice.dto.BookSearchRes;
import com.booklet.bookservice.entity.Book;
import com.booklet.bookservice.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Slice;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import static java.util.stream.Collectors.toList;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class BookServiceImpl implements BookService{
    private final BookRepository bookRepository;
    @Override
    public Book findBook(String bookIsbn){
        return bookRepository.findById(bookIsbn).orElse(null);
    }

    @Override
    public List<BookSearchRes> searchBooks(String title, Pageable pageable) {
        List<BookSearchRes> list =new ArrayList<>();
        Slice<Book> books = bookRepository.findByBookTitleContaining(title,pageable);
        System.out.println(books.getContent());
        list = books.getContent().stream().map(i->new BookSearchRes(i.getBookTitle(), i.getBookIsbn(), "김이박", i.getBookImage())).collect(toList());

        return list;
    }
}
