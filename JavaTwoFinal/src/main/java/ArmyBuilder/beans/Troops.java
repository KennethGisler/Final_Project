package ArmyBuilder.beans;

import javax.persistence.Embeddable;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */
@Embeddable
public class Troops  {
	String troop1,troop2,troop3,troop4,troop5,troop6;
	int cost1 ,cost2, cost3, cost4, cost5 ,cost6;
	
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
		this.cost1 = cost1;
		this.cost2 = cost2;
		this.cost3 = cost3;
		this.cost4 = cost4;
		this.cost5 = cost5;
		this.cost6 = cost6;
	}
	public Troops(String troop1, int cost1) {
		super();
		this.troop1 = troop1;
		this.cost1 = cost1;
	}
	
	//getters 
	public String getTroop1() {
		return troop1;
	}
	public String getTroop2() {
		return troop2;
	}
	public String getTroop3() {
		return troop3;
	}
	public String getTroop4() {
		return troop4;
	}
	public String getTroop5() {
		return troop5;
	}
	public String getTroop6() {
		return troop6;
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
	public int getCost6() {
		return cost6;
	}
	
	//setters
	public void setTroop1(String troop1) {
		this.troop1 = troop1;
	}
	public void setTroop2(String troop2) {
		this.troop2 = troop2;
	}
	public void setTroop3(String troop3) {
		this.troop3 = troop3;
	}
	public void setTroop4(String troop4) {
		this.troop4 = troop4;
	}
	public void setTroop5(String troop5) {
		this.troop5 = troop5;
	}
	public void setTroop6(String troop6) {
		this.troop6 = troop6;
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
	public void setCost6(int cost6) {
		this.cost6 = cost6;
	}
	
	//methods
	@Override
	public String toString() {
		return "Troops [troop1=" + troop1 + ", troop2=" + troop2 + ", troop3=" + troop3 + ", troop4=" + troop4
				+ ", troop5=" + troop5 + ", troop6=" + troop6 + ", cost1=" + cost1 + ", cost2=" + cost2 + ", cost3="
				+ cost3 + ", cost4=" + cost4 + ", cost5=" + cost5 + ", cost6=" + cost6 + "]";
	}

	
}
