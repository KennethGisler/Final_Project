/**
 * @author Alexander Kelly - akelly3
 * CIS175 - Fall 2022
 * Nov 27, 2022
 */
package ArmyBuilder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

import ArmyBuilder.beans.Users;

/**
 * @author 15152
 *
 */
@Repository
public interface UserRepository extends JpaRepository <Users,Long>, JpaSpecificationExecutor<Users>{
	
	
	

}
