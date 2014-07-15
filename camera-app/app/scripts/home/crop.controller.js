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
        $scope.rotatePlugin.rotateRight();
    }

    $scope.mirror = function( ) {
        $scope.crop.mirror();
    }
    $scope.complete = function( ) {
//        $scope.crop.complete();
        dataService.cropDataUrl = $scope.cropPlugin.cropCurrentZone();
        $timeout(function(){
            $state.go('canvas')
        },100)
    }

    $scope.goBack = function() {
        window.history.back();
    };

    //$scope.cropImage(dataService.pictureDataUrl);

    $scope.cropPlugin;
    $scope.rotatePlugin;
    $scope.init = function(){

        var myimage = new Image();
        myimage.onload = function (data) {
            var cropCanvas = $('#cropCanvas');
            cropCanvas.html('<img id="cropContainer" src=' + dataService.pictureDataUrl + ' />');

            var clientWidth = document.body.clientWidth;
            var clientHeight = document.body.clientHeight - 70 - 45;
            $scope.dkrm = new Darkroom('#cropContainer', {
                // Size options
                minWidth: clientWidth,
                minHeight: 100,
                maxWidth: clientWidth,
                maxHeight: clientHeight,
                plugins: {
                    crop: {
                        minHeight: clientHeight / 2,
                        minWidth: clientWidth / 2,
                        ratio: clientWidth / clientHeight
                    }
                },
                init: function () {
                    $scope.rotatePlugin = this.getPlugin('rotate');
                    $scope.cropPlugin = this.getPlugin('crop');
                    $scope.cropPlugin.selectZone((clientWidth - 200) / 2, (clientHeight - 200) / 2, clientWidth, clientHeight);
//                $scope.cropPlugin.requireFocus();

                    this.addEventListener('image:rotate', function (data) {
                        var width = $(".upper-canvas").width();
                        var height = $(".upper-canvas").height();
                        $scope.cropPlugin.selectZone((width - 200) / 2, (height - 200) / 2, clientWidth, clientHeight);
                    });
                }
            });
        }
        myimage.src = dataService.pictureDataUrl;
    }

    $scope.init();
});

