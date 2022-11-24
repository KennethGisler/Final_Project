/**
 * @author Alexander Kelly - akelly3
 * CIS175 - Fall 2022
 * Nov 24, 2022
 */
package ArmyBuilder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ArmyBuilder.beans.Unit;

/**
 * @author 15152
 *
 */
@Repository
public interface UnitRepository extends JpaRepository<Unit, Long> {

}
