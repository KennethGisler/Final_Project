package ArmyBuilder.beans;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */
public class Unit {
	protected String unitName; //the units designation or name (Ex: "Crisis Battlesuits", "Leman Russ Battle Tank", "Warboss") 
	protected int cost; //the prive of the unit (this could be the power level or point cost]
	
	//constructors
	public Unit() { //default no arg. constructors
		super();
	}
	public Unit(String unitName, int cost) { //full constructor
		this.unitName = unitName;
		this.cost = cost;
	}
	public Unit(String unitName) { //string constructors
		this.unitName = unitName;
	}
	
	//getters
	public String getUnitName() {
		return unitName;
	}
	public int getCost() {
		return cost;
	}
	
	//setters
	public void setUnitName(String unitName) {
		this.unitName = unitName;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}
	
	//methods
	@Override
	public String toString() {
		return "Unit [unitName=" + unitName + ", cost=" + cost + ", type=" + this.getType() +"]";
	}
	public String getType() {
		return "Unit";
	}
	
}
