var oItemTemplate = new sap.ui.core.ListItem({text:"{name}"});
var oItemTemplate = new sap.ui.core.ListItem({text:"{name}"});
var oComboBox.bindAggregation("items", "/companies", oItemTemplate);
var oComboBox.bindItems("/companies", oItemTemplate);
oComboBox = new sap.m.ComboBox({
	items: {
		path: "/companies",      //no curly brackets here!
		template: oItemTemplate
	}
});
oComboBox.unbindAggregation("items");
oComboBox.unbindItems();
oComboBox.unbindAggregation("items", true);