package com.esp.users.restControllers;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.esp.users.entities.Users;
import com.esp.users.dao.UserRepository;

@RestController
@CrossOrigin("*")
public class UserRESTController {
	
	UserRepository userRep;
	
	public static String crypter(String message) {
        StringBuilder chiffre = new StringBuilder();
        String pass = "";
        for (int i = 0, taille=message.length(); i < taille; i++) {
            char c = message.charAt(i);
            if (Character.isUpperCase(c)) {
                chiffre.append((char) (((c - 65 + 4) % 26) + 65));
                pass = "!m"+chiffre+"Pr"+chiffre+"£V!"+chiffre+"@z"+chiffre+"!B"+chiffre+"l£/#";
            } else if (Character.isLowerCase(c)) {
                chiffre.append((char) (((c - 97 + 4) % 26) + 97));
                pass = "!m"+chiffre+"Pr"+chiffre+"£V!"+chiffre+"@z"+chiffre+"!B"+chiffre+"l£/#";
            } else {
                chiffre.append(c);
            }
        }
        return pass;
    }
	
	public UserRESTController(UserRepository userRep) {
		this.userRep = userRep;
	}
	
	@RequestMapping(value ="/login/{username}",method = RequestMethod.GET)
	public Users getUserByUsername(@PathVariable("username") String
	username) {
		return userRep.findByUsername(username);
	}
	
	@GetMapping("/users")
	public List<Users> getUsers() {
		return userRep.findAll();
	}
	
	/*
	 * @DeleteMapping("/deleteuser/{id}") public void deleteuser(@PathVariable
	 * (value="id") Long id) { Optional<Users> art = userRep.findById(id); if
	 * (art.isPresent()) { Users users = art.get(); userRep.delete(users); } }
	 */
}