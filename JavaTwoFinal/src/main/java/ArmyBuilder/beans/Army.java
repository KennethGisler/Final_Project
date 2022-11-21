package ArmyBuilder.beans;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

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
	private int pointsTotal; //total cost of the army! [may be removed]
	//@Autowired
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
	public int getPointsTotal() {
		return this.pointsTotal;
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
