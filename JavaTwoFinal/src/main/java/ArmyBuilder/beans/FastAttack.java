package ArmyBuilder.beans;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */
public class FastAttack extends Unit{

	//constructors
	public FastAttack() {
		super();
	}
	public FastAttack(String unitName, int cost) {
		this.unitName = unitName;
		this.cost = cost;
	}
	
	//methods
		@Override
		public String toString() {
			return "FastAttack [unitName=" + unitName + ", cost=" + cost + ", type=" + this.getType() +"]";
		}
		@Override
		public String getType() {
			return "Fast Attack";
		}
}
