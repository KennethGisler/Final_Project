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
public class Flyer {
	String flyName1, flyName2;
	int flyCost1, flyCost2;
	
	//constructors
	public Flyer() {
		super();
	}
	public Flyer(String flyName1, String flyName2, int flyCost1, int flyCost2) {
		super();
		this.flyName1 = flyName1;
		this.flyName2 = flyName2;
		this.flyCost1 = flyCost1;
		this.flyCost2 = flyCost2;
	}
	
}
