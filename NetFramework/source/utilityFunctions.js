'use strict';
/**
* The uuid4 method is used to generate a globally unique ID that can be used to give unique labels to S88 objects etc.
* NOTE: calling uuid4() too rapidly will result in duplicate values
* @return {String} a uuid string
*/ 
function blankUUID4() {
	return "00000000-0000-0000-0000-000000000000"
}

function uuid4() {
    //// return uuid of form xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
    var uuid = '', ii;
    for (ii = 0; ii < 32; ii += 1) {
      switch (ii) {
      case 8:
      case 20:
        uuid += '-';
        uuid += (Math.random() * 16 | 0).toString(16);
        break;
      case 12:
        uuid += '-';
        uuid += '4';
        break;
      case 16:
        uuid += '-';
        uuid += (Math.random() * 4 | 8).toString(16);
        break;
      default:
        uuid += (Math.random() * 16 | 0).toString(16);
      }
    }
    return uuid;
  };
  
  /**
  * genID() takes the time and the number of times the routine has been called to generate an ID value that can be guaranteed to be
  * unique within the scope of a document.
  */
  function genID() {
	if (genID.timesUsed == undefined) genID.timesUsed = 0;
	genID.timesUsed++;
	var timesUsedString = genID.timesUsed.toString(16);
	var timeString = Date.now().toString(16);
	return timeString + "-" + timesUsedString; 
  };

/**
* The inArray method is see if a given value (x) is in a given array (xs)
* @param {*} x a value that we are looking for
* @param {*[]} xs an array of values that we are searching for a match on x
* @return {boolean} true if x has a matching value in xs, false otherwise
*/ 
function inArray (x,xs){
	var retval = false;
	for(var i in xs){
		retval = (x == xs[i]);
		if (retval==true) break;
	}
	return retval;
}
  
/**
 * The enum class is used to implement enumerations in the style used for the BatchML and B2MML standards
*/
class EnumClass {
	constructor(baseEnum) {
		this._enum = baseEnum;

		// default to "Other" enum value, with blank "OtherValue" field
		this["_value"] = this._enum["Other"];
		this["_OtherValue"] = "";
	}

	/**
	* The baseClass method just returns "TypedArray"
	* All of the basis classes have a baseClass() method
	* for cases where logic needs to distinguish between the object types,
	*/ 
	baseClass(){ return "EnumClass"; }
	
	/**
	* The valueFromKey method accepts a string key and returns a corresponding value
	* @param {String} key a string that will be converted to a numeric value
	* @return {Number} the numeric equivalent of the key value
	*/ 
	valueFromKey(key){
		return this._enum[key];
	}

	/**
	* The keyFromValue method accepts a value corresponding sring for the enum
	* @param {Number} val a number that will be converted to a string value
	* @return {String} the string equivalent of the numeric argument
	*/ 
	keyFromValue(val){
		return this._enum[this._enum.key[val]];
	}


	/**
	 * The key setter accepts string value for the enum.
	 * If the key is invalid, the enum will be set to "Other",
	 * and its "OtherValue" will be set to the key
	 * @param {String} key the key that we will attempt to set.
	*/ 
	set key(key){
		var test = this._enum[key];
		if(test === undefined){
			this["_value"] = this._enum["Other"];
			this["_OtherValue"] = key;
		}
		else {
			this["_value"] = test;
			this["_OtherValue"] = "";
		}
	}
	
	/**
	 * The key getter returns the current value of the enum as a string
	 * @return {String} the string that represents the current value of the enum
	*/
	get key(){
		return this._enum.key[this["_value"]];
	}

	/**
	 * The value setter sets the numeric value of the enum.
	 * It has no effect if the value is out of bounds.
	 * @param {Number} value the numeric value that we will attempt to set
	*/ 	
	set value(value){
		var key = this._enum.key[value];

		// update value iff there is actually such an enum
		// value must be &gt; 0 and < last upper bound of "values" array
		if((key !== undefined) && (value !== 0)){
			this["_value"] = value;
			this["_OtherValue"] = "";
		}
	}

