package ArmyBuilder.beans;

import javax.persistence.Embeddable;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */
@Embeddable
public class HQ {
	private String hq1,hq2,hq3;
	private int cost1, cost2, cost3;
	
	//constructor
	public HQ() {
		super();
	}
	public HQ(String hq1, String hq2, String hq3, int cost1, int cost2, int cost3) {
		super();
		this.hq1 = hq1;
		this.hq2 = hq2;
		this.hq3 = hq3;
		this.cost1 = cost1;
		this.cost2 = cost2;
		this.cost3 = cost3;
	}
	
	//getters
	public String getHq1() {
		return hq1;
	}
	public String getHq2() {
		return hq2;
	}
	public String getHq3() {
		return hq3;
	}
	public int getCost1() {
		return cost1;
	}
	public int getCost2() {
		return cost2;
	}
	public int getCost3() {
		return cost3;
	}
	
	//setters
	public void setHq1(String hq1) {
		this.hq1 = hq1;
	}
	public void setHq2(String hq2) {
		this.hq2 = hq2;
	}
	public void setHq3(String hq3) {
		this.hq3 = hq3;
	}
	public void setCost1(int cost1) {
		this.cost1 = cost1;
	}
	public void setCost2(int cost2) {
		this.cost2 = cost2;
	}
	public void setCost3(int cost3) {
		this.cost3 = cost3;
	}
	
	//methods
	@Override
	public String toString() {
		return "HQ [hq1=" + hq1 + ", hq2=" + hq2 + ", hq3=" + hq3 + ", cost1=" + cost1 + ", cost2=" + cost2 + ", cost3="
				+ cost3 + "]";
	}

	
}
