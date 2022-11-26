package ArmyBuilder.controller;

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
	model.addAttribute("newUser",u);
	return "createUser";
	}
	
	@GetMapping("/newUser") //saves a new user to the data base!
	public String createUser(@ModelAttribute User u, Model model) {
		repo.save(u);
	return "loginPage";
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
		
	return "navPage"; //currently is add Army Name + Select Faction
	}
	
	@GetMapping("/login") //this sends you back to the login page!
	public String loginPage(Model model){
	return "loginPage";
	}

	//Army Mapping
	@GetMapping({"/viewArmy"})
	public String viewSavedArmy(Model model) {
		if(armyRepo.findAll().isEmpty()) {
			return addNewArmy(model);
		}
		model.addAttribute("armys", armyRepo.findAll());
		return "armyResults";
	}
	@GetMapping("/inputA")
	private String addNewArmy(Model model) {
		Army ar = new Army();
		model.addAttribute("newArmy",ar);
		return "inputA";
	}
	@PostMapping("/inputA")
	public String persistArmy(@ModelAttribute Army ar, Model model) {
		armyRepo.save(ar);
		return viewSavedArmy(model); //After saving we just want to go straight to adding the Units.
	}
	@GetMapping("editArmy/{id}")
	public String showUpdateArmy(@PathVariable("id") long id, Model model) {
		Army ar = armyRepo.findById(id).orElse(null);
		model.addAttribute("newArmy", ar);
		return "inputA";
	}
	@PostMapping("/updateArmy/{id}")
	public String editArmy(Army ar, Model model) {
		armyRepo.save(ar);
		return viewSavedArmy(model);
	}
	@GetMapping("/deleteArmy/{id}")
	public String deleteArmy(@PathVariable("id") long id, Model model) {
		Army ar = armyRepo.findById(id).orElse(null);
		armyRepo.delete(ar);
		return viewSavedArmy(model);
	}
	
	//Unit Mapping
	@GetMapping({"/viewUnits"})
	public String viewSavedUnits(Model model) {
		if(unitRepo.findAll().isEmpty()) {
			return addNewUnits(model);
		}
		model.addAttribute("units", unitRepo.findAll());
		return "results";
	}
	@GetMapping("/inputUnit")
	private String addNewUnits(Model model) {
		Unit un = new Unit();
		model.addAttribute("newUnit",un);
		return "inputUnit";
	}
	@PostMapping("/inputUnit")
	public String persistUnits(@ModelAttribute Unit un, Model model) {
		unitRepo.save(un);
		return viewSavedUnits(model);
	}
	@GetMapping("editUnit/{id}")
	public String showUpdateUnits(@PathVariable("id") long id, Model model) {
		Unit un = unitRepo.findById(id).orElse(null);
		model.addAttribute("newUnit", un);
		return "inputUnit";
	}
	@PostMapping("/updateUnit/{id}")
	public String reviseUnits(Unit un, Model model) {
		unitRepo.save(un);
		return viewSavedUnits(model);
	}
	@GetMapping("/deleteUnit/{id}")
	public String deleteUnits(@PathVariable("id") long id, Model model) {
		Unit un = unitRepo.findById(id).orElse(null);
		unitRepo.delete(un);
		return viewSavedUnits(model);
	}

}
