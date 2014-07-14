'use strict';

angular.module('sioWebApp.home').controller('MainCtrl', function ($scope, cameraService,mySharedService,configuration,logger,$state, dataService) {

	var LOG = logger.getInstance('MainCtrl');

	$scope.getPicture = function(){
		if(configuration.isProd) {
			cameraService.getPicture(function(imageData){
				mySharedService.clearAll();
				dataService.pictureDataUrl = "data:image/jpeg;base64," + imageData;
                $state.go('crop')
			});
		}else{
			dataService.pictureDataUrl = "data/background.jpg";
            $state.go('crop')
		}
	};

	$scope.loadImage = function(){
		if(configuration.isProd) {
			cameraService.loadImageFromLibrary(function(imageData){
				dataService.pictureDataUrl = imageData;
                $state.go('crop')
			});
		}else{
			dataService.pictureDataUrl = "data/background.jpg";
            $state.go('crop')
		}
	};


//	notificationService.showInitPopup($scope.getPicture, $scope.loadImage);
	/*if(configuration.isProd) {
		notificationService.showInitPopup($scope.getPicture, $scope.loadImage);
	}else{
		document.getElementById("pictureContainer").src = "data/background.jpg";
	}*/
});
