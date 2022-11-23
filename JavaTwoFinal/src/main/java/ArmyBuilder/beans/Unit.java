package ArmyBuilder.beans;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.springframework.beans.factory.annotation.Autowired;

import ArmyBuilder.beans.Troops;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */
@Entity
public class Unit {
	@Id
	@GeneratedValue
	private Long id;
	@Autowired
	private Troops troops;
	@Autowired
	private HeavySupport heavySupport;
	@Autowired
	private HQ hq;
	@Autowired
	private FastAttack fastAttack;
	@Autowired
	private DedicatedTransport dt;
	@Autowired
	private LordOfWar low;
	
}
