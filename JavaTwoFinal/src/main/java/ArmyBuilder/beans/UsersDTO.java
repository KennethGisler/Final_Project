/**
 * @author Alexander Kelly - akelly3
 * CIS175 - Fall 2022
 * Nov 27, 2022
 */
package ArmyBuilder.beans;

import lombok.Data;

/**
 * @author 15152
 *
 */
@Data
public class UsersDTO {

	private String userArmy;
	private String userFaction;
	
	public UsersDTO(String userArmy, String userFaction) {
		this.userArmy = userArmy;
		this.userFaction = userFaction;
	}
}