	/**
	 * The value getter returns the current value of the enum as a string
	 * @return {Number} the string that represents the current value of the enum
	*/
	get value(){
		return this["_value"];
	}

	/**
	 * The OtherValue setter is used to set the enum to "Other". This is a special value that
	 * is generally accompanied by setting the "OtherValue" property of the enum.  It is used in cases
	 * there the normal values of the enum are not suitable.
	 * @param {String} OtherValue the string value that we will attempt to set for OtherValue
	*/
	set OtherValue(OtherValue){
		this["_value"] = this._enum.Other;
		this["_OtherValue"] = String(OtherValue);
	}

	/**
	 * The OtherValue getter is used to retrieve the value of the enum's "OtherValue" property.
	 * @return {String} the string that represents the current "OtherValue" of the enum
	*/	
	get OtherValue(){
		return this["_OtherValue"];
	}
	
	/**
	 * The parseValTree method is used to initialize this enum from a "compatible" javascript object
	 * @param {Object} valTree a tree value that is used for the initialization
	*/	
	parseValTree(valTree){
		// use testVal to see if the tree item has a key property
		// and if that key maps to a valid value
		var testVal = this._enum[valTree["key"]];
		var testOtherValue = valTree["OtherValue"];
		
		// If there is a "key" in the tree fragment,
		// and it is not "Other"
		// Then set our key to match the tree fragment's key
		if( (testVal !== undefined) && (testVal > 0) && (testVal < this._enum["Other"])){
			this.key = testKey;
		}
		
		// if there an OtherValue present
		// and if the key is "Other"
		// or if the key is not specified
		// Then set our "OtherValue" to match the tree fragment's OtherValue
		else if((testOtherValue !== undefined)) {
			this.OtherValue = String(testOtherValue);
		}
		else{
			this.OtherValue = "undefined";
		}
	}	
	
	/**
	 * The toJSON method emits JSON that defines this enum object sub-tree
	 * @return {String} JSON that represents this object
	*/	
	toJSON(){
		var retval;
		if (this["_value"] === this._enum["Other"]){
			retval = '{"OtherValue" : "' + this.OtherValue + '"}';
		}
		else {
			retval = '{"key" : "' + this.key + '"}';
		}
		return retval;
	}
	
	/**
	 * The toJSON method emits JSON that defines this enum object sub-tree
	 * @param {XMLElement} thisElement an XML element that will be loaded with BatchML corresponding to this object
	*/	
	toBatchML(thisElement){
		// create an element to represent the property
		// then stick the value in that element
		var valueNode = thisElement.ownerDocument.createTextNode(String(this.key));
		thisElement.appendChild(valueNode);
		
		// if the enum is "other", then put the OtherValue in the OtherValue attribute
		if (this["_value"] === this._enum["Other"]){
			thisElement.setAttribute("OtherValue",this.OtherValue);
		}
	}
	
}

/**
 * The TypedArray is used to implement a collection of objects that have some degree of type checking.
*/
class TypedArray extends Array {
	constructor(baseClass, num_elements=0){
		super();
		this.ctor = null;
		this.ctor = baseClass.prototype.constructor;
		this.keys={};
		for (var i = 0; i < num_elements; i++){
			this.add()
		}
	}

	/**
	* The baseClass method just returns "TypedArray"
	* All of the basis classes have a baseClass() method
	* for cases where logic needs to distinguish between the object types,
	*/ 
	baseClass(){ return "TypedArray"; }
	
	/**
	 * The add method constructs a new object of the designated S88Base sub-type, adds it to the array
	 * and returns a reference to the newly created object
	 * @return {S88Base} the newly created object
	*/
	add(){
		var newItem = new this.ctor();
		super.push(newItem);
		return newItem;
	}

