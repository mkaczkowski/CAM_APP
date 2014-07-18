'use strict';
angular.module('sioWebApp.config', [])
		.constant('configuration', {
			name : 'Ghost Camera',
			title : '',
			buttonBarColor : 'rgba(255, 255, 255, 0.28)',
			hasPapirus: JSON.parse('false'),
			titleColor : '#999999',
			version : '1.0.0',
            marketUrl: 'com.camapps.ghost',
			admobBannerKey : 'ca-app-pub-9064255794056383/7935903152',
			admobHomeKey : 'ca-app-pub-9064255794056383/6459169952',
			admobSaveKey : 'ca-app-pub-9064255794056383/1889369552',
			admobShareKey: 'ca-app-pub-9064255794056383/9412636358',
			admobBackToHomeKey: 'ca-app-pub-9064255794056383/3366102753',
			isProd: JSON.parse('true'),
			showAds: JSON.parse('true')
		}
);
