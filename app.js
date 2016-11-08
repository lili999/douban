
var douban = angular.module('doubanApp',['ngRoute','doubanApp.hotModule','detailModule']);

douban.config(['$routeProvider',function($routeProvider){
	
	$routeProvider
	.when('/:curl/:page?',{
		
		templateUrl:'hot/hot.html',
		controller:'hotController'
		
		
	})

	.otherwise({
		
		redirectTo:'/in_theaters'
	})
	
}])

