package ArmyBuilder.beans;

import javax.persistence.Embeddable;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */
@Embeddable
public class Troops extends Unit {
	
	//constructors
	public Troops() {
		super();
		this.unitType = "Troops";
	}
	public Troops(String unitName, int cost) {
		this.unitName = unitName;
		this.cost = cost;
		this.unitType = "Troops";
	}
	
	
	//methods
		@Override
		public String toString() {
			return "Troops [unitName=" + unitName + ", cost=" + cost + ", type=" + this.unitType +"]";
		}
}
