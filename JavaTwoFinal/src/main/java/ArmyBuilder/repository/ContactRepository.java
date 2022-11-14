package ArmyBuilder.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import ArmyBuilder.beans.User;
public interface ContactRepository extends JpaRepository<User, Long> {

}
