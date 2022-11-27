/**
 * @author Alexander Kelly - akelly3
 * CIS175 - Fall 2022
 * Nov 27, 2022
 */
package ArmyBuilder.beans;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;

import lombok.Data;

/**
 * @author 15152
 * THIS IS THE MAIN CLASS THAT HOLDS THE LIST OF UNITS.
 * WE CAN ADD MORE UNITS TO THE 'troops' BY ADDING MORE VARIABLES IN THE TROOPS CLASS.
 * SCALE OUTWARDS.
 */
@Data
@Entity
public class Army {
	@Id
	@GeneratedValue
private long id;
	private String name;
	private String faction;
@Autowired
private Troops troops;
@Autowired
private Elites elites;
@Autowired
private FastAttack fastattack;
@Autowired
private HeavySupport heavysupport;
@Autowired
private HQ hq;
@Autowired
private LordOfWar lordofwar;
@Autowired
private Transport transport;

public Army() {
	super();
	this.name ="";
	this.faction="";
}
public Army(String name) {
	super();
	this.name = name;
}
public Army(String name, String faction) {
	super();
	this.name = name;
	this.faction = faction;

}
public Army(int id, String name, String faction) {
	super();
	this.id =id;
	this.name=name;
	this.faction=faction;
}


}
