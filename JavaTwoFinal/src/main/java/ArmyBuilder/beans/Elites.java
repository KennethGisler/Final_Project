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
public class Elites {
private String elite1;
private String ecost;

public Elites() {
	super();
	this.elite1 = "";
	this.ecost ="";
	
}

public Elites(String elite1, String ecost) {
	super();
	this.elite1 = elite1;
	this.ecost = ecost;
}

}