	/**
	 * The genKeys method iterates over the array and builds a key structure that allows items to be accessed by a particular key
	 * If there is a conflicting key, the first last item with that key will win
	 * @param {String} propName the name of the property that will be used for the key
	 * 
	*/
	genKeys(propName){
		// add a member to propName whose name matches the property that will be used as a key
		this.keys[propName] = {};
		
		// get a local reference to the new key set for convenience
		var keySet = this.keys[propName];
		
		// iterate over the members, adding keys for each to the key set
		for(var i = 0; i < this.length; i++){
			var key = this[i][propName];
			if (key !== undefined){
				keySet[key] = this[i];
			}
		}
	}
	
	/**
	 * The getByKey method uses a key set to retrieve a designated item from the array using textual key
	 * @param {String} keySet the name of the key set to use.
	 * @param {String} key the key value that will be used to retrieve the item.
	 * 
	*/	
	getByKey(keySet,key){
		return this.keys[keySet][key];
	}

	/**
	 * The push method overloads Array.push() in order to preform a type-check before pushing the object.
	 * @param {S88Base} newItem an object of the designated type for this array
	*/
	push(newItem){
		if(newItem.constructor == this.ctor){
			super.push(newItem);
			return newItem;
		}
		else{ throw "bad object type" }
	}
	
	/**
	 * The parseValTree method is used to initialize this TypedArray from an array of "compatible" javascript objects
	 * @param {Object} valTree a tree value that is used for the initialization of the objects in the array
	*/
	parseValTree(valTree){	
		// the value must be a tree for this to work
		for (var i = 0; i < valTree.length; i++) {
			// create a new element and add it
			var newElement = this.add();
			
			// initialize the element from the subordinate valTree fragment
			newElement.parseValTree(valTree[i]);
		} 
	}	
	
	/**
	 * The toJSON method emits JSON that defines this TypedArray, and the entire tree for each object in the array
	 * @return {String} JSON that represents this TypedArray
	*/	
	toJSON(){
		var retval = "[";
		// the value must be a tree for this to work
		for (var i = 0; i < this.length; i++) {
			// precede with a comma, if this is not the first item ..
			if (i > 0){ retval += ","; }
			retval += this[i].toJSON();			
		} 
		retval += "]";
		return retval;
	}
	
	
	
	/**
	 * The toBatchML method appends definitions of this array to the XMLElement that is the parent of the "thisElement" argument
	 * - The "thisElement" element is deleted at the end of this method.
	 * - A TypedArray cannot be used as the root of the BatchML document.
	 * @param {XMLElement} thisElement An XMLElement whose parent element will hold the elements of this array
	*/
	toBatchML(thisElement){
		
		// get the element name from "thisElement"
		var elementName = thisElement.localName;
		
		// for any subsequent items,
		// create an additional element,and then fill it out
		for (var i = 0; i < this.length; i++) {
			// create an element for the item
			// append it to the parent element
			// and then call the item's toBatchML method to fill out the element
			var nextElement = thisElement.ownerDocument.createElement(elementName);
			thisElement.parentElement.append(nextElement);
			this[i].toBatchML(nextElement);			
		} 

		// the "thisElement" generally has the wrong name (trailing "_col")
		// and is always removed
		thisElement.remove();
	}
}


/**
 * The S88Base class is the base class for all of the core objects that are used to define an S88 model.
 * It mainly supports generic logic for 
 * - reading and writing the object tree in BatchML format
 * - reading and writing the object tree in JSON format
 * - performing intelligent copies of one object to another (e.g. generating a ControlRecipe from a MasterRecipe)
*/
class S88Base {

	/**
	* The baseClass method just returns "S88Base"
	* All of the basis classes have a baseClass() method
	* for cases where logic needs to distinguish between the object types,
	*/ 
	constructor(typeInfo){
		this._typeInfo = typeInfo;
	}

	/**
	* The baseClass method just returns "S88Base"
	* All of the basis classes have a baseClass() method
	* for cases where logic needs to distinguish between the object types,
	*/ 
	baseClass(){ return "S88Base"; }

