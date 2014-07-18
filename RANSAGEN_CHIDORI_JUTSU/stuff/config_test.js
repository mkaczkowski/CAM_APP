'use strict';
angular.module('sioWebApp.config', [])
		.constant('configuration', {
			name : 'Saiyan Camera',
			title : 'Choose your \npicture',
			buttonBarColor : 'rgba(73, 73, 73, 0.13)',
			hasPapirus: JSON.parse('true'),
			titleColor : '#EBEBEB',
			version : '1.0.0',
            marketUrl: 'com.camerapp.saiyan',
			admobBannerKey : '',
			admobHomeKey : '',
			admobSaveKey : '',
			admobShareKey: '',
			admobBackToHomeKey: '',
			isProd: JSON.parse('false'),
			showAds: JSON.parse('false')
		}
);
