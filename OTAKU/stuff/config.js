'use strict';
angular.module('sioWebApp.config', [])
		.constant('configuration', {
			name : 'Otaku Camera',
			titleColor : '#EBEBEB',
			version : '1.0.0',
            marketUrl: 'com.camapp.otaku',
			admobBannerKey : '',
			admobHomeKey : '',
			admobSaveKey : '',
			admobShareKey: '',
			admobBackToHomeKey: '',
			isProd: JSON.parse('@@isProd'),
			showAds: JSON.parse('false')
		}
);
