package ArmyBuilder.beans;

import java.util.List;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.springframework.beans.factory.annotation.Autowired;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */
@Entity
public class Army {
	@Id
	@GeneratedValue
	long id;
	private String  armyName; //this would be the name of the army that is built (like "Grom's Skull Crushers, or "The 178th Cadian Armord")
	private int pointsTotal; //total cost of the army! 
	private String factionName;
	@OneToMany
	@JoinTable(name = "unit")
	private List<Unit> roster;
	
	
}
