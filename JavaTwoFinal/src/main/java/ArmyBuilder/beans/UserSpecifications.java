/**
 * @author Alexander Kelly - akelly3
 * CIS175 - Fall 2022
 * Nov 27, 2022
 */
package ArmyBuilder.beans;

import javax.persistence.criteria.Join;

import org.springframework.data.jpa.domain.Specification;

/**
 * @author 15152
 *
 */

//Dynamic Query
public class UserSpecifications {

	public static Specification<Users> hasUserName(String username){
		return (root, query, criteriaBuilder) ->
			criteriaBuilder.like(root.<String>get("username"),"%"+username+"%");
	}
	
	public static Specification<Users>hasArmy(String armyName){
		return (root, query, criteriaBuilder) ->{
			Join<Users, Army> usersArmy = root.join("armys");
			return criteriaBuilder.equal(usersArmy.get("name"), armyName);
		};
	}
}
