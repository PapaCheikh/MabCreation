package com.imprevisible.mabcreation.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.imprevisible.mabcreation.entities.Chat;

@RepositoryRestResource
@CrossOrigin("*")
public interface ChatRepository extends JpaRepository<Chat, Long> {

}
