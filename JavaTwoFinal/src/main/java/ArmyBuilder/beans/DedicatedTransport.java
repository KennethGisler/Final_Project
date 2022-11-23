package ArmyBuilder.beans;

import javax.persistence.Embeddable;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 12, 2022
 */
@Embeddable
public class DedicatedTransport{
	private String dt1, dt2, dt3, dt4, dt5, dt6;
	private int cost1, cost2, cost3, cost4, cost5, cost6;
	
	//constructors 
	public DedicatedTransport() {
		super();
	}
	public DedicatedTransport(String dt1, String dt2, String dt3, String dt4, String dt5, String dt6, int cost1,
			int cost2, int cost3, int cost4, int cost5, int cost6) {
		super();
		this.dt1 = dt1;
		this.dt2 = dt2;
		this.dt3 = dt3;
		this.dt4 = dt4;
		this.dt5 = dt5;
		this.dt6 = dt6;
		this.cost1 = cost1;
		this.cost2 = cost2;
		this.cost3 = cost3;
		this.cost4 = cost4;
		this.cost5 = cost5;
		this.cost6 = cost6;
	}
	
	//getters 
	public String getDt1() {
		return dt1;
	}
	public String getDt2() {
		return dt2;
	}
	public String getDt3() {
		return dt3;
	}
	public String getDt4() {
		return dt4;
	}
	public String getDt5() {
		return dt5;
	}
	public String getDt6() {
		return dt6;
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
	public void setDt1(String dt1) {
		this.dt1 = dt1;
	}
	public void setDt2(String dt2) {
		this.dt2 = dt2;
	}
	public void setDt3(String dt3) {
		this.dt3 = dt3;
	}
	public void setDt4(String dt4) {
		this.dt4 = dt4;
	}
	public void setDt5(String dt5) {
		this.dt5 = dt5;
	}
	public void setDt6(String dt6) {
		this.dt6 = dt6;
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
		return "DedicatedTransport [dt1=" + dt1 + ", dt2=" + dt2 + ", dt3=" + dt3 + ", dt4=" + dt4 + ", dt5=" + dt5
				+ ", dt6=" + dt6 + ", cost1=" + cost1 + ", cost2=" + cost2 + ", cost3=" + cost3 + ", cost4=" + cost4
				+ ", cost5=" + cost5 + ", cost6=" + cost6 + "]";
	}
	
	
}
