//"use strict";

sap.ui.define([
	'sap/ui/core/mvc/Controller', 
	'sap/ui/model/json/JSONModel', 
	'sap/ui/model/resource/ResourceModel'
], function (
	Controller, 
	SONModel, 
	ResourceModel) {
  //"use strict";

  return Controller.extend('namespace.controller.busket', {

	  

    onAdd: function(oEvent) {
	var sBusketRowPath = oEvent.getBindingContext("main").getPath();
	let oModel = oEvent.getSource().getModel('main')
	var oBusketIttem = oModel.getProperty(sBusketRowPath)
	
	
	//getQuantity++;
	//oModel.setProperty("/busket", getQuantity)
    },
	
	
	
	onDelete: function(oEvent) {
		
    }
  });
});
