'use strict';

angular.module('sioWebApp.home').controller('MainCtrl', function ($scope, cameraService,mySharedService,configuration,logger,$location, dataService) {

	var LOG = logger.getInstance('MainCtrl');

	$scope.getPicture = function(){
		if(configuration.isProd) {
			cameraService.getPicture(function(imageData){
				mySharedService.clearAll();
				dataService.pictureDataUrl = "data:image/jpeg;base64," + imageData;
				$location.path('/crop');
			});
		}else{
			dataService.pictureDataUrl = "data/background.jpg";
			$location.path('/crop')
		}
	};

	$scope.loadImage = function(){
		if(configuration.isProd) {
			cameraService.loadImageFromLibrary(function(imageData){
				dataService.pictureDataUrl = imageData;
				$location.path('/crop')
			});
		}else{
			dataService.pictureDataUrl = "data/background.jpg";
			$location.path('/crop')
		}
	};


//	notificationService.showInitPopup($scope.getPicture, $scope.loadImage);
	/*if(configuration.isProd) {
		notificationService.showInitPopup($scope.getPicture, $scope.loadImage);
	}else{
		document.getElementById("pictureContainer").src = "data/background.jpg";
	}*/
});
