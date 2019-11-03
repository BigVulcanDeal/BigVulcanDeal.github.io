'use strict';
require("utilityFunctions");
require("S88_classes.js");

/**
 * The RecipeBuilderTriplet class is not used directly. It is just used to generate a formal description of the triples
 * that are used to pre-compile the recipe.
*/
class RecipeBuilderTriple{
	constructor(){
		/**
		 * The fn member is a function that undertakes the detailed steps involved in compiling a given entity into its overall
		 * context in a recipe.  For example, the "fn" for a UnitProcedure results in:
		 *  * the creation of the unit procedure
		 *  * creation of a corresponding Step in the Unit Procedure's parent Recipe Procedure
		 *  * binding of the unit procedure to the step
		 *  * integration of the step into the execution sequence of the parent Recipe Procedure
		*/		
		this.fn = function(){}; // a function that defines how to integrate the entity into its place in the Recipe object tree
		
		/** 
		* @param {String} name a name for the entity associated with this triple, of undefined if there is no name
		*/
		this.name = undefined;
		/** 
		* @param {*[]} args a vararg array of subordinate entities that define the structure of the object tree fragment subordinate to this entity
		*/		
		this.args = []; 
	}
}
	
// The Recipe class creates a new Recipe
// It accepts variable arguments in the form of high-level functions that ultimately build out a skeletal recipe
class RecipeElementBuilder{
   
   // The RecipeElementBuilder expects a string argument that corresponds to one of the following RecipeElementBuilderTypeType enumeration values:
   // ["Procedure","UnitRecipe","UnitProcedure","Operation","Phase","Allocation","RecipeSegment"]
   // Generally, the enumeration value is chosen indirectly.  For example, invocation of Recipe.Unit will call this constructor 
   // with the argument "UnitProcedure"
   constructor(RecipeElementType_enum){ 
      
      // Create a contained RecipeElementType object
	  // and set a unique ID for the element.
      this.RecipeElement = new RecipeElementType();
      this.RecipeElement.ID = genID();
      this.currentSteps = new Array();
	  
      // if we passed in a type name via RecipeElementBuilderType.
      // then check to see if it represents a valid RecipeElementBuilderType enumeration value
      // If so, then use it to set this.RecipeElement.RecipeElementType
      if (inArray(RecipeElementType_enum, RecipeElementType1Type.key)){
         this.RecipeElement.RecipeElementType.key = RecipeElementType_enum;
      }
   }
   
   // The build method is a specialized "constructor" that compiles a particular layer in the recipe tree
   // It does this by unwinding the closures that are used to write the actual recipe logic.
   // Since the recipe tree is essentially hierarchical, this unwinding is recursive.  Each layer in the tree compiles itself,
   // and then delegates compilation of subordinate Recipe Element by calling RecipeElementBuilder.build for each
   // RecipeElementBuilder instance that is associated with those subordinate elements.
   static build(){      
   
      // Execute the recursive logic building stuff iff the RecipeElement is capable of containing logic
      if(this.hasLogic()){
         // Create a Begin RecipeElement
         var beginElement = this.RecipeElement.RecipeElement_col.add();
         beginElement.ID = genID();
         beginElement.RecipeElementType.key = "Begin";
         
         // Create a step for the Begin element
         // and bind it to the Begin element
         var beginStep = this.RecipeElement.ProcedureLogic.Step_col.add();
         beginStep.ID = genID();                  
         beginStep.RecipeElementID = beginElement.ID;
         
         // Set the "current" element to be the beginStep
         this.currentSteps = [beginStep];
         
         // Generally, the arguments collection should be an array of structures of the form ;
         //   name: (either a string or undefined)
         //   fn: a function that will be applied
         //   args: an array of values that are the arguments of the function we're applying
         for(var i in arguments){ 
            var fn = arguments[i].fn;
            if(typeof(fn) == "function"){
               // invoke the function to build up whatever subordinate logic it defines
               var result = fn.apply(this,arguments[i].args);
               
               // if the arg structure has a valid "name" field
               // then use it to bind the value of "result" as a named member of "this"
               var name = arguments[i].name;
               if ((typeof(name) === "String") && (typeof(result !== undefined))){
                  this[name]=result;
               }
            }
         }
         
         // Create an End RecipeElement
         var endElement = this.RecipeElement.RecipeElement_col.add();
         endElement.ID = genID();
         endElement.RecipeElementType.key = "End";
         
         // Create a step for the End element
         // and bind it to the End element
         var endStep = this.RecipeElement.ProcedureLogic.Step_col.add();
         endStep.ID = genID();                  
         endStep.RecipeElementID = endElement.ID;
         
         // Have the current step link to the endStep
         // There should only be one element in the currentSteps array
         // so break if that test fails
         // TODO: Add in logic that fleshes the link out more thoroughly
         if(this.currentSteps.length !== 1) debug;
         var endLink = this.RecipeElement.ProcedureLogic.Link_col.add();
         endLink.ID = genID();
         endLink.LinkType.key = "ControlLink";
         endLink.FromID_col.add().FromIDValue = this.currentSteps[0].ID;
         endLink.ToID_col.add().ToIDValue = endStep.ID;         
      }
   }
   /**
   * The hasLogic() function is used to determine if the encapsulated RecipeElement is capable of containing logic
   * @return {boolean} returns true if the contained RecipeElement can contain logic, false otherwise
   */
   hasLogic(){
      return inArray(this.RecipeElement.RecipeElementType.key,["Recipe","Procedure","UnitRecipe","UnitProcedure","Operation"]);
   }
   
