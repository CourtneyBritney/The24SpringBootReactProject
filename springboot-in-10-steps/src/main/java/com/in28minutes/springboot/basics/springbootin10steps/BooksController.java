package com.in28minutes.springboot.basics.springbootin10steps;

import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class BooksController {
	@GetMapping("/books")
	public List<Book> getAllBooks()
	{
		return Arrays.asList(new Book(1l, "Mastering Spring 5.0", "Ranga Karana"));
	}
}
