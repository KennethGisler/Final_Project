package ArmyBuilder.beans;

/**
 * Kenneth Gisler - kgisler@dmacc.edu
 * CIS171 22149
 * Nov 11, 2022
 */
public class Elites extends Unit{
	
	
	//constructos
	public Elites() {
		super();
	}
	public Elites(String unitName, int cost) {
		this.unitName = unitName;
		this.cost = cost;
	}
	
	//methods
		@Override
		public String toString() {
			return "Elites [unitName=" + unitName + ", cost=" + cost + ", type=" + this.getType() +"]";
		}
		@Override
		public String getType() {
			return "Elites";
		}
}
