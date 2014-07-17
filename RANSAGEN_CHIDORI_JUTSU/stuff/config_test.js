'use strict';
angular.module('sioWebApp.config', [])
		.constant('configuration', {
			name : 'Saiyan Camera',
			title : 'Choose your \npicture',
			titleColor : '#EBEBEB',
			version : '1.0.0',
            marketUrl: 'com.camerapp.saiyan',
			admobBannerKey : '',
			admobHomeKey : '',
			admobSaveKey : '',
			admobShareKey: '',
			admobBackToHomeKey: '',
			isProd: JSON.parse('@@isProd'),
			showAds: JSON.parse('false')
		}
);
