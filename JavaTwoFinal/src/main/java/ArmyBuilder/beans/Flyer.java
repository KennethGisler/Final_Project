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
	String flyer1, flyer2;
	int flCost1, flCost2;
	
	//constructors
	public Flyer() {
		super();
	}
	public Flyer(String flyer1, String flyer2, int flyCost1, int flyCost2) {
		super();
		this.flyer1 = flyer1;
		this.flyer2 = flyer2;
		this.flCost1 = flyCost1;
		this.flCost2 = flyCost2;
	}
	
	//methods
	public int getTotal() {
		int tot = flCost1 + flCost2;
		return tot;
	}
}
