package ArmyBuilder.beans;

import javax.persistence.Embeddable;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */
@Embeddable
public class FastAttack extends Unit{

	//constructors
	public FastAttack() {
		super();
		this.unitType = "Fast Attack";
	}
	public FastAttack(String unitName, int cost) {
		this.unitName = unitName;
		this.cost = cost;
		this.unitType = "Fast Attack";
	}
	
	//methods
		@Override
		public String toString() {
			return "FastAttack [unitName=" + unitName + ", cost=" + cost + ", type=" + this.unitType +"]";
		}

}
