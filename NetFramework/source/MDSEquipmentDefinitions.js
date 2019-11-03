var Vessel_Unit_Class = 
{
  "ID": "Vessel",
  "Description_col": [ "Unit Class for Cuvettes and Syringes" ],
  "EquipmentElementType": { "key": "Class" },
  "EquipmentElementLevel": { "key": "Unit" },
  "Property_col": [
    {
      "ID": "total_volume",
      "Value": {
        "DataType": {"key": "float"},
        "UnitOfMeasure": "ml"
      }
    },
    {
      "ID": "current_volume",
      "Value": {
        "DataType": {"key": "float"},
        "UnitOfMeasure": "ml"
      }
    }	
  ],
  "EquipmentElement_col": [
	  {
		"ID": "Transfer",
		"Description_col": ["Phase to transfer fluid to and from cuvette"],
		"EquipmentElementType": {"key": "Class"},
		"EquipmentElementLevel": {"key": "ControlModule"},
		"Property_col": [
		  {
			"ID": "volume",
			"Value": {
				"DataType": {"key": "float"},
				"UnitOfMeasure": "ml"
			}
		  }
		],
	  }
  ]
}

