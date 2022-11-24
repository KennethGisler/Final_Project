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
public class HQ {
	private String hq1,hq2,hq3;
	private int hqCost1, hqCost2, hqCost3;
	
	//constructor
	public HQ() {
		super();
	}
	public HQ(String hq1, String hq2, String hq3, int cost1, int cost2, int cost3) {
		super();
		this.hq1 = hq1;
		this.hq2 = hq2;
		this.hq3 = hq3;
		this.hqCost1 = cost1;
		this.hqCost2 = cost2;
		this.hqCost3 = cost3;
	}
	
}
