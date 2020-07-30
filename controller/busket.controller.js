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
	var sBusketRowPath = oEvent.getSource().getBindingPath("main")
			let oModel = oEvent.getSource().getModel('main').getProperty('/busket')
	var getQuantity = sBusketRowPath.Quantity
	getQuantity++;
	oModel.setProperty("/busket", getQuantity)
    },
	
	
	
	onDelete: function(oEvent) {
		
    }
  });
});
