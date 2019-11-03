'use strict';
require('S88_classes');

		


	/**
	 * The BatchExec class is used to create an executable batch
	*/
	class BatchExec {
		/**
		 * The constructor is used to create a BatchExec object
		 * the args argument is a single, optional argument that can be used to initialize the object
		 * - Initialization data for the BatchInfo member should be stored in a sub-tree named BatchInfo.
		 *   The data should be structured as a sub-set of a BatchListEntryType object.
		 * - Initialization data for the Recipe member should be stored in a sub-tree named Recipe.
		 *   The data should be structured as a MasterRecipe object.
		 * @example
		 * var myBatchExec = new BatchExec(
		 * 	{
		 * 		BatchInfo:{
		 * 			CampaignID:"SomeCampaign",
		 * 			LotID:"123XYZ",
		 * 			OrderID:"456ABC",
		 * 			ProductID:"Stuff"
		 * 		}
		 * 	});
		*/			
		constructor(args) {
			// a BatchExec instance has, at minimum:
			// - a root BatchInfo member to hold batch record data, and
			// - a Recipe member
			this.BatchInformationType = new BatchInformationType();

		}
		
			if (typeof(args == "object"){
				if(typeof(args.BatchInfo == object){
						
				}
			}

		}
	}
	
