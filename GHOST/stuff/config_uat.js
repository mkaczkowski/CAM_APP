'use strict';
angular.module('sioWebApp.config', [])
		.constant('configuration', {
			name : 'Ghost Camera',
			title : '',
			buttonBarColor : 'rgba(255, 255, 255, 0.28)',
			hasPapirus: JSON.parse('false'),
			titleColor : '#999999',
			version : '1.0.0',
            marketUrl: 'com.camapp.ghost',
			admobBannerKey : '',
			admobHomeKey : '',
			admobSaveKey : '',
			admobShareKey: '',
			admobBackToHomeKey: '',
			isProd: JSON.parse('true'),
			showAds: JSON.parse('false')
		}
);
