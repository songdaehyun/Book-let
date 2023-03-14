package com.booklet.paragraphservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class ParagraphServiceApplication {
	public static void main(String[] args) {
		SpringApplication.run(ParagraphServiceApplication.class, args);
	}

}
