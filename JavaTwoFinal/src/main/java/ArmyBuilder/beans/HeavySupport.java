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
public class HeavySupport {
	private String heavy1;
	private String hvcost;


	public HeavySupport() {
		super();
		this.heavy1 = "";
		this.hvcost = "";
	}

	public HeavySupport(String heavy1, String hvcost) {
		super();
		this.heavy1 = heavy1;
		this.hvcost = hvcost;
		
	}

}
