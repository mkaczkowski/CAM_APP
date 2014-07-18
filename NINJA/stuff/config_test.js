'use strict';
angular.module('sioWebApp.config', [])
		.constant('configuration', {
			name : 'Ninja Camera',
			title : '',
			buttonBarColor : 'rgba(73, 73, 73, 0.13)',
			hasPapirus: JSON.parse('false'),
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
