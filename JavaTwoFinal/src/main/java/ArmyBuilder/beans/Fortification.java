package ArmyBuilder.beans;

import javax.persistence.Embeddable;

import lombok.Data;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 28, 2022
 */
@Embeddable
@Data
public class Fortification {
	private String fortName1, fortName2, fortName3;
	private int fortCost1, fortCost2,fortCost3;
	
	//constructors
	public Fortification() {
		super();
	}
	public Fortification(String fortName1, String fortName2, String fortName3, int fortCost1, int fortCost2,
			int fortCost3) {
		super();
		this.fortName1 = fortName1;
		this.fortName2 = fortName2;
		this.fortName3 = fortName3;
		this.fortCost1 = fortCost1;
		this.fortCost2 = fortCost2;
		this.fortCost3 = fortCost3;
	}
}
