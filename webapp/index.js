sap.ui.require([
	"sap/m/Text",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/model/resource/ResourceModel"
], function (Text,JSONModel,XMLView,ResourceModel) {
	"use strict";

	// Attach an anonymous function to the SAPUI5 'init' event
	sap.ui.getCore().attachInit(function () {
		var oModel = new JSONModel({
						firstName: "Harry",
			lastName: "Hawk",
			enabled: true,
			panelHeaderText: "Data Binding Basics"
		});
	var oResourceModel = new ResourceModel({
			bundleName: "DataBinding.DataBinding.i18n.i18n"
		});

		// Assign the model object to the SAPUI5 core using the name "i18n"
		sap.ui.getCore().setModel(oResourceModel, "i18n");
		sap.ui.getCore().setModel(oModel);
		// Create a text UI element that displays a hardcoded text string
		// Display the XML view called "App"
		new XMLView({
			viewName: "DataBinding.DataBinding.view.App"
		}).placeAt("content");
	});
});