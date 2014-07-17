'use strict';
angular.module('sioWebApp.config', [])
		.constant('configuration', {
			name : 'Ghost Camera',
			title : 'Choose your \npicture',
			titleColor : '#EBEBEB',
			version : '1.0.0',
            marketUrl: 'com.camapps.ghost',
			admobBannerKey : 'ca-app-pub-9064255794056383/7935903152',
			admobHomeKey : 'ca-app-pub-9064255794056383/6459169952',
			admobSaveKey : 'ca-app-pub-9064255794056383/1889369552',
			admobShareKey: 'ca-app-pub-9064255794056383/9412636358',
			admobBackToHomeKey: 'ca-app-pub-9064255794056383/3366102753',
			isProd: JSON.parse('@@isProd'),
			showAds: JSON.parse('true')
		}
);
