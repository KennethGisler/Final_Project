/**
 * @author Alexander Kelly - akelly3
 * CIS175 - Fall 2022
 * Nov 27, 2022
 */
package ArmyBuilder.beans;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Data;

/**
 * @author 15152
 *
 */
@Data
@Entity
public class Users {

	@Id
	@GeneratedValue
private long id;
	private String username;
	private String password;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<Army> army;
}
