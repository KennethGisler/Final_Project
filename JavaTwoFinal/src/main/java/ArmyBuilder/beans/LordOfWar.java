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
public class LordOfWar {

private String low1;
private String lcost;

public LordOfWar(){
	super();
	this.low1 ="";
	this.lcost = "";
}

public LordOfWar(String low1, String lcost) {
	super();
	this.low1 = low1;
	this.lcost = lcost;
	
}

}
