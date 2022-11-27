/**
 * @author Alexander Kelly - akelly3
 * CIS175 - Fall 2022
 * Nov 27, 2022
 */
package ArmyBuilder.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ArmyBuilder.beans.Army;

/**
 * @author 15152
 *
 */
public interface ArmyRepository extends JpaRepository <Army,Long> {
	

}
