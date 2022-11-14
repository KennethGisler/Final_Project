package ArmyBuilder.beans;

import java.util.List;

import javax.persistence.Embeddable;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */
@Embeddable
public class Faction {
	private String factionName; //the name of the faction used (Tau, Imperial Guard, Orks... ) 
	private List<Unit> roster; //the roster of units making up the army of this faction.
	
	//constructors
	public Faction() { //default no arg constructor
		super();
	}
	public Faction(String factionName, List<Unit> roster) { //full constructor
		this.factionName = factionName;
		this.roster = roster;
	}
	public Faction(String factionName) { //string constructor
		this.factionName = factionName;
	}
	
	//getters
	public String getFactionName() {
		return factionName;
	}
	public List<Unit> getRoster() {
		return roster;
	}
	
	//setters
	public void setFactionName(String factionName) {
		this.factionName = factionName;
	}
	public void setRoster(List<Unit> roster) {
		this.roster = roster;
	}
	
	//methods
	@Override
	public String toString() {
		return "Faction [factionName=" + factionName + ", roster=" + roster + "]";
	}
	
}
