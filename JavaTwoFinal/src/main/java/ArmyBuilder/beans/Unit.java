package ArmyBuilder.beans;

import javax.persistence.Embeddable;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */
@Embeddable
public class Unit {
	protected String unitName; //the units designation or name (Ex: "Crisis Battlesuits", "Leman Russ Battle Tank", "Warboss") 
	protected int cost; //the prive of the unit (this could be the power level or point cost]
	protected String unitType; //what the unit is (ex: "HQ", "Troop", "Heavy Support", ext... )
	
	//constructors
	public Unit() { //default no arg. constructors
		super();
	}
	public Unit(String unitName, int cost) { //full constructor
		this.unitName = unitName;
		this.cost = cost;
		this.unitType = "Unit";
	}
	public Unit(String unitName) { //string constructors
		this.unitName = unitName;
		this.unitType = "Unit";
	}
	
	//getters
	public String getUnitName() {
		return unitName;
	}
	public int getCost() {
		return cost;
	}
	public String getUnitType() {
		return this.unitType;
	}
	
	//setters
	public void setUnitName(String unitName) {
		this.unitName = unitName;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}
	public void setUnitType(String type) {
		this.unitType = type;
	}
	
	//methods
	@Override
	public String toString() {
		return "Unit [unitName=" + unitName + ", cost=" + cost + ", type=" + this.unitType +"]";
	}
}
