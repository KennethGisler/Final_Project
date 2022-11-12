package ArmyBuilder.beans;

import java.util.List;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */
public class User {
	private String userName; //the users personal user name
	private String userPassword; //the users password to their account
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
	
	//getters
	public String getUserName() {
		return userName;
	}
	public String getUserPassword() {
		return userPassword;
	}
	public List<Army> getUsersArmies() {
		return usersArmies;
	}
	
	//setters
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	public void setUsersArmies(List<Army> usersArmies) {
		this.usersArmies = usersArmies;
	}
	
	//methods
	@Override
	public String toString() {
		return "User [userName=" + userName + ", userPassword=" + userPassword + ", usersArmies=" + usersArmies + "]";
	}
}
