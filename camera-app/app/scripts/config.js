'use strict';
angular.module('sioWebApp.config', [])
		.constant('configuration', {
			name : 'Saiyan Camera',
			titleColor : '#EBEBEB',
			version : '1.0.0',
            marketUrl: 'com.camerapps.saiyan',
			admobBannerKey : '',
			admobInterKey : '',
			admobInter2Key : '',
			isProd: JSON.parse('true')
		}
);
