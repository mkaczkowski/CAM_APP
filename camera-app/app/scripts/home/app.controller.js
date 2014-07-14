'use strict';
angular.module('sioWebApp.home').controller('AppCtrl', function ($scope,configuration, networkService, logger, $ionicLoading) {

	var LOG = logger.getInstance('AppCtrl');

	var loading;
	var show = function() { loading = $ionicLoading.show({ content: 'Processing...' }); };
	var hide = function(){ if(!loading) return; loading.hide(); };

//	$scope.dataUrl;

	$scope.rateUs = function(){
		networkService.openMarketURL(configuration.marketUrl)
	};

});