sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("SplitApp.controller.menu", {

		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
		var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
        oRouter.navTo('Graphics Cards', {
          RoteParam1: Value1
        });
	});

});