'use strict';
angular.module('sioWebApp.config', [])
		.constant('configuration', {
			name : 'Ninja Camera',
			titleColor : '#EBEBEB',
			version : '1.0.0',
            marketUrl: 'com.camapp.ninja',
			admobBannerKey : '',
			admobHomeKey : '',
			admobSaveKey : '',
			admobShareKey: '',
			admobBackToHomeKey: '',
			isProd: JSON.parse('@@isProd'),
			showAds: JSON.parse('false')
		}
);
