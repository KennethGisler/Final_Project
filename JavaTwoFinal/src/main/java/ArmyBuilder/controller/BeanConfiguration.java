package ArmyBuilder.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import ArmyBuilder.beans.Army;
import ArmyBuilder.beans.Elites;
import ArmyBuilder.beans.FastAttack;
import ArmyBuilder.beans.HQ;
import ArmyBuilder.beans.HeavySupport;
import ArmyBuilder.beans.LordOfWar;
import ArmyBuilder.beans.Transport;
import ArmyBuilder.beans.Troops;



@Configuration
public class BeanConfiguration {

	@Bean
	public Army army() {
		Army bean = new Army("ArmyName", "FactionName");
		return bean;
	}
	
	@Bean
	public Troops troops() {
		Troops bean = new Troops("troopName","troopCost");
		return bean;
	}
	
	@Bean
	public Elites elites() {
		Elites bean = new Elites("troopName","troopCost");
		return bean;
	}
	@Bean 
	public HQ hq() {
		HQ bean = new HQ();
		return bean;
	}
	
	@Bean
	public HeavySupport heavysupport() {	//heavy support bean
		HeavySupport bean = new HeavySupport();
		return bean;
	}
	
	@Bean
	public FastAttack fastattack() {	//fast attack bean
		FastAttack bean = new FastAttack();
		return bean;
	}
	
	@Bean
	public Transport dedicatedtransport() { //dedicated transport bean
		Transport bean = new Transport();
		return bean;
	}
	
	@Bean
	public LordOfWar lordOfWAr() {	//lord of war bean
		LordOfWar bean = new LordOfWar();
		return bean;
	}
}
