package ArmyBuilder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import ArmyBuilder.beans.User;
import ArmyBuilder.repository.ContactRepository;

@Controller
public class WebController {

	@Autowired //communicates with the repository
	ContactRepository repo;
	
	@PostMapping("/newUser") //starts the process of making a new user!
	public String createUser(Model model) {
		User u = new User();
		model.addAttribute("newUser",u);
		return "createUser";
	}
	
	@GetMapping("/newUser") //saves a new user to the data base!
	public String createUser(@ModelAttribute User u, Model model) {
		repo.save(u);
		return "navPage";
	}
	
	@PostMapping("/login") //this is called to login from the login page!
	public String login(Model model) {
		String test = (String) model.getAttribute("username");
		System.out.println(test);
		if(repo.findAll().isEmpty()) {
			return createUser(model);
		}
		/*else {
			for(User u:repo.findAll()) {
				if()
			}
		}*/
		
		return "navPage";
	}
	
	@GetMapping("/login") //this sends you back to the login page!
	public String loginPage(Model model){
		return "loginPage";
	}
}
