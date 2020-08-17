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
	newformatter: function(ExtendedPrice, Quantity) {
				  return Quantity * ExtendedPrice;
		},

	busketItog: function(aBusketData){
		//console.dir(aBusketData)
							if (aBusketData){
								let sum = 0;
								return("Общая сумма: "+aBusketData.reduce((sum, item) => sum + item.ExtendedPrice*item.Quantity, 0))
								/* for (var i = 0; i < aBusketData.length; i++){
									 sum+= aBusketData[i].ExtendedPrice * aBusketData[i].Quantity + sum;
									//console.dir(aBusketData)
								}
								return sum; */
							}
					return 0;
					},
					
    onAdd: function(oEvent) {
	var sBusketRowPath = oEvent.getSource().getBindingContext("main").getPath();// путь массива event.getsource() 
	let oModel = oEvent.getSource().getModel('main')
	var oBusketItem = oModel.getProperty(sBusketRowPath)// строка
	var Quantity = oBusketItem.Quantity
	var ExtendedPrice = oBusketItem.ExtendedPrice
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
		var aBusketData = oModel.getProperty("/busket") //излекаем весь массив  данных элемента
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
