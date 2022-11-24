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
public class Elites{
	private String elite1, elite2, elite3, elite4, elite5, elite6;
	private int eCost1, eCost2, eCost3, eCost4, eCost5, eCost6;
	
	//constructor
	public Elites() {
		super();
	}
	public Elites(String elite1, String elite2, String elite3, String elite4, String elite5, String elite6, int cost1,
			int cost2, int cost3, int cost4, int cost5, int cost6) {
		super();
		this.elite1 = elite1;
		this.elite2 = elite2;
		this.elite3 = elite3;
		this.elite4 = elite4;
		this.elite5 = elite5;
		this.elite6 = elite6;
		this.eCost1 = cost1;
		this.eCost2 = cost2;
		this.eCost3 = cost3;
		this.eCost4 = cost4;
		this.eCost5 = cost5;
		this.eCost6 = cost6;
	}
	
	
}
