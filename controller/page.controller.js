sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("SplitApp.controller.menu", {

		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
	});

});