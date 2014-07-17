'use strict';
angular.module('sioWebApp.config', [])
		.constant('configuration', {
			name : 'Ghost Camera',
			title : 'Choose your \npicture',
			titleColor : '#EBEBEB',
			version : '1.0.0',
            marketUrl: 'com.camapp.ghost',
			admobBannerKey : '',
			admobHomeKey : '',
			admobSaveKey : '',
			admobShareKey: '',
			admobBackToHomeKey: '',
			isProd: JSON.parse('false'),
			showAds: JSON.parse('false')
		}
);
