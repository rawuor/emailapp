//js stuff
angular.module ('EmailApp', ['ngRoute'].config(function, ()$routeProvider){
	'use strict';
	//Configure URLs
	$routeProvider
	.when('/inbox', {
		templateUrl: 'views/inbox.html',
		controller: 'InboxCtrl'
	})
	.otherwise({
		//default
		redirectTo: '/inbox'
	});
})