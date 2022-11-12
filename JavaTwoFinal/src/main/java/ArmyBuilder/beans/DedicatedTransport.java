package ArmyBuilder.beans;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 12, 2022
 */
public class DedicatedTransport extends Unit{
	
	//constructors
	public DedicatedTransport(){ //default no arg constructor
		super();
	}
	
	public DedicatedTransport(String unitName, int cost) { //full constructor
		this.unitName = unitName;
		this.cost = cost;
	}
	
	//methods
			@Override
			public String toString() {
				return "DedicatedTransport: [unitName=" + unitName + ", cost=" + cost + ", type=" + this.getType() +"]";
			}
			@Override
			public String getType() {
				return "Dedicated Transport";
			}
}
