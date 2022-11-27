package ArmyBuilder.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import ArmyBuilder.beans.Army;
import ArmyBuilder.beans.Users;
import ArmyBuilder.repository.ArmyRepository;
import ArmyBuilder.repository.UserRepository;


@Controller
public class WebController {
@Autowired
ArmyRepository repo;
@Autowired
UserRepository userRepo;


@GetMapping({"/viewUsers"})
public String viewUsers(Model model) {
	if(userRepo.findAll().isEmpty()) {
		return addNewUsers(model);
	}
	model.addAttribute("users", userRepo.findAll());
	return "resultsUsers";
}

@GetMapping("/inputUsers")
private String addNewUsers(Model model) {
	Users us = new Users();
	Army ar = new Army();
	model.addAttribute("newUsers",us);
	return "inputUsers";
}
@PostMapping("/inputUsers")
public String addNewUser(@ModelAttribute Users us, Army ar, Model model) {
	userRepo.save(us);
	repo.save(ar);
	return viewUsers(model);
}

@GetMapping("edituser/{id}")
public String showUpdateUsers(@PathVariable("id") long id, Model model) {
	Users us = userRepo.findById(id).orElse(null);
	Army ar = repo.findById(id).orElse(null);
	model.addAttribute("newUsers", us);
	return "inputUsers";
}
@PostMapping("/updateuser/{id}")
public String reviseUsers(Users us, Model model) {
	userRepo.save(us);
	return viewUsers(model);
}
@GetMapping("/deleteuser/{id}")
public String deleteUsers(@PathVariable("id") long id, Model model) {
	Users us = userRepo.findById(id).orElse(null);
	userRepo.delete(us);
	return viewArmy(model);
}
	
/*We add the 'unit' objects  to the Army object, the Army object is then saved with all of the units. You'll want a user table joined to the army table.*/
	@GetMapping({"/viewArmy"})
	public String viewArmy(Model model) {
		if(repo.findAll().isEmpty()) {
			return addNewArmy(model);
		}
		model.addAttribute("armies", repo.findAll());
		return "results";
	}
	@GetMapping("/inputArmy")
	private String addNewArmy(Model model) {
		Army ar = new Army();
		model.addAttribute("newArmy",ar);
		return "input";
	}
	@PostMapping("/inputArmy")
	public String addNewArmy(@ModelAttribute Army ar, Model model) {
		List<Users> us = userRepo.findAll();
		Users test = us.get(0);
		test.getArmy().add(ar);
		repo.save(ar);
		userRepo.save(test);
		return viewArmy(model);
	}
	@GetMapping("edit/{id}")
	public String showUpdateArmy(@PathVariable("id") long id, Model model) {
		Army ar = repo.findById(id).orElse(null);
		model.addAttribute("newArmy", ar);
		return "input";
	}
	@PostMapping("/update/{id}")
	public String reviseArmy(Army ar, Model model) {
		repo.save(ar);
		return viewArmy(model);
	}
	@GetMapping("/delete/{id}")
	public String deleteArmy(@PathVariable("id") long id, Model model) {
		Army ar = repo.findById(id).orElse(null);
		repo.delete(ar);
		return viewArmy(model);
	}


}
