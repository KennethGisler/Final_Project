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
	
	//Goes to a list of the units, or goes to Add New units if list is empty.
	//We need a object to select to make a viewUnits page or it will have errors.	
	/*@GetMapping({"/viewUnits"})
	public String viewUnits(Model model) {
		if(repo.findAll().isEmpty()) {
			return addNewUnits(model);
		}
		model.addAttribute("newUnits", repo.findAll());
		return "viewUnits";
	}*/
	
	//Adds new units to the page
	@GetMapping("/addUnit")
	private String addNewUnits(Model model) {
		Unit u = new Unit();
		model.addAttribute("newUnits",u);
		return "addUnit";
	}
	
	//This returns error "Type mismatch: cannot convert from User to Army" it's needed to perform CRUD
		//If you look at these methods, you can see why we need a 'list of units' to carry in the 'list of armies'.
	/*
	 * 
	 //This would be to save the selected Units to the list of Armies
	@PostMapping("/inputUnits")
	public String addNewContact(@ModelAttribute Unit u, Model model) {
		repo.save(u);
		return viewUnits(model);
	}
	
	//This would be to edit the selected Units in the list of Armies
	@GetMapping("edit/{id}")
	public String showUpdateOrder(@PathVariable("id") long id, Model model) {
		Unit u = repo.findById(id).orElse(null);
		model.addAttribute("newUnits", u);
		return "addUnit";
	}
	
	//Saves the edited unit selection to the list of Armies
	@PostMapping("/update/{id}")
	public String reviseOrder(Unit u, Model model) {
		repo.save(u);
		return viewUnits(model);
	}
	
	//Deletes the list of units
	@GetMapping("/delete/{id}")
	public String deleteOrder(@PathVariable("id") long id, Model model) {
		Unit u = repo.findById(id).orElse(null);
		repo.delete(u);
		return viewUnits(model);
	}
	
*/

}
