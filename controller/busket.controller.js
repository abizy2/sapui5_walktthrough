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
	var sBusketRowPath = oEvent.getSource().getBindingContext("main").getPath();// путь массива event.getsource() 
	let oModel = oEvent.getSource().getModel('main')
	var oBusketItem = oModel.getProperty(sBusketRowPath)// строка
	var Quantity = oBusketItem.Quantity
	var title = oBusketItem.title
	var oCatalog = oModel.getProperty("/catalog") // все товары каталога
	//console.dir(sBusketRowPath);
	var aFindEl = oCatalog.find(oBusketItem => oBusketItem.title == title)
	var QuanityStock = aFindEl.Quantity
	if (QuanityStock > Quantity) {
		Quantity++
	}
	oModel.setProperty(sBusketRowPath + "/Quantity", Quantity)
	},
	
	
	
	
	onDelete: function(oEvent) {
		var sBusketRowPath = oEvent.getSource().getBindingContext("main").getPath();
		let oModel = oEvent.getSource().getModel('main')
		var oBusketItem = oModel.getProperty(sBusketRowPath)
		var Quantity = oBusketItem.Quantity
		var aBusketData = oModel.getProperty("/busket") // массив все данных элемента
		//console.dir(sBusketRowPath);
		Quantity--
		if (oBusketItem.Quantity > 0) {
			oModel.setProperty(sBusketRowPath + "/Quantity", Quantity)
		}
			var aFilteredBusket = aBusketData.filter(oBusketItem => oBusketItem.Quantity > 0);
			oModel.setProperty("/busket", aFilteredBusket)
		}

  });
});
