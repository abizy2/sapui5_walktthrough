sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("SplitApp.controller.menu", {
		},
		onListItemPress: function (eVent) {
		let oContext = oEvent.getParameter("listItem").getBindingContext('invoice').getObject();
					let sProductName = oContext.ProductName;

					var oRouter = sap.ui.core.UIComponent.getRouterFor(that);
											oRouter.navTo('menu', {
					   component: sProductName
					});
			},

});