sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";

	return UIComponent.extend("SplitApp.Component", {

		metadata: {
			manifest: "json"
		},

		init: function () {
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
				this.oMainModel = this.getModel('main');
                this.oRouter = this.getRouter(); 
					this.oRouter.initialize(); //запуск роутинга
				//this._setMainmenu();	// формирование данных для главного меню
				
        },
	
	});
});