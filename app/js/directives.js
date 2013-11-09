'use strict';

/* Directives */
var directives = angular.module('FireMote.directives', []);

directives.directive('appVersion', ['version', function(version) {
	return function(scope, elm, attrs) {
		elm.text(version);
	};
}]);
