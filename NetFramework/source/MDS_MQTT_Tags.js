/*
This file describes the data structure of the MDS process variables.
Each level in the hierarchy of objects has either a name, or an index
The hierarchical topic names that are managed by the system have a 1:1 correspondence with the name hierarchy
i.e. data for the object "MDS.Incubator.temperature_pv" is available at the MQTT topic "MDS/Incubator/temperature_pv"
*/

/**
* The CodedVessel class is used to model bar-coded cuvettes, test-tubes etc. that can transfer to/from culture
* vessels via aspiration.
*/
class CodedVessel{
	constructor(){
		this.ID = ""; // Unique identifier .. usually a QR code on vessel
		this.max_vol_ul = 0; // max volume, in ul
		this.level_ul = 0; // current volume, in ul
	}
}

/**
* The CultureVessel class is used to model bioreactors
*/
class CultureVessel{
	constructor(){
		this.ID = ""; // Unique identifier .. not necessarily used
		this.max_vol_ul = 0; // max volume, in ul
		this.current_vol_ul = 0; // current volume, in ul
		this.liquid_vol_ul = 0; // current liquid volume, in ul		
	}
}

function makeObjects(className, num){ 
	var retval = new Array; 
	for(var i = 0; i < num; i++){ 
		retval.push(eval("new " + className + "()")) 
	} 
	return retval; 
}
	
MDS_MQTT_TOPICS = 
{MDS:{
	Input:{
		position:makeObjects("CodedVessel",8),
	Incubator:{
		temp_sp:25, // temperature setpoint
		temp_pv:0,  // temperature process value
		cultures:makeObjects("CultureVessel",8)
	}
	Output:
  