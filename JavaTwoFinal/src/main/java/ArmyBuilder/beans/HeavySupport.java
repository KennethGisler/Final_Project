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
	}
	public HeavySupport(String unitName, int cost) {
		this.unitName = unitName;
		this.cost = cost;
	}
	
	//methods
		@Override
		public String toString() {
			return "HeavySupport [unitName=" + unitName + ", cost=" + cost + ", type=" + this.getType() +"]";
		}
		@Override
		public String getType() {
			return "Heavy Support";
		}
}
