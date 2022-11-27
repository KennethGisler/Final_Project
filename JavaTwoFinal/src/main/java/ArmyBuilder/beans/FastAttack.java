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
public class FastAttack {
	private String fa1;
	private String facost;


	public FastAttack() {
		super();
		this.fa1 = "";
		this.facost = "";
	}

	public FastAttack(String fa1, String facost) {
		super();
		this.fa1 = fa1;
		this.facost = facost;
		
	}

}
