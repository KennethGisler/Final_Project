package ArmyBuilder.beans;

import javax.persistence.Embeddable;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */
@Embeddable
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
	
	//getters
	public String getHs1() {
		return hs1;
	}
	public String getHs2() {
		return hs2;
	}
	public String getHs3() {
		return hs3;
	}
	public int getCost1() {
		return hsCost1;
	}
	public int getCost2() {
		return hsCost2;
	}
	public int getCost3() {
		return hsCost3;
	}
	
	//setters
	public void setHs1(String hs1) {
		this.hs1 = hs1;
	}
	public void setHs2(String hs2) {
		this.hs2 = hs2;
	}
	public void setHs3(String hs3) {
		this.hs3 = hs3;
	}
	public void setCost1(int cost1) {
		this.hsCost1 = cost1;
	}
	public void setCost2(int cost2) {
		this.hsCost2 = cost2;
	}
	public void setCost3(int cost3) {
		this.hsCost3 = cost3;
	}
	
	//methods
	@Override
	public String toString() {
		return "HeavySupport [hs1=" + hs1 + ", hs2=" + hs2 + ", hs3=" + hs3 + ", cost1=" + hsCost1 + ", cost2=" + hsCost2
				+ ", cost3=" + hsCost3 + "]";
	}
	
	
	
}
