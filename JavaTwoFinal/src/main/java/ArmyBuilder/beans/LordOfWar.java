package ArmyBuilder.beans;

import javax.persistence.Embeddable;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 12, 2022
 */
@Embeddable
public class LordOfWar {
	private String low1, low2, low3, low4, low5;
	private int cost1, cost2,cost3,cost4,cost5;
	
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
		this.cost1 = cost1;
		this.cost2 = cost2;
		this.cost3 = cost3;
		this.cost4 = cost4;
		this.cost5 = cost5;
	}
	
	//getters
	public String getLow1() {
		return low1;
	}
	public String getLow2() {
		return low2;
	}
	public String getLow3() {
		return low3;
	}
	public String getLow4() {
		return low4;
	}
	public String getLow5() {
		return low5;
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
	public int getCost4() {
		return cost4;
	}
	public int getCost5() {
		return cost5;
	}
	
	//setters
	public void setLow1(String low1) {
		this.low1 = low1;
	}
	public void setLow2(String low2) {
		this.low2 = low2;
	}
	public void setLow3(String low3) {
		this.low3 = low3;
	}
	public void setLow4(String low4) {
		this.low4 = low4;
	}
	public void setLow5(String low5) {
		this.low5 = low5;
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
	public void setCost4(int cost4) {
		this.cost4 = cost4;
	}
	public void setCost5(int cost5) {
		this.cost5 = cost5;
	}
	
	//methods
	@Override
	public String toString() {
		return "LordOfWar [low1=" + low1 + ", low2=" + low2 + ", low3=" + low3 + ", low4=" + low4 + ", low5=" + low5
				+ ", cost1=" + cost1 + ", cost2=" + cost2 + ", cost3=" + cost3 + ", cost4=" + cost4 + ", cost5=" + cost5
				+ "]";
	}

	
	
}
