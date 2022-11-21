package ArmyBuilder.beans;

import javax.persistence.Embeddable;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 12, 2022
 */
@Embeddable
public class DedicatedTransport extends Unit{
	
	//constructors
	public DedicatedTransport(){ //default no arg constructor
		super();
		this.unitType = "Dedicated Transport";
	}
	
	public DedicatedTransport(String unitName, int cost) { //full constructor
		this.unitName = unitName;
		this.cost = cost;
		this.unitType = "Dedicated Transport";
	}
	
	//methods
			@Override
			public String toString() {
				return "DedicatedTransport: [unitName=" + unitName + ", cost=" + cost + ", type=" + this.unitType +"]";
			}
}
