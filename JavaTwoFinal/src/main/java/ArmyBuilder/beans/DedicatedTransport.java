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
public class DedicatedTransport{
	private String dt1, dt2, dt3, dt4, dt5, dt6;
	private int tdCost1, tdCost2, tdCost3,tdCost4, tdCost5,tdCost6;
	
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
		this.tdCost1 = cost1;
		this.tdCost2 = cost2;
		this.tdCost3 = cost3;
		this.tdCost4 = cost4;
		this.tdCost5 = cost5;
		this.tdCost6 = cost6;
	}
	
}