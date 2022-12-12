package com.esp.users.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.esp.users.entities.Users;

@RepositoryRestResource
@CrossOrigin("*")
public interface UserRepository extends JpaRepository<Users, Long> {
	Users findByUsername(String username);
}
