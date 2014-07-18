'use strict';
var sioWebApp = angular.module('sioWebApp', [
	'underscore',
	'ionic',
	'ui.router',
	'ngAnimate',
	'hmTouchEvents',
	'ngCordova.plugins.camera',
	'ngCordova.plugins.dialogs',
	'ngCordova.plugins.network',
	'ngCordova.plugins.socialSharing',
	'sioWebApp.config',
	'sioWebApp.common',
	'sioWebApp.navigation',
	'sioWebApp.home'
]);

sioWebApp.config(function(loggerProvider,configuration) {
	loggerProvider.enabled(!configuration.isProd);
});

sioWebApp.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
			.state('/', {
				url: '/',
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.state('crop', {
				url: '/crop',
				templateUrl: 'views/crop.html',
				controller: 'CropCtrl'
			})
			.state('canvas', {
				url: '/canvas',
				templateUrl: 'views/canvas.html',
				controller: 'CanvasCtrl'
			})
			.state('filters', {
				url: '/filters',
				templateUrl: 'views/filters.html',
				controller: 'FiltersCtrl'
			});

	$urlRouterProvider.otherwise("/");
})

sioWebApp.factory('loadingService', function($ionicLoading) {
	var loadingService = {};
	var loading = {};
	loadingService.show = function() { loading = $ionicLoading.show({ content: 'Processing...' }); };
	loadingService.hide = function(){ if(!loading) return; loading.hide(); loading = null; };
	return loadingService;
});

sioWebApp.run(function($rootScope,configuration,$ionicPlatform,$state,$timeout,logger,admobService) {
	var LOG = logger.getInstance('sioWebApp');
	$rootScope.app = configuration;
	$ionicPlatform.ready(function() {
		LOG.info("$ionicPlatform - ready");
		admobService.init();
		admobService.createBanner();
		$timeout(function(){
			admobService.showHomeAd();
		},1000)
	});

	$ionicPlatform.registerBackButtonAction(function () {
		console.info("state:"+$state.current.name)
		if ($state.current.name == '/'){
			navigator.app.exitApp();
		} else {
			window.history.back();
		}
	}, 100);
});