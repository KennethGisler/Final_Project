package ArmyBuilder.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import ArmyBuilder.beans.Army;
import ArmyBuilder.beans.DedicatedTransport;
import ArmyBuilder.beans.Elites;
import ArmyBuilder.beans.FastAttack;
import ArmyBuilder.beans.Flyer;
import ArmyBuilder.beans.HQ;
import ArmyBuilder.beans.HeavySupport;
import ArmyBuilder.beans.LordOfWar;
import ArmyBuilder.beans.Troops;
import ArmyBuilder.beans.Unit;
import ArmyBuilder.beans.User;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 12, 2022
 */
@Configuration
public class BeanConfiguration {

		@Bean
		public User user() {	//user bean
			User bean = new User();
			return bean;
		}
		
		@Bean
		public Army army() { 	//army bean
			Army bean = new Army();
			return bean;
		}
		
		@Bean 
		public Unit unit() {	//unit bean
			Unit bean = new Unit(); 
			return bean;
		}
		
		@Bean 
		public HQ hq() {	//hq bean
			HQ bean = new HQ();
			return bean;
		}
		
		@Bean
		public Troops troops() {	//troops bean	
			Troops bean = new Troops();
			return bean;
		}
		
		@Bean
		public HeavySupport heavySupport() {	//heavy support bean
			HeavySupport bean = new HeavySupport();
			return bean;
		}
		
		@Bean
		public FastAttack fastAttack() {	//fast attack bean
			FastAttack bean = new FastAttack();
			return bean;
		}
		
		@Bean
		public DedicatedTransport dedicatedTransport() { //dedicated transport bean
			DedicatedTransport bean = new DedicatedTransport();
			return bean;
		}
		
		@Bean
		public LordOfWar lordOfWAr() {	//lord of war bean
			LordOfWar bean = new LordOfWar();
			return bean;
		}
		
		@Bean
		public Elites elites() {
			Elites e = new Elites();
			return e;
		}
		@Bean
		public Flyer flyer() {
			Flyer fly = new Flyer();
			return fly;
		}
		
}
