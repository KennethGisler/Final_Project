package ArmyBuilder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import ArmyBuilder.beans.Army;
import ArmyBuilder.repository.ArmyRepository;


@Controller
public class WebController {
@Autowired
ArmyRepository repo;

	
	
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
	public String addNewContact(@ModelAttribute Army ar, Model model) {
		repo.save(ar);
		return viewArmy(model);
	}
	@GetMapping("edit/{id}")
	public String showUpdateOrder(@PathVariable("id") long id, Model model) {
		Army ar = repo.findById(id).orElse(null);
		model.addAttribute("newArmy", ar);
		return "input";
	}
	@PostMapping("/update/{id}")
	public String reviseOrder(Army ar, Model model) {
		repo.save(ar);
		return viewArmy(model);
	}
	@GetMapping("/delete/{id}")
	public String deleteOrder(@PathVariable("id") long id, Model model) {
		Army ar = repo.findById(id).orElse(null);
		repo.delete(ar);
		return viewArmy(model);
	}


}
