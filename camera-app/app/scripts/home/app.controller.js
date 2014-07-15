'use strict';
angular.module('sioWebApp.home').controller('AppCtrl', function ($scope,configuration, networkService, logger, $ionicLoading) {

	var LOG = logger.getInstance('AppCtrl');
	$scope.rateUs = function(){
		networkService.openMarketURL(configuration.marketUrl)
	};

});