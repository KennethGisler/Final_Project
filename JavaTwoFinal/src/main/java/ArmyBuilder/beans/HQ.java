/**
 * @author Alexander Kelly - akelly3
 * CIS175 - Fall 2022
 * Nov 27, 2022
 */
package ArmyBuilder.beans;

import javax.persistence.Embeddable;

import lombok.Data;

/**
 * @author 15152
 *
 */
@Data
@Embeddable
public class HQ {
	private String hq1;
	private String hqcost;


	public HQ() {
		super();
		this.hq1 = "";
		this.hqcost = "";
	}

	public HQ(String hq1, String hqcost) {
		super();
		this.hq1 = hq1;
		this.hqcost = hqcost;
		
	}

}
