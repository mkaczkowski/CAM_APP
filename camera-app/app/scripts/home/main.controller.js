'use strict';

angular.module('sioWebApp.home').controller('MainCtrl', function ($scope, cameraService,mySharedService,configuration,logger,$state, dataService) {

	var LOG = logger.getInstance('MainCtrl');

	$scope.getPicture = function(){

		LOG.info("getPicture try:"+configuration.isProd);
		if(configuration.isProd) {
			cameraService.getPicture(function(imageData){
//				console.info("imageData1:"+imageData);
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
//				console.info("imageData2:"+imageData);
				dataService.pictureDataUrl = imageData;
                $state.go('crop')
			});
		}else{
			dataService.pictureDataUrl = "data/background.jpg";
            $state.go('crop')
		}
	};
});
