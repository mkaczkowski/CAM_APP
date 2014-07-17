'use strict';
angular.module('sioWebApp.config', [])
		.constant('configuration', {
			name : 'Ninja Camera',
			title : 'Choose your \npicture',
			titleColor : '#69221E',
			version : '1.0.0',
            marketUrl: 'com.camapps.ninja',
			admobBannerKey : 'ca-app-pub-9064255794056383/6598770752',
			admobHomeKey : 'ca-app-pub-9064255794056383/8075503957',
			admobSaveKey : 'ca-app-pub-9064255794056383/2028970350',
			admobShareKey: 'ca-app-pub-9064255794056383/9552237155',
			admobBackToHomeKey: 'ca-app-pub-9064255794056383/3505703550',
			isProd: JSON.parse('@@isProd'),
			showAds: JSON.parse('true')
		}
);
