package com.booklet.bookservice.service;

import com.booklet.bookservice.dto.BookSearchRes;
import com.booklet.bookservice.entity.Book;
import com.booklet.bookservice.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

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
        return bookRepository.findBooksByBookTitle(title,pageable).stream().collect(Collectors.toList());
    }
}
