sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";

	 return UIComponent.extend('SplitApp.Component', {
      metadata: {
        manifest: 'json' // подцепляем еастройки из манифеста
      },

      init: function () {
        // call the init function of the parent
        UIComponent.prototype.init.apply(this, arguments); // it is obligatory(обязательно) to make the super call        

        this.oMainModel = this.getModel('invoice'); // from manifest.json			
				
        this.oRouter = this.getRouter(); 
				this.oRouter.initialize(); // запускаем роутинг (берет настройки из манифеста)
				// срабатывает перед тем, как произойдет обработка события совпадения URL 
					
				this._setMainmenu(); // формируем данные для главногог меню.
				
      },
			
			_setMainmenu: function(){
				let that = this;
				// Когда в модель подгрузятся даннве из файла JSON...
				this.oMainModel.dataLoaded().then(function(){			
					// берем список категорий...
					let aTypes = that.oMainModel.getProperty("/types");
					// формирукм дополнительные пункты меню...
					let aOtherMenuItems = [
						{
							id: "about",
							title: "О нас",
							nav: {
								rout: "about"
							}
						},
						{
							id: "busket",
							title: "Корзина",
							nav: {
								rout: "busket"
							}
						}
					];
					// объединяем два масива, чтобы получился 1 - будет меню...
					let aMenu = aTypes.concat(aOtherMenuItems);
					
					// добавляем в модель свойство, в котором хранится массив пунктов мею
					that.oMainModel.setProperty("/mainMenu", aMenu);
				});
				
			}
    
    });
  }
);