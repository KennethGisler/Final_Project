package ArmyBuilder.beans;

import javax.persistence.Embeddable;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */
@Embeddable
public class Army {
	private String  armyName; //this would be the name of the army that is built (like "Grom's Skull Crushers, or "The 178th Cadian Armord")
	private Faction faction; //this is the object containing the Faction name and Unit list that makes up the army. 
	
	//constructors
	public Army() { //default no arg. constructor
		super();
	}
	public Army(String armyName, Faction faction) { //all arg. constructor
		this.armyName = armyName;
		this.faction = faction;
	}
	public Army(String armyName) { //string constructor
		this.armyName = armyName;
	}
	public Army(Faction faction) { //faction constructor
		this.faction = faction;
	}
	
	//getters
	public String getArmyName() {
		return armyName;
	}
	public Faction getFaction() {
		return faction;
	}
	
	//setters
	public void setArmyName(String armyName) {
		this.armyName = armyName;
	}
	public void setFaction(Faction faction) {
		this.faction = faction;
	}
	
	//methods
	@Override
	public String toString() {
		return "Army [armyName=" + armyName + ", faction=" + faction + "]";
	}
	
}
