'use strict';

/**
 * @ngdoc function
 * @name sioWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sioWebApp
 */
angular.module('sioWebApp.home').controller('CropCtrl', function ($scope, notificationService, configuration, logger,$state, dataService, $timeout) {
	var LOG = logger.getInstance('CropCtrl');


    $scope.crop;

	$scope.cropImage = function(imageData){

		var canvas = angular.element(document.getElementById("canvasView"));
		canvas.hide();

		var cropView = angular.element(document.getElementById("cropView"));
		cropView.show();

		var cropContainer = angular.element(document.getElementById("cropContainer"));
		cropContainer.attr("src",imageData);

		cropContainer.cropbox({width: cropContainer.width(), height: cropContainer.height(), showControls:'never', maxZoom: 2})
				.on('cropbox',$scope.resultHandler);

        $scope.crop = cropContainer.data('cropbox');
	};

	$scope.resultHandler = function( event, results, img ) {
		dataService.cropDataUrl = img.getDataURL();

		$timeout(function(){
            $state.go('canvas')
		},100)

	}

    $scope.zoomIn = function( ) {
        $scope.crop.zoomIn();
    }

    $scope.zoomOut = function( ) {
        $scope.crop.zoomOut();
    }

    $scope.rotate = function( ) {
        $scope.crop.rotateRight();
    }

    $scope.mirror = function( ) {
        $scope.crop.mirror();
    }
    $scope.complete = function( ) {
        $scope.crop.complete();
    }

    $scope.goBack = function() {
        window.history.back();
    };

	$scope.cropImage(dataService.pictureDataUrl);
});