   /**
   * The makeElementAndStep function encapsulates the logic that is involved in making a new recipe element,
   * binding it to a corresponding step and linking the step into the procedure logic of a parent element.
   * @param {RecipeElementBuilder} elementBuilderType a RecipeElementBuilder instance whose RecipeElement member has been initialized using a particular RecipeElementTypeType
   * @param {Object} args is a vararg array of functions that define the executable contents (child elements, control structures etc.) of this element
   * @return {RecipeBuilderTriplet} a {name, fn, args} triplet that is used by the RecipeBuilder to compile the recipe  
   */
   static makeElementAndStep(elementBuilderType, args){
      // Declare a name (which may remain undefined)
      var name;
      
      // See if the args[0] is a string
      // if it is then 
      // - presume its a name for the element that we are defining
      // - put the elementType argument in its place at the head of the args array
      if (typeof(args[0] == "String")){
         name = args[0];
         args = args.slice(1);
      }
      // stick the elementBuilderType at the head of the args array
      args.unshift({elementBuilderType, name});
      
      // Define a function that will be used to construct the logic encapsulated by the element
      var fn = function(){
         // the first argument will always be a reference to RecipeElementBuilder subclass 
		 // that corresponds to the type of S88 object that we are instantiating.
		 // to create a RecipeElementBuilder of the right sort by calling "new"
         var elementBuilder = new arguments[0].elementBuilderType();
		 
		 // if there is a name argument, 
		 // then add it as the first entry in the newly created Recipe Element's 
		 // Description collection
		 if( arguments[0].name !== "undefined"){
			 elementBuilder.RecipeElement.Description_col.push(name);
		 }
         
         // build up the subordinate logic
         RecipeElementBuilder.build.apply(elementBuilder,args);
         
         // Append the new RecipeElement to the RecipeElement collection of this parent
         this.RecipeElement.RecipeElement_col.push(elementBuilder.RecipeElement);
         
         // Create a step for the element
         // Then associate it with the element
         // and then link the step to any preceding element
         var recipeElementStep = this.RecipeElement.ProcedureLogic.Step_col.add();
         recipeElementStep.ID = genID();                  
         recipeElementStep.RecipeElementID = elementBuilder.RecipeElement.ID;
         
         // Have the current element link to the Recipe Procedure step
         // There should only be one element in the currentSteps array
         // so break if that test fails
         // TODO: Add in logic that fleshes the link out more thoroughly
         if(this.currentSteps.length !== 1) debug;
         var newLink = this.RecipeElement.ProcedureLogic.Link_col.add();
         newLink.ID = genID();
         newLink.LinkType.key = "ControlLink";
         newLink.FromID_col.add().FromIDValue = this.currentSteps[0].ID;
         newLink.ToID_col.add().ToIDValue = recipeElementStep.ID;

         // Put the step in the currentSteps[] array
         this.currentSteps[0] = recipeElementStep;
         
         // return the newly created elementBuilder
         return elementBuilder;
      }
      
      // return triplet that the builder will use when building the recipe
      return {name, fn, args};   
   }
   /**
   * The Parallel() function is used to encapsulate parallel logic sequences
   * Containment in a Parallel means that all of the contained declarations are "between"
   * a ParallelDivergent and ParallelConvergent pair of links.  The Parallel function
   * is responsible for:
   * - the fan-out from the element before the Parallel block to the elements at the head of the Parallel block (the divergent part)
   * - the fan-in from the elements at the end of the Parallel block to the element following the Parallel block (the convergent part)
   * Note:
   *   - a "Parallel" does not correspond to a RecipeElement.  Rather it corresponds to a pair of Link Types.
   *   - Items in the Parallel function, and their corresponding steps, should be bound to whatever RecipeElement contains the Parallel
   */  
   static Parallel(){
      var fn = function(){
         // create a parallel divergent and parallel convergent link
         var parallelDivergent = this.RecipeElement.ProcedureLogic.Link_col.add();
         parallelDivergent.LinkType.key = "ParallelDivergent";
         parallelDivergent.ID = genID();
         
         var parallelConvergent = this.RecipeElement.ProcedureLogic.Link_col.add();
         parallelConvergent.LinkType.key = "ParallelConvergent";
         parallelConvergent.ID = genID();
         
        // Have the current element link to the Parallel Divergent link
		// There should only be one element in the currentSteps array
		// so break if that test fails
		// TODO: Add in logic that fleshes the link out more thoroughly
		if(this.currentSteps.length !== 1) debug;
		var newLink = this.RecipeElement.ProcedureLogic.Link_col.add();
		newLink.ID = genID();
		newLink.LinkType.key = "ControlLink";
		newLink.FromID_col.add().FromIDValue = this.currentSteps[0].ID;
		newLink.ToID_col.add().ToIDValue = parallelDivergent.ID;

         // Generally, the arguments collection should be an array of structures of the form:
         //   name: (either a string or undefined)
         //   fn: a function that will be applied
         //   args: an array of values that are the arguments of the function we're applying
         for(var i in arguments){ 
            var fn = arguments[i].fn;
            if(typeof(fn) == "function"){
               
               // Set the current "linkable" element to be the ParallelDivergent object
               // This ensures that each contained "branch" starts at the ParallelDivergent link
               this.currentSteps[0] = parallelDivergent; 
                           
               // invoke the function to build up whatever subordinate logic it defines
               var result = fn.apply(this,arguments[i].args);
               
               // if the arg structure has a valid "name" field
               // then use it to bind the value of "result" as a named member of "this"
			   // TODO: Check to ensure that the name does not conflict with an existing name
			   //       If it does, then throw an error
               var name = arguments[i].name;
               if ((typeof(name) === "string") && (typeof(result !== undefined))){
                  this[name]=result;
               }
               
               // The preceding invocation will normally generate a procedural sub-tree
               // The invocation of the last item in that sub-tree should be recorded in this.currentSteps[0]
               // So create a control link between the item contained in this.currentSteps[0] and the parallelConvergent object.
               
               // -- ensure that there is just one item in the currentSteps collection
               if(this.currentSteps.length === 1){
 
                  // -- ensure that a sub-tree was generated (i.e. that this.currentSteps[0].ID no longer matches parallelDivergent.ID
                  if(this.currentSteps[0].ID !== parallelDivergent.ID){ 
               
                     // -- bind the trailing step to the parallelConvergent object via a control link
					 // TODO: This create, generate UUID, set key pattern is common .. encapsulate it
                     var newLink = this.RecipeElement.ProcedureLogic.Link_col.add();
                     newLink.ID = genID();
                     newLink.LinkType.key = "ControlLink";
                     newLink.FromID_col.add().FromIDValue = this.currentSteps[0].ID;
                     newLink.ToID_col.add().ToIDValue = parallelConvergent.ID;
                     
                     // set this.currentSteps[0].ID to match the    
                     this.currentSteps[0] = parallelDivergent;
                  }
                  else{ debug; } // TODO: Throw an appropriate error
               }
               else{ debug; } // TODO: Throw an appropriate error
            }
         }
         
         // when we arrive here, ensure that the parallel divergent link is stored in this.currentSteps[0]
         this.currentSteps[0] = parallelConvergent;
      }
	  var args = arguments;
      return {fn, args};
   }
   