	/**
	* The typeInfo getter returns a structure that describes the internals of this object
	*/ 	
	get typeInfo(){
		return this._typeInfo;
	}
	
	/**
	 * The parseJSON method is used to initialize this TypedArray from "compatible" JSON
	 * @param {String} jsonString a JSON string representing a tree value that can be mapped to this object
	*/	
	parseJSON(jsonString){
		var valTree = JSON.parse(jsonString);
		this.parseValTree(valTree);
	}
	
	/**
	 * The parseValTree method is used to initialize this S88Base object using a "compatible" javascript tree-valued object
	 * @param {Object} valTree a tree value that is used for the "deep" initialization of this object
	*/	
	parseValTree(valTree){
		// iterate over the items in the value tree
		for (var prop in valTree) {
			
			// if this S88Object has a property by the same name, then ...
			if (!prop.startsWith("_") && this._typeInfo[prop] !== undefined) {
				try{
					// get the "typeof" the value ...
					var typeName = typeof(this[prop]);
					
					// if "typeof" returns oject (often the case), then dig a little deeper to get the type name
					if (typeName === "object") {typeName = this[prop].constructor.name};
					
					switch (typeName) {
						
						// if the property is not part of this object then do nothing.
						// this case should never happen anyway, so call the debugger if it does occur
						case "null":
						case "undefined":
							debugger;
							break;
						
						// if the value corresponds to an atomic type,
						// then use casting to ensure (as best we can)
						// the the value is ingested as the proper type.
						case "string":
							this[prop] = String(valTree[prop]);
							break;								
						case "number":
							this[prop] = Number(valTree[prop]);
							break;								
						case "Date":
							this[prop] = new Date(valTree[prop]);
							break;								
						case "Array":
							this[prop] = valTree[prop];
							break;
						// if we get to here, then this *should* be an S88 object
						// which *should" have a parseValTree function.
						// Check that, and call the property's "parseValTree" if it exists, 
						// complain if it doesn't
						default:
							if(typeof(this[prop].parseValTree) === "function"){
								this[prop].parseValTree(valTree[prop]);
							}
							else{
								debugger;
							}
							break;
					}
				}
				catch(e){
					debugger;
				}
			} 
		}		
	}
	
	/**
	 * The toJSON method emits JSON that defines this S88Base sub-type object, and the entire tree beneath it
	 * @return {String} JSON that represents this TypedArray
	*/	
	toJSON(){
	
		var retval = "";

		// iterate over the elements in the _typeInfo array
		// in order to ensure that the elements are generated in the proper order
		for (var j = 0; j < this._typeInfo._elements.length; j++) {
			
			// get the name of the member (prop)
			// and the name of the element that we will generate (elementName)
			var prop = this._typeInfo._elements[j].name;


			try{
				switch(this[prop] ){
					case null:
					case undefined:
						// do nothing ..
						break;
						
					default:
						var typeName = this[prop].constructor.name;
						switch (typeName) {
							case "String":
							case "Number":
							case "Date":
							case "Array":
								retval += ',"' + prop + '":' + JSON.stringify(this[prop]);
								break;
							default:
								// If we get to here, then presume that the field is an S88Object of some sort
								// See if it has a "toJSON" method.  If it does, then invoke it
								// if it doesn't, then complain.
								if( typeof(this[prop].toJSON) == "function"){
									retval += ',"' + prop + '":' + this[prop].toJSON();
								}
								else{
									debugger;
								}
							break;
						}
						break;
				}
			}
			catch(e){}
				
			
		}
		
		// Halt if there are any undefined results while debugging ...
		if( retval.includes("undefined")) debugger;
		
		// trim off leading "," and slap curly braces around the string
		return("{" + retval.substr(1,retval.length-1) + "}");		
	}

