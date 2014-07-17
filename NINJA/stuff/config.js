'use strict';
angular.module('sioWebApp.config', [])
		.constant('configuration', {
			name : 'Ninja Camera',
			title : 'Choose your \npicture',
			titleColor : '#69221E',
			version : '1.0.0',
            marketUrl: 'com.camapp.ninja',
			admobBannerKey : '',
			admobHomeKey : '',
			admobSaveKey : '',
			admobShareKey: '',
			admobBackToHomeKey: '',
			isProd: JSON.parse('false'),
			showAds: JSON.parse('false')
		}
);
