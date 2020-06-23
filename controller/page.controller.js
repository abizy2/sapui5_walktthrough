sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.page", {

		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
	});

});