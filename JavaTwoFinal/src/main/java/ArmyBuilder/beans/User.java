package ArmyBuilder.beans;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;

import org.springframework.beans.factory.annotation.Autowired;

import lombok.Data;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */
@Entity
@Data
public class User {
	
	@Id
	@GeneratedValue
	private long id;
	private String userName; //the users personal user name
	private String userPassword; //the users password to their account
	
	@OneToMany
	@JoinTable
	private List<Army> usersArmies; //all of the users armies! (this will be the object displayed on the list of armies)
	
	//constructors
	public User() { //default no arg. constructor
		super();
	}
	public User(String userName, String userPassword, List<Army> usersArmies) { //all arg constructor
		this.userName = userName;
		this.userPassword = userPassword;
		this.usersArmies = usersArmies;
	}
	public User(String userName, String userPassword) { //string constructor
		this.userName = userName;
		this.userPassword = userPassword;
	}
}