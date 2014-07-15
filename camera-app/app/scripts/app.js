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
	'sioWebApp.mock',
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
	loadingService.hide = function(){ if(!loading) return; loading.hide(); };

	return loadingService;
});



sioWebApp.run(function($rootScope,configuration,$ionicPlatform,$timeout,logger,admobService,networkService) {

	var LOG = logger.getInstance('sioWebApp');

	$rootScope.app = configuration;

	$ionicPlatform.ready(function() {

		LOG.info("$ionicPlatform - ready");
		if(networkService.isOnline()){
//            notificationService.showInfo("online");
			admobService.init();
			admobService.createBanner();
			$timeout(function(){
				admobService.createInterstitial();
			},1000)
		}else{
//            notificationService.showInfo("offline");
		}
	});

	/*var LOG = logger.getInstance('sioWebApp');
	 LOG.log('This is a log');
	 LOG.info('This is a info');
	 LOG.warn('This is a warn');
	 //	LOG.error('This is a {0} error! {1}', [ 'big', 'just kidding' ]);
	 LOG.debug('This is a debug for line {0}', [ 8 ]);

	 var numbers = [10, 5, 100, 3, 1000];
	 LOG.debug(_.min(numbers));*/
});

