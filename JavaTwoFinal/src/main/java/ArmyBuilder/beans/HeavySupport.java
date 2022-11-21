package ArmyBuilder.beans;

import javax.persistence.Embeddable;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */
@Embeddable
public class HeavySupport extends Unit{

	//constructors
	public HeavySupport() {
		super();
		this.unitType = "Heavy Support";
	}
	public HeavySupport(String unitName, int cost) {
		this.unitName = unitName;
		this.cost = cost;
		this.unitType = "Heavy Support";
	}
	
	//methods
		@Override
		public String toString() {
			return "HeavySupport [unitName=" + unitName + ", cost=" + cost + ", type=" + this.unitType +"]";
		}
}
