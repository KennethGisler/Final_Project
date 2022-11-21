package ArmyBuilder.beans;

import javax.persistence.Embeddable;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */
@Embeddable
public class Elites extends Unit{
	
	
	//constructos
	public Elites() {
		super();
		this.unitType = "Elites";
	}
	public Elites(String unitName, int cost) {
		this.unitName = unitName;
		this.cost = cost;
		this.unitType = "Elites";
	}
	
	//methods
		@Override
		public String toString() {
			return "Elites [unitName=" + unitName + ", cost=" + cost + ", type=" + this.unitType  +"]";
		}
}