	static Description(descriptionText){	
		var fn = function(){
			var descriptionText = arguments[0];
			if (typeof(descriptionText) === "string"){
				this.RecipeElement.Description_col.push(descriptionText);			
			}
		}
		
		// check that Description's argument is text that we can add to the RecipeElement's Description collection
		if (typeof(descriptionText) !== "string"){ throw("Description() requires a textual argument"); }
		
		// If the description text is ok, then encapsulate it in the args array
		// and add the encapsulated description text, and a function to insert it into the compilation tree
		var args = [descriptionText];
		return {fn, args};
	}
	
	static Parameter(name, parameterType, dataType, value, description){	
		var fn = function(){
			var parameter = this.RecipeElement.Parameter_col.add();
			parameter.ID = genID();
			parameter.Description = description;
			parameter.ParameterType.value = parameterType;
			var value = parameter.Value_col.add();
			value.DataType.key = dataType;
			value.ValueString_col.push(value);
				
		}
		// load the arguments as a structure in a single-element array.
		// the fn callback will unpack the structure and use it to initialize a parameter declaration
		var args = [{parameterType:parameterType, dataType:dataType, value:value, description:description}];
		return {name, fn, args};
	}
	
	static ProcessParameter(name, dataType, value, description){
		return RecipeElementBuilder.Parameter(name, ParameterType1Type.ProcessParameter, dataType, value, description);
	}
   
}

