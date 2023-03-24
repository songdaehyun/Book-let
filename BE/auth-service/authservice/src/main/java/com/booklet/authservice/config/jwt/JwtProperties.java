package com.booklet.authservice.config.jwt;

public interface JwtProperties {
    String SECRET = "북적북적";
    int EXPIRATION_TIME = 60000 * 10; // 10분 (1/1000초)
    String TOKEN_PREFIX = "Bearer ";
    String HEADER_STRING = "Authorization";
}
