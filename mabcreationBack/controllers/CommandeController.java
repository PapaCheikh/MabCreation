package com.imprevisible.mabcreation.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.imprevisible.mabcreation.dao.CommandeRepository;
import com.imprevisible.mabcreation.entities.Commande;

@RestController
@CrossOrigin("*")
public class CommandeController {
	private CommandeRepository commandeRepository;
	
	public CommandeController(CommandeRepository commandeRepository) {
        this.commandeRepository = commandeRepository;
    }
	
	@PostMapping("/addCommande")
	public Commande saveCommande(@RequestBody Commande commande) {
		return commandeRepository.save(commande);
	}
}
