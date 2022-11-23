package ArmyBuilder.beans;

import javax.persistence.Embeddable;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */
@Embeddable
public class Elites{
	private String elite1, elite2, elite3, elite4, elite5, elite6;
	private int cost1, cost2, cost3, cost4, cost5, cost6;
	
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
		this.cost1 = cost1;
		this.cost2 = cost2;
		this.cost3 = cost3;
		this.cost4 = cost4;
		this.cost5 = cost5;
		this.cost6 = cost6;
	}
	
	//getters 
	public String getElite1() {
		return elite1;
	}
	public String getElite2() {
		return elite2;
	}
	public String getElite3() {
		return elite3;
	}
	public String getElite4() {
		return elite4;
	}
	public String getElite5() {
		return elite5;
	}
	public String getElite6() {
		return elite6;
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
	public void setElite1(String elite1) {
		this.elite1 = elite1;
	}
	public void setElite2(String elite2) {
		this.elite2 = elite2;
	}
	public void setElite3(String elite3) {
		this.elite3 = elite3;
	}
	public void setElite4(String elite4) {
		this.elite4 = elite4;
	}
	public void setElite5(String elite5) {
		this.elite5 = elite5;
	}
	public void setElite6(String elite6) {
		this.elite6 = elite6;
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
		return "Elites [elite1=" + elite1 + ", elite2=" + elite2 + ", elite3=" + elite3 + ", elite4=" + elite4
				+ ", elite5=" + elite5 + ", elite6=" + elite6 + ", cost1=" + cost1 + ", cost2=" + cost2 + ", cost3="
				+ cost3 + ", cost4=" + cost4 + ", cost5=" + cost5 + ", cost6=" + cost6 + "]";
	}
	
}