class OperationElementBuilder extends RecipeElementBuilder{
   
   constructor(){
      // Call parent constructor, instructing it to create an Operation element as the encapsulate recipe elemen type
      super("Operation");
   }   
}

class UnitProcedureBuilder extends RecipeElementBuilder{
	   
   constructor(){
      // Call parent constructor, instructing it to create an Operation element as the encapsulate recipe element type
      super("UnitProcedure");
   }   
   
   // Operation is used to create a subordinate Operation
   static Operation(){
      return RecipeElementBuilder.makeElementAndStep(OperationElementBuilder, Array.from(arguments));
   }
      
}

class RecipeProcedureBuilder extends RecipeElementBuilder{
   
   constructor(){
      // Call parent constructor
      super("Procedure");
     
   }   
   
   // Operation is used to create a subordinate Operation
   static UnitProcedure(){
      return RecipeElementBuilder.makeElementAndStep(UnitProcedureBuilder, Array.from(arguments));
   }
      
}

/** The RecipeBuilder class corresponds to the root of the RecipeElements that collectively define a Recipe.
   Compilation of a recipe is initiated by the RecipeBuilder constructor.  So, to generate a recipe, we do something like:
    @example
		// create a new recipe builder object
		var Recipe = new RecipeBuilder(
		RecipeProcedure( // create a recipe procedure.  Can be referenced by the default name "Procedure"
		Parallel( // create several Unit Procedures that run in parallel
		Unit( "Input", // Unit creates a UnitProcedure object, binds to a step in a parent Procedure, and then wires that step into the parent's ProcedureLogic sequence
		Operation( "Setup", // Operation creates an Operation object, binds to a step in a parent UnitProcedure, and then wires that step into the parent's ProcedureLogic sequence
		// ... etc ...
		)
		)
		)
		)
		);
	
		// If the compilation succeeds, we can  grab an instance of the generated recipe and, say, save it as JSON.
		// For example:
		var RecipeJSON = Recipe.RecipeElement.toJSON();
*/
class RecipeBuilder extends RecipeElementBuilder{
   // Create a MasterRecipe object that we will wrap
   // then call the RecipeElementBuilder constructor
   constructor(){
      super();
      
      // Create a MasterRecipeType object
      // and stuff it in this.RecipeElementBuilder
      // Then add a bogus RecipeElementType.key member initialized to "Recipe" 
      // in order to ensure that the hasLogic function works properly.
      this.RecipeElement = new MasterRecipeType();
      this.RecipeElement.RecipeElementType = {key:"Recipe"};
	  
		
		// See if a name was provided
		// if so, then add it to the Descriptions_col array
		var args = arguments;

	   if (typeof(arguments[0]) == "string"){
			this.RecipeElement.Description_col.push(arguments[0]);
			args = Array.prototype.slice.call(arguments, 1);
	   }

      // Call initialize in order to compile the recipe logic
	  // the arguments collection has a tree of "fn, name, RecipeElementType" triplets
	  // that are used to build up the entire Recipe structure via recursive invocation of
	  // RecipeElementBuilder.build.apply(this,arguments).
	  // The "fn" field of the triplet contains a specialized function that directs the special
	  // actions needed to 
      RecipeElementBuilder.build.apply(this,args);
      
   }
   
   static RecipeProcedure(){
      var args = Array.from(arguments);
      
      // if the first argument is not a string (presumed to be a name)
      // then pre-pend the string "Procedure" to the args in order to set it as default name for the procedure
      if (typeof(args[0] !== "String")){
         args.unshift("Procedure");
      };
      
      // build subordinate logic 
      return RecipeElementBuilder.makeElementAndStep(RecipeProcedureBuilder, args);
   }
}


var Description = RecipeBuilder.Description;
var RecipeProcedure = RecipeBuilder.RecipeProcedure;
var UnitProcedure = RecipeProcedureBuilder.UnitProcedure;
var Operation = UnitProcedureBuilder.Operation;
var Parallel = RecipeElementBuilder.Parallel;
var Parameter = RecipeElementBuilder.Parameter;
var ProcessParameter = RecipeElementBuilder.ProcessParameter;