'use strict';
angular.module('sioWebApp.config', [])
		.constant('configuration', {
			name : 'Otaku Camera',
			title : '',
			buttonBarColor : 'rgba(73, 73, 73, 0.13)',
			hasPapirus: JSON.parse('false'),
			titleColor : '#353535',
			version : '1.2.0',
            marketUrl: 'com.camapps.otaku',
			isProd: JSON.parse('false'),
			showAds: JSON.parse('false')
		}
);