package com.booklet.bookservice;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.ArrayList;
import java.util.List;


@Configuration
public class CorsConfig implements WebMvcConfigurer {

    /**
     * CORS 설정, 허락된 URL, 허락된 Origin
     *
     * @return
     */
    List<String> originlst = new ArrayList<>(List.of(
            "http://localhost:3000",
            "https://localhost:3000",
            "http://j8b306.p.ssafy.io:3000",
            "https://j8b306.p.ssafy.io:3000",
            "https://j8b306.p.ssafy.io"
    ));
    List<String> list = new ArrayList<>(List.of(
            "GET", "POST", "PUT", "OPTIONS", "DELETE"
    ));

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000",
                        "https://localhost:3000",
                        "http://j8b306.p.ssafy.io:3000",
                        "https://j8b306.p.ssafy.io:3000",
                        "https://j8b306.p.ssafy.io")
                .allowedMethods("GET", "POST", "PUT", "PATCH", "OPTIONS")
                .allowedHeaders("headers")
                .maxAge(3000);
    }
    
}