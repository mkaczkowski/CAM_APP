'use strict';

/**
 * @ngdoc function
 * @name sioWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sioWebApp
 */
angular.module('sioWebApp.home').controller('CanvasCtrl', function ($scope, $timeout, mySharedService,
		notificationService, configuration, logger, dataService, $location, imageService, sharingService) {

	var LOG = logger.getInstance('CanvasCtrl');

	$scope.isEmpty = true;
	$scope.isSelected = false;
	$scope.isExpanded = true;
	$scope.tmpOpacity = 1;
	$scope.isOpacityRangeVisible = false;

	$scope.pictureUrl = dataService.cropDataUrl;

	$scope.$on('handleBroadcast', function() {
		$scope.isSelected = mySharedService.message;
		if(mySharedService.message){
			$scope.isEmpty = false;
			if($scope.isOpacityRangeVisible){
				$scope.tmpOpacity = mySharedService.currentElementData.opacity;
			}
		}else{
			$scope.isOpacityRangeVisible = false;
		}
	});

	$scope.resetElement = function(){
		mySharedService.resetElement();
	};

	$scope.removeElement = function(){
		mySharedService.removeElement();
		$scope.isEmpty = (angular.element(".drag-and-drop").length == 0);
	};

	$scope.moveUp = function(){
		mySharedService.moveUp();
	};

	$scope.moveDown = function(){
		mySharedService.moveDown();
	};

	$scope.mirror = function(){
		mySharedService.mirror();
	};


	$scope.showOpacityRange = function(){
		$scope.isOpacityRangeVisible = !$scope.isOpacityRangeVisible;
		if($scope.isOpacityRangeVisible){
			$scope.tmpOpacity = mySharedService.currentElementData.opacity;
		}
	};

	$scope.changeOpacity = function(value){
		mySharedService.changeOpacity(value);
	};

	$scope.clearWhiteboard = function(){
		notificationService.confirm('Are you sure you want to clear?',
				function() {
					mySharedService.clearAll();
					$scope.isEmpty = true;
				});
	};

	$scope.showFilters = function () {
		mySharedService.prepForBroadcast(null);
		$scope.imgToCanvas('canvas', function (canvas) {
			dataService.alteredDataUrl = canvas.toDataURL();

			$timeout(function(){
				$location.path("/filters")
			},100);

		});
	};


	$scope.saveCanvasToFile = function(successHandler){
//		show();
		mySharedService.prepForBroadcast(null);
		$timeout(function(){
			$scope.imgToCanvas('canvas',function(canvas){
				$scope.dataUrl = canvas.toDataURL();
				if(!configuration.isProd){  window.open($scope.dataUrl) }
				else{
					imageService.saveCanvasToFile(canvas,
							function(msg){
//								hide();
								if(successHandler){
									successHandler(canvas)
								}else{
									notificationService.savedConfirm(msg,
											function () {$scope.sharePicure()});
								}
							},function(err){
//								hide();
								LOG.error("saveCanvasToFile err:{0}",[err])
								notificationService.showError("Ooops. Something went wrong.")
							});
				}
			});
		},500);
	};

	$scope.imgToCanvas = function (canvasId,successHandler) {
		html2canvas( [ document.getElementById(canvasId) ], {
			onrendered: function (canvas) {
				successHandler(canvas)
			}
		});
	};

	$scope.sharePicure = function(){
		$scope.saveCanvasToFile(function(canvas){
			sharingService.shareViaFacebook(canvas.toDataURL());
		});
	};

	mySharedService.init();
});