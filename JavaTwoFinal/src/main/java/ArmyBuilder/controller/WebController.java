package ArmyBuilder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import ArmyBuilder.repository.ContactRepository;

@Controller
public class WebController {

	@Autowired //communicates with the repository
	ContactRepository repo;
}
