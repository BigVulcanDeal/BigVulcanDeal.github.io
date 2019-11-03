'use strict';
require("utilityFunctions");
	/**
	 * The BatchListEntryType1Type variable defines the enumerations associated for the BatchListEntryType1Type type
	*/
	var BatchListEntryType1Type = Object.freeze({
		Campaign:1,Batch:2,UnitProcedure:3,Operation:4,Phase:5,Other:6
		,key:["","Campaign","Batch","UnitProcedure","Operation","Phase","Other"]		
		});
	
	/**
	 * The BatchListEntryTypeType wraps the enumeration values of the BatchListEntryType1Type type
	*/
	class BatchListEntryTypeType extends EnumClass	 {
		constructor() {
		    super(BatchListEntryType1Type);
		}
	}



	/**
	 * The ConnectionType1Type variable defines the enumerations associated for the ConnectionType1Type type
	*/
	var ConnectionType1Type = Object.freeze({
		MaterialMovement:1,Other:2
		,key:["","MaterialMovement","Other"]		
		});
	
	/**
	 * The ConnectionTypeType wraps the enumeration values of the ConnectionType1Type type
	*/
	class ConnectionTypeType extends EnumClass	 {
		constructor() {
		    super(ConnectionType1Type);
		}
	}



	/**
	 * The DataInterpretation1Type variable defines the enumerations associated for the DataInterpretation1Type type
	*/
	var DataInterpretation1Type = Object.freeze({
		Constant:1,Reference:2,Equation:3,External:4,Other:5
		,key:["","Constant","Reference","Equation","External","Other"]		
		});
	
	/**
	 * The DataInterpretationType wraps the enumeration values of the DataInterpretation1Type type
	*/
	class DataInterpretationType extends EnumClass	 {
		constructor() {
		    super(DataInterpretation1Type);
		}
	}



	/**
	 * The DataType1Type variable defines the enumerations associated for the DataType1Type type
	*/
	var DataType1Type = Object.freeze({
		string:1,byte:2,unsignedByte:3,binary:4,integer:5,positiveInteger:6,negativeInteger:7,nonNegativeInteger:8,nonPositiveInteger:9,int:10,unsignedInt:11,long:12,unsignedLong:13,short:14,unsignedShort:15,decimal:16,float:17,double:18,boolean:19,time:20,timeInstant:21,timePeriod:22,duration:23,date:24,month:25,year:26,century:27,recurringDay:28,recurringDate:29,recurringDuration:30,Name:31,QName:32,NCName:33,uriReference:34,language:35,ID:36,IDREF:37,IDREFS:38,ENTITY:39,ENTITIES:40,NOTATION:41,NMTOKEN:42,NMTOKENS:43,Enumeration:44,Other:45
		,key:["","string","byte","unsignedByte","binary","integer","positiveInteger","negativeInteger","nonNegativeInteger","nonPositiveInteger","int","unsignedInt","long","unsignedLong","short","unsignedShort","decimal","float","double","boolean","time","timeInstant","timePeriod","duration","date","month","year","century","recurringDay","recurringDate","recurringDuration","Name","QName","NCName","uriReference","language","ID","IDREF","IDREFS","ENTITY","ENTITIES","NOTATION","NMTOKEN","NMTOKENS","Enumeration","Other"]		
		});
	
	/**
	 * The DataTypeType wraps the enumeration values of the DataType1Type type
	*/
	class DataTypeType extends EnumClass	 {
		constructor() {
		    super(DataType1Type);
		}
	}



	/**
	 * The Depiction1Type variable defines the enumerations associated for the Depiction1Type type
	*/
	var Depiction1Type = Object.freeze({
		None:1,Line:2,ID:3,LineAndID:4,LineAndArrow:5,LineArrowAndID:6,Other:7
		,key:["","None","Line","ID","LineAndID","LineAndArrow","LineArrowAndID","Other"]		
		});
	
	/**
	 * The DepictionType wraps the enumeration values of the Depiction1Type type
	*/
	class DepictionType extends EnumClass	 {
		constructor() {
		    super(Depiction1Type);
		}
	}



	/**
	 * The EquipmentElementLevel1Type variable defines the enumerations associated for the EquipmentElementLevel1Type type
	*/
	var EquipmentElementLevel1Type = Object.freeze({
		Enterprise:1,Site:2,Area:3,ProcessCell:4,Unit:5,EquipmentModule:6,ControlModule:7,Other:8
		,key:["","Enterprise","Site","Area","ProcessCell","Unit","EquipmentModule","ControlModule","Other"]		
		});
	
	/**
	 * The EquipmentElementLevelType wraps the enumeration values of the EquipmentElementLevel1Type type
	*/
	class EquipmentElementLevelType extends EnumClass	 {
		constructor() {
		    super(EquipmentElementLevel1Type);
		}
	}



	/**
	 * The EquipmentElementType1Type variable defines the enumerations associated for the EquipmentElementType1Type type
	*/
	var EquipmentElementType1Type = Object.freeze({
		Class:1,Element:2,Other:3
		,key:["","Class","Element","Other"]		
		});
	
	/**
	 * The EquipmentElementTypeType wraps the enumeration values of the EquipmentElementType1Type type
	*/
	class EquipmentElementTypeType extends EnumClass	 {
		constructor() {
		    super(EquipmentElementType1Type);
		}
	}



	/**
	 * The EquipmentProceduralElementType1Type variable defines the enumerations associated for the EquipmentProceduralElementType1Type type
	*/
	var EquipmentProceduralElementType1Type = Object.freeze({
		Procedure:1,UnitProcedure:2,Operation:3,Phase:4,Other:5
		,key:["","Procedure","UnitProcedure","Operation","Phase","Other"]		
		});
	
	/**
	 * The EquipmentProceduralElementTypeType wraps the enumeration values of the EquipmentProceduralElementType1Type type
	*/
	class EquipmentProceduralElementTypeType extends EnumClass	 {
		constructor() {
		    super(EquipmentProceduralElementType1Type);
		}
	}



	/**
	 * The FromType1Type variable defines the enumerations associated for the FromType1Type type
	*/
	var FromType1Type = Object.freeze({
		Step:1,Transition:2,Link:3,Other:4
		,key:["","Step","Transition","Link","Other"]		
		});
	
	/**
	 * The FromTypeType wraps the enumeration values of the FromType1Type type
	*/
	class FromTypeType extends EnumClass	 {
		constructor() {
		    super(FromType1Type);
		}
	}



	/**
	 * The IDScope1Type variable defines the enumerations associated for the IDScope1Type type
	*/
	var IDScope1Type = Object.freeze({
		External:1,Internal:2,Other:3
		,key:["","External","Internal","Other"]		
		});
	
	/**
	 * The IDScopeType wraps the enumeration values of the IDScope1Type type
	*/
	class IDScopeType extends EnumClass	 {
		constructor() {
		    super(IDScope1Type);
		}
	}



	/**
	 * The LinkType1Type variable defines the enumerations associated for the LinkType1Type type
	*/
	var LinkType1Type = Object.freeze({
		ControlLink:1,TransferLink:2,SynchronizationLink:3,ParallelDivergent:4,ParallelConvergent:5,SerialDivergent:6,SerialConvergent:7,Other:8
		,key:["","ControlLink","TransferLink","SynchronizationLink","ParallelDivergent","ParallelConvergent","SerialDivergent","SerialConvergent","Other"]		
		});
	
	/**
	 * The LinkTypeType wraps the enumeration values of the LinkType1Type type
	*/
	class LinkTypeType extends EnumClass	 {
		constructor() {
		    super(LinkType1Type);
		}
	}



	/**
	 * The Mode1Type variable defines the enumerations associated for the Mode1Type type
	*/
	var Mode1Type = Object.freeze({
		Automatic:1,SemiAutomatic:2,Manual:3,Other:4
		,key:["","Automatic","SemiAutomatic","Manual","Other"]		
		});
	
	/**
	 * The ModeType wraps the enumeration values of the Mode1Type type
	*/
	class ModeType extends EnumClass	 {
		constructor() {
		    super(Mode1Type);
		}
	}



	/**
	 * The ParameterType1Type variable defines the enumerations associated for the ParameterType1Type type
	*/
	var ParameterType1Type = Object.freeze({
		ProcessInput:1,ProcessOutput:2,ProcessParameter:3,Other:4
		,key:["","ProcessInput","ProcessOutput","ProcessParameter","Other"]		
		});
	
	/**
	 * The ParameterTypeType wraps the enumeration values of the ParameterType1Type type
	*/
	class ParameterTypeType extends EnumClass	 {
		constructor() {
		    super(ParameterType1Type);
		}
	}



	/**
	 * The RecipeElementType1Type variable defines the enumerations associated for the RecipeElementType1Type type
	*/
	var RecipeElementType1Type = Object.freeze({
		Procedure:1,UnitRecipe:2,UnitProcedure:3,Operation:4,Phase:5,Allocation:6,Begin:7,End:8,RecipeSegment:9,Other:10
		,key:["","Procedure","UnitRecipe","UnitProcedure","Operation","Phase","Allocation","Begin","End","RecipeSegment","Other"]		
		});
	
	/**
	 * The RecipeElementTypeType wraps the enumeration values of the RecipeElementType1Type type
	*/
	class RecipeElementTypeType extends EnumClass	 {
		constructor() {
		    super(RecipeElementType1Type);
		}
	}



	/**
	 * The ScaledType variable defines the enumerations associated for the ScaledType type
	*/
	var ScaledType = Object.freeze({
		Yes:1,No:2
		,key:["","Yes","No"]		
		});
	
	/**
	 * The Status1Type variable defines the enumerations associated for the Status1Type type
	*/
	var Status1Type = Object.freeze({
		Idle:1,Running:2,Complete:3,Pausing:4,Paused:5,Holding:6,Held:7,Restarting:8,Stopping:9,Stopped:10,Aborting:11,Aborted:12,Other:13
		,key:["","Idle","Running","Complete","Pausing","Paused","Holding","Held","Restarting","Stopping","Stopped","Aborting","Aborted","Other"]		
		});
	
	/**
	 * The StatusType wraps the enumeration values of the Status1Type type
	*/
	class StatusType extends EnumClass	 {
		constructor() {
		    super(Status1Type);
		}
	}



	/**
	 * The ToType1Type variable defines the enumerations associated for the ToType1Type type
	*/
	var ToType1Type = Object.freeze({
		Step:1,Transition:2,Link:3,Other:4
		,key:["","Step","Transition","Link","Other"]		
		});
	
	/**
	 * The ToTypeType wraps the enumeration values of the ToType1Type type
	*/
	class ToTypeType extends EnumClass	 {
		constructor() {
		    super(ToType1Type);
		}
	}




	


