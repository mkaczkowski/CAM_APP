'use strict';
angular.module('sioWebApp.config', [])
		.constant('configuration', {
			name : 'Saiyan Camera',
			barStyle : 'bar-energized',
			version : '1.0.0',
            marketUrl: 'com.camerapps.saiyan',
			admobBannerKey : 'ca-app-pub-9064255794056383/2741614359',
			admobInterKey : 'ca-app-pub-9064255794056383/4218347552',
			admobInter2Key : 'ca-app-pub-9064255794056383/8648547155',
			isProd: JSON.parse('@@isProd')
		}
);