	/**
	 * The parseBatchML method is used to read BatchML document into S88 object tree.	
	 * @param {XMLElement} xmlNode an XML fragment representing a tree value that is used for the "deep" initialization of this object
	*/		
	parseBatchML(xmlNode){
		for(var i = 0; i < xmlNode.children.length; i++){
			var node = xmlNode.children[i];
			
			// each node should correspond to a member in the object ...
			var singleMemberName = node.localName;
			var arrayMemberName = singleMemberName + "_col";
			var singleMember = this[singleMemberName];
			var arrayMember = this[arrayMemberName];
			if( singleMember !== undefined ){
				switch (this[singleMemberName].constructor.name) {
					// If value is typed as a String, Number or Date
					// then decode the value using conventional JS techniques
					// that will yield the right data type
					case "String":
						this[singleMemberName] = String(node.innerHTML);
						break;
					case "Number":
						this[singleMemberName] = Number(node.innerHTML);
						break;				
					case "Date":
						this[singleMemberName] = new Date(node.innerHTML);
						break;
					default:
						// if it's an enum, 
						// then invoke slightly different logic, 
						// depending on whether it is a defined value or an "OtherValue"
						if (this[singleMemberName].baseClass() == "EnumClass"){
							// if not "OtherValue", then set using key ...
							if( node.getAttribute("OtherValue") === null){
								this[singleMemberName].key = node.innerHTML;
							}
							// if OtherValue, then set using OtherValue attribute
							else{
								this[singleMemberName].OtherValue = node.innerHTML;
							}
						}
						// If it's some sort of S88 object,
						// then use its parseBatchML method to delegate parsing
						// of its corresponding xml sub-tree
						else if (this[singleMemberName].baseClass() == "S88Base"){
							this[singleMemberName].parseBatchML(node);
						}
						else{
							console.log("error building from BatchML document");
						}
					break;
				}
			}
			else if( arrayMember !== undefined){
				switch (this[arrayMemberName].constructor.name) {
					case "Array":
						this[arrayMemberName].push(node.innerHTML);
						break;
					default:
						if (this[arrayMemberName].baseClass() == "TypedArray"){
							var newElement = this[arrayMemberName].add();
							newElement.parseBatchML(node);
						}
						else{
							console.log("error building from BatchML document");
						}				
					break;
				}		
			}
			else{
				console.log("unrecognized element in BatchML document");
			}
		}
	}
	
	/**
	 * The toBatchML method appends definitions within the "thisElement" argument
	 * @param {XMLElement} thisElement An XMLElement that will embody a tree that represents this object (including all contained objects)
	*/
	toBatchML(thisElement){
		
		// iterate over the elements in the _typeInfo array
		// in order to ensure that the elements are generated in the proper order
		for (var j = 0; j < this._typeInfo._elements.length; j++) {
				
			// get the name of the member (prop)
			// and the name of the element that we will generate (elementName)
			var prop = this._typeInfo._elements[j].name;
			var elementName = this._typeInfo._elements[j].elementName;
			
			try{
				switch(this[prop] ){
					case null:
					case undefined:
						// do nothing ..
						break;
						
					default:
						var typeName = this[prop].constructor.name;
						switch (typeName) {
							case "String":
							case "Number":
							case "Date":
								// create an element to represent the child property
								// then stick the value in that child element
								// then add the child element to the element that represents this object
								var itemElement = thisElement.ownerDocument.createElement(elementName);
								var valueNode = thisElement.ownerDocument.createTextNode(String(this[prop]));
								itemElement.appendChild(valueNode);
								thisElement.append(itemElement);
								break;
							case "Array":
								// if it's an Array, then iterate over the items
								for(var i = 0; i < this[prop].length; i++){
									// create an element to represent the property
									// then stick the value in that element
									// then add the property element to the element for this object
									var itemElement = thisElement.ownerDocument.createElement(elementName);
									var valueNode = thisElement.ownerDocument.createTextNode(String(this[prop][i]));
									itemElement.appendChild(valueNode);
									thisElement.append(itemElement);												
								}
								break;
							default:
								// if the property is a subordinate object
								// then delegate to it to build up the xml
								var itemElement = thisElement.ownerDocument.createElement(elementName);
								thisElement.append(itemElement);										
								this[prop].toBatchML(itemElement);
							break;
						}
						break;
				}
			}
			catch(e){
				debugger;
			}
			
		
		}		
	}
}


