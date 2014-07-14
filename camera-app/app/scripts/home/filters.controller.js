'use strict';

/**
 * @ngdoc function
 * @name sioWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sioWebApp
 */
angular.module('sioWebApp.home').controller('FiltersCtrl', function ($scope, notificationService, configuration, logger,dataService) {
	var LOG = logger.getInstance('FiltersCtrl');

	$scope.pictureUrl = dataService.alteredDataUrl;

/*	$scope.showFilters = function () {
		show();
		mySharedService.prepForBroadcast(null);
		$scope.imgToCanvas('canvas', function (canvas) {
			hide();
			$scope.dataUrl = canvas.toDataURL();
			document.getElementById("filteredContainer").src = $scope.dataUrl
			angular.element(document.getElementById("canvasView")).hide();
			angular.element(document.getElementById("filteredView")).show();
		});*/
//	};

	$scope.filterCanvas = function (filterName) {
		var myimage = new Image();
		myimage.onload = function () {
			var filteredView = angular.element(document.getElementById("filteredView"));
			filteredView.html('<img id="filteredContainer" src=' + $scope.pictureUrl + ' />');
			Caman('#filteredContainer', function () {
				this[filterName]();
				this.render(function(){
//					hide();
				});
			});
		}
//		$parent.show();
		myimage.src = $scope.pictureUrl;
	};

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