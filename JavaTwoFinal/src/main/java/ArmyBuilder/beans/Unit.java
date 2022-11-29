package ArmyBuilder.beans;

import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import org.springframework.beans.factory.annotation.Autowired;

import ArmyBuilder.beans.Troops;
import lombok.Data;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */
@Entity
@Data
public class Unit {
	@Id
	@GeneratedValue
	private long id;
	@Autowired
	private Troops troops;
	@Autowired
	private HeavySupport hs;
	@Autowired
	private HQ hq;
	@Autowired
	private FastAttack fa;
	@Autowired
	private DedicatedTransport dt;
	@Autowired
	private LordOfWar low;
	@Autowired
	private Elites e;
	@Autowired
	private Flyer fly;
	@Autowired
	private Fortification fort;
	
}
