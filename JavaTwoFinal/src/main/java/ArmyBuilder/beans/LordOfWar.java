package ArmyBuilder.beans;

import javax.persistence.Embeddable;

import lombok.Data;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 12, 2022
 */
@Embeddable
@Data
public class LordOfWar {
	private String low1, low2, low3, low4, low5;
	private int lowCost1, lowCost2,lowCost3,lowCost4,lowCost5;
	
	//methods
	public LordOfWar() {
		super();
	}
	public LordOfWar(String low1, String low2, String low3, String low4, String low5, int cost1, int cost2, int cost3,
			int cost4, int cost5) {
		super();
		this.low1 = low1;
		this.low2 = low2;
		this.low3 = low3;
		this.low4 = low4;
		this.low5 = low5;
		this.lowCost1 = cost1;
		this.lowCost2 = cost2;
		this.lowCost3 = cost3;
		this.lowCost4 = cost4;
		this.lowCost5 = cost5;
	}
	
	//methods
	public int getTotal() {
		int tot = lowCost1 + lowCost2 + lowCost3 + lowCost4 + lowCost5;
		return tot; //adds all the costs and returns that value
	}
	
}
