package ArmyBuilder.beans;

import java.util.List;

import javax.persistence.Embeddable;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.Data;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */
@Embeddable
@Data
public class Faction {
	
	private String factionName; //the name of the faction used (Tau, Imperial Guard, Orks... ) 
	//@OneToMany
	private Unit roster; //the roster of units making up the army of this faction.
	
	//constructors
	public Faction() { //default no arg constructor
		super();
	}
	public Faction(String factionName, Unit roster) { //full constructor
		this.factionName = factionName;
		this.roster = roster;
	}
	public Faction(String factionName) { //string constructor
		this.factionName = factionName;
	}
	
}
