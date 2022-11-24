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
public class HeavySupport{
	private String hs1, hs2, hs3;
	private int hsCost1, hsCost2, hsCost3;
	
	//constructors
	public HeavySupport() {
		super();
	}
	public HeavySupport(String hs1, String hs2, String hs3, int cost1, int cost2, int cost3) {
		super();
		this.hs1 = hs1;
		this.hs2 = hs2;
		this.hs3 = hs3;
		this.hsCost1 = cost1;
		this.hsCost2 = cost2;
		this.hsCost3 = cost3;
	}

	
	
}
