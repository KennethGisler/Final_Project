package ArmyBuilder.beans;

import javax.persistence.Embeddable;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 12, 2022
 */
@Embeddable
public class LordOfWar extends Unit {

	//constructors
	public LordOfWar() {
		super();
		this.unitType = "Lord Of War";
	}

	public LordOfWar(String unitName, int cost) {
		this.unitName = unitName;
		this.cost = cost;
		this.unitType = "Lord Of War";
	}

	//methods
	@Override
	public String toString() {
		return "LordsOfWar: [unitName=" + unitName + ", cost=" + cost + ", type=" + this.unitType +"]";
	}
}
