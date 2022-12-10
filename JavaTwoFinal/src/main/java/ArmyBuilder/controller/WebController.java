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
		
		User test = repo.getById(currentUser); //this finds the signed in user and adds the items to that user; (may want a catch but we should never have an ID that doesn't exist
		List<Unit> temp = new ArrayList<Unit>();
		System.out.println("GOT HERE 0");
		a.setRoster(temp);
		System.out.println("GOt HERE 1! " + a.toString());
		unitRepo.delete(un);
		System.out.println("GOT HERE 2! " + un.toString());
		unitRepo.save(un); //same page input
		a.getRoster().add(un);
		System.out.println("ADDED UN TO A! " + a.toString() );
		a.setPointsTotal(un.getTotal());
		System.out.println("Set a value!" + a.toString());
		armyRepo.save(a);
		System.out.println("Saved a? + " + a.toString());
		test.getUsersArmies().add(a);
		System.out.println("Added a to user?");
		repo.save(test);
		System.out.println("saved user");
		return "navPage";
	}
	//return to menu fix
	@PostMapping("/navPage")
	public String navPage(Model model) {
		return("navPage");
	}
	@PostMapping("/viewUsers") //shows you all the users.
	public String viewUsers(Model model) {
		if(repo.findAll().isEmpty()) {
			return createUser(model);
		}else {
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
		List<Army> test = new ArrayList<Army>();
 		if(repo.findAll().isEmpty()) {
			return createUser(model);
		}else {
			for(User u : repo.findAll()) {
				if(u.getId() == currentUser) {
					temp.add(u);
					System.out.println(temp);
					test = u.getUsersArmies();
					System.out.println(test);
				}
			}
			model.addAttribute("users", temp);
			model.addAttribute("armies",test);
			return "result";
		}
		
		//return "result";
	}
	
	@GetMapping("/deleteArmy/{id}") //deletes an army
	public String deleteArmy(@PathVariable("id") long id, Model model) {
		
		Army a = armyRepo.getById(id); //gets the army that the id belongs to
		User u = repo.findById(currentUser).orElse(null); //get's the current user
		ArrayList<Long> unitIds = new ArrayList<Long>(); //for all of the army id's
		
		if(u.getUsersArmies().contains(a)) { //sees if the army is in that uses list
			u.getUsersArmies().remove(a); //removes it from their list
			
			for(Unit un : a.getRoster()) {
				unitIds.add(un.getId());
			}
			a.setRoster(null);
			for(long unitId : unitIds) {
				Unit temp = unitRepo.getById(unitId);
				unitRepo.delete(temp);
			}
			
			armyRepo.delete(a); //delets the entity in the repo
		}else {
			System.out.println("You do not own this army, so you can't delete it!"); //if it's not in your list it spits this out
		}
		return "navPage";
	} 

	@GetMapping("/editArmy/{id}") //edit an army
	public String editArmy(@PathVariable("id") long id, Model model) {
		
		Army a = armyRepo.getById(id); //gets the army that the id belongs to
		User u = repo.findById(currentUser).orElse(null); //get's the current user
		Unit un; //sets up a unit
		
		if(u.getUsersArmies().contains(a)) { //sees if the army is in that uses list
			
				if(a.getRoster().isEmpty()) {//sees if the Army's list is empty
					un = new Unit(); //defaults to a normal Army
				}else {
					un = a.getRoster().get(0);
				}
				
			System.out.println("!!!!! " + un.toString() + " !!!!");
			System.out.println("!!!!! " + a.toString() + " !!!!");
			
			model.addAttribute("newUnit",un);
		    model.addAttribute("newArmy",a);
		    
			return "createArmy";
		}else {
			System.out.println("You do not own this army, so you can't edit it!"); //if it's not in your list it spits this out
			return viewAllInfo(model);
		}
		
	}
	
	@GetMapping("/navPage")
	public String navPage2(Model model) {
		return("navPage");
	}
}