/**
 * The AnyType_typeInfo variable defines the members of the AnyType class
*/
var AnyType_typeInfo = Object.freeze({
	
	"_elements":[
	]});
	
/**
* The AnyType class gets special treatment, since it is used to store "non-standard" information
* In this implementation, we permit the AnyType class to store things like:
* - Special functions, such as:
*   - Operator Input Phases
*   - Time Delay phases
*   - Special "pseudo-phases" that have target-specific logic.  This permits a phase to interact with a target
*     without the need for the target to have Equipment Modules or Control Modules.  Note that "pesudo-phases" are generally
*     not a portable part of a recipe.
*/
class AnyType extends S88Base {
	constructor() {	
		super(AnyType_typeInfo);
	}

	/*
	* toJSON overrides S88Base._toJSON with special serialization code that is can to properly encapsulate
	* special functions etc.
	*/			
	toJSON(){
		return AnyType.__toJSON.apply(this);
	}
	
	/*
	* __toJSON is a generic function that implements AnyType._toJSON
    * The idea is that objects contained in an AnyType can be serialized/unserialized using the special AnyType serialization logic	
	*/
	static __toJSON(){	
		var retval = "";
		for(var j in this){
			// do not JSON-ify anything that starts with "_"
			if(!j.startsWith("_")){
				var memberType = typeof(this[j]);

				switch(memberType){
					// if the field is any intrinsic type,
					// then just make the field of the form name:value
					case "boolean":
					case "string":
					case "number":
					case "undefined":					
						retval += ',"' + j + '":' + this[j];
						break;					
					case "function":
						// if a member is a function, then store it as a string
						// The member name will have a "function:" prefix to mark it as a function.
						// e.g. "function:someFun":"function(){ return 1; }"
						// This allows us to invoke special logic when we parse it back in, 
						// so that we can instantiate the member as a function.
						retval += ',"function:' + j + '":';					
						retval += JSON.stringify(this[j].toString());
						break;
					case "object":
						// if the member is a null, then just publish its value
						if (this[j] === null){
							retval += ',"' + j + '":' + this[j];
						}
						else{
							if (this[prop].constructor !== undefined){
								var typeName = this[prop].constructor.name;
								if (typeName === "Date"){
									retval += ',"Date:' + j + '":';					
									retval += JSON.stringify(this[j]);
								}
								else{
									debugger; // in most cases, AnyType.__toJSON.apply() would be the right call
											  // but halt in order to see if there are cases similar to Date
									AnyType.__toJSON.apply(this[prop]);									
								}
							}
							else{ 
								// give __toJSON a try ...
								// under proper circumstances, it will work
								// and this allows deep trees to be stored in an AnyType
								// but first, stop if in debugger, so we can see how we got here
								debugger;
								AnyType.__toJSON.apply(this[prop]);
							}
						}
						break;
					default:
						debugger; // unexpected case .. figure it out ...
				}
			}
		}
		// lop off leading ","
		// and enclose result in "{}"
		retval= "{" + retval.slice(1) + "}";
		return retval;
	}
	
