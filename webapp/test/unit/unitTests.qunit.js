/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zdashboardgcial/zdashboardgcial/MatrizDePotencial/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});