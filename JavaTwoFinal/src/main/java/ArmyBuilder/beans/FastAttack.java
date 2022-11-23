package ArmyBuilder.beans;

import javax.persistence.Embeddable;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */
@Embeddable
public class FastAttack{
	private String fa1, fa2,fa3;
	int faCost1, faCost2, faCost3;
	
	//constructors
	public FastAttack() {
		super();
	}
	public FastAttack(String fa1, String fa2, String fa3, int cost1, int cost2, int cost3) {
		super();
		this.fa1 = fa1;
		this.fa2 = fa2;
		this.fa3 = fa3;
		this.faCost1 = cost1;
		this.faCost2 = cost2;
		this.faCost3 = cost3;
	}
	
	//getters
	public String getFa1() {
		return fa1;
	}
	public String getFa2() {
		return fa2;
	}
	public String getFa3() {
		return fa3;
	}
	public int getCost1() {
		return faCost1;
	}
	public int getCost2() {
		return faCost2;
	}
	public int getCost3() {
		return faCost3;
	}
	
	//setters
	public void setFa1(String fa1) {
		this.fa1 = fa1;
	}
	public void setFa2(String fa2) {
		this.fa2 = fa2;
	}
	public void setFa3(String fa3) {
		this.fa3 = fa3;
	}
	public void setCost1(int cost1) {
		this.faCost1 = cost1;
	}
	public void setCost2(int cost2) {
		this.faCost2 = cost2;
	}
	public void setCost3(int cost3) {
		this.faCost3 = cost3;
	}
	
	//methods
	@Override
	public String toString() {
		return "FastAttack [fa1=" + fa1 + ", fa2=" + fa2 + ", fa3=" + fa3 + ", cost1=" + faCost1 + ", faCost2=" + faCost2
				+ ", cost3=" + faCost3 + "]";
	}

	
}
