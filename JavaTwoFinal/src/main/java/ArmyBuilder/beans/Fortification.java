package ArmyBuilder.beans;

import javax.persistence.Embeddable;

import lombok.Data;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 28, 2022
 */
@Embeddable
@Data
public class Fortification {
	private String fort1, fort2, fort3;
	private int ftCost1, ftCost2,ftCost3;
	
	//constructors
	public Fortification() {
		super();
	}
	public Fortification(String fortName1, String fortName2, String fortName3, int fortCost1, int fortCost2,
			int fortCost3) {
		super();
		this.fort1 = fortName1;
		this.fort2 = fortName2;
		this.fort3 = fortName3;
		this.ftCost1 = fortCost1;
		this.ftCost2 = fortCost2;
		this.ftCost3 = fortCost3;
	}
	
	//methods
		public int getTotal() {
			int tot = ftCost1 + ftCost2 + ftCost3;
			return tot;
		}
}
