package ArmyBuilder.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ArmyBuilder.beans.User;

@Repository
public interface ContactRepository extends JpaRepository<User, Long> {

}
