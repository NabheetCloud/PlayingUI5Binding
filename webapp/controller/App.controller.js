sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/library"
], function (Controller, mobileLibrary) {
	"use strict";

	return Controller.extend("DataBinding.DataBinding.controller.App", {
		formatMail: function(sFirstName, sLastName) {
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			return mobileLibrary.URLHelper.normalizeEmail(
				sFirstName + "." + sLastName + "@example.com",
				oBundle.getText("mailSubject", [sFirstName]),
				oBundle.getText("mailBody"));
		}
	});
});