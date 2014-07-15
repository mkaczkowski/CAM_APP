'use strict';

/**
 * @ngdoc function
 * @name sioWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sioWebApp
 */
angular.module('sioWebApp.home').controller('FiltersCtrl', function ($scope, notificationService, configuration, logger,dataService,
		loadingService,imageService,sharingService) {
	var LOG = logger.getInstance('FiltersCtrl');

	$scope.pictureUrl = dataService.alteredDataUrl;

	$scope.filterCanvas = function (filterName) {
		loadingService.show();
		var myimage = new Image();
		myimage.onload = function (data) {
            var dataUrl = data.currentTarget.attributes["0"].nodeValue;
			var filteredCanvas = angular.element(document.getElementById("filteredCanvas"));
            filteredCanvas.html('<img id="filteredContainer" src=' + dataUrl + ' />');
			Caman('#filteredContainer', function () {
				this[filterName]();
				this.render(function(){
					loadingService.hide();
				});
			});
		}
		myimage.src = $scope.pictureUrl;
	};

	$scope.saveCanvasToFile = function(successHandler) {
		imageService.saveCanvasToFile('filteredCanvas',function(canvas,path){
			if (successHandler) {
				successHandler(canvas)
			} else {
				notificationService.savedConfirm(path, function () { $scope.sharePicure() });
			}
		})
	}

	$scope.sharePicure = function(){
		$scope.saveCanvasToFile(function(canvas){
			sharingService.shareViaFacebook(canvas.toDataURL());
		});
	};

    $scope.goBack = function() {
        window.history.back();
    };

    $scope.filterCanvas("pinhole");
});

angular.module('sioWebApp.home').directive('carouselfilters', function() {
	return {
		restrict: 'E',
		replace: true,
		transclude: true,
		template: '<div class="myCarousel2" style="width: 100%;" ng-transclude></div>',
		link: function(scope, element) {

			element.owlCarousel({
				jsonPath : "data/filters.json",
				jsonSuccess : customDataSuccess,
				singleItem: false,
				lazyLoad : true,
				navigation : true,
				pagination: false,
				items : 4
			});

			function customDataSuccess(data){
				var content = "";
				for(var i in data["filters"]){
					var name = data["filters"][i].name;
					content += "<div class='item item-light' style='padding: 7px; height: 69px;line-height: 69px;text-align: center;'><button class='thumb-filter' data-filter='"+name+"' style='width: 100%; height: 100%;'>"+name+"</button></div>";
				}
				element.html(content);
				applyHandlers();
			}

			function applyHandlers() {
				angular.element(".thumb-filter").bind('click', function (event) {
					var targetElement = angular.element(event.target);
					var filterName = targetElement.attr("data-filter");
					scope.filterCanvas(filterName);

				})
			}
		}
	};
});