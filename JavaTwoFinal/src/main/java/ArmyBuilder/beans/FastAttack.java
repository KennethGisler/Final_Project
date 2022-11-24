package ArmyBuilder.beans;

import javax.persistence.Embeddable;

import lombok.Data;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */
@Embeddable
@Data
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
	
	
}
