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
public class Transport {

private String trans1;
private String transcost;

public Transport(){
	super();
	this.trans1 ="";
	this.transcost = "";
}

public Transport(String trans1, String transcost) {
	super();
	this.trans1 = trans1;
	this.transcost = transcost;
	
}
}
