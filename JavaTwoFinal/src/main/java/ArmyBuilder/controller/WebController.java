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
import ArmyBuilder.beans.Unit;
import ArmyBuilder.beans.User;
import ArmyBuilder.repository.ArmyRepository;
import ArmyBuilder.repository.UnitRepository;
import ArmyBuilder.repository.UserRepository;

@Controller
public class WebController {
  
	@Autowired //communicates with the repository
	UserRepository repo;
	@Autowired
	UnitRepository unitRepo;
	@Autowired
	ArmyRepository armyRepo;
	
	@PostMapping("/newUser") //starts the process of making a new user!
	public String createUser(Model model) {
		User u = new User();
		u.setUserName("test");
		u.setUserPassword("test");
		model.addAttribute("newUser",u);
		return "createUser";
	}
	
	@GetMapping("/newUser") //saves a new user to the data base!
	public String createUser(@ModelAttribute User u, Model model) {
		repo.save(u);
		return "navPage";
	}
	
	@PostMapping("/newArmy") //starts the process of making a new army! 
	public String createArmy(Model model) {
		Army a = new Army();
		model.addAttribute("newArmy",a);
		return("createArmy");
	}
	
	@GetMapping("/newArmy") //adds an army!
	public String createArmy(@ModelAttribute Army a, Model model) {
		List<User> u = repo.findAll();
		User test = u.get(0);
		test.getUsersArmies().add(a);
		armyRepo.save(a);
		repo.save(test);
		return "navPage";
	}
	
	@PostMapping("/viewUsers") //shows you all the users.
	public String viewUsers(Model model) {
		if(repo.findAll().isEmpty()) {
			return createUser(model);
		}else {
			for(User u : repo.findAll()) {
				System.out.println(u.toString());
			}
			model.addAttribute("users", repo.findAll());
			return "result";
		}
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
	
	@GetMapping({"/viewUnits"})
	public String viewSavedUnits(Model model) {
		if(unitRepo.findAll().isEmpty()) {
			return addNewUnits(model);
		}
		model.addAttribute("units", unitRepo.findAll());
		return "results";
	}
	@GetMapping("/inputUnits")
	private String addNewUnits(Model model) {
		Unit un = new Unit();
		model.addAttribute("newUnit",un);
		return "input";
	}
	@PostMapping("/inputUnits")
	public String addNewContact(@ModelAttribute Unit un, Model model) {
		unitRepo.save(un);
		return viewSavedUnits(model);
	}
	@GetMapping("edit/{id}")
	public String showUpdateOrder(@PathVariable("id") long id, Model model) {
		Unit un = unitRepo.findById(id).orElse(null);
		model.addAttribute("newUnit", un);
		return "input";
	}
	@PostMapping("/update/{id}")
	public String reviseOrder(Unit un, Model model) {
		unitRepo.save(un);
		return viewSavedUnits(model);
	}
	@GetMapping("/delete/{id}")
	public String deleteOrder(@PathVariable("id") long id, Model model) {
		Unit un = unitRepo.findById(id).orElse(null);
		unitRepo.delete(un);
		return viewSavedUnits(model);
	}
	
	@PostMapping("/navPage")
	public String toNavPage(Model model) {
		return "navPage";
	}


}
