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
	String fly1, fly2;
	int flCost1, flCost2;
	
	//constructors
	public Flyer() {
		super();
	}
	public Flyer(String flyName1, String flyName2, int flyCost1, int flyCost2) {
		super();
		this.fly1 = flyName1;
		this.fly2 = flyName2;
		this.flCost1 = flyCost1;
		this.flCost2 = flyCost2;
	}
	
	//methods
	public int getTotal() {
		int tot = flCost1 + flCost2;
		return tot;
	}
}
