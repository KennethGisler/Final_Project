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
	public Fortification(String ft1, String ft2, String ft3, int ftCost1, int ftCost2,
			int ftCost3) {
		super();
		this.fort1 = ft1;
		this.fort2 = ft2;
		this.fort3 = ft3;
		this.ftCost1 = ftCost1;
		this.ftCost2 = ftCost2;
		this.ftCost3 = ftCost3;
	}
	
	//methods
		public int getTotal() {
			int tot = ftCost1 + ftCost2 + ftCost3;
			return tot;
		}
}
