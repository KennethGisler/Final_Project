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
	}

	public LordOfWar(String unitName, int cost) {
		this.unitName = unitName;
		this.cost = cost;
	}

	//methods
	@Override
	public String toString() {
		return "LordsOfWar: [unitName=" + unitName + ", cost=" + cost + ", type=" + this.getType() +"]";
	}
	@Override
	public String getType() {
		return "Lord Of War";
	}
}
