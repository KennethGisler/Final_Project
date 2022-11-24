package ArmyBuilder.beans;

import javax.persistence.Embeddable;

import lombok.Data;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */
@Embeddable
@Data
public class Troops  {
	String troop1,troop2,troop3,troop4,troop5,troop6;
	int tCost1 ,tCost2, tCost3, tCost4, tCost5 ,tCost6;
	
	//constructors
	public Troops() {
		super();
	}
	public Troops(String troop1, String troop2, String troop3, String troop4, String troop5, String troop6, int cost1,
			int cost2, int cost3, int cost4, int cost5, int cost6) {
		super();
		this.troop1 = troop1;
		this.troop2 = troop2;
		this.troop3 = troop3;
		this.troop4 = troop4;
		this.troop5 = troop5;
		this.troop6 = troop6;
		this.tCost1 = cost1;
		this.tCost2 = cost2;
		this.tCost3 = cost3;
		this.tCost4 = cost4;
		this.tCost5 = cost5;
		this.tCost6 = cost6;
	}
	public Troops(String troop1, int cost1) {
		super();
		this.troop1 = troop1;
		this.tCost1 = cost1;
	}
	
}
