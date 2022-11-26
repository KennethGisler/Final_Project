package ArmyBuilder.beans;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import lombok.Data;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */

@Data
@Entity
@Embeddable
public class Army {
	@Id
	@GeneratedValue
	long id;
	private String  armyName; //this would be the name of the army that is built (like "Grom's Skull Crushers, or "The 178th Cadian Armord")
	private String factionName;
	
	@OneToMany(cascade=CascadeType.ALL)
	@JoinTable
	private List<Unit> unit;
	
	public Army() {
		super();
	}
	public Army(String armyName, String factionName, List<Unit> unit) {
		this.armyName = armyName;
		this.unit = unit;
		this.factionName = factionName;
	}
	public Army(int id, String armyName, String factionName, List<Unit> unit) {
		this.id = id;
		this.armyName = armyName;
		this.unit = unit;
		this.factionName = factionName;
	}

}
