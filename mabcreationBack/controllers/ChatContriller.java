package com.imprevisible.mabcreation.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.imprevisible.mabcreation.dao.ChatRepository;
import com.imprevisible.mabcreation.entities.Chat;

@RestController
@CrossOrigin("*")
public class ChatContriller {
	@Autowired
	private ChatRepository chatRepository;
	
	@PostMapping("/addChat")
	public Chat saveChat(@RequestBody Chat cht) {
		return chatRepository.save(cht);
	}
}
