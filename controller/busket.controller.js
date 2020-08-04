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
	var sBusketRowPath = oEvent.getSource().getBindingContext("main").getPath();// путь массива
	let oModel = oEvent.getSource().getModel('main')
	var oBusketItem = oModel.getProperty(sBusketRowPath)// строка
	var Quantity = oBusketItem.Quantity
	//console.dir(sBusketRowPath);
	Quantity++;
	oModel.setProperty(sBusketRowPath+"/Quantity", Quantity)
    },
	
	
	
	onDelete: function(oEvent) {
		var sBusketRowPath = oEvent.getSource().getBindingContext("main").getPath();
		let oModel = oEvent.getSource().getModel('main')
		var oBusketItem = oModel.getProperty(sBusketRowPath)
		var Quantity = oBusketItem.Quantity
		var aBusketData = oModel.getProperty("/busket"); // массив все данных элемента
		//console.dir(sBusketRowPath);
		Quantity--;
		if (oBusketItem.Quantity > 0) {
			oModel.setProperty(sBusketRowPath + "/Quantity", Quantity)
		}
		aBusketData.filter(function(oBusketItem)) {
				return oBusketItem.Quantity < 1;
			}
			
		}
  });
});
