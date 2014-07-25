'use strict';
angular.module('sioWebApp.config', [])
		.constant('configuration', {
			name : 'Super Selfie',
			title : '',
			buttonBarColor : 'rgba(73, 73, 73, 0.13)',
			hasPapirus: JSON.parse('false'),
			titleColor : '#353535',
			version : '1.0.0',
            marketUrl: 'com.recapps.hero',
			admobBannerKey : '',
			admobHomeKey : 'ca-app-pub-9064255794056383/6717058354',
			admobSaveKey : '',
			admobShareKey: '',
			admobBackToHomeKey: '',
			isProd: JSON.parse('true'),
			showAds: JSON.parse('true')
		}
);