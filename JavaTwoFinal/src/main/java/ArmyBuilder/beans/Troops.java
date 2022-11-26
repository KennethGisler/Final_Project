package ArmyBuilder.beans;

import javax.persistence.Embeddable;

import lombok.Data;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */

@Data
@Embeddable
public class Troops{
	String troop1;
	/*String troop2;
	String troop3;
	String troop4;
	String troop5;
	String troop6;*/
	String tcost1;
	/*String tcost2;
	String tcost3;
	String tcost4;
	String tcost5;
	String tcost6;*/
	
	//constructors
	public Troops() {
		super();
	}
	
	/*public Troops(String troop1, String troop2, String troop3, String troop4, String troop5, String troop6, String tcost1,
			String tcost2, String tcost3, String tcost4, String tcost5, String tcost6) {
		super();
		this.troop1 = troop1;
		this.troop2 = troop2;
		this.troop3 = troop3;
		this.troop4 = troop4;
		this.troop5 = troop5;
		this.troop6 = troop6;
		this.tcost1 = tcost1;
		this.tcost2 = tcost2;
		this.tcost3 = tcost3;
		this.tcost4 = tcost4;
		this.tcost5 = tcost5;
		this.tcost6 = tcost6;
	}*/
	
	public Troops(String troop1, String tcost1) {
		super();
		this.troop1 = troop1;
		this.tcost1 = tcost1;
	}
	
}
