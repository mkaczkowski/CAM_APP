'use strict';

/**
 * @ngdoc function
 * @name sioWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sioWebApp
 */
angular.module('sioWebApp.home').controller('HomeCtrl', function ($scope, $ionicPopup,$ionicLoading, $timeout,
		imageService, cameraService, mySharedService,
		sharingService, notificationService, networkService,
		configuration, logger) {

	var LOG = logger.getInstance('HomeCtrl');

	var loading;
	var show = function() { loading = $ionicLoading.show({ content: 'Processing...' }); };
	var hide = function(){ if(!loading) return; loading.hide(); };

	$scope.dataUrl;
	$scope.isCropped = false;
	$scope.isEmpty = true;
	$scope.isSelected = false;
	$scope.isExpanded = true;
	$scope.tmpOpacity = 1;
	$scope.isOpacityRangeVisible = false;

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

	/*$scope.hideToolbar = function(){
	 //mySharedService.prepForBroadcast(null);
	 $scope.isExpanded = false;
	 };

	 $scope.showToolbar = function(){
	 //mySharedService.prepForBroadcast(null);
	 $scope.isExpanded = true;
	 };*/


	$scope.showOpacityRange = function(){
		$scope.isOpacityRangeVisible = !$scope.isOpacityRangeVisible;
		if($scope.isOpacityRangeVisible){
			$scope.tmpOpacity = mySharedService.currentElementData.opacity;
		}
	};


	$scope.changeOpacity = function(value){
		mySharedService.changeOpacity(value);
	};

	$scope.saveCanvasToFile = function(successHandler){
		show();
		mySharedService.prepForBroadcast(null);
		$timeout(function(){

			$scope.imgToCanvas('canvas',function(canvas){
				$scope.dataUrl = canvas.toDataURL();
				if(!configuration.isProd){ hide(); window.open($scope.dataUrl) }
				else{
					imageService.saveCanvasToFile(canvas,
							function(msg){
								hide();
								if(successHandler){
									successHandler(canvas)
								}else{
									notificationService.savedConfirm(msg,
											function () {$scope.sharePicure()});
								}
							},function(err){
								hide();
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

	$scope.clearWhiteboard = function(){
		notificationService.confirm('Are you sure you want to clear?',
				function() {
					mySharedService.clearAll();
					$scope.isEmpty = true;
				});
	};

	$scope.getPicture = function(){
		cameraService.getPicture(function(imageData){
			mySharedService.clearAll();
			$scope.isEmpty = true;
			$scope.cropImage("data:image/jpeg;base64," + imageData);
		});
	};

	$scope.loadImage = function(){
		if(configuration.isProd){
			cameraService.loadImageFromLibrary(function(imageData){
				mySharedService.clearAll();
				$scope.isEmpty = true;
				$scope.cropImage(imageData);
			});
		}else{
			mySharedService.clearAll();
			$scope.isEmpty = true;
			$scope.cropImage("data/background.jpg");
		}
	};

	$scope.cropImage = function(imageData){
		$scope.isCropped = false;

		var canvas = angular.element(document.getElementById("canvasView"));
		canvas.hide();

		var cropView = angular.element(document.getElementById("cropView"));
		cropView.show();

		var cropContainer = angular.element(document.getElementById("cropContainer"));
		cropContainer.attr("src",imageData);

		cropContainer.cropbox({width: cropContainer.width(), height: cropContainer.height(), showControls:'always'})
				.on('cropbox', function( event, results, img ) {
					document.getElementById("pictureContainer").src = img.getDataURL();
					$scope.isCropped = true;
					canvas.show();
					cropView.hide();
				});
	};

	$scope.showFilters = function () {
		show();
		mySharedService.prepForBroadcast(null);
		$scope.imgToCanvas('canvas', function (canvas) {
			hide();
			$scope.dataUrl = canvas.toDataURL();
			document.getElementById("filteredContainer").src = $scope.dataUrl
			angular.element(document.getElementById("canvasView")).hide();
			angular.element(document.getElementById("filteredView")).show();
		});
	};

	$scope.filterCanvas = function (filterName) {
		var myimage = new Image();
		myimage.onload = function () {
			var filteredView = angular.element(document.getElementById("filteredView"));
			filteredView.html('<img id="filteredContainer" src=' + $scope.dataUrl + ' />');
			Caman('#filteredContainer', function () {
				this[filterName]();
				this.render(function(){
					hide();
				});
			});
		}
		show();
		myimage.src = $scope.dataUrl;
	};

	mySharedService.init();
	if(configuration.isProd) {
		notificationService.showInitPopup($scope.getPicture, $scope.loadImage);
	}else{
		document.getElementById("pictureContainer").src = "data/background.jpg";
	}


});
