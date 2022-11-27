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
public class Troops {
private String troop1;
private String tcost;


public Troops() {
	super();
	this.troop1 = "";
	this.tcost = "";
}

public Troops(String troop1, String tcost) {
	super();
	this.troop1 = troop1;
	this.tcost = tcost;
	
}



}
