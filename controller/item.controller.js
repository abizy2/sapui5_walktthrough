//"use strict";

sap.ui.define([
	'sap/ui/core/mvc/Controller', 
	'sap/ui/model/json/JSONModel', 
	'sap/ui/model/resource/ResourceModel',
	"sap/base/Log"
], function (
	Controller, 
	SONModel, 
	ResourceModel,
	Log) {
  //"use strict";

  return Controller.extend('namespace.controller.item', {

    onInit: function onInit () {
	 var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
	oRouter.getRoute("item").attachPatternMatched(this._onObjectMatched, this);
    },
	_onObjectMatched: function (oEvent) {
			this.getView().bindElement({
				path: "/" + oEvent.getParameter("arguments").category,
				path: "/" + oEvent.getParameter("arguments").item,
				model: "main"
			});
		},
		
/* 		onPressDetailBack: function () {
			this.itemObj().backDetail();
		} */
  });
});
