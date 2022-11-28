package ArmyBuilder.controller;

import java.util.ArrayList;
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
	static Long currentUser;//this is a temp variable to keep track of who is signed in!
	
	@GetMapping("/viewAll")
	public String viewAllInfo(Model model) {
		model.addAttribute("users", repo.findAll());
		model.addAttribute("units", unitRepo.findAll());
		model.addAttribute("armies", armyRepo.findAll());
		return "viewAll";
	}
	@PostMapping("/newUser") //starts the process of making a new user!
	public String createUser(Model model) {
		User u = new User();
		model.addAttribute("newUser",u);
		return "createUser";
	}
	
	@GetMapping("/newUser") //saves a new user to the data base!
	public String createUser(@ModelAttribute User u, Model model) {
		
		if(repo.findAll().isEmpty()) { //this only matter for the fist user ever made, but i feel as though it is still something good to have.
			repo.save(u);
			currentUser = u.getId();
			System.out.println("The current user is now: " + currentUser); //spits out who is signed in when someone makes a new user
			return "navPage";
		}else {
			for(User test : repo.findAll()) { //sees if you've chosen a name that already exists by going threw the list of users and 
				if(test.getUserName().equalsIgnoreCase(u.getUserName())) { //checking if your user name matches one that is there. 
					return createUser(model);
				}
			}
		}
		
		
		repo.save(u);
		currentUser = u.getId();
		System.out.println("The current user is now: " + currentUser); //spits out who is signed in when someone makes a new user
		return "navPage";
	}
	
	@PostMapping("/newUnit")
	public String createUnit(Model model) {
		Unit u = new Unit();
		model.addAttribute("newUnit",u);
		return("temp");
	}
	
	@GetMapping("/newUnit")
	public String createUnit(@ModelAttribute Unit u, Model model) {
		List<Army> a = armyRepo.findAll();
		Army test = a.get(0);
		test.getRoster().add(u);
		unitRepo.save(u);
		armyRepo.save(test);
		return"navPage";
	}
	
	@PostMapping("/newArmy") //starts the process of making a new army! 
	public String createArmy(Model model) {
		Army a = new Army();
		Unit un = new Unit(); //Added Unit for same page inputs.
		model.addAttribute("newUnit",un);
		model.addAttribute("newArmy",a);
		return("createArmy");
	}
	
	@GetMapping("/newArmy") //adds an army!						//For same page input
	public String createArmy(@ModelAttribute Army a, @ModelAttribute Unit un, Model model) {
		//List<User> u = repo.findAll();
		User test = repo.getById(currentUser); //this finds the signed in user and adds the items to that user; (may want a catch but we should never have an ID that doesn't exist
		List<Unit> temp = new ArrayList<Unit>();
		a.setRoster(temp);
		unitRepo.save(un); //same page input
		a.getRoster().add(un);
		armyRepo.save(a);
		test.getUsersArmies().add(a);
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
	public String login(@ModelAttribute  User u, Model model) {
		if(repo.findAll().isEmpty()) {
			return createUser(model);
		}else {
			for(User test : repo.findAll()) {  //the below and statement and for loop go threw the whole database to see if the userName exists ignoring case. 
				if(u.getUserName().equalsIgnoreCase(test.getUserName()) && u.getUserPassword().equals(test.getUserPassword())) { //accept for the password which is case sensitive
					currentUser = test.getId();
					System.out.println("The id for that user was " + test.getId() + ", and current User is: " + currentUser); //just to make sure number line up;
					return "navPage";
				}
			}	
		}
		
		
		return loginPage(model);
	}
	
	@GetMapping("/login") //this sends you back to the login page!
	public String loginPage(Model model){
		User u = new User();
		model.addAttribute("user",u);
		System.out.println("Current user was: " + currentUser); //shows who was last signed in
		currentUser = (long) -1;
		System.out.println("Current user is now: " + currentUser); //shows that they are now signed out
		return "loginPage";
	}
	
	@PostMapping("/viewMyUser")
	public String viewMyUser(Model model) {
		List<User> temp = new ArrayList<User>(); 
 		if(repo.findAll().isEmpty()) {
			return createUser(model);
		}else {
			for(User u : repo.findAll()) {
				if(u.getId() == currentUser) {
					temp.add(u);
				}
			}
			model.addAttribute("users", temp);
			return "result";
		}
		
		//return "result";
	}
	
	
	
	
	
	@GetMapping({"/viewUnits"})
	public String viewSavedUnits(Model model) {
		if(unitRepo.findAll().isEmpty()) {
			return addNewUnits(model);
		}
		model.addAttribute("units", unitRepo.findAll());
		return "result";
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
