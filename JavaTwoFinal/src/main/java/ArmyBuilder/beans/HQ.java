package ArmyBuilder.beans;

import javax.persistence.Embeddable;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */
@Embeddable
public class HQ extends Unit{
	
	//constructors
	public HQ() {
	  super();
	  this.unitType = "HQ";
    }
	public HQ(String unitName, int cost) {
		this.unitName = unitName;
		this.cost = cost;
		this.unitType = "HQ";
	}
	
	
	//methods
	@Override
	public String toString() {
		return "HQ [unitName=" + unitName + ", cost=" + cost + ", type=" + this.unitType +"]";
	}
}