/**
 * The ApprovalHistoryType_typeInfo variable defines the members of the ApprovalHistoryType class
*/
var ApprovalHistoryType_typeInfo = Object.freeze({
	FinalApprovalDate:0,Version:1,Description_col:2,IndividualApproval_col:3,Any_col:4,
	"_elements":[{"name":"FinalApprovalDate","elementName":"FinalApprovalDate"}
	,{"name":"Version","elementName":"Version"}
	,{"name":"Description_col","elementName":"Description"}
	,{"name":"IndividualApproval_col","elementName":"IndividualApproval"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class ApprovalHistoryType extends S88Base {
		constructor() {	
			super(ApprovalHistoryType_typeInfo);
			/** @type {Date} */		
			this.FinalApprovalDate = new Date();
			/** @type {String} */		
			this.Version = "";
			/** @type {String[]} */	
			this.Description_col = new Array();
			/** @type {IndividualApprovalType[]} */		
			this.IndividualApproval_col = new TypedArray(IndividualApprovalType);
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The BatchInformationType_typeInfo variable defines the members of the BatchInformationType class
*/
var BatchInformationType_typeInfo = Object.freeze({
	ListHeader_col:0,Description_col:1,MasterRecipe_col:2,ControlRecipe_col:3,RecipeBuildingBlock_col:4,EquipmentElement_col:5,BatchList_col:6,EnumerationSet_col:7,Any_col:8,
	"_elements":[{"name":"ListHeader_col","elementName":"ListHeader"}
	,{"name":"Description_col","elementName":"Description"}
	,{"name":"MasterRecipe_col","elementName":"MasterRecipe"}
	,{"name":"ControlRecipe_col","elementName":"ControlRecipe"}
	,{"name":"RecipeBuildingBlock_col","elementName":"RecipeBuildingBlock"}
	,{"name":"EquipmentElement_col","elementName":"EquipmentElement"}
	,{"name":"BatchList_col","elementName":"BatchList"}
	,{"name":"EnumerationSet_col","elementName":"EnumerationSet"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class BatchInformationType extends S88Base {
		constructor() {	
			super(BatchInformationType_typeInfo);
			/** @type {ListHeaderType[]} */		
			this.ListHeader_col = new TypedArray(ListHeaderType);
			/** @type {String[]} */	
			this.Description_col = new Array();
			/** @type {MasterRecipeType[]} */		
			this.MasterRecipe_col = new TypedArray(MasterRecipeType);
			/** @type {ControlRecipeType[]} */		
			this.ControlRecipe_col = new TypedArray(ControlRecipeType);
			/** @type {RecipeBuildingBlockType[]} */		
			this.RecipeBuildingBlock_col = new TypedArray(RecipeBuildingBlockType);
			/** @type {EquipmentElementType[]} */		
			this.EquipmentElement_col = new TypedArray(EquipmentElementType);
			/** @type {BatchListType[]} */		
			this.BatchList_col = new TypedArray(BatchListType);
			/** @type {EnumerationSetType[]} */		
			this.EnumerationSet_col = new TypedArray(EnumerationSetType);
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The BatchListEntryType_typeInfo variable defines the members of the BatchListEntryType class
*/
var BatchListEntryType_typeInfo = Object.freeze({
	ID:0,Description_col:1,BatchListEntryType:2,Status:3,Mode:4,ExternalID:5,RecipeID:6,RecipeVersion:7,BatchID:8,LotID:9,CampaignID:10,ProductID:11,OrderID:12,StartCondition:13,RequestedStartTime:14,ActualStartTime:15,RequestedEndTime:16,ActualEndTime:17,BatchPriority:18,RequestedBatchSize:19,ActualBatchSize:20,UnitOfMeasure:21,Note_col:22,Parameter_col:23,EquipmentID_col:24,EquipmentClassID_col:25,ActualEquipmentID_col:26,BatchListEntry_col:27,Any_col:28,
	"_elements":[{"name":"ID","elementName":"ID"}
	,{"name":"Description_col","elementName":"Description"}
	,{"name":"BatchListEntryType","elementName":"BatchListEntryType"}
	,{"name":"Status","elementName":"Status"}
	,{"name":"Mode","elementName":"Mode"}
	,{"name":"ExternalID","elementName":"ExternalID"}
	,{"name":"RecipeID","elementName":"RecipeID"}
	,{"name":"RecipeVersion","elementName":"RecipeVersion"}
	,{"name":"BatchID","elementName":"BatchID"}
	,{"name":"LotID","elementName":"LotID"}
	,{"name":"CampaignID","elementName":"CampaignID"}
	,{"name":"ProductID","elementName":"ProductID"}
	,{"name":"OrderID","elementName":"OrderID"}
	,{"name":"StartCondition","elementName":"StartCondition"}
	,{"name":"RequestedStartTime","elementName":"RequestedStartTime"}
	,{"name":"ActualStartTime","elementName":"ActualStartTime"}
	,{"name":"RequestedEndTime","elementName":"RequestedEndTime"}
	,{"name":"ActualEndTime","elementName":"ActualEndTime"}
	,{"name":"BatchPriority","elementName":"BatchPriority"}
	,{"name":"RequestedBatchSize","elementName":"RequestedBatchSize"}
	,{"name":"ActualBatchSize","elementName":"ActualBatchSize"}
	,{"name":"UnitOfMeasure","elementName":"UnitOfMeasure"}
	,{"name":"Note_col","elementName":"Note"}
	,{"name":"Parameter_col","elementName":"Parameter"}
	,{"name":"EquipmentID_col","elementName":"EquipmentID"}
	,{"name":"EquipmentClassID_col","elementName":"EquipmentClassID"}
	,{"name":"ActualEquipmentID_col","elementName":"ActualEquipmentID"}
	,{"name":"BatchListEntry_col","elementName":"BatchListEntry"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class BatchListEntryType extends S88Base {
		constructor() {	
			super(BatchListEntryType_typeInfo);
			/** @type {String} */		
			this.ID = "";
			/** @type {String[]} */	
			this.Description_col = new Array();
			/** @type {BatchListEntryTypeType} */		
			this.BatchListEntryType = new BatchListEntryTypeType();
			/** @type {StatusType} */		
			this.Status = new StatusType();
			/** @type {ModeType} */		
			this.Mode = new ModeType();
			/** @type {String} */		
			this.ExternalID = "";
			/** @type {String} */		
			this.RecipeID = "";
			/** @type {String} */		
			this.RecipeVersion = "";
			/** @type {String} */		
			this.BatchID = "";
			/** @type {String} */		
			this.LotID = "";
			/** @type {String} */		
			this.CampaignID = "";
			/** @type {String} */		
			this.ProductID = "";
			/** @type {String} */		
			this.OrderID = "";
			/** @type {String} */		
			this.StartCondition = "";
			/** @type {Date} */		
			this.RequestedStartTime = new Date();
			/** @type {Date} */		
			this.ActualStartTime = new Date();
			/** @type {Date} */		
			this.RequestedEndTime = new Date();
			/** @type {Date} */		
			this.ActualEndTime = new Date();
			/** @type {Number} */		
			this.BatchPriority = 0;
			/** @type {Number} */		
			this.RequestedBatchSize = 0;
			/** @type {Number} */		
			this.ActualBatchSize = 0;
			/** @type {String} */		
			this.UnitOfMeasure = "";
			/** @type {String[]} */	
			this.Note_col = new Array();
			/** @type {ParameterType[]} */		
			this.Parameter_col = new TypedArray(ParameterType);
			/** @type {EquipmentIDType[]} */		
			this.EquipmentID_col = new TypedArray(EquipmentIDType);
			/** @type {String[]} */	
			this.EquipmentClassID_col = new Array();
			/** @type {String[]} */	
			this.ActualEquipmentID_col = new Array();
			/** @type {BatchListEntryType[]} */		
			this.BatchListEntry_col = new TypedArray(BatchListEntryType);
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The BatchListType_typeInfo variable defines the members of the BatchListType class
*/
var BatchListType_typeInfo = Object.freeze({
	ListHeader:0,Description_col:1,BatchListEntry_col:2,Any_col:3,
	"_elements":[{"name":"ListHeader","elementName":"ListHeader"}
	,{"name":"Description_col","elementName":"Description"}
	,{"name":"BatchListEntry_col","elementName":"BatchListEntry"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class BatchListType extends S88Base {
		constructor() {	
			super(BatchListType_typeInfo);
			/** @type {ListHeaderType} */		
			this.ListHeader = new ListHeaderType();
			/** @type {String[]} */	
			this.Description_col = new Array();
			/** @type {BatchListEntryType[]} */		
			this.BatchListEntry_col = new TypedArray(BatchListEntryType);
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The BatchSizeType_typeInfo variable defines the members of the BatchSizeType class
*/
var BatchSizeType_typeInfo = Object.freeze({
	Nominal:0,Min:1,Max:2,ScaleReference:3,ScaledSize:4,UnitOfMeasure:5,Any_col:6,
	"_elements":[{"name":"Nominal","elementName":"Nominal"}
	,{"name":"Min","elementName":"Min"}
	,{"name":"Max","elementName":"Max"}
	,{"name":"ScaleReference","elementName":"ScaleReference"}
	,{"name":"ScaledSize","elementName":"ScaledSize"}
	,{"name":"UnitOfMeasure","elementName":"UnitOfMeasure"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class BatchSizeType extends S88Base {
		constructor() {	
			super(BatchSizeType_typeInfo);
			/** @type {Number} */		
			this.Nominal = 0;
			/** @type {Number} */		
			this.Min = 0;
			/** @type {Number} */		
			this.Max = 0;
			/** @type {Number} */		
			this.ScaleReference = 0;
			/** @type {Number} */		
			this.ScaledSize = 0;
			/** @type {String} */		
			this.UnitOfMeasure = "";
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The ClassInstanceAssociationType_typeInfo variable defines the members of the ClassInstanceAssociationType class
*/
var ClassInstanceAssociationType_typeInfo = Object.freeze({
	ClassEquipmentID:0,MemberEquipmentID:1,Description_col:2,Any_col:3,
	"_elements":[{"name":"ClassEquipmentID","elementName":"ClassEquipmentID"}
	,{"name":"MemberEquipmentID","elementName":"MemberEquipmentID"}
	,{"name":"Description_col","elementName":"Description"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class ClassInstanceAssociationType extends S88Base {
		constructor() {	
			super(ClassInstanceAssociationType_typeInfo);
			/** @type {String} */		
			this.ClassEquipmentID = "";
			/** @type {String} */		
			this.MemberEquipmentID = "";
			/** @type {String[]} */	
			this.Description_col = new Array();
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The ConstraintType_typeInfo variable defines the members of the ConstraintType class
*/
var ConstraintType_typeInfo = Object.freeze({
	ID:0,Condition:1,Any_col:2,
	"_elements":[{"name":"ID","elementName":"ID"}
	,{"name":"Condition","elementName":"Condition"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class ConstraintType extends S88Base {
		constructor() {	
			super(ConstraintType_typeInfo);
			/** @type {String} */		
			this.ID = "";
			/** @type {String} */		
			this.Condition = "";
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The ControlRecipeType_typeInfo variable defines the members of the ControlRecipeType class
*/
var ControlRecipeType_typeInfo = Object.freeze({
	ID:0,Version:1,VersionDate:2,Description_col:3,BatchID:4,Header:5,EquipmentRequirement_col:6,Formula:7,ProcedureLogic:8,RecipeElement_col:9,OtherInformation_col:10,Any_col:11,
	"_elements":[{"name":"ID","elementName":"ID"}
	,{"name":"Version","elementName":"Version"}
	,{"name":"VersionDate","elementName":"VersionDate"}
	,{"name":"Description_col","elementName":"Description"}
	,{"name":"BatchID","elementName":"BatchID"}
	,{"name":"Header","elementName":"Header"}
	,{"name":"EquipmentRequirement_col","elementName":"EquipmentRequirement"}
	,{"name":"Formula","elementName":"Formula"}
	,{"name":"ProcedureLogic","elementName":"ProcedureLogic"}
	,{"name":"RecipeElement_col","elementName":"RecipeElement"}
	,{"name":"OtherInformation_col","elementName":"OtherInformation"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class ControlRecipeType extends S88Base {
		constructor() {	
			super(ControlRecipeType_typeInfo);
			/** @type {String} */		
			this.ID = "";
			/** @type {String} */		
			this.Version = "";
			/** @type {Date} */		
			this.VersionDate = new Date();
			/** @type {String[]} */	
			this.Description_col = new Array();
			/** @type {String} */		
			this.BatchID = "";
			/** @type {HeaderType} */		
			this.Header = new HeaderType();
			/** @type {EquipmentRequirementType[]} */		
			this.EquipmentRequirement_col = new TypedArray(EquipmentRequirementType);
			/** @type {FormulaType} */		
			this.Formula = new FormulaType();
			/** @type {ProcedureLogicType} */		
			this.ProcedureLogic = new ProcedureLogicType();
			/** @type {RecipeElementType[]} */		
			this.RecipeElement_col = new TypedArray(RecipeElementType);
			/** @type {OtherInformationType[]} */		
			this.OtherInformation_col = new TypedArray(OtherInformationType);
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The EnumerationSetType_typeInfo variable defines the members of the EnumerationSetType class
*/
var EnumerationSetType_typeInfo = Object.freeze({
	ID:0,Description_col:1,Enumeration_col:2,Any_col:3,
	"_elements":[{"name":"ID","elementName":"ID"}
	,{"name":"Description_col","elementName":"Description"}
	,{"name":"Enumeration_col","elementName":"Enumeration"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class EnumerationSetType extends S88Base {
		constructor() {	
			super(EnumerationSetType_typeInfo);
			/** @type {String} */		
			this.ID = "";
			/** @type {String[]} */	
			this.Description_col = new Array();
			/** @type {EnumerationType[]} */		
			this.Enumeration_col = new TypedArray(EnumerationType);
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The EnumerationType_typeInfo variable defines the members of the EnumerationType class
*/
var EnumerationType_typeInfo = Object.freeze({
	EnumerationNumber:0,EnumerationString:1,Description_col:2,Any_col:3,
	"_elements":[{"name":"EnumerationNumber","elementName":"EnumerationNumber"}
	,{"name":"EnumerationString","elementName":"EnumerationString"}
	,{"name":"Description_col","elementName":"Description"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class EnumerationType extends S88Base {
		constructor() {	
			super(EnumerationType_typeInfo);
			/** @type {Number} */		
			this.EnumerationNumber = 0;
			/** @type {String} */		
			this.EnumerationString = "";
			/** @type {String[]} */	
			this.Description_col = new Array();
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The EquipmentConnectionType_typeInfo variable defines the members of the EquipmentConnectionType class
*/
var EquipmentConnectionType_typeInfo = Object.freeze({
	ID:0,Description_col:1,ConnectionType:2,FromEquipmentID_col:3,ToEquipmentID_col:4,Any_col:5,
	"_elements":[{"name":"ID","elementName":"ID"}
	,{"name":"Description_col","elementName":"Description"}
	,{"name":"ConnectionType","elementName":"ConnectionType"}
	,{"name":"FromEquipmentID_col","elementName":"FromEquipmentID"}
	,{"name":"ToEquipmentID_col","elementName":"ToEquipmentID"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class EquipmentConnectionType extends S88Base {
		constructor() {	
			super(EquipmentConnectionType_typeInfo);
			/** @type {String} */		
			this.ID = "";
			/** @type {String[]} */	
			this.Description_col = new Array();
			/** @type {ConnectionTypeType} */		
			this.ConnectionType = new ConnectionTypeType();
			/** @type {String[]} */	
			this.FromEquipmentID_col = new Array();
			/** @type {String[]} */	
			this.ToEquipmentID_col = new Array();
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The EquipmentElementType_typeInfo variable defines the members of the EquipmentElementType class
*/
var EquipmentElementType_typeInfo = Object.freeze({
	ID:0,Description_col:1,EquipmentElementType:2,EquipmentElementLevel:3,ClassInstanceAssociation_col:4,Property_col:5,EquipmentProceduralElementClass_col:6,EquipmentProceduralElement_col:7,EquipmentConnection_col:8,EquipmentElement:9,EquipmentElementID:10,Any_col:11,
	"_elements":[{"name":"ID","elementName":"ID"}
	,{"name":"Description_col","elementName":"Description"}
	,{"name":"EquipmentElementType","elementName":"EquipmentElementType"}
	,{"name":"EquipmentElementLevel","elementName":"EquipmentElementLevel"}
	,{"name":"ClassInstanceAssociation_col","elementName":"ClassInstanceAssociation"}
	,{"name":"Property_col","elementName":"Property"}
	,{"name":"EquipmentProceduralElementClass_col","elementName":"EquipmentProceduralElementClass"}
	,{"name":"EquipmentProceduralElement_col","elementName":"EquipmentProceduralElement"}
	,{"name":"EquipmentConnection_col","elementName":"EquipmentConnection"}
	,{"name":"EquipmentElement","elementName":"EquipmentElement"}
	,{"name":"EquipmentElementID","elementName":"EquipmentElementID"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class EquipmentElementType extends S88Base {
		constructor() {	
			super(EquipmentElementType_typeInfo);
			/** @type {String} */		
			this.ID = "";
			/** @type {String[]} */	
			this.Description_col = new Array();
			/** @type {EquipmentElementTypeType} */		
			this.EquipmentElementType = new EquipmentElementTypeType();
			/** @type {EquipmentElementLevelType} */		
			this.EquipmentElementLevel = new EquipmentElementLevelType();
			/** @type {ClassInstanceAssociationType[]} */		
			this.ClassInstanceAssociation_col = new TypedArray(ClassInstanceAssociationType);
			/** @type {PropertyType[]} */		
			this.Property_col = new TypedArray(PropertyType);
			/** @type {EquipmentProceduralElementClassType[]} */		
			this.EquipmentProceduralElementClass_col = new TypedArray(EquipmentProceduralElementClassType);
			/** @type {EquipmentProceduralElementType[]} */		
			this.EquipmentProceduralElement_col = new TypedArray(EquipmentProceduralElementType);
			/** @type {EquipmentConnectionType[]} */		
			this.EquipmentConnection_col = new TypedArray(EquipmentConnectionType);
			/** @type {EquipmentElementType[]} */		
       		this.EquipmentElement_col = new TypedArray(EquipmentElementType);
			/** @type {String} */		
			this.EquipmentElementID = "";
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The EquipmentIDType_typeInfo variable defines the members of the EquipmentIDType class
*/
var EquipmentIDType_typeInfo = Object.freeze({
	Property:0,Condition:1,Value:2,Any_col:3,
	"_elements":[{"name":"Property","elementName":"Property"}
	,{"name":"Condition","elementName":"Condition"}
	,{"name":"Value","elementName":"Value"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class EquipmentIDType extends S88Base {
		constructor() {	
			super(EquipmentIDType_typeInfo);
			/** @type {PropertyType} */		
			this.Property = new PropertyType();
			/** @type {String} */		
			this.Condition = "";
			/** @type {ValueType} */		
			this.Value = new ValueType();
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The EquipmentProceduralElementClassType_typeInfo variable defines the members of the EquipmentProceduralElementClassType class
*/
var EquipmentProceduralElementClassType_typeInfo = Object.freeze({
	ID:0,Description_col:1,EquipmentProceduralElementType:2,Parameter_col:3,Any_col:4,
	"_elements":[{"name":"ID","elementName":"ID"}
	,{"name":"Description_col","elementName":"Description"}
	,{"name":"EquipmentProceduralElementType","elementName":"EquipmentProceduralElementType"}
	,{"name":"Parameter_col","elementName":"Parameter"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class EquipmentProceduralElementClassType extends S88Base {
		constructor() {	
			super(EquipmentProceduralElementClassType_typeInfo);
			/** @type {String} */		
			this.ID = "";
			/** @type {String[]} */	
			this.Description_col = new Array();
			/** @type {EquipmentProceduralElementTypeType} */		
			this.EquipmentProceduralElementType = new EquipmentProceduralElementTypeType();
			/** @type {ParameterType[]} */		
			this.Parameter_col = new TypedArray(ParameterType);
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The EquipmentProceduralElementType_typeInfo variable defines the members of the EquipmentProceduralElementType class
*/
var EquipmentProceduralElementType_typeInfo = Object.freeze({
	ID:0,Description_col:1,EquipmentProceduralElementType:2,EquipmentProceduralElementClassID:3,Parameter_col:4,Any_col:5,
	"_elements":[{"name":"ID","elementName":"ID"}
	,{"name":"Description_col","elementName":"Description"}
	,{"name":"EquipmentProceduralElementType","elementName":"EquipmentProceduralElementType"}
	,{"name":"EquipmentProceduralElementClassID","elementName":"EquipmentProceduralElementClassID"}
	,{"name":"Parameter_col","elementName":"Parameter"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class EquipmentProceduralElementType extends S88Base {
		constructor() {	
			super(EquipmentProceduralElementType_typeInfo);
			/** @type {String} */		
			this.ID = "";
			/** @type {String[]} */	
			this.Description_col = new Array();
			/** @type {EquipmentProceduralElementTypeType} */		
			this.EquipmentProceduralElementType = new EquipmentProceduralElementTypeType();
			/** @type {String} */		
			this.EquipmentProceduralElementClassID = "";
			/** @type {ParameterType[]} */		
			this.Parameter_col = new TypedArray(ParameterType);
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The EquipmentRequirementType_typeInfo variable defines the members of the EquipmentRequirementType class
*/
var EquipmentRequirementType_typeInfo = Object.freeze({
	ID:0,Constraint_col:1,Description:2,Any_col:3,
	"_elements":[{"name":"ID","elementName":"ID"}
	,{"name":"Constraint_col","elementName":"Constraint"}
	,{"name":"Description","elementName":"Description"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class EquipmentRequirementType extends S88Base {
		constructor() {	
			super(EquipmentRequirementType_typeInfo);
			/** @type {String} */		
			this.ID = "";
			/** @type {ConstraintType[]} */		
			this.Constraint_col = new TypedArray(ConstraintType);
			/** @type {String} */		
			this.Description = "";
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The FormulaType_typeInfo variable defines the members of the FormulaType class
*/
var FormulaType_typeInfo = Object.freeze({
	Parameter_col:0,Any_col:1,
	"_elements":[{"name":"Parameter_col","elementName":"Parameter"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class FormulaType extends S88Base {
		constructor() {	
			super(FormulaType_typeInfo);
			/** @type {ParameterType[]} */		
			this.Parameter_col = new TypedArray(ParameterType);
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The FromIDType_typeInfo variable defines the members of the FromIDType class
*/
var FromIDType_typeInfo = Object.freeze({
	FromIDValue:0,FromType:1,IDScope:2,Any_col:3,
	"_elements":[{"name":"FromIDValue","elementName":"FromIDValue"}
	,{"name":"FromType","elementName":"FromType"}
	,{"name":"IDScope","elementName":"IDScope"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class FromIDType extends S88Base {
		constructor() {	
			super(FromIDType_typeInfo);
			/** @type {String} */		
			this.FromIDValue = "";
			/** @type {FromTypeType} */		
			this.FromType = new FromTypeType();
			/** @type {IDScopeType} */		
			this.IDScope = new IDScopeType();
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The HeaderType_typeInfo variable defines the members of the HeaderType class
*/
var HeaderType_typeInfo = Object.freeze({
	ModificationLog_col:0,ApprovalHistory_col:1,EffectiveDate:2,ExpirationDate:3,ProductID:4,ProductName:5,BatchSize:6,ActualProductProduced_col:7,Status:8,Any_col:9,
	"_elements":[{"name":"ModificationLog_col","elementName":"ModificationLog"}
	,{"name":"ApprovalHistory_col","elementName":"ApprovalHistory"}
	,{"name":"EffectiveDate","elementName":"EffectiveDate"}
	,{"name":"ExpirationDate","elementName":"ExpirationDate"}
	,{"name":"ProductID","elementName":"ProductID"}
	,{"name":"ProductName","elementName":"ProductName"}
	,{"name":"BatchSize","elementName":"BatchSize"}
	,{"name":"ActualProductProduced_col","elementName":"ActualProductProduced"}
	,{"name":"Status","elementName":"Status"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class HeaderType extends S88Base {
		constructor() {	
			super(HeaderType_typeInfo);
			/** @type {ModificationLogType[]} */		
			this.ModificationLog_col = new TypedArray(ModificationLogType);
			/** @type {ApprovalHistoryType[]} */		
			this.ApprovalHistory_col = new TypedArray(ApprovalHistoryType);
			/** @type {Date} */		
			this.EffectiveDate = new Date();
			/** @type {Date} */		
			this.ExpirationDate = new Date();
			/** @type {String} */		
			this.ProductID = "";
			/** @type {String} */		
			this.ProductName = "";
			/** @type {BatchSizeType} */		
			this.BatchSize = new BatchSizeType();
			/** @type {String[]} */	
			this.ActualProductProduced_col = new Array();
			/** @type {StatusType} */		
			this.Status = new StatusType();
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The IndividualApprovalType_typeInfo variable defines the members of the IndividualApprovalType class
*/
var IndividualApprovalType_typeInfo = Object.freeze({
	ApprovedBy:0,ApprovalDate:1,Description_col:2,Any_col:3,
	"_elements":[{"name":"ApprovedBy","elementName":"ApprovedBy"}
	,{"name":"ApprovalDate","elementName":"ApprovalDate"}
	,{"name":"Description_col","elementName":"Description"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class IndividualApprovalType extends S88Base {
		constructor() {	
			super(IndividualApprovalType_typeInfo);
			/** @type {String} */		
			this.ApprovedBy = "";
			/** @type {Date} */		
			this.ApprovalDate = new Date();
			/** @type {String[]} */	
			this.Description_col = new Array();
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The LinkType_typeInfo variable defines the members of the LinkType class
*/
var LinkType_typeInfo = Object.freeze({
	ID:0,FromID_col:1,ToID_col:2,LinkType:3,Depiction:4,EvaluationOrder:5,Description_col:6,Any_col:7,
	"_elements":[{"name":"ID","elementName":"ID"}
	,{"name":"FromID_col","elementName":"FromID"}
	,{"name":"ToID_col","elementName":"ToID"}
	,{"name":"LinkType","elementName":"LinkType"}
	,{"name":"Depiction","elementName":"Depiction"}
	,{"name":"EvaluationOrder","elementName":"EvaluationOrder"}
	,{"name":"Description_col","elementName":"Description"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class LinkType extends S88Base {
		constructor() {	
			super(LinkType_typeInfo);
			/** @type {String} */		
			this.ID = "";
			/** @type {FromIDType[]} */		
			this.FromID_col = new TypedArray(FromIDType);
			/** @type {ToIDType[]} */		
			this.ToID_col = new TypedArray(ToIDType);
			/** @type {LinkTypeType} */		
			this.LinkType = new LinkTypeType();
			/** @type {DepictionType} */		
			this.Depiction = new DepictionType();
			/** @type {Number} */		
			this.EvaluationOrder = 0;
			/** @type {String[]} */	
			this.Description_col = new Array();
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The ListHeaderType_typeInfo variable defines the members of the ListHeaderType class
*/
var ListHeaderType_typeInfo = Object.freeze({
	ID:0,Version:1,Description_col:2,Origin:3,CreateDate:4,ModificationLog_col:5,Any_col:6,
	"_elements":[{"name":"ID","elementName":"ID"}
	,{"name":"Version","elementName":"Version"}
	,{"name":"Description_col","elementName":"Description"}
	,{"name":"Origin","elementName":"Origin"}
	,{"name":"CreateDate","elementName":"CreateDate"}
	,{"name":"ModificationLog_col","elementName":"ModificationLog"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class ListHeaderType extends S88Base {
		constructor() {	
			super(ListHeaderType_typeInfo);
			/** @type {String} */		
			this.ID = "";
			/** @type {String} */		
			this.Version = "";
			/** @type {String[]} */	
			this.Description_col = new Array();
			/** @type {String} */		
			this.Origin = "";
			/** @type {String} */		
			this.CreateDate = "";
			/** @type {ModificationLogType[]} */		
			this.ModificationLog_col = new TypedArray(ModificationLogType);
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The MasterRecipeType_typeInfo variable defines the members of the MasterRecipeType class
*/
var MasterRecipeType_typeInfo = Object.freeze({
	ID:0,Version:1,VersionDate:2,Description_col:3,Header:4,EquipmentRequirement_col:5,Formula:6,ProcedureLogic:7,RecipeElement_col:8,OtherInformation_col:9,Any_col:10,
	"_elements":[{"name":"ID","elementName":"ID"}
	,{"name":"Version","elementName":"Version"}
	,{"name":"VersionDate","elementName":"VersionDate"}
	,{"name":"Description_col","elementName":"Description"}
	,{"name":"Header","elementName":"Header"}
	,{"name":"EquipmentRequirement_col","elementName":"EquipmentRequirement"}
	,{"name":"Formula","elementName":"Formula"}
	,{"name":"ProcedureLogic","elementName":"ProcedureLogic"}
	,{"name":"RecipeElement_col","elementName":"RecipeElement"}
	,{"name":"OtherInformation_col","elementName":"OtherInformation"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class MasterRecipeType extends S88Base {
		constructor() {	
			super(MasterRecipeType_typeInfo);
			/** @type {String} */		
			this.ID = "";
			/** @type {String} */		
			this.Version = "";
			/** @type {Date} */		
			this.VersionDate = new Date();
			/** @type {String[]} */	
			this.Description_col = new Array();
			/** @type {HeaderType} */		
			this.Header = new HeaderType();
			/** @type {EquipmentRequirementType[]} */		
			this.EquipmentRequirement_col = new TypedArray(EquipmentRequirementType);
			/** @type {FormulaType} */		
			this.Formula = new FormulaType();
			/** @type {ProcedureLogicType} */		
			this.ProcedureLogic = new ProcedureLogicType();
			/** @type {RecipeElementType[]} */		
			this.RecipeElement_col = new TypedArray(RecipeElementType);
			/** @type {OtherInformationType[]} */		
			this.OtherInformation_col = new TypedArray(OtherInformationType);
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The ModificationLogType_typeInfo variable defines the members of the ModificationLogType class
*/
var ModificationLogType_typeInfo = Object.freeze({
	ModifiedDate:0,Description_col:1,Author:2,Any_col:3,
	"_elements":[{"name":"ModifiedDate","elementName":"ModifiedDate"}
	,{"name":"Description_col","elementName":"Description"}
	,{"name":"Author","elementName":"Author"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class ModificationLogType extends S88Base {
		constructor() {	
			super(ModificationLogType_typeInfo);
			/** @type {String} */		
			this.ModifiedDate = "";
			/** @type {String[]} */	
			this.Description_col = new Array();
			/** @type {String} */		
			this.Author = "";
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The OtherInformationType_typeInfo variable defines the members of the OtherInformationType class
*/
var OtherInformationType_typeInfo = Object.freeze({
	ID:0,Value_col:1,Description_col:2,Any_col:3,
	"_elements":[{"name":"ID","elementName":"ID"}
	,{"name":"Value_col","elementName":"Value"}
	,{"name":"Description_col","elementName":"Description"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class OtherInformationType extends S88Base {
		constructor() {	
			super(OtherInformationType_typeInfo);
			/** @type {String} */		
			this.ID = "";
			/** @type {ValueType[]} */		
			this.Value_col = new TypedArray(ValueType);
			/** @type {String[]} */	
			this.Description_col = new Array();
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The ParameterType_typeInfo variable defines the members of the ParameterType class
*/
var ParameterType_typeInfo = Object.freeze({
	ID:0,Description:1,ParameterType:2,ParameterSubType_col:3,Value_col:4,Scaled:5,ScaleReference:6,Parameter_col:7,Any_col:8,
	"_elements":[{"name":"ID","elementName":"ID"}
	,{"name":"Description","elementName":"Description"}
	,{"name":"ParameterType","elementName":"ParameterType"}
	,{"name":"ParameterSubType_col","elementName":"ParameterSubType"}
	,{"name":"Value_col","elementName":"Value"}
	,{"name":"Scaled","elementName":"Scaled"}
	,{"name":"ScaleReference","elementName":"ScaleReference"}
	,{"name":"Parameter_col","elementName":"Parameter"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class ParameterType extends S88Base {
		constructor() {	
			super(ParameterType_typeInfo);
			/** @type {String} */		
			this.ID = "";
			/** @type {String} */		
			this.Description = "";
			/** @type {ParameterTypeType} */		
			this.ParameterType = new ParameterTypeType();
			/** @type {String[]} */	
			this.ParameterSubType_col = new Array();
			/** @type {ValueType[]} */		
			this.Value_col = new TypedArray(ValueType);
			/** @type {String} */		
			this.Scaled = "";
			/** @type {Number} */		
			this.ScaleReference = 0;
			/** @type {ParameterType[]} */		
			this.Parameter_col = new TypedArray(ParameterType);
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The ProcedureLogicType_typeInfo variable defines the members of the ProcedureLogicType class
*/
var ProcedureLogicType_typeInfo = Object.freeze({
	Link_col:0,Step_col:1,Transition_col:2,Any_col:3,
	"_elements":[{"name":"Link_col","elementName":"Link"}
	,{"name":"Step_col","elementName":"Step"}
	,{"name":"Transition_col","elementName":"Transition"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class ProcedureLogicType extends S88Base {
		constructor() {	
			super(ProcedureLogicType_typeInfo);
			/** @type {LinkType[]} */		
			this.Link_col = new TypedArray(LinkType);
			/** @type {StepType[]} */		
			this.Step_col = new TypedArray(StepType);
			/** @type {TransitionType[]} */		
			this.Transition_col = new TypedArray(TransitionType);
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The PropertyType_typeInfo variable defines the members of the PropertyType class
*/
var PropertyType_typeInfo = Object.freeze({
	ID:0,Description_col:1,Value:2,Property_col:3,Any_col:4,
	"_elements":[{"name":"ID","elementName":"ID"}
	,{"name":"Description_col","elementName":"Description"}
	,{"name":"Value","elementName":"Value"}
	,{"name":"Property_col","elementName":"Property"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class PropertyType extends S88Base {
		constructor() {	
			super(PropertyType_typeInfo);
			/** @type {String} */		
			this.ID = "";
			/** @type {String[]} */	
			this.Description_col = new Array();
			/** @type {ValueType} */		
			this.Value = new ValueType();
			/** @type {PropertyType[]} */		
			this.Property_col = new TypedArray(PropertyType);
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The RecipeBuildingBlockType_typeInfo variable defines the members of the RecipeBuildingBlockType class
*/
var RecipeBuildingBlockType_typeInfo = Object.freeze({
	Description_col:0,RecipeElement_col:1,Any_col:2,
	"_elements":[{"name":"Description_col","elementName":"Description"}
	,{"name":"RecipeElement_col","elementName":"RecipeElement"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class RecipeBuildingBlockType extends S88Base {
		constructor() {	
			super(RecipeBuildingBlockType_typeInfo);
			/** @type {String[]} */	
			this.Description_col = new Array();
			/** @type {RecipeElementType[]} */		
			this.RecipeElement_col = new TypedArray(RecipeElementType);
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The RecipeElementType_typeInfo variable defines the members of the RecipeElementType class
*/
var RecipeElementType_typeInfo = Object.freeze({
	ID:0,Version:1,VersionDate:2,Description_col:3,RecipeElementType:4,BuildingBlockElementID:5,BuildingBlockElementVersion:6,ActualEquipmentID_col:7,Header:8,EquipmentRequirement_col:9,Parameter_col:10,ProcedureLogic:11,RecipeElement_col:12,OtherInformation_col:13,Any_col:14,
	"_elements":[{"name":"ID","elementName":"ID"}
	,{"name":"Version","elementName":"Version"}
	,{"name":"VersionDate","elementName":"VersionDate"}
	,{"name":"Description_col","elementName":"Description"}
	,{"name":"RecipeElementType","elementName":"RecipeElementType"}
	,{"name":"BuildingBlockElementID","elementName":"BuildingBlockElementID"}
	,{"name":"BuildingBlockElementVersion","elementName":"BuildingBlockElementVersion"}
	,{"name":"ActualEquipmentID_col","elementName":"ActualEquipmentID"}
	,{"name":"Header","elementName":"Header"}
	,{"name":"EquipmentRequirement_col","elementName":"EquipmentRequirement"}
	,{"name":"Parameter_col","elementName":"Parameter"}
	,{"name":"ProcedureLogic","elementName":"ProcedureLogic"}
	,{"name":"RecipeElement_col","elementName":"RecipeElement"}
	,{"name":"OtherInformation_col","elementName":"OtherInformation"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class RecipeElementType extends S88Base {
		constructor() {	
			super(RecipeElementType_typeInfo);
			/** @type {String} */		
			this.ID = "";
			/** @type {String} */		
			this.Version = "";
			/** @type {Date} */		
			this.VersionDate = new Date();
			/** @type {String[]} */	
			this.Description_col = new Array();
			/** @type {RecipeElementTypeType} */		
			this.RecipeElementType = new RecipeElementTypeType();
			/** @type {String} */		
			this.BuildingBlockElementID = "";
			/** @type {String} */		
			this.BuildingBlockElementVersion = "";
			/** @type {String[]} */	
			this.ActualEquipmentID_col = new Array();
			/** @type {HeaderType} */		
			this.Header = new HeaderType();
			/** @type {EquipmentRequirementType[]} */		
			this.EquipmentRequirement_col = new TypedArray(EquipmentRequirementType);
			/** @type {ParameterType[]} */		
			this.Parameter_col = new TypedArray(ParameterType);
			/** @type {ProcedureLogicType} */		
			this.ProcedureLogic = new ProcedureLogicType();
			/** @type {RecipeElementType[]} */		
			this.RecipeElement_col = new TypedArray(RecipeElementType);
			/** @type {OtherInformationType[]} */		
			this.OtherInformation_col = new TypedArray(OtherInformationType);
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The StepType_typeInfo variable defines the members of the StepType class
*/
var StepType_typeInfo = Object.freeze({
	ID:0,RecipeElementID:1,RecipeElementVersion:2,Description_col:3,Any_col:4,
	"_elements":[{"name":"ID","elementName":"ID"}
	,{"name":"RecipeElementID","elementName":"RecipeElementID"}
	,{"name":"RecipeElementVersion","elementName":"RecipeElementVersion"}
	,{"name":"Description_col","elementName":"Description"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class StepType extends S88Base {
		constructor() {	
			super(StepType_typeInfo);
			/** @type {String} */		
			this.ID = "";
			/** @type {String} */		
			this.RecipeElementID = "";
			/** @type {String} */		
			this.RecipeElementVersion = "";
			/** @type {String[]} */	
			this.Description_col = new Array();
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The ToIDType_typeInfo variable defines the members of the ToIDType class
*/
var ToIDType_typeInfo = Object.freeze({
	ToIDValue:0,ToType:1,IDScope:2,Any_col:3,
	"_elements":[{"name":"ToIDValue","elementName":"ToIDValue"}
	,{"name":"ToType","elementName":"ToType"}
	,{"name":"IDScope","elementName":"IDScope"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class ToIDType extends S88Base {
		constructor() {	
			super(ToIDType_typeInfo);
			/** @type {String} */		
			this.ToIDValue = "";
			/** @type {ToTypeType} */		
			this.ToType = new ToTypeType();
			/** @type {IDScopeType} */		
			this.IDScope = new IDScopeType();
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The TransitionType_typeInfo variable defines the members of the TransitionType class
*/
var TransitionType_typeInfo = Object.freeze({
	ID:0,Condition:1,ConditionAnnotation:2,Description_col:3,Any_col:4,
	"_elements":[{"name":"ID","elementName":"ID"}
	,{"name":"Condition","elementName":"Condition"}
	,{"name":"ConditionAnnotation","elementName":"ConditionAnnotation"}
	,{"name":"Description_col","elementName":"Description"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class TransitionType extends S88Base {
		constructor() {	
			super(TransitionType_typeInfo);
			/** @type {String} */		
			this.ID = "";
			/** @type {String} */		
			this.Condition = "";
			/** @type {String} */		
			this.ConditionAnnotation = "";
			/** @type {String[]} */	
			this.Description_col = new Array();
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}

/**
 * The ValueType_typeInfo variable defines the members of the ValueType class
*/
var ValueType_typeInfo = Object.freeze({
	ValueString_col:0,DataInterpretation:1,DataType:2,UnitOfMeasure:3,EnumerationSetID_col:4,Any_col:5,
	"_elements":[{"name":"ValueString_col","elementName":"ValueString"}
	,{"name":"DataInterpretation","elementName":"DataInterpretation"}
	,{"name":"DataType","elementName":"DataType"}
	,{"name":"UnitOfMeasure","elementName":"UnitOfMeasure"}
	,{"name":"EnumerationSetID_col","elementName":"EnumerationSetID"}
	,{"name":"Any_col","elementName":"Any"}

	]});

	class ValueType extends S88Base {
		constructor() {	
			super(ValueType_typeInfo);
			/** @type {String[]} */	
			this.ValueString_col = new Array();
			/** @type {DataInterpretationType} */		
			this.DataInterpretation = new DataInterpretationType();
			/** @type {DataTypeType} */		
			this.DataType = new DataTypeType();
			/** @type {String} */		
			this.UnitOfMeasure = "";
			/** @type {String[]} */	
			this.EnumerationSetID_col = new Array();
			/** @type {AnyType[]} */		
			this.Any_col = new TypedArray(AnyType);
		}
	}