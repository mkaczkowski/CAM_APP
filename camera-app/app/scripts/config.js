'use strict';
angular.module('sioWebApp.config', [])
		.constant('configuration', {
			name : 'Dragon Camera0',
			barStyle : 'bar-energized',
			version : '1.0.0',
            marketUrl: 'com.dragon.camera0',
			admobBannerKey : 'ca-app-pub-6869992474017983/9375997553',
			admobInterKey : 'ca-app-pub-6869992474017983/9375997553',
			admobInter2Key : 'ca-app-pub-6869992474017983/9375997553',
			/*Ad unit ID: ca-app-pub-9064255794056383/2741614359
			Ad unit ID: ca-app-pub-9064255794056383/4218347552
			Ad unit ID: ca-app-pub-9064255794056383/8648547155*/
			isProd: JSON.parse('true')
		}
);
