'use strict';
angular.module('sioWebApp.config', [])
		.constant('configuration', {
			name : 'Super Selfie',
			title : '',
			buttonBarColor : 'rgba(73, 73, 73, 0.13)',
			hasPapirus: JSON.parse('false'),
			titleColor : '#353535',
			version : '1.0.0',
            marketUrl: 'com.recapps.selfie',
			admobBannerKey : '',
			admobHomeKey : 'ca-app-pub-9064255794056383/4140525158',
			admobSaveKey : '',
			admobShareKey: '',
			admobBackToHomeKey: '',
			isProd: JSON.parse('true'),
			showAds: JSON.parse('true')
		}
);