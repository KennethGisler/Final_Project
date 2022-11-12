package ArmyBuilder.beans;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */
public class HQ extends Unit{
	
	//constructors
	public HQ() {
	  super();
    }
	public HQ(String unitName, int cost) {
		this.unitName = unitName;
		this.cost = cost;
	}
	
	
	//methods
	@Override
	public String toString() {
		return "HQ [unitName=" + unitName + ", cost=" + cost + ", type=" + this.getType() +"]";
	}
	@Override
	public String getType() {
		return "HQ";
	}
	
}
