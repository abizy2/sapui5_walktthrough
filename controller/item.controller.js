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

  return Controller.extend('namespace.controller.item', {

    onInit: function onInit () {
	 var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
	oRouter.getRoute("item").attachPatternMatched(this._onObjectMatched, this);
    },
  });
});
