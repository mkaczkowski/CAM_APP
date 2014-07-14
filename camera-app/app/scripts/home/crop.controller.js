'use strict';

/**
 * @ngdoc function
 * @name sioWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sioWebApp
 */
angular.module('sioWebApp.home').controller('CropCtrl', function ($scope, notificationService, configuration, logger,$location, dataService, $timeout) {
	var LOG = logger.getInstance('CropCtrl');

	$scope.cropImage = function(imageData){

		var canvas = angular.element(document.getElementById("canvasView"));
		canvas.hide();

		var cropView = angular.element(document.getElementById("cropView"));
		cropView.show();

		var cropContainer = angular.element(document.getElementById("cropContainer"));
		cropContainer.attr("src",imageData);

		cropContainer.cropbox({width: cropContainer.width(), height: cropContainer.height(), showControls:'always'})
				.on('cropbox',$scope.resultHandler);
	};

	$scope.resultHandler = function( event, results, img ) {
		dataService.cropDataUrl = img.getDataURL();

		$timeout(function(){
			$location.path('/canvas')
		},100)

	}

	$scope.cropImage(dataService.pictureDataUrl);
});