	/**
	 * The parseJSON method is used to initialize this AnyType from "compatible" JSON
	 * @param {String} jsonString a JSON string representing a tree value that can be mapped to this object
	*/	
	parseJSON(jsonString){
		var valTree = JSON.parse(jsonString);
		this.parseValTree(valTree);
	}
	/**
	 * The parseValTree method is used to initialize this AnyType object using a "compatible" javascript tree-valued object
	 * @param {Object} valTree a tree value that is used for the "deep" initialization of this object
	*/	
	parseValTree(valTree){
		// iterate over the items in the value tree
		for (var prop in valTree) {
			
			// Skip any properties that start with "_"
			if (prop.startsWith("_")) {
				// do nothing
			}
			// if the property name starts with "function:" then
			// parse the string use it to add a function to this object
			else if(prop.startsWith("function:")){
				// test that this property is a string
				// and complain if it isn't
				if (typeof(valTree[prop]) === "string"){
					// if the property is a string
					// then build up an eval string that will add the function to this object
					var memberName = prop.split(":")[1];
					eval("this." + memberName +"=" + valTree[prop]);
				}
				else{ debugger; }
			}
			// if the property name starts with "Date:"
			// then instantiate the item as a Date
			else if(prop.startsWith("Date:")){
				// test that this property is a string
				// and complain if it isn't
				if (typeof(valTree[prop]) === "string"){
					// if the property is a string
					// then build up an eval string that will add the function to this object
					var memberName = prop.split(":")[1];
					eval("this." + memberName +"=" + valTree[prop]);
				}
				else{ debugger; }
			}			
			// if this is just a plain-vanilla value
			// then use the default logic to parse it
			else{
				try{
					// get the "typeof" the value ...
					var typeName = typeof(valTree[prop]);
					
					switch (typeName) {						
						// if the value is degenerate, then ignore it
						case "null":
						case "undefined":
							debugger;
							break;
						
						// if the value corresponds to an atomic type,
						// then use casting to ensure (as best we can)
						// the the value is ingested as the proper type.
						case "string":
							this[prop] = String(valTree[prop]);
							break;								
						case "number":
							this[prop] = Number(valTree[prop]);
							break;								
						case "Date":
							this[prop] = new Date(valTree[prop]);
							break;								
						case "Array":
							this[prop] = valTree[prop];
							break;
						// if we get to here, then this *should* be an S88 object
						// which *should" have a parseValTree function.
						// Check that, and call the property's "parseValTree" if it exists, 
						// complain if it doesn't
						default:
							if(typeof(this[prop].parseValTree) === "function"){
								this[prop].parseValTree(valTree[prop]);
							}
							else{
								debugger;
							}
							break;
					}
				}
				catch(e){
					debugger;
				}
			}
		
		}		
	}

	/**
	 * The toBatchML method appends definitions within the "thisElement" argument
	 * @param {XMLElement} thisElement An XMLElement that will embody a tree that represents this object (including all contained objects)
	*/
	toBatchML(thisElement){
		// store items under an AnyType as JSON in a CDATA node
		AnyType._toBatchML.apply(this,[thisElement]);
		var valueNode = thisElement.ownerDocument.createCDATASection(this.toJSON());
		thisElement.appendChild(valueNode);
	}	
	
	/**
	 * The toBatchML method appends definitions within the "thisElement" argument
	 * @param {XMLElement} thisElement An XMLElement that will embody a tree that represents this object (including all contained objects)
	*/
	toBatchML(thisElement){
		// store items under an AnyType as JSON in a CDATA node
		var jsonText = this.toJSON();
		if (jsonText !== ""){
			var valueNode = thisElement.ownerDocument.createCDATASection(this.toJSON());
			thisElement.appendChild(valueNode);
		}
	}

	/**
	 * The parseBatchML method is used to read BatchML document into S88 object tree.	
	 * @param {XMLElement} xmlNode an XML fragment representing a tree value that is used for the "deep" initialization of this object
	*/		
	parseBatchML(xmlNode){
		// See if there is encapsulated JSON
		// if there is, then parse it
		var jsonNode = xmlNode.ownerDocument.evaluate("./text()", xmlNode, null, XPathResult.STRING_TYPE, null);
		if(jsonNode.stringValue !== ""){
			this.parseJSON(jsonNode.stringValue);
		}
	}
	
}
	

