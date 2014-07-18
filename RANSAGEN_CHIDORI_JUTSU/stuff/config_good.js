'use strict';
angular.module('sioWebApp.config', [])
		.constant('configuration', {
			name : 'Saiyan Camera',
			title : 'Choose your \npicture',
			buttonBarColor : 'rgba(73, 73, 73, 0.13)',
			hasPapirus: JSON.parse('true'),
			titleColor : '#EBEBEB',
			version : '1.0.0',
            marketUrl: 'com.camerapps.saiyan',
			admobBannerKey : 'ca-app-pub-9064255794056383/2741614359',
			admobHomeKey : 'ca-app-pub-9064255794056383/4218347552',
			admobSaveKey : 'ca-app-pub-9064255794056383/8648547155',
			admobShareKey: 'ca-app-pub-9064255794056383/8354705559',
			admobBackToHomeKey: 'ca-app-pub-9064255794056383/2308171959',
			isProd: JSON.parse('@@isProd'),
			showAds: JSON.parse('true')
		}
);